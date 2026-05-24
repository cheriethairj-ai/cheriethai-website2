'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import LazyYouTubeShort from '@/components/LazyYouTubeShort'
import { useLanguage } from '@/contexts/LanguageContext'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.95, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

const translations = {
  PT: {
    // Opening header
    aboutLabel: 'Sobre Cherie  ·  About CherieThai',
    heroLine1: 'Nascida em Phimai.',
    heroLine2: 'Criada entre dois mundos.',
    heroLine3: 'Estabelecida no Brasil.',

    // Origins
    originsLabel: 'Origens  ·  Phimai, Tailândia  ·  Reino Unido',
    originsP1: 'Cherie nasceu em Phimai, no Isaan — o nordeste da Tailândia — e cresceu em uma aldeia rural em uma família de agricultores de arroz. O Isaan tem sua própria forma de ler o corpo: crenças ancestrais sobre como a tensão se instala, como a dor se manifesta, como o movimento liberta. Uma visão de mundo passada de geração em geração, não ensinada em livros.',
    originsP2: 'Aos quatro anos, começou a praticar massagem dentro da família. Anos de artes marciais e dança aprofundaram essa compreensão — uma relação com o corpo que é ao mesmo tempo estrutural, intuitiva e profundamente física.',
    originsP3: 'Parte da sua formação aconteceu no Reino Unido, onde cresceu dentro de uma comunidade tailandesa — um espaço entre dois mundos, onde a tradição do seu povo era preservada longe da sua terra de origem. Foi nessa ponte entre culturas que Cherie aprendeu o que significa carregar uma prática através de fronteiras.',
    originsBlockquote: 'Sua primeira base técnica veio de seu tio, que lhe ensinou as técnicas terapêuticas tradicionais utilizadas para apoiar os trabalhadores do campo após longos dias de trabalho manual. Com ela, aprendeu as técnicas de pisada nas costas e a localização precisa de pontos-chave de pressão, construindo desde jovem uma compreensão prática do toque terapêutico eficaz.',

    // Portrait captions
    portraitCaption: 'Phimai, Tailândia  ·  Reino Unido  ·  São Paulo, Brasil',
    mastersCaption: 'Mestras · Tailândia',
    healerCaption: 'Curandeira · Linhagem tradicional',
    hometownCaption: 'Região natal · Tailândia',
    schoolCaption: 'Escola · Phimai, Tailândia',

    // Pull quote
    pullQuote: '"Quatro anos vivendo e treinando sob orientação direta. A mesma disciplina que guia cada sessão hoje."',
    pullQuoteAttrib: 'Mestre Chub Bryden  ·  Linhagem do Wat Pho · Bangkok',

    // Training
    trainingLabel: 'Formação  ·  Training',
    trainingH3Line1: 'Quatro anos sob',
    trainingH3Line2: 'orientação direta.',
    trainingP1: 'Aos dezesseis anos, Cherie ingressou em um treinamento intensivo formal sob a Mestre Chub Bryden, terapeuta sênior da linhagem de Medicina Tradicional do Wat Pho, com mais de trinta anos de experiência.',
    trainingP2: 'Durante quatro anos, viveu e treinou sob sua orientação direta, recebendo instrução rigorosa em métodos terapêuticos tailandeses tradicionais, precisão anatômica, avaliação clínica e prática disciplinada de tratamento.',
    stat1Unit: 'anos',
    stat1Label: 'de experiência da Mestre Chub Bryden',
    stat2Unit: 'anos',
    stat2Label: 'de formação intensiva em regime de residência',
    stat3Label: 'Linhagem de Medicina Tradicional Tailandesa · Bangkok',

    // Japan video
    japanLabel: 'Japão  ·  Massagem às cegas',
    japanCaption: 'O toque que dispensa a visão.',

    // Journey
    journeyLabel: 'Trajetória  ·  Tailândia · Reino Unido · Europa · Brasil',
    journeyP1: 'Com mais de treze anos de experiência profissional na Tailândia, Europa e Brasil, Cherie desenvolveu uma abordagem clínica que integra a linhagem terapêutica tailandesa tradicional com bodywork estrutural avançado e compreensão terapêutica baseada em movimento.',
    journeyP2: 'Esse trabalho culminou na criação da CherieThai Clínica, um instituto terapêutico boutique operando entre São Paulo e Rio de Janeiro, oferecendo tratamentos altamente personalizados para restaurar a mobilidade, melhorar o equilíbrio estrutural e apoiar a saúde física a longo prazo.',

    // Karl header
    karlLabel: 'Co-Fundador  ·  Karl Georges',
    karlHeroLine1: 'Do mundo acadêmico',
    karlHeroLine2: 'ao caminho monástico.',

    // Karl origins
    karlOriginsLabel: 'Trajetória  ·  Rio de Janeiro · Ban Tam Ye',
    karlH3Line1: 'Dez anos de cátedra.',
    karlH3Line2: 'Tudo abandonado.',
    karlP1: 'Karl foi professor universitário na UFRJ durante dez anos, com formação em design gráfico. No auge de sua carreira acadêmica, tomou a decisão de abandonar tudo para seguir um caminho radicalmente diferente: tornar-se terapeuta de massagem tradicional tailandesa.',
    karlP2: 'Treinado por Cherie desde o zero absoluto, Karl desenvolveu uma sensibilidade técnica e uma profundidade de compreensão que o levaram naturalmente ao caminho tradicional — além da clínica, em direção às próprias origens da prática.',
    karlPortraitCaption: 'Rio de Janeiro, Brasil  ·  Ban Tam Ye, Tailândia',

    // Karl quote
    karlQuote: '"O primeiro estrangeiro a ser pessoalmente convidado pelo Grande Mestre Ajarn Torng para se tornar monge no templo Ban Tam Ye."',
    karlQuoteAttrib: 'Ban Tam Ye  ·  Tailândia',

    // Karl monastic
    karlMonasticLabel: 'Caminho Monástico  ·  Ban Tam Ye',
    karlMonasticH3Line1: 'Três meses no templo.',
    karlMonasticH3Line2: '410 quilómetros de peregrinação.',
    karlMonasticP1: 'Karl foi convidado pessoalmente pelo Grande Mestre Ajarn Torng para se ordenar monge no templo Ban Tam Ye — tornando-se o primeiro estrangeiro a receber essa honra. Durante três meses, viveu o quotidiano monástico, documentando a vida dentro do templo e a prática em sua forma mais pura.',
    karlMonasticP2: 'Integrou uma peregrinação de 410 quilómetros com trinta outros monges, tornando-se o primeiro estrangeiro a realizar esse percurso. Uma jornada que moldou definitivamente a sua compreensão da tradição terapêutica tailandesa como prática espiritual e corporal indissociáveis.',
    karlStat1Unit: 'anos',
    karlStat1Label: 'como professor na UFRJ em design gráfico',
    karlStat2Unit: 'meses',
    karlStat2Label: 'em residência monástica no templo Ban Tam Ye',
    karlStat3Unit: 'km',
    karlStat3Label: 'de peregrinação com 30 monges — o primeiro estrangeiro',
    karlStat4Label: 'Grande Mestre · Ban Tam Ye · Tailândia',

    // Institute closing
    instituteLabel: 'Instituto  ·  Educação',
    instituteP: 'A CherieThai também funciona como instituto de educação, formando terapeutas que buscam maestria avançada, precisão clínica e conhecimento terapêutico baseado em linhagem, continuando um compromisso com a excelência, a disciplina e o respeito pela inteligência do corpo humano.',
    instituteCta: 'Conheça o Instituto',
  },

  EN: {
    // Opening header
    aboutLabel: 'About Cherie  ·  About CherieThai',
    heroLine1: 'Born in Phimai.',
    heroLine2: 'Raised between two worlds.',
    heroLine3: 'Established in Brazil.',

    // Origins (text provided by Cherie)
    originsLabel: 'Origins  ·  Phimai, Thailand  ·  United Kingdom',
    originsP1: 'Cherie was born in Phimai, Thailand, and raised in a rural village within a family of rice farmers, where physical work, resilience, and care for the body were part of everyday life.',
    originsP2: 'At the age of four, she began practicing massage within her family, developing an early tactile sensitivity that would later shape her professional path.',
    originsP3: 'Part of her formation took place in the United Kingdom, where she grew up within a Thai community — existing between two worlds, where the traditions of her people were preserved far from their homeland. It was within this bridge between cultures that Cherie developed a deeper understanding of what it means to carry a therapeutic tradition across borders.',
    originsBlockquote: 'Her first technical foundation came from her uncle, who taught her traditional therapeutic techniques used to support field workers after long days of manual labor. Through him, she learned back-stepping techniques and the precise localization of therapeutic pressure points, developing from a young age a practical understanding of effective therapeutic touch.',

    // Portrait captions
    portraitCaption: 'Phimai, Thailand  ·  United Kingdom  ·  São Paulo, Brazil',
    mastersCaption: 'Masters · Thailand',
    healerCaption: 'Healer · Traditional lineage',
    hometownCaption: 'Hometown · Thailand',
    schoolCaption: 'School · Phimai, Thailand',

    // Pull quote
    pullQuote: '"Four years living and training under direct guidance. The same discipline that guides every session today."',
    pullQuoteAttrib: 'Master Chub Bryden  ·  Wat Pho Lineage · Bangkok',

    // Training
    trainingLabel: 'Training',
    trainingH3Line1: 'Four years under',
    trainingH3Line2: 'direct mentorship.',
    trainingP1: 'At sixteen, Cherie entered an intensive formal training under Master Chub Bryden, a senior therapist within the Wat Pho lineage of Thai Traditional Medicine, with more than thirty years of experience.',
    trainingP2: 'Over the course of four years, she lived and trained under his direct guidance, receiving rigorous instruction in traditional Thai therapeutic methods, anatomical precision, clinical assessment, and disciplined therapeutic practice.',
    stat1Unit: 'years',
    stat1Label: 'of experience from Master Chub Bryden',
    stat2Unit: 'years',
    stat2Label: 'of intensive residential training',
    stat3Label: 'Thai Traditional Medicine Lineage · Bangkok',

    // Japan video
    japanLabel: 'Japan  ·  Blindfolded massage',
    japanCaption: '"The touch that no longer depends on sight."',

    // Journey
    journeyLabel: 'Trajectory  ·  Thailand · United Kingdom · Europe · Brazil',
    journeyP1: 'With more than thirteen years of professional experience across Thailand, Europe, and Brazil, Cherie developed a clinical approach that integrates the traditional Thai therapeutic lineage with advanced structural bodywork and movement-based therapeutic understanding.',
    journeyP2: 'This work ultimately led to the creation of CherieThai Clínica — a boutique therapeutic institute operating between São Paulo and Rio de Janeiro, offering highly individualized treatments designed to restore mobility, improve structural balance, and support long-term physical wellbeing.',

    // Karl header
    karlLabel: 'Co-Founder  ·  Karl Georges',
    karlHeroLine1: 'From the academic world',
    karlHeroLine2: 'to the monastic path.',

    // Karl origins
    karlOriginsLabel: 'Journey  ·  Rio de Janeiro · Ban Tam Ye',
    karlH3Line1: 'Ten years in academia.',
    karlH3Line2: 'All of it left behind.',
    karlP1: 'Karl was a university professor at UFRJ for ten years, with a background in graphic design. At the height of his academic career, he made the decision to leave everything behind and follow a radically different path: to become a traditional Thai massage therapist.',
    karlP2: 'Trained by Cherie from the very beginning, Karl developed a technical sensitivity and depth of understanding that naturally led him toward the traditional path — beyond the clinic, toward the very origins of the practice.',
    karlPortraitCaption: 'Rio de Janeiro, Brazil  ·  Ban Tam Ye, Thailand',

    // Karl quote
    karlQuote: '"The first foreigner to be personally invited by Grand Master Ajarn Torng to become a monk at the Ban Tam Ye temple."',
    karlQuoteAttrib: 'Ban Tam Ye  ·  Thailand',

    // Karl monastic
    karlMonasticLabel: 'Monastic Path  ·  Ban Tam Ye',
    karlMonasticH3Line1: 'Three months in the temple.',
    karlMonasticH3Line2: '410 kilometres of pilgrimage.',
    karlMonasticP1: 'Karl was personally invited by Grand Master Ajarn Torng to be ordained as a monk at the Ban Tam Ye temple — becoming the first foreigner to receive that honour. For three months, he lived the monastic daily life, documenting life within the temple and the practice in its purest form.',
    karlMonasticP2: 'He joined a 410-kilometre pilgrimage alongside thirty other monks, becoming the first foreigner to complete the journey. An experience that definitively shaped his understanding of the Thai therapeutic tradition as an inseparable spiritual and physical practice.',
    karlStat1Unit: 'years',
    karlStat1Label: 'as professor at UFRJ in graphic design',
    karlStat2Unit: 'months',
    karlStat2Label: 'in monastic residency at the Ban Tam Ye temple',
    karlStat3Unit: 'km',
    karlStat3Label: 'of pilgrimage with 30 monks — the first foreigner',
    karlStat4Label: 'Grand Master · Ban Tam Ye · Thailand',

    // Institute closing
    instituteLabel: 'Institute  ·  Education',
    instituteP: 'CherieThai also operates as an institute of education, training therapists who seek advanced mastery, clinical precision, and lineage-based therapeutic knowledge — continuing a commitment to excellence, discipline, and respect for the intelligence of the human body.',
    instituteCta: 'Discover the Institute',
  },
}

export default function Biography() {
  const portraitRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: portraitScroll } = useScroll({
    target: portraitRef,
    offset: ['start end', 'end start'],
  })
  const portraitY = useTransform(portraitScroll, [0, 1], ['-6%', '6%'])
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <section id="about" className="bg-dark-moss overflow-hidden">

      {/* ── Opening header ── */}
      <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-36 pb-16 md:pb-20 border-b border-sand/10">
        <motion.p {...inView()} className="label-text text-sage mb-10">
          {t.aboutLabel}
        </motion.p>
        <motion.h2
          className="font-cormorant font-light text-ivory"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 6.5rem)', lineHeight: 1.02 }}
          {...inView(0.1)}
        >
          {t.heroLine1}<br />
          <span className="text-sage/70">{t.heroLine2}</span><br />
          {t.heroLine3}
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
            <p className="label-text text-sage/35 text-xs">{t.portraitCaption}</p>
          </div>
        </motion.div>

        {/* Origins text */}
        <div className="lg:w-[55%] px-6 md:px-12 lg:px-14 xl:px-20 py-16 md:py-24 lg:py-32 flex items-center">
          <div className="max-w-xl">

            <motion.p {...inView()} className="label-text text-sage/55 mb-8">
              {t.originsLabel}
            </motion.p>

            <motion.div {...inView(0.1)} className="body-text text-sand/70 space-y-5 text-base md:text-lg leading-loose mb-10">
              <p>{t.originsP1}</p>
              <p>{t.originsP2}</p>
              <p>{t.originsP3}</p>
            </motion.div>

            <motion.div {...inView(0.2)} className="border-l border-sand/20 pl-6">
              <p className="body-text text-sand/55 text-sm md:text-base leading-loose">
                {t.originsBlockquote}
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Masters & Witch Doctor photos ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-sand/10">

        {/* Group photo — Cherie with female masters */}
        <motion.div
          className="relative overflow-hidden border-b md:border-b-0 md:border-r border-sand/10"
          style={{ aspectRatio: '3/4' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <Image
            src="/site-img-1.jpg"
            alt="Cherie com suas mestras na Tailândia"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,31,27,0.7) 0%, transparent 50%)' }} />
          <div className="absolute bottom-6 left-6">
            <p className="label-text text-sage/50 text-xs">{t.mastersCaption}</p>
          </div>
        </motion.div>

        {/* Witch doctor photo */}
        <motion.div
          className="relative overflow-hidden"
          style={{ aspectRatio: '3/4' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.0, delay: 0.12, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <Image
            src="/masters-witchdoctor.jpg"
            alt="Mestra curandeira — linhagem tradicional tailandesa"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,31,27,0.7) 0%, transparent 50%)' }} />
          <div className="absolute bottom-6 left-6">
            <p className="label-text text-sage/50 text-xs">{t.healerCaption}</p>
          </div>
        </motion.div>

      </div>

      {/* ── Hometown + School photos ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-sand/10">

        {/* Hometown */}
        <motion.div
          className="relative overflow-hidden border-b md:border-b-0 md:border-r border-sand/10"
          style={{ aspectRatio: '3/4' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <Image
            src="/bio-hometown.jpg"
            alt="Cherie com crianças da sua região natal na Tailândia"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,31,27,0.65) 0%, transparent 45%)' }} />
          <div className="absolute bottom-6 left-6">
            <p className="label-text text-sage/50 text-xs">{t.hometownCaption}</p>
          </div>
        </motion.div>

        {/* School */}
        <motion.div
          className="relative overflow-hidden"
          style={{ aspectRatio: '3/4' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2, delay: 0.12, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <Image
            src="/bio-school.jpg"
            alt="Cherie na escola em Phimai, nordeste da Tailândia"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,31,27,0.65) 0%, transparent 45%)' }} />
          <div className="absolute bottom-6 left-6">
            <p className="label-text text-sage/50 text-xs">{t.schoolCaption}</p>
          </div>
        </motion.div>

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
          {t.pullQuote}
        </blockquote>
        <p className="label-text text-sage/35 mt-6 text-xs">
          {t.pullQuoteAttrib}
        </p>
      </motion.div>

      {/* ── Training lineage ── */}
      <div className="flex flex-col lg:flex-row border-b border-sand/10">

        {/* Training text */}
        <div className="lg:w-[52%] px-6 md:px-12 lg:px-14 xl:px-20 py-16 md:py-24 lg:py-32 flex items-start">
          <div className="max-w-lg">

            <motion.p {...inView()} className="label-text text-sage/55 mb-8">
              {t.trainingLabel}
            </motion.p>

            <motion.h3
              className="font-cormorant font-light text-ivory mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.08 }}
              {...inView(0.1)}
            >
              {t.trainingH3Line1}<br />{t.trainingH3Line2}
            </motion.h3>

            <motion.div {...inView(0.2)} className="body-text text-sand/65 space-y-5 text-sm md:text-base leading-loose">
              <p>{t.trainingP1}</p>
              <p>{t.trainingP2}</p>
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
                { figure: '+ 30', unit: t.stat1Unit, label: t.stat1Label },
                { figure: '4', unit: t.stat2Unit, label: t.stat2Label },
                { figure: 'Wat Pho', unit: null, label: t.stat3Label },
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

      {/* ── Blindfolded massage video — Japan ── */}
      <motion.div
        className="relative border-b border-sand/10 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        {/* Label overlay */}
        <div className="absolute top-6 left-6 md:top-10 md:left-12 lg:left-16 z-10">
          <p className="label-text text-sage/50" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
            {t.japanLabel}
          </p>
        </div>

        {/* Video embed — shorts 9:16, full width */}
        <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
          <LazyYouTubeShort youtubeId="9TQyuUUYkVA" />
        </div>

        {/* Caption */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 lg:right-16 z-10 text-right">
          <p className="font-cormorant font-light italic text-sand/45" style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}>
            {t.japanCaption}
          </p>
        </div>
      </motion.div>

      {/* ── Journey ── */}
      <div className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-b border-sand/10">
        <div className="max-w-5xl">

          <motion.p {...inView()} className="label-text text-sage/55 mb-8">
            {t.journeyLabel}
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6"
            {...inView(0.1)}
          >
            <div className="body-text text-sand/65 space-y-5 text-sm md:text-base leading-loose">
              <p>{t.journeyP1}</p>
            </div>
            <div className="body-text text-sand/55 space-y-5 text-sm md:text-base leading-loose">
              <p>{t.journeyP2}</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Karl: section header ── */}
      <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-36 pb-16 md:pb-20 border-t border-sand/10 border-b border-sand/10">
        <motion.p {...inView()} className="label-text text-sage mb-10">
          {t.karlLabel}
        </motion.p>
        <motion.h2
          className="font-cormorant font-light text-ivory"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 6.5rem)', lineHeight: 1.02 }}
          {...inView(0.1)}
        >
          {t.karlHeroLine1}<br />
          <span className="text-sage/70">{t.karlHeroLine2}</span>
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
            src="/portrait-karl-bio.jpg"
            alt="Karl Georges — Co-Fundador Instituto CherieThai"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,31,27,0.5) 0%, transparent 60%)' }} />
          <div className="absolute bottom-7 left-7">
            <p className="label-text text-sage/35 text-xs">{t.karlPortraitCaption}</p>
          </div>
        </motion.div>

        {/* Karl: origins text */}
        <div className="lg:w-[55%] px-6 md:px-12 lg:px-14 xl:px-20 py-16 md:py-24 lg:py-32 flex items-center">
          <div className="max-w-xl">

            <motion.p {...inView()} className="label-text text-sage/55 mb-8">
              {t.karlOriginsLabel}
            </motion.p>

            <motion.h3
              className="font-cormorant font-light text-ivory mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.08 }}
              {...inView(0.1)}
            >
              {t.karlH3Line1}<br />{t.karlH3Line2}
            </motion.h3>

            <motion.div {...inView(0.2)} className="body-text text-sand/65 space-y-5 text-sm md:text-base leading-loose">
              <p>{t.karlP1}</p>
              <p>{t.karlP2}</p>
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
          {t.karlQuote}
        </blockquote>
        <p className="label-text text-sage/35 mt-6 text-xs">
          {t.karlQuoteAttrib}
        </p>
      </motion.div>

      {/* ── Karl: monastic path ── */}
      <div className="flex flex-col lg:flex-row border-b border-sand/10">

        {/* Monastic text */}
        <div className="lg:w-[52%] px-6 md:px-12 lg:px-14 xl:px-20 py-16 md:py-24 lg:py-32 flex items-start">
          <div className="max-w-lg">

            <motion.p {...inView()} className="label-text text-sage/55 mb-8">
              {t.karlMonasticLabel}
            </motion.p>

            <motion.h3
              className="font-cormorant font-light text-ivory mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.08 }}
              {...inView(0.1)}
            >
              {t.karlMonasticH3Line1}<br />{t.karlMonasticH3Line2}
            </motion.h3>

            <motion.div {...inView(0.2)} className="body-text text-sand/65 space-y-5 text-sm md:text-base leading-loose">
              <p>{t.karlMonasticP1}</p>
              <p>{t.karlMonasticP2}</p>
            </motion.div>

          </div>
        </div>

        {/* Karl stats panel */}
        <div className="lg:w-[48%] bg-near-black px-6 md:px-12 lg:px-14 xl:px-20 py-16 md:py-24 lg:py-32 flex items-center">
          <div className="w-full">
            <motion.div {...inView()} className="space-y-10">
              {[
                { figure: '10', unit: t.karlStat1Unit, label: t.karlStat1Label },
                { figure: '3', unit: t.karlStat2Unit, label: t.karlStat2Label },
                { figure: '410', unit: t.karlStat3Unit, label: t.karlStat3Label },
                { figure: 'Ajarn Torng', unit: null, label: t.karlStat4Label },
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
            <p className="label-text text-sage/55 mb-6">{t.instituteLabel}</p>
            <p className="body-text text-sand/55 text-sm md:text-base leading-loose">
              {t.instituteP}
            </p>
          </motion.div>

          <motion.div {...inView(0.15)} className="shrink-0">
            <a
              href="#institute"
              className="label-text text-sand/45 hover:text-sand transition-colors duration-300 flex items-center gap-3"
            >
              {t.instituteCta}
              <span aria-hidden>——→</span>
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
