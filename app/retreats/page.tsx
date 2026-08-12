import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/CustomCursor'
import Retreats from '@/components/sections/Retreats'

export const metadata: Metadata = {
  title: 'Retreats',
  description:
    'CherieThai immersive retreats — small-group training experiences combining clinical bodywork instruction, direct mentorship and professional development in extraordinary settings.',
  alternates: { canonical: 'https://cheriethai.com.br/retreats' },
  openGraph: {
    title: 'CherieThai Retreats',
    description: 'Immersive CherieThai training retreats. Small groups, direct mentorship, extraordinary settings.',
    url: 'https://cheriethai.com.br/retreats',
    images: [{ url: '/retreat/resort-1.jpg', width: 1200, height: 630, alt: 'CherieThai Retreats' }],
  },
}

export default function RetreatsPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main style={{ background: '#111614', minHeight: '100svh', paddingTop: '5rem' }}>
        <Retreats />
        <div
          style={{
            padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 6vw, 6rem)',
            borderTop: '1px solid rgba(220,201,160,0.06)',
          }}
        >
          <Link
            href="/thailand2027"
            className="btn-ghost text-sand/55 border-sand/15"
            style={{ textDecoration: 'none' }}
          >
            Thailand Retreat 2027 →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
