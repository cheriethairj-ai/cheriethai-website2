import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/CustomCursor'
import Locations from '@/components/sections/Locations'

export const metadata: Metadata = {
  title: 'CherieThai São Paulo',
  description:
    'CherieThai São Paulo — clinical Thai bodywork studio in Itaim Bibi. A precision studio for structural bodywork, nervous system regulation and therapeutic sessions. R. Pedroso Alvarenga, 691.',
  alternates: { canonical: 'https://cheriethai.com.br/saopaulo' },
  openGraph: {
    title: 'CherieThai São Paulo — Clinical Thai Bodywork',
    description: 'Clinical Thai bodywork in Itaim Bibi, São Paulo. R. Pedroso Alvarenga, 691. By appointment.',
    url: 'https://cheriethai.com.br/saopaulo',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CherieThai São Paulo Studio' }],
  },
}

export default function SaoPauloPage() {
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
