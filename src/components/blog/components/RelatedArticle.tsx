import BlogGrid from "../BlogGrid";
import { getTopPostsByCategoryMatch } from "@/lib/mdx/mdxUtils";

interface RelatedArticlesProps {
  categories: string[];
  currentSlug: string;
}

function RelatedArticle({ categories, currentSlug }: RelatedArticlesProps) {
  const fetchedTopPosts = getTopPostsByCategoryMatch(categories, currentSlug);

  return (
    <div className="w-full flex gap-5 py-12 flex-col items-center justify-center">
      <span className="flex text-3xl font-bold items-center">Related Articles</span>
      <BlogGrid
        posts={fetchedTopPosts.map((post) => ({
          ...post,
          link: `/posts/${post?.fileName?.replace(/\.mdx?$/, "")}`,
        }))}
      />
    </div>
  );
}

export default RelatedArticle;
