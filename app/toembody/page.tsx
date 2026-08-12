import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/CustomCursor'
import ToEmbody from '@/components/sections/ToEmbody'

export const metadata: Metadata = {
  title: 'To Embody',
  description:
    'To Embody — the CherieThai clothing brand. Designed for practitioners who move between session and street. Premium pieces built for therapeutic practice.',
  alternates: { canonical: 'https://cheriethai.com.br/toembody' },
  openGraph: {
    title: 'To Embody — CherieThai',
    description: 'Premium clothing for practitioners. Designed for therapeutic practice, worn beyond it.',
    url: 'https://cheriethai.com.br/toembody',
    images: [{ url: '/toembody-portrait.jpg', width: 1200, height: 630, alt: 'To Embody — CherieThai' }],
  },
}

export default function ToEmbodyPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main style={{ background: '#111614', minHeight: '100svh', paddingTop: '5rem' }}>
        <ToEmbody />
      </main>
      <Footer />
    </>
  )
}
