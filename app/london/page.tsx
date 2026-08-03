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
        background: scrolled
          ? 'rgba(26,31,27,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(220,201,160,0.06)' : '1px solid transparent',
      }}
    >
      {/* Logo / wordmark */}
      <Link
        href="/"
        className="label-text text-sand/70 hover:text-sand transition-colors duration-300"
        style={{ fontSize: '0.6rem', letterSpacing: '0.25em' }}
      >
        CHERIETHAI
      </Link>

      {/* Right — waitlist button */}
      <button
        onClick={() => scrollTo('london-waitlist')}
        className="label-text text-sand/50 hover:text-sand/90 transition-colors duration-300 border border-sand/20 hover:border-sand/40 px-4 py-2"
        style={{ fontSize: '0.55rem', letterSpacing: '0.22em' }}
      >
        JOIN THE WAITLIST
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
      {/* Background — London chapter hero photo */}
      <div className="absolute inset-0" style={{ backgroundColor: '#1A1F1B' }}>
        <Image
          src="/london-hero-2.jpg"
          alt="CherieThai London — clinical Thai bodywork"
          fill
          priority
          quality={92}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
        />
      </div>

      {/* Atmospheric overlay */}
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

      {/* Left vignette */}
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
        CHERIETHAI · LONDON CHAPTER
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
            A new chapter
          </motion.span>
          <motion.span className="block" {...fadeUp(0.9)}>
            takes shape in London.
          </motion.span>
        </motion.h1>

        <motion.p
          {...fadeUp(1.15)}
          className="body-text text-sand/65 max-w-sm md:max-w-md mb-8 md:mb-10"
          style={{ fontSize: 'clamp(0.85rem, 1.6vw, 0.975rem)' }}
        >
          Rooted in Thai heritage and shaped by an enduring interest in movement,
          structure and form, CherieThai has evolved through years of clinical
          practice into an internationally taught approach to bodywork.
          The next chapter now takes shape in London.
        </motion.p>

        <motion.div
          {...fadeUp(1.35)}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <button
            onClick={() => scrollTo('london-waitlist')}
            className="btn-ghost text-ivory border-ivory/20 justify-between sm:justify-start"
          >
            <span>Join the London Waitlist</span>
            <span aria-hidden>→</span>
          </button>
          <Link
            href="/"
            className="btn-ghost text-sand/45 border-sand/15 justify-between sm:justify-start"
          >
            <span>Understand the work</span>
            <span aria-hidden>↗</span>
          </Link>
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
  { label: 'What is CherieThai?', id: 'what-is-cheriethai', num: '01' },
  { label: 'Within the details', id: 'within-the-details', num: '02' },
  { label: 'The CherieThai approach', id: 'the-approach', num: '03' },
  { label: 'London waitlist', id: 'london-waitlist', num: '04' },
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
              {...revealInView(i * 0.08)}
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

// ─── Text Section (reusable) ────────────────────────────────────────────────────

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
  imageSlot?: string // placeholder label text
  reverse?: boolean
}) {
  return (
    <section
      id={id}
      className="px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32 border-b border-sand/8"
      style={{ background: '#111614' }}
    >
      <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 lg:gap-28 items-start ${reverse ? 'md:[&>*:first-child]:order-last' : ''}`}>

        {/* Text column */}
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

        {/* Image column */}
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

// ─── London Positioning ────────────────────────────────────────────────────────

function LondonPositioning() {
  return (
    <section
      className="relative overflow-hidden noise-overlay"
      style={{ background: '#0D110E' }}
    >
      {/* Atmospheric gradient */}
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

        {/* Pull headline */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <motion.p
            {...revealInView(0)}
            className="label-text text-sage/30 mb-10"
            style={{ fontSize: '0.52rem', letterSpacing: '0.28em' }}
          >
            LONDON · EAST LONDON CHAPTER
          </motion.p>

          <motion.h2
            {...revealInView(0.06)}
            className="display-hero text-ivory/90 mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 0.96 }}
          >
            Building presence<br />
            <em className="font-light not-italic text-sand/60">before</em> opening.
          </motion.h2>

          <motion.div
            {...revealInView(0.14)}
            className="body-text text-sand/50 max-w-lg space-y-5 leading-loose"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)' }}
          >
            <p>
              CherieThai London is currently in development.
            </p>
            <p>
              Before establishing a permanent presence, our focus is on introducing the
              philosophy, technique and visual language of the work to the city while
              building awareness and understanding around the future London chapter.
            </p>
            <p>
              The London waitlist allows us to understand where interest is forming and
              offers early access to future appointments, private residencies, collaborations
              and announcements as the project develops.
            </p>
          </motion.div>
        </div>

        {/* Location details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 border-t border-sand/8 pt-14 md:pt-20">
          {[
            {
              label: 'NEIGHBOURHOOD',
              value: 'Spitalfields',
              detail: 'Shoreditch · Hoxton · Bethnal Green',
            },
            {
              label: 'FOCUS',
              value: 'Private sessions',
              detail: 'Professional training · Residency & event collaboration',
            },
            {
              label: 'OPENING',
              value: 'By invitation',
              detail: 'Waitlist members receive priority access',
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

        {/* Wide image placeholder */}
        <motion.div
          {...revealInView(0.1)}
          className="mt-20 md:mt-24 w-full"
          style={{ aspectRatio: '21/9' }}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: 'rgba(61,74,64,0.08)',
              border: '1px solid rgba(220,201,160,0.05)',
            }}
          >
            <p
              className="label-text text-sage/12 text-center"
              style={{ fontSize: '0.5rem', letterSpacing: '0.25em' }}
            >
              PHOTO PLACEHOLDER — SPITALFIELDS / SHOREDITCH
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Waitlist Form ─────────────────────────────────────────────────────────────

const interestOptions = [
  'Future appointments',
  'Private residency or event',
  'Partnership enquiry',
  'Collaborations',
  'Following the London journey',
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

    // Basic validation
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
      // Netlify Forms / Formspree / or replace with your own endpoint
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

        {/* Header */}
        <motion.p
          {...revealInView(0)}
          className="label-text text-sage/30 mb-8"
          style={{ fontSize: '0.52rem', letterSpacing: '0.28em' }}
        >
          04 · LONDON WAITLIST
        </motion.p>

        <motion.h2
          {...revealInView(0.06)}
          className="display-section text-ivory mb-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
        >
          Join the London waitlist.
        </motion.h2>

        <motion.p
          {...revealInView(0.12)}
          className="body-text text-sand/45 mb-14"
          style={{ fontSize: 'clamp(0.875rem, 1.5vw, 0.95rem)', maxWidth: '38rem' }}
        >
          Follow the development of CherieThai London and receive early access to
          future appointments, private residencies, collaborations and future announcements.
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
                You are on the list.
              </p>
              <p className="body-text text-sand/45 text-sm">
                We will be in touch personally when CherieThai London is ready
                to receive you.
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
                    {formState === 'submitting' ? 'Sending…' : 'Join the waitlist'}
                  </span>
                  <span aria-hidden>→</span>
                </button>
                <p
                  className="body-text text-sage/25 mt-6 leading-relaxed"
                  style={{ fontSize: '0.75rem', maxWidth: '36rem' }}
                >
                  Joining the waitlist does not create a booking or financial commitment.
                  Details regarding locations, availability and pricing will be shared
                  once confirmed.
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

          {/* Left */}
          <div>
            <p className="font-cormorant font-light text-ivory/40 mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
              CherieThai
            </p>
            <p className="label-text text-sage/25" style={{ fontSize: '0.5rem', letterSpacing: '0.22em' }}>
              SÃO PAULO · RIO DE JANEIRO · LONDON (COMING SOON)
            </p>
          </div>

          {/* Right */}
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

        {/* A New Chapter — intro bridge */}
        <section
          className="px-6 md:px-12 lg:px-16 py-20 md:py-28 border-b border-sand/8"
          style={{ background: '#111614' }}
        >
          <div className="max-w-2xl">
            <motion.p
              {...revealInView(0)}
              className="label-text text-sage/30 mb-8"
              style={{ fontSize: '0.52rem', letterSpacing: '0.28em' }}
            >
              A NEW CHAPTER
            </motion.p>
            <motion.div
              {...revealInView(0.08)}
              className="body-text text-sand/55 space-y-5 leading-loose"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}
            >
              <p>
                Rooted in Thai heritage and shaped through years of clinical practice, CherieThai
                has developed into an internationally taught approach to bodywork defined by
                structural precision, continuity and attention to detail.
              </p>
              <p>
                Established across two clinics and shaped through international education,
                the next chapter now looks towards London.
              </p>
              <p>
                For now, our focus is on building awareness ahead of opening, introducing the
                philosophy and approach behind the work while developing relationships within
                the city we hope to serve in the years ahead.
              </p>
              <p>
                Joining the waitlist offers an opportunity to follow the journey from the
                beginning and receive early access to appointments, private residencies,
                collaborations and future developments as they unfold.
              </p>
            </motion.div>
          </div>
        </section>

        <TextSection
          id="what-is-cheriethai"
          num="01"
          title="What is CherieThai?"
          imageSlot="PHOTO PLACEHOLDER — SESSION / BODYWORK DETAIL"
          body={
            <>
              <p>
                Rooted in Thai heritage and shaped through years of clinical practice, CherieThai
                exists at the intersection of bodywork, structural precision and movement.
              </p>
              <p>
                The experience is often sought by those looking not simply for relaxation,
                but for decompression and a different relationship with their body itself.
              </p>
              <p>
                For many, it is not the techniques that remain memorable, but the feeling they
                create: a sense of space where there was previously compression, a sense of
                fluidity where there was resistance, and a sense of possibility where the body
                had gradually become smaller, more guarded or more predictable.
              </p>
              <p>
                Relaxation is often a consequence.
              </p>
              <p>
                The focus is understanding how the body compensates, where protection is held,
                how patterns have adapted over time and how breathing strategies influence the
                body as a whole.
              </p>
              <p>
                Only then does the work begin.
              </p>
            </>
          }
        />

        <TextSection
          id="within-the-details"
          num="02"
          title="Within the details."
          imageSlot="PHOTO PLACEHOLDER — HANDS / PRECISION DETAIL"
          reverse
          body={
            <>
              <p>
                CherieThai was built on the understanding that within the body,
                details exist within details.
              </p>
              <p>
                The work is based on the belief that seemingly insignificant differences
                in angle, timing, direction, rhythm and sequencing can create profoundly
                different experiences within the body.
              </p>
              <p>
                Over time, this attention to detail has developed into an approach that
                places equal importance not only on individual techniques, but on the
                transitions between them. The body rarely experiences movement as isolated
                events. It experiences continuity.
              </p>
              <p>
                For this reason, techniques are connected through uninterrupted flow,
                allowing pressure, mobility, rhythm and movement to blend into what many
                describe as a continuous conversation rather than a series of separate
                interventions.
              </p>
              <p>
                The work is supported by established routines and treatment frameworks that
                serve as foundations rather than limitations. Movement correction, mobility
                work and manual techniques are continually adjusted in response to what
                the body presents in real time.
              </p>
              <p>
                Particular attention is given to compensation strategies, protective
                patterns, breathing behaviours and the way different regions of the body
                influence one another mechanically.
              </p>
              <p>
                Some positions remain familiar. Others introduce sensations, relationships
                and possibilities that the body may not have experienced for many years,
                not because they are extraordinary, but because they have gradually become
                inaccessible through years of adaptation, protection or reduced variability.
              </p>
              <p>
                Much of the work takes place at a level that is almost imperceptible to
                the observer. Small changes in hand position, rotational angle, pressure
                distribution, timing or direction can significantly alter how sensation is
                received and how the body chooses to organise itself in response.
              </p>
              <p>
                The intention is not complexity for its own sake.
              </p>
              <p>
                It is simply where the work lives.
              </p>
            </>
          }
        />

        <TextSection
          id="the-approach"
          num="03"
          title="The CherieThai approach."
          imageSlot="PHOTO PLACEHOLDER — PORTRAIT / CHERIE OR STUDIO"
          body={
            <>
              <p>
                Influenced by the relationship between movement, structure and form, the work
                combines technical precision with a refined understanding of how the body
                organises itself through space.
              </p>
              <p>
                Each session is built upon established movement sequences and therapeutic
                frameworks which provide structure, continuity and a recognisable language
                within the work, while allowing pressure, pace, mobility, range and direction
                to evolve continuously throughout the treatment.
              </p>
              <p>
                Transitions are given the same importance as the techniques themselves. The
                objective is to create a sense of uninterrupted flow, where one movement
                develops naturally into the next and the body is not repeatedly taken in and
                out of the experience.
              </p>
              <p>
                Some movements may feel familiar. Others introduce positions, sensations and
                relationships that the body may not have experienced for many years. Often,
                the significance lies not in the movement itself, but in what that movement
                allows the individual to feel.
              </p>
            </>
          }
        />

        <LondonPositioning />
        <WaitlistForm />
        <LondonFooter />
      </main>
    </>
  )
}
