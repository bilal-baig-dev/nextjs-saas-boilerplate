import { BlogCardProps } from "@/interfaces";
import Image from "next/image";
import React from "react";
import BlogCardContent from "./components/BlogCardContent";
import Link from "next/link";

const BlogCard: React.FC<BlogCardProps> = (props) => {
  return (
    <Link href={`/blog/${props.slug}`}>
      <div className="max-w-full flex flex-col bg-white rounded-xl shadow-md overflow-hidden md:max-w-96">
        <div className="w-full max-w-full md:max-w-96 h-auto md:h-48">
          <Image className="h-72 w-full object-cover md:h-full" width={2000} height={2000} src={props.imageUrl} alt={props.title} />
        </div>
        <div className="p-6 flex flex-col gap-4">
          <BlogCardContent {...props} />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
