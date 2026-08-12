import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/CustomCursor'
import Biography from '@/components/sections/Biography'

export const metadata: Metadata = {
  title: 'Cherie T. Charnkul',
  description:
    'Cherie T. Charnkul — born in Phimai, Isaan, Thailand. Trained from age four. Founder of the CherieThai Method and clinical Thai bodywork institute in São Paulo and Rio de Janeiro.',
  alternates: { canonical: 'https://cheriethai.com.br/cherie' },
  openGraph: {
    title: 'Cherie T. Charnkul — Founder of CherieThai',
    description: 'Born in Phimai, Thailand. Trained from age four. Founder of the CherieThai Method.',
    url: 'https://cheriethai.com.br/cherie',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Cherie T. Charnkul' }],
  },
}

export default function CheriePage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main style={{ background: '#111614', minHeight: '100svh', paddingTop: '5rem' }}>
        <Biography />
      </main>
      <Footer />
    </>
  )
}
