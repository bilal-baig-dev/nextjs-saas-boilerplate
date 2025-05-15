"use client";
import Flex from "@/components/common/Flex";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CategoyProps } from "@/interfaces";
import { getBlogURLQueryParams } from "@/lib/utils";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { KeyboardEvent, useCallback, useEffect, useState } from "react";
import BlogCategoryList from "./BlogCategoryList";

type BlogTopBarType = {
  categories: CategoyProps[];
};

function BlogTopBar({ categories }: BlogTopBarType) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [blogCategories] = useState<CategoyProps[]>(categories);

  const router = useRouter();
  const searchParams = useSearchParams();

  const updateUrlQueryParams = useCallback(
    ({ tag, isRemoveTag, clearSearch }: { tag?: string; isRemoveTag?: boolean; clearSearch?: boolean }) => {
      const urlQueryParams = getBlogURLQueryParams({
        newSearch: searchTerm,
        currentSearchParams: searchParams,
        tag,
        isRemoveTag,
        clearSearch,
      });

      router.push(`/blog?${urlQueryParams.toString()}`);
    },
    [router, searchParams, searchTerm]
  );

  const clearSearchTerm = useCallback(() => {
    setSearchTerm("");
    updateUrlQueryParams({ clearSearch: true });
  }, [updateUrlQueryParams]);

  const handleSearch = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        updateUrlQueryParams({});
      }
    },
    [updateUrlQueryParams]
  );

  useEffect(() => {
    if (searchParams.has("q")) {
      setSearchTerm(searchParams.get("q") || "");
    }
  }, []);

  return (
    <div className="px-4 xs:px-12 w-full flex gap-5 flex-col max-w-7xl mx-auto">
      <div className="group flex items-center w-full max-w-4xl">
        <div className="flex w-full max-w-xl items-center relative transition-all duration-300 group-focus-within:max-w-2xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="h-5 w-5 dark:text-primary-foreground" />
          </div>
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search blog"
            className="pl-10 pr-12 py-6 focus-visible:border-none focus-visible:outline-primary"
            onKeyDown={handleSearch}
          />
          <Button
            type="button"
            onClick={clearSearchTerm}
            className="hidden absolute inset-y-0 right-2 m-auto transition-all duration-300 group-focus-within:flex items-center w-6 h-6 px-0 rounded-full"
          >
            <X className="h-3 w-3 flex items-center" />
          </Button>
        </div>
      </div>
      <Flex className="flex items-center gap-12 max-w-7xl">
        <BlogCategoryList categories={blogCategories} selectedCategory={(tag, isRemoveTag) => updateUrlQueryParams({ tag, isRemoveTag })} />
      </Flex>
    </div>
  );
}

export default BlogTopBar;
