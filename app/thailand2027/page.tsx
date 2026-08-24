'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import CustomCursor from '@/components/CustomCursor'
import LanguageToggle from '@/components/LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'

const KARL_WA = `https://wa.me/5521996466022?text=${encodeURIComponent("Hello, I'd like to enquire about the CherieThai Thailand Retreat 2027 and reserve a space.")}`

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 1.0, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

const rooms = [
  {
    id: 'earth',
    name: 'Earth Lodge',
    tag: 'PRIVATE SUITE',
    tagPT: 'SUÍTE PRIVATIVA',
    description: 'Tucked quietly within the tropical landscape, Earth Lodge offers complete privacy without losing connection to the natural surroundings. A spacious interior, queen bed, private terrace and outdoor soaking tub.',
    descriptionPT: 'Discretamente integrado à paisagem tropical, o Earth Lodge oferece privacidade total sem perder a conexão com a natureza. Interior amplo, cama de casal, varanda privativa e banheira externa.',
    individual: '$2,000',
    couple: '$3,200',
    note: '$1,600 per person',
    notePT: '$1,600 por pessoa',
    photos: ['/retreat/resort-3.jpg', '/retreat/resort-4.jpg', '/retreat/resort-5.jpg'],
  },
  {
    id: 'hill',
    name: 'Hill Haven',
    tag: 'VALLEY VIEW SUITE',
    tagPT: 'SUÍTE COM VISTA PARA O VALE',
    description: 'Perched above the valley with expansive windows and uninterrupted views of lush gardens and limestone cliffs. A private balcony where every sunrise becomes part of the experience.',
    descriptionPT: 'Erguida acima do vale, com janelas amplas e vistas sem obstrução para jardins exuberantes e falésias de calcário. Uma varanda privativa onde cada amanhecer se torna parte da experiência.',
    individual: '$1,700',
    couple: '$2,500',
    note: '$1,250 per person',
    notePT: '$1,250 por pessoa',
    photos: ['/retreat/resort-2.jpg', '/retreat/resort-5.jpg'],
  },
  {
    id: 'harmony',
    name: 'Harmony House',
    tag: 'SHARED HOUSE',
    tagPT: 'CASA COMPARTILHADA',
    description: 'For those who are drawn to the communal spirit of retreat life. Eight beds in a thoughtfully designed shared space, where mornings begin over coffee and friendships form naturally.',
    descriptionPT: 'Para quem valoriza o espírito comunitário do retiro. Oito camas em um espaço compartilhado cuidadosamente projetado, onde os dias começam com café e as amizades surgem naturalmente.',
    individual: '$1,150',
    couple: null,
    note: null,
    notePT: null,
    photos: ['/retreat/harmony-1.jpg', '/retreat/harmony-2.jpg', '/retreat/harmony-3.jpg'],
  },
]

type Room = typeof rooms[0]

function RoomCard({ room, lang }: { room: Room; lang: 'PT' | 'EN' }) {
  const [activePhoto, setActivePhoto] = useState(0)

  return (
    <motion.div
      {...reveal()}
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ borderTop: '1px solid rgba(220,201,160,0.07)' }}
    >
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', minHeight: '300px' }}>
        <Image
          src={room.photos[activePhoto]}
          alt={room.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', transition: 'opacity 0.5s ease' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,17,14,0.4) 0%, transparent 50%)' }} />
        <div className="absolute top-5 left-5">
          <span className="label-text" style={{ fontSize: '0.42rem', letterSpacing: '0.22em', color: 'rgba(220,201,160,0.8)', background: 'rgba(13,17,14,0.6)', padding: '4px 10px', backdropFilter: 'blur(4px)' }}>
            {lang === 'PT' ? room.tagPT : room.tag}
          </span>
        </div>
        {room.photos.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
            {room.photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setActivePhoto(i)}
                style={{ width: '18px', height: '3px', borderRadius: '2px', border: 'none', cursor: 'pointer', background: i === activePhoto ? 'rgba(220,201,160,0.9)' : 'rgba(220,201,160,0.25)', transition: 'background 0.3s', padding: 0 }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col justify-between px-8 md:px-12 py-10 md:py-14" style={{ background: 'rgba(13,17,14,0.6)' }}>
        <div>
          <h3 className="font-cormorant font-light text-ivory mb-5" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 0.95 }}>
            {room.name}
          </h3>
          <p className="body-text text-sand/50 leading-loose mb-8" style={{ fontSize: 'clamp(0.875rem, 1.3vw, 0.95rem)', maxWidth: '42ch' }}>
            {lang === 'PT' ? room.descriptionPT : room.description}
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(220,201,160,0.08)', paddingTop: '1.5rem' }}>
          <div className="flex items-baseline justify-between mb-2">
            <span className="label-text text-sage/35" style={{ fontSize: '0.46rem', letterSpacing: '0.2em' }}>
              {lang === 'PT' ? 'INDIVIDUAL' : 'SINGLE'}
            </span>
            <span className="font-cormorant font-light text-sand/85" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              {room.individual}
            </span>
          </div>
          {room.couple && (
            <div className="flex items-baseline justify-between">
              <div>
                <span className="label-text text-sage/35" style={{ fontSize: '0.46rem', letterSpacing: '0.2em' }}>
                  {lang === 'PT' ? 'CASAL' : 'COUPLE'}
                </span>
                {room.note && (
                  <span className="label-text text-sage/20 ml-2" style={{ fontSize: '0.38rem', letterSpacing: '0.12em' }}>
                    ({lang === 'PT' ? room.notePT : room.note})
                  </span>
                )}
              </div>
              <span className="font-cormorant font-light text-sand/85" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
                {room.couple}
              </span>
            </div>
          )}
          <p className="label-text text-sage/20 mt-3" style={{ fontSize: '0.38rem', letterSpacing: '0.14em' }}>
            {lang === 'PT' ? '* ALIMENTAÇÃO NÃO INCLUÍDA' : '* FOOD NOT INCLUDED'}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Thailand2027Page() {
  const { lang } = useLanguage()

  return (
    <>
      <CustomCursor />

      <main style={{ background: '#0D110E', minHeight: '100svh', color: '#F5F0E8' }}>

        {/* ── Nav ── */}
        <motion.header
          {...fadeUp(0)}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 py-6"
          style={{ background: 'linear-gradient(to bottom, rgba(13,17,14,0.96) 0%, transparent 100%)' }}
        >
          <Link href="/" className="label-text text-sand/40 hover:text-sand/80 transition-colors duration-300" style={{ fontSize: '0.52rem', letterSpacing: '0.25em' }}>
            CHERIETHAI
          </Link>
          <LanguageToggle />
        </motion.header>

        {/* ── Hero ── */}
        <div className="relative w-full" style={{ height: '100svh', minHeight: '600px' }}>
          <Image
            src="/retreat/resort-1.jpg"
            alt="CherieThai Retreat Thailand"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,17,14,0.25) 0%, rgba(13,17,14,0.1) 35%, rgba(13,17,14,0.85) 100%)' }} />

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-16" style={{ paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}>
            <motion.p {...fadeUp(0.2)} className="label-text text-sage/50 mb-5" style={{ fontSize: '0.5rem', letterSpacing: '0.32em' }}>
              {lang === 'PT' ? 'INSTITUTO CHERIETHAI · RETIRO INTERNACIONAL' : 'CHERIETHAI INSTITUTE · INTERNATIONAL RETREAT'}
            </motion.p>
            <motion.h1
              {...fadeUp(0.35)}
              className="display-section text-ivory"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', lineHeight: 0.88, marginBottom: '2rem' }}
            >
              Thailand<br />Retreat.
            </motion.h1>
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center gap-4">
              <span className="label-text text-sand/55" style={{ fontSize: '0.52rem', letterSpacing: '0.24em' }}>11–14 JANUARY 2027</span>
              <span className="text-sage/25" style={{ fontSize: '0.4rem' }}>◆</span>
              <span className="label-text text-sand/55" style={{ fontSize: '0.52rem', letterSpacing: '0.24em' }}>KRABI · SOUTHERN THAILAND</span>
            </motion.div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderBottom: '1px solid rgba(220,201,160,0.07)', borderTop: '1px solid rgba(220,201,160,0.07)' }}
        >
          {[
            { num: '30', label: lang === 'PT' ? 'HORAS DE FORMAÇÃO' : 'TRAINING HOURS' },
            { num: '4', label: lang === 'PT' ? 'DIAS IMERSIVOS' : 'IMMERSIVE DAYS' },
            { num: '3', label: lang === 'PT' ? 'OPÇÕES DE ACOMODAÇÃO' : 'ACCOMMODATION OPTIONS' },
            { num: '∞', label: lang === 'PT' ? 'KRABI, TAILÂNDIA' : 'KRABI, THAILAND' },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col items-center justify-center py-10 md:py-12" style={{ borderRight: '1px solid rgba(220,201,160,0.07)' }}>
              <p className="font-cormorant font-light text-ivory" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}>{num}</p>
              <p className="label-text text-sage/35 mt-2 text-center" style={{ fontSize: '0.42rem', letterSpacing: '0.2em' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* ── About ── */}
        <div className="px-6 md:px-12 lg:px-16" style={{ paddingTop: 'clamp(5rem, 12vw, 10rem)', paddingBottom: 'clamp(5rem, 12vw, 10rem)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 max-w-6xl">

            <motion.div {...reveal()}>
              <p className="label-text text-sage/30 mb-8" style={{ fontSize: '0.48rem', letterSpacing: '0.28em' }}>
                {lang === 'PT' ? 'SOBRE O RETIRO' : 'ABOUT THE RETREAT'}
              </p>
              <h2
                className="font-cormorant font-light text-ivory"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, marginBottom: '2.5rem' }}
              >
                {lang === 'PT'
                  ? <>Quatro dias de imersão<br />completa no Método CherieThai<br /><span style={{ color: 'rgba(170,182,162,0.5)' }}>— no país onde nasceu.</span></>
                  : <>Four days of complete immersion<br />in the CherieThai Method<br /><span style={{ color: 'rgba(170,182,162,0.5)' }}>— in the country where it was born.</span></>
                }
              </h2>
              <div className="border-l border-sand/15 pl-5">
                <p className="body-text text-sand/35" style={{ fontSize: '0.85rem', lineHeight: 1.8 }}>
                  {lang === 'PT'
                    ? 'Participantes certificados receberão o Certificado Internacional UTTMS (30 Horas), reconhecido oficialmente pelo governo tailandês.'
                    : 'Successful participants will be awarded the International UTTMS Certificate (30 Hours), officially recognised by the Thai government.'}
                </p>
              </div>
            </motion.div>

            <motion.div {...reveal(0.1)} className="flex flex-col gap-7">
              {(lang === 'PT' ? [
                'O Retiro Internacional CherieThai é uma experiência de formação imersiva de 30 horas realizada no Voasis Valley — um retiro de luxo isolado entre as montanhas de calcário de Krabi, no sul da Tailândia.',
                'O treinamento é integrativo — trabalhando tanto na maca quanto no chão — permitindo que os alunos desenvolvam uma compreensão mais completa do método.',
                'Ensinar na Tailândia tem um significado pessoal profundo para mim. O Método CherieThai nasceu das tradições do meu país natal antes de ser refinado através da anatomia moderna, biomecânica e anos de prática clínica.',
              ] : [
                'The CherieThai International Retreat is a 30-hour immersive training experience held at Voasis Valley — a secluded luxury retreat nestled within the limestone mountains of Krabi, southern Thailand.',
                'Training is integrative — working both on the bed and on the floor — allowing students to develop a more complete understanding of the method across both modalities.',
                'Teaching in Thailand holds deep personal significance. The CherieThai Method was born from the traditions of my homeland before being refined through modern anatomy, biomechanics and years of clinical practice.',
              ]).map((para, i) => (
                <p key={i} className="body-text text-sand/50 leading-loose" style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1rem)' }}>
                  {para}
                </p>
              ))}

              <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-6" style={{ borderTop: '1px solid rgba(220,201,160,0.07)' }}>
                {(lang === 'PT' ? [
                  { label: 'INCLUÍDO', items: ['Curso completo CherieThai de 4 dias', 'Acomodação (conforme escolha)', 'Acesso às áreas comuns do resort', 'Piscina com vistas para a montanha'] },
                  { label: 'NÃO INCLUÍDO', items: ['Alimentação e bebidas', 'Voos', 'Transfers', 'Passeios e atividades extras'] },
                ] : [
                  { label: 'INCLUDED', items: ['4-day full CherieThai course', 'Accommodation (as per room choice)', 'Resort common areas & pool', 'Mountain views'] },
                  { label: 'NOT INCLUDED', items: ['Food & beverages', 'Flights', 'Transfers', 'Excursions & activities'] },
                ]).map(({ label, items }) => (
                  <div key={label}>
                    <p className="label-text text-sage/30 mb-3" style={{ fontSize: '0.42rem', letterSpacing: '0.22em' }}>{label}</p>
                    {items.map((item) => (
                      <p key={item} className="body-text text-sand/40 mb-1.5" style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>{item}</p>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Location image ── */}
        <div className="relative overflow-hidden" style={{ height: 'clamp(400px, 60vw, 700px)' }}>
          <Image
            src="/retreat/resort-2.jpg"
            alt="Voasis Valley, Krabi"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,17,14,0.75) 0%, rgba(13,17,14,0.2) 60%, transparent 100%)' }} />
          <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-16">
            <motion.div {...reveal()}>
              <p className="label-text text-sage/45 mb-4" style={{ fontSize: '0.48rem', letterSpacing: '0.28em' }}>
                {lang === 'PT' ? 'O LOCAL' : 'THE LOCATION'}
              </p>
              <h2 className="font-cormorant font-light text-ivory mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 0.95 }}>
                Voasis Valley<br />
                <span style={{ color: 'rgba(220,201,160,0.4)' }}>Krabi, Thailand.</span>
              </h2>
              <p className="body-text text-sand/55 max-w-sm leading-loose" style={{ fontSize: 'clamp(0.875rem, 1.3vw, 0.95rem)' }}>
                {lang === 'PT'
                  ? 'Um retiro de luxo isolado entre falésias de calcário e floresta tropical. Silencioso, extraordinário, sem distração.'
                  : 'A secluded luxury retreat nestled between limestone cliffs and tropical rainforest. Quiet, extraordinary, undistracted.'}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Accommodation ── */}
        <div className="px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-8">
          <motion.div {...reveal()} className="flex items-end justify-between gap-8 mb-4">
            <div>
              <p className="label-text text-sage/30 mb-3" style={{ fontSize: '0.48rem', letterSpacing: '0.28em' }}>
                {lang === 'PT' ? 'ACOMODAÇÃO & PREÇOS' : 'ACCOMMODATION & PRICING'}
              </p>
              <h2 className="font-cormorant font-light text-ivory" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}>
                {lang === 'PT' ? 'Escolha o seu espaço.' : 'Choose your space.'}
              </h2>
            </div>
            <p className="body-text text-sand/30 text-right hidden md:block" style={{ fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '28ch' }}>
              {lang === 'PT' ? 'Todos os preços incluem o curso completo de quatro dias.' : 'All prices include the full four-day course.'}
            </p>
          </motion.div>
        </div>

        <div className="mx-0 mb-0" style={{ borderTop: '1px solid rgba(220,201,160,0.07)' }}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} lang={lang} />
          ))}
        </div>

        {/* ── Reserve ── */}
        <div
          className="relative overflow-hidden"
          style={{ borderTop: '1px solid rgba(220,201,160,0.07)' }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(42,51,41,0.35) 0%, transparent 65%)' }} />
          <div className="relative px-6 md:px-12 lg:px-16" style={{ paddingTop: 'clamp(5rem, 12vw, 10rem)', paddingBottom: 'clamp(5rem, 12vw, 10rem)' }}>
            <motion.div {...reveal()} className="max-w-2xl">
              <p className="label-text text-sage/30 mb-8" style={{ fontSize: '0.5rem', letterSpacing: '0.3em' }}>
                {lang === 'PT' ? 'RESERVAS & INFORMAÇÕES' : 'BOOKINGS & ENQUIRIES'}
              </p>
              <h2
                className="font-cormorant font-light text-ivory"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.92, marginBottom: '1.5rem' }}
              >
                {lang === 'PT' ? 'Reserve o seu lugar.' : 'Reserve your space.'}
              </h2>
              <p className="body-text text-sand/45 leading-loose mb-12" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', maxWidth: '44ch' }}>
                {lang === 'PT'
                  ? 'Este retiro é íntimo por natureza. Entre em contacto com Karl para confirmar disponibilidade e assegurar a sua acomodação.'
                  : 'This retreat is intimate by design. Contact Karl directly to confirm availability and secure your accommodation.'}
              </p>

              <a
                href={KARL_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sand/70 border-sand/25 inline-flex"
              >
                <span>{lang === 'PT' ? 'Falar com Karl' : 'Speak with Karl'}</span>
                <span aria-hidden>→</span>
              </a>

              <p className="label-text text-sage/20 mt-8" style={{ fontSize: '0.46rem', letterSpacing: '0.18em' }}>
                {lang === 'PT' ? 'WHATSAPP · RIO DE JANEIRO' : 'WHATSAPP · RIO DE JANEIRO'}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="px-6 md:px-12 lg:px-16 py-10" style={{ borderTop: '1px solid rgba(220,201,160,0.05)' }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="label-text text-sage/18" style={{ fontSize: '0.48rem', letterSpacing: '0.22em' }}>
              CHERIETHAI INSTITUTE · SÃO PAULO · RIO DE JANEIRO
            </p>
            <Link href="/" className="label-text text-sage/18 hover:text-sage/40 transition-colors duration-300" style={{ fontSize: '0.48rem', letterSpacing: '0.22em' }}>
              CHERIETHAI.COM.BR →
            </Link>
          </div>
        </div>

      </main>
    </>
  )
}
