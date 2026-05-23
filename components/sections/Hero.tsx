'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const translations = {
  PT: {
    superlabel: 'Bodywork Thai Clínico  ·  Cherie T. Charnkul',
    tagline: 'Results-based clinical bodywork',
    line1: 'O corpo',
    line2: 'é arquitetura.',
    subline1: 'Bodywork Thai clínico. Precisão estrutural.',
    subline2: 'Um trabalho que permanece.',
    cta: 'Descobrir o Método',
  },
  EN: {
    superlabel: 'Clinical Thai Bodywork  ·  Cherie T. Charnkul',
    tagline: 'Results-based clinical bodywork',
    line1: 'The body',
    line2: 'is architecture.',
    subline1: 'Clinical Thai bodywork. Structural precision.',
    subline2: 'Work that holds.',
    cta: 'Discover the Method',
  },
}

const sequence = [0, 0.8, 1.1, 1.6, 2.0, 2.3]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] },
})

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const { lang } = useLanguage()
  const t = translations[lang]

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen min-h-[600px] flex items-end overflow-hidden noise-overlay"
    >
      {/* Background — studio photo */}
      <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: '#1A1F1B' }}>
        <Image
          src="/hero-studio.jpg"
          alt="CherieThai — São Paulo clinic, bodywork in session"
          fill
          priority
          quality={95}
          sizes="100vw"
          style={{ objectFit: 'contain', objectPosition: 'center top' }}
        />
      </div>

      {/* Dark atmospheric overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom,
              rgba(26,31,27,0.55) 0%,
              rgba(26,31,27,0.2) 25%,
              rgba(26,31,27,0.35) 60%,
              rgba(26,31,27,0.92) 100%
            )
          `,
        }}
      />

      {/* Left vignette — grounds the text */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(26,31,27,0.6) 0%, transparent 60%)',
        }}
      />

      {/* Superlabel — floats near top, below nav */}
      <motion.div
        style={{ opacity }}
        className="absolute z-10 top-20 md:top-24 left-6 md:left-12 lg:left-16 right-6 md:right-12 lg:right-16 flex items-center justify-between"
      >
        <motion.p
          {...fadeUp(sequence[0])}
          className="label-text text-sage/80 whitespace-nowrap"
          style={{ fontSize: 'clamp(0.5rem, 1.8vw, 0.65rem)', letterSpacing: '0.18em' }}
        >
          {t.superlabel}
        </motion.p>
        <motion.p
          {...fadeUp(sequence[0])}
          className="label-text text-sand/25 text-right hidden sm:block"
          style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}
        >
          {t.tagline}
        </motion.p>
      </motion.div>

      {/* Text content — bottom of hero */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-14"
      >
        {/* Hero headline */}
        <motion.h1
          className="display-hero text-ivory mb-6"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
        >
          <motion.span className="block overflow-hidden" {...fadeUp(sequence[1])}>
            {t.line1}
          </motion.span>
          <motion.span className="block overflow-hidden" {...fadeUp(sequence[2])}>
            {t.line2}
          </motion.span>
        </motion.h1>

        {/* Subline + CTA — grouped together in the dark strip */}
        <motion.p {...fadeUp(sequence[3])} className="body-text text-sand/75 max-w-xs md:max-w-sm mb-5 md:mb-6">
          {t.subline1}
          <br />
          {t.subline2}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(sequence[4])} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="#method" className="btn-ghost text-sand/70 border-sand/30 justify-between sm:justify-start">
            <span>{t.cta}</span>
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(sequence[5])}
        className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <div className="relative w-px h-14 bg-sand/20 overflow-hidden">
          <motion.div
            className="absolute inset-x-0 top-0 bg-sand"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            style={{ height: '50%' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
