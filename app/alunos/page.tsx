'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import CustomCursor from '@/components/CustomCursor'
import LanguageToggle from '@/components/LanguageToggle'
import StudentMap from '@/components/sections/StudentMap'
import { useLanguage } from '@/contexts/LanguageContext'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] },
})

const t = {
  PT: {
    back: '← INSTITUTO',
    label: 'INSTITUTO CHERIETHAI',
    title: 'Praticantes Formados',
    intro: 'O CherieThai não forma praticantes em escala.',
    body: [
      'As formações são intencionalmente reduzidas, permitindo que Cherie acompanhe de perto o desenvolvimento de cada praticante — sua capacidade técnica e a forma individual como cada um expressa a abordagem CherieThai.',
      'Os praticantes aqui apresentados formam uma comunidade deliberadamente limitada. Cada um concluiu uma formação com o CherieThai e demonstrou um nível de prática que o Instituto se sente seguro em representar publicamente.',
      'Cada perfil inclui a descrição do próprio praticante sobre como aplica a abordagem CherieThai — cuidadosamente revisada por Cherie para refletir com precisão seus pontos fortes e estilo individual — além de localização e contacto. Quando disponível, uma apresentação prática final oferece uma visão adicional do trabalho.',
    ],
    footer: 'CHERIETHAI INSTITUTO · SÃO PAULO · RIO DE JANEIRO',
  },
  EN: {
    back: '← INSTITUTE',
    label: 'CHERIETHAI INSTITUTE',
    title: 'Graduate Practitioners',
    intro: 'CherieThai does not train practitioners at scale.',
    body: [
      'Our trainings are intentionally kept small, allowing Cherie to closely observe each practitioner\'s development, technical ability and individual expression of the CherieThai approach.',
      'The practitioners featured here form a deliberately limited community. Each has completed training with CherieThai and demonstrated a standard of practice we are confident representing through the Institute.',
      'Each profile includes the practitioner\'s own description of how they practise within the CherieThai approach, carefully curated by Cherie to accurately reflect their strengths and individual style, alongside their location and contact details. Where available, a final practice presentation offers a further view of their work.',
    ],
    footer: 'CHERIETHAI INSTITUTE · SÃO PAULO · RIO DE JANEIRO',
  },
}

export default function AlunosPage() {
  const { lang } = useLanguage()
  const tx = t[lang]

  return (
    <>
      <CustomCursor />

      <main style={{ background: '#111614', minHeight: '100svh' }}>

        {/* ── Navigation ─────────────────────────────────────────────────── */}
        <motion.header
          {...fadeUp(0)}
          className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-6 border-b"
          style={{ borderColor: 'rgba(220,201,160,0.06)' }}
        >
          <Link
            href="/#instituto"
            className="label-text text-sand/45 hover:text-sand/85 transition-colors duration-300"
            style={{ fontSize: '0.55rem', letterSpacing: '0.25em' }}
          >
            {tx.back}
          </Link>
          <div className="flex items-center gap-6">
            <LanguageToggle />
            <Link
              href="/"
              className="label-text text-sand/35 hover:text-sand/70 transition-colors duration-300"
              style={{ fontSize: '0.55rem', letterSpacing: '0.25em' }}
            >
              CHERIETHAI
            </Link>
          </div>
        </motion.header>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="px-6 md:px-12 lg:px-16 pt-16 pb-12 md:pt-20 md:pb-16">
          <motion.p
            {...fadeUp(0.1)}
            className="label-text text-sage/30 mb-5"
            style={{ fontSize: '0.5rem', letterSpacing: '0.3em' }}
          >
            {tx.label}
          </motion.p>
          <motion.h1
            {...fadeUp(0.18)}
            className="display-section text-ivory mb-8"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', lineHeight: 0.95 }}
          >
            {tx.title}
          </motion.h1>

          {/* Intro line — slightly more prominent */}
          <motion.p
            {...fadeUp(0.24)}
            className="body-text text-sand/70"
            style={{ fontSize: 'clamp(0.975rem, 1.6vw, 1.05rem)', maxWidth: '44ch', marginBottom: '1.25rem' }}
          >
            {tx.intro}
          </motion.p>

          {/* Body paragraphs */}
          <div className="flex flex-col gap-4" style={{ maxWidth: '52ch' }}>
            {tx.body.map((para, i) => (
              <motion.p
                key={i}
                {...fadeUp(0.3 + i * 0.06)}
                className="body-text text-sand/38"
                style={{ fontSize: 'clamp(0.875rem, 1.4vw, 0.975rem)', lineHeight: 1.8 }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        {/* ── Map + Directory ─────────────────────────────────────────────── */}
        <motion.div
          {...fadeUp(0.32)}
          className="px-6 md:px-12 lg:px-16 pb-24"
        >
          <StudentMap />
        </motion.div>

        {/* ── Footer ─────────────────────────────────────────────────────── */}
        <div
          className="px-6 md:px-12 lg:px-16 py-10 border-t"
          style={{ borderColor: 'rgba(220,201,160,0.05)' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="label-text text-sage/18" style={{ fontSize: '0.48rem', letterSpacing: '0.22em' }}>
              {tx.footer}
            </p>
            <Link
              href="/"
              className="label-text text-sage/18 hover:text-sage/40 transition-colors duration-300"
              style={{ fontSize: '0.48rem', letterSpacing: '0.22em' }}
            >
              CHERIETHAI.COM.BR →
            </Link>
          </div>
        </div>

      </main>
    </>
  )
}
