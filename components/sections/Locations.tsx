'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

function SpaceSection({
  id,
  city,
  country,
  district,
  label,
  headline,
  body,
  atmosphere,
  note,
  details,
  image,
  imageFallbackGradient,
  imagePosition,
  accentNote,
  studioName,
  textSide,
  mapsUrl,
}: {
  id: string
  city: string
  country: string
  district: string
  label: string
  headline: string
  body: string
  atmosphere: string
  note?: string
  details: { k: string; v: string }[]
  image: string | null
  imageFallbackGradient: string
  imagePosition?: string
  accentNote: string
  studioName?: string
  textSide: 'left' | 'right'
  mapsUrl?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  const isLeft = textSide === 'left'

  return (
    <div
      id={id}
      ref={ref}
      className={`relative flex flex-col lg:flex-row ${isLeft ? 'lg:flex-row-reverse' : ''} min-h-[90vh] overflow-hidden`}
    >
      {/* Image column */}
      <motion.div
        className="relative lg:w-[55%] h-[70vh] md:h-[60vh] lg:h-auto overflow-hidden"
        initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <motion.div className="absolute inset-0" style={{ y: imageY }}>
          {image ? (
            <>
              <Image
                src={image}
                alt={`Espaço CherieThai ${city}`}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                style={{ objectPosition: imagePosition ?? 'center center' }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: isLeft
                    ? 'linear-gradient(to left, rgba(26,31,27,0.2) 0%, transparent 60%)'
                    : 'linear-gradient(to right, rgba(26,31,27,0.2) 0%, transparent 60%)',
                }}
              />
            </>
          ) : (
            <div className="absolute inset-0" style={{ background: imageFallbackGradient }} />
          )}
          <div className="absolute top-7 left-7">
            <p className="label-text text-sage/30 text-xs">{accentNote}</p>
          </div>
          <div className="absolute bottom-6 left-6">
            <p className="label-text text-sand/25 text-xs">[ {city} ]</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Text column */}
      <div className="lg:w-[45%] flex items-center px-6 md:px-12 lg:px-14 xl:px-20 py-16 md:py-20 lg:py-28 bg-dark-moss">
        <div className="w-full max-w-md">

          <motion.p {...inView()} className="label-text text-sage mb-2">{label}</motion.p>
          {studioName && (
            <motion.p {...inView(0.03)} className="font-cormorant italic text-sand/40 mb-2" style={{ fontSize: '0.95rem' }}>
              {studioName}
            </motion.p>
          )}
          <motion.p {...inView(0.05)} className="label-text text-sage/35 mb-10">{district}</motion.p>

          <motion.h3
            className="font-cormorant font-light text-ivory mb-8"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.05 }}
            {...inView(0.1)}
          >
            {headline}
          </motion.h3>

          <motion.p {...inView(0.18)} className="body-text text-sage/65 text-base leading-relaxed mb-5">
            {body}
          </motion.p>

          <motion.p {...inView(0.22)} className="font-cormorant italic text-sand/50 text-lg mb-6 leading-relaxed">
            {atmosphere}
          </motion.p>

          {note && (
            <motion.p {...inView(0.25)} className="label-text text-sage/35 text-xs mb-10">
              {note}
            </motion.p>
          )}

          <motion.div {...inView(0.28)} className="border-t border-sand/12 pt-8 mb-8">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {details.map(({ k, v }) => (
                <div key={k}>
                  <p className="label-text text-sage/35 mb-1">{k}</p>
                  <p className="body-text text-sand/50 text-xs whitespace-pre-line">{v}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.a
              {...inView(0.32)}
              href="#contact"
              className="label-text text-sand/45 hover:text-sand/75 transition-colors duration-300 flex items-center gap-2"
            >
              Entre em contato
              <span aria-hidden>→</span>
            </motion.a>

            {mapsUrl && (
              <motion.a
                {...inView(0.36)}
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="label-text text-sage/45 hover:text-sage/80 transition-colors duration-300 flex items-center gap-2"
              >
                Ver no Google Maps
                <span aria-hidden>↗</span>
              </motion.a>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default function Locations() {
  return (
    <section id="locations" className="overflow-hidden">

      {/* ── Header ── */}
      <div className="bg-off-white px-6 md:px-12 lg:px-16 pt-24 md:pt-36 pb-16 md:pb-20 border-t border-earth/10">
        <motion.p {...inView()} className="label-text text-sage mb-5">
          Os Espaços
        </motion.p>
        <motion.h2
          className="display-section text-deep-moss"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          {...inView(0.1)}
        >
          São Paulo.<br />Rio de Janeiro.
        </motion.h2>
        <motion.p
          {...inView(0.2)}
          className="body-text text-earth/50 max-w-md text-sm md:text-base mt-6 leading-relaxed"
        >
          Dois espaços. Dois caracteres distintos.
          A mesma precisão, em ambientes concebidos para o que o trabalho exige.
        </motion.p>
      </div>

      {/* ── São Paulo ── */}
      <SpaceSection
        id="location-saopaulo"
        city="São Paulo"
        studioName="Kimberley"
        country="Brasil"
        district="Itaim Bibi · São Paulo"
        label="Estúdio Principal"
        headline={`São Paulo,\nBrasil.`}
        body="Teto de concreto exposto. Trilhos industriais. E então, uma selva. Pendentes em palha, plantas que crescem sem fronteiras, um mural de floresta tropical que toma a parede inteira. É a sofisticação do Sudeste Asiático reimaginada dentro do caos urbano de São Paulo: modernista, rara, como um pedaço de paraíso que brotou do concreto. Um espaço que não deveria existir aqui, e é exatamente isso que o torna extraordinário."
        atmosphere="Você não espera encontrar isso aqui. E é exatamente esse o ponto."
        note="Sauna integrada ao tratamento · potencializa os resultados · disponível mediante solicitação"
        details={[
          { k: 'Endereço', v: 'R. Pedroso Alvarenga, 691\nItaim Bibi · São Paulo' },
          { k: 'Horário', v: 'Segunda a Domingo\n6h às 20h · conforme terapeuta' },
          { k: 'Sessões', v: 'Somente com agendamento' },
          { k: 'Equipe', v: 'Cherie T. Charnkul e equipe completa' },
        ]}
        image="/clinic-saopaulo-studio.jpg"
        imageFallbackGradient="linear-gradient(145deg, #3D4A40 0%, #2A3329 100%)"
        imagePosition="center center"
        accentNote="ESTÚDIO PRINCIPAL · SÃO PAULO"
        textSide="right"
        mapsUrl="https://maps.app.goo.gl/Chwst6qECbztjH4x7"
      />

      {/* ── São Paulo · Detalhe de musgo ── */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <Image
          src="/clinic-saopaulo-moss.jpg"
          alt="Detalhe de musgo vivo, Estúdio CherieThai São Paulo"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(26,31,27,0.1) 0%, rgba(26,31,27,0.05) 40%, rgba(26,31,27,0.55) 100%)',
          }}
        />
        <div className="absolute bottom-10 left-6 md:left-12 lg:left-16">
          <p className="label-text text-sand/40 text-xs mb-3">DETALHE · SÃO PAULO</p>
          <p
            className="font-cormorant font-light text-ivory/80"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', lineHeight: 1.1 }}
          >
            A natureza que<br />transborda o concreto.
          </p>
        </div>
      </div>

      {/* ── Rio de Janeiro · Divisor ── */}
      <div className="bg-deep-moss px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-14 md:pb-20 border-t border-sand/10">
        <motion.p {...inView()} className="label-text text-sage/50 mb-5">
          Clínica · Rio de Janeiro
        </motion.p>
        <motion.h2
          className="font-cormorant font-light text-ivory"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          {...inView(0.1)}
        >
          Rio de Janeiro.
        </motion.h2>
        <motion.p
          {...inView(0.2)}
          className="body-text text-sage/45 max-w-md text-sm md:text-base mt-6 leading-relaxed"
        >
          Um espaço construído sobre intenção.<br />
          Cada detalhe com propósito.
        </motion.p>
      </div>

      {/* ── Rio de Janeiro · Entrada ── */}
      <SpaceSection
        id="location-rio"
        city="Rio de Janeiro"
        studioName="Thanawan"
        country="Brasil"
        district="Ipanema · Rio de Janeiro"
        label="CherieThai Rio"
        headline={`Rio de Janeiro,\nBrasil.`}
        body="Um espaço de tradição enraizada. Carrega a herança da cultura nordestina, cru, intencional, sem excessos. Muitos dizem que parece o espaço pessoal de um monge: onde ele descansa, onde recebe, onde pratica. Não há separação entre o sagrado e o terapêutico aqui."
        atmosphere="Como entrar em um retiro que alguém construiu para si mesmo."
        details={[
          { k: 'Endereço', v: 'R. Visconde de Pirajá, 142\nIpanema · Rio de Janeiro' },
          { k: 'Horário', v: 'Segunda a Domingo\n8h às 20h · conforme terapeuta' },
          { k: 'Sessões', v: 'Somente com agendamento' },
          { k: 'Equipe', v: 'Liderado por Karl e Lucas' },
        ]}
        image="/clinic-rio-entrance.jpg"
        imageFallbackGradient="linear-gradient(145deg, #1A2A1F 0%, #2A3A2F 50%, #1A2A1F 100%)"
        imagePosition="center center"
        accentNote="CHERIETHAI RIO · IPANEMA"
        textSide="left"
      />

      {/* ── Rio · Detalhe do altar ── */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <Image
          src="/clinic-rio-altar.jpg"
          alt="Altar CherieThai Rio de Janeiro"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(26,31,27,0.1) 0%, rgba(26,31,27,0.05) 40%, rgba(26,31,27,0.6) 100%)',
          }}
        />
        <div className="absolute bottom-10 left-6 md:left-12 lg:left-16">
          <p className="label-text text-sand/40 text-xs mb-3">DETALHE · RIO DE JANEIRO</p>
          <p
            className="font-cormorant font-light text-ivory/80"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', lineHeight: 1.1 }}
          >
            Cada objeto chegou<br />com intenção.
          </p>
        </div>
      </div>

      {/* ── Nota internacional ── */}
      <div className="bg-ivory px-6 md:px-12 lg:px-16 py-14 md:py-20 border-t border-earth/10">
        <motion.div className="max-w-2xl" {...inView()}>
          <p className="body-text text-earth/55 text-base md:text-lg leading-loose">
            Sessões internacionais disponíveis mediante solicitação.
            Os praticantes CherieThai viajam para programas privados,
            parcerias corporativas e colaborações institucionais.
          </p>
          <p className="body-text text-earth/40 text-sm mt-4">
            Entre em contato para consultar disponibilidade na sua cidade.
          </p>
        </motion.div>
      </div>

    </section>
  )
}
