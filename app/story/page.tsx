import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/CustomCursor'
import Biography from '@/components/sections/Biography'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'The story of CherieThai — from a rice-farming village in northeast Thailand to clinical practice in São Paulo and Rio de Janeiro. A practice built across two cultures, four decades of training, and an uncompromising commitment to the body.',
  alternates: { canonical: 'https://cheriethai.com.br/story' },
  openGraph: {
    title: 'Our Story — CherieThai',
    description: 'From northeast Thailand to São Paulo. The origin of the CherieThai Method.',
    url: 'https://cheriethai.com.br/story',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CherieThai — Our Story' }],
  },
}

export default function StoryPage() {
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
