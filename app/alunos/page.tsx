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
    title: 'Alunos Formados',
    subtitle: 'Cada praticante aqui apresentado foi pessoalmente observado e compreendido por Cherie ao longo da formação. Cada perfil inclui uma apresentação final em vídeo, na qual o praticante executa uma sequência coreografada para refletir seu estilo individual, além de sua biografia, localização e informações de contato.',
    footer: 'CHERIETHAI INSTITUTO · SÃO PAULO · RIO DE JANEIRO',
  },
  EN: {
    back: '← INSTITUTE',
    label: 'CHERIETHAI INSTITUTE',
    title: 'Graduate Practitioners',
    subtitle: 'Each practitioner featured here has been personally observed and understood by Cherie throughout their training. Each profile includes a final video presentation in which the practitioner performs a routine choreographed to reflect their individual style, alongside their biography, location and contact details.',
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
            className="display-section text-ivory mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', lineHeight: 0.95 }}
          >
            {tx.title}
          </motion.h1>
          <motion.p
            {...fadeUp(0.25)}
            className="body-text text-sand/45"
            style={{ fontSize: 'clamp(0.875rem, 1.4vw, 0.975rem)', maxWidth: '48ch' }}
          >
            {tx.subtitle}
          </motion.p>
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
