import { BlogPostProps, BlogPostsResponse, BlogSearchRequestParams } from "@/interfaces";
import { getAllBlogPostsWithCategories } from "@/lib/mdx/mdxUtils";
import React from "react";
import BlogFeatured from "../BlogFeatured";
import BlogGrid from "../BlogGrid";
import BlogPagination from "./BlogPagination";
import BlogTopBar from "./BlogTopBar";
import { getSearchQuery } from "@/lib/utils";

function BlogContent({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const { posts: allPostsData, categories }: BlogPostsResponse = getAllBlogPostsWithCategories();

  const featuredPost: any = allPostsData.find((el) => Boolean(el.featured));

  const featuredPostData: any = {
    ...featuredPost,
    link: featuredPost ? `/posts/${featuredPost.fileName.replace(/\.mdx?$/, "")}` : "",
  };
  const { q = "", tags = [] } = searchParams;
  const filteredPosts = getFilteredPostsWithPagination(
    {
      search: getSearchQuery(q as string),
      tags: typeof tags === "string" ? [tags] : tags,
      limit: Number(searchParams.limit) || 10,
      page: Number(searchParams.page) || 1,
    },
    allPostsData
  );

  return (
    <>
      <BlogTopBar categories={categories} />
      <div className="px-4 xs:px-12 w-full flex gap-3 flex-col max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold my-8">Blog Demo</h1>
        {!q.length && !tags.length && <BlogFeatured {...featuredPostData} />}
        <BlogGrid
          posts={Array.from({ length: 12 }, () => ({ ...allPostsData[0] }))?.map((post) => ({
            ...post,
            link: `/posts/${post?.fileName?.replace(/\.mdx?$/, "")}`,
          }))}
        />
      </div>
      <div className="flex justify-center items-center w-full mt-12">
        <BlogPagination currentPage={filteredPosts.pagination.currentPage} totalPages={filteredPosts.pagination.totalPages} />
      </div>
    </>
  );
}

function getFilteredPostsWithPagination(data: BlogSearchRequestParams, allPostsData: BlogPostProps[]) {
  const { search = "", tags = [], limit = 10, page = 1 } = data;
  const lowercaseQuery = search.toLowerCase();

  const filteredPosts = allPostsData.filter((post) => {
    if (tags.length && !tags?.some((tag) => post.category.split(",").includes(tag))) {
      return false;
    }
    return (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.description.toLowerCase().includes(lowercaseQuery) ||
      post.keywords.toLowerCase().includes(lowercaseQuery) ||
      post.tags.toLowerCase().includes(lowercaseQuery)
    );
  });

  // Calculate pagination
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  // Slice the array for pagination
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    pagination: {
      currentPage: page,
      totalPages,
      totalPosts,
    },
  };
}

export default BlogContent;
