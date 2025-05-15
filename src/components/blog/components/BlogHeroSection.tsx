import React from "react";
import BlogCategoryText from "./BlogCategoryText";
import Image from "next/image";
import Section from "@/components/common/Section";

interface BlogHeroProps {
  title: string;
  description: string;
  date: string;
  readingTime: string;
  banner: string;
  tags: string[];
}

function BlogHeroSection({ title, banner, description, date, readingTime, tags }: BlogHeroProps) {
  return (
    <Section className="px-0 py-0 max-w-full w-full gap-2 flex flex-col">
      <div className="flex flex-wrap items-center gap-4 text-sm mb-3">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">{title}</h1>
        <p className="mt-2 text-lg md:text-xl">{description}</p>
        <span>{date}</span>
        <span>{readingTime}</span>
        <div className="flex gap-2">
          {tags.map((el, index) => {
            return (
              <React.Fragment key={`${el}-${index}`}>
                <BlogCategoryText category={el} />
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <Image src={banner} alt="Hero Image" width={500} height={500} className="w-full rounded-lg shadow" />
    </Section>
  );
}

export default BlogHeroSection;
