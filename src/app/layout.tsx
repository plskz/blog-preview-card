import type { Metadata } from 'next'
import { Inter, Figtree } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'blog-preview-card',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={figtree.className}>{children}</body>
    </html>
  )
}
