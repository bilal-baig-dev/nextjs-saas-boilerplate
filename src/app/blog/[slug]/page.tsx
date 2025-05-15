import BackButton from "@/components/blog/components/BackButton";
import BlogHeroSection from "@/components/blog/components/BlogHeroSection";
import RelatedArticle from "@/components/blog/components/RelatedArticle";
import MDXContent from "@/components/blog/mdx/MDXContent";
import Flex from "@/components/common/Flex";
import Section from "@/components/common/Section";
import Container from "@/components/Container";
import { appConfig } from "@/config/appConfig";
import { BlogPostsResponse } from "@/interfaces";
import { getAllBlogPostsWithCategories, getFileBySlug } from "@/lib/mdx/mdxUtils";
import matter from "gray-matter";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }): Promise<Metadata> {
  const { frontMatter } = await getBlogPost(slug);

  return {
    title: `${frontMatter.title} | ${appConfig.appName}`,
    description: frontMatter.description,
  };
}

export async function generateStaticParams() {
  const { posts: allPostsData }: BlogPostsResponse = getAllBlogPostsWithCategories();

  return allPostsData.map((post) => ({
    slug: post.slug,
  }));
}

async function getBlogPost(slug: string) {
  const post = getFileBySlug({ slug });
  const { content, data } = matter(post);
  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });
  return { source: mdxSource, frontMatter: data };
}

async function BlogContentPage({ params: { slug } }: { params: { slug: string } }) {
  const { source, frontMatter } = await getBlogPost(slug);
  return (
    <Container>
      <Section className="mt-8 max-w-5xl flex-col gap-4 mdx-wrapper">
        {/* Main Blog Content */}
        <Flex className="mb-12">
          <BackButton text="Back To Blog" url="/blog" className="bg-transparent w-auto" />
        </Flex>

        <BlogHeroSection
          title={frontMatter.title}
          description={frontMatter.description}
          date={frontMatter.date}
          readingTime={frontMatter.readingTime || "10 min"}
          tags={frontMatter.tags}
          banner={frontMatter.params.banner}
        />
        <MDXContent source={source} />
      </Section>
      <RelatedArticle currentSlug={slug} categories={frontMatter.genres} />
    </Container>
  );
}

export default BlogContentPage;
