'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import CustomCursor from '@/components/CustomCursor'
import LanguageToggle from '@/components/LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] },
})

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.85, delay, ease: [0.25, 0.1, 0.25, 1.0] },
})

// ─── Enquiry Form ──────────────────────────────────────────────────────────────

function EnquiryForm({ lang }: { lang: 'PT' | 'EN' }) {
  const [name, setName]           = useState('')
  const [email, setEmail]         = useState('')
  const [whatsapp, setWhatsapp]   = useState('')
  const [country, setCountry]     = useState('')
  const [message, setMessage]     = useState('')
  const [loading, setLoading]     = useState(false)
  const [sent, setSent]           = useState(false)
  const [error, setError]         = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/chapada2027-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, whatsapp, country, message }),
      })
      const data = await res.json()
      if (data.ok) {
        setSent(true)
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(220,201,160,0.15)',
    borderRadius: '2px',
    color: '#F5F0E8',
    padding: '0.85rem 1rem',
    fontSize: '0.93rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.62rem',
    letterSpacing: '0.16em',
    color: 'rgba(220,201,160,0.5)',
    marginBottom: '0.45rem',
    fontFamily: 'inherit',
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 text-center"
      >
        <p className="font-cormorant font-light text-ivory/80 mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
          {lang === 'PT' ? 'Recebemos a sua mensagem.' : 'Your enquiry has been received.'}
        </p>
        <p className="label-text text-sage/40" style={{ fontSize: '0.58rem', letterSpacing: '0.22em' }}>
          {lang === 'PT'
            ? 'Entraremos em contato em breve.'
            : "We'll be in touch shortly."}
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>{lang === 'PT' ? 'NOME COMPLETO' : 'FULL NAME'} *</label>
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>EMAIL *</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>WHATSAPP</label>
          <input
            type="tel"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            placeholder="+1 555 000 0000"
            style={{ ...inputStyle, color: whatsapp ? '#F5F0E8' : 'rgba(245,240,232,0.3)' }}
          />
        </div>
        <div>
          <label style={labelStyle}>{lang === 'PT' ? 'PAÍS' : 'COUNTRY'} *</label>
          <input
            type="text"
            required
            value={country}
            onChange={e => setCountry(e.target.value)}
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>{lang === 'PT' ? 'MENSAGEM' : 'MESSAGE'}</label>
        <textarea
          rows={4}
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder={lang === 'PT'
            ? 'Experiência prévia, perguntas, contexto…'
            : 'Prior experience, questions, context…'}
          style={{
            ...inputStyle,
            resize: 'vertical',
            color: message ? '#F5F0E8' : 'rgba(245,240,232,0.3)',
          }}
        />
      </div>

      {error && (
        <p style={{ fontSize: '0.82rem', color: 'rgba(220,100,100,0.8)' }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          background: loading ? 'rgba(220,201,160,0.06)' : 'rgba(220,201,160,0.1)',
          border: '1px solid rgba(220,201,160,0.3)',
          color: '#DCC9A0',
          padding: '1rem 2rem',
          fontSize: '0.72rem',
          letterSpacing: '0.2em',
          fontFamily: 'inherit',
          cursor: loading ? 'not-allowed' : 'none',
          opacity: loading ? 0.6 : 1,
          transition: 'all 0.2s',
          width: '100%',
        }}
      >
        {loading
          ? (lang === 'PT' ? 'ENVIANDO…' : 'SENDING…')
          : (lang === 'PT' ? 'ENVIAR INSCRIÇÃO →' : 'SEND ENQUIRY →')}
      </button>

      <p className="label-text text-sage/22 text-center" style={{ fontSize: '0.5rem', letterSpacing: '0.16em' }}>
        {lang === 'PT'
          ? 'Entraremos em contato para confirmar a sua vaga.'
          : 'We will contact you to confirm your place.'}
      </p>
    </form>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

const INCLUDES_EN = [
  '60 hours of hands-on CherieThai Institute training',
  '7 days · 6 nights full immersion',
  'Direct instruction by Cherie T. Charnkul & Karl Georges',
  'CherieThai Institute certificate upon completion',
  'All meals included throughout the retreat',
  'Accommodation at Canto da Seriema, Campos de São João',
  'Access to the Chapada Diamantina National Park trails',
  'Course materials and technique reference guides',
]

const INCLUDES_PT = [
  '60 horas de formação prática pelo Instituto CherieThai',
  '7 dias · 6 noites de imersão completa',
  'Instrução direta por Cherie T. Charnkul & Karl Georges',
  'Certificado do Instituto CherieThai ao final da formação',
  'Todas as refeições incluídas durante o retiro',
  'Hospedagem no Canto da Seriema, Campos de São João',
  'Acesso às trilhas do Parque Nacional da Chapada Diamantina',
  'Materiais do curso e guias de referência técnica',
]

const DESC_EN = [
  'The 5th edition of the Chapada Diamantina Thai Bodywork training returns in English for 2027. Seven days and six nights at Canto da Seriema — one of the most extraordinary natural settings in Brazil — dedicated entirely to the study and practice of Thai bodywork.',
  'A small group of practitioners will work directly with Cherie T. Charnkul and Karl Georges across 60 hours of hands-on training: deep tissue work, assisted stretching sequences, joint mobilisation, oil bodywork, and the body-reading approach of the CherieThai method.',
  'This is not a course you attend — it is an environment you enter. The Chapada demands a quality of attention that prepares the body and mind for exactly this kind of work.',
]

const DESC_PT = [
  'A 5ª edição da formação Chapada Diamantina Thai Bodywork retorna em inglês em 2027. Sete dias e seis noites no Canto da Seriema — um dos ambientes naturais mais extraordinários do Brasil — dedicados inteiramente ao estudo e à prática do Thai Bodywork.',
  'Um pequeno grupo de praticantes trabalhará diretamente com Cherie T. Charnkul e Karl Georges ao longo de 60 horas de formação prática: trabalho profundo em tecido, sequências de alongamento assistido, mobilização articular, bodywork com óleo e a abordagem de leitura corporal do método CherieThai.',
  'Esta não é uma formação que você assiste — é um ambiente que você entra. A Chapada exige uma qualidade de atenção que prepara o corpo e a mente exatamente para este tipo de trabalho.',
]

export default function Chapada2027Page() {
  const { lang } = useLanguage()

  const description = lang === 'PT' ? DESC_PT : DESC_EN
  const includes    = lang === 'PT' ? INCLUDES_PT : INCLUDES_EN

  return (
    <>
      <CustomCursor />

      <main style={{ background: '#111614', minHeight: '100svh' }}>

        {/* ── Nav ── */}
        <motion.header
          {...fadeUp(0)}
          className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-6 border-b"
          style={{ borderColor: 'rgba(220,201,160,0.06)' }}
        >
          <Link
            href="/courses"
            className="label-text text-sand/45 hover:text-sand/85 transition-colors duration-300"
            style={{ fontSize: '0.55rem', letterSpacing: '0.25em' }}
          >
            ← {lang === 'PT' ? 'CURSOS' : 'COURSES'}
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

        {/* ── Hero header ── */}
        <div className="px-6 md:px-12 lg:px-16 pt-16 pb-12 md:pt-24 md:pb-16">
          <motion.p
            {...fadeUp(0.08)}
            className="label-text text-sage/30 mb-5"
            style={{ fontSize: '0.5rem', letterSpacing: '0.3em' }}
          >
            {lang === 'PT'
              ? 'RETIRO DE FORMAÇÃO · INSTITUTO CHERIETHAI · 5ª EDIÇÃO'
              : 'TRAINING RETREAT · CHERIETHAI INSTITUTE · 5TH EDITION'}
          </motion.p>

          <motion.h1
            {...fadeUp(0.15)}
            className="font-cormorant font-light text-ivory mb-4"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
          >
            Chapada Diamantina<br />
            <span className="text-ivory/55">Thai Bodywork</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.22)}
            className="label-text text-sand/60 mb-2"
            style={{ fontSize: '0.65rem', letterSpacing: '0.22em' }}
          >
            CANTO DA SERIEMA · CAMPOS DE SÃO JOÃO
          </motion.p>

          <motion.p
            {...fadeUp(0.27)}
            className="label-text text-sage/35"
            style={{ fontSize: '0.5rem', letterSpacing: '0.26em' }}
          >
            CHAPADA DIAMANTINA, BAHIA
            &nbsp;&nbsp;·&nbsp;&nbsp;
            {lang === 'PT'
              ? '26 DE SETEMBRO – 3 DE OUTUBRO DE 2027'
              : '26 SEPTEMBER – 3 OCTOBER 2027'}
            &nbsp;&nbsp;·&nbsp;&nbsp;
            {lang === 'PT' ? 'RETIRO DE FORMAÇÃO · 60 HORAS' : 'TRAINING RETREAT · 60 HOURS'}
          </motion.p>
        </div>

        {/* ── Divider ── */}
        <div className="px-6 md:px-12 lg:px-16">
          <div style={{ height: '1px', background: 'rgba(220,201,160,0.06)' }} />
        </div>

        <div className="px-6 md:px-12 lg:px-16 py-16 md:py-20">

          {/* ── Two-col: description + price ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 md:mb-28">

            {/* Description */}
            <motion.div {...reveal(0)}>
              <div className="body-text text-sand/50 space-y-5 leading-loose mb-10"
                style={{ fontSize: 'clamp(0.875rem, 1.4vw, 0.96rem)' }}>
                {description.map((para, i) => <p key={i}>{para}</p>)}
              </div>

              {/* What's included */}
              <div>
                <p className="label-text text-sage/30 mb-5" style={{ fontSize: '0.46rem', letterSpacing: '0.28em' }}>
                  {lang === 'PT' ? 'O QUE ESTÁ INCLUÍDO' : 'WHAT IS INCLUDED'}
                </p>
                <ul className="space-y-3">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span style={{ color: 'rgba(138,162,120,0.5)', fontSize: '0.6rem', marginTop: '0.2rem', flexShrink: 0 }}>—</span>
                      <span className="label-text text-sand/45" style={{ fontSize: '0.62rem', letterSpacing: '0.1em', lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Price + form */}
            <motion.div {...reveal(0.08)}>

              {/* Price block */}
              <div
                className="mb-10 p-8"
                style={{
                  background: 'rgba(220,201,160,0.03)',
                  border: '1px solid rgba(220,201,160,0.1)',
                }}
              >
                <p className="label-text text-sage/30 mb-3" style={{ fontSize: '0.46rem', letterSpacing: '0.28em' }}>
                  {lang === 'PT' ? 'INVESTIMENTO · POR PESSOA' : 'INVESTMENT · PER PERSON'}
                </p>
                <p className="font-cormorant font-light text-ivory/85"
                  style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                  R$ 9.400
                </p>
                <p className="label-text text-sage/35 mt-2" style={{ fontSize: '0.54rem', letterSpacing: '0.18em' }}>
                  ~USD 1.866 · {lang === 'PT' ? 'CÂMBIO APROXIMADO' : 'APPROXIMATE AT CURRENT RATE'}
                </p>

                <div style={{ borderTop: '1px solid rgba(220,201,160,0.08)', marginTop: '1.5rem', paddingTop: '1.5rem' }}>
                  <p className="label-text text-sand/35" style={{ fontSize: '0.54rem', letterSpacing: '0.12em', lineHeight: 1.8 }}>
                    {lang === 'PT'
                      ? 'Valor inclui hospedagem, alimentação completa e todos os materiais do curso. Planos de pagamento disponíveis mediante consulta.'
                      : 'Price includes accommodation, all meals and course materials. Payment plans available on request.'}
                  </p>
                </div>
              </div>

              {/* Enquiry form */}
              <div>
                <p className="label-text text-sage/30 mb-6" style={{ fontSize: '0.46rem', letterSpacing: '0.28em' }}>
                  {lang === 'PT' ? 'RESERVAR UMA VAGA' : 'RESERVE YOUR PLACE'}
                </p>
                <EnquiryForm lang={lang} />
              </div>

            </motion.div>
          </div>

          {/* ── Conducted in English note ── */}
          <motion.div {...reveal(0.04)} className="mb-20 md:mb-24">
            <div className="flex items-center gap-4 mb-0">
              <div className="flex-1 h-px" style={{ background: 'rgba(220,201,160,0.05)' }} />
              <p className="label-text text-sage/28 shrink-0" style={{ fontSize: '0.48rem', letterSpacing: '0.26em' }}>
                {lang === 'PT'
                  ? 'ESTA EDIÇÃO SERÁ CONDUZIDA EM INGLÊS'
                  : 'THIS EDITION IS CONDUCTED IN ENGLISH'}
              </p>
              <div className="flex-1 h-px" style={{ background: 'rgba(220,201,160,0.05)' }} />
            </div>
          </motion.div>

          {/* ── Previous editions ── */}
          <motion.div {...reveal(0.06)} className="max-w-xl">
            <p className="label-text text-sage/25 mb-4" style={{ fontSize: '0.46rem', letterSpacing: '0.26em' }}>
              {lang === 'PT' ? 'EDIÇÃO ANTERIOR' : 'PREVIOUS EDITION'}
            </p>
            <Link
              href="/chapada2026"
              className="group flex items-center justify-between py-5 border-b hover:bg-sand/[0.02] transition-colors duration-300"
              style={{ borderColor: 'rgba(220,201,160,0.08)' }}
            >
              <div>
                <p className="font-cormorant font-light text-ivory/55 group-hover:text-ivory/80 transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', lineHeight: 1.1 }}>
                  Chapada Diamantina Thai Bodywork 2026
                </p>
                <p className="label-text text-sage/28 mt-1 group-hover:text-sage/45 transition-colors duration-300"
                  style={{ fontSize: '0.54rem', letterSpacing: '0.14em' }}>
                  {lang === 'PT' ? '4ª EDIÇÃO · 14 PRATICANTES FORMADOS · 60 HORAS' : '4TH EDITION · 14 PRACTITIONERS · 60 HOURS'}
                </p>
              </div>
              <span className="text-sand/20 group-hover:text-sand/55 transition-all duration-300 group-hover:translate-x-1 ml-6 shrink-0">→</span>
            </Link>
          </motion.div>

        </div>

        {/* ── Footer ── */}
        <div
          className="px-6 md:px-12 lg:px-16 py-10 border-t"
          style={{ borderColor: 'rgba(220,201,160,0.05)' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="label-text text-sage/18" style={{ fontSize: '0.48rem', letterSpacing: '0.22em' }}>
              CHERIETHAI INSTITUTO · SÃO PAULO · RIO DE JANEIRO
            </p>
            <Link
              href="/courses"
              className="label-text text-sage/18 hover:text-sage/40 transition-colors duration-300"
              style={{ fontSize: '0.48rem', letterSpacing: '0.22em' }}
            >
              ← {lang === 'PT' ? 'VOLTAR AOS CURSOS' : 'BACK TO COURSES'}
            </Link>
          </div>
        </div>

      </main>
    </>
  )
}
