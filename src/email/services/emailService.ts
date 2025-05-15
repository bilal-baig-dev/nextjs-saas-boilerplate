import { Resend } from "resend";
import Mailgun from "mailgun.js";
import formData from "form-data";

interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  html?: string;
  text?: string;
  react?: React.ReactNode;
}

interface EmailProvider {
  sendEmail(options: EmailOptions): Promise<void>;
}

class ResendProvider implements EmailProvider {
  private resend: Resend;

  constructor(apiKey: string) {
    this.resend = new Resend(apiKey);
  }

  async sendEmail(options: EmailOptions): Promise<void> {
    await this.resend.emails.send(options as any);
  }
}

class MailgunProvider implements EmailProvider {
  private mg: ReturnType<Mailgun["client"]>;
  private domain: string;
  constructor(apiKey: string, domain: string) {
    const mailgun = new Mailgun(formData);
    this.mg = mailgun.client({
      username: "api",
      key: apiKey,
    });
    this.domain = domain;
  }

  async sendEmail(options: EmailOptions): Promise<void> {
    await this.mg.messages.create(this.domain, {
      // Extracts the domain from "from"
      from: options.from,
      to: [options.to],
      subject: options.subject,
      html: options.html as string,
    });
  }
}

interface EmailServiceConfig {
  defaultProvider: string;
  providers: {
    [key: string]: {
      apiKey: string;
      domain?: string;
    };
  };
}

export class EmailService {
  private providers: Map<string, EmailProvider>;
  private defaultProvider: string;

  constructor(config: EmailServiceConfig) {
    this.providers = new Map();
    this.defaultProvider = config.defaultProvider;

    for (const [name, settings] of Object.entries(config.providers)) {
      if (name === "resend") {
        this.providers.set(name, new ResendProvider(settings.apiKey));
      } else if (name === "mailgun") {
        if (!settings.domain) {
          throw new Error("Mailgun provider requires a domain");
        }
        this.providers.set(name, new MailgunProvider(settings.apiKey, settings.domain));
      } else {
        throw new Error(`Unsupported email provider: ${name}`);
      }
    }
  }

  async sendEmail(options: EmailOptions, providerName?: string): Promise<void> {
    const provider = this.providers.get(providerName || this.defaultProvider);
    if (!provider) {
      throw new Error(`Email provider "${providerName || this.defaultProvider}" not found`);
    }
    await provider.sendEmail(options);
  }
}

let emailService: EmailService;

export const initializeEmailService = (config: EmailServiceConfig): void => {
  emailService = new EmailService(config);
};

export const getEmailService = (): EmailService => {
  if (!emailService) {
    throw new Error("Email service has not been initialized");
  }
  return emailService;
};
