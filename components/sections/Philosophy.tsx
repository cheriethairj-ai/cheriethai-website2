'use client'

import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] },
})

export default function Philosophy() {
  return (
    <section className="bg-ivory py-32 md:py-44 lg:py-56 px-6 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">

        <motion.p {...inView()} className="label-text text-sage mb-16 md:mb-20">
          Filosofia
        </motion.p>

        <motion.blockquote
          className="display-quote text-deep-moss mb-10 md:mb-14"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
        >
          {['"O corpo lembra', 'o que a mente', 'já deixou para trás."'].map((line, i) => (
            <motion.span
              key={i}
              className="block overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              {line}
            </motion.span>
          ))}
        </motion.blockquote>

        <motion.div {...inView(0.3)} className="max-w-2xl body-text text-earth space-y-4 text-base md:text-lg mb-10">
          <p>
            A maioria dos trabalhos corporais trata sintomas.<br />
            CherieThai trata estrutura.
          </p>
          <p>
            Trabalhamos com o corpo como um sistema arquitetônico —
            moldado pelo hábito, pela história e pela compressão.
            As sessões não são prescritas com antecedência.
            São lidas em tempo real, a partir do que o corpo apresenta.
          </p>
          <p>
            Este não é um tratamento que você recebe.<br />
            É um em que você participa.
          </p>
        </motion.div>

        <motion.div
          className="divider-earth w-48 my-10"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <motion.p {...inView(0.5)} className="font-cormorant text-lg italic text-sage">
          Cherie T. Charnkul, Fundadora
        </motion.p>
      </div>
    </section>
  )
}
