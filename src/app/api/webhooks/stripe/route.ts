import { upsertPaymentDetails } from "@/actions/stripe";
import { initializeEmailServices } from "@/email/init/emailServiceInit";
import { NextResponse } from "next/server";
import moment from "moment";
import { sendInvoiceEmail, sendPurchaseEmail } from "@/email/emailSender";
import { appConfig } from "@/config/appConfig";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

initializeEmailServices();
async function POST(request: Request) {
  const event = await request.json();
  try {
    switch (event.type) {
      case "checkout.session.completed":
        if (event.data.object.mode === "payment") {
          const { id } = await upsertPaymentDetails({
            paymentId: event.data.object.payment_intent,
            email: event.data.object.customer_details.email,
            phone: event.data.object.customer_details.phone,
            name: event.data.object.customer_details.name,
            tax: String(Number(event.data.object.total_details.amount_tax) / 100),
            customerId: event.data.object.customer,
            status: event.data.object.payment_status,
            type: event.data.object.mode,
            amount: String(Number(event.data.object.amount_total) / 100),
          });

          if (event.data.object.payment_status === "paid") {
            const tax = Number(event.data.object.total_details.amount_tax) / 100;
            const amountBeforeTax = Number(Number(event.data.object.amount_total) / 100) - tax;
            await sendPurchaseEmail({
              name: event.data.object.customer_details.name,
              email: event.data.object.customer_details.email,
              companyName: appConfig.appName,
              total: `${appConfig.currencySymbol}${Number(Number(event.data.object.amount_total) / 100)}`,
              orderId: id,
              startEndPeriod: "",
              date: moment.unix(event.data.object.created).utc().format("MMMM D, Y"),
              description: event.data.object?.metadata?.productName,
              amount: `${appConfig.currencySymbol}${amountBeforeTax}`,
              tax: `${appConfig.currencySymbol}${tax}`,
              actionUrl: "",
              supportUrl: `mailto:${appConfig.supportEmail}`,
              websiteLogoURL: appConfig.logo,
            });
          }
        }
        break;
      case "invoice.paid":
        const { id } = await upsertPaymentDetails({
          paymentId: event.data.object.id,
          email: event.data.object.customer_email,
          name: event.data.object.customer_name,
          phone: event.data.object.customer_phone,
          tax: String(Number(event.data.object.tax) / 100),
          invoice_url: event.data.object.hosted_invoice_url,
          customerId: event.data.object.customer,
          status: event.data.object.status,
          type: event.data.object.lines?.data?.[0].type,
          amount: String(Number(event.data.object.amount_paid) / 100),
          periodStart: moment.unix(event.data.object.lines?.data?.[0].period.start).utc().format("Y-MM-DD hh:mm:ss"),
          periodEnd: moment.unix(event.data.object.lines?.data?.[0].period.end).utc().format("Y-MM-DD hh:mm:ss"),
        });

        const tax = Number(event.data.object.tax) / 100;
        const amountBeforeTax = Number(Number(event.data.object.amount_paid) / 100) - tax;

        const formatPeriod = `${moment.unix(event.data.object.lines?.data?.[0].period.start).utc().format("MMMM D")} - ${moment
          .unix(event.data.object.lines?.data?.[0].period.end)
          .utc()
          .format("MMMM D, Y")}`;

        await sendInvoiceEmail({
          name: event.data.object.customer_name,
          email: event.data.object.customer_email,
          companyName: appConfig.appName,
          total: `${appConfig.currencySymbol}${Number(event.data.object.amount_paid) / 100}`,
          orderId: id,
          startEndPeriod: formatPeriod,
          date: "",
          description: event.data.object?.lines?.data?.[0]?.description,
          amount: `${appConfig.currencySymbol}${amountBeforeTax}`,
          tax: `${appConfig.currencySymbol}${tax}`,
          actionUrl: event.data.object.hosted_invoice_url,
          supportUrl: `mailto:${appConfig.supportEmail}`,
          websiteLogoURL: appConfig.logo,
        });

        break;
      case "payment_intent.payment_failed":
        // OneTime Payment Failed: Notify the customer about the failed payment and encourage them to update payment details.
        break;
      case "invoice.payment_failed":
        // Subscription Payment Failed: Notify the customer about the failed payment and encourage them to update payment details.
        break;
      case "invoice.upcoming":
        // Invoice Upcoming: Notify the customer about an upcoming invoice, providing details and the due date.
        break;
      case "customer.subscription.updated":
        const subscriptionStatus = event.data.object.status;

        if (subscriptionStatus === "active") {
          // Send an email with subscription details, next billing date, and a link to manage their subscription
        } else if (subscriptionStatus === "canceled") {
          // Send an email notifying the user that their subscription has been canceled.
          // Include the cancellation date, remaining access (if any), and a link to re-subscribe.
        } else if (subscriptionStatus === "incomplete") {
          // Send an email informing the user that their payment failed.
          // Provide a link to update their payment information and retry the payment.
        } else if (subscriptionStatus === "incomplete_expired") {
          // Send an email notifying the user that their subscription has expired due to incomplete payment.
          // Include a link to start the subscription process again.
        } else if (subscriptionStatus === "past_due") {
          // Send an email reminding the user to update their payment information.
          // Mention the failed payment attempt and provide a link to update payment methods.
        } else if (subscriptionStatus === "paused") {
          // Send an email informing the user that their subscription is paused.
          // Include details on when the subscription will resume or how to un-pause it.
        } else if (subscriptionStatus === "trialing") {
          // Send an email notifying the user that their free trial is active.
          // Include the trial end date and a link to upgrade or provide payment details.
        } else if (subscriptionStatus === "unpaid") {
          // Send an email notifying the user that their subscription is unpaid and has been suspended.
          // Provide a link to update payment methods and resume their subscription.
        }
        break;
      case "customer.subscription.deleted":
        // Subscription Deletion: Inform the customer that their subscription has been deleted.
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 });
  }
}

export { POST };
