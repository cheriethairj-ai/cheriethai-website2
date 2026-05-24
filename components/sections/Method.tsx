'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] },
})

const translations = {
  PT: {
    label: 'O Método  ·  The Method',
    headline: <>Um sistema construído<br />ao longo de duas décadas.</>,
    p1: 'O Método CherieThai não é massagem Thai tradicional.',
    p2: 'Cherie é originária do Isaan — o nordeste da Tailândia — uma região com sua própria forma de ler o movimento, a dor e o corpo. Uma visão de mundo que inclui crenças ancestrais sobre como o corpo guarda tensão, como a dor se manifesta e como o movimento liberta. Cultivada ao longo de gerações, não ensinada em livros.',
    p3: 'Combinada com anos de artes marciais, dança e observação clínica, essa herança deu origem a algo que não existe em mais lugar nenhum: uma leitura corporal que é simultaneamente estrutural, intuitiva e profundamente física.',
    p4: 'Cada sessão segue uma lógica, não um roteiro. A técnica responde ao que encontra.',
    quote: <>"Eficiência sem força.<br />Precisão sem distância."</>,
    cta: 'Conheça o método completo',
  },
  EN: {
    label: 'The Method',
    headline: <>A system built<br />over two decades.</>,
    p1: 'The CherieThai Method is not traditional Thai massage.',
    p2: 'Cherie is from Isaan — the northeastern region of Thailand — a place with its own way of reading movement, pain, and the body. A worldview shaped by ancestral beliefs about how the body holds tension, how pain manifests, and how movement releases it. Passed down through generations, not found in textbooks.',
    p3: 'Combined with years of martial arts, dance, and clinical observation, this heritage gave rise to something that exists nowhere else: a way of reading the body that is simultaneously structural, intuitive, and deeply physical.',
    p4: 'Each session follows a logic, not a script. The technique responds to what it finds.',
    quote: <>"Efficiency without force.<br />Precision without distance."</>,
    cta: 'Discover the full method',
  },
}

export default function Method() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section
      id="method"
      ref={ref}
      className="bg-deep-moss overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* Image column */}
        <motion.div
          className="relative lg:w-[55%] h-[62vh] md:h-[55vh] lg:h-auto overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ y: imageY }}
          >
            <Image
              src="/session-archer.jpg"
              alt="Posição arqueira, Método CherieThai"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(42,51,41,0.15) 0%, rgba(42,51,41,0.4) 100%)',
              }}
            />
          </motion.div>
        </motion.div>

        {/* Text column */}
        <div className="lg:w-[45%] flex items-center px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-40">
          <div className="max-w-md">

            <motion.p {...inView()} className="label-text text-sage mb-10">
              {t.label}
            </motion.p>

            <motion.h2
              className="display-section text-ivory mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              {...inView(0.1)}
            >
              {t.headline}
            </motion.h2>

            <motion.div {...inView(0.2)} className="body-text text-sand/75 space-y-4 text-base mb-10">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
              <p>{t.p4}</p>
            </motion.div>

            <motion.blockquote
              {...inView(0.3)}
              className="display-quote text-sage text-xl md:text-2xl mb-10 pl-6 border-l border-sand/20"
            >
              {t.quote}
            </motion.blockquote>

            <motion.a
              {...inView(0.4)}
              href="#principles"
              className="label-text text-sand/60 hover:text-sand transition-colors duration-300 flex items-center gap-3"
            >
              {t.cta}
              <span aria-hidden className="inline-block">——→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
