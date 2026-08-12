import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/CustomCursor'
import Institute from '@/components/sections/Institute'

export const metadata: Metadata = {
  title: 'Courses & Training',
  description:
    'Professional training courses at the CherieThai Institute — certification in clinical Thai bodywork. Intensive, hands-on training under the direct instruction of Cherie T. Charnkul.',
  alternates: { canonical: 'https://cheriethai.com.br/courses' },
  openGraph: {
    title: 'CherieThai Courses — Professional Training',
    description: 'Certification in clinical Thai bodywork under the direct instruction of Cherie T. Charnkul.',
    url: 'https://cheriethai.com.br/courses',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'CherieThai Training Courses' }],
  },
}

export default function CoursesPage() {
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
          <Link href="/retreats" className="btn-ghost text-sand/55 border-sand/15" style={{ textDecoration: 'none' }}>
            Retreats →
          </Link>
          <Link href="/thailand2027" className="btn-ghost text-sand/55 border-sand/15" style={{ textDecoration: 'none' }}>
            Thailand 2027 →
          </Link>
          <Link href="/alunos" className="btn-ghost text-sand/55 border-sand/15" style={{ textDecoration: 'none' }}>
            Certified Students →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
