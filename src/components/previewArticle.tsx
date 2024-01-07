"use client";

import useViewArticle from "@/hooks/view-article";
import Article from "./article";
import About from "./about";


const PreviewArticle = () => {
  const previewArticle = useViewArticle();
  const product = useViewArticle((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Article
      open={previewArticle.isOpen}
      onClose={previewArticle.onClose}
    >
      <div className="grid w-full items-start overflow-y-auto">
        <About />
        <About />
        <About />
        <About />
      </div>
    </Article>
  );
}

export default PreviewArticle;
