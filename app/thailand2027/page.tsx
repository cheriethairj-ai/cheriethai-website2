'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useCallback } from 'react'
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

// ─── Pricing types ─────────────────────────────────────────────────────────────

type PricingSharedOnly = {
  type: 'shared-only'
  perPerson: string
  note: string
}

type PricingDual = {
  type: 'dual'
  private: { total: string }
  shared: { total: string; perPerson: string }
}

type Room = {
  id: string
  name: string
  tag: string
  description: string
  pricing: PricingSharedOnly | PricingDual
  photos: string[]
  waLink: string
}

// ─── Accommodation data ────────────────────────────────────────────────────────

const rooms: Room[] = [
  {
    id: 'harmony',
    name: 'Harmony House',
    tag: 'SHARED DORMITORY',
    description: 'Bunk-bed dormitory accommodation in a shared communal space. Well-suited for solo practitioners who want to focus on the training and connect naturally with fellow students. Harmony House is the most accessible entry point into the retreat.',
    pricing: {
      type: 'shared-only',
      perPerson: 'US$ 1,000',
      note: 'Shared dormitory · No private occupancy option',
    },
    photos: ['/retreat/harmony-1.jpg', '/retreat/harmony-2.jpg', '/retreat/harmony-3.jpg'],
    waLink: wa("Hello Karl, I'm interested in reserving a place at the CherieThai Thailand Retreat 2027 — Harmony House (Shared Dormitory). Could you please confirm availability?"),
  },
  {
    id: 'hill',
    name: 'Hill Haven',
    tag: 'GARDEN & MOUNTAIN VIEWS',
    description: 'A significant step up in privacy and comfort. Hill Haven offers garden view and mountain view rooms, each with considerably more space and quiet than the shared dormitory. Available for private occupancy or shared between two people.',
    pricing: {
      type: 'dual',
      private: { total: 'US$ 1,600' },
      shared: { total: 'US$ 2,300', perPerson: 'US$ 1,150 per person' },
    },
    photos: ['/retreat/resort-2.jpg', '/retreat/resort-5.jpg'],
    waLink: wa("Hello Karl, I'm interested in reserving a place at the CherieThai Thailand Retreat 2027 — Hill Haven. Could you please confirm availability and room options (garden view / mountain view, private or shared)?"),
  },
  {
    id: 'earth',
    name: 'Earth Lodge',
    tag: 'MOUNTAIN VIEW · BATHTUB',
    description: 'The highest accommodation category at VOASIS. Mountain views, a private bathtub and the most spacious interiors on the property. For those who want to arrive well-rested, recover fully between training days and experience the retreat at its fullest.',
    pricing: {
      type: 'dual',
      private: { total: 'US$ 1,900' },
      shared: { total: 'US$ 2,800', perPerson: 'US$ 1,400 per person' },
    },
    photos: ['/retreat/resort-3.jpg', '/retreat/resort-4.jpg', '/retreat/resort-5.jpg'],
    waLink: wa("Hello Karl, I'm interested in reserving a place at the CherieThai Thailand Retreat 2027 — Earth Lodge. Could you please confirm availability and room options (private or shared)?"),
  },
]

const INVESTMENT_INCLUDES = [
  '22 hours of hands-on CherieThai Institute training',
  '4 teaching days',
  '4 nights accommodation at VOASIS Valley Krabi',
  'CherieThai Institute Thailand Intensive Certificate',
  'Pool · Ice bath · Jacuzzi · Sauna · Steam room · Gym',
  'Wi-Fi and communal spaces',
  'Airport transfers on official arrival and departure dates',
]

// ─── Gallery ──────────────────────────────────────────────────────────────────

function RoomGallery({ photos, name, tag }: { photos: string[]; name: string; tag: string }) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const touchStartX = useRef(0)

  const prev = useCallback(() => setCurrent(i => (i - 1 + photos.length) % photos.length), [photos.length])
  const next = useCallback(() => setCurrent(i => (i + 1) % photos.length), [photos.length])

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
  }

  return (
    <>
      {/* Gallery */}
      <div
        className="relative overflow-hidden group"
        style={{ aspectRatio: '4/3', minHeight: '300px', cursor: 'pointer' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={() => setLightbox(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={photos[current]}
              alt={`${name} — photo ${current + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,17,14,0.5) 0%, transparent 45%)' }} />

        {/* Tag */}
        <div className="absolute top-5 left-5 z-10">
          <span className="label-text" style={{ fontSize: '0.42rem', letterSpacing: '0.22em', color: 'rgba(220,201,160,0.85)', background: 'rgba(13,17,14,0.65)', padding: '5px 11px', backdropFilter: 'blur(6px)' }}>
            {tag}
          </span>
        </div>

        {/* Expand hint */}
        <div
          className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(13,17,14,0.6)', backdropFilter: 'blur(6px)', padding: '5px 10px' }}
        >
          <span className="label-text text-sand/60" style={{ fontSize: '0.4rem', letterSpacing: '0.2em' }}>EXPAND</span>
        </div>

        {/* Prev / Next arrows */}
        {photos.length > 1 && (
          <>
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
              style={{ width: '36px', height: '36px', background: 'rgba(13,17,14,0.65)', backdropFilter: 'blur(6px)', border: '1px solid rgba(220,201,160,0.15)', color: 'rgba(220,201,160,0.8)', fontSize: '1.1rem', cursor: 'pointer' }}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
              style={{ width: '36px', height: '36px', background: 'rgba(13,17,14,0.65)', backdropFilter: 'blur(6px)', border: '1px solid rgba(220,201,160,0.15)', color: 'rgba(220,201,160,0.8)', fontSize: '1.1rem', cursor: 'pointer' }}
              aria-label="Next photo"
            >
              ›
            </button>
          </>
        )}

        {/* Dots */}
        {photos.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setCurrent(i) }}
                style={{
                  width: i === current ? '22px' : '6px',
                  height: '3px',
                  borderRadius: '2px',
                  border: 'none',
                  cursor: 'pointer',
                  background: i === current ? 'rgba(220,201,160,0.95)' : 'rgba(220,201,160,0.3)',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'rgba(10,13,11,0.96)', backdropFilter: 'blur(8px)' }}
            onClick={() => setLightbox(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={e => {
              const diff = touchStartX.current - e.changedTouches[0].clientX
              if (Math.abs(diff) > 40) { diff > 0 ? next() : prev() }
            }}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-6 right-6 z-10 label-text text-sand/50 hover:text-sand/90 transition-colors"
              style={{ fontSize: '0.5rem', letterSpacing: '0.22em', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              CLOSE ×
            </button>

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center px-14 md:px-24 py-14">
              <div className="relative w-full h-full" style={{ maxWidth: '1200px', maxHeight: '80vh' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                    onClick={e => e.stopPropagation()}
                  >
                    <Image
                      src={photos[current]}
                      alt={`${name} — photo ${current + 1}`}
                      fill
                      sizes="100vw"
                      style={{ objectFit: 'contain' }}
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Lightbox prev/next */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={e => { e.stopPropagation(); prev() }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2"
                  style={{ width: '44px', height: '44px', background: 'rgba(220,201,160,0.08)', border: '1px solid rgba(220,201,160,0.15)', color: 'rgba(220,201,160,0.7)', fontSize: '1.4rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  aria-label="Previous photo"
                >
                  ‹
                </button>
                <button
                  onClick={e => { e.stopPropagation(); next() }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2"
                  style={{ width: '44px', height: '44px', background: 'rgba(220,201,160,0.08)', border: '1px solid rgba(220,201,160,0.15)', color: 'rgba(220,201,160,0.7)', fontSize: '1.4rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  aria-label="Next photo"
                >
                  ›
                </button>
              </>
            )}

            {/* Lightbox dots */}
            {photos.length > 1 && (
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={e => { e.stopPropagation(); setCurrent(i) }}
                    style={{ width: i === current ? '22px' : '6px', height: '3px', borderRadius: '2px', border: 'none', cursor: 'pointer', background: i === current ? 'rgba(220,201,160,0.9)' : 'rgba(220,201,160,0.25)', transition: 'all 0.3s ease', padding: 0 }}
                  />
                ))}
              </div>
            )}

            {/* Counter */}
            <p className="absolute bottom-6 right-8 label-text text-sand/30" style={{ fontSize: '0.44rem', letterSpacing: '0.2em' }}>
              {current + 1} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ─── Room card ────────────────────────────────────────────────────────────────

function RoomCard({ room }: { room: Room }) {
  return (
    <motion.div
      {...reveal()}
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ borderTop: '1px solid rgba(220,201,160,0.07)' }}
    >
      {/* Gallery */}
      <RoomGallery photos={room.photos} name={room.name} tag={room.tag} />

      {/* Text */}
      <div className="flex flex-col justify-between px-8 md:px-12 py-10 md:py-14" style={{ background: 'rgba(13,17,14,0.6)' }}>
        <div>
          <h3 className="font-cormorant font-light text-ivory mb-4" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 0.95 }}>
            {room.name}
          </h3>
          <p className="body-text text-sand/50 leading-loose mb-8" style={{ fontSize: 'clamp(0.875rem, 1.3vw, 0.95rem)', maxWidth: '42ch' }}>
            {room.description}
          </p>
        </div>

        {/* Pricing */}
        <div>
          <div style={{ borderTop: '1px solid rgba(220,201,160,0.08)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
            <p className="label-text text-sage/35 mb-5" style={{ fontSize: '0.42rem', letterSpacing: '0.22em' }}>
              RETREAT INVESTMENT
            </p>

            {room.pricing.type === 'shared-only' ? (
              /* Harmony House */
              <div>
                <p
                  className="font-cormorant font-light text-sand/90"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 1, marginBottom: '0.4rem' }}
                >
                  {room.pricing.perPerson}
                </p>
                <p className="label-text text-sage/35" style={{ fontSize: '0.42rem', letterSpacing: '0.2em' }}>
                  PER PERSON
                </p>
                <p className="label-text text-sage/25 mt-3" style={{ fontSize: '0.38rem', letterSpacing: '0.14em' }}>
                  {room.pricing.note}
                </p>
              </div>
            ) : (
              /* Hill Haven & Earth Lodge */
              <div className="grid grid-cols-2 gap-4" style={{ borderTop: '0' }}>
                {/* Private */}
                <div className="pr-4" style={{ borderRight: '1px solid rgba(220,201,160,0.08)' }}>
                  <p className="label-text text-sage/40 mb-3" style={{ fontSize: '0.4rem', letterSpacing: '0.2em' }}>
                    PRIVATE<br />1 PERSON
                  </p>
                  <p
                    className="font-cormorant font-light text-sand/90"
                    style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.05 }}
                  >
                    {room.pricing.private.total}
                  </p>
                  <p className="label-text text-sage/25 mt-1.5" style={{ fontSize: '0.36rem', letterSpacing: '0.14em' }}>
                    TOTAL INVESTMENT
                  </p>
                </div>
                {/* Shared */}
                <div className="pl-2">
                  <p className="label-text text-sage/40 mb-3" style={{ fontSize: '0.4rem', letterSpacing: '0.2em' }}>
                    SHARED<br />2 PEOPLE
                  </p>
                  <p
                    className="font-cormorant font-light text-sand/90"
                    style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: 1.05 }}
                  >
                    {room.pricing.shared.total}
                  </p>
                  <p className="label-text text-sage/45 mt-1" style={{ fontSize: '0.38rem', letterSpacing: '0.14em' }}>
                    {room.pricing.shared.perPerson}
                  </p>
                  <p className="label-text text-sage/25 mt-0.5" style={{ fontSize: '0.34rem', letterSpacing: '0.12em' }}>
                    TOTAL INVESTMENT
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* What's included (collapsed list) */}
          <div style={{ borderTop: '1px solid rgba(220,201,160,0.06)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
            <p className="label-text text-sage/25 mb-3" style={{ fontSize: '0.38rem', letterSpacing: '0.18em' }}>
              INVESTMENT INCLUDES
            </p>
            {INVESTMENT_INCLUDES.map(item => (
              <p key={item} className="label-text text-sage/22" style={{ fontSize: '0.36rem', letterSpacing: '0.1em', lineHeight: 1.9 }}>
                · {item}
              </p>
            ))}
            <p className="label-text text-sage/20 mt-3" style={{ fontSize: '0.36rem', letterSpacing: '0.14em' }}>
              FOOD NOT INCLUDED · MEAL PACKAGES AVAILABLE THROUGH VOASIS
            </p>
          </div>

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
                22 hours of concentrated<br />hands-on training<br /><span style={{ color: 'rgba(170,182,162,0.5)' }}>in the country where it began.</span>
              </h2>
              <div className="border-l border-sand/15 pl-5">
                <p className="body-text text-sand/40" style={{ fontSize: '0.85rem', lineHeight: 1.85 }}>
                  This is a small-group intensive training programme. Not a retreat for rest. Not a yoga teacher training. Not a certification mill. A focused, in-person learning experience with CherieThai Institute, held in Thailand because there is nowhere better to learn this work.
                </p>
              </div>
            </motion.div>

            <motion.div {...reveal(0.1)} className="flex flex-col gap-7">
              {[
                'The 2027 Thailand Intensive is a 22-hour practical training programme held at VOASIS Valley, a private retreat venue set within the limestone mountains of Krabi, southern Thailand.',
                'All training is massage-table based, covering the core principles and technique of Thai bodywork adapted for clinical practice: body mechanics, pressure, passive mobility, stretching, sequencing and extended hands-on application.',
                'The format is deliberately compact: four teaching days, two of seven hours and two of four hours, with enough free time between them to rest, explore Krabi and absorb what you are learning.',
              ].map((para, i) => (
                <p key={i} className="body-text text-sand/50 leading-loose" style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1rem)' }}>
                  {para}
                </p>
              ))}

              <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-6" style={{ borderTop: '1px solid rgba(220,201,160,0.07)' }}>
                <div>
                  <p className="label-text text-sage/30 mb-3" style={{ fontSize: '0.42rem', letterSpacing: '0.22em' }}>INCLUDED</p>
                  {[
                    '22h hands-on training · massage table',
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
                  body: 'Check in at VOASIS, orientation to the space and training structure, then the first practical session of the retreat. The shorter day is intentional. Time to arrive properly before the work begins.',
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
                  body: 'Continued depth. Clinical sequencing, passive mobility, positioning and partner work, building on the previous day with greater complexity and refinement.',
                },
                {
                  day: '04',
                  hours: '4h',
                  title: 'Integration & Review',
                  body: 'Final practical session, integration of the full programme, review and assessment. The afternoon is free. Time to explore Krabi before departure. Certificate issued on completion.',
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

        {/* ── Teaching Faculty ── */}
        <div
          className="px-6 md:px-12 lg:px-16"
          style={{
            paddingTop: 'clamp(5rem, 12vw, 9rem)',
            paddingBottom: 'clamp(5rem, 12vw, 9rem)',
            borderTop: '1px solid rgba(220,201,160,0.07)',
          }}
        >
          <motion.p {...reveal()} className="label-text text-sage/30 mb-16" style={{ fontSize: '0.48rem', letterSpacing: '0.28em' }}>
            YOUR TEACHERS
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ borderTop: '1px solid rgba(220,201,160,0.07)' }}>

            {/* Cherie */}
            <motion.div
              {...reveal(0)}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
              style={{ borderBottom: '1px solid rgba(220,201,160,0.07)', borderRight: '0px' }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', minHeight: '280px' }}>
                <Image
                  src="/portrait-cherie-2.jpg"
                  alt="Cherie T. Charnkul"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 50%, rgba(13,17,14,0.3) 100%)' }} />
              </div>
              <div className="flex flex-col justify-end px-8 md:px-10 py-10 md:py-12" style={{ background: 'rgba(13,17,14,0.5)' }}>
                <p className="label-text text-sage/35 mb-4" style={{ fontSize: '0.44rem', letterSpacing: '0.28em' }}>FOUNDER · CHERIETHAI INSTITUTE</p>
                <h3 className="font-cormorant font-light text-ivory mb-6" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', lineHeight: 1.05 }}>
                  Cherie T. Charnkul
                </h3>
                <div className="space-y-4 body-text text-sand/45 leading-loose" style={{ fontSize: '0.875rem' }}>
                  <p>
                    Born in Phimai, Thailand and educated in the United Kingdom, Cherie established her professional practice in Brazil. Her understanding of Thai bodywork began within the culture from which the practice originates and has continued to develop through formal training, years of hands-on clinical practice, and ongoing study of anatomy, biomechanics and manual therapy.
                  </p>
                  <p>
                    Her work focuses on the intersection of traditional Thai technique and contemporary anatomical knowledge, examining classical positions through biomechanics, refining leverage and preserving the rhythm and physical intelligence of the original practice. She teaches practitioners internationally and is currently undertaking undergraduate studies in biomedical sciences.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Karl */}
            <motion.div
              {...reveal(0.1)}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
              style={{ borderLeft: '1px solid rgba(220,201,160,0.07)', borderBottom: '1px solid rgba(220,201,160,0.07)' }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', minHeight: '280px' }}>
                <Image
                  src="/portrait-karl-bio.jpg"
                  alt="Karl Georges"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 50%, rgba(13,17,14,0.3) 100%)' }} />
              </div>
              <div className="flex flex-col justify-end px-8 md:px-10 py-10 md:py-12" style={{ background: 'rgba(13,17,14,0.5)' }}>
                <p className="label-text text-sage/35 mb-4" style={{ fontSize: '0.44rem', letterSpacing: '0.28em' }}>CO-FOUNDER · TRADITIONAL THAI LINEAGE</p>
                <h3 className="font-cormorant font-light text-ivory mb-6" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', lineHeight: 1.05 }}>
                  Karl Georges
                </h3>
                <div className="space-y-4 body-text text-sand/45 leading-loose" style={{ fontSize: '0.875rem' }}>
                  <p>
                    Karl Georges is co-founder of CherieThai and one of the most deeply trained traditional Thai bodywork practitioners in Brazil. Based in Rio de Janeiro, his practice is rooted in the ancestral traditions of Thai work: floor-based, without oil, guided by the meridian lines of the body and a rhythmic intelligence that cannot be learned from a manual.
                  </p>
                  <p>
                    He carries lineage, not technique. His role within this training is to bring the traditional foundation of Thai bodywork into direct contact with the clinical approach, so students understand the roots of what they are learning.
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
