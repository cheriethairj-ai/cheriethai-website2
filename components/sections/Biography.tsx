'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.95, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

export default function Biography() {
  const portraitRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: portraitScroll } = useScroll({
    target: portraitRef,
    offset: ['start end', 'end start'],
  })
  const portraitY = useTransform(portraitScroll, [0, 1], ['-6%', '6%'])

  return (
    <section id="about" className="bg-dark-moss overflow-hidden">

      {/* ── Opening header ── */}
      <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-36 pb-16 md:pb-20 border-b border-sand/10">
        <motion.p {...inView()} className="label-text text-sage mb-10">
          Sobre Cherie&nbsp;&nbsp;·&nbsp;&nbsp;About CherieThai
        </motion.p>
        <motion.h2
          className="font-cormorant font-light text-ivory"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 6.5rem)', lineHeight: 1.02 }}
          {...inView(0.1)}
        >
          Nascida em Phimai.<br />
          <span className="text-sage/70">Forjada pela tradição.</span><br />
          Estabelecida no Brasil.
        </motion.h2>
      </div>

      {/* ── Portrait + Origins ── */}
      <div ref={portraitRef} className="flex flex-col lg:flex-row border-b border-sand/10">

        {/* Portrait column */}
        <motion.div
          className="relative lg:w-[45%] h-[72vh] md:h-[65vh] lg:h-auto overflow-hidden"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <motion.div className="absolute inset-0" style={{ y: portraitY }}>
            <Image
              src="/portrait-cherie.jpg"
              alt="Cherie T. Charnkul, fundadora da CherieThai"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              style={{ objectPosition: 'center top' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(42,51,41,0.1) 0%, rgba(42,51,41,0.45) 100%)',
              }}
            />
          </motion.div>

          {/* Origin caption */}
          <div className="absolute bottom-7 left-7">
            <p className="label-text text-sage/35 text-xs">Phimai, Tailândia&nbsp;&nbsp;·&nbsp;&nbsp;São Paulo, Brasil</p>
          </div>
        </motion.div>

        {/* Origins text */}
        <div className="lg:w-[55%] px-6 md:px-12 lg:px-14 xl:px-20 py-16 md:py-24 lg:py-32 flex items-center">
          <div className="max-w-xl">

            <motion.p {...inView()} className="label-text text-sage/55 mb-8">
              Origens&nbsp;&nbsp;·&nbsp;&nbsp;Phimai, Nordeste da Tailândia
            </motion.p>

            <motion.div {...inView(0.1)} className="body-text text-sand/70 space-y-5 text-base md:text-lg leading-loose mb-10">
              <p>
                Cherie nasceu em Phimai, Tailândia, e cresceu em uma aldeia rural
                em uma família de agricultores de arroz, onde o trabalho físico,
                a resiliência e o cuidado com o corpo faziam parte do cotidiano.
              </p>
              <p>
                Aos quatro anos, começou a praticar massagem dentro da família,
                desenvolvendo uma sensibilidade tátil precoce que mais tarde
                evoluiu para seu caminho profissional.
              </p>
            </motion.div>

            <motion.div {...inView(0.2)} className="border-l border-sand/20 pl-6">
              <p className="body-text text-sand/55 text-sm md:text-base leading-loose">
                Sua primeira base técnica veio de seu tio, que lhe ensinou as técnicas
                terapêuticas tradicionais utilizadas para apoiar os trabalhadores do campo
                após longos dias de trabalho manual. Com ela, aprendeu as técnicas de
                pisada nas costas e a localização precisa de pontos-chave de pressão,
                construindo desde jovem uma compreensão prática do toque terapêutico eficaz.
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Pull quote ── */}
      <motion.div
        className="border-b border-sand/10 px-6 md:px-12 lg:px-16 py-16 md:py-24"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <blockquote
          className="font-cormorant font-light italic text-sand/75 max-w-4xl"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)', lineHeight: 1.35 }}
        >
          "Quatro anos vivendo e treinando sob orientação direta.
          A mesma disciplina que guia cada sessão hoje."
        </blockquote>
        <p className="label-text text-sage/35 mt-6 text-xs">
          Mestre Chub Bryden&nbsp;&nbsp;·&nbsp;&nbsp;Linhagem do Wat Pho · Bangkok
        </p>
      </motion.div>

      {/* ── Training lineage ── */}
      <div className="flex flex-col lg:flex-row border-b border-sand/10">

        {/* Training text */}
        <div className="lg:w-[52%] px-6 md:px-12 lg:px-14 xl:px-20 py-16 md:py-24 lg:py-32 flex items-start">
          <div className="max-w-lg">

            <motion.p {...inView()} className="label-text text-sage/55 mb-8">
              Formação&nbsp;&nbsp;·&nbsp;&nbsp;Training
            </motion.p>

            <motion.h3
              className="font-cormorant font-light text-ivory mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.08 }}
              {...inView(0.1)}
            >
              Quatro anos sob<br />orientação direta.
            </motion.h3>

            <motion.div {...inView(0.2)} className="body-text text-sand/65 space-y-5 text-sm md:text-base leading-loose">
              <p>
                Aos dezesseis anos, Cherie ingressou em um treinamento intensivo formal
                sob a Mestre Chub Bryden, terapeuta sênior da linhagem de Medicina
                Tradicional do Wat Pho, com mais de trinta anos de experiência.
              </p>
              <p>
                Durante quatro anos, viveu e treinou sob sua orientação direta,
                recebendo instrução rigorosa em métodos terapêuticos tailandeses
                tradicionais, precisão anatômica, avaliação clínica e prática
                disciplinada de tratamento.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Lineage detail panel */}
        <div className="lg:w-[48%] bg-near-black px-6 md:px-12 lg:px-14 xl:px-20 py-16 md:py-24 lg:py-32 flex items-center">
          <div className="w-full">

            <motion.div
              {...inView()}
              className="space-y-10"
            >
              {[
                {
                  figure: '+ 30',
                  unit: 'anos',
                  label: 'de experiência da Mestre Chub Bryden',
                },
                {
                  figure: '4',
                  unit: 'anos',
                  label: 'de formação intensiva em regime de residência',
                },
                {
                  figure: 'Wat Pho',
                  unit: null,
                  label: 'Linhagem de Medicina Tradicional Tailandesa · Bangkok',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="border-t border-sand/10 pt-8"
                  {...inView(i * 0.1)}
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      className="font-cormorant font-light text-ivory"
                      style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1 }}
                    >
                      {item.figure}
                    </span>
                    {item.unit && (
                      <span className="label-text text-sage/50 text-xs">{item.unit}</span>
                    )}
                  </div>
                  <p className="body-text text-sand/45 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Journey ── */}
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-b border-sand/10">
        <div className="max-w-5xl">

          <motion.p {...inView()} className="label-text text-sage/55 mb-8">
            Trajetória&nbsp;&nbsp;·&nbsp;&nbsp;Tailândia · Europa · Brasil
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6"
            {...inView(0.1)}
          >
            <div className="body-text text-sand/65 space-y-5 text-sm md:text-base leading-loose">
              <p>
                Com mais de quinze anos de experiência profissional na Tailândia,
                Europa e Brasil, Cherie desenvolveu uma abordagem clínica que integra
                a linhagem terapêutica tailandesa tradicional com bodywork estrutural
                avançado e compreensão terapêutica baseada em movimento.
              </p>
            </div>
            <div className="body-text text-sand/55 space-y-5 text-sm md:text-base leading-loose">
              <p>
                Esse trabalho culminou na criação da CherieThai Clínica, um instituto
                terapêutico boutique operando entre São Paulo e Rio de Janeiro, oferecendo
                tratamentos altamente personalizados para restaurar a mobilidade, melhorar
                o equilíbrio estrutural e apoiar a saúde física a longo prazo.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Karl: section header ── */}
      <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-36 pb-16 md:pb-20 border-t border-sand/10 border-b border-sand/10">
        <motion.p {...inView()} className="label-text text-sage mb-10">
          Co-Fundador&nbsp;&nbsp;·&nbsp;&nbsp;Karl Müller
        </motion.p>
        <motion.h2
          className="font-cormorant font-light text-ivory"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 6.5rem)', lineHeight: 1.02 }}
          {...inView(0.1)}
        >
          Do mundo académico<br />
          <span className="text-sage/70">ao caminho monástico.</span>
        </motion.h2>
      </div>

      {/* ── Karl: Portrait + Origins ── */}
      <div className="flex flex-col lg:flex-row border-b border-sand/10">

        {/* Portrait */}
        <motion.div
          className="relative lg:w-[45%] h-[72vh] md:h-[65vh] lg:h-auto overflow-hidden"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1.0] }}
          style={{ minHeight: '480px' }}
        >
          <Image
            src="/portrait-karl.jpg"
            alt="Karl Müller — Co-Fundador Instituto CherieThai"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,31,27,0.5) 0%, transparent 60%)' }} />
          <div className="absolute bottom-7 left-7">
            <p className="label-text text-sage/35 text-xs">Rio de Janeiro, Brasil&nbsp;&nbsp;·&nbsp;&nbsp;Ban Tam Ye, Tailândia</p>
          </div>
        </motion.div>

        {/* Karl: origins text */}
        <div className="lg:w-[55%] px-6 md:px-12 lg:px-14 xl:px-20 py-16 md:py-24 lg:py-32 flex items-center">
          <div className="max-w-xl">

            <motion.p {...inView()} className="label-text text-sage/55 mb-8">
              Trajetória&nbsp;&nbsp;·&nbsp;&nbsp;Rio de Janeiro · Ban Tam Ye
            </motion.p>

            <motion.h3
              className="font-cormorant font-light text-ivory mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.08 }}
              {...inView(0.1)}
            >
              Dez anos de cátedra.<br />Tudo abandonado.
            </motion.h3>

            <motion.div {...inView(0.2)} className="body-text text-sand/65 space-y-5 text-sm md:text-base leading-loose">
              <p>
                Karl foi professor universitário na PUC-Rio durante dez anos, com formação
                em design gráfico. No auge de sua carreira académica, tomou a decisão
                de abandonar tudo para seguir um caminho radicalmente diferente: tornar-se
                terapeuta de massagem tradicional tailandesa.
              </p>
              <p>
                Treinado por Cherie desde o zero absoluto, Karl desenvolveu uma sensibilidade
                técnica e uma profundidade de compreensão que o levaram naturalmente ao
                caminho tradicional — além da clínica, em direção às próprias origens da prática.
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Karl: pull quote ── */}
      <motion.div
        className="border-b border-sand/10 px-6 md:px-12 lg:px-16 py-16 md:py-24"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <blockquote
          className="font-cormorant font-light italic text-sand/75 max-w-4xl"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)', lineHeight: 1.35 }}
        >
          "O primeiro estrangeiro a ser pessoalmente convidado pelo Grande Mestre
          Ajarn Torng para se tornar monge no templo Ban Tam Ye."
        </blockquote>
        <p className="label-text text-sage/35 mt-6 text-xs">
          Ban Tam Ye&nbsp;&nbsp;·&nbsp;&nbsp;Tailândia
        </p>
      </motion.div>

      {/* ── Karl: monastic path ── */}
      <div className="flex flex-col lg:flex-row border-b border-sand/10">

        {/* Monastic text */}
        <div className="lg:w-[52%] px-6 md:px-12 lg:px-14 xl:px-20 py-16 md:py-24 lg:py-32 flex items-start">
          <div className="max-w-lg">

            <motion.p {...inView()} className="label-text text-sage/55 mb-8">
              Caminho Monástico&nbsp;&nbsp;·&nbsp;&nbsp;Ban Tam Ye
            </motion.p>

            <motion.h3
              className="font-cormorant font-light text-ivory mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.08 }}
              {...inView(0.1)}
            >
              Três meses no templo.<br />410 quilómetros de peregrinação.
            </motion.h3>

            <motion.div {...inView(0.2)} className="body-text text-sand/65 space-y-5 text-sm md:text-base leading-loose">
              <p>
                Karl foi convidado pessoalmente pelo Grande Mestre Ajarn Torng para se
                ordenar monge no templo Ban Tam Ye — tornando-se o primeiro estrangeiro
                a receber essa honra. Durante três meses, viveu o quotidiano monástico,
                documentando a vida dentro do templo e a prática em sua forma mais pura.
              </p>
              <p>
                Integrou uma peregrinação de 410 quilómetros com trinta outros monges,
                tornando-se o primeiro estrangeiro a realizar esse percurso. Uma jornada
                que moldou definitivamente a sua compreensão da tradição terapêutica
                tailandesa como prática espiritual e corporal indissociáveis.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Karl stats panel */}
        <div className="lg:w-[48%] bg-near-black px-6 md:px-12 lg:px-14 xl:px-20 py-16 md:py-24 lg:py-32 flex items-center">
          <div className="w-full">
            <motion.div {...inView()} className="space-y-10">
              {[
                {
                  figure: '10',
                  unit: 'anos',
                  label: 'como professor na PUC-Rio em design gráfico',
                },
                {
                  figure: '3',
                  unit: 'meses',
                  label: 'em residência monástica no templo Ban Tam Ye',
                },
                {
                  figure: '410',
                  unit: 'km',
                  label: 'de peregrinação com 30 monges — o primeiro estrangeiro',
                },
                {
                  figure: 'Ajarn Torng',
                  unit: null,
                  label: 'Grande Mestre · Ban Tam Ye · Tailândia',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="border-t border-sand/10 pt-8"
                  {...inView(i * 0.1)}
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      className="font-cormorant font-light text-ivory"
                      style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: 1 }}
                    >
                      {item.figure}
                    </span>
                    {item.unit && (
                      <span className="label-text text-sage/50 text-xs">{item.unit}</span>
                    )}
                  </div>
                  <p className="body-text text-sand/45 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Institute closing ── */}
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

          <motion.div {...inView()} className="max-w-xl">
            <p className="label-text text-sage/55 mb-6">Instituto&nbsp;&nbsp;·&nbsp;&nbsp;Educação</p>
            <p className="body-text text-sand/55 text-sm md:text-base leading-loose">
              A CherieThai também funciona como instituto de educação, formando terapeutas
              que buscam maestria avançada, precisão clínica e conhecimento terapêutico
              baseado em linhagem, continuando um compromisso com a excelência, a disciplina
              e o respeito pela inteligência do corpo humano.
            </p>
          </motion.div>

          <motion.div {...inView(0.15)} className="shrink-0">
            <a
              href="#institute"
              className="label-text text-sand/45 hover:text-sand transition-colors duration-300 flex items-center gap-3"
            >
              Conheça o Instituto
              <span aria-hidden>——→</span>
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
