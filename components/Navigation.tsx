'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/Logo'
import { useLanguage } from '@/contexts/LanguageContext'

const navItemsPT = [
  {
    label: 'Sobre',
    href: '/#about',
    dropdown: [
      { label: 'Filosofia', href: '/philosophy' },
      { label: 'Nossa História', href: '/#about' },
    ],
  },
  {
    label: 'Clínicas',
    href: '/#locations',
    dropdown: [
      { label: 'São Paulo', href: '/#location-saopaulo' },
      { label: 'Rio de Janeiro', href: '/#location-rio' },
      { label: 'Resultados', href: '/resultados', isLarge: true },
    ],
  },
  { label: 'Terapeutas', href: '/#therapists' },
  { label: 'To Embody', href: '/#to-embody' },
  {
    label: 'Instituto',
    href: '/#institute',
    dropdown: [
      { label: 'O Instituto', href: '/#institute' },
      { label: 'Cursos', href: '/#institute-cursos' },
      { label: 'Retiros', href: '/#institute-retiros' },
      { label: 'Workshops', href: '/#institute-workshops' },
      { label: 'Alunos', href: '/#institute-alunos', isLarge: true },
    ],
  },
]

const navItemsEN = [
  {
    label: 'About',
    href: '/#about',
    dropdown: [
      { label: 'Philosophy', href: '/philosophy' },
      { label: 'Our Story', href: '/#about' },
    ],
  },
  {
    label: 'Clinics',
    href: '/#locations',
    dropdown: [
      { label: 'São Paulo', href: '/#location-saopaulo' },
      { label: 'Rio de Janeiro', href: '/#location-rio' },
      { label: 'Results', href: '/resultados', isLarge: true },
    ],
  },
  { label: 'Therapists', href: '/#therapists' },
  { label: 'To Embody', href: '/#to-embody' },
  {
    label: 'Institute',
    href: '/#institute',
    dropdown: [
      { label: 'The Institute', href: '/#institute' },
      { label: 'Courses', href: '/#institute-cursos' },
      { label: 'Retreats', href: '/#institute-retiros' },
      { label: 'Workshops', href: '/#institute-workshops' },
      { label: 'Students', href: '/#institute-alunos', isLarge: true },
    ],
  },
]

const WHATSAPP_URL = `https://wa.me/5511911135083?text=${encodeURIComponent('Olá, gostaria de receber mais informações sobre sessões, opções terapêuticas e disponibilidade na CherieThai.')}`

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { lang, setLang } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const navItems = lang === 'EN' ? navItemsEN : navItemsPT

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const navigate = (href: string) => {
    setMenuOpen(false)
    setOpenDropdown(null)
    setMobileOpenDropdown(null)
    if (href.startsWith('/') && !href.includes('#')) {
      window.location.href = href
      return
    }
    if (href.includes('#')) {
      const anchor = href.split('#')[1]
      const basePath = href.split('#')[0]
      if (basePath && basePath !== pathname) {
        window.location.href = href
        return
      }
      const el = document.getElementById(anchor)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const textColor = scrolled ? 'rgba(61,74,64,0.7)' : 'rgba(245,240,232,0.7)'

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16"
        animate={{
          backgroundColor: scrolled ? 'rgba(245, 240, 232, 0.96)' : 'rgba(26,31,27,0.0)',
          borderBottomColor: scrolled ? 'rgba(220, 201, 160, 0.2)' : 'transparent',
          borderBottomWidth: '1px',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        style={{ borderBottomStyle: 'solid' }}
      >
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo + Language toggle */}
          <div className="flex items-center gap-4">
          <button
            onClick={() => {
              if (pathname === '/') { window.scrollTo({ top: 0, behavior: 'smooth' }) }
              else { window.location.href = '/' }
            }}
            className="relative z-10 flex items-center"
            aria-label="CherieThai home"
          >
            <motion.div
              animate={{ opacity: scrolled ? 1 : 0.92 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div
                className="overflow-hidden transition-all duration-500"
                style={{ height: '44px', width: Math.round(44 * (3893 / 5881)) + 'px' }}
              >
                <Logo height={44} />
              </div>

              <motion.span
                className="font-cormorant font-light tracking-wider hidden sm:block"
                style={{ fontSize: '1.05rem', letterSpacing: '0.12em' }}
                animate={{
                  color: scrolled ? '#3D4A40' : '#F5F0E8',
                  opacity: scrolled ? 0.9 : 0,
                  width: scrolled ? 'auto' : '0px',
                  overflow: 'hidden',
                }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                CherieThai
              </motion.span>
            </motion.div>
          </button>

          {/* Language toggle — next to logo */}
          <div className="flex items-center gap-2">
            {(['EN', 'PT'] as const).map((l, i) => (
              <span key={l} className="flex items-center gap-2">
                <button
                  onClick={() => setLang(l)}
                  className="label-text transition-colors duration-300"
                  style={{
                    color: lang === l
                      ? (scrolled ? '#3D4A40' : '#F5F0E8')
                      : (scrolled ? 'rgba(61,74,64,0.35)' : 'rgba(245,240,232,0.35)'),
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
                  }}
                >
                  {l}
                </button>
                {i === 0 && (
                  <span style={{ color: scrolled ? 'rgba(61,74,64,0.25)' : 'rgba(245,240,232,0.25)' }}>·</span>
                )}
              </span>
            ))}
          </div>

          </div>{/* end Logo + Language toggle */}

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="link-underline label-text transition-colors duration-400 flex items-center gap-1.5"
                    style={{ color: textColor }}
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ fontSize: '0.5rem', lineHeight: 1 }}
                      aria-hidden
                    >
                      ▾
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        className="absolute top-full left-0 mt-3 min-w-[160px] overflow-hidden"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1.0] }}
                        style={{
                          background: 'rgba(245,240,232,0.97)',
                          backdropFilter: 'blur(12px)',
                          border: '1px solid rgba(220,201,160,0.2)',
                        }}
                      >
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => navigate(sub.href)}
                            className={`w-full text-left px-5 hover:bg-earth/5 transition-colors duration-200 block ${
                              sub.isLarge
                                ? 'font-cormorant font-light text-deep-moss/70 hover:text-deep-moss pt-3 pb-4'
                                : 'label-text text-deep-moss/60 hover:text-deep-moss py-3'
                            }`}
                            style={sub.isLarge ? { fontSize: '1.35rem', lineHeight: 1 } : undefined}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  key={item.label}
                  onClick={() => navigate(item.href)}
                  className="link-underline label-text transition-colors duration-400"
                  style={{
                    color: textColor,
                    fontSize: item.label === 'Instituto' ? '0.75rem' : undefined,
                    letterSpacing: item.label === 'Instituto' ? '0.18em' : undefined,
                  }}
                >
                  {item.label}
                </button>
              )
            )}

            <button
              onClick={() => navigate('/#contact')}
              className="label-text transition-colors duration-300 ml-6"
              style={{
                color: scrolled ? 'rgba(61,74,64,0.35)' : 'rgba(245,240,232,0.35)',
                fontSize: '0.6rem',
                letterSpacing: '0.22em',
              }}
            >
              {lang === 'EN' ? 'Contact' : 'Contato'}
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-10 p-4 -mr-4 flex flex-col gap-[6px] items-end"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <motion.span
              className="block h-px origin-center"
              style={{ width: '28px', backgroundColor: scrolled && !menuOpen ? '#3D4A40' : '#F5F0E8' }}
              animate={menuOpen ? { rotate: 45, y: 6, width: '28px' } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
            />
            <motion.span
              className="block h-px origin-center"
              style={{ width: '20px', backgroundColor: scrolled && !menuOpen ? '#3D4A40' : '#F5F0E8' }}
              animate={menuOpen ? { rotate: -45, y: -6, width: '28px' } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
            />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-dark-moss flex flex-col"
            style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            {/* Logo */}
            <motion.div
              className="absolute top-5 left-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Logo height={48} />
            </motion.div>

            {/* Nav items */}
            <nav className="flex flex-col flex-1 px-8 pt-24 pb-6 gap-1 overflow-y-auto justify-center">
              {navItems.map((item, i) => (
                <div key={item.label}>
                  <motion.button
                    onClick={() => {
                      if (item.dropdown) {
                        setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)
                      } else {
                        navigate(item.href)
                      }
                    }}
                    className="font-cormorant font-light text-ivory text-left py-4 border-b border-sand/8 w-full flex items-center justify-between group"
                    style={{
                      fontSize: item.label === 'Instituto' ? 'clamp(3.5rem, 15vw, 5.5rem)' : 'clamp(2.5rem, 11vw, 4rem)',
                      lineHeight: 1.1,
                    }}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                  >
                    <span>{item.label}</span>
                    {item.dropdown ? (
                      <motion.span
                        className="label-text text-sage/35 text-xs"
                        animate={{ rotate: mobileOpenDropdown === item.label ? 90 : 0 }}
                        transition={{ duration: 0.25 }}
                        aria-hidden
                      >
                        →
                      </motion.span>
                    ) : (
                      <motion.span
                        className="label-text text-sage/35 text-xs opacity-0 group-active:opacity-100"
                        aria-hidden
                      >
                        →
                      </motion.span>
                    )}
                  </motion.button>

                  {/* Mobile sub-items for Clínicas */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {mobileOpenDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                          className="overflow-hidden pl-4 border-b border-sand/8"
                        >
                          {item.dropdown.map((sub) => (
                            <button
                              key={sub.label}
                              onClick={() => navigate(sub.href)}
                              className={`w-full text-left flex items-center justify-between ${
                                sub.isLarge
                                  ? 'font-cormorant font-light text-sand/70 hover:text-sand pt-4 pb-3'
                                  : 'label-text text-sage/60 hover:text-sage py-3'
                              }`}
                              style={
                                sub.isLarge
                                  ? { fontSize: '1.65rem', lineHeight: 1 }
                                  : { fontSize: '0.7rem', letterSpacing: '0.18em' }
                              }
                            >
                              <span>{sub.label}</span>
                              <span className="text-sage/25 text-xs" aria-hidden>→</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Bottom section */}
            <motion.div
              className="px-8 pb-10 pt-6 border-t border-sand/10"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="label-text text-sage/35 text-xs mb-4">
                    São Paulo&nbsp;&nbsp;·&nbsp;&nbsp;Rio de Janeiro
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="label-text text-sand/65 flex items-center gap-3"
                    style={{ fontSize: '0.625rem', letterSpacing: '0.22em' }}
                  >
                    {lang === 'EN' ? 'Request a Session' : 'Solicitar uma Sessão'}
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href="https://www.instagram.com/cheriethai"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="text-sand/40 hover:text-sand/80 transition-colors duration-300 mt-4 block"
                    aria-label="Instagram CherieThai"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                    </svg>
                  </a>
                </div>

                <div className="flex flex-col items-end gap-4 shrink-0">
                  <div className="flex items-center gap-3">
                    {(['EN', 'PT'] as const).map((l, i) => (
                      <span key={l} className="flex items-center gap-3">
                        <button
                          onClick={() => setLang(l)}
                          className="label-text"
                          style={{
                            color: lang === l ? '#DCC9A0' : 'rgba(245,240,232,0.25)',
                            fontSize: '0.625rem',
                            letterSpacing: '0.22em',
                          }}
                        >
                          {l}
                        </button>
                        {i === 0 && <span className="text-white/15 text-xs">·</span>}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate('/#contact')}
                    className="label-text text-sand/30 hover:text-sand/60 transition-colors duration-300"
                    style={{ fontSize: '0.625rem', letterSpacing: '0.22em' }}
                  >
                    {lang === 'EN' ? 'Contact' : 'Contato'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
