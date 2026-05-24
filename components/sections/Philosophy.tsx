'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] },
})

const translations = {
  PT: {
    label: 'Filosofia',
    quote: ['"O corpo lembra', 'o que a mente', 'já deixou para trás."'],
    p1: <>A maioria dos trabalhos corporais trata sintomas.<br />CherieThai trata estrutura.</>,
    p2: 'Trabalhamos com o corpo como um sistema arquitetônico — moldado pelo hábito, pela história e pela compressão. As sessões não são prescritas com antecedência. São lidas em tempo real, a partir do que o corpo apresenta.',
    p3: <>Este não é um tratamento que você recebe.<br />É um em que você participa.</>,
    founder: 'Cherie T. Charnkul, Fundadora',
  },
  EN: {
    label: 'Philosophy',
    quote: ['"The body remembers', 'what the mind', 'has already left behind."'],
    p1: <>Most bodywork treats symptoms.<br />CherieThai treats structure.</>,
    p2: 'We work with the body as an architectural system — shaped by habit, history, and compression. Sessions are not predetermined. They are read in real time, based on what the body presents.',
    p3: <>This is not a treatment you simply receive.<br />It is one you participate in.</>,
    founder: 'Cherie T. Charnkul, Founder',
  },
}

export default function Philosophy() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section className="bg-ivory py-32 md:py-44 lg:py-56 px-6 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">

        <motion.p {...inView()} className="label-text text-sage mb-16 md:mb-20">
          {t.label}
        </motion.p>

        <motion.blockquote
          className="display-quote text-deep-moss mb-10 md:mb-14"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
        >
          {t.quote.map((line, i) => (
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
          <p>{t.p1}</p>
          <p>{t.p2}</p>
          <p>{t.p3}</p>
        </motion.div>

        <motion.div
          className="divider-earth w-48 my-10"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <motion.p {...inView(0.5)} className="font-cormorant text-lg italic text-sage">
          {t.founder}
        </motion.p>
      </div>
    </section>
  )
}
