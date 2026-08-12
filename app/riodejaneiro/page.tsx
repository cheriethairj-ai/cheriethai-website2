import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/CustomCursor'
import Locations from '@/components/sections/Locations'

export const metadata: Metadata = {
  title: 'CherieThai Rio de Janeiro',
  description:
    'CherieThai Rio de Janeiro — clinical Thai bodywork clinic in Ipanema. A space of grounded tradition, intentional design and therapeutic precision. R. Visconde de Pirajá, 142.',
  alternates: { canonical: 'https://cheriethai.com.br/riodejaneiro' },
  openGraph: {
    title: 'CherieThai Rio de Janeiro — Clinical Thai Bodywork',
    description: 'Clinical Thai bodywork in Ipanema, Rio de Janeiro. R. Visconde de Pirajá, 142. By appointment.',
    url: 'https://cheriethai.com.br/riodejaneiro',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CherieThai Rio de Janeiro' }],
  },
}

export default function RioDeJaneiroPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main style={{ background: '#111614', minHeight: '100svh', paddingTop: '5rem' }}>
        <Locations />
      </main>
      <Footer />
    </>
  )
}
