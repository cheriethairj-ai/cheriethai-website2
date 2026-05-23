'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

// ─── Principle Data ────────────────────────────────────────────────────────────

const principles = [
  {
    number: '01',
    name: 'Sensibilidade',
    namePt: 'Sensibilidade',
    thesis: 'A capacidade de perceber o que nem sempre é comunicado em palavras.',
    body: `A sensibilidade é a capacidade refinada de ler os sinais do corpo, reconhecer suas necessidades e compreender a resposta terapêutica mais adequada a cada momento.\n\nÉ a ponte entre o que é falado e o que é sentido, permitindo que cada tratamento se desenvolva por meio de uma conexão genuína, e não de técnica rotineira.`,
    imageMeta: 'Mãos em repouso · Luz direcional quente · Estudo próximo',
    accent: '#AAB6A2',
    bg: 'dark' as const,
    imageGradient: 'linear-gradient(135deg, #2A3329 0%, #3D4A40 60%, #4B5A4F 100%)',
    imageAccent: 'rgba(170,182,162,0.1)',
  },
  {
    number: '02',
    name: 'Nuance',
    namePt: 'Nuance',
    thesis: 'O verdadeiro domínio terapêutico vive nos detalhes.',
    body: `Nuance é a arte de perceber e responder às menores variações de tecido, respiração, ritmo e resposta física ao longo da sessão.\n\nPor meio de observação refinada e intenção controlada, pressão, tempo, direção e movimento são continuamente ajustados para criar tratamentos que parecem profundamente individualizados e precisamente sintonizados.\n\nNa CherieThai, nuance transforma técnica em artesanato.`,
    imageMeta: 'Detalhe de pressão no antebraço · Luz clínica fria · Estrutural',
    accent: '#DCC9A0',
    bg: 'light' as const,
    imageGradient: 'linear-gradient(145deg, #EAE4D8 0%, #DDD5C4 60%, #CCC4B0 100%)',
    imageAccent: 'rgba(107,92,78,0.08)',
  },
  {
    number: '03',
    name: 'Precisão',
    namePt: 'Precisão',
    thesis: 'A capacidade disciplinada de acessar as estruturas exatas que requerem intervenção.',
    body: `Precisão é a capacidade disciplinada de acessar as estruturas exatas que requerem intervenção, entregando a profundidade adequada com clareza e controle.\n\nA exploração de múltiplas camadas de pressão permite ao terapeuta trabalhar com especificidade excepcional, abordando padrões estruturais e musculares complexos com maior acurácia.\n\nQuando o corpo se sente seguro na precisão do toque, a confiança se desenvolve naturalmente, permitindo uma resposta terapêutica mais profunda e resultados mais eficazes.`,
    imageMeta: 'Polegar na crista vertebral · Composição arquitetônica · Alto contraste',
    accent: '#AAB6A2',
    bg: 'dark' as const,
    imageGradient: 'linear-gradient(160deg, #1A1F1B 0%, #2A3329 45%, #3D4A40 100%)',
    imageAccent: 'rgba(220,201,160,0.07)',
  },
  {
    number: '04',
    name: 'Autopreservação',
    namePt: 'Autopreservação',
    thesis: 'Longevidade é parte do domínio.',
    body: `Cada movimento é executado com consciência, eficiência e mecânica corporal inteligente para preservar o terapeuta enquanto mantém a mais alta qualidade de contato terapêutico.\n\nReconhecer limites, adaptar a técnica de forma inteligente e proteger o corpo do praticante são essenciais para sustentar a excelência ao longo do tempo.\n\nNa CherieThai, a autopreservação é considerada uma disciplina profissional.`,
    imageMeta: 'Postura do praticante · Enquadramento corporal integral · Luz geométrica',
    accent: '#DCC9A0',
    bg: 'light' as const,
    imageGradient: 'linear-gradient(145deg, #F5F0E8 0%, #EAE4D8 50%, #DDD5C4 100%)',
    imageAccent: 'rgba(75,90,79,0.06)',
  },
  {
    number: '05',
    name: 'Fluxo',
    namePt: 'Fluxo',
    thesis: 'A elegância do movimento dentro do trabalho terapêutico é cuidadosamente cultivada.',
    body: `Transições suaves, variação rítmica e movimento contínuo criam um diálogo ininterrupto com o corpo, permitindo que tecidos e articulações explorem novos caminhos de liberação e restauração.\n\nO próprio movimento é medicina.\n\nNa CherieThai, fluxo representa a integração de sensibilidade, nuance, precisão e presença em uma única expressão terapêutica contínua.`,
    imageMeta: 'Estudo de movimento · Longa exposição · Mãos em movimento',
    accent: '#AAB6A2',
    bg: 'dark' as const,
    imageGradient:
      'linear-gradient(155deg, #2A3329 0%, #3D4A40 35%, #4B5A4F 65%, #3A3028 100%)',
    imageAccent: 'rgba(170,182,162,0.12)',
  },
]

// ─── Progress Tracker ──────────────────────────────────────────────────────────

function PrincipleProgress({ active }: { active: number }) {
  return (
    <div className="hidden lg:flex fixed right-10 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4">
      {principles.map((p, i) => (
        <motion.div
          key={p.number}
          className="flex items-center gap-3"
          animate={{ opacity: i === active ? 1 : 0.25 }}
          transition={{ duration: 0.4 }}
        >
          <span
            className="label-text text-right"
            style={{
              fontSize: '0.5rem',
              color: i === active ? '#DCC9A0' : '#AAB6A2',
              letterSpacing: '0.2em',
            }}
          >
            {p.number}
          </span>
          <motion.div
            className="rounded-full"
            animate={{
              width: i === active ? '20px' : '4px',
              height: '1px',
              backgroundColor: i === active ? '#DCC9A0' : '#AAB6A2',
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
          />
        </motion.div>
      ))}
    </div>
  )
}

// ─── Single Principle Section ──────────────────────────────────────────────────

function PrincipleSection({
  principle,
  index,
  onActive,
}: {
  principle: (typeof principles)[0]
  index: number
  onActive: (i: number) => void
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const isInView = useInView(ref, { margin: '-40% 0px -40% 0px' })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  const isDark = principle.bg === 'dark'

  // Notify parent which section is active
  if (isInView) onActive(index)

  const textColor = isDark ? 'text-ivory' : 'text-deep-moss'
  const subColor = isDark ? 'text-sage' : 'text-earth/60'
  const bodyColor = isDark ? 'text-sage/70' : 'text-earth/65'
  const thesisColor = isDark ? 'text-sand' : 'text-moss'
  const bgColor = isDark ? '#1A1F1B' : '#F5F0E8'

  // Layout: odd indices → text left / image right; even → image left / text right
  const imageLeft = index % 2 === 0

  return (
    <section
      ref={ref}
      id={`principle-${principle.number}`}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* ── Ghost number, massive, architectural ── */}
      <div
        className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
        style={{ justifyContent: imageLeft ? 'flex-end' : 'flex-start' }}
      >
        <motion.span
          className="font-cormorant font-light"
          style={{
            fontSize: 'clamp(12rem, 28vw, 24rem)',
            lineHeight: 0.85,
            color: isDark ? 'rgba(220,201,160,0.05)' : 'rgba(75,90,79,0.06)',
            paddingRight: imageLeft ? '2rem' : 0,
            paddingLeft: imageLeft ? 0 : '2rem',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          {principle.number}
        </motion.span>
      </div>

      {/* ── Main layout ── */}
      <div className="relative z-10 w-full flex items-center min-h-screen">
        {/* Text — full width, constrained max */}
        <div className="relative flex items-center px-6 md:px-12 lg:px-24 xl:px-36 py-20 md:py-28 lg:py-36 w-full">
          <div className="max-w-2xl w-full">

            {/* Number + name header */}
            <motion.div
              className="flex items-baseline gap-5 mb-10 md:mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <span className={`label-text ${subColor} shrink-0`}>{principle.number}</span>
              <div
                className="h-px flex-1 opacity-20"
                style={{ background: principle.accent }}
              />
              <span className={`label-text ${subColor} shrink-0`}>{principle.namePt}</span>
            </motion.div>

            {/* Principle name */}
            <motion.h2
              className={`font-cormorant font-light ${textColor} mb-6`}
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 0.95 }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.0, delay: 0.08, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              {principle.name}
            </motion.h2>

            {/* Horizontal rule */}
            <motion.div
              className="mb-8"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
              style={{ height: '1px', background: `${principle.accent}30` }}
            />

            {/* Thesis, the one-line summary */}
            <motion.p
              className={`font-cormorant italic ${thesisColor} mb-8`}
              style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)', lineHeight: 1.45 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              {principle.thesis}
            </motion.p>

            {/* Body paragraphs, staggered */}
            <div className="space-y-5">
              {principle.body.split('\n\n').map((para, j) => (
                <motion.p
                  key={j}
                  className={`body-text ${bodyColor} text-base md:text-lg`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.8,
                    delay: 0.28 + j * 0.1,
                    ease: [0.25, 0.1, 0.25, 1.0],
                  }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Principle index mark, bottom of text column */}
            <motion.div
              className="mt-14 md:mt-16 flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <span className="label-text" style={{ color: `${principle.accent}50`, fontSize: '0.55rem' }}>
                {principle.number} / 05
              </span>
              <div
                className="h-px flex-1 max-w-[3rem]"
                style={{ background: `${principle.accent}25` }}
              />
              <span className="label-text" style={{ color: `${principle.accent}30`, fontSize: '0.55rem' }}>
                FILOSOFIA CHERIETHAI
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Principles Container ──────────────────────────────────────────────────────

export default function PhilosophyPrinciples() {
  const [activePrinciple, setActivePrinciple] = useState(0)

  return (
    <>
      {/* Fixed progress tracker */}
      <PrincipleProgress active={activePrinciple} />

      {/* Intro strip, entering the principles */}
      <div
        className="px-6 md:px-12 lg:px-20 py-16 md:py-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        style={{ backgroundColor: '#1A1F1B' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <p className="label-text text-sage mb-5">
            Os Cinco Princípios
          </p>
          <h2
            className="font-cormorant font-light text-ivory"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.05 }}
          >
            A inteligência<br />da prática.
          </h2>
        </motion.div>

        <motion.p
          className="body-text text-sage/45 text-sm max-w-xs md:text-right"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cinco princípios que definem como a CherieThai
          lê, compreende e trabalha com o corpo.
          Não regras. Uma forma de pensar através das mãos.
        </motion.p>
      </div>

      {/* The five principle sections */}
      {principles.map((principle, i) => (
        <PrincipleSection
          key={principle.number}
          principle={principle}
          index={i}
          onActive={setActivePrinciple}
        />
      ))}
    </>
  )
}
