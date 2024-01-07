import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar'
import ArticleProvider from '@/providers/article-provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Victor Levesque | Software Engineer',
  description: 'this is web portfolio of Victor Levesque software engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div id="root">
          <ArticleProvider />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
