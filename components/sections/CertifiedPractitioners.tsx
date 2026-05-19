'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// ─── Practitioner Data ──────────────────────────────────────────────────────
// Add new practitioners by appending entries to this array.
// Each entry supports an optional portrait image, set image to the public path
// (e.g. '/portrait-practitioner-name.jpg') once available, or leave null.

const practitioners = [
  {
    id: 'ana-carolina',
    name: 'Ana Carolina M.',
    city: 'São Paulo',
    country: 'Brasil',
    formation: 'Formação Base · 2023',
    specialty: 'Bodywork Estrutural e Regulação Somática',
    philosophy: '"Cada sessão é uma escuta. O corpo fala, cabe ao terapeuta aprender o idioma."',
    image: null as string | null,
  },
  {
    id: 'mariana-luz',
    name: 'Mariana L.',
    city: 'Rio de Janeiro',
    country: 'Brasil',
    formation: 'Formação Base · 2024',
    specialty: 'Mobilidade Terapêutica e Trabalho de Chão',
    philosophy: '"Não trabalho para consertar. Trabalho para restaurar o acesso."',
    image: null as string | null,
  },
  {
    id: 'thomas-h',
    name: 'Thomas H.',
    city: 'Lisboa',
    country: 'Portugal',
    formation: 'Formação Avançada · 2024',
    specialty: 'Leitura Somática e Tecido Profundo',
    philosophy: '"A precisão é uma forma de respeito."',
    image: null as string | null,
  },
  {
    id: 'isabella-f',
    name: 'Isabella F.',
    city: 'Buenos Aires',
    country: 'Argentina',
    formation: 'Residência Chapada · 2024',
    specialty: 'Regulação do Sistema Nervoso e Fluxo Contínuo',
    philosophy: '"O ritmo correto transforma mais profundamente do que a força."',
    image: null as string | null,
  },
]

// ─── Gradient placeholders per index ────────────────────────────────────────
const portraitGradients = [
  'linear-gradient(155deg, #2A3329 0%, #3D4A40 55%, #4B5A4F 100%)',
  'linear-gradient(155deg, #3A3028 0%, #4A3C30 55%, #3D4A40 100%)',
  'linear-gradient(155deg, #2A3329 0%, #4B5A4F 55%, #3A3028 100%)',
  'linear-gradient(155deg, #1A1F1B 0%, #3D4A40 55%, #2A3329 100%)',
]

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

// ─── Practitioner Card ───────────────────────────────────────────────────────
function PractitionerCard({
  practitioner,
  index,
}: {
  practitioner: (typeof practitioners)[0]
  index: number
}) {
  return (
    <motion.article
      className="flex flex-col"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      {/* Portrait */}
      <div className="relative aspect-[3/4] overflow-hidden mb-7 group">
        {practitioner.image ? (
          <Image
            src={practitioner.image}
            alt={practitioner.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            style={{ background: portraitGradients[index % portraitGradients.length] }}
          />
        )}

        {/* City tag */}
        <div className="absolute top-5 left-5 z-10">
          <span className="label-text text-sage/50 text-xs">{practitioner.city}</span>
        </div>

        {/* Formation tag */}
        <div className="absolute bottom-5 left-5 right-5 z-10">
          <p className="label-text text-sage/25 text-xs">[ {practitioner.formation} ]</p>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1">

        <p className="label-text text-sage mb-1">{practitioner.specialty}</p>

        <h3
          className="font-cormorant font-light text-deep-moss mb-5"
          style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.1 }}
        >
          {practitioner.name}
        </h3>

        <blockquote className="font-cormorant italic text-earth/60 text-base leading-relaxed mb-5 pl-4 border-l border-earth/15 flex-1">
          {practitioner.philosophy}
        </blockquote>

        <div className="border-t border-earth/10 pt-5 mt-auto">
          <p className="label-text text-earth/35 text-xs">
            {practitioner.city}&nbsp;&nbsp;·&nbsp;&nbsp;{practitioner.country}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Main Section ────────────────────────────────────────────────────────────
export default function CertifiedPractitioners() {
  return (
    <section id="certified-practitioners" className="bg-ivory overflow-hidden">

      {/* ── Header ── */}
      <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-36 pb-0 border-t border-earth/10">
        <motion.p {...inView()} className="label-text text-sage mb-6">
          Praticantes Formados&nbsp;&nbsp;·&nbsp;&nbsp;Instituto CherieThai
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-0">
          <motion.h2
            className="display-section text-deep-moss"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            Um coletivo<br />internacional.
          </motion.h2>
          <motion.p
            className="body-text text-earth/55 max-w-xs text-sm leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Praticantes certificados pelo Instituto CherieThai —
            selecionados individualmente, formados com rigor,
            ativos em diferentes países.
          </motion.p>
        </div>
      </div>

      {/* ── Context strip ── */}
      <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16 border-b border-earth/10">
        <motion.p
          className="body-text text-earth/45 text-sm md:text-base max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          A certificação CherieThai não é conferida por horas acumuladas.
          É o resultado de uma formação que muda fundamentalmente como o praticante
          lê e responde ao corpo. Cada praticante listado aqui passou por esse processo —
          e o Instituto responde pelo padrão do seu trabalho.
        </motion.p>
      </div>

      {/* ── Grid ── */}
      <div className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-6">
            {practitioners.map((p, i) => (
              <PractitionerCard key={p.id} practitioner={p} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer note ── */}
      <div className="px-6 md:px-12 lg:px-16 pb-16 md:pb-20">
        <motion.div
          className="max-w-xl"
          {...inView(0.1)}
        >
          <p className="body-text text-earth/38 text-xs leading-relaxed">
            Este diretório é atualizado à medida que novas formações são concluídas.
            A inclusão é por convite, após avaliação do padrão clínico do praticante
            e da consistência do trabalho com os princípios do Método CherieThai.
          </p>
        </motion.div>
      </div>

    </section>
  )
}
