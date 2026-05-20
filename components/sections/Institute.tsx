'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const WHATSAPP_NUMBER = '5511911135083'
const whatsappUrl = (subject?: string) => {
  const msg = subject
    ? `Olá, gostaria de receber mais informações sobre ${subject} no Instituto CherieThai.`
    : 'Olá, gostaria de receber mais informações sobre os programas de formação do Instituto CherieThai.'
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

const curriculum = [
  'Mecânica corporal e anatomia aplicada',
  'Precisão de pressão e leitura estrutural',
  'Técnicas de mobilidade e amplitude de movimento',
  'Alongamento terapêutico assistido',
  'Liberação estrutural e descompressão',
  'Regulação do sistema nervoso',
  'Sensibilidade tátil e refinamento do toque',
  'Fluxo corporal e continuidade de sessão',
  'Aplicação clínica e sequenciamento personalizado',
]

type Graduate = {
  id: string
  name: string
  hours: string
  style: string
  location: string
  instagram: string
  bio: string
  photo: string | null
  imagePosition?: string
}

const graduates: Graduate[] = [
  {
    id: 'aluno-1',
    name: 'Nome do Aluno',
    hours: '30h',
    style: 'Thai de chão · Liberação estrutural',
    location: 'São Paulo, Brasil',
    instagram: '@handle',
    bio: 'Breve descrição do terapeuta e sua abordagem ao trabalho corporal.',
    photo: null,
  },
  {
    id: 'aluno-2',
    name: 'Nome do Aluno',
    hours: '30h',
    style: 'Bodywork estrutural · Mobilidade',
    location: 'Rio de Janeiro, Brasil',
    instagram: '@handle',
    bio: 'Breve descrição do terapeuta e sua abordagem ao trabalho corporal.',
    photo: null,
  },
  {
    id: 'aluno-3',
    name: 'Nome do Aluno',
    hours: '30h',
    style: 'Liberação fascial · Thai clínico',
    location: 'Lisboa, Portugal',
    instagram: '@handle',
    bio: 'Breve descrição do terapeuta e sua abordagem ao trabalho corporal.',
    photo: null,
  },
]

export default function Institute() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start end', 'end start'] })
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.0])

  return (
    <section id="institute" className="overflow-hidden">

      {/* ── Hero ── */}
      <div ref={heroRef} className="relative h-[80vh] min-h-[500px] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <Image
            src="/session-archer.jpg"
            alt="Instituto CherieThai"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(160deg, rgba(26,31,27,0.75) 0%, rgba(42,51,41,0.55) 50%, rgba(26,31,27,0.7) 100%)`,
            }}
          />
        </motion.div>
        <div className="absolute inset-0 overlay-bottom" />
        <div className="relative z-10 px-6 md:px-12 lg:px-16 w-full">
          <motion.p {...inView()} className="label-text text-sage mb-14">
            Educação&nbsp;&nbsp;·&nbsp;&nbsp;Instituto CherieThai
          </motion.p>
          <motion.h2
            className="display-section text-ivory mb-8"
            style={{ fontSize: 'clamp(4rem, 10vw, 9.5rem)' }}
            {...inView(0.1)}
          >
            O Instituto<br />CherieThai.
          </motion.h2>
          <motion.p {...inView(0.2)} className="body-text text-sand/75 max-w-md text-base md:text-lg mb-10">
            Um ambiente de formação para terapeutas<br />
            que já dominaram a técnica —<br />
            e querem compreender o corpo.
          </motion.p>
          <motion.a
            {...inView(0.3)}
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sand/80 border-sand/30 inline-flex"
          >
            <span>Consultar Disponibilidade</span>
            <span aria-hidden>→</span>
          </motion.a>
        </div>
      </div>

      {/* ── Manifesto ── */}
      <div className="bg-dark-moss px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photo */}
          <motion.div
            className="relative overflow-hidden order-2 lg:order-1"
            style={{ aspectRatio: '3/4' }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <Image
              src="/clinic-saopaulo-interior-2.jpg"
              alt="Estúdio Instituto CherieThai"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,31,27,0.5) 0%, transparent 60%)' }} />
            <div className="absolute bottom-6 left-6">
              <p className="label-text text-sand/40 text-xs">Estúdio&nbsp;&nbsp;·&nbsp;&nbsp;São Paulo</p>
            </div>
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2">
        <div className="max-w-4xl">
          <motion.p
            className="display-quote text-sand/70"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            "Isso não é educação continuada.
            É uma reconfiguração de como um terapeuta
            lê um corpo, constrói uma sessão
            e toma decisões sob suas mãos."
          </motion.p>
          <motion.p
            className="body-text text-sage/35 text-sm mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Cherie T. Charnkul
          </motion.p>

          <motion.p
            className="body-text text-sand/50 text-base md:text-lg leading-relaxed max-w-2xl mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            O Instituto CherieThai é o único programa de formação no Brasil afiliado à UTTMS, reconhecida pelo governo tailandês e com diploma de validade internacional. Os nossos clientes são executivos, atletas e figuras públicas que exigem o mais alto nível. Esse contexto coloca o nosso nome em jogo a cada sessão. Por isso formamos grupos pequenos e íntimos. Não por limitação. Porque cada praticante que sai daqui representa este nome fora da escola. Que eles o façam com o padrão mais alto possível. Esse é o nosso maior objetivo.
          </motion.p>

          <motion.p
            className="body-text text-sand/40 text-sm leading-relaxed max-w-2xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            Quem passa pelo Instituto é sempre bem-vindo de volta. Realizamos revisões periódicas por convite, onde os praticantes formados retornam para ser observados, corrigidos e recalibrados. É a nossa forma de garantir que o que foi ensinado continua a ser praticado com a mesma integridade. Maus hábitos formam-se em silêncio. As revisões existem para que isso nunca aconteça.
          </motion.p>
        </div>
          </div>
        </div>
      </div>


      {/* ── CURSOS ── */}
      <div id="institute-cursos" className="bg-ivory border-t border-earth/10 px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <motion.p
          {...inView()}
          className="font-cormorant font-light text-deep-moss"
          style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: 0.9 }}
        >
          Cursos
        </motion.p>
      </div>


      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── 01. FORMAÇÃO SÃO PAULO ─────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════ */}

      <div className="bg-ivory">

        <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-36 pb-0">
          <motion.div
            {...inView()}
            className="flex items-start justify-between border-b border-earth/10 pb-10"
          >
            <div>
              <p className="label-text text-sage mb-3">Formação Principal</p>
              <p className="label-text text-earth/20">01</p>
            </div>
            <p className="label-text text-earth/25 text-xs text-right">São Paulo, Brasil</p>
          </motion.div>
        </div>

        <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 md:mb-28">

              <motion.div {...inView()}>
                <h3
                  className="font-cormorant font-light text-deep-moss mb-8"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
                >
                  Formação<br />São Paulo.
                </h3>

                <p
                  className="font-cormorant font-light text-deep-moss/45 mb-12"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: 1 }}
                >
                  R$&nbsp;6.400
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-10">
                  {[
                    { k: 'Duração', v: '30 horas' },
                    { k: 'Grupo', v: 'Máximo 4 praticantes' },
                    { k: 'Formato', v: 'Presencial · Mesa clínica' },
                    { k: 'Local', v: 'São Paulo, Brasil' },
                  ].map(({ k, v }) => (
                    <div key={k}>
                      <p className="label-text text-sage/40 mb-1">{k}</p>
                      <p className="body-text text-earth/70 text-sm">{v}</p>
                    </div>
                  ))}
                </div>

                <div className="border border-earth/15 px-5 py-4 inline-block">
                  <p className="label-text text-earth/50 text-xs mb-1">Lista de Espera</p>
                  <p className="body-text text-earth/70 text-sm">Lista completa. Sem previsão de reabertura.</p>
                </div>
              </motion.div>

              <motion.div {...inView(0.15)} className="flex flex-col justify-between">
                <div className="space-y-5 mb-10">
                  <p className="body-text text-earth/65 text-base leading-relaxed">
                    Uma imersão de trinta horas no Método CherieThai, conduzida integralmente sobre mesa clínica, em um ambiente de mentoria íntima com no máximo quatro praticantes por edição.
                  </p>
                  <p className="body-text text-earth/65 text-base leading-relaxed">
                    Não é um curso. É uma reconfiguração. Ao longo dos dias, a forma como você lê um corpo, constrói uma sequência e aplica pressão muda estruturalmente, porque é trabalhada estruturalmente, sob supervisão direta e correções personalizadas de Cherie.
                  </p>
                  <p className="body-text text-earth/50 text-sm leading-relaxed">
                    As edições são liberadas periodicamente. A disponibilidade é naturalmente limitada pela estrutura altamente personalizada da formação. Candidaturas e consultas são analisadas individualmente.
                  </p>
                </div>
                <p className="label-text text-sage/35 text-xs leading-relaxed">
                  Ambiente de mentoria íntima&nbsp;&nbsp;·&nbsp;&nbsp;Correções individuais<br />
                  Certificação CherieThai&nbsp;&nbsp;·&nbsp;&nbsp;Internacionalmente reconhecida
                </p>
              </motion.div>
            </div>

            {/* Curriculum grid */}
            <motion.div
              {...inView(0.1)}
              className="border-t border-earth/10 pt-16 md:pt-20"
            >
              <p className="label-text text-sage mb-10">Currículo</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-earth/8">
                {curriculum.map((item, i) => (
                  <motion.div
                    key={item}
                    className="bg-ivory p-6 md:p-8"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, delay: i * 0.055, ease: [0.25, 0.1, 0.25, 1.0] }}
                  >
                    <span className="label-text text-earth/18 block mb-3">{String(i + 1).padStart(2, '0')}</span>
                    <p className="body-text text-earth/68 text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>


      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── 02. MANCHESTER ─────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════ */}

      <div className="bg-off-white border-t border-earth/10">

        <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-36 pb-0">
          <motion.div
            {...inView()}
            className="flex items-start justify-between border-b border-earth/10 pb-10"
          >
            <div>
              <p className="label-text text-sage mb-3">Annual International Course · Taught in English</p>
              <p className="label-text text-earth/20">02</p>
            </div>
            <p className="label-text text-earth/25 text-xs text-right">Manchester, United Kingdom</p>
          </motion.div>
        </div>

        <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

              <motion.div {...inView()}>
                <h3
                  className="font-cormorant font-light text-deep-moss mb-8"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
                >
                  Manchester.<br />June.
                </h3>

                <p
                  className="font-cormorant font-light text-deep-moss/45 mb-12"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: 1 }}
                >
                  £&nbsp;880
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-10">
                  {[
                    { k: 'Duration', v: '3 days' },
                    { k: 'Frequency', v: 'Annual · June' },
                    { k: 'Next edition', v: 'June 9, 10 & 11' },
                    { k: 'Location', v: 'Manchester, UK' },
                  ].map(({ k, v }) => (
                    <div key={k}>
                      <p className="label-text text-sage/40 mb-1">{k}</p>
                      <p className="body-text text-earth/70 text-sm">{v}</p>
                    </div>
                  ))}
                </div>

                <div className="border border-earth/15 px-5 py-4 inline-block">
                  <p className="label-text text-earth/50 text-xs mb-1">2026 Availability</p>
                  <p className="body-text text-earth/70 text-sm">Sold out. Next edition June 2027.</p>
                </div>
              </motion.div>

              <motion.div {...inView(0.15)} className="flex flex-col justify-between">
                <div className="space-y-5 mb-10">
                  <p className="body-text text-earth/65 text-base leading-relaxed">
                    This is CherieThai's only international course — held once a year in Manchester and conducted entirely in English. Three days of intensive hands-on work, led personally by Cherie, for practitioners who are serious about deepening their understanding of the body.
                  </p>
                  <p className="body-text text-earth/65 text-base leading-relaxed">
                    The format is compact and demanding. The group is intentionally small. Each edition is a self-contained experience — the kind of focused, corrected practice that changes how you work long after the course ends.
                  </p>
                  <p className="body-text text-earth/50 text-sm leading-relaxed">
                    Registration for the next edition opens exclusively to graduates and priority contacts before any public announcement.
                  </p>
                </div>
                <p className="label-text text-sage/35 text-xs leading-relaxed">
                  Annual course&nbsp;&nbsp;·&nbsp;&nbsp;Small group&nbsp;&nbsp;·&nbsp;&nbsp;Taught in English<br />
                  CherieThai Certification&nbsp;&nbsp;·&nbsp;&nbsp;UTTMS Diploma
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>


      {/* ── RETIROS ── */}
      <div id="institute-retiros" className="bg-dark-moss border-t border-sand/10 px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <motion.p
          {...inView()}
          className="font-cormorant font-light text-ivory"
          style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: 0.9 }}
        >
          Retiros
        </motion.p>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── 02. CHAPADA DIAMANTINA ─────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════ */}

      <div
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(165deg, #1A1F1B 0%, #2A3329 35%, #3D4A40 65%, #2A3329 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 75% 25%, rgba(75,90,79,0.3) 0%, transparent 60%),
              radial-gradient(ellipse at 15% 80%, rgba(42,51,41,0.5) 0%, transparent 50%)
            `,
          }}
        />

        <div className="relative z-10 px-6 md:px-12 lg:px-16 pt-24 md:pt-36 pb-24 md:pb-36">
          <div className="max-w-6xl mx-auto">

            <motion.div
              {...inView()}
              className="flex items-start justify-between border-b border-sand/10 pb-10 mb-16 md:mb-20"
            >
              <div>
                <p className="label-text text-sage mb-3">Retiro Residencial de Formação</p>
                <p className="label-text text-sand/15">02</p>
              </div>
              <p className="label-text text-sand/18 text-xs text-right">Chapada Diamantina, Bahia</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">

              <div>
                <motion.h3
                  className="font-cormorant font-light text-ivory mb-8"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
                  {...inView()}
                >
                  Chapada<br />Diamantina.
                </motion.h3>

                <motion.div {...inView(0.1)} className="mb-10">
                  <p className="label-text text-sage/40 mb-3">Datas da Próxima Edição</p>
                  <p
                    className="font-cormorant font-light text-sand/65"
                    style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', lineHeight: 1.1 }}
                  >
                    28 Set até 4 Out
                  </p>
                </motion.div>

                <motion.p
                  className="font-cormorant font-light text-ivory/45 mb-12"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: 1 }}
                  {...inView(0.15)}
                >
                  R$&nbsp;8.200
                </motion.p>

                <motion.div {...inView(0.18)} className="grid grid-cols-2 gap-x-6 gap-y-5 mb-10">
                  {[
                    { k: 'Duração', v: '7 noites' },
                    { k: 'Carga horária', v: '~10h por dia' },
                    { k: 'Incluso', v: 'Hospedagem + Alimentação completa' },
                    { k: 'Não incluso', v: 'Deslocamento' },
                  ].map(({ k, v }) => (
                    <div key={k}>
                      <p className="label-text text-sage/40 mb-1">{k}</p>
                      <p className="body-text text-sand/50 text-sm">{v}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div {...inView(0.22)} className="border border-sand/15 px-5 py-4 inline-block">
                  <p className="label-text text-sage/40 text-xs mb-1">Vagas 2026</p>
                  <p className="body-text text-sand/60 text-sm">Esgotado. Sem previsão de reabertura.</p>
                </motion.div>
              </div>

              <motion.div {...inView(0.1)} className="flex flex-col justify-between">
                <div className="space-y-5 mb-12">
                  <p className="body-text text-sage/70 text-base leading-relaxed">
                    A experiência de formação mais imersiva do Instituto CherieThai. Sete noites na Chapada Diamantina, uma das paisagens geologicamente mais extraordinárias do Brasil. Antiga, silenciosa, de pedra. A luz é diferente ali. O ar exige um tipo diferente de presença.
                  </p>
                  <p className="body-text text-sage/70 text-base leading-relaxed">
                    O programa combina trabalho Thai de chão, bodywork estrutural avançado e integração clínica em aproximadamente dez horas diárias de prática imersiva, guiadas, corrigidas e supervisionadas em um ambiente de grupo íntimo.
                  </p>
                  <p className="body-text text-sage/45 text-sm leading-relaxed">
                    A residência cobre hospedagem e alimentação completa durante os sete dias. O deslocamento até a Chapada Diamantina é de responsabilidade do participante.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    'Trabalho Thai de chão, técnicas avançadas',
                    'Bodywork estrutural e leitura somática',
                    'Mobilidade, compressão e liberação profunda',
                    'Desenvolvimento terapêutico individualizado',
                    'Imersão coletiva em ambiente supervisionado',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-sage/25 shrink-0 mt-1">·</span>
                      <p className="body-text text-sage/55 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>


      {/* ── Chapada video gallery ── */}
      <div
        className="overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #1A1F1B 0%, #0D110E 100%)' }}
      >
        <div className="px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
            {[
              '1194162752',
              '1194162791',
              '1194162814',
              '1194162829',
              '1194162875',
            ].map((vimeoId, i) => (
              <motion.div
                key={vimeoId}
                className="relative overflow-hidden"
                style={{ aspectRatio: '9/16' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <iframe
                  src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&muted=1&dnt=1`}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none', pointerEvents: 'none' }}
                  allow="autoplay; fullscreen"
                  title={`Retiro Chapada ${i + 1}`}
                />
              </motion.div>
            ))}
          </div>
          <motion.p
            {...inView(0.3)}
            className="label-text text-sage/25 text-xs mt-6 tracking-[0.22em]"
          >
            Chapada Diamantina&nbsp;&nbsp;·&nbsp;&nbsp;Retiro Residencial
          </motion.p>
        </div>
      </div>

      {/* ── WORKSHOPS ── */}
      <div id="institute-workshops" className="bg-ivory border-t border-earth/10 px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <motion.p
          {...inView()}
          className="font-cormorant font-light text-deep-moss"
          style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: 0.9 }}
        >
          Workshops
        </motion.p>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── 01. WORKSHOP RIO DE JANEIRO · KARL ────────────────── */}
      {/* ══════════════════════════════════════════════════════════ */}

      <div className="bg-off-white">
        <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-36 pb-24 md:pb-36">
          <div className="max-w-6xl mx-auto">

            <motion.div
              {...inView()}
              className="flex items-start justify-between border-b border-earth/10 pb-10 mb-16 md:mb-20"
            >
              <div>
                <p className="label-text text-sage mb-3">Workshop com Karl</p>
                <p className="label-text text-earth/18">01</p>
              </div>
              <p className="label-text text-earth/22 text-xs text-right">Rio de Janeiro, Brasil</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">

              <div>
                <motion.h3
                  className="font-cormorant font-light text-deep-moss mb-8"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
                  {...inView()}
                >
                  Workshop<br />Rio de Janeiro.
                </motion.h3>

                <motion.p
                  className="font-cormorant font-light text-deep-moss/40 mb-12"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: 1 }}
                  {...inView(0.1)}
                >
                  R$&nbsp;2.800
                </motion.p>

                <motion.div {...inView(0.15)} className="grid grid-cols-2 gap-x-6 gap-y-5 mb-10">
                  {[
                    { k: 'Duração', v: '3 dias' },
                    { k: 'Instrutor', v: 'Karl' },
                    { k: 'Formato', v: 'Trabalho de chão · Sem óleo' },
                    { k: 'Local', v: 'Rio de Janeiro, Brasil' },
                  ].map(({ k, v }) => (
                    <div key={k}>
                      <p className="label-text text-sage/40 mb-1">{k}</p>
                      <p className="body-text text-earth/65 text-sm">{v}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.a
                  {...inView(0.2)}
                  href={whatsappUrl('o Workshop com Karl no Rio de Janeiro')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-deep-moss border-deep-moss/25 inline-flex"
                >
                  <span>Solicitar Informações</span>
                  <span aria-hidden>→</span>
                </motion.a>
              </div>

              <motion.div {...inView(0.1)}>
                <div className="space-y-5 mb-10">
                  <p className="body-text text-earth/65 text-base leading-relaxed">
                    Três dias conduzidos por Karl, co-fundador do Instituto CherieThai e guardião de uma linhagem Thai do nordeste da Tailândia. Um workshop de chão, praticado sem óleo, enraizado na tradição ancestral do bodywork tailandês.
                  </p>
                  <p className="body-text text-earth/65 text-base leading-relaxed">
                    O programa concentra-se em alongamento assistido, ritmo, mobilidade e sequências de compressão, transmitidos com a mesma qualidade de atenção que Karl traz a cada sessão clínica. Há uma ancianidade no trabalho que não é ensinada. É transferida.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    'Trabalho Thai de chão, linhagem tradicional',
                    'Alongamento passivo assistido e ritmo',
                    'Mobilidade articular e sequências de compressão',
                    'Mobilização das linhas Sen',
                    'Protocolo terapêutico Thai clássico',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-earth/22 shrink-0 mt-1">·</span>
                      <p className="body-text text-earth/55 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>


      {/* ── ALUNOS ── */}
      <div
        id="institute-alunos"
        className="bg-dark-moss border-t border-sand/10 px-6 md:px-12 lg:px-16 pt-12 md:pt-16 pb-16 md:pb-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-8">
            <motion.h2
              className="font-cormorant italic text-ivory"
              style={{ fontSize: 'clamp(6rem, 18vw, 18rem)', lineHeight: 0.85 }}
              {...inView(0.04)}
            >
              Alunos
            </motion.h2>
            <motion.p
              {...inView(0.16)}
              className="font-cormorant italic text-sand/40 text-right pb-3 hidden sm:block"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.35rem)', lineHeight: 1.6 }}
            >
              Cada praticante formado pelo Instituto<br />
              carrega uma leitura diferente do corpo.<br />
              Este é o resultado do trabalho.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── 05. ALUNOS FORMADOS ────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════ */}

      <div className="bg-ivory">
        <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-36 pb-24 md:pb-36">
          <div className="max-w-6xl mx-auto">

            <motion.div
              {...inView(0.05)}
              className="border border-earth/12 px-10 py-16 md:py-24 text-center max-w-2xl"
            >
              <p className="label-text text-sage/40 mb-6 tracking-[0.22em]">Em Breve</p>
              <p
                className="font-cormorant font-light text-deep-moss mb-6"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', lineHeight: 1.15 }}
              >
                Os perfis dos terapeutas certificados serão apresentados em breve.
              </p>
              <p className="body-text text-earth/50 text-sm leading-relaxed">
                Cada um com a sua foto, localização, horas de formação concluídas, estilo de trabalho, Instagram e apresentação final em vídeo.
              </p>
            </motion.div>

          </div>
        </div>
      </div>


      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── 04. (now 06) THAILAND IMMERSION, COMING SOON ──────── */}
      {/* ══════════════════════════════════════════════════════════ */}

      <div
        className="relative overflow-hidden"
        style={{ background: '#0D110E' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 40%, rgba(42,51,41,0.25) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 px-6 md:px-12 lg:px-16 py-24 md:py-36">
          <div className="max-w-6xl mx-auto">

            <motion.div
              {...inView()}
              className="flex items-start justify-between border-b border-sand/6 pb-10 mb-20 md:mb-28"
            >
              <div>
                <p className="label-text text-sage/35 mb-3">Imersão Internacional</p>
                <p className="label-text text-sand/10">04</p>
              </div>
              <p className="label-text text-sand/12 text-xs text-right">Tailândia</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-end">

              <div>
                <motion.p {...inView()} className="label-text text-sage/25 mb-10 tracking-[0.28em]">
                  Em Breve
                </motion.p>

                <motion.h3
                  className="font-cormorant font-light text-ivory/75 mb-10"
                  style={{ fontSize: 'clamp(2.75rem, 6vw, 5.5rem)', lineHeight: 1.02 }}
                  {...inView(0.1)}
                >
                  Imersão<br />na Tailândia.
                </motion.h3>

                <motion.a
                  {...inView(0.2)}
                  href={whatsappUrl('a Imersão na Tailândia')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-text text-sage/38 hover:text-sage/65 transition-colors duration-400 flex items-center gap-3"
                  style={{ fontSize: '0.625rem', letterSpacing: '0.24em' }}
                >
                  Manifestar Interesse
                  <span aria-hidden>→</span>
                </motion.a>
              </div>

              <motion.div {...inView(0.15)} className="space-y-5">
                <p className="body-text text-sage/35 text-base leading-relaxed">
                  Uma experiência de formação ainda não divulgada, realizada na Tailândia, precificada em USD, concebida para um número muito reduzido de praticantes internacionais.
                </p>
                <p className="body-text text-sage/22 text-sm leading-relaxed">
                  Os detalhes serão liberados em edição limitada. Aqueles que manifestarem interesse com antecedência serão notificados antes da divulgação pública.
                </p>
                <p className="label-text text-sage/18 text-xs mt-8">
                  Acesso exclusivo&nbsp;&nbsp;·&nbsp;&nbsp;Vagas muito limitadas&nbsp;&nbsp;·&nbsp;&nbsp;USD
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
