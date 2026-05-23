'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const YOUTUBE_ID = 'ry3oVS1W2W0'
const EMBED_SRC = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&playsinline=1&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1`

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 1.0, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

export default function ArchitectureSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const [src, setSrc] = useState('')

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
            /* Portrait 9:16 video covering both landscape & portrait viewports */
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
            Corpo&nbsp;&nbsp;·&nbsp;&nbsp;Geometria
          </motion.p>

          <motion.h2
            className="font-cormorant font-light text-ivory mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)', lineHeight: 1.0 }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.18, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            Cada linha<br />
            existe para<br />
            <span className="text-sage/65">libertar.</span>
          </motion.h2>

          <motion.p
            className="font-cormorant italic text-sand/60 max-w-lg mb-10"
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.35rem)', lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            O corpo humano obedece a uma geometria precisa.
            Linhas que correm da sole do pé ao topo da cabeça.
            Ângulos que determinam onde o peso se acumula.
            Diagonais que guardam o que não foi resolvido.
            <br /><br />
            O trabalho Thai navega essas linhas — não contra elas.
            Cada pressão é uma leitura. Cada trajeto, uma intenção.
            Tudo serve à liberação.
          </motion.p>

          <motion.p
            className="label-text text-sage/25"
            style={{ fontSize: '0.55rem', letterSpacing: '0.3em' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            SEN&nbsp;&nbsp;·&nbsp;&nbsp;AS LINHAS ENERGÉTICAS DO CORPO TAILANDÊS
          </motion.p>

        </div>
      </motion.div>

    </section>
  )
}
