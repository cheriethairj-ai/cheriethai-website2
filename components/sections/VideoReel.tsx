'use client'

import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

const VIDEO_A = 'iA-h8_0TVpg' // IMG_3822 — ground-level massage session, Thailand

export default function VideoReel() {
  return (
    <section id="video-reel" className="bg-dark-moss overflow-hidden">
      <div className="px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">

          {/* Label */}
          <div className="flex items-center justify-between mb-12 md:mb-16">
            <motion.p {...inView()} className="label-text text-sage/60">
              CherieThai&nbsp;&nbsp;·&nbsp;&nbsp;Thailand
            </motion.p>
            <motion.p {...inView(0.08)} className="label-text text-sand/20 hidden sm:block" style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}>
              Clinical Bodywork in practice
            </motion.p>
          </div>

          {/* Heading */}
          <motion.h2
            {...inView(0.08)}
            className="font-cormorant font-light text-ivory mb-12 md:mb-16"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05 }}
          >
            O trabalho em movimento.
          </motion.h2>

          {/* Full-width autoplay video — no controls, no YouTube UI */}
          <motion.div {...inView(0.12)} className="relative overflow-hidden w-full" style={{ aspectRatio: '16/9' }}>
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_A}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_A}&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&showinfo=0&disablekb=1`}
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none', pointerEvents: 'none' }}
              allow="autoplay; fullscreen"
            />
          </motion.div>

          <motion.p {...inView(0.18)} className="label-text text-sand/20 mt-4" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
            Sessão clínica&nbsp;&nbsp;·&nbsp;&nbsp;CherieThai&nbsp;&nbsp;·&nbsp;&nbsp;Tailândia
          </motion.p>

        </div>
      </div>
    </section>
  )
}
