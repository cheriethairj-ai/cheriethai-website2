import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'About CherieThai',
  description:
    'CherieThai is a clinical Thai bodywork practice and professional education institute founded by Cherie T. Charnkul. Born in Phimai, Thailand. Established in Brazil.',
  alternates: { canonical: 'https://cheriethai.com.br/about' },
  openGraph: {
    title: 'About CherieThai',
    description: 'Clinical Thai bodywork practice and professional education institute. Founded by Cherie T. Charnkul.',
    url: 'https://cheriethai.com.br/about',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Cherie T. Charnkul — CherieThai' }],
  },
}

const links = [
  {
    href: '/philosophy',
    label: 'Philosophy',
    labelPT: 'Filosofia',
    sub: 'The principles that guide the work',
    subPT: 'Os princípios que guiam o trabalho',
  },
  {
    href: '/story',
    label: 'Our Story',
    labelPT: 'Nossa História',
    sub: 'How CherieThai began',
    subPT: 'Como a CherieThai começou',
  },
  {
    href: '/cherie',
    label: 'About Cherie',
    labelPT: 'Sobre Cherie',
    sub: 'Founder & lead practitioner',
    subPT: 'Fundadora e terapeuta principal',
  },
  {
    href: '/karl',
    label: 'About Karl',
    labelPT: 'Sobre Karl',
    sub: 'Co-founder',
    subPT: 'Co-fundador',
  },
]

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main style={{ background: '#111614', minHeight: '100svh' }}>

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: 'clamp(7rem, 18vw, 12rem)',
            paddingBottom: 'clamp(3rem, 8vw, 6rem)',
            paddingLeft: 'clamp(1.5rem, 6vw, 6rem)',
            paddingRight: 'clamp(1.5rem, 6vw, 6rem)',
          }}
        >
          <p
            className="label-text text-sage/30"
            style={{ fontSize: '0.5rem', letterSpacing: '0.3em', marginBottom: '2.5rem' }}
          >
            ABOUT CHERIETHAI
          </p>

          <h1
            className="font-cormorant font-light text-ivory"
            style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              lineHeight: 0.95,
              maxWidth: '14ch',
              marginBottom: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            Born in Thailand.<br />
            Established in Brazil.
          </h1>

          <p
            className="body-text text-sand/60"
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.1rem)',
              lineHeight: 1.85,
              maxWidth: '58ch',
              marginBottom: 'clamp(3rem, 7vw, 5rem)',
            }}
          >
            CherieThai is a clinical Thai bodywork practice and professional education institute
            founded by Cherie T. Charnkul. Rooted in traditional Thai therapeutic lineage and
            refined through decades of clinical practice, CherieThai operates between São Paulo
            and Rio de Janeiro — and trains practitioners who carry that standard forward.
          </p>

          <div className="divider-sand" style={{ maxWidth: '480px' }} />
        </section>

        {/* ── Navigation cards ────────────────────────────────────────────── */}
        <section
          style={{
            paddingBottom: 'clamp(4rem, 10vw, 8rem)',
            paddingLeft: 'clamp(1.5rem, 6vw, 6rem)',
            paddingRight: 'clamp(1.5rem, 6vw, 6rem)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1px',
              background: 'rgba(220,201,160,0.07)',
              border: '1px solid rgba(220,201,160,0.07)',
              maxWidth: '960px',
            }}
          >
            {links.map(({ href, label, sub }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: 'block',
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  background: '#111614',
                  textDecoration: 'none',
                  transition: 'background 0.3s',
                }}
                className="group hover:bg-sage/5"
              >
                <span
                  className="font-cormorant font-light text-ivory/75 group-hover:text-ivory block transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1, marginBottom: '0.75rem' }}
                >
                  {label}
                </span>
                <span
                  className="label-text text-sage/40 block"
                  style={{ fontSize: '0.5rem', letterSpacing: '0.2em' }}
                >
                  {sub.toUpperCase()}
                </span>
              </Link>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
