import Flex from "@/components/common/Flex";
import { CategoyProps } from "@/interfaces";
import { useSearchParams } from "next/navigation";
import React, { memo, useCallback, useEffect, useState } from "react";

type BlogCategoryListProps = {
  categories: CategoyProps[];
  selectedCategory: (category: string, isRemoveTag?: boolean) => void;
};

function BlogCategoryList({ categories, selectedCategory }: BlogCategoryListProps) {
  const [selectedCategories, setSelectedCategories] = useState<Record<string, boolean>>({});
  const searchParams = useSearchParams();

  useEffect(() => {
    const tags = searchParams.getAll("tags").reduce((acc, el: string) => {
      if (Object.keys(acc).length === 0) {
        acc = { [el]: false };
      }

      return {
        ...acc,
        [el]: true,
      };
    }, {});

    setSelectedCategories(tags);
  }, []);

  const handleCategoryClick = useCallback((categoryName: string) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  }, []);

  return (
    <>
      <Flex className="flex font-medium gap-4 justify-start flex-wrap">
        {categories.map((el, index) => {
          return (
            <React.Fragment key={el.name}>
              <span
                onClick={() => {
                  selectedCategory(el.name, selectedCategories[el.name]);
                  handleCategoryClick(el.name);
                }}
                className={`cursor-pointer text-xs px-4 py-2 hover:text-primary border rounded-xl ${
                  selectedCategories[el.name]
                    ? "bg-primary text-white border-primary hover:text-white"
                    : "border-black dark:border-primary-foreground"
                }`}
              >
                <span>{el.name}</span>
              </span>
            </React.Fragment>
          );
        })}
      </Flex>
    </>
  );
}

export default memo(BlogCategoryList);
