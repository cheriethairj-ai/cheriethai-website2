import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/CustomCursor'
import Institute from '@/components/sections/Institute'
import CertifiedPractitioners from '@/components/sections/CertifiedPractitioners'

export const metadata: Metadata = {
  title: 'CherieThai Institute',
  description:
    'The CherieThai Institute — professional training in clinical Thai bodywork. Courses, retreats, workshops and a growing community of certified practitioners worldwide.',
  alternates: { canonical: 'https://cheriethai.com.br/institute' },
  openGraph: {
    title: 'CherieThai Institute — Professional Training',
    description: 'Professional training in clinical Thai bodywork. Courses, retreats and workshops.',
    url: 'https://cheriethai.com.br/institute',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CherieThai Institute' }],
  },
}

export default function InstitutePage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main style={{ background: '#111614', minHeight: '100svh', paddingTop: '5rem' }}>
        <Institute />
        <CertifiedPractitioners />

        {/* Internal links to institute sub-sections */}
        <nav
          aria-label="Institute sections"
          style={{
            padding: 'clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 6rem)',
            borderTop: '1px solid rgba(220,201,160,0.06)',
          }}
        >
          <p
            className="label-text text-sage/30"
            style={{ fontSize: '0.48rem', letterSpacing: '0.28em', marginBottom: '2rem' }}
          >
            EXPLORE THE INSTITUTE
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {[
              { href: '/courses', label: 'Courses & Training' },
              { href: '/retreats', label: 'Retreats' },
              { href: '/workshop', label: 'Workshops' },
              { href: '/alunos', label: 'Certified Students' },
              { href: '/thailand2027', label: 'Thailand 2027' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="btn-ghost text-sand/55 border-sand/15"
                style={{ textDecoration: 'none' }}
              >
                {label} →
              </Link>
            ))}
          </div>
        </nav>
      </main>
      <Footer />
    </>
  )
}
