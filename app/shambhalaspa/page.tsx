'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CustomCursor from '@/components/CustomCursor'
import LanguageToggle from '@/components/LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'
import { institutions } from '@/data/institutions'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] },
})

const revealInView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.85, delay, ease: [0.25, 0.1, 0.25, 1.0] },
})

export default function ShambhalaSpaPage() {
  const { lang } = useLanguage()
  const inst = institutions.find(i => i.id === 'shambhala-spa-paraty')!

  const description = lang === 'PT' ? inst.descriptionPT : inst.descriptionEN
  const impact = lang === 'PT' ? inst.impactPT : inst.impactEN

  return (
    <>
      <CustomCursor />

      <main style={{ background: '#111614', minHeight: '100svh' }}>

        {/* ── Nav ── */}
        <motion.header
          {...fadeUp(0)}
          className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-6 border-b"
          style={{ borderColor: 'rgba(220,201,160,0.06)' }}
        >
          <Link
            href="/alunos"
            className="label-text text-sand/45 hover:text-sand/85 transition-colors duration-300"
            style={{ fontSize: '0.55rem', letterSpacing: '0.25em' }}
          >
            {lang === 'PT' ? '← FORMADOS' : '← GRADUATES'}
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

        {/* ── Header ── */}
        <div className="px-6 md:px-12 lg:px-16 pt-16 pb-12 md:pt-20 md:pb-16">
          <motion.p
            {...fadeUp(0.1)}
            className="label-text text-sage/30 mb-5"
            style={{ fontSize: '0.5rem', letterSpacing: '0.3em' }}
          >
            {lang === 'PT' ? 'FORMAÇÃO INSTITUCIONAL · INSTITUTO CHERIETHAI' : 'INSTITUTIONAL TRAINING · CHERIETHAI INSTITUTE'}
          </motion.p>

          <motion.h1
            {...fadeUp(0.18)}
            className="display-section text-ivory mb-3"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', lineHeight: 0.95 }}
          >
            {inst.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.24)}
            className="label-text text-sage/35"
            style={{ fontSize: '0.5rem', letterSpacing: '0.26em' }}
          >
            {inst.location.toUpperCase()}
            &nbsp;&nbsp;·&nbsp;&nbsp;
            {lang === 'PT' ? inst.datePT : inst.dateEN}
            &nbsp;&nbsp;·&nbsp;&nbsp;
            {lang === 'PT' ? inst.trainingTypePT : inst.trainingTypeEN}
          </motion.p>
        </div>

        <div className="px-6 md:px-12 lg:px-16 pb-24">

          {/* ── Description ── */}
          <motion.div
            {...revealInView(0)}
            className="max-w-2xl mb-16 md:mb-20 body-text text-sand/50 space-y-5 leading-loose"
            style={{ fontSize: 'clamp(0.875rem, 1.4vw, 0.95rem)' }}
          >
            {description.map((para, i) => <p key={i}>{para}</p>)}
          </motion.div>

          {/* ── Photos ── */}
          {inst.photos && inst.photos.length > 0 && (
            <motion.div {...revealInView(0.04)} className="mb-16 md:mb-20">
              <div className="flex items-center gap-4 mb-6">
                <p
                  className="label-text text-sage/25 shrink-0"
                  style={{ fontSize: '0.46rem', letterSpacing: '0.26em' }}
                >
                  {lang === 'PT' ? 'IMAGENS DA FORMAÇÃO' : 'TRAINING IMAGES'}
                </p>
                <div className="flex-1 h-px" style={{ background: 'rgba(220,201,160,0.05)' }} />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                {inst.photos.map((src, i) => (
                  <motion.div
                    key={src}
                    {...revealInView(0.04 + i * 0.03)}
                    className="relative overflow-hidden"
                    style={{ aspectRatio: '3/4' }}
                  >
                    <Image
                      src={src}
                      alt={`${inst.name} — ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Students ── */}
          <motion.div {...revealInView(0.06)} className="mb-16 md:mb-20">
            <div className="flex items-center gap-4 mb-6">
              <p
                className="label-text text-sage/25 shrink-0"
                style={{ fontSize: '0.46rem', letterSpacing: '0.26em' }}
              >
                {lang === 'PT'
                  ? `EQUIPE FORMADA · ${inst.students.length} TERAPEUTAS`
                  : `PRACTITIONERS TRAINED · ${inst.students.length}`}
              </p>
              <div className="flex-1 h-px" style={{ background: 'rgba(220,201,160,0.05)' }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
              {inst.students.map((name, i) => (
                <motion.div
                  key={name}
                  {...revealInView(0.06 + i * 0.025)}
                  className="flex items-center py-4 border-b"
                  style={{ borderColor: 'rgba(220,201,160,0.06)' }}
                >
                  <span
                    className="label-text text-sage/18 mr-5 shrink-0"
                    style={{ fontSize: '0.42rem', letterSpacing: '0.14em' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p
                    className="font-cormorant font-light text-ivory/60"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: 1.15 }}
                  >
                    {name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Impact ── */}
          <motion.div {...revealInView(0.08)} className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <p
                className="label-text text-sage/25 shrink-0"
                style={{ fontSize: '0.46rem', letterSpacing: '0.26em' }}
              >
                {lang === 'PT' ? 'O IMPACTO APÓS A FORMAÇÃO' : 'IMPACT AFTER TRAINING'}
              </p>
              <div className="flex-1 h-px" style={{ background: 'rgba(220,201,160,0.05)' }} />
            </div>

            <div
              className="body-text text-sand/45 space-y-5 leading-loose"
              style={{ fontSize: 'clamp(0.875rem, 1.4vw, 0.95rem)' }}
            >
              {impact.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </motion.div>

        </div>

        {/* ── Footer ── */}
        <div
          className="px-6 md:px-12 lg:px-16 py-10 border-t"
          style={{ borderColor: 'rgba(220,201,160,0.05)' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="label-text text-sage/18" style={{ fontSize: '0.48rem', letterSpacing: '0.22em' }}>
              CHERIETHAI INSTITUTO · SÃO PAULO · RIO DE JANEIRO
            </p>
            <Link
              href="/alunos"
              className="label-text text-sage/18 hover:text-sage/40 transition-colors duration-300"
              style={{ fontSize: '0.48rem', letterSpacing: '0.22em' }}
            >
              {lang === 'PT' ? '← VOLTAR AOS FORMADOS' : '← BACK TO GRADUATES'}
            </Link>
          </div>
        </div>

      </main>
    </>
  )
}
