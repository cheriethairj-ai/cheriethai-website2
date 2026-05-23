'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const retreats = [
  {
    location: 'Chapada Diamantina, Brasil',
    label: 'O Retiro Original',
    nights: '7 noites',
    participants: 'Máximo 12 participantes',
    frequency: 'Anual',
    body: 'Realizado em uma das paisagens geologicamente mais extraordinárias do Brasil, antiga, silenciosa, de pedra. A luz é diferente ali. O ar exige um tipo diferente de respiração. É o lugar certo para mudar como você sustenta seu corpo.',
    note: 'Sessões de bodywork duas vezes ao dia. Certificação UTTS disponível.',
  },
  {
    location: 'Europa, por edição',
    label: 'O Retiro Europeu',
    nights: '7 noites',
    participants: 'Máximo 12 participantes',
    frequency: 'Anual · Setembro',
    body: 'Um retiro CherieThai realizado em um local europeu selecionado por seu silêncio arquitetônico e proximidade com a quietude. O Atlântico. Pinhal. Paredes brancas. Sessões CherieThai à tarde. Noites longas que fazem o restante do trabalho.',
    note: 'Local confirmado por edição. Candidaturas abertas seis meses antes.',
  },
  {
    location: 'Privado, qualquer local',
    label: 'Retiro Privado',
    nights: 'A combinar',
    participants: '6–12 participantes',
    frequency: 'Qualquer época',
    body: 'Um retiro CherieThai concebido em torno de um grupo privado, corporativo, terapêutico ou pessoal. Programa, local e duração projetados em colaboração total. O método viaja. O silêncio é seu para escolher.',
    note: 'Mínimo 6 participantes. Consultar diretamente.',
  },
]

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number,number,number,number] },
})

export default function Retreats() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <section id="retreats" className="overflow-hidden">

      {/* ── Hero ── */}
      <div ref={heroRef} className="relative h-screen min-h-[600px] flex items-end overflow-hidden">

        {/* Video background — luxury retreat Thailand */}
        {/* Replace YOUTUBE_RETREAT_ID with your YouTube video ID once uploaded */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Fallback gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 50% 30%, rgba(75,90,79,0.4) 0%, transparent 65%),
                radial-gradient(ellipse at 80% 70%, rgba(42,51,41,0.6) 0%, transparent 50%),
                radial-gradient(ellipse at 15% 50%, rgba(61,74,64,0.5) 0%, transparent 55%),
                linear-gradient(175deg, #1A1F1B 0%, #2A3329 30%, #3D4A40 60%, #4B5A4F 80%, #2A3329 100%)
              `,
            }}
          />
          {/* YouTube embed — uncomment once ID is available */}
          {/* <iframe
            src="https://www.youtube.com/embed/YOUTUBE_RETREAT_ID?autoplay=1&mute=1&loop=1&playlist=YOUTUBE_RETREAT_ID&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&showinfo=0"
            allow="autoplay; fullscreen"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'max(100%, 177.78vh)',
              height: 'max(100%, 56.25vw)',
              border: 'none',
              pointerEvents: 'none',
            }}
          /> */}
        </div>

        <motion.div className="absolute inset-0" style={{ y: bgY }} />

        <div className="absolute inset-0 overlay-bottom" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(42,51,41,0.4) 0%, transparent 60%)' }}
        />

        <motion.div
          style={{ y: textY }}
          className="relative z-10 px-6 md:px-12 lg:px-16 pb-20 md:pb-28 w-full"
        >
          <motion.p {...inView()} className="label-text text-sage mb-14">
            Imersões&nbsp;&nbsp;·&nbsp;&nbsp;Retiros
          </motion.p>

          <motion.h2
            className="display-section text-ivory mb-6"
            style={{ fontSize: 'clamp(2.75rem, 8vw, 7rem)' }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            Em algum lugar<br />
            entre o <em className="font-cormorant font-light not-italic">Brasil</em><br />
            e o silêncio.
          </motion.h2>

          <motion.p {...inView(0.25)} className="body-text text-sand/70 max-w-sm text-base mb-10">
            Retiros anuais. Vagas limitadas.
            <br />Candidaturas abertas duas vezes ao ano.
          </motion.p>

          <motion.a {...inView(0.35)} href="#contact" className="btn-ghost text-sand/80 border-sand/30 inline-flex">
            <span>Solicitar Informações</span>
            <span aria-hidden>→</span>
          </motion.a>
        </motion.div>
      </div>

      {/* ── Contexto ── */}
      <div className="bg-dark-moss px-6 md:px-12 lg:px-16 py-14 md:py-20 border-y border-sand/10">
        <div className="max-w-3xl">
          <motion.p
            className="body-text text-sage/70 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            O Retiro CherieThai não é um wellness holiday. É uma imersão estruturada —
            sete dias de sessões diárias de bodywork, prática de movimento e observação somática
            guiada, realizados em locais escolhidos por seu silêncio arquitetônico.
          </motion.p>
          <motion.p
            className="body-text text-sage/40 text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            No quarto dia, algo muda. Observamos isso consistentemente.
            Não conhecemos o mecanismo preciso, apenas que acontece, e que vale a viagem.
          </motion.p>
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="bg-ivory px-6 md:px-12 lg:px-16 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">

          <motion.div
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 mb-16"
            {...inView()}
          >
            <p className="label-text text-sage">Edições Atuais</p>
            <p className="body-text text-earth/40 text-sm">Os retiros não se repetem. Cada edição é projetada para o seu momento.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-earth/10">
            {retreats.map((r, i) => (
              <motion.div
                key={r.label}
                className="bg-ivory p-8 md:p-10 flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <div
                  className="w-full aspect-square mb-7 overflow-hidden"
                  style={{
                    background: `linear-gradient(${135 + i * 20}deg, #2A3329 0%, #${['3D4A40', '4B5A4F', '3A3028'][i]} 100%)`,
                  }}
                >
                  <div className="h-full flex items-end p-4">
                    <p className="label-text text-sage/20 text-xs">[ {r.location} ]</p>
                  </div>
                </div>

                <p className="label-text text-sage mb-2">{r.location}</p>
                <h3 className="font-cormorant font-light text-deep-moss text-2xl mb-4">{r.label}</h3>

                <div className="divider-earth mb-5" />

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { k: 'Duração', v: r.nights },
                    { k: 'Grupo', v: r.participants },
                    { k: 'Frequência', v: r.frequency },
                  ].map(({ k, v }) => (
                    <div key={k}>
                      <p className="label-text text-sage/40 mb-0.5">{k}</p>
                      <p className="body-text text-earth/65 text-xs">{v}</p>
                    </div>
                  ))}
                </div>

                <p className="body-text text-earth/65 text-sm flex-1 mb-4">{r.body}</p>
                <p className="label-text text-sage/40 text-xs mb-6">{r.note}</p>

                <a
                  href="#contact"
                  className="label-text text-earth/40 hover:text-earth/70 transition-colors duration-300 flex items-center gap-2 mt-auto"
                >
                  Saiba Mais
                  <span aria-hidden>→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
