import React from "react";

function BlogCategoryText({ category }: { category: string }) {
  return <span className="tracking-wide text-xs px-3 py-1 rounded-xl bg-primary font-semibold text-white">{category}</span>;
}

export default BlogCategoryText;
