import Container from "@/components/Container";
import BlogContent from "@/components/blog/components/BlogContent";
import Section from "@/components/common/Section";
import { appConfig } from "@/config/appConfig";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `Blog`,
};
function BlogPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  return (
    <Container>
      <Section className="mt-8 px-0 flex-col w-full max-w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <BlogContent searchParams={searchParams} />
        </Suspense>
      </Section>
    </Container>
  );
}

export default BlogPage;
