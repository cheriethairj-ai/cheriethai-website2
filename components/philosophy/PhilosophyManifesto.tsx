'use client'

import { motion } from 'framer-motion'

const lines = [
  'The body does not lie.',
  'It carries what has not been spoken,\nholds what has not been resolved,\norganises itself around patterns\nthat began long before this session.',
  'CherieThai was built on a single belief:\nthat touch, when applied with sensitivity,\nnuance, precision, and flow,\nbecomes something more than technique.',
  'It becomes a form of intelligence.',
]

export default function PhilosophyManifesto() {
  return (
    <section className="bg-ivory overflow-hidden">

      {/* ── Top strip, horizontal rule + label ── */}
      <div className="px-6 md:px-12 lg:px-20 pt-14 md:pt-20 flex items-center gap-8">
        <motion.div
          className="h-px bg-earth/15 flex-1"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
        />
        <motion.p
          className="label-text text-sage shrink-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          The Foundation
        </motion.p>
        <motion.div
          className="h-px bg-earth/15 w-12"
          initial={{ scaleX: 0, originX: 1 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        />
      </div>

      {/* ── Manifesto text block ── */}
      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-28 lg:py-36 max-w-5xl">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            className={`whitespace-pre-line ${
              i === 0
                ? 'font-cormorant font-light text-deep-moss mb-10'
                : i === 3
                ? 'font-cormorant italic text-moss'
                : 'body-text text-earth/70'
            } ${i < lines.length - 1 ? 'mb-8 md:mb-10' : ''}`}
            style={{
              fontSize:
                i === 0
                  ? 'clamp(2.25rem, 5vw, 4rem)'
                  : i === 3
                  ? 'clamp(1.5rem, 3vw, 2.5rem)'
                  : 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: i === 0 ? 1.05 : i === 3 ? 1.2 : 1.85,
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.9,
              delay: i * 0.06,
              ease: [0.25, 0.1, 0.25, 1.0],
            }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* ── Founder attribution ── */}
      <div className="px-6 md:px-12 lg:px-20 pb-20 md:pb-28">
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-8 h-px bg-earth/25" />
          <p className="font-cormorant italic text-earth/50 text-lg">
            Cherie T. Charnkul, Founder
          </p>
        </motion.div>
      </div>

      {/* ── Transition band, dark ── */}
      <div
        className="h-28 md:h-36"
        style={{
          background:
            'linear-gradient(to bottom, #F5F0E8 0%, #2A3329 100%)',
        }}
      />
    </section>
  )
}
