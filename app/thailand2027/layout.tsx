import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thailand Retreat 2027',
  description:
    'An immersive four-day CherieThai training retreat in Thailand, 2027. Clinical bodywork, direct mentorship, and professional development in a luxury resort setting.',
  alternates: { canonical: 'https://cheriethai.com.br/thailand2027' },
  openGraph: {
    title: 'CherieThai Thailand Retreat 2027',
    description: 'Four days of immersive CherieThai training in Thailand. Clinical bodywork under direct mentorship.',
    url: 'https://cheriethai.com.br/thailand2027',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CherieThai Thailand Retreat 2027' }],
  },
}

export default function Thailand2027Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
