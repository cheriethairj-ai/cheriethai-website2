'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import CustomCursor from '@/components/CustomCursor'

const KARL_WA = `https://wa.me/5521996466022?text=${encodeURIComponent("Hello Karl, I'd like to enquire about the CherieThai Thailand Retreat 2027.")}`
const KARL_BASE = '5521996466022'
const wa = (msg: string) => `https://wa.me/${KARL_BASE}?text=${encodeURIComponent(msg)}`

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

// ─── Accommodation ────────────────────────────────────────────────────────────

const rooms = [
  {
    id: 'harmony',
    name: 'Harmony House',
    tag: 'SHARED DORMITORY',
    description: 'Bunk-bed dormitory accommodation in a shared communal space. Well-suited for solo practitioners who want to focus on the training and connect naturally with fellow students throughout the retreat.',
    investment: 'US$ 1,000',
    investmentLabel: 'PER PERSON',
    privateNote: null as string | null,
    photos: ['/retreat/harmony-1.jpg', '/retreat/harmony-2.jpg', '/retreat/harmony-3.jpg'],
    waLink: wa("Hello Karl, I'm interested in reserving a place at the CherieThai Thailand Retreat 2027 — Harmony House (Shared Dormitory). Could you please confirm availability?"),
  },
  {
    id: 'hill',
    name: 'Hill Haven',
    tag: 'GARDEN & MOUNTAIN VIEWS',
    description: 'Private and shared room options set among garden and mountain views. A considered, comfortable base between training sessions — quiet enough to rest well, generous enough to feel like a proper retreat.',
    investment: '~ US$ 1,200',
    investmentLabel: 'PER PERSON · SHARED',
    privateNote: 'Private room options available at a premium — enquire directly.',
    photos: ['/retreat/resort-2.jpg', '/retreat/resort-5.jpg'],
    waLink: wa("Hello Karl, I'm interested in reserving a place at the CherieThai Thailand Retreat 2027 — Hill Haven. Could you please confirm availability and room options?"),
  },
  {
    id: 'earth',
    name: 'Earth Lodge',
    tag: 'PREMIUM ACCOMMODATION',
    description: 'The most spacious option at VOASIS, with mountain views, a private bathtub and carefully considered interiors. For those who want the complete retreat experience with genuine comfort and privacy.',
    investment: '~ US$ 1,400',
    investmentLabel: 'PER PERSON · SHARED',
    privateNote: 'Private room options available at a premium — enquire directly.',
    photos: ['/retreat/resort-3.jpg', '/retreat/resort-4.jpg', '/retreat/resort-5.jpg'],
    waLink: wa("Hello Karl, I'm interested in reserving a place at the CherieThai Thailand Retreat 2027 — Earth Lodge. Could you please confirm availability and room options?"),
  },
]

type Room = typeof rooms[0]

function RoomCard({ room }: { room: Room }) {
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
            {room.tag}
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
            {room.description}
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(220,201,160,0.08)', paddingTop: '1.5rem' }}>
          <p className="label-text text-sage/35 mb-1" style={{ fontSize: '0.42rem', letterSpacing: '0.22em' }}>
            RETREAT INVESTMENT · {room.investmentLabel}
          </p>
          <p className="font-cormorant font-light text-sand/85 mb-3" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', lineHeight: 1 }}>
            {room.investment}
          </p>
          {room.privateNote && (
            <p className="label-text text-sage/30 mb-4" style={{ fontSize: '0.4rem', letterSpacing: '0.14em' }}>
              {room.privateNote}
            </p>
          )}
          <p className="label-text text-sage/20 mb-6" style={{ fontSize: '0.38rem', letterSpacing: '0.14em' }}>
            4 NIGHTS ACCOMMODATION · TRAINING & CERTIFICATE INCLUDED · FOOD NOT INCLUDED
          </p>

          <a
            href={room.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sand/70 border-sand/25 inline-flex"
          >
            <span>Reserve this space</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Thailand2027Page() {
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
          <Link href="/institute" className="label-text text-sand/30 hover:text-sand/60 transition-colors duration-300" style={{ fontSize: '0.52rem', letterSpacing: '0.25em' }}>
            THE INSTITUTE →
          </Link>
        </motion.header>

        {/* ── Hero ── */}
        <div className="relative w-full" style={{ height: '100svh', minHeight: '600px' }}>
          <Image
            src="/retreat/resort-1.jpg"
            alt="CherieThai Thailand Retreat 2027 — VOASIS Valley, Krabi"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,17,14,0.25) 0%, rgba(13,17,14,0.1) 35%, rgba(13,17,14,0.85) 100%)' }} />

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-16" style={{ paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}>
            <motion.p {...fadeUp(0.2)} className="label-text text-sage/50 mb-5" style={{ fontSize: '0.5rem', letterSpacing: '0.32em' }}>
              CHERIETHAI INSTITUTE · THAILAND INTENSIVE TRAINING
            </motion.p>
            <motion.h1
              {...fadeUp(0.35)}
              className="display-section text-ivory"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', lineHeight: 0.88, marginBottom: '2rem' }}
            >
              Thailand<br />2027.
            </motion.h1>
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center gap-4">
              <span className="label-text text-sand/55" style={{ fontSize: '0.52rem', letterSpacing: '0.24em' }}>11–14 JANUARY 2027</span>
              <span className="text-sage/25" style={{ fontSize: '0.4rem' }}>◆</span>
              <span className="label-text text-sand/55" style={{ fontSize: '0.52rem', letterSpacing: '0.24em' }}>VOASIS VALLEY · KRABI · SOUTHERN THAILAND</span>
            </motion.div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderBottom: '1px solid rgba(220,201,160,0.07)', borderTop: '1px solid rgba(220,201,160,0.07)' }}
        >
          {[
            { num: '22', label: 'TRAINING HOURS' },
            { num: '4', label: 'TEACHING DAYS' },
            { num: '3', label: 'ACCOMMODATION OPTIONS' },
            { num: 'KBV', label: 'KRABI · THAILAND' },
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
                THE TRAINING
              </p>
              <h2
                className="font-cormorant font-light text-ivory"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, marginBottom: '2.5rem' }}
              >
                22 hours of concentrated<br />hands-on training —<br /><span style={{ color: 'rgba(170,182,162,0.5)' }}>in the country where it began.</span>
              </h2>
              <div className="border-l border-sand/15 pl-5">
                <p className="body-text text-sand/40" style={{ fontSize: '0.85rem', lineHeight: 1.85 }}>
                  This is a small-group intensive training programme. Not a retreat for rest. Not a yoga teacher training. Not a certification mill. A focused, in-person learning experience with CherieThai Institute — held in Thailand because there is nowhere better to learn this work.
                </p>
              </div>
            </motion.div>

            <motion.div {...reveal(0.1)} className="flex flex-col gap-7">
              {[
                'The 2027 Thailand Intensive is a 22-hour practical training programme held at VOASIS Valley — a private retreat venue set within the limestone mountains of Krabi, southern Thailand.',
                'All training is massage-table based, covering the core principles and technique of Thai bodywork adapted for clinical practice: body mechanics, pressure, passive mobility, stretching, sequencing and extended hands-on application.',
                'The format is deliberately compact. Four teaching days — two full days of seven hours each, two shorter days of four hours — with enough free time to rest, explore Krabi and absorb what you are learning.',
              ].map((para, i) => (
                <p key={i} className="body-text text-sand/50 leading-loose" style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1rem)' }}>
                  {para}
                </p>
              ))}

              <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-6" style={{ borderTop: '1px solid rgba(220,201,160,0.07)' }}>
                <div>
                  <p className="label-text text-sage/30 mb-3" style={{ fontSize: '0.42rem', letterSpacing: '0.22em' }}>INCLUDED</p>
                  {[
                    '22h practical training — massage table',
                    '4 nights · VOASIS Valley Krabi',
                    'CherieThai Institute certificate',
                    'Full use of VOASIS facilities',
                    'Airport transfers (arrival & departure days)',
                  ].map((item) => (
                    <p key={item} className="body-text text-sand/40 mb-1.5" style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>{item}</p>
                  ))}
                </div>
                <div>
                  <p className="label-text text-sage/30 mb-3" style={{ fontSize: '0.42rem', letterSpacing: '0.22em' }}>NOT INCLUDED</p>
                  {[
                    'Food & beverages',
                    'Flights',
                    'Travel insurance',
                    'Personal activities & excursions',
                  ].map((item) => (
                    <p key={item} className="body-text text-sand/40 mb-1.5" style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>{item}</p>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Programme ── */}
        <div
          className="px-6 md:px-12 lg:px-16"
          style={{ paddingTop: 'clamp(4rem, 10vw, 8rem)', paddingBottom: 'clamp(4rem, 10vw, 8rem)', borderTop: '1px solid rgba(220,201,160,0.07)' }}
        >
          <motion.div {...reveal()} className="max-w-6xl">
            <p className="label-text text-sage/30 mb-12" style={{ fontSize: '0.48rem', letterSpacing: '0.28em' }}>
              THE PROGRAMME · 11–14 JANUARY 2027
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {[
                {
                  day: '01',
                  hours: '4h',
                  title: 'Arrival & First Training Block',
                  body: 'Check in at VOASIS, orientation to the space and training structure, then the first practical session of the retreat. The shorter day is intentional — time to arrive properly before the work begins.',
                },
                {
                  day: '02',
                  hours: '7h',
                  title: 'Full Intensive Day',
                  body: 'The first of two full training days. Core technique, body mechanics, pressure application and extended hands-on practice with structured feedback. The longest and most concentrated day of the programme.',
                },
                {
                  day: '03',
                  hours: '7h',
                  title: 'Full Intensive Day',
                  body: 'Continued depth — clinical sequencing, passive mobility, positioning and partner work. Building on the previous day with greater complexity and refinement.',
                },
                {
                  day: '04',
                  hours: '4h',
                  title: 'Integration & Review',
                  body: 'Final practical session, integration of the full programme, review and assessment. The afternoon is free — time to explore Krabi before departure. Certificate issued on completion.',
                },
              ].map(({ day, hours, title, body }, i) => (
                <motion.div
                  key={day}
                  {...reveal(i * 0.08)}
                  className="py-10 md:py-12 pr-0 md:pr-16"
                  style={{
                    borderTop: '1px solid rgba(220,201,160,0.07)',
                    borderRight: i % 2 === 0 ? '1px solid rgba(220,201,160,0.07)' : 'none',
                    paddingLeft: i % 2 === 1 ? 'clamp(1.5rem, 4vw, 4rem)' : '0',
                  }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <span
                      className="font-cormorant font-light text-sage/20"
                      style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1 }}
                    >
                      {day}
                    </span>
                    <span
                      className="label-text text-sage/40 mt-2"
                      style={{ fontSize: '0.5rem', letterSpacing: '0.24em' }}
                    >
                      {hours}
                    </span>
                  </div>
                  <h3
                    className="font-cormorant font-light text-ivory mb-4"
                    style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)', lineHeight: 1.1 }}
                  >
                    {title}
                  </h3>
                  <p className="body-text text-sand/40 leading-loose" style={{ fontSize: '0.875rem' }}>
                    {body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Location image ── */}
        <div className="relative overflow-hidden" style={{ height: 'clamp(400px, 60vw, 700px)' }}>
          <Image
            src="/retreat/resort-2.jpg"
            alt="VOASIS Valley, Krabi"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,17,14,0.8) 0%, rgba(13,17,14,0.3) 60%, transparent 100%)' }} />
          <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-16">
            <motion.div {...reveal()}>
              <p className="label-text text-sage/45 mb-4" style={{ fontSize: '0.48rem', letterSpacing: '0.28em' }}>
                THE VENUE
              </p>
              <h2 className="font-cormorant font-light text-ivory mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 0.95 }}>
                VOASIS Valley<br />
                <span style={{ color: 'rgba(220,201,160,0.4)' }}>Krabi, Thailand.</span>
              </h2>
              <p className="body-text text-sand/55 max-w-sm leading-loose" style={{ fontSize: 'clamp(0.875rem, 1.3vw, 0.95rem)' }}>
                A private retreat venue set between limestone cliffs and tropical rainforest in southern Thailand. Quiet, considered and entirely removed from distraction.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Venue facilities ── */}
        <div
          className="px-6 md:px-12 lg:px-16"
          style={{ paddingTop: 'clamp(4rem, 10vw, 8rem)', paddingBottom: 'clamp(4rem, 10vw, 8rem)', borderBottom: '1px solid rgba(220,201,160,0.07)' }}
        >
          <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
            <motion.div {...reveal()}>
              <p className="label-text text-sage/30 mb-8" style={{ fontSize: '0.48rem', letterSpacing: '0.28em' }}>
                INCLUDED WITH THE VENUE
              </p>
              <h2
                className="font-cormorant font-light text-ivory"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.1 }}
              >
                Everything you need<br />
                <span style={{ color: 'rgba(170,182,162,0.45)' }}>to recover, rest and train well.</span>
              </h2>
            </motion.div>
            <motion.div {...reveal(0.1)}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {[
                  'Swimming pool',
                  'Ice bath',
                  'Jacuzzi',
                  'Sauna',
                  'Steam room',
                  'Gym',
                  'Wi-Fi',
                  'Coworking & community areas',
                  'Airport transfers (arrival & departure)',
                ].map((facility) => (
                  <div key={facility} className="flex items-start gap-2">
                    <span className="text-sage/30 mt-0.5" style={{ fontSize: '0.6rem' }}>·</span>
                    <p className="body-text text-sand/45" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{facility}</p>
                  </div>
                ))}
              </div>
              <p className="body-text text-sand/25 mt-8" style={{ fontSize: '0.8rem', lineHeight: 1.7 }}>
                Meals can be purchased directly through VOASIS (3 meals/day: 1,100 THB · brunch + dinner: 1,000 THB) or participants can explore the local restaurants and cafés around Krabi.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Accommodation ── */}
        <div className="px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-8">
          <motion.div {...reveal()} className="flex items-end justify-between gap-8 mb-2">
            <div>
              <p className="label-text text-sage/30 mb-3" style={{ fontSize: '0.48rem', letterSpacing: '0.28em' }}>
                ACCOMMODATION & INVESTMENT
              </p>
              <h2 className="font-cormorant font-light text-ivory" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}>
                Choose your space.
              </h2>
            </div>
            <p className="body-text text-sand/30 text-right hidden md:block" style={{ fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '30ch' }}>
              Your investment covers the full training programme, certificate and four nights accommodation. Availability is limited.
            </p>
          </motion.div>
        </div>

        <div className="mb-0" style={{ borderTop: '1px solid rgba(220,201,160,0.07)' }}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* ── Certification ── */}
        <div
          className="px-6 md:px-12 lg:px-16"
          style={{
            paddingTop: 'clamp(5rem, 12vw, 9rem)',
            paddingBottom: 'clamp(5rem, 12vw, 9rem)',
            borderTop: '1px solid rgba(220,201,160,0.07)',
          }}
        >
          <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <motion.div {...reveal()}>
              <p className="label-text text-sage/30 mb-8" style={{ fontSize: '0.48rem', letterSpacing: '0.28em' }}>
                CERTIFICATION
              </p>
              <h2
                className="font-cormorant font-light text-ivory mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.1 }}
              >
                Participants who complete<br />
                the training will receive:
              </h2>
              <p className="body-text text-sand/40 leading-loose" style={{ fontSize: '0.9rem' }}>
                The certificate is issued directly by CherieThai Institute and reflects the professional standard of the training. It is awarded on successful completion of all 22 hours of practical instruction.
              </p>
            </motion.div>

            <motion.div {...reveal(0.1)}>
              <div
                className="flex flex-col justify-center px-10 py-12"
                style={{
                  border: '1px solid rgba(220,201,160,0.1)',
                  background: 'rgba(220,201,160,0.02)',
                }}
              >
                <p className="label-text text-sage/35 mb-6" style={{ fontSize: '0.44rem', letterSpacing: '0.3em' }}>
                  CHERIETHAI INSTITUTE
                </p>
                <h3
                  className="font-cormorant font-light text-ivory mb-3"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: 1.2 }}
                >
                  Thailand Intensive<br />Training Certificate
                </h3>
                <div style={{ borderTop: '1px solid rgba(220,201,160,0.1)', paddingTop: '1.25rem', marginTop: '1.25rem' }}>
                  <p className="label-text text-sage/40" style={{ fontSize: '0.46rem', letterSpacing: '0.22em' }}>
                    22 HOURS · PRACTICAL TRAINING
                  </p>
                  <p className="label-text text-sage/25 mt-2" style={{ fontSize: '0.4rem', letterSpacing: '0.18em' }}>
                    MASSAGE-TABLE BASED THAI BODYWORK · ISSUED BY CHERIETHAI INSTITUTE
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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
                BOOKINGS & ENQUIRIES
              </p>
              <h2
                className="font-cormorant font-light text-ivory"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.92, marginBottom: '1.5rem' }}
              >
                Reserve your space.
              </h2>
              <p className="body-text text-sand/45 leading-loose mb-4" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', maxWidth: '44ch' }}>
                This training is intimate by design. Some accommodation has been reserved for the teaching team, so the number of places available to participants is deliberately limited.
              </p>
              <p className="body-text text-sand/30 leading-loose mb-12" style={{ fontSize: '0.875rem', maxWidth: '44ch' }}>
                Contact Karl directly to confirm availability and secure your accommodation.
              </p>

              <a
                href={KARL_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sand/70 border-sand/25 inline-flex"
              >
                <span>Speak with Karl</span>
                <span aria-hidden>→</span>
              </a>

              <p className="label-text text-sage/20 mt-8" style={{ fontSize: '0.46rem', letterSpacing: '0.18em' }}>
                WHATSAPP · RIO DE JANEIRO
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
