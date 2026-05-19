'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function PhilosophyHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const entry = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.0, delay, ease: [0.25, 0.1, 0.25, 1.0] as const },
  })

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[640px] flex items-end overflow-hidden noise-overlay"
    >
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 25% 55%, rgba(61,74,64,0.7) 0%, transparent 55%),
              radial-gradient(ellipse at 75% 25%, rgba(42,51,41,0.5) 0%, transparent 50%),
              radial-gradient(ellipse at 55% 80%, rgba(75,90,79,0.4) 0%, transparent 50%),
              linear-gradient(155deg, #1A1F1B 0%, #2A3329 30%, #3D4A40 65%, #1A1F1B 100%)
            `,
          }}
        />
      </motion.div>

      {/* Right-side decorative vertical text */}
      <div className="absolute right-8 md:right-14 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-5">
        <div className="w-px h-16 bg-sand/15" />
        <span
          className="label-text text-sand/20 tracking-widest"
          style={{ writingMode: 'vertical-rl', fontSize: '0.55rem' }}
        >
          BODYWORK THAI CLÍNICO
        </span>
        <div className="w-px h-16 bg-sand/15" />
      </div>

      {/* Gradient veil */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(26,31,27,0.9) 0%, rgba(26,31,27,0.35) 50%, transparent 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 lg:pb-28"
      >
        <motion.p {...entry(0.2)} className="label-text text-sage mb-10 md:mb-14">
          Filosofia
        </motion.p>

        {/* Main headline, two independent lines for stagger */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="display-hero text-ivory block"
            style={{ fontSize: 'clamp(4rem, 12vw, 10.5rem)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            O toque como
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10 md:mb-14">
          <motion.h1
            className="display-hero text-sand block"
            style={{ fontSize: 'clamp(4rem, 12vw, 10.5rem)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            inteligência.
          </motion.h1>
        </div>

        <motion.p
          {...entry(0.85)}
          className="body-text text-sand/65 max-w-sm text-base md:text-lg"
        >
          Cinco princípios que definem como a CherieThai aborda o corpo,
          e por que essa abordagem importa.
        </motion.p>
      </motion.div>

      {/* Scroll pulse */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-hidden="true"
      >
        <div className="relative w-px h-12 bg-sand/15 overflow-hidden">
          <motion.div
            className="absolute inset-x-0 top-0 bg-sand/50"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
            style={{ height: '40%' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
