import { ReactNode } from 'react'
import './globals.css'
import { Lexend_Deca as LexendDeca } from 'next/font/google'

const lexendDeca = LexendDeca({ subsets: ['latin'], weight: ['400', '500'] })

export const metadata = {
  title: 'Blog UI',
  description: 'Challenger Blog UI',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={lexendDeca.className}>{children}</body>
    </html>
  )
}
