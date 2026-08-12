import type { Metadata } from 'next'
import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'
import Resultados from '@/components/sections/Resultados'
import Footer from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Results',
  description:
    'Clinical results from CherieThai sessions — documented cases of pain relief, structural improvement and restored mobility. São Paulo & Rio de Janeiro.',
  alternates: { canonical: 'https://cheriethai.com.br/results' },
  openGraph: {
    title: 'CherieThai Results — Clinical Documentation',
    description: 'Documented clinical results: pain relief, structural improvement and restored mobility.',
    url: 'https://cheriethai.com.br/results',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CherieThai Clinical Results' }],
  },
}

export default function ResultsPage() {
  return (
    <>
      <CustomCursor />
      <main>
        <Navigation />
        <Resultados />
        <Footer />
      </main>
    </>
  )
}
