import { OrderEmailProps } from "@/interfaces";
import { getEmailConfig } from "../config/emailConfig";
import { getEmailService } from "./services/emailService";
import EmailVerification from "./templates/verification-email";
import PurchaseEmail from "./templates/purchase-email";
import InvoiceEmail from "./templates/subscription-invoice";
import { appConfig } from "@/config/appConfig";
const config = getEmailConfig();

export const sendVerificationEmail = async (to: string, activationLink: string, providerName?: string) => {
  return getEmailService().sendEmail({
    from: config.fromEmail,
    to,
    subject: "To complete your registration, please confirm your email address by clicking the 'Verify your email' button below.",
    react: EmailVerification({ email: to, activationLink: activationLink }),
  });
};

export const sendPurchaseEmail = async (props: OrderEmailProps) => {
  return getEmailService().sendEmail({
    from: config.fromEmail,
    to: props.email,
    subject: `${appConfig.appName} - Thank You for Your Purchase: Here's What's Next`,
    react: PurchaseEmail({
      ...props,
    }),
  });
};

export const sendInvoiceEmail = async (props: OrderEmailProps) => {
  return getEmailService().sendEmail({
    from: config.fromEmail,
    to: props.email,
    subject: `${appConfig.appName} - Thank You for Your Purchas. Your ${props.description} Subscription is Active`,
    react: InvoiceEmail({
      ...props,
    }),
  });
};
