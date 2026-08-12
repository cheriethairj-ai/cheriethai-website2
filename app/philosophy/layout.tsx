import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Philosophy',
  description:
    'The CherieThai philosophy: the body as architecture, the nervous system as the environment. Understanding the principles that guide every session.',
  alternates: { canonical: 'https://cheriethai.com.br/philosophy' },
  openGraph: {
    title: 'Philosophy — CherieThai',
    description: 'The body is architecture. Explore the principles that guide every CherieThai session.',
    url: 'https://cheriethai.com.br/philosophy',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CherieThai Philosophy' }],
  },
}

export default function PhilosophyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
