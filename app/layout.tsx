import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CherieThai — Clinical Thai Bodywork',
  description:
    'Advanced Thai bodywork by Cherie T. Charnkul. Structural precision. Nervous system regulation. Work that holds. São Paulo & Rio de Janeiro.',
  keywords: [
    'Thai bodywork',
    'clinical bodywork',
    'structural bodywork',
    'São Paulo',
    'Rio de Janeiro',
    'Cherie Charnkul',
    'Thai massage',
    'nervous system regulation',
  ],
  openGraph: {
    title: 'CherieThai — Clinical Thai Bodywork',
    description: 'The body is architecture. Advanced Thai bodywork by Cherie T. Charnkul.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  )
}
