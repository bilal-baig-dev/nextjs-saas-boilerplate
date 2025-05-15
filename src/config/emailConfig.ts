import { appConfig } from "./appConfig";

interface EmailConfig {
  fromEmail: string;
  defaultProvider: string;
  providers: {
    [key: string]: {
      apiKey: string;
      domain?: string;
    };
  };
}

export const emailConfig: EmailConfig = {
  fromEmail: `${appConfig.appName} <${process.env.EMAIL_FROM as string}>`,
  defaultProvider: "resend",
  providers: {
    resend: {
      apiKey: process.env.RESEND_API_KEY || "",
    },
    mailgun: {
      apiKey: process.env.MAILGUN_API_KEY || "",
      domain: process.env.MAILGUN_DOMAIN || "",
    },
  },
};

export const getEmailConfig = (): EmailConfig => {
  return emailConfig;
};
