import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/CustomCursor'
import Booking from '@/components/sections/Booking'

export const metadata: Metadata = {
  title: 'Contact — CherieThai',
  description: 'Request a session or enquiry with CherieThai — São Paulo, Rio de Janeiro and London.',
  alternates: { canonical: 'https://cheriethai.com.br/contact' },
  openGraph: {
    title: 'Contact — CherieThai',
    description: 'Request a session or enquiry with CherieThai.',
    url: 'https://cheriethai.com.br/contact',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CherieThai — Contact' }],
  },
}

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main style={{ background: '#111614', minHeight: '100svh', paddingTop: '5rem' }}>
        <Booking />
      </main>
      <Footer />
    </>
  )
}
