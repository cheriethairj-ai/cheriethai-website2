'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

const paths = {
  PT: [
    {
      label: 'O MÉTODO',
      heading: 'Descubra o Método',
      sub: 'A abordagem terapêutica que define o CherieThai.',
      href: '/about',
    },
    {
      label: 'OS PRATICANTES',
      heading: 'Conheça nossos Praticantes',
      sub: 'Seis praticantes formados numa linha singular.',
      href: '/therapists',
    },
    {
      label: 'O INSTITUTO',
      heading: 'Conheça o Instituto',
      sub: 'Formação profissional em Thai bodywork clínico.',
      href: '/institute',
    },
  ],
  EN: [
    {
      label: 'THE METHOD',
      heading: 'Discover the Method',
      sub: 'The therapeutic approach that defines CherieThai.',
      href: '/about',
    },
    {
      label: 'THE PRACTITIONERS',
      heading: 'Meet our Practitioners',
      sub: 'Six practitioners shaped by one singular lineage.',
      href: '/therapists',
    },
    {
      label: 'THE INSTITUTE',
      heading: 'Discover the Institute',
      sub: 'Professional training in clinical Thai bodywork.',
      href: '/institute',
    },
  ],
}

export default function HomepageGateway() {
  const { lang } = useLanguage()
  const items = paths[lang]

  return (
    <section
      className="border-t border-b"
      style={{
        background: '#0d110e',
        borderColor: 'rgba(220,201,160,0.06)',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.href}
            {...inView(i * 0.12)}
            className={[
              i < items.length - 1
                ? 'border-b md:border-b-0 md:border-r'
                : '',
            ].join(' ')}
            style={{ borderColor: 'rgba(220,201,160,0.06)' }}
          >
            <Link
              href={item.href}
              className="group flex flex-col justify-between px-8 md:px-10 lg:px-14 py-14 md:py-16 lg:py-20 min-h-[200px] transition-colors duration-500 hover:bg-white/[0.025]"
            >
              <p
                className="label-text text-sage/35 mb-8"
                style={{ fontSize: '0.52rem', letterSpacing: '0.3em' }}
              >
                {item.label}
              </p>

              <div>
                <h2
                  className="font-cormorant font-light text-ivory mb-3 group-hover:text-sand transition-colors duration-400"
                  style={{ fontSize: 'clamp(1.45rem, 2.4vw, 2rem)', lineHeight: 1.1 }}
                >
                  {item.heading}
                </h2>
                <p
                  className="body-text text-sand/35 mb-6 leading-relaxed"
                  style={{ fontSize: '0.8rem' }}
                >
                  {item.sub}
                </p>
                <span
                  className="label-text text-sage/30 group-hover:text-sage/70 transition-all duration-300 inline-block group-hover:translate-x-1"
                  style={{ fontSize: '0.75rem' }}
                >
                  →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
