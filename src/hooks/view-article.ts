import { create } from "zustand"

interface ViewArticleProps {
  isOpen : boolean
  data?: string
  onOpen : (data:string) => void;
  onClose : () => void;
}

const useViewArticle = create<ViewArticleProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: string) => set({data: data, isOpen: true}),
  onClose: () => set( {isOpen:false} )
}))

export default useViewArticle
