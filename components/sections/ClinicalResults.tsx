'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import LazyYouTubeShort from '@/components/LazyYouTubeShort'

function EdnaVideoWithAudio() {
  const ref = useRef<HTMLDivElement>(null)
  const [src, setSrc] = useState('')
  const embedUrl = 'https://www.youtube.com/embed/XFFAP-_K-1o?autoplay=1&loop=1&playlist=XFFAP-_K-1o&controls=1&playsinline=1&rel=0&modestbranding=1&showinfo=0'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSrc(embedUrl) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [embedUrl])

  return (
    <div ref={ref} className="absolute inset-0" style={{ background: '#0D110E' }}>
      {src && (
        <iframe
          src={src}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'max(100%, 56.25vh)',
            height: 'max(100%, 177.78vw)',
            border: 'none',
          }}
          allow="autoplay; fullscreen"
          title="Edna — Depoimento família"
        />
      )}
    </div>
  )
}

const stats = [
  { value: 94, suffix: '%', label: 'Satisfação dos clientes\nem todos os programas' },
  { value: 15, suffix: '+', label: 'Anos de prática clínica\ne aperfeiçoamento' },
  { value: 6, suffix: '', label: 'Países com\nbase ativa de clientes' },
]

const testimonials = [
  {
    quote:
      '"Já havia consultado três osteopatas e um fisioterapeuta. Nenhum deles havia feito o que uma única sessão aqui fez. Saí diferente de como entrei, e digo isso no sentido estrutural."',
    meta: 'São Paulo  ·  Programa Intensivo  ·  2024',
  },
  {
    quote:
      '"Há uma qualidade de atenção neste trabalho que não experienciei em nenhum outro lugar. Ela compreende o que está fazendo em um nível que é imediatamente perceptível."',
    meta: 'Londres  ·  Sessão Individual  ·  2023',
  },
  {
    quote:
      '"Vim por uma tensão crônica que havia normalizado ao longo de quinze anos. Saí me perguntando o que mais havia aceitado que não precisava estar lá."',
    meta: 'Rio de Janeiro  ·  Série Terapêutica  ·  2024',
  },
]

function CountUp({ target, suffix, isActive }: { target: number; suffix: string; isActive: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return
    let start = 0
    const duration = 1400
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isActive, target])

  return <>{count}{suffix}</>
}


export default function ClinicalResults() {
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' })
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="sessions" className="bg-off-white">

      {/* Estatísticas */}
      <div ref={statsRef} className="px-6 md:px-12 lg:px-16 py-24 md:py-36 border-b border-earth/10">
        <motion.p
          className="label-text text-sage mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Resultados
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-0 sm:divide-x divide-sand/30">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="sm:px-12 first:pl-0 last:pr-0 text-center sm:text-left"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <p
                className="font-cormorant font-light text-deep-moss mb-3"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', lineHeight: 1 }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} isActive={statsInView} />
              </p>
              <p className="body-text text-earth/60 text-sm whitespace-pre-line">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Session image break */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/session-seated.jpg"
          alt="Sessão CherieThai, trabalho de mobilidade"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(245,240,232,0.15) 0%, rgba(245,240,232,0.05) 50%, rgba(245,240,232,0.2) 100%)',
          }}
        />
      </div>

      {/* ── Edna: Featured case ── */}
      <div className="border-b border-earth/10 px-6 md:px-12 lg:px-16 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">

          <motion.p
            className="label-text text-sage mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Caso em Destaque&nbsp;&nbsp;·&nbsp;&nbsp;Rio de Janeiro
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Video */}
            <motion.div
              className="relative overflow-hidden"
              style={{ aspectRatio: '9/16', maxWidth: '340px', margin: '0 auto' }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <LazyYouTubeShort youtubeId="XFFAP-_K-1o" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <p className="font-cormorant font-light text-deep-moss mb-2" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1 }}>
                Edna.
              </p>
              <p className="label-text text-sage mb-10" style={{ letterSpacing: '0.22em' }}>
                81 anos&nbsp;&nbsp;·&nbsp;&nbsp;Rio de Janeiro
              </p>

              <p className="body-text text-earth/65 leading-relaxed mb-8" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: 1.7 }}>
                Aos 81 anos, Edna chegou carregando uma dor que o tempo havia normalizado. Após a sessão, os familiares que acompanhavam o processo deixaram registrado o que sentiram.
              </p>

              <div className="space-y-8">
                <div>
                  <blockquote
                    className="border-l border-sage/40 pl-6 font-cormorant font-light text-deep-moss/75 italic mb-3"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.45rem)', lineHeight: 1.6 }}
                  >
                    "Você fez a diferença em nossas vidas. Que possa impactar a vida de mais e mais pessoas. Mil vezes obrigado."
                  </blockquote>
                  <p className="label-text text-earth/35 pl-6" style={{ fontSize: '0.58rem', letterSpacing: '0.2em' }}>
                    — Eduardo&nbsp;&nbsp;·&nbsp;&nbsp;Rio de Janeiro
                  </p>
                </div>

                <div>
                  <blockquote
                    className="border-l border-sage/40 pl-6 font-cormorant font-light text-deep-moss/75 italic mb-3"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.45rem)', lineHeight: 1.6 }}
                  >
                    "A avó já estava há anos sofrendo com dor crônica. Depois de muitas tentativas frustradas com a medicina tradicional, foi a melhor decisão possível. A cada sessão, testemunhamos uma melhora notável. Eu, Dudu e toda a sua família, seremos eternamente gratos."
                  </blockquote>
                  <p className="label-text text-earth/35 pl-6" style={{ fontSize: '0.58rem', letterSpacing: '0.2em' }}>
                    — Igor&nbsp;&nbsp;·&nbsp;&nbsp;Rio de Janeiro
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Edna: second video with audio ── */}
      <div className="border-b border-earth/10 px-6 md:px-12 lg:px-16 py-24 md:py-36" style={{ background: '#F5F0E8' }}>
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text — left on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <p className="label-text text-sage mb-10" style={{ letterSpacing: '0.22em' }}>
                O que a família disse
              </p>

              <div className="space-y-10">
                <div>
                  <blockquote
                    className="border-l border-sage/40 pl-6 font-cormorant font-light text-deep-moss/75 italic mb-3"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.45rem)', lineHeight: 1.6 }}
                  >
                    "Você fez a diferença em nossas vidas. Que possa impactar a vida de mais e mais pessoas. Mil vezes obrigado."
                  </blockquote>
                  <p className="label-text text-earth/35 pl-6" style={{ fontSize: '0.58rem', letterSpacing: '0.2em' }}>
                    — Eduardo&nbsp;&nbsp;·&nbsp;&nbsp;Rio de Janeiro
                  </p>
                </div>

                <div>
                  <blockquote
                    className="border-l border-sage/40 pl-6 font-cormorant font-light text-deep-moss/75 italic mb-3"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.45rem)', lineHeight: 1.6 }}
                  >
                    "A avó já estava há anos sofrendo com dor crônica. Depois de muitas tentativas frustradas com a medicina tradicional, foi a melhor decisão possível. A cada sessão, testemunhamos uma melhora notável. Eu, Dudu e toda a sua família, seremos eternamente gratos."
                  </blockquote>
                  <p className="label-text text-earth/35 pl-6" style={{ fontSize: '0.58rem', letterSpacing: '0.2em' }}>
                    — Igor&nbsp;&nbsp;·&nbsp;&nbsp;Rio de Janeiro
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Video with audio — right on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="relative overflow-hidden"
              style={{ aspectRatio: '9/16', maxWidth: '340px', margin: '0 auto' }}
            >
              <EdnaVideoWithAudio />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Depoimentos */}
      <div className="px-6 md:px-12 lg:px-16 py-24 md:py-36">
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="label-text text-sage mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Os Depoimentos
          </motion.p>

          <div className="relative min-h-[220px] md:min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <blockquote
                  className="display-quote text-deep-moss mb-8"
                  style={{ fontSize: 'clamp(1.25rem, 3vw, 2.25rem)' }}
                >
                  {testimonials[activeTestimonial].quote}
                </blockquote>
                <p className="label-text text-sage">
                  {testimonials[activeTestimonial].meta}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-6 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className="relative h-px transition-all duration-400"
                style={{
                  width: i === activeTestimonial ? '40px' : '20px',
                  backgroundColor: i === activeTestimonial ? '#6B5C4E' : 'rgba(107,92,78,0.2)',
                }}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
            <div className="flex gap-4 ml-auto">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="label-text text-sage hover:text-earth transition-colors"
                aria-label="Anterior"
              >
                ←
              </button>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="label-text text-sage hover:text-earth transition-colors"
                aria-label="Próximo"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
