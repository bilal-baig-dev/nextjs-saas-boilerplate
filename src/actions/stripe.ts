"use server";
import { appConfig } from "@/config/appConfig";
import prisma from "@/config/db/prisma";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const { BASE_URL } = process.env;

export async function createCheckoutSession(priceID: string) {
  try {
    let priceObject;
    if (appConfig.stripePaymentMode !== "payment") {
      const { monthly = [], yearly = [] } = appConfig.recurring;
      priceObject = [...monthly, ...yearly].find((price) => price.priceID === priceID);
    } else {
      priceObject = appConfig.onetime.find((price) => price.priceID === priceID);
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceObject?.priceID,
          quantity: priceObject?.quantity,
        },
      ],
      metadata: {
        productName: "Your Product Title",
      },
      discounts: priceObject?.discounts,
      mode: appConfig.stripePaymentMode as "payment" | "subscription",
      success_url: `${BASE_URL}/thank-you`,
      cancel_url: `${BASE_URL}`,
    });
    return session.url;
  } catch (error: any) {
    console.log(error, "SERVER ERROR WHILE CREATING STRIPE CHECKOUT SESSION");
    throw error;
  }
}

export async function upsertPaymentDetails({
  paymentId,
  status,
  customerId,
  type,
  email,
  phone,
  tax,
  amount,
  periodStart,
  periodEnd,
  name,
  invoice_url,
}: {
  paymentId: string;
  status?: string;
  customerId?: string;
  type?: string;
  email?: string;
  name?: string;
  invoice_url?: string;
  amount?: string;
  periodStart?: string;
  periodEnd?: string;
  tax?: string;
  phone?: string;
}) {
  let existingSubscription = await prisma.payments.findUnique({
    where: { paymentID: paymentId },
  });

  if (existingSubscription) {
    await prisma.payments.update({
      where: { id: existingSubscription.id },
      data: {
        status: status,
        updatedAt: new Date(),
        periodStart,
        periodEnd,
        amount: amount as string,
        type,
      },
    });
  } else {
    existingSubscription = await prisma.payments.create({
      data: {
        paymentID: paymentId,
        customerID: (customerId as string) || "",
        status: status,
        type,
        email,
        amount: amount as string,
        periodStart,
        periodEnd,
        name,
        invoice_url,
        phone,
        tax,
      },
    });
  }

  return { upsert: true, id: existingSubscription.id };
}

export async function upsertCustomerDetailsById({ paymentId, email }: { paymentId: string; email?: string }) {
  const existingSubscription = await prisma.payments.findUnique({
    where: { paymentID: paymentId },
  });

  if (existingSubscription) {
    // If it exists, update it
    await prisma.payments.update({
      where: { id: existingSubscription.id },
      data: {
        email,
        updatedAt: new Date(),
      },
    });
  } else {
    // If it doesn't exist, create a new one
    await prisma.payments.create({
      data: {
        paymentID: paymentId,
        email,
      },
    });
  }

  return { upsert: true };
}
