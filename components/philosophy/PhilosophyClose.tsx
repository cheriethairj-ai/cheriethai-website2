'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as const },
})

export default function PhilosophyClose() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <>
      {/* ── Synthesis strip ── */}
      <section className="bg-ivory px-6 md:px-12 lg:px-20 py-24 md:py-36 lg:py-44">
        <div className="max-w-5xl mx-auto">

          {/* Rule + label */}
          <motion.div
            className="flex items-center gap-6 mb-16 md:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px bg-earth/15 flex-1" />
            <p className="label-text text-sage shrink-0">The Integration</p>
          </motion.div>

          {/* Main synthesis quote */}
          <motion.blockquote
            className="font-cormorant italic text-deep-moss mb-12 md:mb-16"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            "When sensitivity, nuance, precision,<br className="hidden md:block" />
            self-preservation, and flow<br className="hidden md:block" />
            are practised together —<br className="hidden md:block" />
            touch becomes something else entirely."
          </motion.blockquote>

          {/* Body */}
          <motion.div
            {...inView(0.25)}
            className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20"
          >
            <p className="body-text text-earth/65 text-base md:text-lg leading-loose">
              These five principles are not taught as theory.
              They are developed through practice, through hundreds of hours
              of working with the body, failing to listen, learning to listen again,
              and discovering what changes when attention is fully present.
            </p>
            <p className="body-text text-earth/65 text-base md:text-lg leading-loose">
              Every CherieThai practitioner carries them, not as a checklist,
              but as a way of being in the room with another person's body.
              The goal is never the technique. The goal is what the technique allows.
            </p>
          </motion.div>

          {/* Attribution */}
          <motion.div
            {...inView(0.35)}
            className="flex items-center gap-5"
          >
            <div className="w-10 h-px bg-earth/20" />
            <p className="font-cormorant italic text-earth/45 text-base md:text-lg">
              Cherie T. Charnkul, Founder · CherieThai Institute
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Cinematic CTA section ── */}
      <section ref={ref} className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background */}
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 30% 60%, rgba(75,90,79,0.5) 0%, transparent 55%),
                radial-gradient(ellipse at 70% 30%, rgba(42,51,41,0.6) 0%, transparent 50%),
                linear-gradient(150deg, #1A1F1B 0%, #2A3329 40%, #3D4A40 75%, #2A3329 100%)
              `,
            }}
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(26,31,27,0.4) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 py-24 md:py-32">
          <motion.p {...inView()} className="label-text text-sage mb-10">
            Experience the Method
          </motion.p>

          <motion.h2
            className="font-cormorant font-light text-ivory mb-8"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', lineHeight: 1.0 }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            The body<br />already knows.
          </motion.h2>

          <motion.p
            {...inView(0.25)}
            className="body-text text-sand/65 max-w-xs text-base mb-12"
          >
            All five principles are present in every CherieThai session.
            The experience is the clearest explanation.
          </motion.p>

          <motion.div
            {...inView(0.35)}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="/philosophy#contact" className="btn-ghost text-ivory border-ivory/30 inline-flex">
              <span>Book a Session</span>
              <span aria-hidden>→</span>
            </a>
            <a href="/#therapists" className="btn-ghost text-sand/60 border-sand/25 inline-flex">
              <span>Meet the Practitioners</span>
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Summary band, five names ── */}
      <div
        className="border-t border-sand/10 px-6 md:px-12 lg:px-20 py-10 md:py-14"
        style={{ backgroundColor: '#1A1F1B' }}
      >
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.1 }}
        >
          {['Sensitivity', 'Nuance', 'Precision', 'Self-Preservation', 'Flow'].map((name, i, arr) => (
            <span key={name} className="flex items-center gap-8 md:gap-16">
              <a
                href={`#principle-0${i + 1}`}
                className="label-text text-sage/35 hover:text-sage/70 transition-colors duration-300"
              >
                {name}
              </a>
              {i < arr.length - 1 && (
                <span className="text-sand/10 hidden sm:inline">·</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </>
  )
}
