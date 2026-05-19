'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const sequence = [0, 0.8, 1.1, 1.6, 2.0, 2.3]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] },
})

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen min-h-[600px] flex items-end overflow-hidden noise-overlay"
    >
      {/* Background — professional São Paulo clinic hero shot */}
      <div className="absolute inset-0">
        <Image
          src="/clinic-saopaulo-hero.png"
          alt="CherieThai — São Paulo clinic, bodywork in session"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: 'center 25%' }}
        />
      </div>

      {/* Dark atmospheric overlay — preserves the warm photo tones */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom,
              rgba(26,31,27,0.45) 0%,
              rgba(26,31,27,0.25) 35%,
              rgba(26,31,27,0.55) 70%,
              rgba(26,31,27,0.88) 100%
            )
          `,
        }}
      />

      {/* Right-side vignette — grounds the text */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(26,31,27,0.5) 0%, transparent 55%)',
        }}
      />

      {/* Text content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24"
      >
        {/* Superlabel row */}
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <motion.p {...fadeUp(sequence[0])} className="label-text text-sage">
            Bodywork Thai Clínico&nbsp;&nbsp;·&nbsp;&nbsp;Cherie T. Charnkul
          </motion.p>
          <motion.p {...fadeUp(sequence[0])} className="label-text text-sand/30 text-right hidden sm:block" style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}>
            Results-based clinical bodywork
          </motion.p>
        </div>

        {/* Hero headline */}
        <motion.h1
          className="display-hero text-ivory mb-6"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
        >
          <motion.span className="block overflow-hidden" {...fadeUp(sequence[1])}>
            O corpo
          </motion.span>
          <motion.span className="block overflow-hidden" {...fadeUp(sequence[2])}>
            é arquitetura.
          </motion.span>
        </motion.h1>

        {/* Subline */}
        <motion.p {...fadeUp(sequence[3])} className="body-text text-sand/80 max-w-xs md:max-w-sm mb-10 md:mb-12">
          Bodywork Thai clínico. Precisão estrutural.
          <br />
          Um trabalho que permanece.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(sequence[4])} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="#method" className="btn-ghost text-sand/70 border-sand/30 justify-between sm:justify-start">
            <span>Descobrir o Método</span>
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
