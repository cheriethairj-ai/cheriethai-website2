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
  metadataBase: new URL('https://cheriethai.com.br'),
  title: {
    default: 'CherieThai — Clinical Thai Bodywork',
    template: '%s — CherieThai',
  },
  description:
    'Advanced Thai bodywork by Cherie T. Charnkul. Structural precision. Nervous system regulation. Work that holds. São Paulo & Rio de Janeiro.',
  keywords: [
    'Thai bodywork',
    'clinical Thai bodywork',
    'structural bodywork',
    'São Paulo bodywork',
    'Rio de Janeiro bodywork',
    'Cherie Charnkul',
    'CherieThai Institute',
    'Thai massage São Paulo',
    'nervous system regulation',
    'professional Thai bodywork training',
  ],
  alternates: {
    canonical: 'https://cheriethai.com.br',
  },
  openGraph: {
    title: 'CherieThai — Clinical Thai Bodywork',
    description: 'The body is architecture. Advanced Thai bodywork by Cherie T. Charnkul. São Paulo & Rio de Janeiro.',
    type: 'website',
    url: 'https://cheriethai.com.br',
    siteName: 'CherieThai',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CherieThai — Clinical Thai Bodywork by Cherie T. Charnkul',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CherieThai — Clinical Thai Bodywork',
    description: 'The body is architecture. Advanced Thai bodywork by Cherie T. Charnkul.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://cheriethai.com.br/#organization',
      name: 'CherieThai',
      url: 'https://cheriethai.com.br',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cheriethai.com.br/logo.png',
        width: 400,
        height: 265,
      },
      description: 'Advanced clinical Thai bodywork and professional education. São Paulo & Rio de Janeiro.',
      sameAs: ['https://www.instagram.com/cheriethai'],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55-11-91113-5083',
        contactType: 'customer service',
        areaServed: 'BR',
        availableLanguage: ['Portuguese', 'English'],
      },
      founder: {
        '@type': 'Person',
        name: 'Cherie T. Charnkul',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://cheriethai.com.br/#website',
      name: 'CherieThai',
      url: 'https://cheriethai.com.br',
      publisher: { '@id': 'https://cheriethai.com.br/#organization' },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://cheriethai.com.br/#business-saopaulo',
      name: 'CherieThai São Paulo',
      parentOrganization: { '@id': 'https://cheriethai.com.br/#organization' },
      url: 'https://cheriethai.com.br/saopaulo',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'R. Pedroso Alvarenga, 691',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
        addressDescription: 'Itaim Bibi',
      },
      openingHours: 'Mo-Su 06:00-20:00',
      telephone: '+55-11-91113-5083',
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://cheriethai.com.br/#business-rio',
      name: 'CherieThai Rio de Janeiro',
      parentOrganization: { '@id': 'https://cheriethai.com.br/#organization' },
      url: 'https://cheriethai.com.br/riodejaneiro',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'R. Visconde de Pirajá, 142',
        addressLocality: 'Rio de Janeiro',
        addressRegion: 'RJ',
        addressCountry: 'BR',
        addressDescription: 'Ipanema',
      },
      openingHours: 'Mo-Su 08:00-20:00',
      telephone: '+55-11-91113-5083',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
