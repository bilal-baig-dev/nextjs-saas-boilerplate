import { SiteConfig } from "@/interfaces";

export const siteConfig: SiteConfig = {
  maintenanceMode: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true",
  comingSoonMode: process.env.NEXT_PUBLIC_COMING_SOON_MODE === "true",
  waitlistMode: process.env.NEXT_PUBLIC_WAITLIST_MODE === "true",
  notificationBar: process.env.NEXT_PUBLIC_NOTIFICATION_BAR === "true",
};
