import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogCardProps } from "@/interfaces";
import { Separator } from "../ui/separator";
import BlogCardContent from "./components/BlogCardContent";

const BlogFeatured: React.FC<BlogCardProps> = (props) => {
  return (
    <>
      <Link href={`/blog/${props?.slug}`}>
        <div className="w-full h-auto md:h-[26rem] lg:h-96 flex flex-col bg-white md:flex-row rounded-xl shadow-md">
          <div className="md:w-1/2 rounded-xl h-full">
            <Image
              className="h-72 rounded-tl-xl md:rounded-bl-xl w-full object-cover md:h-full"
              width={2000}
              height={2000}
              src={props?.imageUrl}
              alt={props?.title}
            />
          </div>
          <div className="px-8 py-10 xl:py-12 w-full md:w-1/2 flex flex-col gap-3 lg:gap-4">
            <BlogCardContent {...props} isFeatured />
          </div>
        </div>
      </Link>

      <div className="py-16">
        <Separator />
      </div>
    </>
  );
};

export default BlogFeatured;
