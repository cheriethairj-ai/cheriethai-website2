'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import CustomCursor from '@/components/CustomCursor'
import LanguageToggle from '@/components/LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, delay, ease: [0.25, 0.1, 0.25, 1.0] },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, delay, ease: 'easeOut' },
})

const rooms = {
  PT: [
    {
      id: 'earth',
      name: 'Earth Lodge',
      tag: 'SUÍTE PRIVATIVA',
      description: [
        'Discretamente encravado na paisagem tropical, o Earth Lodge oferece um retiro mais privativo, mantendo uma profunda conexão com o ambiente natural.',
        'Com seus interiores espaçosos, cama de casal, varanda privativa e banheira de imersão ao ar livre, cada detalhe foi pensado para convidar ao descanso entre as sessões. Cercado pela selva e pelos sons da natureza, oferece um ritmo mais lento onde corpo e mente podem se recuperar plenamente após cada dia de aprendizado.',
        'Para os hóspedes que buscam maior privacidade sem perder a essência do retiro, o Earth Lodge proporciona uma experiência de conforto, quietude e imersão em perfeito equilíbrio.',
      ],
      features: ['Suíte privativa', 'Cama de casal', 'Banheira de imersão ao ar livre', 'Varanda privativa', 'Vista para a selva', 'Ar-condicionado'],
      individual: 'R$ 11.400',
      couple: 'R$ 18.200',
      perPerson: 'R$ 9.100 por pessoa',
      photos: ['/retreat/resort-3.jpg', '/retreat/resort-4.jpg', '/retreat/resort-5.jpg'],
    },
    {
      id: 'hill',
      name: 'Hill Haven',
      tag: 'SUÍTE COM VISTA',
      description: [
        'Instalado acima do vale, o Hill Haven abraça a beleza dramática de Krabi por meio de grandes janelas e vistas sem obstáculos para jardins exuberantes e falésias de calcário majestosas.',
        'Seu design contemporâneo e luminoso permite que a natureza se torne parte do espaço, com cada amanhecer e a luz em transformação renovando o ambiente ao longo do dia. Uma varanda privativa oferece o lugar perfeito para ler, refletir ou simplesmente pausar entre as sessões enquanto se contempla o vale lá embaixo.',
        'O Hill Haven oferece uma atmosfera tranquila onde o luxo não está no excesso, mas no espaço, na luz e em uma conexão extraordinária com a paisagem.',
      ],
      features: ['Suíte privativa', 'Banheiro exclusivo', 'Varanda com vista para o vale', 'Janelas panorâmicas', 'Vista para as falésias', 'Ar-condicionado'],
      individual: 'R$ 9.600',
      couple: 'R$ 14.500',
      perPerson: 'R$ 7.250 por pessoa',
      photos: ['/retreat/resort-2.jpg', '/retreat/resort-1.jpg'],
    },
    {
      id: 'harmony',
      name: 'Harmony House',
      tag: 'CASA COMPARTILHADA',
      description: [
        'Projetada para quem aprecia o espírito comunitário da vida em retiro, a Harmony House oferece um espaço compartilhado acolhedor onde a conexão acontece naturalmente.',
        'Com capacidade para até oito hóspedes em um dormitório misto cuidadosamente planejado, a casa conta com beliches confortáveis, dois banheiros compartilhados, luz natural abundante e vistas para os jardins tropicais e as falésias ao redor.',
        'É onde as manhãs começam tomando café, as tardes se abrem em conversas, e amizades se formam com pessoas que viajaram de todo o mundo com o mesmo propósito — aprender, crescer e se imergir na experiência do retiro.',
        'Para muitos alunos, a Harmony House se torna muito mais do que uma acomodação compartilhada. Ela se torna parte da própria jornada.',
      ],
      features: ['8 camas individuais', '2 banheiros compartilhados', 'Misto', 'Vista para os jardins tropicais', 'Luz natural abundante', 'Ar-condicionado'],
      individual: 'R$ 6.600',
      couple: null,
      perPerson: null,
      photos: ['/retreat/harmony-1.jpg', '/retreat/harmony-2.jpg', '/retreat/harmony-3.jpg'],
    },
  ],
  EN: [
    {
      id: 'earth',
      name: 'Earth Lodge',
      tag: 'PRIVATE SUITE',
      description: [
        'Tucked quietly within the tropical landscape, Earth Lodge offers a more private retreat while remaining deeply connected to the natural surroundings.',
        'With its spacious interiors, queen bed, private terrace and outdoor soaking tub, every detail has been designed to invite rest between training sessions. Surrounded by jungle and the sounds of nature, it offers a slower rhythm where body and mind can fully recover after each day of learning.',
        'For guests seeking greater privacy without losing the essence of the retreat, Earth Lodge provides a beautifully balanced experience of comfort, stillness and immersion.',
      ],
      features: ['Private suite', 'Queen bed', 'Outdoor soaking tub', 'Private terrace', 'Jungle view', 'Air conditioning'],
      individual: 'R$ 11,400',
      couple: 'R$ 18,200',
      perPerson: 'R$ 9,100 per person',
      photos: ['/retreat/resort-3.jpg', '/retreat/resort-4.jpg', '/retreat/resort-5.jpg'],
    },
    {
      id: 'hill',
      name: 'Hill Haven',
      tag: 'VALLEY VIEW SUITE',
      description: [
        'Perched above the valley, Hill Haven embraces the dramatic beauty of Krabi through expansive windows and uninterrupted views of lush gardens and towering limestone cliffs.',
        'Its bright, contemporary design allows nature to become part of the living space, with every sunrise and shifting light transforming the room throughout the day. A private balcony provides the perfect place to read, reflect or simply pause between training sessions while overlooking the valley below.',
        'Hill Haven offers a peaceful atmosphere where luxury is found not in excess, but in space, light and an extraordinary connection with the landscape.',
      ],
      features: ['Private suite', 'En-suite bathroom', 'Private balcony with valley view', 'Panoramic windows', 'Limestone cliff views', 'Air conditioning'],
      individual: 'R$ 9,600',
      couple: 'R$ 14,500',
      perPerson: 'R$ 7,250 per person',
      photos: ['/retreat/resort-2.jpg', '/retreat/resort-1.jpg'],
    },
    {
      id: 'harmony',
      name: 'Harmony House',
      tag: 'SHARED HOUSE',
      description: [
        'Designed for those who enjoy the communal spirit of retreat life, Harmony House offers a welcoming shared space where connection happens naturally.',
        'Accommodating up to eight guests in a thoughtfully designed mixed dormitory, the house features comfortable bunk beds, two shared bathrooms, abundant natural light and views across the tropical gardens and surrounding limestone cliffs.',
        'It\'s where mornings begin over coffee, evenings unfold through shared conversations, and friendships are formed with people who have travelled from around the world for the same purpose — to learn, grow and immerse themselves in the retreat experience.',
        'For many students, Harmony House becomes far more than shared accommodation. It becomes part of the journey itself.',
      ],
      features: ['8 individual beds', '2 shared bathrooms', 'Mixed gender', 'Tropical garden views', 'Abundant natural light', 'Air conditioning'],
      individual: 'R$ 6,600',
      couple: null,
      perPerson: null,
      photos: ['/retreat/harmony-1.jpg', '/retreat/harmony-2.jpg', '/retreat/harmony-3.jpg'],
    },
  ],
}

type RoomData = Omit<typeof rooms.PT[0], 'description'> & { description: string | string[] }
function RoomCard({ room, lang }: { room: RoomData; lang: 'PT' | 'EN' }) {
  const [activePhoto, setActivePhoto] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="grid grid-cols-1 md:grid-cols-2 gap-0"
      style={{ borderTop: '1px solid rgba(220,201,160,0.08)' }}
    >
      {/* Photo side */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3', minHeight: '320px' }}>
        <Image
          src={room.photos[activePhoto]}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="transition-all duration-700"
        />
        {/* Photo switcher dots */}
        {room.photos.length > 1 && (
          <div className="absolute bottom-4 left-4 flex gap-2">
            {room.photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setActivePhoto(i)}
                style={{
                  width: '6px', height: '6px', borderRadius: '50%', cursor: 'none',
                  background: i === activePhoto ? 'rgba(220,201,160,0.9)' : 'rgba(220,201,160,0.3)',
                  border: 'none', padding: 0, transition: 'background 0.3s',
                }}
              />
            ))}
          </div>
        )}
        {/* Tag overlay */}
        <div className="absolute top-4 left-4">
          <span
            className="label-text"
            style={{
              fontSize: '0.42rem', letterSpacing: '0.22em',
              color: 'rgba(220,201,160,0.8)',
              background: 'rgba(13,17,14,0.65)',
              padding: '4px 10px',
              backdropFilter: 'blur(4px)',
            }}
          >
            {room.tag}
          </span>
        </div>
      </div>

      {/* Text side */}
      <div
        className="flex flex-col justify-between px-8 py-10"
        style={{ background: 'rgba(13,17,14,0.5)' }}
      >
        <div>
          <h3
            className="font-cormorant font-light text-ivory"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 0.95, marginBottom: '1.5rem' }}
          >
            {room.name}
          </h3>
          <div style={{ marginBottom: '2rem' }}>
            {(Array.isArray(room.description) ? room.description : [room.description]).map((para, i, arr) => (
              <p
                key={i}
                className="body-text text-sand/55"
                style={{
                  fontSize: 'clamp(0.825rem, 1.2vw, 0.9rem)',
                  lineHeight: 1.85,
                  marginBottom: i < arr.length - 1 ? '1rem' : 0,
                  fontStyle: i === arr.length - 1 ? 'italic' : 'normal',
                  color: i === arr.length - 1 ? 'rgba(220,201,160,0.35)' : undefined,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Features */}
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0' }}>
            {room.features.map((f, i) => (
              <li
                key={i}
                className="label-text text-sage/40 flex items-center gap-3"
                style={{ fontSize: '0.46rem', letterSpacing: '0.18em', paddingBottom: '0.5rem' }}
              >
                <span className="text-sage/25" style={{ fontSize: '0.35rem' }}>◆</span>
                {f.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div style={{ borderTop: '1px solid rgba(220,201,160,0.08)', paddingTop: '1.5rem' }}>
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between">
              <span className="label-text text-sage/35" style={{ fontSize: '0.46rem', letterSpacing: '0.2em' }}>
                {lang === 'PT' ? 'INDIVIDUAL' : 'SINGLE'}
              </span>
              <span className="font-cormorant font-light text-sand/80" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}>
                {room.individual}
              </span>
            </div>
            {room.couple && (
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="label-text text-sage/35" style={{ fontSize: '0.46rem', letterSpacing: '0.2em' }}>
                    {lang === 'PT' ? 'CASAL' : 'COUPLE'}
                  </span>
                  {room.perPerson && (
                    <span className="label-text text-sage/22 ml-3" style={{ fontSize: '0.4rem', letterSpacing: '0.14em' }}>
                      ({room.perPerson})
                    </span>
                  )}
                </div>
                <span className="font-cormorant font-light text-sand/80" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}>
                  {room.couple}
                </span>
              </div>
            )}
          </div>
          <p className="label-text text-sage/20 mt-3" style={{ fontSize: '0.4rem', letterSpacing: '0.16em' }}>
            {lang === 'PT' ? '* ALIMENTAÇÃO NÃO INCLUÍDA' : '* FOOD NOT INCLUDED'}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function RetiroPage() {
  const { lang } = useLanguage()
  const roomList = rooms[lang]

  return (
    <>
      <CustomCursor />

      <main style={{ background: '#0D110E', minHeight: '100svh', color: '#F5F0E8' }}>

        {/* ── Navigation ─────────────────────────────────────────────────── */}
        <motion.header
          {...fadeIn(0)}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 py-6"
          style={{ background: 'linear-gradient(to bottom, rgba(13,17,14,0.95) 0%, transparent 100%)' }}
        >
          <Link
            href="/"
            className="label-text text-sand/40 hover:text-sand/80 transition-colors duration-300"
            style={{ fontSize: '0.52rem', letterSpacing: '0.25em' }}
          >
            CHERIETHAI
          </Link>
          <LanguageToggle />
        </motion.header>

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <div className="relative w-full" style={{ height: '100svh', maxHeight: '900px' }}>
          <Image
            src="/retreat/resort-1.jpg"
            alt="CherieThai Retreat Krabi"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(13,17,14,0.3) 0%, rgba(13,17,14,0.15) 40%, rgba(13,17,14,0.75) 100%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-16"
            style={{ paddingBottom: 'clamp(3rem, 8vw, 6rem)' }}
          >
            <motion.p
              {...fadeUp(0.2)}
              className="label-text text-sage/50 mb-4"
              style={{ fontSize: '0.5rem', letterSpacing: '0.3em' }}
            >
              INSTITUTO CHERIETHAI
            </motion.p>
            <motion.h1
              {...fadeUp(0.35)}
              className="display-section text-ivory"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)', lineHeight: 0.92, marginBottom: '1.5rem' }}
            >
              {lang === 'PT' ? 'Retiro na\nTailândia' : 'Thailand\nRetreat'}
            </motion.h1>
            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-wrap items-center gap-6"
            >
              <span className="label-text text-sand/60" style={{ fontSize: '0.52rem', letterSpacing: '0.22em' }}>
                11 – 14 {lang === 'PT' ? 'JANEIRO' : 'JANUARY'} 2025
              </span>
              <span className="text-sage/25" style={{ fontSize: '0.4rem' }}>◆</span>
              <span className="label-text text-sand/60" style={{ fontSize: '0.52rem', letterSpacing: '0.22em' }}>
                KRABI · {lang === 'PT' ? 'SUL DA TAILÂNDIA' : 'SOUTHERN THAILAND'}
              </span>
            </motion.div>
          </div>
        </div>

        {/* ── Intro ──────────────────────────────────────────────────────── */}
        <div
          className="px-6 md:px-12 lg:px-16"
          style={{ paddingTop: 'clamp(4rem, 10vw, 8rem)', paddingBottom: 'clamp(4rem, 10vw, 8rem)' }}
        >
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="label-text text-sage/35 mb-8"
              style={{ fontSize: '0.5rem', letterSpacing: '0.28em' }}
            >
              {lang === 'PT' ? 'SOBRE O RETIRO' : 'ABOUT THE RETREAT'}
            </motion.p>

            {/* Opening — large display paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="font-cormorant font-light text-ivory/80"
              style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', lineHeight: 1.45, marginBottom: '2.5rem', maxWidth: '58ch' }}
            >
              {lang === 'PT'
                ? 'O CherieThai International Retreat é uma experiência de treinamento imersivo de 30 horas realizada no Voasis Valley, um retiro de luxo isolado encravado nas montanhas de calcário de Krabi, no sul da Tailândia.'
                : 'The CherieThai International Retreat is a 30-hour immersive training experience held at Voasis Valley, a secluded luxury retreat nestled within the limestone mountains of Krabi, southern Thailand.'}
            </motion.p>

            {/* Body paragraphs */}
            {(lang === 'PT' ? [
              'Ao longo de quatro dias intensivos, os participantes viverão, aprenderão e treinarão juntos em um ambiente projetado para a imersão completa. Cercados pela floresta tropical e pelas dramáticas falésias de calcário, o retiro oferece a rara oportunidade de se afastar das distrações cotidianas e se dedicar inteiramente ao estudo do Método CherieThai.',
              'Estruturado em torno da mentoria direta, o retiro oferece quatro dias ininterruptos de imersão total. Viver e treinar juntos cria um ambiente onde o aprendizado se torna contínuo, permitindo-me guiar, desafiar e aprimorar a prática de cada aluno com um nível de atenção que vai muito além das sessões de treinamento formais.',
              'Ensinar na Tailândia tem um significado profundamente pessoal. O Método CherieThai nasceu das tradições da minha terra natal antes de ser refinado através da anatomia moderna, da biomecânica e de anos de prática clínica. Aprender aqui permite que os alunos vivenciem o método no país onde suas fundações nasceram, ao mesmo tempo em que desenvolvem uma compreensão mais profunda da cultura que continua a moldar o meu trabalho.',
            ] : [
              'Over four intensive days, participants will live, learn and train together in an environment designed for complete immersion. Surrounded by tropical rainforest and dramatic limestone cliffs, the retreat offers the rare opportunity to step away from everyday distractions and dedicate yourself entirely to the study of the CherieThai Method.',
              'Designed around direct mentorship, the retreat offers four uninterrupted days of complete immersion. Living and training together creates an environment where learning becomes continuous, allowing me to guide, challenge and refine each student\'s practice with a level of attention that extends far beyond formal training sessions.',
              'Teaching in Thailand holds deep personal significance. The CherieThai Method was born from the traditions of my homeland before being refined through modern anatomy, biomechanics and years of clinical practice. Learning here allows students to experience the method in the country where its foundations were born, while gaining a deeper appreciation for the culture that continues to shape my work today.',
            ]).map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.12 + i * 0.07 }}
                className="body-text text-sand/50"
                style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1rem)', lineHeight: 1.9, maxWidth: '60ch', marginBottom: '1.5rem' }}
              >
                {para}
              </motion.p>
            ))}

            {/* Certificate credential */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="mt-8"
              style={{
                borderLeft: '1px solid rgba(170,182,162,0.25)',
                paddingLeft: '1.25rem',
              }}
            >
              <p
                className="body-text text-sand/40"
                style={{ fontSize: 'clamp(0.825rem, 1.2vw, 0.9rem)', lineHeight: 1.8, maxWidth: '52ch' }}
              >
                {lang === 'PT'
                  ? 'Os participantes aprovados receberão o Certificado Internacional UTTMS (30 Horas), uma qualificação oficialmente reconhecida pelo governo tailandês.'
                  : 'Successful participants will be awarded the International UTTMS Certificate (30 Hours), a qualification officially recognised by the Thai government.'}
              </p>
            </motion.div>

          </div>

          {/* What's included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16"
            style={{ maxWidth: '680px' }}
          >
            <div>
              <p className="label-text text-sage/35 mb-5" style={{ fontSize: '0.46rem', letterSpacing: '0.26em' }}>
                {lang === 'PT' ? 'INCLUÍDO' : 'INCLUDED'}
              </p>
              {(lang === 'PT'
                ? ['4 dias de curso completo CherieThai', 'Acomodação (conforme escolha do quarto)', 'Acesso às áreas comuns do resort', 'Piscina com vista para as montanhas']
                : ['4-day full CherieThai course', 'Accommodation (as per room choice)', 'Access to resort common areas', 'Swimming pool with mountain views']
              ).map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <span className="text-sage/40 shrink-0" style={{ fontSize: '0.35rem', marginTop: '0.4em' }}>◆</span>
                  <p className="body-text text-sand/55" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="label-text text-sage/35 mb-5" style={{ fontSize: '0.46rem', letterSpacing: '0.26em' }}>
                {lang === 'PT' ? 'NÃO INCLUÍDO' : 'NOT INCLUDED'}
              </p>
              {(lang === 'PT'
                ? ['Alimentação e bebidas', 'Passagens aéreas', 'Transfers', 'Passeios e atividades extras']
                : ['Food and beverages', 'Flights', 'Transfers', 'Excursions and extra activities']
              ).map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <span className="text-sage/20 shrink-0" style={{ fontSize: '0.35rem', marginTop: '0.4em' }}>◇</span>
                  <p className="body-text text-sand/35" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Location ───────────────────────────────────────────────────── */}
        <div
          className="px-6 md:px-12 lg:px-16 pb-8"
          style={{ borderTop: '1px solid rgba(220,201,160,0.06)' }}
        >
          <div className="flex items-center gap-4 py-10">
            <p className="label-text text-sage/30" style={{ fontSize: '0.5rem', letterSpacing: '0.28em' }}>
              {lang === 'PT' ? 'A LOCALIZAÇÃO' : 'THE LOCATION'}
            </p>
            <div className="flex-1 h-px" style={{ background: 'rgba(220,201,160,0.06)' }} />
          </div>

          {/* Location photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-12">
            {['/retreat/resort-2.jpg', '/retreat/resort-3.jpg', '/retreat/resort-4.jpg'].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative overflow-hidden"
                style={{ aspectRatio: '4/3' }}
              >
                <Image src={src} alt="Resort Krabi" fill sizes="(max-width: 768px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="label-text text-sage/30 mb-8"
              style={{ fontSize: '0.46rem', letterSpacing: '0.28em' }}
            >
              VOASIS VALLEY · KRABI
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.05 }}
              className="font-cormorant font-light text-ivory/80"
              style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', lineHeight: 1.45, marginBottom: '2.5rem' }}
            >
              {lang === 'PT'
                ? 'O Voasis Valley é um retiro de luxo isolado, encravado entre as falésias de calcário e a floresta tropical de Krabi, na Tailândia.'
                : 'Voasis Valley is a secluded luxury retreat nestled between the limestone cliffs and tropical rainforest of Krabi, Thailand.'}
            </motion.p>
            {(lang === 'PT' ? [
              'Longe das multidões, o lugar oferece uma atmosfera de quietude onde a natureza se torna parte da experiência de aprendizado. As manhãs começam com o canto dos pássaros e a neblina das montanhas, enquanto as tardes se encerram no ritmo tranquilo da selva.',
              'A propriedade foi projetada com materiais naturais, espaços abertos e vilas cuidadosamente construídas que se integram harmoniosamente à paisagem. Cada detalhe convida a um ritmo mais lento — um ambiente ideal para estudar, restaurar e reconectar-se com o corpo.',
              'Ao longo do retiro, este lugar se tornará muito mais do que simplesmente o local onde dormimos. Será a nossa casa durante a semana — um espaço para aprender, praticar, compartilhar refeições, recuperar entre as sessões de treino e vivenciar a cultura tailandesa no ambiente onde essas tradições nasceram.',
              'Para muitos alunos, o próprio cenário se torna parte da transformação.',
            ] : [
              'Far from the crowds, it offers an atmosphere of stillness where nature becomes part of the learning experience. Mornings begin with birdsong and mountain mist, while evenings settle into the quiet rhythm of the jungle.',
              'The property has been thoughtfully designed with natural materials, open spaces and beautifully crafted villas that blend seamlessly into the landscape. Every detail encourages a slower pace, making it an ideal environment to study, restore and reconnect with the body.',
              'Throughout the retreat, this will become more than simply the place where we sleep. It will be our home for the week — a space to learn, practise, share meals, recover between training sessions and experience Thai culture in the environment where these traditions were born.',
              'For many students, the setting itself becomes part of the transformation.',
            ]).map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.07 }}
                className="body-text text-sand/50"
                style={{
                  fontSize: 'clamp(0.875rem, 1.4vw, 1rem)',
                  lineHeight: 1.9,
                  marginBottom: i < 3 ? '1.5rem' : 0,
                  maxWidth: '60ch',
                  fontStyle: i === 3 ? 'italic' : 'normal',
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        {/* ── Accommodation ──────────────────────────────────────────────── */}
        <div className="px-6 md:px-12 lg:px-16 pt-4">
          <div className="flex items-center gap-4 py-10" style={{ borderTop: '1px solid rgba(220,201,160,0.06)' }}>
            <p className="label-text text-sage/30" style={{ fontSize: '0.5rem', letterSpacing: '0.28em' }}>
              {lang === 'PT' ? 'ACOMODAÇÕES E PREÇOS' : 'ACCOMMODATION & PRICING'}
            </p>
            <div className="flex-1 h-px" style={{ background: 'rgba(220,201,160,0.06)' }} />
          </div>
          <p className="body-text text-sand/35 mb-12" style={{ fontSize: 'clamp(0.825rem, 1.2vw, 0.9rem)', maxWidth: '52ch' }}>
            {lang === 'PT'
              ? 'Escolha a acomodação que melhor se adapta ao seu estilo e orçamento. Todos os preços incluem o curso completo de quatro dias.'
              : 'Choose the accommodation that best suits your style and budget. All prices include the full four-day course.'}
          </p>
        </div>

        {/* Room cards */}
        <div className="mx-6 md:mx-12 lg:mx-16 mb-8" style={{ border: '1px solid rgba(220,201,160,0.06)' }}>
          {roomList.map((room) => (
            <RoomCard key={room.id} room={room} lang={lang} />
          ))}
        </div>

        {/* ── Contact / Reserve ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="px-6 md:px-12 lg:px-16"
          style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)', borderTop: '1px solid rgba(220,201,160,0.06)' }}
        >
          <p className="label-text text-sage/30 mb-6" style={{ fontSize: '0.5rem', letterSpacing: '0.28em' }}>
            {lang === 'PT' ? 'RESERVAS E INFORMAÇÕES' : 'BOOKINGS & ENQUIRIES'}
          </p>
          <h2
            className="font-cormorant font-light text-ivory"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 0.95, marginBottom: '2rem' }}
          >
            {lang === 'PT' ? 'Reserve a sua vaga' : 'Reserve your space'}
          </h2>
          <p className="body-text text-sand/45 mb-10" style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1rem)', lineHeight: 1.85, maxWidth: '50ch' }}>
            {lang === 'PT'
              ? 'Este retiro é intimista por escolha. Entre em contato para confirmar disponibilidade e garantir a sua acomodação.'
              : 'This retreat is intimate by design. Get in touch to confirm availability and secure your accommodation.'}
          </p>
          <a
            href="https://www.instagram.com/cheriethai/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-sand/60 border-sand/20 justify-between inline-flex gap-4"
            style={{ cursor: 'none' }}
          >
            <span>@CHERIETHAI</span>
            <span aria-hidden>↗</span>
          </a>
        </motion.div>

        {/* ── Footer ─────────────────────────────────────────────────────── */}
        <div
          className="px-6 md:px-12 lg:px-16 py-10"
          style={{ borderTop: '1px solid rgba(220,201,160,0.05)' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="label-text text-sage/18" style={{ fontSize: '0.48rem', letterSpacing: '0.22em' }}>
              INSTITUTO CHERIETHAI · SÃO PAULO · RIO DE JANEIRO
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
