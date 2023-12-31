"use client";

import useViewArticle from "@/hooks/view-article";
import Article from "@/components/ui/article";

const PreviewArticle = () => {
  const previewArticle = useViewArticle();

  return (
    <Article
      open={previewArticle.isOpen}
      onClose={previewArticle.onClose}
    >
      <div className="grid w-full items-start overflow-y-auto">
        {previewArticle.data}
      </div>
    </Article>
  );
}

export default PreviewArticle;
