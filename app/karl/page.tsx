import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/CustomCursor'
import Biography from '@/components/sections/Biography'

export const metadata: Metadata = {
  title: 'Karl — Co-Founder',
  description:
    'Karl Georges — co-founder of CherieThai. Former university lecturer at UFRJ. Trained by Cherie T. Charnkul. The first foreigner personally invited by Grand Master Ajarn Torng to become a monk at Tam Yae temple.',
  alternates: { canonical: 'https://cheriethai.com.br/karl' },
  openGraph: {
    title: 'Karl Georges — Co-Founder of CherieThai',
    description: 'Former UFRJ lecturer. Trained by Cherie. First foreigner invited to become a monk at Tam Yae.',
    url: 'https://cheriethai.com.br/karl',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Karl Georges — CherieThai Co-Founder' }],
  },
}

export default function KarlPage() {
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
