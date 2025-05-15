import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { siteConfig } from "@/config";
import Stripe from "stripe";
import { RateLimiter } from "limiter";
import { cleanIPRequestCounts } from "./lib/utils";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const APP_API_KEY = process.env.APP_API_KEY!;

// cleanIPRequestCounts();

export async function middleware(request: NextRequest) {
  const ip = request.ip ?? "unknown";

  // 1. Global Rate Limiting (toggle by uncommenting)
  // Uncomment this block to enable global rate limiting
  /*
  const globalLimitResult = await handleGlobalRateLimiting();
  if (globalLimitResult) return globalLimitResult;
  */

  // 2. IP-based Rate Limiting (toggle by uncommenting)
  /*
  const ipLimitResult = handleIPRateLimiting(ip);
  if (ipLimitResult) return ipLimitResult;
  */

  // 3. Request Validation
  const userAgent = request.headers.get("user-agent");
  if (!userAgent || userAgent.toLowerCase().includes("bot")) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  // 4. Size Limiting for POST requests
  if (request.method === "POST") {
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 1000000) {
      // 1MB limit
      return new NextResponse("Payload Too Large", { status: 413 });
    }
  }

  if (request.nextUrl.pathname.startsWith("/api/auth")) {
    // If it's a NextAuth route, don't apply the middleware
    return NextResponse.next();
  }
  // Check if the request is for an API route
  if (request.nextUrl.pathname.startsWith("/api")) {
    // If it's not the Stripe webhook route, handle authorization
    if (request.nextUrl.pathname !== "/api/webhooks/stripe") {
      const authResult = handleAuthorization(request);
      if (authResult) return authResult;
    }
    // If it is the Stripe webhook route, handle verification
    else {
      const stripeResult = await handleStripeWebHookVerification(request);
      if (stripeResult) return stripeResult;
    }
  }

  // For non-API routes, handle site mode
  const siteModeResult = await handleSiteMode(request);
  if (siteModeResult) return siteModeResult;

  return NextResponse.next();
}

function handleAuthorization(request: NextRequest) {
  // Get the Authorization header
  const authHeader = request.headers.get("Authorization");
  console.log({ authHeader });
  // Check if the Authorization header contains the API key
  if (!authHeader || authHeader !== `${APP_API_KEY}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
}

async function handleSiteMode(request: NextRequest) {
  if (siteConfig.maintenanceMode || siteConfig.comingSoonMode || siteConfig.waitlistMode) {
    if (request.nextUrl.pathname !== "/") {
      const url = new URL("/", request.url);
      return NextResponse.redirect(url, 307);
    }
  }
}

async function handleStripeWebHookVerification(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const sig = req.headers.get("stripe-signature") as string;
    try {
      const event = await stripe.webhooks.constructEventAsync(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET!);
      // If verification succeeds, attach the event to the request
      (req as any).stripeEvent = event;
      return NextResponse.next();
    } catch (err: any) {
      console.error("Stripe webhook signature verification failed:", err.message);
      return new NextResponse(`Webhook Error: ${err.message}`, { status: 401 });
    }
  } catch (error) {
    console.error("Error reading stripe webhook request body:", error);
    return new NextResponse("Error reading request body", { status: 400 });
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|images|.well-known|favicon.ico).*)", "/api/:path*"],
};
