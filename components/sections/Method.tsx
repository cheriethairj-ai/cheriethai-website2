'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] },
})

export default function Method() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

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
              className="object-cover object-center"
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
              O Método&nbsp;&nbsp;·&nbsp;&nbsp;The Method
            </motion.p>

            <motion.h2
              className="display-section text-ivory mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              {...inView(0.1)}
            >
              Um sistema construído<br />
              ao longo de duas décadas.
            </motion.h2>

            <motion.div {...inView(0.2)} className="body-text text-sand/75 space-y-4 text-base mb-10">
              <p>
                O Método CherieThai é uma abordagem estruturada
                para ler e restaurar a inteligência espacial do corpo.
              </p>
              <p>
                Enraizado na linhagem do bodywork Thai clássico —
                refinado ao longo de duas décadas de observação clínica —
                ele aborda não apenas onde o corpo retém tensão,
                mas por quê.
              </p>
              <p>
                Cada sessão segue uma lógica, não um roteiro.
                A técnica responde ao que encontra.
              </p>
            </motion.div>

            <motion.blockquote
              {...inView(0.3)}
              className="display-quote text-sage text-xl md:text-2xl mb-10 pl-6 border-l border-sand/20"
            >
              "Eficiência sem força.<br />
              Precisão sem distância."
            </motion.blockquote>

            <motion.a
              {...inView(0.4)}
              href="#principles"
              className="label-text text-sand/60 hover:text-sand transition-colors duration-300 flex items-center gap-3"
            >
              Conheça o método completo
              <span aria-hidden className="inline-block">——→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
