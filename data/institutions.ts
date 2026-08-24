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
  },
]
