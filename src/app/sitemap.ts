import { BlogPostsResponse } from "@/interfaces";
import { getAllBlogPostsWithCategories } from "@/lib/mdx/mdxUtils";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts: allPostsData }: BlogPostsResponse = getAllBlogPostsWithCategories();

  const siteUrl = String(process.env.NEXT_PUBLIC_BASE_URL); // Your site URL
  const dynamicUrls: MetadataRoute.Sitemap = allPostsData.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteUrl}/login`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...dynamicUrls,
  ];
}
