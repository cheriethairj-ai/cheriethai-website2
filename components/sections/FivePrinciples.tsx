'use client'

import { motion } from 'framer-motion'

const principles = [
  {
    number: '01',
    label: 'Compressão Estrutural',
    body: `Toda sessão começa antes do toque. O corpo é lido primeiro, sua postura, suas compensações, os lugares onde se reorganizou silenciosamente ao redor de uma restrição antiga.\n\nA compressão estrutural trabalha então ao longo da arquitetura real do corpo: aplicando pressão deliberada e gradual para restaurar o espaço onde o tecido esqueceu que existia.`,
  },
  {
    number: '02',
    label: 'Sequência de Alongamento Assistido',
    body: `Flexibilidade não é o objetivo. Amplitude de movimento é.\n\nO alongamento assistido CherieThai sequencia o corpo por todo o movimento disponível, não forçando a amplitude, mas recuperando-a. Cada alongamento é passivo, guiado e ordenado com intenção clínica.`,
  },
  {
    number: '03',
    label: 'Leitura Somática do Corpo',
    body: `O corpo carrega informações que nenhum formulário consegue capturar.\n\nAntes de uma sessão começar, e ao longo dela, os praticantes CherieThai leem a linguagem do corpo: suas tensões, suas assimetrias, seus padrões de proteção. O tratamento é uma resposta ao que é encontrado, não um protocolo aplicado independentemente.`,
  },
  {
    number: '04',
    label: 'Regulação do Sistema Nervoso',
    body: `O trabalho estrutural por si só não é suficiente. O sistema nervoso precisa ser integrado à sessão.\n\nAs técnicas CherieThai são sequenciadas para conduzir o cliente por estados de ativação e recuperação, trabalhando com a inteligência regulatória do corpo, e não contra ela. É por isso que os efeitos persistem além da sessão.`,
  },
  {
    number: '05',
    label: 'Precisão em Tecidos Profundos',
    body: `Pressão sem precisão é força. O trabalho de tecido profundo CherieThai é aplicado com exatidão anatômica, estruturas específicas, profundidades específicas, direções específicas.\n\nNada é aproximado. O corpo responde à exatidão.`,
  },
]

export default function FivePrinciples() {
  return (
    <section id="principles" className="bg-near-black py-24 md:py-36 overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-16 mb-16 md:mb-20">
        <motion.p
          className="label-text text-sage mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Os Cinco Princípios
        </motion.p>

        <motion.h2
          className="display-section text-ivory"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          A inteligência<br />da prática.
        </motion.h2>
      </div>

      <div className="divider-sand" />

      <div>
        {principles.map((p, i) => (
          <PrincipleRow key={p.number} principle={p} index={i} />
        ))}
      </div>
    </section>
  )
}

function PrincipleRow({ principle, index }: { principle: (typeof principles)[0]; index: number }) {
  return (
    <motion.div
      className="relative border-b border-sand/10 group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      <div className="relative px-6 md:px-12 lg:px-16 py-12 md:py-16 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-16 lg:gap-24">

        <motion.span
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 font-cormorant font-light text-sand select-none pointer-events-none hidden md:block"
          style={{ fontSize: 'clamp(6rem, 12vw, 11rem)', opacity: 0.06, lineHeight: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: index * 0.08 + 0.3 }}
        >
          {principle.number}
        </motion.span>

        <div className="flex md:flex-col gap-4 md:gap-3 md:w-56 lg:w-72">
          <span className="label-text text-sage/50">{principle.number}</span>
          <p className="label-text text-sand/80 leading-relaxed">{principle.label}</p>
        </div>

        <div className="max-w-xl">
          {principle.body.split('\n\n').map((para, j) => (
            <p key={j} className={`body-text text-sage/70 text-base md:text-lg ${j > 0 ? 'mt-4' : ''}`}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
