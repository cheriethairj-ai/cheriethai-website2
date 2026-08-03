import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CherieThai London — Clinical Thai Bodywork Coming to East London',
  description:
    'CherieThai is building its London chapter in Spitalfields and Shoreditch. Join the waitlist for private sessions, professional training, and residency events.',
  keywords: [
    'CherieThai London',
    'Thai bodywork London',
    'clinical bodywork London',
    'Spitalfields wellness',
    'Shoreditch bodywork',
    'East London massage',
    'structural bodywork London',
    'Cherie Charnkul London',
  ],
  openGraph: {
    title: 'CherieThai London — A new chapter begins.',
    description: 'Clinical Thai bodywork coming to East London. Join the waitlist.',
    type: 'website',
  },
}

export default function LondonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
