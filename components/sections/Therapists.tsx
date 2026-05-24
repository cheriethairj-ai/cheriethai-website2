'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

const SP_WHATSAPP = '5511911135083'
const RIO_WHATSAPP = '5521996466022'
const whatsappUrl = (name?: string, number?: string, lang: 'PT' | 'EN' = 'PT') => {
  const num = number ?? SP_WHATSAPP
  const msg = lang === 'EN'
    ? name
      ? `Hello, I'd like to receive more information about sessions with ${name} at CherieThai.`
      : `Hello, I'd like to receive more information about sessions, therapeutic options, and availability at CherieThai.`
    : name
      ? `Olá, gostaria de receber mais informações sobre sessões com ${name} na CherieThai.`
      : 'Olá, gostaria de receber mais informações sobre sessões, opções terapêuticas e disponibilidade na CherieThai.'
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`
}

// ─── UI Translations ───────────────────────────────────────────────────────────

const uiTranslations = {
  PT: {
    specializationsBtn: 'Especializações & Perfil Ideal',
    close: 'Fechar',
    requestSession: 'Solicitar uma Sessão',
    requestSessionSmall: 'Solicitar uma sessão',
    technicalSpec: 'Especializações Técnicas',
    idealProfile: 'Perfil Ideal',
    sectionLabel: 'Os Praticantes',
    sectionH2Line1: 'As mãos',
    sectionH2Line2: 'por trás do método.',
    sectionBody: 'Os praticantes CherieThai não são selecionados pelas horas acumuladas. São selecionados pelo que compreendem.',
    teamLabel: 'A Equipe de Praticantes',
    teamBody: 'Cada praticante concluiu formação direta sob orientação de Cherie T. Charnkul. Sem exceções.',
    specializationsSmall: 'Especializações',
    availabilityOnRequest: 'Disponibilidade mediante consulta',
    noteLabel: 'Uma Nota Sobre a Seleção',
    noteBody1: 'Ao entrar em contato, você não é atribuído a um terapeuta com base na disponibilidade. Você é indicado, com base no que traz, no que precisa e em qual inteligência particular do praticante é mais adequada ao trabalho que seu corpo requer.',
    noteBody2: 'Em alguns casos, Cherie recomendará um praticante específico. De qualquer forma, a sessão que você receberá terá sido pensada antes de começar.',
    startConsultation: 'Iniciar uma Consulta',
    seeResults: 'Ver Resultados',
  },
  EN: {
    specializationsBtn: 'Specializations & Ideal Profile',
    close: 'Close',
    requestSession: 'Request a Session',
    requestSessionSmall: 'Request a session',
    technicalSpec: 'Technical Specializations',
    idealProfile: 'Ideal Profile',
    sectionLabel: 'The Practitioners',
    sectionH2Line1: 'The hands',
    sectionH2Line2: 'behind the method.',
    sectionBody: 'CherieThai practitioners are not selected by accumulated hours. They are selected by what they understand.',
    teamLabel: 'The Practitioner Team',
    teamBody: 'Every practitioner completed direct training under the guidance of Cherie T. Charnkul. Without exception.',
    specializationsSmall: 'Specializations',
    availabilityOnRequest: 'Availability upon request',
    noteLabel: 'A Note on Selection',
    noteBody1: 'When you contact us, you are not assigned to a practitioner based on availability. You are guided toward the practitioner whose touch, presence, and therapeutic intelligence are most aligned with what your body requires.',
    noteBody2: 'In some cases, Cherie herself may recommend a specific practitioner. Either way, the session you receive will have been considered long before it begins.',
    startConsultation: 'Begin a Consultation',
    seeResults: 'See Results',
  },
}

// ─── Founders Data ─────────────────────────────────────────────────────────────

const foundersData = {
  PT: [
    {
      id: 'cherie',
      name: 'Cherie T. Charnkul',
      role: 'Fundadora · O Método CherieThai',
      location: 'São Paulo · Internacional',
      bg: 'from-[#2A3329] via-[#3D4A40] to-[#2A3329]',
      textSide: 'right' as const,
      philosophy: `"Eu não corrijo o corpo.\nRestauro o seu acesso a si mesmo.\n\nO corpo não está quebrado quando está com dor. Está reorganizado. Adaptou-se em torno de uma restrição, uma antiga compressão, um padrão que aprendeu para continuar se movendo.\n\nMeu trabalho é encontrar esse padrão, e oferecer ao corpo uma opção mais inteligente."`,
      atmosphere: `Cherie conduz sessões que combinam bodywork de óleo ultrassensível, trabalho preciso nas fibras musculares, sequências de alongamentos complexos e reorganização estrutural do corpo, incluindo sua própria criação: um sistema avançado de mobilidade Thai de movimentos autorais que se tornaram sua assinatura clínica.\n\nCada sessão é construída de forma inteiramente personalizada, identificando a origem dos padrões de tensão e restaurando os caminhos naturais de movimento do corpo ao longo do tempo.\n\nReconhecida por sua leitura corporal extremamente precisa, ela percebe o que outros frequentemente perdem. Uma vez feito o contato, ela já sabe para onde a sessão precisa ir.`,
      presence: 'Calma. Precisa. Sem pressa. O ritmo de quem não precisa demonstrar o que sabe.',
      strengths: [
        'Descompressão estrutural',
        'Sequenciamento avançado de mobilidade Thai',
        'Regulação descendente do sistema nervoso',
        'Leitura somática do corpo',
        'Trabalho de precisão em tecidos profundos e fibras musculares',
        'Gestão de casos complexos de dor',
      ],
      ideal: 'Indicada para clientes com sensibilidade refinada ao toque, aqueles que percebem cada detalhe no interior do corpo e buscam um nível de precisão terapêutica além dos tratamentos convencionais. Frequentemente procurada por pessoas com padrões complexos de dor, tensões crônicas ou casos que exigem uma abordagem profundamente especializada e perceptiva. Especialmente para aqueles que já passaram por múltiplos tratamentos sem encontrar resolução duradoura.',
      note: 'Lista de espera aplicável.',
      imageSub: 'Mãos em trabalho estrutural · Luz clínica',
      image: '/portrait-cherie-2.jpg',
      imagePosition: 'center 30%' as const,
      imageZoom: 1.5,
      imageZoomOrigin: 'center 30%',
      priceLabel: 'Experiência Recomendada',
      price: 'R$ 920',
      supportingTone: null as string | null,
      consultationNote: 'Disponibilidade reduzida. Além das sessões individuais, Cherie trabalha com diferentes formatos terapêuticos para ajudar a identificar a abordagem mais adequada para você.',
    },
    {
      id: 'karl',
      name: 'Karl Georges',
      role: 'Co-Fundador · CherieThai · Linhagem Thai Tradicional',
      location: 'Rio de Janeiro · Linhagem do Nordeste da Tailândia',
      bg: 'from-[#3A3028] via-[#4A3C30] to-[#3A3028]',
      textSide: 'left' as const,
      philosophy: `"Não escolhi uma profissão.\nEscolhi um modo de vida.\n\nO que pratico foi transmitido por quem veio antes de mim, e por quem veio antes deles.\nNão em sua origem apenas. Apenas naqueles dispostos a carregá-lo adiante.\n\nO silêncio não é ausência. É o que acontece quando a presença se torna total."`,
      atmosphere: `As sessões de Karl não começam com consulta. Começam com silêncio.\n\nSeu trabalho é praticado no chão, como sempre foi, principalmente sem óleos, usando a inteligência plena das mãos, antebraços, polegares e pés em uma progressão rítmica e meditativa que segue as linhas energéticas do corpo.\n\nO ritmo é ancestral. Não há urgência. Nenhum protocolo anula o que o corpo apresenta. Os clientes frequentemente descrevem não lembrar quando pararam de pensar, apenas que pararam.`,
      presence: 'Enraizado. Meditativo. Profundamente tradicional. A rara qualidade de um praticante que carrega linhagem, não técnica.',
      strengths: [
        'Trabalho Thai tradicional de chão',
        'Alongamento passivo assistido',
        'Sequências de compressão rítmica',
        'Mobilização das linhas Sen',
        'Mobilização rítmica de corpo inteiro',
        'Protocolo terapêutico Thai tradicional',
      ],
      ideal: 'Aqueles que buscam a raiz autêntica do bodywork Thai, sem adaptação ou modernização. Corpos que precisam de profundidade através de pressão sustentada e rítmica, em vez de liberação pontual. Aqueles que querem algo mais antigo do que o que está disponível atualmente.',
      note: 'Sessões de chão. Sem óleo. Formato tradicional.',
      imageSub: 'Trabalho tradicional de chão · Luz natural',
      image: '/portrait-karl.jpg' as string | null,
      imagePosition: 'center top' as const,
      priceLabel: 'Sessões com Karl Georges',
      price: 'R$ 450',
      supportingTone: 'Terapia Thai tradicional de chão, enraizada nas tradições ancestrais do bodywork tailandês e no movimento meditativo rítmico.' as string | null,
      consultationNote: 'Disponibilidade e formatos adicionais mediante consulta.',
      whatsapp: RIO_WHATSAPP,
    },
  ],
  EN: [
    {
      id: 'cherie',
      name: 'Cherie T. Charnkul',
      role: 'Founder · The CherieThai Method',
      location: 'São Paulo · International',
      bg: 'from-[#2A3329] via-[#3D4A40] to-[#2A3329]',
      textSide: 'right' as const,
      philosophy: `"I do not correct the body.\nI restore its access to itself.\n\nThe body is not broken when it is in pain. It is reorganized around a restriction, an old compression, a pattern it learned in order to keep moving.\n\nMy work is to identify that pattern and offer the body a more intelligent option."`,
      atmosphere: `Cherie leads sessions that combine ultra sensitive deep oil bodywork, precise work through muscular fibers, complex stretching sequences, and structural reorganization of the body. Her work also includes her own creation: an advanced Thai mobility system of original movement patterns that became her clinical signature.\n\nEach session is built in a fully personalized way, identifying the origin of tension patterns and restoring the body's natural movement pathways over time.\n\nRecognized for her exceptionally precise body reading, she perceives what others often miss. Once contact is made, she already understands where the session needs to go.`,
      presence: 'Calm. Precise. Without urgency. The rhythm of someone who does not need to prove what she knows.',
      strengths: [
        'Structural decompression',
        'Advanced Thai mobility sequencing',
        'Downregulation of the nervous system',
        'Somatic body reading',
        'Precision work through deep tissues and muscular fibers',
        'Management of complex pain cases',
      ],
      ideal: 'Designed for clients with a highly refined sensitivity to touch, those who perceive every detail within the body and seek a level of therapeutic precision beyond conventional treatments. Often sought out by individuals with complex pain patterns, chronic tension, or cases that require a deeply specialized and perceptive approach. Especially for those who have undergone multiple treatments without finding lasting resolution.',
      note: 'Waitlist may apply.',
      imageSub: 'Hands in structural work · Clinical light',
      image: '/portrait-cherie-2.jpg',
      imagePosition: 'center 30%' as const,
      imageZoom: 1.5,
      imageZoomOrigin: 'center 30%',
      priceLabel: 'Recommended Experience',
      price: 'R$ 920',
      supportingTone: null as string | null,
      consultationNote: 'Limited availability. Beyond individual sessions, Cherie works through different therapeutic formats to help identify the approach best suited to you.',
    },
    {
      id: 'karl',
      name: 'Karl Georges',
      role: 'Co-Founder · CherieThai · Traditional Thai Lineage',
      location: 'Rio de Janeiro · Northeastern Thailand Lineage',
      bg: 'from-[#3A3028] via-[#4A3C30] to-[#3A3028]',
      textSide: 'left' as const,
      philosophy: `"I did not choose a profession.\nI chose a way of life.\n\nWhat I practice was passed down by those who came before me, and by those who came before them.\nNot in its origin alone. Only in those willing to carry it forward.\n\nSilence is not absence. It is what happens when presence becomes total."`,
      atmosphere: `Karl's sessions do not begin with a consultation. They begin with silence.\n\nHis work is practiced on the floor, as it always has been, primarily without oil, using the full intelligence of hands, forearms, thumbs, and feet in a rhythmic, meditative progression that follows the meridian lines of the body.\n\nThe rhythm is ancestral. There is no hurry. No protocol overrides what the body presents. Clients frequently describe not remembering when they stopped thinking — only that they did.`,
      presence: 'Rooted. Meditative. Deeply traditional. The rare quality of a practitioner who carries lineage, not technique.',
      strengths: [
        'Traditional floor-based Thai work',
        'Passive assisted stretching',
        'Rhythmic compression sequences',
        'Sen line mobilization',
        'Full-body rhythmic mobilization',
        'Traditional Thai therapeutic protocol',
      ],
      ideal: 'Those seeking the authentic root of Thai bodywork, without adaptation or modernisation. Bodies that need depth through sustained rhythmic pressure, rather than targeted release. Those who want something older than what is currently available.',
      note: 'Floor sessions. No oil. Traditional format.',
      imageSub: 'Traditional floor-based Thai work · Natural light',
      image: '/portrait-karl.jpg' as string | null,
      imagePosition: 'center top' as const,
      priceLabel: 'Sessions with Karl Georges',
      price: 'R$ 450',
      supportingTone: 'Traditional floor-based Thai therapy, rooted in the ancestral traditions of Thai bodywork and rhythmic meditative movement.' as string | null,
      consultationNote: 'Availability and additional formats upon request.',
      whatsapp: RIO_WHATSAPP,
    },
  ],
}

// ─── Therapists Data ──────────────────────────────────────────────────────────

const therapistsData = {
  PT: [
    {
      id: 'lucas',
      name: 'Lucas',
      role: 'Praticante · Bodywork Corporal Fluido',
      location: 'Rio de Janeiro',
      philosophy: '"Movimento não é uma técnica. É uma qualidade, que ou vive na sessão ou não. Quando está presente, o cliente para de esperar a próxima coisa e entra no fluxo da atual. É quando o trabalho alcança sua profundidade."',
      atmosphere: `Lucas trabalha em movimento contínuo. Não há paradas, reinícios, momentos em que a sessão pausa para se reorganizar. Do primeiro contato, a sessão já está em algum lugar, já vai a algum lugar.\n\nSuas mãos são grandes, e ele as usa com uma inteligência envolvente que cria a sensação de o corpo inteiro ser sustentado e lido simultaneamente. A pressão é suave, enraizada e profundamente controlada. Os clientes descrevem uma qualidade hipnótica, não por sedação, mas pela consistência do ritmo. O sistema nervoso se rende porque não tem nada para resistir.`,
      presence: 'Caloroso. Fluido. Imersivo. Há uma inteligência carioca em seu trabalho, sem pressa, sofisticado, profundamente incorporado.',
      strengths: [
        'Sequenciamento fluido contínuo',
        'Bodywork imersivo a óleo',
        'Fluxo integrado de mobilidade',
        'Regulação rítmica do sistema nervoso',
        'Presença tátil envolvente',
        'Transições elegantes de técnica',
      ],
      ideal: 'Aqueles que sustentam tensão pela vigilância, cujos corpos estão tensos contra a próxima demanda. Clientes que buscam regulação profunda através de ritmo sustentado e inteligente — seja para dores específicas ou para restaurar o equilíbrio geral do corpo.',
      imageSub: 'Movimento fluido · Luz direcional quente',
      accent: '#AAB6A2',
      image: '/site-img-3.jpg' as string | null,
      imagePosition: 'center 20%',
      priceLabel: 'Sessões com Lucas' as string | null,
      price: 'R$ 400' as string | null,
      supportingTone: 'Bodywork fluido e imersivo guiado pelo ritmo, movimento contínuo e fluxo tátil refinado.' as string | null,
      consultationNote: 'Disponibilidade e formatos adicionais mediante consulta.',
      whatsapp: RIO_WHATSAPP,
    },
    {
      id: 'pedro',
      name: 'Pedro',
      role: 'Praticante · Lutador Profissional de MMA · Tecido Profundo',
      location: 'São Paulo',
      philosophy: '"Todo mundo acha que um lutador só sabe destruir coisas.\nLutar ensina o contrário.\nEnsina a ler — a tensão que alguém carrega, onde está se protegendo, o que não quer sentir.\n\nAprendi isso no ringue.\nUso a mesma coisa aqui."',
      atmosphere: `Pedro é lutador profissional de MMA. A suposição é que isso o torna bruto. A realidade é o oposto.\n\nO combate e o bodywork restaurativo compartilham a mesma base: os dois exigem uma sensibilidade extraordinária ao corpo sob pressão. Os dois exigem ler a tensão antes que ela se torne movimento. Os dois pedem que você saiba — não adivinhe — onde o corpo está se protegendo e por quê.\n\nPedro passou anos aprendendo a ler corpos no ambiente mais exigente possível. Esse conhecimento não desaparece quando ele entra em uma sala de atendimento. Ele se torna o seu propósito.`,
      presence: 'Preciso. Quieto. Surpreendentemente delicado para alguém que compete profissionalmente. A sensibilidade não é apesar da luta. É por causa dela.',
      strengths: [
        'Conhecimento anatômico de combate aplicado ao bodywork',
        'Trabalho preciso de tecido profundo',
        'Acesso a musculatura densa de atleta',
        'Compreensão de padrões de tensão em artes marciais',
        'Recuperação e prevenção de lesões esportivas',
        'Gestão de corpos de alto rendimento',
      ],
      ideal: 'Atletas de alto rendimento com musculatura densa. Praticantes de artes marciais, lutadores e esportistas que precisam de alguém que compreenda seu corpo a partir de dentro do esporte. Aqueles que buscam profundidade real, de alguém que sabe exatamente o que a pressão extrema faz ao tecido.',
      imageSub: 'Pressão estrutural profunda · Alto contraste',
      accent: '#DCC9A0',
      image: '/portrait-pedro.jpg' as string | null,
      imagePosition: 'center top',
      priceLabel: 'Sessões com Pedro' as string | null,
      price: 'R$ 350' as string | null,
      supportingTone: 'Trabalho preciso de tecido profundo com vocabulário anatômico de combate, para corpos que exigem acesso real.' as string | null,
      consultationNote: 'Disponibilidade e formatos adicionais mediante consulta.',
    },
    {
      id: 'grace-kelly',
      name: 'Grace-Kelly',
      role: 'Praticante · Toque Terapêutico Refinado',
      location: 'São Paulo',
      philosophy: '"Precisão e suavidade não são opostos. São a mesma inteligência, expressa de formas diferentes. O corpo não quer ser dominado. Quer ser compreendido, com firmeza suficiente para confiar, suavidade suficiente para abrir."',
      atmosphere: `As sessões de Grace-Kelly são equilibradas no sentido mais preciso: entre firme e fluido, entre estruturado e responsivo, entre liberação de tecido profundo e calma completa do sistema nervoso.\n\nSeu trabalho de cotovelo e antebraço alcança profundidade significativa, mas sem a sensação de força. Seu trabalho de mão e dedo é extraordinariamente refinado, seguindo a arquitetura do músculo com uma especificidade que os clientes frequentemente descrevem como serem vistos, não tratados. Há uma qualidade distintamente feminina em seu toque, não em leveza, mas em textura. Em atenção. Na inteligência particular da pressão que sabe exatamente quando suavizar e quando sustentar.`,
      presence: 'Elegante. Composta. Silenciosamente autoritativa. O tipo de praticante que não precisa de anúncio.',
      strengths: [
        'Técnicas precisas de cotovelo e antebraço',
        'Trabalho detalhado de mão e dedo',
        'Mobilidade e alongamento elegantes',
        'Liberação equilibrada profunda e superficial',
        'Regulação do sistema nervoso',
        'Bodywork postural refinado',
      ],
      ideal: 'Aqueles que precisam de profundidade sem intensidade, liberação estrutural sem a sensação de ter sido trabalhado demais. Clientes em recuperação de padrões de tensão relacionados ao estresse. Aqueles que foram chamados de "sensíveis" e dispensados. Não são sensíveis demais. Precisam de mais precisão.',
      imageSub: 'Toque refinado · Luz direcional suave',
      accent: '#DCC9A0',
      image: '/portrait-grace.jpg' as string | null,
      imagePosition: 'center 15%',
      priceLabel: 'Sessões com Grace-Kelly' as string | null,
      price: 'R$ 420' as string | null,
      supportingTone: 'Bodywork terapêutico equilibrado, alongamento elegante, pressão refinada e toque profundamente preciso.' as string | null,
      consultationNote: 'Disponibilidade e formatos adicionais mediante consulta.',
    },
    {
      id: 'ricardo',
      name: 'Ricardo',
      role: 'Praticante · Integração Estrutural',
      location: 'São Paulo',
      philosophy: '"O corpo quer se mover. Quando não consegue, está segurando algo, e esse algo tem uma razão. Não me interessa forçar a mudança. Me interessa criar as condições para que o corpo a escolha."',
      atmosphere: `As sessões de Ricardo não param. Do primeiro contato até a posição final de repouso, o trabalho flui, uma técnica liberando para a próxima sem costura visível.\n\nSua formação em quiropraxia informa a lógica estrutural de cada sessão sem tornar o trabalho frio. É inteligência estrutural expressa através de movimento contínuo. Os clientes descrevem a sensação de serem continuamente e suavemente reorganizados, como se toda a sessão fosse um único gesto ininterrupto.`,
      presence: 'Fluido. Enraizado. Rítmico. O tipo de presença que coloca o sistema nervoso em recepção antes do trabalho começar.',
      strengths: [
        'Avaliação estrutural quiroprática',
        'Sequenciamento fluido e contínuo',
        'Integração de mobilidade articular',
        'Trabalho de continuidade fascial',
        'Reorganização rítmica de corpo inteiro',
        'Protocolos de correção postural',
      ],
      ideal: 'Aqueles que carregam tensão como um padrão de corpo inteiro. Atletas em manutenção. Clientes que nunca experienciaram um bodywork verdadeiramente contínuo e querem entender o que integração significa.',
      imageSub: 'Trabalho estrutural fluido · Luz em tons terrosos',
      accent: '#AAB6A2',
      image: '/portrait-ricardo.jpg' as string | null,
      imagePosition: 'center 20%',
      priceLabel: null as string | null,
      price: null as string | null,
      supportingTone: null as string | null,
      consultationNote: 'Disponibilidade e opções terapêuticas mediante consulta direta.',
    },
  ],
  EN: [
    {
      id: 'lucas',
      name: 'Lucas',
      role: 'Practitioner · Fluid Bodywork',
      location: 'Rio de Janeiro',
      philosophy: '"Movement is not a technique. It is a quality that lives within the session itself.\nWhen presence exists, the client stops waiting for the next movement and begins to trust the process. And when the work reaches depth, the session is already somewhere else."',
      atmosphere: `Lucas works through continuous movement. There are no pauses, resets, or moments where the session stops to reorganize itself. From the very first contact, the work already carries depth.\n\nHis hands are large, and he uses them with an enveloping intelligence that creates the sensation of the entire body being supported and read simultaneously. The pressure is soft, grounded, and deeply controlled. Clients describe a hypnotic quality — not through sedation, but through the consistency of the rhythm. The nervous system softens because the body no longer needs to resist.`,
      presence: 'Warm. Fluid. Immersive. There is a distinctly carioca intelligence in his work, relaxed yet sophisticated, with an unexpectedly deep therapeutic presence.',
      strengths: [
        'Continuous fluid sequencing',
        'Immersive oil bodywork',
        'Integrated mobility flow',
        'Rhythmic nervous system regulation',
        'Enveloping tactile presence',
        'Elegant technique transitions',
      ],
      ideal: 'Those who hold tension through vigilance, whose bodies are braced against the next demand. Clients seeking deep regulation through sustained, intelligent rhythm — whether for specific pain or to restore overall balance.',
      imageSub: 'Fluid movement · Warm directional light',
      accent: '#AAB6A2',
      image: '/site-img-3.jpg' as string | null,
      imagePosition: 'center 20%',
      priceLabel: 'Sessions with Lucas' as string | null,
      price: 'R$ 400' as string | null,
      supportingTone: 'Fluid, immersive bodywork guided by rhythm, continuous movement, and refined tactile flow.' as string | null,
      consultationNote: 'Availability and additional formats upon request.',
      whatsapp: RIO_WHATSAPP,
    },
    {
      id: 'pedro',
      name: 'Pedro',
      role: 'Practitioner · Professional MMA Fighter · Deep Tissue',
      location: 'São Paulo',
      philosophy: '"Everyone assumes a fighter only knows how to break things down.\nFighting teaches you the opposite.\nIt teaches you to read — the tension someone carries, where they\'re protecting, what they won\'t feel.\n\nI learned that in the ring.\nI use the same thing here."',
      atmosphere: `Pedro is a professional MMA fighter. The assumption is that this makes him rough. The reality is the opposite.\n\nCombat and restorative bodywork share the same foundation: both demand an extraordinary sensitivity to the body under pressure. Both require reading tension before it becomes movement. Both ask you to know — not guess — where the body is protecting itself, and why.\n\nPedro spent years learning to read bodies in the most demanding environment possible. That knowledge does not disappear when he enters a treatment room. It becomes its purpose.`,
      presence: 'Precise. Quiet. Surprisingly delicate for someone who competes professionally. The sensitivity is not despite the fighting. It is because of it.',
      strengths: [
        'Anatomical understanding of combat applied to bodywork',
        'Precise deep tissue work',
        'Access to dense athletic musculature',
        'Structural understanding of martial arts tension patterns',
        'Recovery and prevention for high performance bodies',
      ],
      ideal: 'High performance athletes with dense musculature. Martial artists, fighters, and athletes who need someone capable of understanding the body from inside the reality of sport. Those seeking true depth, from someone who understands what extreme pressure does to tissue.',
      imageSub: 'Deep structural pressure · High contrast',
      accent: '#DCC9A0',
      image: '/portrait-pedro.jpg' as string | null,
      imagePosition: 'center top',
      priceLabel: 'Sessions with Pedro' as string | null,
      price: 'R$ 350' as string | null,
      supportingTone: 'Precise deep tissue work with an anatomical understanding shaped through combat sports, designed for bodies under real physical demand.' as string | null,
      consultationNote: 'Availability and additional formats upon request.',
    },
    {
      id: 'grace-kelly',
      name: 'Grace-Kelly',
      role: 'Practitioner · Refined Therapeutic Touch',
      location: 'São Paulo',
      philosophy: '"Precision and softness are not opposites. They are the same intelligence expressed in different forms. The body does not want to be dominated. It wants to be understood, with enough firmness to trust, and enough softness to open."',
      atmosphere: `Grace-Kelly's sessions are known for balance and refinement: between firm and fluid, structural and responsive, between deep tissue release and delicate perception.\n\nHer elbow and forearm work carries significant depth — without ever feeling forceful. Her hand and finger work is extraordinarily refined, following the architecture of the muscle with a specificity that clients often describe as being seen, not treated. There is a distinctly feminine quality to her touch — not in delicacy, but in attention. In the particular intelligence of a pressure that knows exactly when to soften and when to hold.`,
      presence: 'Elegant. Composed. Quietly authoritative. The type of practitioner who never needs to announce precision.',
      strengths: [
        'Precise elbow and forearm techniques',
        'Detailed hand and finger work',
        'Elegant mobility and stretching',
        'Balanced superficial and deep tissue release',
        'Nervous system regulation',
        'Refined postural bodywork',
      ],
      ideal: "Those who need depth without aggression, structural release without the sensation of being overworked. Clients recovering from stress related tension patterns. Those often described as 'sensitive' and frequently dismissed. They are not too sensitive. They require more precision.",
      imageSub: 'Refined touch · Soft directional light',
      accent: '#DCC9A0',
      image: '/portrait-grace.jpg' as string | null,
      imagePosition: 'center 15%',
      priceLabel: 'Sessions with Grace-Kelly' as string | null,
      price: 'R$ 420' as string | null,
      supportingTone: 'Balanced therapeutic bodywork, elegant stretching, refined pressure, and deeply precise touch.' as string | null,
      consultationNote: 'Availability and additional formats upon request.',
    },
    {
      id: 'ricardo',
      name: 'Ricardo',
      role: 'Practitioner · Structural Integration',
      location: 'São Paulo',
      philosophy: '"The body wants to move. When it cannot, it is protecting something, and that protection exists for a reason. I am not interested in forcing change. I am interested in creating the conditions for the body to choose it."',
      atmosphere: `Ricardo's sessions do not stop. From the first contact to the final resting position, the work flows seamlessly, one technique releasing into the next without interruption.\n\nHis background in chiropractic care and structural bodywork allows him to integrate mobility, decompression, and precise reorganizations into a fluid therapeutic experience.`,
      presence: 'Fluid. Grounded. Rhythmic. The kind of presence that puts the nervous system into reception before the work even begins.',
      strengths: [
        'Chiropractic structural assessment',
        'Continuous fluid sequencing',
        'Joint mobility integration',
        'Fascial continuity work',
        'Full-body rhythmic reorganization',
        'Postural correction protocols',
      ],
      ideal: "Those who carry tension as a full-body pattern. Athletes in maintenance. Clients who have never experienced truly continuous bodywork and want to understand what integration feels like.",
      imageSub: 'Fluid structural work · Earthy tones',
      accent: '#AAB6A2',
      image: '/portrait-ricardo.jpg' as string | null,
      imagePosition: 'center 20%',
      priceLabel: null as string | null,
      price: null as string | null,
      supportingTone: null as string | null,
      consultationNote: 'Therapeutic availability and formats available through direct consultation.',
    },
  ],
}

// ─── Helper ────────────────────────────────────────────────────────────────────

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

// ─── Types ─────────────────────────────────────────────────────────────────────

type UiStrings = typeof uiTranslations['PT']
type FounderType = (typeof foundersData)['PT'][0]
type TherapistType = (typeof therapistsData)['PT'][0]

// ─── Founder Row ───────────────────────────────────────────────────────────────

function FounderRow({ founder, ui, lang }: { founder: FounderType; ui: UiStrings; lang: 'PT' | 'EN' }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const [expanded, setExpanded] = useState(false)

  const isLeft = founder.textSide === 'left'

  return (
    <div
      ref={ref}
      className={`relative flex flex-col lg:flex-row ${isLeft ? 'lg:flex-row-reverse' : ''} min-h-[85vh] overflow-hidden`}
    >
      {/* Portrait column */}
      <motion.div
        className="relative lg:w-[52%] h-[65vh] md:h-[55vh] lg:h-auto overflow-hidden"
        initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <motion.div className="absolute inset-0" style={{ y: imageY }}>
          {founder.image ? (
            <>
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
                style={{
                  objectPosition: founder.imagePosition ?? 'center top',
                  transform: founder.imageZoom ? `scale(${founder.imageZoom})` : undefined,
                  transformOrigin: founder.imageZoomOrigin ?? 'center top',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to right, rgba(42,51,41,0.15) 0%, rgba(42,51,41,0.35) 100%)',
                }}
              />
            </>
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${founder.bg}`}>
              <div className="absolute inset-0">
                <div
                  className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-px opacity-10"
                  style={{ background: 'linear-gradient(90deg, transparent, #DCC9A0, transparent)' }}
                />
                <div
                  className="absolute top-1/2 left-1/3 w-px h-40 opacity-8"
                  style={{ background: 'linear-gradient(180deg, transparent, #AAB6A2 50%, transparent)' }}
                />
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Text column */}
      <div className="lg:w-[48%] flex items-center px-6 md:px-12 lg:px-14 xl:px-20 py-16 md:py-20 lg:py-28 bg-dark-moss">
        <div className="w-full max-w-lg">

          <motion.p {...inView()} className="label-text text-sage mb-3">
            {founder.role}
          </motion.p>
          <motion.p {...inView(0.05)} className="label-text text-sand/70 mb-10 flex items-center gap-2">
            <span aria-hidden className="text-sand/40">◎</span>
            {founder.location}
          </motion.p>

          <motion.h3
            className="font-cormorant font-light text-ivory mb-8"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: 1.05 }}
            {...inView(0.1)}
          >
            {founder.name}
          </motion.h3>

          {/* Philosophy */}
          <motion.blockquote
            {...inView(0.2)}
            className="font-cormorant italic text-sand/80 mb-8 pl-4 border-l border-sand/20"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.6 }}
          >
            {founder.philosophy.split('\n').map((line, i) => (
              <span key={i} className={line === '' ? 'block mt-3' : 'block'}>{line}</span>
            ))}
          </motion.blockquote>

          {/* Atmosphere */}
          <motion.div {...inView(0.3)} className="body-text text-sage/65 space-y-3 text-sm md:text-base mb-8">
            {founder.atmosphere.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          {/* Presence */}
          <motion.p {...inView(0.35)} className="font-cormorant italic text-sage text-lg mb-8">
            {founder.presence}
          </motion.p>

          {/* Expandable specialisations */}
          <motion.button
            {...inView(0.4)}
            onClick={() => setExpanded(!expanded)}
            className="label-text text-sand/50 hover:text-sand transition-colors duration-300 flex items-center gap-3 mb-6"
          >
            <span>{expanded ? ui.close : ui.specializationsBtn}</span>
            <motion.span
              animate={{ rotate: expanded ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden
            >
              →
            </motion.span>
          </motion.button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="overflow-hidden"
              >
                <div className="pb-8 space-y-6">
                  <div>
                    <p className="label-text text-sage/50 mb-3">{ui.technicalSpec}</p>
                    <ul className="space-y-1.5">
                      {founder.strengths.map((s) => (
                        <li key={s} className="body-text text-sage/60 text-sm flex items-start gap-2">
                          <span className="text-sand/30 mt-1 shrink-0">·</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="label-text text-sage/50 mb-3">{ui.idealProfile}</p>
                    <p className="body-text text-sage/60 text-sm">{founder.ideal}</p>
                  </div>
                  {founder.note && (
                    <p className="label-text text-sand/40">{founder.note}</p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Price block ── */}
          <motion.div {...inView(0.44)} className="border-t border-sand/15 pt-8 mt-2">
            <p className="label-text text-sage/50 mb-5">{founder.priceLabel}</p>
            {founder.supportingTone && (
              <p className="body-text text-sage/45 text-xs leading-relaxed mb-5">
                {founder.supportingTone}
              </p>
            )}
            <p
              className="font-cormorant font-light text-ivory mb-7"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1 }}
            >
              {founder.price}
            </p>
            <a
              href={whatsappUrl(founder.name, founder.whatsapp, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-ivory border-ivory/25 inline-flex mb-8"
            >
              <span>{ui.requestSession}</span>
              <span aria-hidden>→</span>
            </a>
            <p className="label-text text-sage/28 text-xs leading-relaxed mb-4">
              {founder.consultationNote}
            </p>
            {founder.id === 'cherie' && (
              <a
                href="/resultados"
                className="label-text text-sand/35 hover:text-sand/60 transition-colors duration-300 flex items-center gap-2 w-fit"
                style={{ fontSize: '0.6rem', letterSpacing: '0.18em' }}
              >
                <span>{ui.seeResults}</span>
                <span aria-hidden>→</span>
              </a>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  )
}

// ─── Therapist Card ────────────────────────────────────────────────────────────

function TherapistCard({ therapist, index, ui, lang }: { therapist: TherapistType; index: number; ui: UiStrings; lang: 'PT' | 'EN' }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      className="flex flex-col"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      {/* Portrait */}
      <div className="relative h-[70vw] sm:aspect-[3/4] sm:h-auto overflow-hidden mb-8 bg-image-placeholder group">
        {therapist.image ? (
          <Image
            src={therapist.image}
            alt={therapist.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            style={{ objectPosition: therapist.imagePosition ?? 'center top' }}
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            style={{
              background: `radial-gradient(ellipse at 40% 35%, rgba(${
                therapist.id === 'lucas' ? '170,182,162' : '220,201,160'
              }, 0.08) 0%, transparent 65%), linear-gradient(160deg, #2A3329 0%, #3D4A40 55%, #4B5A4F 100%)`,
            }}
          />
        )}
        <div className="absolute top-5 left-5 z-10">
          <span className="label-text text-ivory/80 text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded-sm flex items-center gap-1.5">
            <span aria-hidden className="text-sand/60">◎</span>
            {therapist.location}
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1">
        <p className="label-text text-sage mb-2">{therapist.role}</p>

        <h3
          className="font-cormorant font-light text-deep-moss mb-2"
          style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.05 }}
        >
          {therapist.name}
        </h3>

        <p className="label-text text-sage/70 mb-5 flex items-center gap-1.5">
          <span aria-hidden className="text-sage/40">◎</span>
          {therapist.location}
        </p>

        <blockquote
          className="font-cormorant italic text-earth/70 mb-5 pl-4 border-l text-base md:text-lg leading-relaxed"
          style={{ borderColor: `${therapist.accent}40` }}
        >
          {therapist.philosophy}
        </blockquote>

        <div className="body-text text-earth/65 space-y-3 text-sm mb-6">
          {therapist.atmosphere.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <p className="font-cormorant italic text-earth/50 text-base mb-6">
          {therapist.presence}
        </p>

        {/* Expandable */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="label-text text-earth/40 hover:text-earth/70 transition-colors duration-300 flex items-center gap-2 text-left mb-4"
        >
          <span>{expanded ? ui.close : ui.specializationsSmall}</span>
          <motion.span animate={{ rotate: expanded ? 90 : 0 }} transition={{ duration: 0.3 }} aria-hidden>
            →
          </motion.span>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="overflow-hidden"
            >
              <div className="pb-6 space-y-5">
                <ul className="space-y-1.5">
                  {therapist.strengths.map((s) => (
                    <li key={s} className="body-text text-earth/60 text-sm flex items-start gap-2">
                      <span className="text-earth/25 mt-1 shrink-0">·</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="label-text text-earth/40 mb-2">{ui.idealProfile}</p>
                  <p className="body-text text-earth/55 text-sm">{therapist.ideal}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Price block ── */}
        <div className="mt-auto border-t border-earth/10 pt-6">
          {therapist.supportingTone && (
            <p className="body-text text-earth/45 text-xs leading-relaxed mb-5">
              {therapist.supportingTone}
            </p>
          )}

          <div className="flex items-baseline justify-between mb-5">
            {therapist.price ? (
              <>
                <p className="label-text text-sage text-xs">{therapist.priceLabel}</p>
                <p
                  className="font-cormorant font-light text-deep-moss"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)', lineHeight: 1 }}
                >
                  {therapist.price}
                </p>
              </>
            ) : (
              <p className="label-text text-earth/38 text-xs">{ui.availabilityOnRequest}</p>
            )}
          </div>

          <a
            href={whatsappUrl(therapist.name, therapist.whatsapp, lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="label-text text-earth/50 hover:text-earth/80 transition-colors duration-300 flex items-center gap-2 mb-5"
          >
            {ui.requestSessionSmall}
            <span aria-hidden>→</span>
          </a>

          <p className="label-text text-earth/28 text-xs leading-relaxed">
            {therapist.consultationNote}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Main Section ──────────────────────────────────────────────────────────────

export default function Therapists() {
  const { lang } = useLanguage()
  const founders = foundersData[lang]
  const ui = uiTranslations[lang]
  const therapists = therapistsData[lang]

  return (
    <section id="therapists">

      {/* ── Section header ── */}
      <div className="bg-ivory px-6 md:px-12 lg:px-16 pt-24 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="label-text text-sage mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {ui.sectionLabel}
          </motion.p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.h2
              className="display-section text-deep-moss"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              {ui.sectionH2Line1}<br />{ui.sectionH2Line2}
            </motion.h2>

            <motion.p
              className="body-text text-earth/60 max-w-xs text-sm md:text-base"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {ui.sectionBody}
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── Founders, full-width editorial rows ── */}
      <div className="border-t border-sand/10">
        {founders.map((founder) => (
          <FounderRow key={founder.id} founder={founder} ui={ui} lang={lang} />
        ))}
      </div>

      {/* ── Team Therapists ── */}
      <div className="bg-ivory px-6 md:px-12 lg:px-16 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">

          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 md:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-text text-sage">{ui.teamLabel}</p>
            <p className="body-text text-earth/50 text-sm max-w-sm text-right">
              {ui.teamBody}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-6">
            {therapists.map((t, i) => (
              <TherapistCard key={t.id} therapist={t} index={i} ui={ui} lang={lang} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Matching note ── */}
      <div className="bg-off-white border-t border-earth/10 px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="label-text text-sage mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {ui.noteLabel}
          </motion.p>
          <motion.p
            className="body-text text-earth/70 text-base md:text-lg leading-loose"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {ui.noteBody1}
          </motion.p>
          <motion.p
            className="body-text text-earth/50 text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {ui.noteBody2}
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <a
              href={whatsappUrl(undefined, undefined, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-deep-moss border-deep-moss/30 inline-flex"
            >
              <span>{ui.startConsultation}</span>
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
