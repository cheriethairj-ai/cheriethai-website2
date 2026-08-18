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
          For a limited period, CherieThai will be available in London through
          a small number of private founder appointments.
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
            onClick={() => scrollTo('what-is-cheriethai')}
            className="btn-ghost text-sand/45 border-sand/15 justify-between sm:justify-start"
          >
            <span>About the work</span>
            <span aria-hidden>↓</span>
          </button>
        </motion.div>
      </motion.div>

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

// ─── Intro Bridge ──────────────────────────────────────────────────────────────

function IntroBridge() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="what-is-cheriethai"
      className="px-6 md:px-12 lg:px-16 py-20 md:py-28 border-b border-sand/8"
      style={{ background: '#111614' }}
    >
      <div className="max-w-2xl">
        <motion.p
          {...revealInView(0)}
          className="label-text text-sage/30 mb-8"
          style={{ fontSize: '0.52rem', letterSpacing: '0.28em' }}
        >
          A CONTEMPORARY EVOLUTION OF THAI BODYWORK
        </motion.p>

        <motion.div
          {...revealInView(0.08)}
          className="body-text text-sand/55 space-y-5 leading-loose"
          style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}
        >
          <p>
            CherieThai is an approach to therapeutic Thai bodywork developed through
            years of practice, study and teaching across Thailand, the United Kingdom
            and Brazil. Its foundation remains distinctly Thai, while the way the work
            is interpreted has evolved through anatomy, biomechanics, modern manual
            therapy and a detailed understanding of movement.
          </p>
          <p>
            A session can move between stillness and movement, advanced deep tissue work
            and assisted mobility, traditional Thai pressure and{' '}
            <strong className="text-sand/75 font-normal">complex assisted stretching
            designed to create highly specific muscular and joint emphasis</strong>.
            These positions allow individual structures and ranges of movement to be
            explored with a level of precision that is difficult to achieve through
            conventional stretching alone.
          </p>
          <p>
            Positions connect rather than functioning as isolated techniques, creating a
            treatment that can be highly technical while retaining the rhythm, physicality
            and continuity characteristic of Thai bodywork.
          </p>
          <p>
            There is no standard sequence. The treatment develops according to the
            individual body, what can be observed and felt through touch, and how that
            body responds as the session progresses.
          </p>
          <p>
            CherieThai can be particularly relevant for persistent muscular tension,
            restricted mobility, physical overload, recurring areas of stiffness and
            bodies that require more detailed work than conventional massage. It is equally
            used by people who value movement, mobility and technically sophisticated
            bodywork as part of how they maintain their bodies.
          </p>
        </motion.div>

        <motion.div {...revealInView(0.2)} className="mt-10">
          <button
            onClick={() => scrollTo('london-waitlist')}
            className="btn-ghost text-sand/60 border-sand/20 justify-between sm:justify-start"
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

// ─── Section Index ─────────────────────────────────────────────────────────────

const indexItems = [
  { label: 'The CherieThai approach', id: 'the-approach', num: '01' },
  { label: 'More than the site of discomfort', id: 'more-than-the-site', num: '02' },
  { label: 'Within the details', id: 'within-the-details', num: '03' },
  { label: 'Movement as part of the treatment', id: 'movement', num: '04' },
  { label: 'Depth without aggression', id: 'depth-without-aggression', num: '05' },
  { label: 'Who comes to CherieThai?', id: 'who-comes', num: '06' },
  { label: 'A CherieThai session', id: 'a-session', num: '07' },
  { label: 'About Chérie', id: 'about-cherie', num: '08' },
  { label: 'CherieThai in London', id: 'london-residency', num: '09' },
  { label: 'Priority waiting list', id: 'london-waitlist', num: '10' },
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
              {...revealInView(i * 0.05)}
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
            09 · CHERIETHAI IN LONDON
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
              CherieThai will be available in London for an approximately three-week
              founder residency, with a limited number of private appointments.
            </p>
            <p>
              This first residency offers the opportunity to work directly with its
              founder as CherieThai begins establishing a presence in the UK.
              Availability will intentionally remain limited to preserve the length,
              detail and individual nature of each treatment.
            </p>
            <p>
              The London priority list will receive booking access before appointments
              are released publicly. Joining the list does not require payment or commit
              you to booking; it simply provides first access when the London diary opens.
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
          10 · PRIORITY WAITING LIST
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
        <IntroBridge />
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
                CherieThai sits between the traditional language of Thai bodywork and
                a contemporary understanding of the body.
              </p>
              <p>
                Traditional Thai techniques remain an important foundation: pressure,
                compression, assisted stretching, rhythmic movement and the use of the
                practitioner's own body as part of the treatment. These are combined with
                advanced deep tissue work, joint mobilisation, therapeutic mobility and
                original movement sequences, many of which extend considerably beyond the
                stretches commonly associated with conventional Thai massage.
              </p>
              <p>
                Movement is central to the approach. Rather than repeatedly stopping and
                repositioning the body, one position can develop into another. A stretch
                may become a mobilisation; a mobilisation may create access to deeper
                tissue; pressure may be maintained while a joint moves through a range.
                The treatment develops continuously rather than as a collection of
                separate techniques.
              </p>
              <p>
                This creates an opportunity to understand the body through movement as
                well as touch. Range, resistance, tension, breathing and tissue response
                provide information throughout the session and influence what happens next.
              </p>
              <p>
                CherieThai is neither traditional Thai massage reproduced exactly as it
                has always been practised nor Western manual therapy presented under a
                Thai name. It has developed from the meeting point between traditional
                Thai practice, movement and contemporary anatomical understanding while
                maintaining a recognisably Thai foundation.
              </p>
            </>
          }
        />

        {/* 02 — More Than the Site of Discomfort */}
        <ProseSection
          id="more-than-the-site"
          num="02"
          title="More than the site of discomfort."
          body={
            <>
              <p>
                Pain and tension are important information, but they do not have to
                determine the boundaries of a treatment.
              </p>
              <p>
                The area being felt is considered alongside the way the body moves
                around it. Sometimes concentrated tissue work is appropriate. At other
                times, changing the position of a joint, introducing movement, following
                a traditional Thai line or moving into an assisted stretch can completely
                alter what becomes accessible.
              </p>
              <p>
                The Thai foundation creates an unusually broad vocabulary for doing this.
                The body can be supported, folded, lengthened, compressed and rotated,
                allowing the same region to be approached from different positions and
                directions. Hands, forearms, elbows, knees, feet and body weight can all
                become part of the work where appropriate, creating forms of leverage that
                are difficult to reproduce through conventional table massage alone.
              </p>
              <p>
                Rather than searching for one theoretical cause behind every area of
                discomfort, the approach creates multiple ways of exploring and working
                with what is present. The treatment can move from a very local area into
                a much larger movement and then return to that area from an entirely
                different position, direction or depth.
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
                The closer the work becomes, the more detail becomes available.
              </p>
              <p>
                A broad area of tension can contain much smaller variations in texture,
                density and resistance. Within muscle and connective tissue, narrow bands
                of tension, minute areas of density and subtle changes in tissue direction
                can often be distinguished through careful palpation. Instead of approaching
                an entire muscle or region as though every part of it were the same, the
                work can progressively become more specific.
              </p>
              <p>
                This is{' '}
                <strong className="text-sand/75 font-normal">detail within detail</strong>:
                moving from the whole body, to a region, to a layer of tissue, and then
                into the smaller variations that exist within it.
              </p>
              <p>
                At this scale, greater force is rarely the answer. Precision becomes more
                important. A small change in the direction of pressure, the angle of a
                joint, the position of the body or the placement of a hand can change what
                becomes accessible beneath it.
              </p>
              <p>
                The same principle exists within stretching. A stretch is not simply taken
                further. Small adjustments in rotation, support, leverage, breathing and
                direction can shift the emphasis considerably, revealing different sensations
                and ranges within what externally appears to be the same position.
              </p>
              <p>
                This creates one of the central contrasts within CherieThai:{' '}
                <strong className="text-sand/75 font-normal">minute attention to tissue
                alongside expansive movement of the whole body</strong>. A session can move
                from working within a very small area of density into a large assisted
                movement involving several regions, and then return to precise tissue work
                with new information.
              </p>
              <p>
                The details are not separate from the whole. They continually inform
                one another.
              </p>
            </>
          }
        />

        {/* 04 — Movement as Part of the Treatment */}
        <ProseSection
          id="movement"
          num="04"
          title="Movement as part of the treatment."
          body={
            <>
              <p>
                Movement in CherieThai is not something added at the end of a massage.
                It is one of the principal ways the work is delivered.
              </p>
              <p>
                The approach contains a broad vocabulary of assisted stretches, rotations,
                joint movements and transitions. Some originate directly from traditional
                Thai bodywork, while others have evolved into more complex forms of
                positioning designed to work with specific muscles, joints and ranges
                of movement.
              </p>
              <p>
                Rather than stretching an entire region as one unit, subtle changes in
                rotation, leverage, support and joint position can shift the emphasis
                considerably. A position may place greater emphasis on a particular
                muscular line, explore a specific joint movement or allow an area to be
                approached from an angle that conventional stretching rarely reaches.
              </p>
              <p>
                At times, these positions may look unfamiliar even to someone who regularly
                receives Thai massage. Their complexity is not used for spectacle. Each
                position has a mechanical purpose, and the body is not taken further simply
                for the sake of creating a deeper or more impressive stretch.
              </p>
              <p>
                Breathing also becomes part of these movements. A position can be held or
                subtly adjusted through several respiratory cycles, allowing movement through
                the ribs, trunk and surrounding structures to become part of how the stretch
                develops. At other times, larger movements can be used to encourage expansion
                through areas that have become rigid or guarded.
              </p>
              <p>
                The result is a treatment capable of moving between highly concentrated work
                on a very small area and large, three-dimensional movement involving several
                parts of the body simultaneously.
              </p>
              <p>
                It is this contrast between{' '}
                <strong className="text-sand/75 font-normal">precision and expansion</strong>{' '}
                that gives CherieThai much of its character.
              </p>
            </>
          }
        />

        {/* 05 — Depth Without Aggression */}
        <ProseSection
          id="depth-without-aggression"
          num="05"
          title="Depth without aggression."
          body={
            <>
              <p>
                Deep work does not require the practitioner to overpower the body.
              </p>
              <p>
                Traditional Thai bodywork already offers a sophisticated vocabulary of
                leverage, body weight, positioning and compression. CherieThai develops
                these principles further, using the practitioner's entire body to control
                direction and depth rather than relying predominantly on muscular force.
              </p>
              <p>
                Pressure can be substantial when appropriate, particularly when working
                with dense or heavily loaded tissue, but intensity alone is never the
                objective. The question is not simply how much pressure can be applied,
                but where it is directed, how the body is positioned to receive it and
                what happens in response.
              </p>
              <p>
                This allows the work to move between strength and subtlety. A session may
                contain powerful assisted movements and deep compression alongside extremely
                small, precise tissue work. Neither is considered inherently more effective
                than the other; the value lies in knowing when each is appropriate.
              </p>
            </>
          }
        />

        {/* 06 — Who Comes to CherieThai? */}
        <TextSection
          id="who-comes"
          num="06"
          title="Who comes to CherieThai?"
          imageSlot="PHOTO PLACEHOLDER — CLIENT / SETTING"
          body={
            <>
              <p>
                CherieThai works with very different bodies, and there does not need to
                be a specific injury or complaint to book a session.
              </p>
              <p>
                Some clients come with persistent muscular tension, recurring stiffness
                or restrictions they notice during training or everyday movement. Others
                place significant physical demands on their bodies through sport, strength
                training, dance or work. Some simply find conventional massage too general
                and are looking for a practitioner who works with greater specificity and
                a much broader vocabulary of movement.
              </p>
              <p>
                The approach can therefore sit somewhere between focused bodywork and
                physical maintenance. A session may concentrate heavily on a particular
                area or work more globally through mobility, tissue quality, breathing
                and movement.
              </p>
              <p>
                CherieThai does not replace medical assessment, physiotherapy or other
                healthcare when these are required and remains within the professional
                scope of bodywork.
              </p>
            </>
          }
        />

        {/* 07 — A CherieThai Session */}
        <TextSection
          id="a-session"
          num="07"
          title="A CherieThai session."
          imageSlot="PHOTO PLACEHOLDER — SESSION DETAIL"
          reverse
          body={
            <>
              <p>
                Every session begins with a conversation about what the client is
                experiencing, relevant history, physical activity and what they would
                like from the appointment. From there, movement is observed and the
                hands-on work begins.
              </p>
              <p>
                There is no routine that has to be completed. A session may involve
                lying, sitting, side-lying or moving through supported positions while
                the practitioner works with hands, forearms, elbows, knees, feet and
                body weight where appropriate. Traditional Thai pressure and compression
                can sit alongside oil-based tissue work, joint mobilisation, complex
                assisted stretching and original movement sequences.
              </p>
              <p>
                The treatment changes as information emerges. An area that initially
                appears to require deep pressure may respond differently once movement
                or breathing is introduced. A stretch may reveal a smaller restriction
                that then receives detailed tissue work before the body returns to movement.
              </p>
              <p>
                Observation, touch, movement and response continually influence one another
                throughout the session. This is what allows each appointment to remain
                individual rather than becoming a sequence that is reproduced from one
                body to the next.
              </p>
            </>
          }
        />

        {/* 08 — About Chérie */}
        <TextSection
          id="about-cherie"
          num="08"
          title="About Chérie."
          imageSlot="PHOTO PLACEHOLDER — PORTRAIT CHÉRIE"
          body={
            <>
              <p>
                Chérie is the founder of CherieThai and the practitioner and international
                educator responsible for developing the approach.
              </p>
              <p>
                Born in Thailand and educated in the United Kingdom, she later established
                her professional practice in Brazil. Her understanding of Thai bodywork
                began within the culture from which the practice originates and has
                continued to develop through formal training, years of hands-on practice
                and ongoing study of anatomy, biomechanics, movement and manual therapy.
              </p>
              <p>
                Rather than moving away from traditional Thai practice as her anatomical
                knowledge developed, her work became increasingly focused on examining the
                two together: understanding traditional positions through biomechanics,
                exploring how small changes in leverage alter a technique, and using
                contemporary anatomical knowledge without removing the rhythm, creativity
                and physical intelligence of Thai bodywork.
              </p>
              <p>
                Alongside her practice, she teaches practitioners internationally, with
                education focused on technique, practitioner biomechanics, therapeutic
                reasoning, movement, transitions and the ability to adapt bodywork rather
                than reproduce fixed sequences.
              </p>
              <p>
                She is currently undertaking{' '}
                <strong className="text-sand/75 font-normal">undergraduate studies in
                biomedical sciences</strong>, continuing a scientific education that
                increasingly informs the development and understanding of the work.
              </p>
            </>
          }
        />

        {/* 09 — CherieThai in London */}
        <ResidencySection />

        {/* 10 — Priority Waiting List */}
        <WaitlistForm />

        <LondonFooter />
      </main>
    </>
  )
}
