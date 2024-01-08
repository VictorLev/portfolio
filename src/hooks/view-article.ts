import React from "react";
import { create } from "zustand"

interface ViewArticleProps {
  isOpen : boolean
  data?: React.ReactNode
  onOpen : (data:React.ReactNode) => void;
  onClose : () => void;
}

const useViewArticle = create<ViewArticleProps>((set) => ({
  isOpen: false,
  children: undefined,
  onOpen: (data:React.ReactNode) => set({data, isOpen: true}),
  onClose: () => set( {isOpen:false} )
}))

export default useViewArticle
