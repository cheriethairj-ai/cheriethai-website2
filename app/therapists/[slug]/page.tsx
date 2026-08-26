'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import CustomCursor from '@/components/CustomCursor'
import LanguageToggle from '@/components/LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  foundersData,
  therapistsData,
  uiTranslations,
  whatsappUrl,
  FounderRow,
  type TherapistType,
  type UiStrings,
} from '@/components/sections/Therapists'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

// ─── Full-page layout for non-founder practitioners ───────────────────────────

function TherapistProfileLayout({
  therapist,
  ui,
  lang,
}: {
  therapist: TherapistType
  ui: UiStrings
  lang: 'PT' | 'EN'
}) {
  const [expanded, setExpanded] = useState(false)
  const wa = whatsappUrl(therapist.name, (therapist as any).whatsapp ?? undefined, lang)

  return (
    <div className="flex flex-col lg:flex-row min-h-[85svh]">

      {/* Portrait column */}
      <motion.div
        className="relative lg:w-[48%] h-[65svh] md:h-[55svh] lg:h-auto [overflow:clip]"
        initial={{ opacity: 0, x: -32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        {therapist.image && (
          <Image
            src={therapist.image}
            alt={therapist.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
            style={{ objectPosition: therapist.imagePosition ?? 'center top' }}
          />
        )}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(17,22,20,0.08) 0%, rgba(17,22,20,0.38) 100%)' }}
        />
      </motion.div>

      {/* Text column */}
      <div className="lg:w-[52%] flex items-start px-6 md:px-12 lg:px-14 xl:px-20 py-16 md:py-20 lg:py-28 bg-ivory overflow-y-auto">
        <div className="w-full max-w-lg">

          <motion.p {...inView()} className="label-text text-sage mb-3">
            {therapist.role}
          </motion.p>
          <motion.p {...inView(0.05)} className="label-text text-earth/60 mb-10 flex items-center gap-2">
            <span aria-hidden className="text-earth/40">◎</span>
            {therapist.location}
          </motion.p>

          <motion.h1
            className="font-cormorant font-light text-deep-moss mb-8"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1.05 }}
            {...inView(0.1)}
          >
            {therapist.name}
          </motion.h1>

          <motion.blockquote
            {...inView(0.2)}
            className="font-cormorant italic text-earth/70 mb-8 pl-4 border-l border-earth/20"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.65 }}
          >
            {therapist.philosophy.split('\n').map((line, i) => (
              <span key={i} className={line === '' ? 'block mt-3' : 'block'}>{line}</span>
            ))}
          </motion.blockquote>

          <motion.div {...inView(0.3)} className="body-text text-earth/65 space-y-3 text-sm md:text-base mb-8">
            {therapist.atmosphere.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          <motion.p {...inView(0.35)} className="font-cormorant italic text-earth/55 text-lg mb-8">
            {therapist.presence}
          </motion.p>

          {/* Expandable specialisations */}
          <motion.button
            {...inView(0.4)}
            onClick={() => setExpanded(!expanded)}
            className="label-text text-earth/50 hover:text-earth/80 transition-colors duration-300 flex items-center gap-3 mb-6"
            style={{ cursor: 'none' }}
          >
            <span>{expanded ? ui.close : ui.specializationsBtn}</span>
            <motion.span
              animate={{ rotate: expanded ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden
            >→</motion.span>
          </motion.button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="overflow-hidden"
              >
                <div className="pb-8 space-y-6">
                  <div>
                    <p className="label-text text-earth/50 mb-3">{ui.technicalSpec}</p>
                    <ul className="space-y-1.5">
                      {therapist.strengths.map((s) => (
                        <li key={s} className="body-text text-earth/60 text-sm flex items-start gap-2">
                          <span className="text-earth/30 mt-1 shrink-0">·</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="label-text text-earth/50 mb-3">{ui.idealProfile}</p>
                    <p className="body-text text-earth/60 text-sm">{therapist.ideal}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Price + CTA */}
          <motion.div {...inView(0.44)} className="border-t border-earth/15 pt-8 mt-2">
            {therapist.supportingTone && (
              <p className="body-text text-earth/45 text-xs leading-relaxed mb-5">
                {therapist.supportingTone}
              </p>
            )}
            {therapist.price ? (
              <>
                <p className="label-text text-earth/50 mb-2">{therapist.priceLabel}</p>
                <p
                  className="font-cormorant font-light text-deep-moss mb-7"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1 }}
                >
                  {therapist.price}
                </p>
              </>
            ) : (
              <p className="label-text text-earth/40 mb-7">{ui.availabilityOnRequest}</p>
            )}
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-deep-moss border-deep-moss/30 inline-flex mb-6"
            >
              <span>{ui.requestSession}</span>
              <span aria-hidden>→</span>
            </a>
            <p className="label-text text-earth/40 text-xs leading-relaxed">
              {therapist.consultationNote}
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function TherapistPage() {
  const { lang } = useLanguage()
  const params = useParams()
  const slug = params.slug as string

  const ui = uiTranslations[lang]
  const founder = foundersData[lang].find(f => f.id === slug)
  const therapist = therapistsData[lang].find(t => t.id === slug)

  if (!founder && !therapist) {
    return (
      <main style={{ background: '#111614', minHeight: '100svh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link href="/therapists" className="label-text text-sand/40 hover:text-sand/70 transition-colors" style={{ fontSize: '0.55rem', letterSpacing: '0.25em' }}>
          ← {lang === 'PT' ? 'PRATICANTES' : 'PRACTITIONERS'}
        </Link>
      </main>
    )
  }

  return (
    <>
      <CustomCursor />

      <main style={{ background: '#111614', minHeight: '100svh' }}>

        {/* ── Nav ── */}
        <motion.header
          {...fadeUp(0)}
          className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-6 border-b"
          style={{ borderColor: 'rgba(220,201,160,0.06)', position: 'relative', zIndex: 10, background: '#111614' }}
        >
          <Link
            href="/therapists"
            className="label-text text-sand/45 hover:text-sand/85 transition-colors duration-300"
            style={{ fontSize: '0.55rem', letterSpacing: '0.25em' }}
          >
            {lang === 'PT' ? '← PRATICANTES' : '← PRACTITIONERS'}
          </Link>
          <div className="flex items-center gap-6">
            <LanguageToggle />
            <Link
              href="/"
              className="label-text text-sand/35 hover:text-sand/70 transition-colors duration-300"
              style={{ fontSize: '0.55rem', letterSpacing: '0.25em' }}
            >
              CHERIETHAI
            </Link>
          </div>
        </motion.header>

        {/* ── Profile ── */}
        {founder ? (
          <FounderRow founder={founder} ui={ui} lang={lang} />
        ) : (
          <TherapistProfileLayout therapist={therapist!} ui={ui} lang={lang} />
        )}

        {/* ── Footer ── */}
        <div
          className="px-6 md:px-12 lg:px-16 py-10 border-t"
          style={{ borderColor: 'rgba(220,201,160,0.05)' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="label-text text-sage/18" style={{ fontSize: '0.48rem', letterSpacing: '0.22em' }}>
              CHERIETHAI INSTITUTE · SÃO PAULO · RIO DE JANEIRO
            </p>
            <Link
              href="/"
              className="label-text text-sage/18 hover:text-sage/40 transition-colors duration-300"
              style={{ fontSize: '0.48rem', letterSpacing: '0.22em' }}
            >
              CHERIETHAI.COM.BR →
            </Link>
          </div>
        </div>

      </main>
    </>
  )
}
