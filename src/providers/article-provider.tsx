"use client"

import PreviewArticle from "@/components/previewArticle";
import { useEffect, useState } from "react";

const ArticleProvider = () => {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  },[])

  if(!isMounted) {
    return null
  }

  return (
  <>
    <PreviewArticle />
  </> );
}

export default ArticleProvider;
