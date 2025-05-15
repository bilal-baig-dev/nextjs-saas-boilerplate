import Flex from "@/components/common/Flex";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import { CircleUserRound } from "lucide-react";
import React from "react";
import BlogCategoryText from "./BlogCategoryText";
import { BlogCardProps } from "@/interfaces";

function BlogCardContent({
  title,
  description,
  category,
  date,
  author,
  imageUrl,
  avatar,
  link,
  isFeatured = false,
}: BlogCardProps & { isFeatured?: boolean }) {
  return (
    <>
      <Flex className="gap-1 overflow-auto">
        {isFeatured && <BlogCategoryText category={"Featured"} />}
        {category?.split(",")?.map((el, index) => {
          return (
            <React.Fragment key={el}>
              <BlogCategoryText category={el} />
            </React.Fragment>
          );
        })}
      </Flex>
      <Flex className="flex-col gap-2">
        <div className={`${isFeatured ? "text-2xl lg:text-3xl xl:text-4xl" : "text-2xl"} leading-tight font-bold text-black`}>{title}</div>
        <span className="font-extralight text-lg text-gray-700 line-clamp-2">{description}</span>
      </Flex>
      <div className="flex items-center font-medium text-sm text-gray-600 gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage className="rounded-full ring-2" src={avatar} />
          <AvatarFallback>
            <CircleUserRound className="text-white" />
          </AvatarFallback>
        </Avatar>
        <div className={`${isFeatured ? "flex gap-2" : "gap-2 md:gap-0 lg:gap-2 flex md:flex-col lg:flex-row"}`}>
          <span>{author}</span>
          <span>{formatDate(date)}</span>
        </div>
      </div>
    </>
  );
}

export default BlogCardContent;
