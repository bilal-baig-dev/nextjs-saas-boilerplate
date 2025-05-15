import React from "react";
import BlogCard from "./BlogCard";
import { BlogCardProps } from "@/interfaces";

interface BlogGridProps {
  posts: BlogCardProps[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return posts?.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
      {posts?.map((post) => (
        <BlogCard key={post.link} {...post} />
      ))}
    </div>
  ) : (
    <div className="w-full flex items-center justify-center">
      <span className="text-3xl font-bold">No Data Found</span>
    </div>
  );
};

export default BlogGrid;
