import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/CustomCursor'
import Therapists from '@/components/sections/Therapists'

export const metadata: Metadata = {
  title: 'Practitioners',
  description:
    'The CherieThai team — certified practitioners in São Paulo and Rio de Janeiro, trained directly in the CherieThai Method by Cherie T. Charnkul.',
  alternates: { canonical: 'https://cheriethai.com.br/therapists' },
  openGraph: {
    title: 'CherieThai Practitioners',
    description: 'Certified practitioners in São Paulo and Rio de Janeiro, trained in the CherieThai Method.',
    url: 'https://cheriethai.com.br/therapists',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CherieThai Practitioners' }],
  },
}

export default function TherapistsPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main style={{ background: '#111614', minHeight: '100svh', paddingTop: '5rem' }}>
        <Therapists />
      </main>
      <Footer />
    </>
  )
}
