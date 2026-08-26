'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useIsTouch } from '@/hooks/useIsTouch'
import dynamic from 'next/dynamic'
import LazyYouTubeShort from '@/components/LazyYouTubeShort'
import { useLanguage } from '@/contexts/LanguageContext'

const StudentMap = dynamic(() => import('@/components/sections/StudentMap'), { ssr: false })

const WHATSAPP_NUMBER = '5511911135083'
const whatsappUrl = (lang: string, subject?: string) => {
  const msg = subject
    ? lang === 'PT'
      ? `Olá, gostaria de receber mais informações sobre ${subject} no Instituto CherieThai.`
      : `Hello, I'd like to receive more information about ${subject} at the CherieThai Institute.`
    : lang === 'PT'
      ? 'Olá, gostaria de receber mais informações sobre os programas de formação do Instituto CherieThai.'
      : "Hello, I'd like to receive more information about the CherieThai Institute training programmes."
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

const curriculumPT = [
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

const curriculumEN = [
  'Body mechanics and applied anatomy',
  'Pressure precision and structural reading',
  'Mobility and range of motion techniques',
  'Assisted therapeutic stretching',
  'Structural release and decompression',
  'Nervous system regulation',
  'Tactile sensitivity and touch refinement',
  'Body flow and session continuity',
  'Clinical application and personalised sequencing',
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
  const isTouch = useIsTouch()
  const { lang } = useLanguage()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start end', 'end start'] })
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.0])

  const curriculum = lang === 'PT' ? curriculumPT : curriculumEN

  return (
    <section id="institute" className="overflow-hidden">

      {/* ── Hero ── */}
      <div ref={heroRef} className="relative h-[80svh] min-h-[500px] flex items-center [overflow:clip]">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          {/* DJI background video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/dji-main.mov" type="video/mp4" />
          </video>
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
            {lang === 'PT' ? 'Educação  ·  Instituto CherieThai' : 'Education  ·  CherieThai Institute'}
          </motion.p>
          <motion.h2
            className="display-section text-ivory mb-8"
            style={{ fontSize: 'clamp(4rem, 10vw, 9.5rem)' }}
            {...inView(0.1)}
          >
            {lang === 'PT' ? <>O Instituto<br />CherieThai.</> : <>The CherieThai<br />Institute.</>}
          </motion.h2>
          <motion.p {...inView(0.2)} className="body-text text-sand/75 max-w-md text-base md:text-lg mb-10">
            {lang === 'PT' ? (
              <>Para terapeutas que querem transformar vidas<br />
              e construir uma carreira<br/>
              à altura do seu potencial.</>
            ) : (
              <>For therapists who want to transform lives<br />
              and build a career<br/>
              worthy of their potential.</>
            )}
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              {...inView(0.3)}
              href="#institute-cursos"
              className="btn-ghost text-sand/80 border-sand/30 inline-flex"
            >
              <span>{lang === 'PT' ? 'Consultar Disponibilidade' : 'Check Availability'}</span>
              <span aria-hidden>→</span>
            </motion.a>
            <motion.a
              {...inView(0.38)}
              href="/alunos"
              className="btn-ghost text-sand/45 border-sand/15 inline-flex"
            >
              <span>{lang === 'PT' ? 'Ver Praticantes Formados' : 'View Graduate Practitioners'}</span>
              <span aria-hidden>→</span>
            </motion.a>
          </div>
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
              <p className="label-text text-sand/40 text-xs">
                {lang === 'PT' ? 'Estúdio  ·  São Paulo' : 'Studio  ·  São Paulo'}
              </p>
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
            {lang === 'PT'
              ? '"Isso não é educação continuada. É uma reconfiguração de como um terapeuta lê um corpo, constrói uma sessão e toma decisões sob suas mãos."'
              : '"This is not continuing education. It is a reconfiguration of how a therapist reads a body, builds a session, and makes decisions beneath their hands."'}
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
            {lang === 'PT'
              ? 'Somos o único programa no Brasil que integra a certificação da UTTMS, reconhecida pelo governo tailandês e com validade internacional, ao Sistema CherieThai. Aqui desenvolvemos a técnica clínica ao nível mais alto, e também a imagem, a presença, o trabalho autónomo e a identidade profissional. Tudo o que é preciso para atender quem exige o melhor e ser reconhecido por isso.'
              : 'We are the only programme in Brazil to integrate UTTMS certification — recognised by the Thai government and valid internationally — with the CherieThai System. Here we develop clinical technique at the highest level, alongside image, presence, independent practice, and professional identity. Everything needed to serve those who demand excellence and be recognised for it.'}
          </motion.p>

          <motion.p
            className="body-text text-sand/60 text-base md:text-lg leading-relaxed max-w-2xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            {lang === 'PT'
              ? 'Os nossos clientes incluem executivos de multinacionais, atletas de elite e figuras públicas internacionais. A CherieThai é reconhecida internacionalmente pelo mais alto nível de excelência clínica — e os nossos alunos aprendem a trabalhar exactamente nesse contexto.'
              : 'Our clients include multinational executives, elite athletes and international public figures. CherieThai is internationally recognised for the highest standard of clinical excellence — and our students learn to work within exactly that context.'}
          </motion.p>

          <motion.p
            className="body-text text-sand/40 text-sm leading-relaxed max-w-2xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            {lang === 'PT'
              ? 'Levo cada aluno debaixo das minhas asas. O programa é composto por múltiplos pilares: a técnica, o ser terapeuta, o trabalho por conta própria, a construção da imagem e da autoridade, e o atendimento com a mais alta qualidade do nosso método. Publicamos o trabalho e os resultados dos nossos alunos porque a credibilidade constrói-se com prova. O objectivo é que cada pessoa que sai daqui saiba exactamente quem é, o que oferece, e como fazer isso render.'
              : 'I take each student under my wing. The programme is built on multiple pillars: technique, the craft of being a therapist, independent practice, building image and authority, and delivering care at the highest quality our method allows. We publish our students\' work and results because credibility is built through evidence. The aim is that every person who leaves here knows exactly who they are, what they offer, and how to make that count.'}
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
          {lang === 'PT' ? 'Cursos' : 'Courses'}
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
              <p className="label-text text-sage mb-3">{lang === 'PT' ? 'Formação Principal' : 'Main Training Programme'}</p>
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
                  {lang === 'PT' ? <>Formação<br />São Paulo.</> : <>São Paulo<br />Training.</>}
                </h3>

                <p
                  className="font-cormorant font-light text-deep-moss/45 mb-12"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: 1 }}
                >
                  R$&nbsp;6.400
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-10">
                  {(lang === 'PT'
                    ? [
                        { k: 'Duração', v: '30 horas' },
                        { k: 'Grupo', v: 'Grupo reduzido' },
                        { k: 'Formato', v: 'Presencial · Mesa clínica' },
                        { k: 'Local', v: 'São Paulo, Brasil' },
                      ]
                    : [
                        { k: 'Duration', v: '30 hours' },
                        { k: 'Group', v: 'Small group' },
                        { k: 'Format', v: 'In-person · Clinical table' },
                        { k: 'Location', v: 'São Paulo, Brazil' },
                      ]
                  ).map(({ k, v }) => (
                    <div key={k}>
                      <p className="label-text text-sage/40 mb-1">{k}</p>
                      <p className="body-text text-earth/70 text-sm">{v}</p>
                    </div>
                  ))}
                </div>

                <div className="border border-earth/15 px-5 py-4 inline-block">
                  <p className="label-text text-earth/50 text-xs mb-1">{lang === 'PT' ? 'Turma 2026' : '2026 Cohort'}</p>
                  <p className="body-text text-earth/70 text-sm">
                    {lang === 'PT'
                      ? 'Esgotada. Lista de espera para 2027 abre no final de 2026.'
                      : 'Sold out. Waitlist for 2027 opens in late 2026.'}
                  </p>
                </div>
              </motion.div>

              <motion.div {...inView(0.15)} className="flex flex-col justify-between">
                <div className="space-y-5 mb-10">
                  <p className="body-text text-earth/65 text-base leading-relaxed">
                    {lang === 'PT'
                      ? 'Uma imersão de trinta horas no Método CherieThai, conduzida integralmente sobre mesa clínica, em um ambiente de mentoria íntima e grupos reduzidos.'
                      : 'A thirty-hour immersion in the CherieThai Method, conducted entirely on the clinical table, within an environment of intimate mentorship and small groups.'}
                  </p>
                  <p className="body-text text-earth/65 text-base leading-relaxed">
                    {lang === 'PT'
                      ? 'Não é um curso. É uma reconfiguração. Ao longo dos dias, a forma como você lê um corpo, constrói uma sequência e aplica pressão muda estruturalmente, porque é trabalhada estruturalmente, sob supervisão direta e correções personalizadas de Cherie.'
                      : "This is not a course. It is a reconfiguration. Over the days, the way you read a body, build a sequence and apply pressure changes structurally — because it is worked structurally, under Cherie's direct supervision and personalised corrections."}
                  </p>
                  <p className="body-text text-earth/50 text-sm leading-relaxed">
                    {lang === 'PT'
                      ? 'As edições são liberadas periodicamente. A disponibilidade é naturalmente limitada pela estrutura altamente personalizada da formação. Candidaturas e consultas são analisadas individualmente.'
                      : 'Editions are released periodically. Availability is naturally limited by the highly personalised structure of the training. Applications and enquiries are reviewed individually.'}
                  </p>
                </div>
                <p className="label-text text-sage/35 text-xs leading-relaxed">
                  {lang === 'PT'
                    ? <>Ambiente de mentoria íntima&nbsp;&nbsp;·&nbsp;&nbsp;Correções individuais<br />Certificação CherieThai&nbsp;&nbsp;·&nbsp;&nbsp;Internacionalmente reconhecida</>
                    : <>Intimate mentorship environment&nbsp;&nbsp;·&nbsp;&nbsp;Individual corrections<br />CherieThai Certification&nbsp;&nbsp;·&nbsp;&nbsp;Internationally recognised</>}
                </p>
              </motion.div>
            </div>

            {/* Session photo */}
            <motion.div
              {...inView(0.1)}
              className="relative overflow-hidden mb-16 md:mb-20"
              style={{ aspectRatio: '16/9' }}
            >
              <Image
                src="/session-formacao.jpg"
                alt="Formação São Paulo — Mesa clínica CherieThai"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>

            {/* Curriculum grid */}
            <motion.div
              {...inView(0.1)}
              className="border-t border-earth/10 pt-16 md:pt-20"
            >
              <p className="label-text text-sage mb-10">{lang === 'PT' ? 'Currículo' : 'Curriculum'}</p>
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


      {/* ── Teaching in Thai video ── */}
      <motion.div
        className="relative overflow-hidden"
        style={{ background: '#0D110E' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        {/* Video — full width, 9:16 contained */}
        <div className="relative w-full max-w-sm mx-auto" style={{ aspectRatio: '9/16' }}>
          <LazyYouTubeShort youtubeId="apgY6rYHFK8" />
        </div>

        {/* Text overlay — centered on top */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6">
          <p
            className="font-cormorant font-light text-ivory text-center"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 7rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 40px rgba(0,0,0,0.7)',
            }}
          >
            Teaching in my<br />native language.
          </p>
          <p
            className="label-text text-sage/60 mt-6 text-center"
            style={{ fontSize: '0.62rem', letterSpacing: '0.28em', textShadow: '0 1px 12px rgba(0,0,0,0.8)' }}
          >
            {lang === 'PT' ? 'Instituto CherieThai  ·  Tailândia' : 'CherieThai Institute  ·  Thailand'}
          </p>
        </div>
      </motion.div>

      {/* ── RETIROS ── */}
      <div id="institute-retiros" className="bg-dark-moss border-t border-sand/10 px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <motion.p
          {...inView()}
          className="font-cormorant font-light text-ivory"
          style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: 0.9 }}
        >
          {lang === 'PT' ? 'Retiros' : 'Retreats'}
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
                <p className="label-text text-sage mb-3">{lang === 'PT' ? 'Retiro Residencial de Formação' : 'Residential Training Retreat'}</p>
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
                  <p className="label-text text-sage/40 mb-3">{lang === 'PT' ? 'Datas da Próxima Edição' : 'Next Edition Dates'}</p>
                  <p
                    className="font-cormorant font-light text-sand/65"
                    style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', lineHeight: 1.1 }}
                  >
                    {lang === 'PT' ? '28 Set – 4 Out 2026' : '28 Sep – 4 Oct 2026'}
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
                  {(lang === 'PT'
                    ? [
                        { k: 'Duração', v: '7 noites' },
                        { k: 'Carga horária', v: '~10h por dia' },
                        { k: 'Incluso', v: 'Hospedagem + Alimentação completa' },
                        { k: 'Não incluso', v: 'Deslocamento' },
                      ]
                    : [
                        { k: 'Duration', v: '7 nights' },
                        { k: 'Daily hours', v: '~10h per day' },
                        { k: 'Included', v: 'Accommodation + Full board' },
                        { k: 'Not included', v: 'Travel' },
                      ]
                  ).map(({ k, v }) => (
                    <div key={k}>
                      <p className="label-text text-sage/40 mb-1">{k}</p>
                      <p className="body-text text-sand/50 text-sm">{v}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div {...inView(0.22)} className="border border-sand/15 px-5 py-4 inline-block">
                  <p className="label-text text-sage/40 text-xs mb-1">{lang === 'PT' ? 'Vagas 2026' : '2026 Availability'}</p>
                  <p className="body-text text-sand/60 text-sm">
                    {lang === 'PT' ? 'Esgotado. Sem previsão de reabertura.' : 'Sold out. No reopening date set.'}
                  </p>
                </motion.div>
              </div>

              <motion.div {...inView(0.1)} className="flex flex-col justify-between">
                <div className="space-y-5 mb-12">
                  <p className="body-text text-sage/70 text-base leading-relaxed">
                    {lang === 'PT'
                      ? 'A experiência de formação mais imersiva do Instituto CherieThai. Sete noites na Chapada Diamantina, uma das paisagens geologicamente mais extraordinárias do Brasil. Antiga, silenciosa, de pedra. A luz é diferente ali. O ar exige um tipo diferente de presença.'
                      : "The most immersive training experience offered by the CherieThai Institute. Seven nights in the Chapada Diamantina, one of Brazil's most extraordinary geological landscapes. Ancient, quiet, and made of stone. The light is different there. The air demands a different kind of presence."}
                  </p>
                  <p className="body-text text-sage/70 text-base leading-relaxed">
                    {lang === 'PT'
                      ? 'O programa combina trabalho Thai de chão, bodywork estrutural avançado e integração clínica em aproximadamente dez horas diárias de prática imersiva, guiadas, corrigidas e supervisionadas em um ambiente de grupo íntimo.'
                      : 'The programme combines traditional floor Thai work, advanced structural bodywork, and clinical integration across approximately ten hours of daily immersive practice — guided, corrected and supervised within an intimate group setting.'}
                  </p>
                  <p className="body-text text-sage/45 text-sm leading-relaxed">
                    {lang === 'PT'
                      ? 'A residência cobre hospedagem e alimentação completa durante os sete dias. O deslocamento até a Chapada Diamantina é de responsabilidade do participante.'
                      : "The residency covers accommodation and full board for the seven days. Travel to Chapada Diamantina is the participant's responsibility."}
                  </p>
                </div>

                <div className="space-y-3">
                  {(lang === 'PT'
                    ? [
                        'Trabalho Thai de chão, técnicas avançadas',
                        'Bodywork estrutural e leitura somática',
                        'Mobilidade, compressão e liberação profunda',
                        'Desenvolvimento terapêutico individualizado',
                        'Imersão coletiva em ambiente supervisionado',
                      ]
                    : [
                        'Traditional floor Thai work, advanced techniques',
                        'Structural bodywork and somatic reading',
                        'Mobility, compression and deep release',
                        'Individualised therapeutic development',
                        'Collective immersion in a supervised environment',
                      ]
                  ).map((item) => (
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
              'oUHcd6o-rQY',
              'gjvkkywhOPg',
              'NLnJXhy64dc',
              'R2-WhPnVZik',
              '8968zNfqUHI',
            ].map((youtubeId, i) => (
              <motion.div
                key={youtubeId}
                className="relative overflow-hidden"
                style={{ aspectRatio: '9/16', background: '#0D110E' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <LazyYouTubeShort youtubeId={youtubeId} />
              </motion.div>
            ))}
          </div>
          <motion.p
            {...inView(0.3)}
            className="label-text text-sage/25 text-xs mt-6 tracking-[0.22em]"
          >
            {lang === 'PT' ? 'Chapada Diamantina  ·  Retiro Residencial' : 'Chapada Diamantina  ·  Residential Retreat'}
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
                <p className="label-text text-sage mb-3">{lang === 'PT' ? 'Workshop com Karl' : 'Workshop with Karl'}</p>
                <p className="label-text text-earth/18">01</p>
              </div>
              <p className="label-text text-earth/22 text-xs text-right">{lang === 'PT' ? 'Rio de Janeiro, Brasil' : 'Rio de Janeiro, Brazil'}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">

              <div>
                <motion.h3
                  className="font-cormorant font-light text-deep-moss mb-4"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
                  {...inView()}
                >
                  Workshop<br />Rio de Janeiro.
                </motion.h3>

                <motion.p
                  className="label-text text-earth/40 mb-8"
                  style={{ letterSpacing: '0.2em', fontSize: '0.58rem' }}
                  {...inView(0.05)}
                >
                  {lang === 'PT' ? 'Com Karl · exclusivamente' : 'With Karl · exclusively'}
                </motion.p>

                <motion.p
                  className="font-cormorant font-light text-deep-moss/40 mb-12"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: 1 }}
                  {...inView(0.1)}
                >
                  R$&nbsp;2.800
                </motion.p>

                <motion.div {...inView(0.15)} className="grid grid-cols-2 gap-x-6 gap-y-5 mb-10">
                  {(lang === 'PT'
                    ? [
                        { k: 'Duração', v: '3 dias' },
                        { k: 'Instrutor', v: 'Karl' },
                        { k: 'Formato', v: 'Trabalho de chão · Sem óleo' },
                        { k: 'Local', v: 'Rio de Janeiro, Brasil' },
                      ]
                    : [
                        { k: 'Duration', v: '3 days' },
                        { k: 'Instructor', v: 'Karl' },
                        { k: 'Format', v: 'Floor work · No oil' },
                        { k: 'Location', v: 'Rio de Janeiro, Brazil' },
                      ]
                  ).map(({ k, v }) => (
                    <div key={k}>
                      <p className="label-text text-sage/40 mb-1">{k}</p>
                      <p className="body-text text-earth/65 text-sm">{v}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.a
                  {...inView(0.2)}
                  href={`https://wa.me/5521996466022?text=${encodeURIComponent(lang === 'PT' ? 'Olá, gostaria de receber mais informações sobre o Workshop com Karl no Rio de Janeiro.' : 'Hello, I\'d like to receive more information about the Workshop with Karl in Rio de Janeiro.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-deep-moss border-deep-moss/25 inline-flex"
                >
                  <span>{lang === 'PT' ? 'Solicitar Informações' : 'Request Information'}</span>
                  <span aria-hidden>→</span>
                </motion.a>
              </div>

              <motion.div {...inView(0.1)}>
                <div className="space-y-5 mb-10">
                  <p className="body-text text-earth/65 text-base leading-relaxed">
                    {lang === 'PT'
                      ? 'Três dias conduzidos por Karl, co-fundador do Instituto CherieThai e guardião de uma linhagem Thai do nordeste da Tailândia. Um workshop de chão, praticado sem óleo, enraizado na tradição ancestral do bodywork tailandês.'
                      : 'Three days led by Karl, co-founder of the CherieThai Institute and custodian of a Thai lineage from northeastern Thailand. A floor workshop, practised without oil, rooted in the ancestral tradition of Thai bodywork.'}
                  </p>
                  <p className="body-text text-earth/65 text-base leading-relaxed">
                    {lang === 'PT'
                      ? 'O programa concentra-se em alongamento assistido, ritmo, mobilidade e sequências de compressão, transmitidos com a mesma qualidade de atenção que Karl traz a cada sessão clínica. Há uma ancianidade no trabalho que não é ensinada. É transferida.'
                      : 'The programme focuses on assisted stretching, rhythm, mobility and compression sequences, transmitted with the same quality of attention that Karl brings to every clinical session. There is an ancientness in the work that cannot be taught. It is transferred.'}
                  </p>
                </div>
                <div className="space-y-3">
                  {(lang === 'PT'
                    ? [
                        'Trabalho Thai de chão, linhagem tradicional',
                        'Alongamento passivo assistido e ritmo',
                        'Mobilidade articular e sequências de compressão',
                        'Mobilização das linhas Sen',
                        'Protocolo terapêutico Thai clássico',
                      ]
                    : [
                        'Traditional lineage floor Thai work',
                        'Passive assisted stretching and rhythm',
                        'Joint mobility and compression sequences',
                        'Sen line mobilisation',
                        'Classical Thai therapeutic protocol',
                      ]
                  ).map((item) => (
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
              {lang === 'PT' ? 'Alunos' : 'Graduates'}
            </motion.h2>
            <motion.p
              {...inView(0.16)}
              className="font-cormorant italic text-sand/40 text-right pb-3 hidden sm:block"
              style={{ fontSize: 'clamp(1rem, 1.6vw, 1.35rem)', lineHeight: 1.6 }}
            >
              {lang === 'PT' ? (
                <>Cada praticante formado pelo Instituto<br />
                carrega uma leitura diferente do corpo.<br />
                Este é o resultado do trabalho.</>
              ) : (
                <>Every practitioner trained by the Institute<br />
                carries a different reading of the body.<br />
                This is the result of the work.</>
              )}
            </motion.p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── 05. ALUNOS FORMADOS ────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════ */}

      <div className="bg-dark-moss border-t border-sand/6">
        <div className="px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-24 md:pb-36">
          <div className="max-w-6xl mx-auto">

            {/* Heading */}
            <div className="flex items-end justify-between gap-8 mb-16 md:mb-20">
              <motion.div {...inView()}>
                <p className="label-text text-sage/40 mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
                  {lang === 'PT' ? 'ALUNOS FORMADOS' : 'CERTIFIED GRADUATES'}
                </p>
                <h3
                  className="font-cormorant font-light text-ivory"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
                >
                  {lang === 'PT' ? (
                    <>Presentes em estados<br />
                    <span className="text-sage/60">e no mundo.</span></>
                  ) : (
                    <>Across states<br />
                    <span className="text-sage/60">and worldwide.</span></>
                  )}
                </h3>
              </motion.div>
              <motion.p
                {...inView(0.1)}
                className="body-text text-sand/35 text-right max-w-xs hidden md:block"
                style={{ fontSize: '0.85rem', lineHeight: 1.7 }}
              >
                {lang === 'PT' ? (
                  <>Terapeutas formados pelo Instituto CherieThai<br />
                  já actuam em diferentes estados do Brasil<br />
                  e em outros países.</>
                ) : (
                  <>Practitioners trained by the CherieThai Institute<br />
                  are already working across different states of Brazil<br />
                  and in other countries.</>
                )}
              </motion.p>
            </div>

            {/* Interactive map */}
            <motion.div {...inView(0.12)}>
              <StudentMap />
            </motion.div>

            {/* Coming soon note */}
            <motion.div {...inView(0.2)} className="mt-12 border-t border-sand/8 pt-10">
              <div className="flex items-start gap-6">
                <div
                  className="w-px self-stretch"
                  style={{ background: 'linear-gradient(to bottom, rgba(138,162,120,0.4), transparent)' }}
                />
                <div>
                  <p className="label-text text-sage/40 mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
                    {lang === 'PT' ? 'EM BREVE' : 'COMING SOON'}
                  </p>
                  <p className="font-cormorant font-light text-ivory/50" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)', lineHeight: 1.5 }}>
                    {lang === 'PT'
                      ? 'Os perfis individuais de cada terapeuta certificado — com foto, localização, horas de formação e apresentação em vídeo — serão publicados em breve.'
                      : 'Individual profiles for each certified practitioner — including photo, location, training hours and video presentation — will be published shortly.'}
                  </p>
                </div>
              </div>
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
                <p className="label-text text-sage/35 mb-3">{lang === 'PT' ? 'Imersão Internacional' : 'International Immersion'}</p>
                <p className="label-text text-sand/10">04</p>
              </div>
              <p className="label-text text-sand/12 text-xs text-right">{lang === 'PT' ? 'Tailândia' : 'Thailand'}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-end">

              <div>
                <motion.p {...inView()} className="label-text text-sage/25 mb-10 tracking-[0.28em]">
                  {lang === 'PT' ? 'Em Breve' : 'Coming Soon'}
                </motion.p>

                <motion.h3
                  className="font-cormorant font-light text-ivory/75 mb-10"
                  style={{ fontSize: 'clamp(2.75rem, 6vw, 5.5rem)', lineHeight: 1.02 }}
                  {...inView(0.1)}
                >
                  {lang === 'PT' ? <>Imersão<br />na Tailândia.</> : <>Thailand<br />Immersion.</>}
                </motion.h3>

                <motion.a
                  {...inView(0.2)}
                  href={lang === 'PT' ? whatsappUrl('PT', 'a Imersão na Tailândia') : whatsappUrl('EN', 'the Thailand Immersion')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-text text-sage/38 hover:text-sage/65 transition-colors duration-400 flex items-center gap-3"
                  style={{ fontSize: '0.625rem', letterSpacing: '0.24em' }}
                >
                  {lang === 'PT' ? 'Manifestar Interesse' : 'Express Interest'}
                  <span aria-hidden>→</span>
                </motion.a>
              </div>

              <motion.div {...inView(0.15)} className="space-y-5">
                <p className="body-text text-sage/35 text-base leading-relaxed">
                  {lang === 'PT'
                    ? 'Uma experiência de formação ainda não divulgada, realizada na Tailândia, precificada em USD, concebida para um número muito reduzido de praticantes internacionais.'
                    : 'An undisclosed training experience, held in Thailand, priced in USD, and designed for a very limited number of international practitioners.'}
                </p>
                <p className="body-text text-sage/22 text-sm leading-relaxed">
                  {lang === 'PT'
                    ? 'Os detalhes serão liberados em edição limitada. Aqueles que manifestarem interesse com antecedência serão notificados antes da divulgação pública.'
                    : 'Details will be released in limited edition. Those who express interest in advance will be notified before any public announcement.'}
                </p>
                <p className="label-text text-sage/18 text-xs mt-8">
                  {lang === 'PT'
                    ? 'Acesso exclusivo  ·  Vagas muito limitadas  ·  USD'
                    : 'Exclusive access  ·  Very limited places  ·  USD'}
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
