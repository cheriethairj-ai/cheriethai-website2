import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/CustomCursor'
import Institute from '@/components/sections/Institute'

export const metadata: Metadata = {
  title: 'Workshops',
  description:
    'CherieThai workshops — focused, single-day or weekend intensive sessions covering specific techniques, body regions and therapeutic applications of the CherieThai Method.',
  alternates: { canonical: 'https://cheriethai.com.br/workshop' },
  openGraph: {
    title: 'CherieThai Workshops',
    description: 'Focused intensive workshops in clinical Thai bodywork techniques.',
    url: 'https://cheriethai.com.br/workshop',
    images: [{ url: '/session-formacao.jpg', width: 1200, height: 630, alt: 'CherieThai Workshops' }],
  },
}

export default function WorkshopPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main style={{ background: '#111614', minHeight: '100svh', paddingTop: '5rem' }}>
        <Institute />
        <div
          style={{
            padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 6vw, 6rem)',
            borderTop: '1px solid rgba(220,201,160,0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <Link href="/courses" className="btn-ghost text-sand/55 border-sand/15" style={{ textDecoration: 'none' }}>
            Full Courses →
          </Link>
          <Link href="/retreats" className="btn-ghost text-sand/55 border-sand/15" style={{ textDecoration: 'none' }}>
            Retreats →
          </Link>
          <Link href="/institute" className="btn-ghost text-sand/55 border-sand/15" style={{ textDecoration: 'none' }}>
            The Institute →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
