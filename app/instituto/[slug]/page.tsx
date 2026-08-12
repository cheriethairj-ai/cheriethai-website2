'use client'

import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { students } from '@/data/students'
import { useLanguage } from '@/contexts/LanguageContext'
import CustomCursor from '@/components/CustomCursor'
import LanguageToggle from '@/components/LanguageToggle'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] },
})

export default function StudentProfilePage({
  params,
}: {
  params: { slug: string }
}) {
  const student = students.find((s) => s.id === params.slug)
  if (!student) notFound()

  const { lang } = useLanguage()
  const bio         = lang === 'PT' && student.bioPT         ? student.bioPT         : student.bio
  const bioPoints   = lang === 'PT' && student.bioPTPoints   ? student.bioPTPoints   : student.bioPoints
  const descriptors = lang === 'PT' && student.descriptorsPT ? student.descriptorsPT : student.descriptors

  const hasPhoto = !!student.photo

  return (
    <>
      <CustomCursor />

      <main style={{ background: '#111614', minHeight: '100svh' }}>

        {/* ── Navigation ─────────────────────────────────────────────────── */}
        <motion.header
          {...fadeUp(0)}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 py-6"
          style={{ background: 'linear-gradient(to bottom, rgba(17,22,20,0.96) 0%, transparent 100%)' }}
        >
          <Link
            href="/alunos"
            className="label-text text-sand/45 hover:text-sand/85 transition-colors duration-300"
            style={{ fontSize: '0.55rem', letterSpacing: '0.25em' }}
          >
            ← ALUNOS
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

        {/* ── Video ──────────────────────────────────────────────────────── */}
        <motion.div
          {...fadeUp(0.08)}
          className="w-full flex flex-col items-center"
          style={{ paddingTop: '5.5rem', paddingBottom: '0' }}
        >
          {/* Label above video */}
          <p
            className="label-text text-sage/25 mb-3"
            style={{ fontSize: '0.48rem', letterSpacing: '0.3em' }}
          >
            INSTITUTO CHERIETHAI
          </p>
          <h2
            className="font-cormorant font-light text-ivory/70 mb-1"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', lineHeight: 1, letterSpacing: '-0.01em' }}
          >
            {student.name}
          </h2>
          <p
            className="font-cormorant font-light text-sand/30 mb-6"
            style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1rem)', letterSpacing: '0.04em' }}
          >
            {lang === 'PT' ? 'Vídeo de apresentação final' : 'Final presentation video'}
          </p>

          {/* Video container — constrained for cinematic presence */}
          <div
            style={{
              width: '100%',
              maxWidth: '420px',
              aspectRatio: '9/16',
              position: 'relative',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${student.youtubeId}?rel=0&modestbranding=1&color=white&autoplay=0`}
              className="w-full h-full"
              style={{ border: 'none', display: 'block' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`${student.name} — CherieThai Instituto`}
            />
          </div>
        </motion.div>

        {/* ── Profile ────────────────────────────────────────────────────── */}
        <div
          className="px-6 md:px-12 lg:px-16"
          style={{ paddingTop: 'clamp(2.5rem, 8vw, 6rem)', paddingBottom: 'clamp(3rem, 8vw, 6rem)' }}
        >
          <div
            className={`mx-auto ${hasPhoto ? 'grid grid-cols-1 md:grid-cols-2' : 'flex flex-col'} items-start`}
            style={{
              maxWidth: hasPhoto ? '1080px' : '720px',
              gap: hasPhoto ? 'clamp(3rem, 8vw, 8rem)' : undefined,
            }}
          >

            {/* Left — portrait photo (only when available) */}
            {hasPhoto && (
              <motion.div {...fadeUp(0.18)} className="w-full">
                <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
                  <Image
                    src={`/students/${student.photo}`}
                    alt={student.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
              </motion.div>
            )}

            {/* Text content */}
            <div className="flex flex-col" style={{ paddingTop: hasPhoto ? 'clamp(0rem, 3vw, 2rem)' : 0 }}>

              {/* Descriptors — inline, dot-separated */}
              {descriptors && (
                <motion.p
                  {...fadeUp(0.24)}
                  className="label-text text-sage/35 mb-10"
                  style={{ fontSize: '0.5rem', letterSpacing: '0.26em' }}
                >
                  {descriptors.map((d, i) => (
                    <span key={i}>
                      {i > 0 && <span className="mx-2 text-sage/20">·</span>}
                      {d.toUpperCase()}
                    </span>
                  ))}
                </motion.p>
              )}

              {/* Name */}
              <motion.h1
                {...fadeUp(0.30)}
                className="display-section text-ivory"
                style={{
                  fontSize: 'clamp(3rem, 5.5vw, 4.8rem)',
                  lineHeight: 0.93,
                  marginBottom: '0.6rem',
                }}
              >
                {student.name}
              </motion.h1>

              {/* Non-practicing label */}
              {student.nonPracticing && (
                <motion.div
                  {...fadeUp(0.33)}
                  className="mb-6"
                  style={{
                    display: 'inline-block',
                    border: '1px solid rgba(170,182,162,0.25)',
                    padding: '6px 14px',
                  }}
                >
                  <p
                    className="label-text text-sage/55"
                    style={{ fontSize: '0.52rem', letterSpacing: '0.22em' }}
                  >
                    {lang === 'PT' ? 'FORMADA · NÃO ATUA PROFISSIONALMENTE' : 'GRADUATE · NON-PRACTICING'}
                  </p>
                </motion.div>
              )}

              {/* City & country */}
              <motion.p
                {...fadeUp(0.35)}
                className="label-text text-sage/38"
                style={{
                  fontSize: '0.52rem',
                  letterSpacing: '0.25em',
                  marginBottom: 'clamp(2rem, 4vw, 3rem)',
                }}
              >
                {student.city.toUpperCase()}&nbsp;&nbsp;·&nbsp;&nbsp;{student.country.toUpperCase()}
              </motion.p>

              {/* Rule */}
              <motion.div
                {...fadeUp(0.38)}
                className="divider-sand"
                style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
              />

              {/* Biography — flowing prose */}
              <motion.div
                {...fadeUp(0.43)}
                style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                {bio && (
                  <p
                    className="body-text text-sand/70"
                    style={{
                      fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                      lineHeight: 1.9,
                      marginBottom: bioPoints && bioPoints.length > 0 ? '1.5rem' : 0,
                    }}
                  >
                    {bio}
                  </p>
                )}

                {bioPoints && bioPoints.map((point, i) => (
                  <p
                    key={i}
                    className="body-text text-sand/58"
                    style={{
                      fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
                      lineHeight: 1.9,
                      marginBottom: i < bioPoints.length - 1 ? '1.1rem' : 0,
                    }}
                  >
                    {point}
                  </p>
                ))}
              </motion.div>

              {/* Actions — hidden for non-practicing graduates */}
              {!student.nonPracticing && student.instagram && (
                <motion.div
                  {...fadeUp(0.50)}
                  className="flex flex-wrap items-center gap-3"
                >
                  <a
                    href={`https://www.instagram.com/${student.instagram}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-sand/60 border-sand/20 justify-between"
                  >
                    <span>@{student.instagram}</span>
                    <span aria-hidden>↗</span>
                  </a>
                </motion.div>
              )}

            </div>
          </div>
        </div>

        {/* ── Institute mark ─────────────────────────────────────────────── */}
        <div
          className="px-6 md:px-12 lg:px-16 py-10 border-t"
          style={{ borderColor: 'rgba(220,201,160,0.05)' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 max-w-none">
            <p
              className="label-text text-sage/18"
              style={{ fontSize: '0.48rem', letterSpacing: '0.22em' }}
            >
              CHERIETHAI INSTITUTO&nbsp;&nbsp;·&nbsp;&nbsp;SÃO PAULO&nbsp;&nbsp;·&nbsp;&nbsp;RIO DE JANEIRO
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
