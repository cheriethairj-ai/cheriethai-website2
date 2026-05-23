'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const YOUTUBE_ID = 'iA-h8_0TVpg' // IMG_3822 — ground session Thailand
const EMBED_SRC = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&showinfo=0&disablekb=1&enablejsapi=0`

export default function CinematicSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
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
        {/* Fallback background image (shows on iOS / when video blocked) */}
        <div
          className="absolute inset-0 bg-dark-moss"
          style={{
            backgroundImage: 'url(/hero-studio.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />

        {/* YouTube autoplay background — desktop only, cropped to hide YouTube UI */}
        <div className="hidden md:block absolute inset-0">
          <iframe
            src={src}
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            style={{
              position: 'absolute',
              top: 'calc(50% - 60px)',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'max(100%, 56.25vh)',
              height: 'calc(max(100%, 177.78vw) + 120px)',
              border: 'none',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      {/* ── Overlays ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom,
            rgba(26,31,27,0.55) 0%,
            rgba(26,31,27,0.3) 35%,
            rgba(26,31,27,0.45) 70%,
            rgba(26,31,27,0.85) 100%
          )`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(26,31,27,0.5) 0%, transparent 60%)' }}
      />

      {/* ── Text content ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full px-6 md:px-12 lg:px-16"
      >
        <div className="max-w-4xl">

          <motion.p
            className="label-text text-sage mb-10 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            Nossa História&nbsp;&nbsp;·&nbsp;&nbsp;A Filosofia
          </motion.p>

          <motion.h2
            className="font-cormorant font-light text-ivory mb-8"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)', lineHeight: 1.02 }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            Nascida em Phimai.<br />
            <span className="text-sage/70">Criada entre os campos de arroz.</span>
          </motion.h2>

          <motion.p
            className="body-text text-sand/70 max-w-lg text-base md:text-lg leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            Quatro anos de idade. Uma aldeia no nordeste da Tailândia. Filha de agricultores,
            aprendeu com quem trabalha o corpo por necessidade, não por protocolo.
            <br /><br />
            No Brasil, esse entendimento se traduziu em algo mais raro.
            Uma clínica construída em silêncio, reconhecida por quem a vive.
            Cada sessão é uma leitura estrutural. Uma decisão tomada antes de qualquer palavra.
          </motion.p>

          <motion.a
            href="#about"
            className="label-text text-sand/50 hover:text-sand transition-colors duration-300 flex items-center gap-3 w-fit"
            style={{ fontSize: '0.625rem', letterSpacing: '0.22em' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Nossa História
            <span aria-hidden>→</span>
          </motion.a>

        </div>
      </motion.div>

    </section>
  )
}
