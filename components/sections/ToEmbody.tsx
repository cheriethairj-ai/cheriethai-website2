'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.95, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

const translations = {
  PT: {
    comingSoon: 'EM BREVE  ·  LOJA',
    pronunciation: '/ɪmˈbɒd.i/  ·  verbo',
    definition: 'Dar forma tangível a uma ideia, qualidade ou sentimento —\nnão através do pensamento, mas através do corpo,\nda postura, do movimento e da presença.',
    collectionLabel: 'Movement Wear  ·  Coleção 01',
    collectionTitle: 'Um primeiro olhar sobre a nossa coleção.',
    body: 'A estética pela qual somos reconhecidos. Agora em forma de vestuário, objeto e aroma. Tudo o que compõe o ambiente CherieThai, traduzido para o cotidiano de quem o vive.',
    note: 'Os detalhes serão anunciados em primeira mão para quem já faz parte da nossa comunidade.',
    cta: 'Manifestar Interesse',
    whatsappMsg: 'Olá, gostaria de ser avisado sobre o lançamento da loja To Embody.',
  },
  EN: {
    comingSoon: 'COMING SOON  ·  STORE',
    pronunciation: '/ɪmˈbɒd.i/  ·  verb',
    definition: 'To give physical form to an idea, quality, or feeling —\nnot through thought alone, but through the body,\nposture, movement, and presence.',
    collectionLabel: 'Movement Wear  ·  Collection 01',
    collectionTitle: 'A first look at our collection.',
    body: 'The aesthetic we are known for. Now in the form of clothing, objects, and scent. Everything that shapes the CherieThai environment, translated into the everyday of those who live it.',
    note: 'Details will be announced first to those already part of our community.',
    cta: 'Express Interest',
    whatsappMsg: "Hello, I'd like to be notified about the launch of the To Embody store.",
  },
}

export default function ToEmbody() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section id="to-embody" className="overflow-hidden">

      {/* ── Hero — typographic definition entry ── */}
      <div
        className="relative flex items-center overflow-hidden border-b border-earth/10"
        style={{ minHeight: '88vh', background: '#F5EFE6' }}
      >
        {/* Thai ornamental pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          <div style={{ opacity: 0.15, position: 'relative', width: '160%', height: '160%', flexShrink: 0 }}>
            <Image
              src="/lotus-bg.png"
              alt=""
              fill
              quality={95}
              sizes="160vw"
              style={{ objectFit: 'contain', objectPosition: 'center center' }}
              aria-hidden
            />
          </div>
        </div>

        <div className="w-full px-6 md:px-12 lg:px-16 py-24 md:py-36">
          <div className="max-w-5xl mx-auto">

            {/* Label row */}
            <motion.div {...inView(0)} className="flex items-center justify-between mb-16 md:mb-20">
              <p className="label-text text-sage" style={{ fontSize: '0.65rem', letterSpacing: '0.28em' }}>
                {t.comingSoon}
              </p>
              <p className="label-text text-earth/20 hidden sm:block" style={{ fontSize: '0.55rem', letterSpacing: '0.28em' }}>
                BY CHERIETHAI
              </p>
            </motion.div>

            {/* Main title */}
            <motion.h2
              {...inView(0.08)}
              className="font-cormorant font-light text-deep-moss"
              style={{ fontSize: 'clamp(4.5rem, 16vw, 14rem)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
            >
              To Embody.
            </motion.h2>

            {/* Definition entry */}
            <motion.div
              {...inView(0.18)}
              className="mt-10 md:mt-14 max-w-2xl border-t border-earth/12 pt-8 md:pt-10"
            >
              <div className="flex items-baseline gap-4 mb-5">
                <p className="font-cormorant italic text-earth/35" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                  to em·bod·y
                </p>
                <p className="label-text text-earth/25" style={{ fontSize: '0.58rem', letterSpacing: '0.18em' }}>
                  {t.pronunciation}
                </p>
              </div>

              <p
                className="font-cormorant font-light text-earth/60 leading-relaxed whitespace-pre-line"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)', lineHeight: 1.55 }}
              >
                {t.definition}
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Collection content ── */}
      <div className="bg-ivory px-6 md:px-12 lg:px-16 pt-16 md:pt-20 pb-24 md:pb-36">
        <div className="max-w-6xl mx-auto">

          {/* Sneak peek intro */}
          <div className="mb-12 md:mb-16 border-b border-earth/10 pb-12">
            <div className="flex items-end justify-between">
              <div>
                <motion.p {...inView(0.05)} className="label-text text-sage mb-4">
                  {t.collectionLabel}
                </motion.p>
                <motion.p
                  {...inView(0.1)}
                  className="font-cormorant font-light text-deep-moss"
                  style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', lineHeight: 1.1 }}
                >
                  {t.collectionTitle}
                </motion.p>
              </div>
              <motion.p {...inView(0.15)} className="label-text text-earth/30 hidden sm:block" style={{ fontSize: '0.58rem', letterSpacing: '0.22em' }}>
                Premium sportswear
              </motion.p>
            </div>
          </div>

          {/* Editorial photo grid */}
          <div className="mb-20 md:mb-28">

            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4 items-start">

              <motion.div {...inView(0.06)} style={{ backgroundColor: '#F0EBE1' }}>
                <Image
                  src="/toembody-portrait.jpg"
                  alt="To Embody — Collection 01 Front"
                  width={467}
                  height={651}
                  quality={95}
                  sizes="(max-width: 768px) 33vw, 28vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </motion.div>

              <motion.div {...inView(0.1)} style={{ backgroundColor: '#F0EBE1' }}>
                <Image
                  src="/toembody-fullbody.jpg"
                  alt="To Embody — Collection 01 Full Look"
                  width={503}
                  height={1535}
                  quality={95}
                  sizes="(max-width: 768px) 33vw, 28vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </motion.div>

              <motion.div {...inView(0.16)} style={{ backgroundColor: '#F0EBE1' }}>
                <Image
                  src="/toembody-back2.jpg"
                  alt="To Embody — Collection 01 Back"
                  width={989}
                  height={1591}
                  quality={95}
                  sizes="(max-width: 768px) 33vw, 28vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </motion.div>

            </div>

            <motion.div {...inView(0.2)} className="relative overflow-hidden w-full" style={{ aspectRatio: '16/7' }}>
              <Image
                src="/toembody-shorts.png"
                alt="To Embody — Collection 01 Shorts"
                fill
                quality={95}
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>

          </div>

          {/* Bottom text + CTA */}
          <motion.div {...inView(0.1)} className="max-w-lg">
            <p className="body-text text-earth/65 text-base leading-relaxed mb-6">
              {t.body}
            </p>

            <p className="body-text text-earth/40 text-sm leading-relaxed mb-14">
              {t.note}
            </p>

            <a
              href={`https://wa.me/5521995699760?text=${encodeURIComponent(t.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="label-text text-deep-moss/60 hover:text-deep-moss transition-colors duration-300 flex items-center gap-3"
              style={{ fontSize: '0.625rem', letterSpacing: '0.22em' }}
            >
              {t.cta}
              <span aria-hidden>→</span>
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
