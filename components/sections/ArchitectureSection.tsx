'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const YOUTUBE_ID = 'ry3oVS1W2W0'
const EMBED_SRC = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&playsinline=1&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1`

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 1.0, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

const translations = {
  PT: {
    label: 'Corpo  ·  Geometria',
    line1: 'Cada linha',
    line2: 'existe com propósito.',
    body: `O corpo humano obedece a uma geometria precisa e o trabalho Thai navega essa geometria com elegância e intenção. As linhas que definem cada posição não são apenas estruturais. São também estéticas. A forma como o corpo é conduzido, a curvatura de um alongamento, o ângulo de uma pressão: tudo isso tem uma beleza que é inseparável da sua eficácia.\n\nNo trabalho Thai, essas linhas têm nome: Sen. Canais de energia que percorrem o corpo e guardam onde a tensão se acumula, onde a dor persiste, onde a libertação é possível.\n\nCada pressão é uma leitura. Cada trajeto, uma intenção. A forma serve à função. A função serve à libertação.`,
    footnote: 'SEN  ·  AS LINHAS ENERGÉTICAS DO CORPO TAILANDÊS',
  },
  EN: {
    label: 'Body  ·  Geometry',
    line1: 'Every line',
    line2: 'exists with purpose.',
    body: `The human body follows a precise geometry and Thai bodywork navigates that geometry with elegance and intention. The lines that define each position are not only structural. They are also aesthetic. The way the body is guided, the curve of a stretch, the angle of a pressure: all of it carries a beauty that is inseparable from its effect.\n\nIn Thai bodywork, these lines have a name: Sen. Energy channels that run through the body and hold where tension accumulates, where pain persists, where release becomes possible.\n\nEvery pressure is a reading. Every movement, an intention. Form serves function. Function serves release.`,
    footnote: 'SEN  ·  THE ENERGY LINES OF THE THAI BODY',
  },
}

export default function ArchitectureSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const [src, setSrc] = useState('')
  const { lang } = useLanguage()
  const t = translations[lang]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSrc(EMBED_SRC) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
    >

      {/* ── Video background ── */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-dark-moss" />
        <iframe
          src={src}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'max(100%, 56.25vh)',
            height: 'max(100%, 177.78vw)',
            border: 'none',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* ── Overlays ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom,
            rgba(13,17,14,0.55) 0%,
            rgba(13,17,14,0.25) 35%,
            rgba(13,17,14,0.45) 70%,
            rgba(13,17,14,0.88) 100%
          )`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(13,17,14,0.6) 0%, transparent 70%)' }}
      />

      {/* ── Text ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-2xl">

          <motion.p
            className="label-text text-sage mb-10 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
            style={{ fontSize: '0.6rem', letterSpacing: '0.28em' }}
          >
            {t.label}
          </motion.p>

          <motion.h2
            className="font-cormorant font-light text-ivory mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)', lineHeight: 1.0 }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.18, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            {t.line1}<br />
            <span className="text-sage/65">{t.line2}</span>
          </motion.h2>

          <motion.div
            className="font-cormorant italic text-sand/60 max-w-lg mb-10 space-y-5"
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.35rem)', lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            {t.body.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          <motion.p
            className="label-text text-sage/25"
            style={{ fontSize: '0.55rem', letterSpacing: '0.3em' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {t.footnote}
          </motion.p>

        </div>
      </motion.div>

    </section>
  )
}
