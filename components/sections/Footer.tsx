'use client'

import { motion } from 'framer-motion'
import Logo from '@/components/Logo'

const navLinks = [
  { label: 'Filosofia', href: '/philosophy' },
  { label: 'O Método', href: '#method' },
  { label: 'Sessões', href: '#sessions' },
  { label: 'Os Praticantes', href: '#therapists' },
  { label: 'Instituto', href: '#institute' },
  { label: 'Retiros', href: '#retreats' },
  { label: 'Localizações', href: '#locations' },
  { label: 'Agendamento', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith('/')) { window.location.href = href; return }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-moss overflow-hidden">

      {/* Pull quote */}
      <div className="px-6 md:px-12 lg:px-16 pt-16 md:pt-20 pb-12 md:pb-16 border-b border-sand/10">
        <motion.blockquote
          className="display-quote text-sand/50"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          "Um trabalho que permanece."
        </motion.blockquote>
      </div>

      {/* Main footer grid */}
      <div className="px-6 md:px-12 lg:px-16 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mb-6 block"
              aria-label="Voltar ao topo"
            >
              <Logo height={80} />
            </button>
            <p className="label-text text-sand/60 mb-4">
              CherieThai<br />Bodywork Thai Clínico
            </p>
            <p className="body-text text-sage/50 text-sm leading-relaxed">
              Fundado por Cherie T. Charnkul.<br />
              São Paulo&nbsp;·&nbsp;Rio de Janeiro.
            </p>
          </motion.div>

          {/* Navigation column */}
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.25, 0.1, 0.25, 1.0] }}
            aria-label="Footer navigation"
          >
            <p className="label-text text-sage/40 mb-6">Navegação</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="body-text text-sage/60 hover:text-sage transition-colors duration-300 text-sm link-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <p className="label-text text-sage/40 mb-6">Contato</p>
            <div className="space-y-4">
              <a
                href="https://instagram.com/cheriethai"
                target="_blank"
                rel="noopener noreferrer"
                className="body-text text-sage/60 hover:text-sage transition-colors duration-300 text-sm block link-underline w-fit"
              >
                @cheriethai
              </a>
              <a
                href="mailto:cherie@cheriethai.com"
                className="body-text text-sage/60 hover:text-sage transition-colors duration-300 text-sm block link-underline w-fit"
              >
                cherie@cheriethai.com
              </a>
              <p className="body-text text-sage/35 text-xs leading-relaxed mt-6">
                Sessões somente com agendamento.<br />
                Todas as consultas são bem-vindas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Philosophy outro */}
      <div className="px-6 md:px-12 lg:px-16 py-8 border-t border-sand/8">
        <motion.p
          className="body-text text-sage/25 text-xs text-center leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2 }}
        >
          O corpo é arquitetura. Restauramos o que a compressão tomou.
        </motion.p>
      </div>

      {/* Legal strip */}
      <div className="px-6 md:px-12 lg:px-16 pb-8 border-t border-sand/5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-6">
          <p className="label-text text-sage/25 text-xs">
            © {new Date().getFullYear()} CherieThai Institute&nbsp;·&nbsp;São Paulo&nbsp;·&nbsp;Rio de Janeiro
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="label-text text-sage/25 hover:text-sage/50 transition-colors text-xs">
              Privacidade
            </a>
            <div className="flex items-center gap-3">
              {['EN', 'PT'].map((l, i) => (
                <span key={l} className="flex items-center gap-3">
                  <button className="label-text text-sage/25 hover:text-sage/50 transition-colors text-xs">
                    {l}
                  </button>
                  {i === 0 && <span className="text-sage/20">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
