import { getEmailConfig } from "@/config/emailConfig";
import { initializeEmailService } from "@/email/services/emailService";

export const initializeEmailServices = async () => {
  const config = getEmailConfig();
  initializeEmailService(config);
};
