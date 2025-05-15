import { MetadataRoute } from "next";
const siteUrl = String(process.env.NEXT_PUBLIC_BASE_URL); // Your site URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/legal/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
