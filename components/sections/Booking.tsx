'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const WA_MESSAGE = encodeURIComponent(
  'Olá, gostaria de receber mais informações sobre sessões, opções terapêuticas e disponibilidade na CherieThai.'
)
const WHATSAPP_SP = `https://wa.me/5511911135083?text=${WA_MESSAGE}`
const WHATSAPP_RJ = `https://wa.me/5521996466022?text=${WA_MESSAGE}`
const EMAIL = 'cheriethairj@gmail.com'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

export default function Booking() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])

  return (
    <section id="contact" ref={ref} className="overflow-hidden bg-near-black">

      <div className="flex flex-col lg:flex-row min-h-[88vh]">

        {/* ── Image column ── */}
        <motion.div
          className="lg:w-[44%] relative h-[60vh] md:h-[50vh] lg:h-auto overflow-hidden"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <Image
              src="/clinic-bodywork.jpg"
              alt="CherieThai, sessão em andamento"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(26,31,27,0.25) 0%, rgba(26,31,27,0.55) 100%)',
              }}
            />
          </motion.div>
        </motion.div>

        {/* ── Content column ── */}
        <div className="lg:w-[56%] flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:py-40">
          <div className="w-full max-w-lg">

            {/* Label */}
            <motion.p {...inView()} className="label-text text-sage mb-10">
              Reservas&nbsp;&nbsp;·&nbsp;&nbsp;Sessões
            </motion.p>

            {/* Headline */}
            <motion.h2
              className="display-section text-ivory mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              {...inView(0.1)}
            >
              Uma sessão.<br />
              Pensada<br />
              para você.
            </motion.h2>

            <motion.p {...inView(0.2)} className="body-text text-sand/50 text-sm mb-14 leading-loose">
              Toda sessão começa com uma conversa.<br />
              Escutamos antes de recomendar.
            </motion.p>

            {/* ── Contact info ── */}
            <motion.div {...inView(0.3)} className="border-t border-sand/15 pt-10 mb-10">

              <div className="flex items-center gap-8 mb-10">

                {/* WhatsApp SP */}
                <div className="flex flex-col items-center gap-2">
                  <a href={WHATSAPP_SP} target="_blank" rel="noopener noreferrer"
                    className="text-ivory/60 hover:text-ivory transition-colors duration-300"
                    aria-label="WhatsApp São Paulo">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <p className="label-text text-sage/40 text-xs">São Paulo</p>
                </div>

                {/* WhatsApp RJ */}
                <div className="flex flex-col items-center gap-2">
                  <a href={WHATSAPP_RJ} target="_blank" rel="noopener noreferrer"
                    className="text-ivory/60 hover:text-ivory transition-colors duration-300"
                    aria-label="WhatsApp Rio de Janeiro">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <p className="label-text text-sage/40 text-xs">Rio de Janeiro</p>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center gap-2">
                  <a href={`mailto:${EMAIL}`}
                    className="text-ivory/60 hover:text-ivory transition-colors duration-300"
                    aria-label="Email">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </a>
                  <p className="label-text text-sage/40 text-xs">Email</p>
                </div>

              </div>

              {/* CTA */}
              <a
                href={WHATSAPP_SP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-ivory border-ivory/25 inline-flex"
              >
                <span>Solicitar uma Sessão</span>
                <span aria-hidden>→</span>
              </a>
            </motion.div>

            {/* ── Consultation note ── */}
            <motion.div {...inView(0.4)} className="border-t border-sand/10 pt-8 mb-10">
              <p className="body-text text-sand/38 text-sm leading-loose">
                Outros formatos terapêuticos, estruturas de sessão
                e recomendações de terapeuta estão disponíveis
                mediante consulta direta com nossa equipe.
              </p>
            </motion.div>

            {/* ── Payment note ── */}
            <motion.p {...inView(0.5)} className="label-text text-sage/25 text-xs leading-relaxed">
              O pagamento é coordenado após a confirmação —
              via Pix, cartão de crédito ou parcelamento,
              pelo Mercado Pago.
            </motion.p>

          </div>
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <motion.div
        className="border-t border-sand/8 px-6 md:px-12 lg:px-16 py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="label-text text-sage/28 text-xs">
            Sessões somente com agendamento&nbsp;&nbsp;·&nbsp;&nbsp;São Paulo &amp; Rio de Janeiro
          </p>
          <p className="label-text text-sage/28 text-xs">
            A discrição é padrão.
          </p>
        </div>
      </motion.div>

    </section>
  )
}
