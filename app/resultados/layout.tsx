import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Results',
  description:
    'Clinical results from CherieThai sessions — real cases documenting pain relief, structural improvement and restored mobility in São Paulo and Rio de Janeiro.',
  alternates: { canonical: 'https://cheriethai.com.br/results' },
  openGraph: {
    title: 'CherieThai Results — Clinical Documentation',
    description: 'Real results from CherieThai sessions: pain relief, structural improvement and restored mobility.',
    url: 'https://cheriethai.com.br/results',
    images: [{ url: '/portrait-cherie.jpg', width: 1200, height: 630, alt: 'CherieThai Clinical Results' }],
  },
}

export default function ResultadosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
