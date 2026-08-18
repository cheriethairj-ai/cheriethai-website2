'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import CustomCursor from '@/components/CustomCursor'

// ─── Constants ─────────────────────────────────────────────────────────────────

const ease = [0.25, 0.1, 0.25, 1.0] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.0, delay, ease },
})

const revealInView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease },
})

// ─── London Nav ────────────────────────────────────────────────────────────────

function LondonNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      {...fadeIn(0.3)}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(26,31,27,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(220,201,160,0.06)' : '1px solid transparent',
      }}
    >
      <Link
        href="/"
        className="label-text text-sand/70 hover:text-sand transition-colors duration-300"
        style={{ fontSize: '0.6rem', letterSpacing: '0.25em' }}
      >
        CHERIETHAI
      </Link>

      <button
        onClick={() => scrollTo('london-waitlist')}
        className="label-text text-sand/50 hover:text-sand/90 transition-colors duration-300 border border-sand/20 hover:border-sand/40 px-4 py-2"
        style={{ fontSize: '0.55rem', letterSpacing: '0.22em' }}
      >
        PRIORITY LIST
      </button>
    </motion.header>
  )
}

// ─── Hero ──────────────────────────────────────────────────────────────────────

function LondonHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id="london-hero"
      className="relative flex items-end overflow-hidden noise-overlay"
      style={{ minHeight: '100svh' }}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundColor: '#1A1F1B' }}>
        <Image
          src="/london-hero-2.jpg"
          alt="CherieThai London — Thai bodywork"
          fill
          priority
          quality={92}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom,
              rgba(26,31,27,0.60) 0%,
              rgba(26,31,27,0.10) 35%,
              rgba(26,31,27,0.55) 65%,
              rgba(26,31,27,0.88) 100%
            )
          `,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(26,31,27,0.65) 0%, transparent 70%)' }}
      />

      {/* Superlabel */}
      <motion.p
        {...fadeUp(0.5)}
        className="absolute z-10 label-text text-sage/50"
        style={{
          top: 'clamp(5rem, 10vh, 7rem)',
          left: 'clamp(1.5rem, 4vw, 4rem)',
          fontSize: '0.55rem',
          letterSpacing: '0.28em',
        }}
      >
        CHERIETHAI · LONDON FOUNDER RESIDENCY
      </motion.p>

      {/* Text content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-12 md:pb-16 lg:pb-20"
      >
        <motion.h1
          className="display-hero text-ivory mb-8"
          style={{ fontSize: 'clamp(3.2rem, 9vw, 8.5rem)' }}
        >
          <motion.span className="block" {...fadeUp(0.7)}>
            CherieThai
          </motion.span>
          <motion.span className="block" {...fadeUp(0.9)}>
            comes to London.
          </motion.span>
        </motion.h1>

        <motion.p
          {...fadeUp(1.15)}
          className="body-text text-sand/65 max-w-sm md:max-w-md mb-8 md:mb-10"
          style={{ fontSize: 'clamp(0.85rem, 1.6vw, 0.975rem)' }}
        >
          Chérie will be bringing CherieThai to London for a limited residency,
          with a small number of private appointments available during her stay.
        </motion.p>

        <motion.div
          {...fadeUp(1.35)}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <button
            onClick={() => scrollTo('london-waitlist')}
            className="btn-ghost text-ivory border-ivory/20 justify-between sm:justify-start"
          >
            <span>Join the Priority List</span>
            <span aria-hidden>→</span>
          </button>
          <button
            onClick={() => scrollTo('the-approach')}
            className="btn-ghost text-sand/45 border-sand/15 justify-between sm:justify-start"
          >
            <span>About the work</span>
            <span aria-hidden>↓</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(1.6)}
        className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <div className="relative w-px h-14 bg-sand/15 overflow-hidden">
          <motion.div
            className="absolute inset-x-0 top-0 bg-sand/60"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2.0, repeat: Infinity, ease: 'linear' }}
            style={{ height: '50%' }}
          />
        </div>
      </motion.div>
    </section>
  )
}

// ─── Section Index ─────────────────────────────────────────────────────────────

const indexItems = [
  { label: 'The CherieThai approach', id: 'the-approach', num: '01' },
  { label: 'Looking beyond the area', id: 'beyond-the-area', num: '02' },
  { label: 'Within the details', id: 'within-the-details', num: '03' },
  { label: 'Who comes to CherieThai?', id: 'who-comes', num: '04' },
  { label: 'A session with Chérie', id: 'a-session', num: '05' },
  { label: 'About Chérie', id: 'about-cherie', num: '06' },
  { label: 'CherieThai in London', id: 'london-residency', num: '07' },
  { label: 'Priority waiting list', id: 'london-waitlist', num: '08' },
]

function SectionIndex() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="px-6 md:px-12 lg:px-16 py-16 md:py-20 border-b border-sand/8" style={{ background: '#111614' }}>
      <div className="max-w-5xl">
        <motion.p
          {...revealInView(0)}
          className="label-text text-sage/35 mb-10 md:mb-12"
          style={{ fontSize: '0.55rem', letterSpacing: '0.28em' }}
        >
          IN THIS PAGE
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {indexItems.map((item, i) => (
            <motion.button
              key={item.id}
              {...revealInView(i * 0.06)}
              onClick={() => scrollTo(item.id)}
              className="group flex items-start gap-6 py-5 md:py-6 border-b border-sand/8 text-left hover:bg-sand/[0.02] transition-colors duration-300 px-0 md:pr-8"
              style={{ cursor: 'none' }}
            >
              <span
                className="label-text text-sage/25 group-hover:text-sage/45 transition-colors duration-300 mt-0.5 shrink-0"
                style={{ fontSize: '0.5rem', letterSpacing: '0.2em' }}
              >
                {item.num}
              </span>
              <span
                className="font-cormorant font-light text-ivory/60 group-hover:text-ivory/90 transition-colors duration-300 leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
              >
                {item.label}
              </span>
              <span className="ml-auto text-sage/20 group-hover:text-sage/50 transition-all duration-300 group-hover:translate-x-1 mt-0.5 shrink-0" aria-hidden>
                →
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Text Section (two-column with image placeholder) ─────────────────────────

function TextSection({
  id,
  num,
  title,
  body,
  imageSlot,
  reverse = false,
}: {
  id: string
  num: string
  title: string
  body: React.ReactNode
  imageSlot?: string
  reverse?: boolean
}) {
  return (
    <section
      id={id}
      className="px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32 border-b border-sand/8"
      style={{ background: '#111614' }}
    >
      <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 lg:gap-28 items-start ${reverse ? 'md:[&>*:first-child]:order-last' : ''}`}>

        <div>
          <motion.p
            {...revealInView(0)}
            className="label-text text-sage/30 mb-8"
            style={{ fontSize: '0.52rem', letterSpacing: '0.28em' }}
          >
            {num}&nbsp;&nbsp;·&nbsp;&nbsp;{title.toUpperCase()}
          </motion.p>

          <motion.h2
            {...revealInView(0.08)}
            className="display-section text-ivory mb-8"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
          >
            {title}
          </motion.h2>

          <motion.div
            {...revealInView(0.16)}
            className="body-text text-sand/55 space-y-5 leading-loose"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)' }}
          >
            {body}
          </motion.div>
        </div>

        {imageSlot && (
          <motion.div
            {...revealInView(0.12)}
            className="relative w-full"
            style={{ aspectRatio: '3/4' }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: 'rgba(61,74,64,0.12)',
                border: '1px solid rgba(220,201,160,0.06)',
              }}
            >
              <p
                className="label-text text-sage/15 text-center"
                style={{ fontSize: '0.5rem', letterSpacing: '0.25em', maxWidth: '80%' }}
              >
                {imageSlot}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// ─── Prose Section (single-column, editorial) ──────────────────────────────────

function ProseSection({
  id,
  num,
  title,
  body,
}: {
  id: string
  num: string
  title: string
  body: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="px-6 md:px-12 lg:px-16 py-20 md:py-28 border-b border-sand/8"
      style={{ background: '#111614' }}
    >
      <div className="max-w-2xl">
        <motion.p
          {...revealInView(0)}
          className="label-text text-sage/30 mb-8"
          style={{ fontSize: '0.52rem', letterSpacing: '0.28em' }}
        >
          {num}&nbsp;&nbsp;·&nbsp;&nbsp;{title.toUpperCase()}
        </motion.p>

        <motion.h2
          {...revealInView(0.08)}
          className="display-section text-ivory mb-8"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
        >
          {title}
        </motion.h2>

        <motion.div
          {...revealInView(0.16)}
          className="body-text text-sand/55 space-y-5 leading-loose"
          style={{ fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)' }}
        >
          {body}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Residency Section ─────────────────────────────────────────────────────────

function ResidencySection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="london-residency"
      className="relative overflow-hidden noise-overlay"
      style={{ background: '#0D110E' }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(75,90,79,0.18) 0%, transparent 60%),
            radial-gradient(ellipse at 85% 30%, rgba(61,74,64,0.12) 0%, transparent 55%)
          `,
        }}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40">

        <div className="max-w-4xl mb-20 md:mb-28">
          <motion.p
            {...revealInView(0)}
            className="label-text text-sage/30 mb-10"
            style={{ fontSize: '0.52rem', letterSpacing: '0.28em' }}
          >
            07 · CHERIETHAI IN LONDON
          </motion.p>

          <motion.h2
            {...revealInView(0.06)}
            className="display-hero text-ivory/90 mb-10"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 0.96 }}
          >
            A limited time<br />
            <em className="font-light not-italic text-sand/60">in</em> London.
          </motion.h2>

          <motion.div
            {...revealInView(0.14)}
            className="body-text text-sand/50 max-w-lg space-y-5 leading-loose"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)' }}
          >
            <p>
              Chérie will be in London for approximately three weeks and will accept a
              limited number of private clients during this period.
            </p>
            <p>
              This first London residency is an opportunity to work directly with the
              founder of CherieThai before the brand develops a permanent presence in
              the city. Availability will intentionally remain limited so that Chérie
              can maintain the length and individual nature of each appointment.
            </p>
            <p>
              People on the London priority list will receive the dates and booking
              access first. Any remaining appointments will then be released publicly.
            </p>
          </motion.div>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 border-t border-sand/8 pt-14 md:pt-20">
          {[
            {
              label: 'APPOINTMENT LENGTH',
              value: '100 minutes',
              detail: 'One session per visit recommended',
            },
            {
              label: 'RATE',
              value: '£250',
              detail: 'Payment confirmed at booking',
            },
            {
              label: 'AVAILABILITY',
              value: 'Priority list first',
              detail: 'Remaining appointments released publicly',
            },
          ].map((item, i) => (
            <motion.div key={item.label} {...revealInView(i * 0.1)}>
              <p
                className="label-text text-sage/30 mb-3"
                style={{ fontSize: '0.5rem', letterSpacing: '0.25em' }}
              >
                {item.label}
              </p>
              <p
                className="font-cormorant font-light text-ivory/75 mb-2"
                style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}
              >
                {item.value}
              </p>
              <p
                className="body-text text-sage/40"
                style={{ fontSize: '0.8rem' }}
              >
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...revealInView(0.2)} className="mt-16 md:mt-20">
          <button
            onClick={() => scrollTo('london-waitlist')}
            className="btn-ghost text-ivory/70 border-ivory/15 justify-between sm:justify-start"
            style={{ cursor: 'none' }}
          >
            <span>Join the London priority list</span>
            <span aria-hidden>→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Waitlist Form ─────────────────────────────────────────────────────────────

const interestOptions = [
  'Private appointment',
  'Corporate or private event',
  'Partnership or collaboration',
  'Press enquiry',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

function WaitlistForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [interest, setInterest] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const newErrors: Record<string, string> = {}
    if (!data.get('firstName')) newErrors.firstName = 'Required'
    if (!data.get('lastName')) newErrors.lastName = 'Required'
    if (!data.get('email')) newErrors.email = 'Required'
    if (!data.get('area')) newErrors.area = 'Required'
    if (!interest) newErrors.interest = 'Please select one'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setFormState('submitting')

    try {
      const res = await fetch('/api/london-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.get('firstName'),
          lastName: data.get('lastName'),
          email: data.get('email'),
          area: data.get('area'),
          interest,
          message: data.get('message'),
        }),
      })
      if (res.ok) {
        setFormState('success')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <section
      id="london-waitlist"
      className="px-6 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40"
      style={{ background: '#111614' }}
    >
      <div className="max-w-2xl">

        <motion.p
          {...revealInView(0)}
          className="label-text text-sage/30 mb-8"
          style={{ fontSize: '0.52rem', letterSpacing: '0.28em' }}
        >
          08 · PRIORITY WAITING LIST
        </motion.p>

        <motion.h2
          {...revealInView(0.06)}
          className="display-section text-ivory mb-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
        >
          Join the London priority list.
        </motion.h2>

        <motion.p
          {...revealInView(0.12)}
          className="body-text text-sand/45 mb-14"
          style={{ fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)', maxWidth: '38rem' }}
        >
          Joining the priority list does not require payment or commit you to an
          appointment. It gives you first access to the London diary when booking opens.
        </motion.p>

        <AnimatePresence mode="wait">
          {formState === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="py-16 border-t border-sand/10"
            >
              <p
                className="font-cormorant font-light text-ivory/80 mb-4"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
              >
                You are on the priority list.
              </p>
              <p className="body-text text-sand/45 text-sm">
                We will be in touch personally to confirm availability and
                session details before the residency opens.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease }}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-0"
            >
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-sand/10 py-6">
                <div>
                  <label className="block label-text text-sage/35 mb-3" style={{ fontSize: '0.5rem', letterSpacing: '0.22em' }}>
                    FIRST NAME
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    className="input-underline"
                    style={{ color: '#F5F0E8' }}
                    autoComplete="given-name"
                  />
                  {errors.firstName && (
                    <p className="label-text text-earth/70 mt-1" style={{ fontSize: '0.5rem', letterSpacing: '0.15em' }}>
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block label-text text-sage/35 mb-3" style={{ fontSize: '0.5rem', letterSpacing: '0.22em' }}>
                    LAST NAME
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    className="input-underline"
                    style={{ color: '#F5F0E8' }}
                    autoComplete="family-name"
                  />
                  {errors.lastName && (
                    <p className="label-text text-earth/70 mt-1" style={{ fontSize: '0.5rem', letterSpacing: '0.15em' }}>
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="border-t border-sand/10 py-6">
                <label className="block label-text text-sage/35 mb-3" style={{ fontSize: '0.5rem', letterSpacing: '0.22em' }}>
                  EMAIL
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="input-underline"
                  style={{ color: '#F5F0E8' }}
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="label-text text-earth/70 mt-1" style={{ fontSize: '0.5rem', letterSpacing: '0.15em' }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* London area */}
              <div className="border-t border-sand/10 py-6">
                <label className="block label-text text-sage/35 mb-3" style={{ fontSize: '0.5rem', letterSpacing: '0.22em' }}>
                  LONDON AREA / POSTCODE
                </label>
                <input
                  name="area"
                  type="text"
                  placeholder="e.g. Shoreditch, E1, Hackney"
                  className="input-underline"
                  style={{ color: '#F5F0E8' }}
                />
                {errors.area && (
                  <p className="label-text text-earth/70 mt-1" style={{ fontSize: '0.5rem', letterSpacing: '0.15em' }}>
                    {errors.area}
                  </p>
                )}
              </div>

              {/* Primary interest */}
              <div className="border-t border-sand/10 py-6">
                <label className="block label-text text-sage/35 mb-5" style={{ fontSize: '0.5rem', letterSpacing: '0.22em' }}>
                  PRIMARY INTEREST
                </label>
                <div className="flex flex-wrap gap-3">
                  {interestOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setInterest(opt)}
                      className="label-text transition-all duration-300 px-4 py-2.5 border"
                      style={{
                        fontSize: '0.52rem',
                        letterSpacing: '0.18em',
                        borderColor: interest === opt ? 'rgba(220,201,160,0.55)' : 'rgba(220,201,160,0.12)',
                        color: interest === opt ? 'rgba(245,240,232,0.85)' : 'rgba(245,240,232,0.3)',
                        background: interest === opt ? 'rgba(220,201,160,0.05)' : 'transparent',
                        cursor: 'none',
                      }}
                    >
                      {opt.toUpperCase()}
                    </button>
                  ))}
                </div>
                {errors.interest && (
                  <p className="label-text text-earth/70 mt-3" style={{ fontSize: '0.5rem', letterSpacing: '0.15em' }}>
                    {errors.interest}
                  </p>
                )}
              </div>

              {/* Optional message */}
              <div className="border-t border-sand/10 py-6">
                <label className="block label-text text-sage/35 mb-3" style={{ fontSize: '0.5rem', letterSpacing: '0.22em' }}>
                  OPTIONAL MESSAGE
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder=""
                  className="input-underline resize-none"
                  style={{
                    color: '#F5F0E8',
                    borderBottom: '1px solid rgba(107,92,78,0.25)',
                    width: '100%',
                    lineHeight: '1.7',
                  }}
                />
              </div>

              {/* Submit */}
              <div className="border-t border-sand/10 pt-8 pb-2">
                {formState === 'error' && (
                  <p className="label-text text-earth/70 mb-4" style={{ fontSize: '0.52rem', letterSpacing: '0.15em' }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="btn-ghost text-sand/70 border-sand/25 justify-between w-full sm:w-auto sm:min-w-[260px]"
                >
                  <span>
                    {formState === 'submitting' ? 'Sending…' : 'Join the priority list'}
                  </span>
                  <span aria-hidden>→</span>
                </button>
                <p
                  className="body-text text-sage/25 mt-6 leading-relaxed"
                  style={{ fontSize: '0.75rem', maxWidth: '36rem' }}
                >
                  Joining the priority list does not require payment or commit you to
                  an appointment. Session availability and location details will be
                  shared directly with priority list members.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// ─── London Footer ─────────────────────────────────────────────────────────────

function LondonFooter() {
  return (
    <footer style={{ background: '#0D110E', borderTop: '1px solid rgba(220,201,160,0.06)' }}>
      <div className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">

          <div>
            <p className="font-cormorant font-light text-ivory/40 mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              CherieThai
            </p>
            <p className="label-text text-sage/25" style={{ fontSize: '0.5rem', letterSpacing: '0.22em' }}>
              SÃO PAULO · RIO DE JANEIRO · LONDON
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <a
              href="https://instagram.com/cheriethai"
              target="_blank"
              rel="noopener noreferrer"
              className="label-text text-sage/30 hover:text-sage/60 transition-colors duration-300 link-underline"
              style={{ fontSize: '0.52rem', letterSpacing: '0.22em' }}
            >
              @CHERIETHAI
            </a>
            <a
              href="mailto:cherie@cheriethai.com"
              className="label-text text-sage/30 hover:text-sage/60 transition-colors duration-300 link-underline"
              style={{ fontSize: '0.52rem', letterSpacing: '0.22em' }}
            >
              CHERIE@CHERIETHAI.COM
            </a>
            <Link
              href="/"
              className="label-text text-sage/20 hover:text-sage/45 transition-colors duration-300"
              style={{ fontSize: '0.5rem', letterSpacing: '0.22em', marginTop: '0.5rem' }}
            >
              ← BACK TO CHERIETHAI.COM.BR
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-sand/5">
          <p className="label-text text-sage/15" style={{ fontSize: '0.48rem', letterSpacing: '0.2em' }}>
            © {new Date().getFullYear()} CHERIETHAI INSTITUTE · ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function LondonPage() {
  return (
    <>
      <CustomCursor />

      <main style={{ background: '#111614' }}>
        <LondonNav />
        <LondonHero />
        <SectionIndex />

        {/* 01 — The CherieThai Approach */}
        <TextSection
          id="the-approach"
          num="01"
          title="The CherieThai approach."
          imageSlot="PHOTO PLACEHOLDER — SESSION / BODYWORK DETAIL"
          body={
            <>
              <p>
                CherieThai is an approach to therapeutic Thai bodywork developed by Chérie
                through years of practice, study and teaching across Thailand, the United
                Kingdom and Brazil. Rooted in traditional Thai bodywork, it incorporates
                anatomy, biomechanics, modern manual therapy, tissue work, joint mobilisation
                and therapeutic movement to create treatments that are highly individual
                rather than based on a standard sequence.
              </p>
              <p>
                The work is designed for bodies that require more than a conventional massage.
                This may include persistent muscular tension, restricted mobility, physical
                overload from training or work, recurring areas of stiffness, or patterns
                that continue to return despite repeatedly working on the same area.
              </p>
              <p>
                A CherieThai session does not begin with a predetermined sequence of
                techniques. Chérie observes how the body moves, where mobility appears
                reduced, how tension is distributed and which areas may be contributing
                to the pattern being experienced. The treatment develops from what is
                found during the session.
              </p>
              <p>
                Relaxation is often part of the response to the work, but it is not
                necessarily the primary objective. The focus is on creating a treatment
                that makes sense for the individual body.
              </p>
            </>
          }
        />

        {/* 02 — Looking Beyond the Area of Tension */}
        <ProseSection
          id="beyond-the-area"
          num="02"
          title="Looking beyond the area of tension."
          body={
            <>
              <p>
                Where someone feels tension is important, but it is not the only
                information considered.
              </p>
              <p>
                A painful or restricted area does not necessarily exist in isolation.
                The way we move is influenced by multiple structures working together,
                and when one area becomes limited, other areas may begin contributing
                differently to maintain movement.
              </p>
              <p>
                A person experiencing persistent shoulder tension, for example, may
                also have restrictions through the thoracic spine, chest or neck that
                influence how the shoulder is moving. Hip restriction can change how
                load is distributed through the pelvis and lower body. Long periods of
                sitting, repetitive movement, training and previous injuries can all
                influence the strategies a body develops over time.
              </p>
              <p>
                This does not mean that every symptom has a hidden cause somewhere else.
                It means that the body is assessed more broadly before deciding where
                attention is most useful.
              </p>
              <p>
                During a session, Chérie may therefore work directly on the area that
                feels restricted while also addressing surrounding or related structures.
                The intention is not to chase individual points of tension, but to
                understand them within a larger mechanical picture.
              </p>
            </>
          }
        />

        {/* 03 — Within the Details */}
        <TextSection
          id="within-the-details"
          num="03"
          title="Within the details."
          imageSlot="PHOTO PLACEHOLDER — HANDS / PRECISION DETAIL"
          reverse
          body={
            <>
              <p>
                CherieThai is built around the idea that the quality of bodywork often
                lies in details that can easily be overlooked.
              </p>
              <p>
                The angle of pressure, direction of force, position of a joint, amount
                of leverage and the way the practitioner's own body weight is transferred
                can significantly change how a technique feels and how much force is
                required. Two techniques that appear almost identical can therefore
                produce very different results.
              </p>
              <p>
                The same attention is given to transitions. Rather than treating
                stretching, pressure, mobilisation and tissue work as separate events,
                they can be connected so that information gained from one part of the
                treatment influences what happens next.
              </p>
              <p>
                This is also why CherieThai does not rely on a catalogue of increasingly
                complicated techniques. Precision in a relatively simple movement can
                often be more valuable than complexity for its own sake.
              </p>
            </>
          }
        />

        {/* 04 — Depth Without Aggression */}
        <ProseSection
          id="depth-without-aggression"
          num="04"
          title="Depth without aggression."
          body={
            <>
              <p>
                Deep work is frequently associated with stronger pressure, but these
                are not necessarily the same thing.
              </p>
              <p>
                Working effectively with deeper or heavily loaded tissues requires
                appropriate positioning, patience and an understanding of how force
                is transferred through the practitioner's body. Increasing pressure
                without considering these factors can simply cause the body to resist.
              </p>
              <p>
                CherieThai uses leverage, body weight, movement and positioning to
                access tissue with greater control. Pressure may be substantial when
                appropriate, but it should have a reason.
              </p>
              <p>
                This principle is particularly important when working with people who
                train heavily or carry significant muscular tension. A strong body does
                not automatically require an aggressive treatment.
              </p>
            </>
          }
        />

        {/* 05 — Who Comes to CherieThai? */}
        <TextSection
          id="who-comes"
          num="05"
          title="Who comes to CherieThai?"
          imageSlot="PHOTO PLACEHOLDER — CLIENT / SETTING"
          body={
            <>
              <p>
                CherieThai works with a wide range of bodies. Some clients come because
                they experience persistent muscular tension or recurring stiffness. Others
                notice that their mobility has reduced, train frequently and feel physically
                overloaded, spend many hours sitting, or simply want bodywork that is more
                detailed and individualised than a conventional massage.
              </p>
              <p>
                Sessions may be particularly suited to people experiencing muscular
                rigidity, restricted movement, training-related tension, repetitive
                physical demands or areas that repeatedly feel overloaded.
              </p>
              <p>
                It is equally possible to come without a specific complaint. Some clients
                use the work as part of how they maintain mobility, understand their bodies
                and manage the physical demands of training, work and everyday life.
              </p>
              <p>
                CherieThai does not replace medical assessment, physiotherapy or other
                healthcare where these are required. When something falls outside the
                appropriate scope of bodywork, clients should be referred to the relevant
                healthcare professional.
              </p>
            </>
          }
        />

        {/* 06 — A Session with Chérie */}
        <TextSection
          id="a-session"
          num="06"
          title="A session with Chérie."
          imageSlot="PHOTO PLACEHOLDER — SESSION DETAIL"
          reverse
          body={
            <>
              <p>
                No two sessions need to look the same because the treatment is not
                organised around a fixed protocol.
              </p>
              <p>
                A session begins with a brief conversation about what the client is
                experiencing, relevant history and what they would like from the
                appointment. Chérie then uses observation, movement and hands-on
                assessment to decide how to approach the session.
              </p>
              <p>
                The work can combine traditional Thai pressure techniques, compression,
                deep tissue work, assisted stretching, joint mobilisation, therapeutic
                mobility and changes in positioning. Some techniques are static and
                precise; others use movement to work through a greater range. Pressure
                and depth are adjusted continuously according to the tissue, the area
                being worked on and the response of the individual.
              </p>
              <p>
                The intention is not to use as many techniques as possible. It is to
                choose and adapt them according to what is being found throughout
                the appointment.
              </p>
            </>
          }
        />

        {/* 07 — About Chérie */}
        <TextSection
          id="about-cherie"
          num="07"
          title="About Chérie."
          imageSlot="PHOTO PLACEHOLDER — PORTRAIT CHÉRIE"
          body={
            <>
              <p>
                Chérie is the founder of CherieThai and the practitioner and educator
                responsible for developing the approach.
              </p>
              <p>
                Born in Thailand and educated in the United Kingdom, she later established
                her professional practice in Brazil. Her background in traditional Thai
                bodywork has been developed alongside continued study of anatomy,
                biomechanics, movement and modern approaches to manual therapy.
              </p>
              <p>
                Years of treating different bodies have shaped the way CherieThai is
                practised today. Rather than separating traditional techniques from
                contemporary knowledge of the body, Chérie's work examines how they
                can inform one another while preserving the characteristics that make
                Thai bodywork distinct.
              </p>
              <p>
                Alongside her practice, Chérie teaches practitioners internationally.
                Her professional trainings focus not only on techniques but also on body
                mechanics, therapeutic reasoning, transitions, positioning and the
                practitioner's ability to adapt the work to different bodies.
              </p>
            </>
          }
        />

        {/* 08 — CherieThai in London */}
        <ResidencySection />

        {/* 09 — Priority Waiting List */}
        <WaitlistForm />

        <LondonFooter />
      </main>
    </>
  )
}
