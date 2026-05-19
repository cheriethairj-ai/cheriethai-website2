'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.95, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

const categories = [
  {
    label: 'Vestuário',
    description: 'Peças para mover o corpo com intenção.',
  },
  {
    label: 'Movement Wear',
    description: 'Peças para quem leva o corpo a sério.',
  },
  {
    label: 'Aromas',
    description: 'Os cheiros da clínica CherieThai. Destilados.',
  },
]

export default function ToEmbody() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section id="to-embody" className="bg-ivory overflow-hidden border-t border-earth/10">

      <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-36 pb-24 md:pb-36">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="border-b border-earth/10 pb-10 mb-16 md:mb-24">
            <div className="flex items-start justify-between mb-6">
              <motion.p {...inView()} className="label-text text-sage">Em Breve&nbsp;&nbsp;·&nbsp;&nbsp;Loja</motion.p>
              <motion.p {...inView(0.1)} className="label-text text-earth/25 text-xs text-right hidden sm:block">
                CherieThai&nbsp;&nbsp;·&nbsp;&nbsp;Shop
              </motion.p>
            </div>
            <motion.h2
              className="font-cormorant font-light text-deep-moss mb-5"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1.0 }}
              {...inView(0.08)}
            >
              To Embody.
            </motion.h2>
            <motion.p
              {...inView(0.14)}
              className="font-cormorant italic text-earth/65"
              style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)', lineHeight: 1.6 }}
            >
              Dar forma física ao que é abstrato.<br />
              Tornar uma ideia, uma qualidade, um sentimento<br />
              tangível através do corpo.
            </motion.p>
          </div>

          {/* Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 mb-20 md:mb-28">

            <motion.div {...inView(0.1)}>
              <p className="body-text text-earth/65 text-base md:text-lg leading-relaxed mb-6">
                A estética pela qual somos reconhecidos. Agora em forma de objeto, aroma e vestuário. Tudo o que compõe o ambiente CherieThai, traduzido para o cotidiano de quem o vive.
              </p>
              <p className="body-text text-earth/45 text-sm leading-relaxed">
                Brevemente disponível. Os detalhes serão anunciados em primeira mão para quem já faz parte da nossa comunidade.
              </p>
            </motion.div>

            <motion.div {...inView(0.15)} className="space-y-0">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.label}
                  className="border-t border-earth/8 py-7 flex items-start justify-between gap-6"
                  {...inView(0.1 + i * 0.07)}
                >
                  <div>
                    <p
                      className="font-cormorant font-light text-deep-moss mb-1"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.05 }}
                    >
                      {cat.label}
                    </p>
                    <p className="body-text text-earth/45 text-sm">{cat.description}</p>
                  </div>
                  <span className="label-text text-earth/18 text-xs shrink-0 pt-1">Em Breve</span>
                </motion.div>
              ))}
              <div className="border-t border-earth/8" />
            </motion.div>

          </div>

          {/* Product showcase */}
          <motion.div {...inView(0.1)} className="mb-16 md:mb-24">

            {/* Top Compression */}
            <motion.div {...inView(0.05)} className="flex items-baseline justify-between mb-6">
              <p className="font-cormorant font-light text-deep-moss" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.05 }}>
                Top Compression
              </p>
              <p className="label-text text-earth/25 text-xs">Movement Wear · Coleção 01</p>
            </motion.div>

            <div className="grid grid-cols-3 gap-px mb-16 md:mb-20" style={{ background: '#EDEAE2' }}>
              {[
                { src: '/toembody-portrait.jpg', alt: 'To Embody — Top', fit: 'object-cover object-top' },
                { src: '/toembody-back.jpg', alt: 'To Embody — Costas', fit: 'object-contain' },
                { src: '/toembody-front.jpg', alt: 'To Embody — Frente', fit: 'object-contain' },
              ].map(({ src, alt, fit }, i) => (
                <div
                  key={i}
                  className="relative cursor-zoom-in"
                  style={{ aspectRatio: '2/3', background: '#EDEAE2' }}
                  onClick={() => setLightbox(src)}
                >
                  <Image src={src} alt={alt} fill quality={100} sizes="(max-width: 768px) 33vw, 20vw" className={`${fit} transition-transform duration-500 hover:scale-[1.02]`} />
                </div>
              ))}
            </div>

            {/* Shorts de Treino */}
            <motion.div {...inView(0.05)} className="flex items-baseline justify-between mb-6">
              <p className="font-cormorant font-light text-deep-moss" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.05 }}>
                Shorts de Treino
              </p>
              <p className="label-text text-earth/25 text-xs">Movement Wear · Coleção 01</p>
            </motion.div>

            <div
              className="relative cursor-zoom-in"
              style={{ aspectRatio: '3/2', background: '#EDEAE2' }}
              onClick={() => setLightbox('/toembody-shorts.png')}
            >
              <Image src="/toembody-shorts.png" alt="To Embody — Shorts, frente e costas" fill quality={100} sizes="100vw" className="object-contain transition-transform duration-500 hover:scale-[1.01]" />
            </div>

            {/* Lightbox */}
            <AnimatePresence>
              {lightbox && (
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.92)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setLightbox(null)}
                >
                  <motion.div
                    className="relative w-full h-full max-w-2xl mx-auto"
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.92, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image src={lightbox} alt="To Embody" fill quality={100} sizes="100vw" className="object-contain" />
                    <button
                      onClick={() => setLightbox(null)}
                      className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-200"
                      aria-label="Fechar"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 6L6 18M6 6l12 12"/>
                      </svg>
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pricing row */}
            <div className="grid grid-cols-3 gap-px bg-earth/8 mt-1">
              {[
                { name: 'Top Compression', price: 'R$ 320' },
                { name: 'Shorts de Treino', price: 'R$ 380' },
                { name: 'Set Completo', price: 'R$ 620' },
              ].map(({ name, price }) => (
                <div key={name} className="bg-ivory px-4 py-5">
                  <p className="font-cormorant font-light text-deep-moss mb-1" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', lineHeight: 1.2 }}>{name}</p>
                  <p className="label-text text-sage/40 text-xs mb-2">To Embody</p>
                  <p className="font-cormorant font-light text-deep-moss/55" style={{ fontSize: '0.95rem' }}>{price}</p>
                </div>
              ))}
            </div>

            <p className="label-text text-earth/25 text-xs mt-6">Pré-venda&nbsp;&nbsp;·&nbsp;&nbsp;Entrega após produção&nbsp;&nbsp;·&nbsp;&nbsp;Em breve</p>
          </motion.div>

          {/* Notify strip */}
          <motion.div
            {...inView(0.2)}
            className="border border-earth/12 px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <p className="label-text text-sage/55 mb-2">Seja o primeiro a saber</p>
              <p className="body-text text-earth/50 text-sm leading-relaxed max-w-sm">
                Manifeste interesse via WhatsApp e receba o aviso de lançamento antes da divulgação pública.
              </p>
            </div>
            <a
              href={`https://wa.me/5511911135083?text=${encodeURIComponent('Olá, gostaria de ser avisado sobre o lançamento da loja To Embody.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="label-text text-deep-moss/60 hover:text-deep-moss transition-colors duration-300 flex items-center gap-3 shrink-0"
              style={{ fontSize: '0.625rem', letterSpacing: '0.22em' }}
            >
              Manifestar Interesse
              <span aria-hidden>→</span>
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
