'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.95, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

const divider = (
  <div className="flex items-center gap-6 my-16 md:my-20">
    <div className="flex-1 h-px" style={{ background: 'rgba(220,201,160,0.12)' }} />
    <span className="label-text" style={{ fontSize: '0.48rem', letterSpacing: '0.3em', color: 'rgba(220,201,160,0.3)' }}>◦</span>
    <div className="flex-1 h-px" style={{ background: 'rgba(220,201,160,0.12)' }} />
  </div>
)

// ─── Photo placeholder ──────────────────────────────────────────────────────
function PhotoPlaceholder({ label, aspectRatio = '3/4' }: { label?: string; aspectRatio?: string }) {
  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        aspectRatio,
        background: 'rgba(220,201,160,0.04)',
        border: '1px dashed rgba(220,201,160,0.12)',
      }}
    >
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="label-text text-sand/20" style={{ fontSize: '0.48rem', letterSpacing: '0.25em' }}>
            {label}
          </span>
        </div>
      )}
    </div>
  )
}

// ─── Content ────────────────────────────────────────────────────────────────

const content = {
  PT: {
    eyebrow: 'A PRÁTICA',
    headline: 'Uma prática construída\nao longo de décadas.\nNão inventada. Herdada,\ne aprofundada com o tempo.',
    intro: `O trabalho CherieThai tem uma qualidade reconhecível. Quem já recebeu ou observou uma sessão sabe: há um ritmo, uma geometria, uma forma de ler o corpo que não se aprende apenas de um livro ou de um curso.

Esse estilo foi moldado por décadas de formação — enraizado na tradição Isaan do nordeste da Tailândia, uma linhagem regional distinta que difere significativamente de outros estilos de Thai massage. Foi aprofundado ainda pela trajetória de Cherie na dança competitiva e nas artes marciais. Essa base é visível no trabalho: uma atenção distinta às linhas e formas, o uso de alavancagem, a construção de forma dentro de cada movimento.

Não inventamos movimentos. E não queremos crédito por isso.`,

    galleryLabel: 'O TRABALHO · ESTILO · MOVIMENTO',
    photoCredit: 'Fotos em breve',

    namingTitle: 'Por que nomeamos os movimentos',
    namingBody: `Dar nomes aos movimentos é uma ferramenta de ensino — não uma reivindicação de autoria.

Quando um aluno ouve o nome de uma posição pela primeira vez e encontra aquele lugar no corpo, algo fixa. O nome se torna uma referência. Uma porta para entrar mais rápido na próxima vez.

Nomeamos para ensinar com mais clareza. Para que o aluno tenha uma linguagem interna que acelera a prática. Não para declarar que aquele movimento nos pertence.`,

    lineageTitle: 'Sobre a linhagem',
    lineageBody: `Todo movimento que ensinamos tem uma origem que nos antecede.

As bases vêm das tradições de Thai massage nas quais Cherie se formou. Vêm do bodywork que praticamos e recebemos. Vêm da dança — uma linguagem corporal que Cherie carregou durante anos e que informa, de forma invisível mas real, como o movimento é percebido e transmitido dentro de uma sessão.

Adaptamos. Refinamos. Encontramos uma expressão própria. Mas isso não é propriedade — é prática.

Não concordamos com a cultura de reivindicar posse sobre movimentos, especialmente quando vem de praticantes que não têm raízes nas tradições que dizem representar. O corpo não pertence a ninguém. As tradições que nos formaram foram passadas através de gerações, de mão em mão, muito antes de existirmos.

O que é nosso é o cuidado com que ensinamos. A fidelidade com que transmitimos. E a honestidade de dizer de onde veio cada coisa.`,

    studentLabel: 'ALUNOS · SESSÕES · FORMAÇÃO',
    studentCaption: 'O estilo CherieThai em prática — sessões, treinamentos e formações ao longo dos anos.',

    closingQuote: '"O que torna este trabalho nosso não é o que inventamos. É a forma como cuidamos do que recebemos."',

    ctaLabel: 'VER CURSOS E FORMAÇÕES',
    ctaHref: '/courses',
    ctaLabel2: 'NOSSOS TERAPEUTAS',
    ctaHref2: '/therapists',
  },
  EN: {
    eyebrow: 'THE PRACTICE',
    headline: 'A practice built\nover decades.\nNot invented. Inherited,\nand deepened over time.',
    intro: `CherieThai work has a recognisable quality. Anyone who has received or observed a session knows: there is a rhythm, a geometry, a way of reading the body that cannot be learned from a book or a single course alone.

This style was shaped by decades of training — rooted in the Isaan tradition of northeast Thailand, a distinct regional lineage that differs significantly from other Thai massage styles. It was deepened further through Cherie's background in competitive dance and martial arts. That foundation is visible in the work: a distinct attention to line and shape, the use of leverage, the building of form within each movement.

We did not invent movements. And we do not want credit for that.`,

    galleryLabel: 'THE WORK · STYLE · MOVEMENT',
    photoCredit: 'Photos coming soon',

    namingTitle: 'Why we name movements',
    namingBody: `Naming movements is a teaching tool — not a claim of authorship.

When a student hears the name of a position for the first time and finds that place in the body, something fixes. The name becomes a reference. A door to enter faster the next time.

We name to teach with more clarity. So that students have an internal language that accelerates the practice. Not to declare that the movement belongs to us.`,

    lineageTitle: 'On lineage',
    lineageBody: `Every movement we teach has an origin that precedes us.

The foundations come from the Thai massage traditions in which Cherie trained. From the bodywork we have practised and received. From dance — a physical language that Cherie carried for years and that informs, invisibly but really, how movement is perceived and transmitted within a session.

We have adapted. Refined. Found our own expression. But that is not ownership — it is practice.

We do not agree with the culture of claiming ownership over movements, especially when it comes from practitioners who have no roots in the traditions they claim to represent. The body belongs to no one. The traditions that formed us were passed through generations, hand to hand, long before we existed.

What is ours is the care with which we teach. The faithfulness with which we transmit. And the honesty of saying where each thing came from.`,

    studentLabel: 'STUDENTS · SESSIONS · TRAINING',
    studentCaption: 'The CherieThai style in practice — sessions, trainings and formations over the years.',

    closingQuote: '"What makes this work ours is not what we invented. It is how carefully we hold what we were given."',

    ctaLabel: 'VIEW COURSES & TRAINING',
    ctaHref: '/courses',
    ctaLabel2: 'OUR THERAPISTS',
    ctaHref2: '/therapists',
  },
}

export default function ThePracticePage() {
  const { lang } = useLanguage()
  const c = content[lang]

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main style={{ background: '#111614', minHeight: '100svh' }}>

        {/* ── Hero ── */}
        <section
          className="relative flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-20 md:pb-28"
          style={{ minHeight: '75svh', paddingTop: '10rem' }}
        >
          {/* Background texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(220,201,160,0.04) 0%, transparent 65%)' }}
          />

          <div className="relative max-w-4xl">
            <motion.p
              {...fadeUp(0)}
              className="label-text mb-6"
              style={{ fontSize: '0.52rem', letterSpacing: '0.3em', color: 'rgba(220,201,160,0.4)' }}
            >
              {c.eyebrow}
            </motion.p>

            <motion.h1
              {...fadeUp(0.08)}
              className="font-cormorant font-light text-ivory"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 1.05, whiteSpace: 'pre-line' }}
            >
              {c.headline}
            </motion.h1>
          </div>
        </section>

        {/* ── Intro text ── */}
        <section className="px-6 md:px-16 lg:px-24 pb-20">
          <div className="max-w-2xl">
            {c.intro.split('\n\n').map((para, i) => (
              <motion.p
                key={i}
                {...fadeUp(i * 0.06)}
                className="font-cormorant text-sand/60 mb-6"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)', lineHeight: 1.7 }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </section>

        {/* ── Photo gallery — style/work ── */}
        <section className="px-6 md:px-16 lg:px-24 pb-24">
          <motion.p
            {...fadeUp()}
            className="label-text mb-10"
            style={{ fontSize: '0.5rem', letterSpacing: '0.3em', color: 'rgba(220,201,160,0.3)' }}
          >
            {c.galleryLabel}
          </motion.p>

          {/* 2-col portrait grid */}
          <motion.div {...fadeUp(0.05)} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            <PhotoPlaceholder aspectRatio="3/4" label="FOTO 1" />
            <PhotoPlaceholder aspectRatio="3/4" label="FOTO 2" />
            <PhotoPlaceholder aspectRatio="3/4" label="FOTO 3" />
            <PhotoPlaceholder aspectRatio="3/4" label="FOTO 4" />
          </motion.div>
          <motion.div {...fadeUp(0.08)} className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <PhotoPlaceholder aspectRatio="16/9" label="FOTO 5" />
            <PhotoPlaceholder aspectRatio="16/9" label="FOTO 6" />
          </motion.div>

          <motion.p
            {...fadeUp(0.1)}
            className="label-text mt-5"
            style={{ fontSize: '0.46rem', letterSpacing: '0.22em', color: 'rgba(220,201,160,0.2)' }}
          >
            {c.photoCredit}
          </motion.p>
        </section>

        {/* ── Naming movements ── */}
        <section className="px-6 md:px-16 lg:px-24 pb-24">
          <div
            className="h-px w-full mb-20"
            style={{ background: 'rgba(220,201,160,0.08)' }}
          />
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl">
            <motion.div {...fadeUp()}>
              <h2
                className="font-cormorant font-light text-ivory mb-8"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.1 }}
              >
                {c.namingTitle}
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.08)}>
              {c.namingBody.split('\n\n').map((para, i) => (
                <p
                  key={i}
                  className="font-cormorant text-sand/55 mb-5"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: 1.75 }}
                >
                  {para}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Lineage ── */}
        <section
          className="px-6 md:px-16 lg:px-24 py-20 md:py-28"
          style={{ background: 'rgba(220,201,160,0.025)', borderTop: '1px solid rgba(220,201,160,0.07)', borderBottom: '1px solid rgba(220,201,160,0.07)' }}
        >
          <div className="max-w-3xl mx-auto">
            <motion.p
              {...fadeUp()}
              className="label-text mb-8"
              style={{ fontSize: '0.5rem', letterSpacing: '0.3em', color: 'rgba(220,201,160,0.3)' }}
            >
              LINEAGE · LINHAGEM
            </motion.p>
            <motion.h2
              {...fadeUp(0.05)}
              className="font-cormorant font-light text-ivory mb-12"
              style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)', lineHeight: 1.1 }}
            >
              {c.lineageTitle}
            </motion.h2>
            {c.lineageBody.split('\n\n').map((para, i) => (
              <motion.p
                key={i}
                {...fadeUp(0.06 + i * 0.04)}
                className="font-cormorant text-sand/55 mb-6"
                style={{ fontSize: 'clamp(1rem, 1.9vw, 1.25rem)', lineHeight: 1.75 }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </section>

        {/* ── Student / session photos ── */}
        <section className="px-6 md:px-16 lg:px-24 py-24">
          <motion.p
            {...fadeUp()}
            className="label-text mb-10"
            style={{ fontSize: '0.5rem', letterSpacing: '0.3em', color: 'rgba(220,201,160,0.3)' }}
          >
            {c.studentLabel}
          </motion.p>

          <motion.div {...fadeUp(0.05)} className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
            <PhotoPlaceholder aspectRatio="3/4" label="ALUNO 1" />
            <PhotoPlaceholder aspectRatio="3/4" label="ALUNO 2" />
            <PhotoPlaceholder aspectRatio="3/4" label="ALUNO 3" />
          </motion.div>
          <motion.div {...fadeUp(0.08)} className="grid grid-cols-2 gap-3">
            <PhotoPlaceholder aspectRatio="4/3" label="ALUNO 4" />
            <PhotoPlaceholder aspectRatio="4/3" label="ALUNO 5" />
          </motion.div>

          <motion.p
            {...fadeUp(0.1)}
            className="font-cormorant italic text-sand/35 mt-8"
            style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)' }}
          >
            {c.studentCaption}
          </motion.p>
        </section>

        {/* ── Closing quote ── */}
        <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              {...fadeUp()}
              className="h-px w-16 mx-auto mb-16"
              style={{ background: 'rgba(220,201,160,0.2)' }}
            />
            <motion.blockquote
              {...fadeUp(0.08)}
              className="font-cormorant font-light italic text-ivory"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', lineHeight: 1.4 }}
            >
              {c.closingQuote}
            </motion.blockquote>
            <motion.p
              {...fadeUp(0.14)}
              className="label-text mt-6"
              style={{ fontSize: '0.48rem', letterSpacing: '0.25em', color: 'rgba(220,201,160,0.3)' }}
            >
              — CHERIE SNAPE · CHERIETHAI
            </motion.p>
          </div>
        </section>

        {/* ── CTAs ── */}
        <section className="px-6 md:px-16 lg:px-24 pb-28">
          <div
            className="h-px w-full mb-16"
            style={{ background: 'rgba(220,201,160,0.08)' }}
          />
          <motion.div {...fadeUp()} className="flex flex-col sm:flex-row gap-4">
            <Link
              href={c.ctaHref}
              className="btn-ghost text-sand/55 border-sand/15 inline-flex"
            >
              <span>{c.ctaLabel}</span>
              <span aria-hidden>→</span>
            </Link>
            <Link
              href={c.ctaHref2}
              className="btn-ghost text-sand/55 border-sand/15 inline-flex"
            >
              <span>{c.ctaLabel2}</span>
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </section>

      </main>

      <Footer />
    </>
  )
}
