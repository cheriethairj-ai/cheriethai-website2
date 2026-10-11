// ─── Institutional Training Partnerships ──────────────────────────────────────
//
// Spas, hotels and studios that have contracted Chérie to deliver in-house
// professional training for their therapist teams.

export type InstitutionEntry = {
  id: string
  name: string
  location: string       // city, state
  country: string
  trainingTypePT: string
  trainingTypeEN: string
  datePT: string
  dateEN: string
  descriptionPT: string[]
  descriptionEN: string[]
  impactPT: string[]
  impactEN: string[]
  students: string[]
  photos: string[]       // paths relative to /public
}

export const institutions: InstitutionEntry[] = [
  {
    id: 'shambhala-spa-paraty',
    name: 'Shambhala Spa',
    location: 'Paraty, Rio de Janeiro',
    country: 'Brasil',
    trainingTypePT: 'Formação Profissional 30 horas',
    trainingTypeEN: 'Professional Training · 30 hours',
    datePT: '14 de fevereiro de 2025',
    dateEN: 'February 14, 2025',
    descriptionPT: [
      'No coração do Centro Histórico de Paraty, o Shambhala Spa é um espaço dedicado às terapias orientais e às tradições de cuidado corporal asiáticas, integrado ao complexo do histórico Sandi Hotel.',
      'Em fevereiro de 2025, Cherie foi convidada por Hans e Priscila, responsáveis pelo Shambhala, para conduzir uma formação profissional exclusiva para a equipe de terapeutas do spa.',
      'A formação foi desenvolvida especialmente para profissionais que já atuavam dentro do Shambhala, aprofundando recursos do trabalho corporal tailandês e expandindo o repertório técnico aplicado aos atendimentos da casa.',
      'Uma colaboração especialmente significativa pela afinidade entre os dois trabalhos: a tradição das terapias asiáticas, o estudo contínuo do corpo e o compromisso com um atendimento de alto nível.',
    ],
    descriptionEN: [
      'In the heart of Paraty\'s Historic Centre, Shambhala Spa is a space dedicated to Eastern therapies and Asian bodycare traditions, integrated within the complex of the historic Sandi Hotel.',
      'In February 2025, Chérie was invited by Hans and Priscila, the directors of Shambhala, to deliver an exclusive professional training for the spa\'s therapist team.',
      'The training was developed specifically for practitioners already working within Shambhala, deepening Thai bodywork techniques and expanding the technical repertoire applied to the spa\'s treatments.',
      'A particularly significant collaboration, given the affinity between both approaches: the tradition of Asian therapies, continuous study of the body and a commitment to the highest standard of care.',
    ],
    impactPT: [
      'Desde a formação realizada em fevereiro de 2025, o Shambhala Spa relata uma evolução muito clara na qualidade técnica dos atendimentos.',
      'Segundo Hans e Priscila, houve uma mudança perceptível na segurança, precisão e variedade das técnicas utilizadas pela equipe. Nos meses seguintes, essa evolução também começou a aparecer nos resultados do próprio spa: avaliações de clientes cada vez mais positivas, maior procura pelos atendimentos e um crescimento expressivo do negócio.',
      'Para mim, esse é um dos resultados mais importantes de uma formação: quando o que foi ensinado não termina no curso, mas passa a fazer parte da prática diária da equipe — e essa mudança pode ser percebida tanto por quem trabalha quanto por quem recebe o atendimento.',
    ],
    impactEN: [
      'Since the training held in February 2025, Shambhala Spa has reported a clear evolution in the technical quality of its treatments.',
      'According to Hans and Priscila, there has been a noticeable shift in the confidence, precision and variety of techniques used by the team. In the months that followed, that evolution also began to show in the spa\'s results: increasingly positive client reviews, greater demand for treatments and significant business growth.',
      'This is one of the most important outcomes of a training: when what was taught does not end with the course, but becomes part of the team\'s daily practice — and that change can be felt by both those who deliver it and those who receive it.',
    ],
    students: [
      'Alessandra Capistrano Guimaraes',
      'Samanta Brummert da Cruz',
      'Cristiane Jucá',
      'Aline Merigio',
      'Rocio Beien Lopez',
      'Agustina Giudice Blanquer',
      'Juliana das Graças da Silva',
      'Marianella Casa',
      'Maria Florencin Ceballos',
      'Felype Perreira',
    ],
    photos: [
      '/institutions/shambhala/IMG_0536.PNG',
      '/institutions/shambhala/IMG_0537.PNG',
      '/institutions/shambhala/IMG_0538.PNG',
      '/institutions/shambhala/IMG_0539.PNG',
      '/institutions/shambhala/IMG_0540.PNG',
      '/institutions/shambhala/IMG_0541.PNG',
      '/institutions/shambhala/IMG_0542.PNG',
      '/institutions/shambhala/IMG_0543.PNG',
      '/institutions/shambhala/IMG_0545.PNG',
      '/institutions/shambhala/IMG_0546.PNG',
    ],
  },
  {
    id: 'chapada-2026',
    name: 'Chapada Thai Bodywork 2026',
    location: 'Canto da Seriema, Campos de São João, Chapada Diamantina',
    country: 'Brasil',
    trainingTypePT: 'Retiro de Formação · 60 horas',
    trainingTypeEN: 'Training Retreat · 60 hours',
    datePT: 'Outubro de 2026',
    dateEN: 'October 2026',
    descriptionPT: [
      'A formação Chapada Thai Bodywork 2026 foi uma imersão intensiva de 60 horas realizada no Canto da Seriema, em Campos de São João, na Chapada Diamantina. Um dos ambientes mais extraordinários do Brasil e um lugar que em si já convida ao tipo de atenção que este trabalho exige.',
      'Catorze praticantes de diferentes partes do Brasil e do mundo se reuniram para uma formação direta com Cherie T. Charnkul. O grupo trouxe trajetórias diversas: terapeutas estabelecidos, dançarinos, atletas, arquitetos, empresários e profissionais de saúde. O que cada um demonstrou ao longo da semana foi a capacidade de trazer essa trajetória para dentro do toque.',
      'A formação abrangeu trabalho profundo em tecido, sequências de alongamento assistido, mobilização articular, bodywork com óleo e a abordagem de leitura corporal característica do método CherieThai. Cada participante desenvolveu e apresentou uma sequência final que refletia sua compreensão individual da abordagem.',
      'O grupo desta formação é um dos mais internacionais e tecnicamente variados já formados pelo Instituto CherieThai. Praticantes baseados no Brasil, Portugal, Suíça, Bolívia e Estados Unidos. Uma geração de terapeutas cujo trabalho continuará a se desenvolver, cada um a partir do seu próprio contexto e com a sua própria linguagem.',
    ],
    descriptionEN: [
      'The Chapada Thai Bodywork 2026 training was a 60-hour intensive retreat held at Canto da Seriema, in Campos de São João, in the Chapada Diamantina. One of the most extraordinary environments in Brazil and a place that already invites the kind of attention this work requires.',
      'Fourteen practitioners from different parts of Brazil and the world gathered for a direct training with Cherie T. Charnkul. The group brought diverse backgrounds: established therapists, dancers, athletes, architects, entrepreneurs and healthcare professionals. What each demonstrated throughout the week was the ability to bring that background into their touch.',
      'The training covered deep tissue work, assisted stretching sequences, joint mobilisation, oil bodywork and the body-reading approach characteristic of the CherieThai method. Each participant developed and presented a final sequence reflecting their individual understanding of the approach.',
      'The group from this training is one of the most international and technically varied ever formed by the CherieThai Institute. Practitioners based in Brazil, Portugal, Switzerland, Bolivia and the United States. A generation of therapists whose work will continue to develop, each from their own context and with their own language.',
    ],
    impactPT: [
      'Os catorze praticantes formados no retiro Chapada 2026 partem para contextos muito diferentes: clínicas privadas, spas, estúdios próprios, práticas itinerantes entre países, e alguns que estão construindo seu primeiro trabalho manual a partir desta base.',
      'O que foi cultivado ao longo desta semana — a precisão, a leitura do corpo, a qualidade do toque, a capacidade de construir uma sequência com intenção — são fundações que cada um levará de formas diferentes para o seu trabalho.',
      'Cada perfil na página de formados do Instituto CherieThai inclui a descrição individual de como cada praticante aplica esta abordagem. Visitar esses perfis é a melhor forma de entender o que este grupo representa.',
    ],
    impactEN: [
      'The fourteen practitioners formed at the Chapada 2026 retreat leave for very different contexts: private clinics, spas, their own studios, itinerant practices between countries, and some who are building their first manual work from this foundation.',
      'What was cultivated throughout this week — the precision, the body reading, the quality of touch, the ability to build a sequence with intention — are foundations that each will carry differently into their work.',
      'Each profile on the CherieThai Institute graduates page includes each practitioner\'s individual description of how they apply this approach. Visiting those profiles is the best way to understand what this group represents.',
    ],
    students: [
      'Carol Viana',
      'Ivan Zorzin',
      'Angela Menezes',
      'Nathalia Mendes',
      'Fabiana Andrea Lopes',
      'Daniela Mariano',
      'Lara Santos',
      'Matheus Pergolizzi',
      'Aline Ferreira',
      'Thallys Lima',
      'Talita Silva',
      'Ana Clara',
      'Ana Branquinho',
      'Victoria Maya',
    ],
    photos: [],
  },
]
