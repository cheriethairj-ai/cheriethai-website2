'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.95, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

export default function ToEmbody() {
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

          {/* Main layout — photo + text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center mb-20 md:mb-28">

            {/* Photo */}
            <motion.div
              {...inView(0.1)}
              className="relative overflow-hidden"
              style={{ aspectRatio: '2/3' }}
            >
              <Image
                src="/toembody-portrait.jpg"
                alt="To Embody — Movement Wear Coleção 01"
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </motion.div>

            {/* Text */}
            <motion.div {...inView(0.18)}>
              <p className="label-text text-sage mb-8">Movement Wear&nbsp;&nbsp;·&nbsp;&nbsp;Coleção 01</p>

              <p
                className="font-cormorant font-light text-deep-moss mb-10"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.05 }}
              >
                Em breve.
              </p>

              <p className="body-text text-earth/65 text-base leading-relaxed mb-6">
                A estética pela qual somos reconhecidos. Agora em forma de vestuário, objeto e aroma. Tudo o que compõe o ambiente CherieThai, traduzido para o cotidiano de quem o vive.
              </p>

              <p className="body-text text-earth/40 text-sm leading-relaxed mb-14">
                Os detalhes serão anunciados em primeira mão para quem já faz parte da nossa comunidade.
              </p>

              <a
                href={`https://wa.me/5511911135083?text=${encodeURIComponent('Olá, gostaria de ser avisado sobre o lançamento da loja To Embody.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="label-text text-deep-moss/60 hover:text-deep-moss transition-colors duration-300 flex items-center gap-3"
                style={{ fontSize: '0.625rem', letterSpacing: '0.22em' }}
              >
                Manifestar Interesse
                <span aria-hidden>→</span>
              </a>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  )
}
