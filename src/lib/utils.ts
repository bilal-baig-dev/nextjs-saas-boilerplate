import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import crypto from "crypto";
import { ReadonlyURLSearchParams } from "next/navigation";
import { RateLimiter } from "limiter";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  const parsedDate = new Date(dateString);

  const options: { [key: string]: string } = { year: "numeric", month: "long", day: "numeric" };

  const formattedDate = parsedDate.toLocaleDateString("en-US", options);

  return formattedDate;
}

export function paginate<T>(items: T[], page: number, pageSize: number): { results: T[]; total: number } {
  const total = items.length;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const results = items.slice(startIndex, endIndex);

  return { results, total };
}

export function getDetailsByURLSearchParams(currentSearchParams: ReadonlyURLSearchParams) {
  const tags = currentSearchParams?.getAll("tags");
  const search = currentSearchParams?.get("q");

  return { tags, search };
}

export function getSearchQuery(query: string) {
  if (Array.isArray(query)) {
    return query[0];
  } else if (typeof query === "string") {
    return query;
  } else {
    return ""; // or throw an error, depending on your use case
  }
}

export function getBlogURLQueryParams({
  newSearch,
  currentSearchParams,
  tag,
  isRemoveTag,
  clearSearch,
}: {
  currentSearchParams: ReadonlyURLSearchParams;
  newSearch?: string;
  tag?: string;
  isRemoveTag?: boolean;
  clearSearch?: boolean;
}): URLSearchParams {
  const params = new URLSearchParams(currentSearchParams.toString());

  const tags = currentSearchParams.getAll("tags");
  params.delete("tags");
  tags.filter((el) => tag !== el).forEach((queryTag) => params.append("tags", queryTag));
  tag && !isRemoveTag && params.append("tags", tag);

  if (!clearSearch) {
    if (newSearch) {
      params.set("q", newSearch);
    } else {
      const currentQ = params.get("q");
      if (currentQ) {
        params.set("q", currentQ);
      }
    }
  } else {
    params.delete("q");
  }

  return params;
}

export function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}

// Create a rate limiter: 100 requests per minute
const limiter = new RateLimiter({
  tokensPerInterval: 100,
  interval: "minute",
  fireImmediately: true,
});

// In-memory store for IP-based rate limiting
const ipRequestCounts = new Map<string, number>();

export async function handleGlobalRateLimiting() {
  const remainingRequests = await limiter.removeTokens(1);
  if (remainingRequests < 0) {
    return new Response("Too Many Requests", { status: 429 });
  }
  return null; // Proceed if not rate-limited
}

export function handleIPRateLimiting(ip: string) {
  const requestCount = ipRequestCounts.get(ip) || 0;
  if (requestCount > 50) {
    return new Response("Too Many Requests from this IP", { status: 429 });
  }
  ipRequestCounts.set(ip, requestCount + 1);
  return null; // Proceed if not rate-limited
}

// Clean up IP request counts every minute
export function cleanIPRequestCounts() {
  setInterval(() => {
    ipRequestCounts.clear();
  }, 60000);
}
