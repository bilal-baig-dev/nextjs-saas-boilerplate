import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { LoaderStyles } from "@/lib/constants";
import { ThemeProvider } from "@/providers/theme/theme-provider";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ComingSoon from "@/components/ComingSoon";
import MaintenanceMode from "@/components/MaintenceMode";
import WaitList from "@/components/WaitList";
import { siteConfig } from "@/config";
import { appConfig } from "@/config/appConfig";

const bricolageGrotesque = Bricolage_Grotesque({ weight: ["200", "300", "400", "500", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Launch Your Web App Quickly",
    template: `%s | ${appConfig.appName}`,
  },
  description:
    "Get started fast with a modern Next.js SaaS Boilerplate kit. Includes landing pages, user authentication, database setup, email services, payment integration, and SEO-friendly blogs — everything you need to build and grow your app.",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let content = children;

  if (siteConfig.maintenanceMode) {
    content = <MaintenanceMode />;
  } else if (siteConfig.comingSoonMode) {
    content = <ComingSoon />;
  } else if (siteConfig.waitlistMode) {
    content = <WaitList />;
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <NextTopLoader {...LoaderStyles} />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {content}
          <Toaster />
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId="" />
      <GoogleAnalytics gaId="" />
    </html>
  );
}
