// ─── Student Data ──────────────────────────────────────────────────────────────
// Each entry: name, city, country, bio, youtubeId, coordinates [lng, lat]
// Add new students at the bottom of the array.

export type Student = {
  id: string
  name: string
  city: string
  country: string
  descriptors?: string[]   // English descriptors
  descriptorsPT?: string[] // Portuguese descriptors
  bio: string              // English opening sentence
  bioPoints?: string[]     // English bullet points
  bioPT?: string           // Portuguese opening sentence
  bioPTPoints?: string[]   // Portuguese bullet points
  nonPracticing?: boolean  // graduate who does not offer manual therapy professionally
  photo?: string           // filename in /public/students/ e.g. 'ricardo.jpg'
  youtubeId: string
  coordinates: [number, number] // [longitude, latitude]
  instagram?: string
}

export const students: Student[] = [
  {
    id: 'ricardo',
    name: 'Ricardo',
    city: 'São Paulo',
    country: 'Brasil',
    descriptors: ['Versatile', 'Complex', 'Well-rounded'],
    descriptorsPT: ['Versátil', 'Complexo', 'Completo'],
    bio: 'Ricardo is among the most well-rounded practitioners to graduate from the CherieThai Institute.',
    bioPoints: [
      'Currently practicing at CherieThai São Paulo',
      'Founder of Hanai Massage, his own independent practice',
      'Combines structural bodywork, refined manual techniques and clinical reasoning',
      'Delivers thoughtful, results-focused care grounded in CherieThai principles',
      'Known for his precision, professionalism and attention to detail',
    ],
    bioPT: 'Ricardo está entre os terapeutas mais completos formados pelo Instituto CherieThai.',
    bioPTPoints: [
      'Atualmente atende na CherieThai São Paulo',
      'Fundador da Hanai Massage, sua própria clínica independente',
      'Combina trabalho estrutural, técnicas manuais refinadas e raciocínio clínico',
      'Oferece atendimentos focados em resultados, fundamentados nos princípios CherieThai',
      'Reconhecido pela precisão, profissionalismo e atenção aos detalhes',
    ],
    youtubeId: '0KJNkygIQJY',
    coordinates: [-46.633, -23.550], // São Paulo
    instagram: 'hanaimassage',
  },
  {
    id: 'mariana',
    name: 'Mariana',
    city: 'Lençóis',
    country: 'Brasil',
    descriptors: ['Grounded', 'Intuitive', 'Authentic'],
    descriptorsPT: ['Enraizada', 'Presente', 'Essencial'],
    bio: 'Mariana is among the most grounded and present practitioners to graduate from the CherieThai Institute.',
    bioPoints: [
      'Originally from Lençóis, in the Chapada Diamantina, Bahia',
      'Her strength and presence of touch recall the hardworking women of Isaan — strong hands, deep roots',
      'Brings a calm, grounded quality to every treatment',
      'Combines attentive touch with the clinical reasoning of the CherieThai Method',
      'Values precision over force, adapting each technique to the individual',
      'Delivers thoughtful, personalised care rooted in CherieThai principles',
    ],
    bioPT: 'Mariana está entre as terapeutas mais enraizadas e presentes formadas pelo Instituto CherieThai.',
    bioPTPoints: [
      'Natural de Lençóis, na Chapada Diamantina, Bahia',
      'Sua força e presença no toque remetem às mulheres trabalhadoras do Isaan — mãos fortes, raízes profundas',
      'Desenvolve uma prática enraizada na presença, na observação e no ritmo natural do corpo',
      'Combina toque atento e sensível com o raciocínio clínico do Método CherieThai',
      'Adapta cada técnica às necessidades individuais, sem seguir protocolos fixos',
      'Oferece atendimento preciso, individualizado e fiel aos princípios do Instituto CherieThai',
    ],
    youtubeId: 'D-pQkrdc3W0',
    coordinates: [-41.389, -12.561], // Lençóis, Bahia
    instagram: 'mari.terapiamanual',
  },
  {
    id: 'fausto',
    name: 'Fausto',
    city: 'Rio de Janeiro',
    country: 'Brasil',
    descriptors: ['Precise', 'Analytical', 'Integrative'],
    descriptorsPT: ['Preciso', 'Meticuloso', 'Integrado'],
    bio: 'Fausto is among the most analytically precise practitioners to graduate from the CherieThai Institute.',
    bioPoints: [
      'Certified dentist and CherieThai practitioner based in Copacabana, Rio de Janeiro',
      'Integrates craniofacial function with the clinical reasoning of the CherieThai Method',
      'Specialises in movement, muscular balance and TMJ disorders',
      'Approaches the body as an interconnected system rather than a collection of isolated symptoms',
      'Known for precision, careful assessment and analytical depth',
    ],
    bioPT: 'Fausto está entre os terapeutas mais precisos e integrativos formados pelo Instituto CherieThai.',
    bioPTPoints: [
      'Cirurgião-dentista e terapeuta CherieThai, atuando em Copacabana, Rio de Janeiro',
      'Integra o conhecimento craniofacial ao raciocínio clínico do Método CherieThai',
      'Atenção especial ao movimento, ao equilíbrio muscular e às disfunções temporomandibulares (DTM)',
      'Aborda o corpo como um sistema integrado, e não como estruturas isoladas',
      'Reconhecido pela precisão, pela avaliação cuidadosa e pela profundidade analítica',
    ],
    youtubeId: 'nrJ1-fOQld0',
    coordinates: [-43.182, -22.971], // Copacabana, Rio de Janeiro
    instagram: 'dr.antironco',
  },
  {
    id: 'renata',
    name: 'Renata',
    city: 'São Paulo',
    country: 'Brasil',
    descriptors: ['Graceful', 'Curious', 'Dedicated'],
    descriptorsPT: ['Elegante', 'Observadora', 'Disciplinada'],
    nonPracticing: true,
    bio: 'Renata is among the most dedicated and curious graduates of the CherieThai Institute.',
    bioPoints: [
      'Joined the Institute to deepen her understanding of the body, not to pursue professional practice',
      'Background in yoga and a naturally thoughtful, disciplined approach to learning',
      'Known for her patience, curiosity and commitment to mastering every detail before moving forward',
      'Her journey reflects a genuine appreciation for movement, body awareness and lifelong learning',
      'A reminder that the Institute welcomes those seeking deeper understanding beyond professional practice',
    ],
    bioPT: 'Renata está entre as formandas mais dedicadas e curiosas do Instituto CherieThai.',
    bioPTPoints: [
      'Ingressou no Instituto para aprofundar sua compreensão do corpo, não para atuar profissionalmente',
      'Com base em yoga e uma forma de aprender marcada pela curiosidade, delicadeza e disciplina',
      'Destacou-se pela dedicação em compreender cada detalhe antes de avançar',
      'Sua trajetória reflete interesse genuíno pelo movimento, pela consciência corporal e pelo aprendizado contínuo',
      'Uma prova de que a formação também acolhe quem busca esse conhecimento além da prática profissional',
    ],
    youtubeId: '9dS5E37N5Dk',
    coordinates: [-46.633, -23.550], // São Paulo
  },
  {
    id: 'ivy-kate',
    name: 'Ivy Kate',
    city: 'Tiradentes',
    country: 'Brasil',
    descriptors: ['Strong', 'Refined', 'Athletic'],
    descriptorsPT: ['Firme', 'Refinada', 'Atlética'],
    nonPracticing: true,
    bio: 'Ivy Kate is among the most physically gifted and refined graduates of the CherieThai Institute.',
    bioPoints: [
      'Background in fitness and an active lifestyle',
      'Naturally developed a confident, powerful approach to bodywork',
      'Refined her strength into precise, elegant techniques throughout her training',
      'Learned to balance firmness with sensitivity and adaptability',
      'Demonstrates that effective bodywork is defined by intention, control and thoughtful application',
    ],
    bioPT: 'Ivy Kate está entre as formandas mais atléticas e refinadas do Instituto CherieThai.',
    bioPTPoints: [
      'Forte ligação ao universo esportivo e ao condicionamento físico',
      'Desenvolveu naturalmente uma abordagem firme e segura no toque',
      'Transformou essa força em técnicas precisas e elegantes ao longo da formação',
      'Aprendeu a equilibrar intensidade, sensibilidade e capacidade de adaptação',
      'Demonstra que uma terapia eficaz não depende apenas da força, mas da intenção, do controle e da qualidade da execução',
    ],
    youtubeId: 'LWnwCFwHMJ0',
    coordinates: [-44.174, -21.109], // Tiradentes, Minas Gerais
  },
  {
    id: 'carliana',
    name: 'Carliana',
    city: 'Maceió',
    country: 'Brasil',
    descriptors: ['Nurturing', 'Graceful', 'Powerful'],
    descriptorsPT: ['Acolhedora', 'Graciosa', 'Potente'],
    nonPracticing: true,
    bio: 'Carliana is among the most graceful and powerful graduates of the CherieThai Institute.',
    bioPoints: [
      'Based in Alagoas, Brazil',
      'Previously worked as a massage therapist before joining the Institute',
      'Developed a style defined by graceful movement, attentive touch and quiet confidence',
      'Beneath her gentle approach lies remarkable strength — effective without compromising elegance or sensitivity',
      'Her work reflects the balance of care, presence and technical refinement cultivated throughout her CherieThai training',
    ],
    bioPT: 'Carliana está entre as formandas mais graciosas e potentes do Instituto CherieThai.',
    bioPTPoints: [
      'Baseada em Alagoas, Brasil',
      'Com experiência prévia em massagem antes de ingressar no Instituto',
      'Desenvolveu uma forma de trabalhar marcada por movimentos graciosos, toque atento e confiança tranquila',
      'Por trás da delicadeza existe uma potência impressionante — eficaz sem perder elegância e sensibilidade',
      'Seu trabalho reflete o equilíbrio entre cuidado, presença e refinamento técnico desenvolvido no Instituto CherieThai',
    ],
    youtubeId: 'Nu8dniCgGGk',
    coordinates: [-35.735, -9.666], // Maceió, Alagoas
  },
  {
    id: 'vanessa',
    name: 'Vanessa',
    city: 'Maracajaú',
    country: 'Brasil',
    descriptors: ['Fluid', 'Attentive', 'Harmonious'],
    descriptorsPT: ['Fluida', 'Cuidadosa', 'Harmoniosa'],
    bio: 'Vanessa is among the most fluid and attentive practitioners to graduate from the CherieThai Institute.',
    bioPoints: [
      'Originally from Argentina, currently based in Maracajaú, Rio Grande do Norte',
      'Expresses the CherieThai Method through fluid movement, adaptability and genuine care',
      'Known for seamless transitions, refined oil techniques and a natural integration of mobility with relaxation',
      'Naturally attentive to detail, approaching each treatment with patience and sincere care',
      'Creates treatments that feel both deeply reassuring and highly personalised',
    ],
    bioPT: 'Vanessa está entre as terapeutas mais fluidas e cuidadosas formadas pelo Instituto CherieThai.',
    bioPTPoints: [
      'Argentina, atualmente baseada em Maracajaú, Rio Grande do Norte',
      'Expressa o Método CherieThai por meio da fluidez, da adaptação e do cuidado genuíno',
      'Conhecida por transições suaves, técnicas refinadas com óleo e integração natural de mobilidade e relaxamento',
      'Atenta aos detalhes, conduz cada atendimento com paciência e desejo sincero de compreender cada pessoa',
      'Cria atendimentos acolhedores e profundamente personalizados',
    ],
    youtubeId: 'RUoAjiSYAmw',
    coordinates: [-35.456, -5.478], // Maracajaú, Rio Grande do Norte
    instagram: 'maracajau_lotus_therapies',
  },
  {
    id: 'annagemes',
    name: 'Anna Gemes',
    city: 'Lençóis',
    country: 'Brasil',
    descriptors: ['Integrative', 'Inquisitive', 'Mindful'],
    descriptorsPT: ['Integrativa', 'Investigativa', 'Consciente'],
    bio: 'Anna Gemes is among the most integrative and inquisitive practitioners to graduate from the CherieThai Institute.',
    bioPoints: [
      'Originally from Hungary, now based in Lençóis, Chapada Diamantina',
      'Approaches the CherieThai Method through the lens of integration and somatic practice',
      'Shaped by a deep interest in the relationship between mind and body',
      'Known for curiosity and commitment to understanding the reasoning behind every technique',
      'Seeks deeper connections rather than isolated answers',
      'Reflects a holistic perspective where movement, awareness and manual therapy come together',
    ],
    bioPT: 'Anna Gemes está entre as terapeutas mais integrativas e investigativas formadas pelo Instituto CherieThai.',
    bioPTPoints: [
      'Natural da Hungria, atualmente baseada em Lençóis, Chapada Diamantina',
      'Vivencia o Método CherieThai a partir de uma visão integrativa do corpo',
      'Interesse pelas práticas somáticas e pela relação entre mente e corpo',
      'Destacou-se pela curiosidade e pelo desejo de compreender o raciocínio por trás de cada técnica',
      'Busca conexões profundas em vez de respostas isoladas',
      'Reflete uma perspectiva em que movimento, consciência corporal e terapia manual se complementam',
    ],
    youtubeId: 'ozB2VCdcJlA',
    coordinates: [-41.389, -12.561], // Lençóis, Chapada Diamantina, Bahia
    instagram: 'terapiasarte',
  },
  {
    id: 'camila',
    name: 'Camila',
    city: 'Brasília',
    country: 'Brasil',
    descriptors: ['Persevering', 'Serene', 'Consistent'],
    descriptorsPT: ['Perseverante', 'Serena', 'Constante'],
    bio: 'Camila is among the most persevering and consistent practitioners to graduate from the CherieThai Institute.',
    bioPoints: [
      'Based in Brasília, Brazil',
      'Approached every challenge throughout training with humility and determination',
      'Repeated each movement until it became natural and precise',
      'Her calm, serene presence creates a deeply reassuring treatment experience',
      'Her dedication to continuous improvement reflects the discipline and quality of the CherieThai Institute',
    ],
    bioPT: 'Camila está entre as terapeutas mais perseverantes e constantes formadas pelo Instituto CherieThai.',
    bioPTPoints: [
      'Baseada em Brasília, Brasil',
      'Enfrentou cada desafio durante a formação com humildade e perseverança',
      'Repetiu cada movimento até que se tornasse natural e preciso',
      'Sua presença serena transmite segurança em cada atendimento',
      'Sua dedicação à evolução contínua reflete a disciplina e o cuidado com a qualidade do Instituto CherieThai',
    ],
    youtubeId: 'coD6R-TJXlg',
    coordinates: [-47.929, -15.780], // Brasília
    instagram: 'masso.camilamuypura',
  },
  {
    id: 'waldeck',
    name: 'Waldeck',
    city: 'São Paulo',
    country: 'Brasil',
    descriptors: ['Spontaneous', 'Receptive', 'Uplifting'],
    descriptorsPT: ['Espontâneo', 'Receptivo', 'Encorajador'],
    nonPracticing: true,
    bio: 'Waldeck is among the most open-minded and encouraging graduates of the CherieThai Institute.',
    bioPoints: [
      'Approached every concept with fresh eyes and genuine curiosity',
      'Embraced each challenge with enthusiasm and a willingness to explore',
      'Helped create a positive, supportive learning environment for everyone around him',
      'His thoughtful questions and encouraging attitude reflected the spirit of continuous learning',
      'A reminder that meaningful growth begins with an open mind',
    ],
    bioPT: 'Waldeck está entre os formandos mais receptivos e encorajadores do Instituto CherieThai.',
    bioPTPoints: [
      'Encarou cada conceito com um olhar novo e curiosidade genuína',
      'Abraçou cada desafio com entusiasmo e disposição de evoluir',
      'Contribuiu para um ambiente leve, acolhedor e colaborativo durante toda a formação',
      'Sua postura receptiva e seu incentivo constante aos colegas refletem o espírito de aprendizado contínuo',
      'Uma prova de que crescer começa com a disposição de aprender',
    ],
    youtubeId: 'Ndm0ciKbVqM',
    coordinates: [-46.633, -23.550], // São Paulo
  },
  {
    id: 'thaisfas',
    name: 'Thaís Fassina',
    city: 'Nova Esperança',
    country: 'Brasil',
    descriptors: ['Intuitive', 'Assertive', 'Inspiring'],
    descriptorsPT: ['Intuitiva', 'Convicta', 'Inspiradora'],
    bio: 'Based in Nova Esperança, Paraná, Thaís is the founder of Movimente, a school dedicated to exploring the relationship between body, mind and emotional wellbeing.',
    bioPoints: [
      'She expresses the CherieThai Method through intuitive observation, purposeful movement and a genuine commitment to continuous learning',
      'Her exceptional finger strength, combined with refined control, allows her to deliver treatments that are both highly effective and thoughtfully adapted to each individual',
      'As both a movement educator and therapist, she brings confidence, clarity and a strong sense of direction to every session, helping people reconnect with their bodies through skillful and attentive care',
    ],
    bioPT: 'Baseada em Nova Esperança, Paraná, Thaís é fundadora da escola Movimente, dedicada ao estudo da relação entre corpo, mente e bem-estar emocional.',
    bioPTPoints: [
      'Ela expressa o Método CherieThai por meio de uma observação intuitiva, movimentos intencionais e um compromisso constante com o aprendizado',
      'Sua notável força nos dedos, aliada a um controle refinado, permite realizar atendimentos altamente eficazes e cuidadosamente adaptados às necessidades de cada pessoa',
      'Como professora de movimento e terapeuta, conduz cada sessão com clareza, segurança e propósito, ajudando seus pacientes a se reconectarem com o corpo por meio de um cuidado atento e consciente',
    ],
    youtubeId: 'fPtCYW4-tE8',
    coordinates: [-52.201, -23.182], // Nova Esperança, Paraná
    instagram: 'thais_fassina',
  },
  {
    id: 'gustavo',
    name: 'Gustavo',
    city: 'São Paulo',
    country: 'Brasil',
    descriptors: ['Welcoming', 'Somatic', 'Serene'],
    descriptorsPT: ['Acolhedor', 'Corpóreo', 'Sereno'],
    bio: 'Based in São Paulo, Gustavo brings his background in Tantra and Somatic Therapy into dialogue with the CherieThai Method, creating a calm, deeply embodied approach to manual therapy.',
    bioPoints: [
      'Although this was his first formal training in hands-on bodywork, he demonstrated remarkable sensitivity, curiosity and dedication throughout the programme',
      'His treatments are characterised by gentle presence, attentive touch and an intuitive understanding of how the body responds to safety, movement and awareness',
      'His work reflects a practitioner who values connection, stillness and thoughtful care, creating experiences that feel both grounding and restorative',
    ],
    bioPT: 'Baseado em São Paulo, Gustavo integra sua experiência em Tantra e Terapia Somática ao Método CherieThai, desenvolvendo uma abordagem calma e profundamente consciente da terapia manual.',
    bioPTPoints: [
      'Embora esta tenha sido sua primeira formação em técnicas manuais, destacou-se pela sensibilidade, curiosidade e dedicação ao longo de todo o curso',
      'Seus atendimentos são marcados por uma presença acolhedora, um toque atento e uma compreensão intuitiva de como o corpo responde à segurança, ao movimento e à consciência corporal',
      'Seu trabalho reflete um terapeuta que valoriza a conexão humana, a tranquilidade e o cuidado genuíno, proporcionando experiências profundamente restauradoras',
    ],
    youtubeId: 'yIK02KY2Yt0',
    coordinates: [-46.633, -23.550], // São Paulo
    instagram: 'gustavopatti',
  },
  {
    id: 'tati',
    name: 'Tati Dantas',
    city: 'São Sebastião',
    country: 'Brasil',
    descriptors: ['Vibrant', 'Courageous', 'Present'],
    descriptorsPT: ['Vibrante', 'Corajosa', 'Presente'],
    nonPracticing: true,
    bio: 'Based in São Sebastião, São Paulo, Tati completed the CherieThai Method as part of a personal journey of exploration and growth rather than professional practice.',
    bioPoints: [
      'Throughout the training, she approached every experience with openness, curiosity and remarkable presence, embracing each technique with confidence and genuine enthusiasm',
      'Her expressive movement and natural ability to connect with touch brought a distinctive quality to her Thai bodywork',
      'Demonstrating how meaningful learning can emerge from a willingness to explore the body with attention, courage and authenticity',
    ],
    bioPT: 'Baseada em São Sebastião, São Paulo, Tati realizou a formação no Método CherieThai como parte de uma jornada pessoal de descoberta e desenvolvimento, e não para atuar profissionalmente com terapia manual.',
    bioPTPoints: [
      'Ao longo do curso, aproximou-se de cada experiência com abertura, curiosidade e uma presença marcante, acolhendo cada técnica com confiança e entusiasmo genuíno',
      'Seus movimentos expressivos e sua capacidade natural de se conectar por meio do toque trouxeram uma qualidade única ao seu trabalho com a massagem tailandesa',
      'Demonstrando como um aprendizado profundo nasce da coragem de explorar o corpo com atenção e autenticidade',
    ],
    youtubeId: 'HAynPtkRHs8',
    coordinates: [-45.414, -23.805], // São Sebastião, São Paulo
  },
  {
    id: 'gracekelly',
    name: 'Grace Kelly',
    city: 'São Paulo',
    country: 'Brasil',
    descriptors: ['Elegant', 'Restorative', 'Harmonious'],
    descriptorsPT: ['Elegante', 'Restauradora', 'Harmoniosa'],
    bio: 'Based in São Paulo, Grace Kelly expresses the CherieThai Method through elegance, continuity and deep nervous system regulation.',
    bioPoints: [
      'Now practicing as part of the CherieThai team, she has developed a treatment style defined by graceful movement, refined oil techniques and an exceptional ability to create a profound sense of calm',
      'Her sessions naturally combine therapeutic intention with restorative care, allowing each treatment to unfold with fluidity, precision and thoughtful attention to the individual',
      'Grace\'s work reflects the evolution of a practitioner who has transformed rigorous training into a distinctive and highly personalised clinical approach',
    ],
    bioPT: 'Baseada em São Paulo, Grace Kelly expressa o Método CherieThai por meio da elegância, da fluidez e da regulação profunda do sistema nervoso.',
    bioPTPoints: [
      'Integrante da equipe CherieThai, desenvolveu uma forma de atender marcada por movimentos graciosos, técnicas refinadas com óleo e uma capacidade excepcional de promover relaxamento profundo sem perder o propósito terapêutico',
      'Seus atendimentos unem intenção clínica e cuidado restaurador, conduzindo cada sessão com harmonia, presença e atenção às necessidades individuais',
      'Seu trabalho reflete a evolução de uma terapeuta que transformou uma formação exigente em uma abordagem própria, refinada e profundamente humana',
    ],
    youtubeId: 'Ya7K636MEYM',
    coordinates: [-46.633, -23.550], // São Paulo
  },
  {
    id: 'isasheim',
    name: 'Isabela Sheimberg',
    city: 'Rio de Janeiro',
    country: 'Brasil',
    descriptors: ['Dexterous', 'Versatile', 'Coordinated'],
    descriptorsPT: ['Destreza', 'Versátil', 'Controlada'],
    bio: 'Based in Rio de Janeiro, Isabela brings a distinctive perspective to the CherieThai Method through her background in rock climbing.',
    bioPoints: [
      'The strength, precision and exceptional finger control developed through climbing translate naturally into her manual therapy, allowing her to work with remarkable sensitivity and accuracy',
      'Her treatments combine elegant movement with confident, effective pressure, creating an approach that feels both refined and powerful',
      'Adaptable across a wide range of techniques, she expresses the CherieThai Method with technical excellence, fluidity and thoughtful attention to detail',
    ],
    bioPT: 'Baseada no Rio de Janeiro, Isabela traz ao Método CherieThai uma perspectiva singular por meio de sua experiência na escalada esportiva.',
    bioPTPoints: [
      'A força, a precisão e o extraordinário controle dos dedos desenvolvidos na escalada se refletem naturalmente em sua terapia manual, permitindo um toque extremamente sensível e preciso',
      'Seus atendimentos combinam movimentos elegantes com uma pressão segura e eficaz, resultando em uma abordagem ao mesmo tempo refinada e potente',
      'Adaptando-se com facilidade a diferentes técnicas, expressa o Método CherieThai com excelência técnica, fluidez e atenção aos detalhes',
    ],
    youtubeId: 'bBSpAf-C_nE',
    coordinates: [-43.182, -22.971], // Rio de Janeiro
    instagram: 'isasheim.massage',
  },
  {
    id: 'hellen',
    name: 'Hellen Martins',
    city: 'Belo Horizonte',
    country: 'Brasil',
    descriptors: ['Precise', 'Confident', 'Assertive'],
    descriptorsPT: ['Precisa', 'Assertiva', 'Segura'],
    bio: 'Based in Belo Horizonte, Minas Gerais, Hellen expresses the CherieThai Method through precision, confidence and purposeful movement.',
    bioPoints: [
      'Throughout her training, she developed a remarkable ability to internalise the Method\'s principles, translating them into treatments that are direct, technically refined and highly effective',
      'Her confident application of pressure, combined with careful execution and quiet presence, creates a style that is both powerful and composed',
      'Today, she continues to build her own practice, reflecting the lasting impact that dedicated training and consistent application can have on a professional career',
    ],
    bioPT: 'Baseada em Belo Horizonte, Minas Gerais, Hellen expressa o Método CherieThai por meio da precisão, da confiança e de movimentos intencionais.',
    bioPTPoints: [
      'Durante sua formação, demonstrou uma notável capacidade de assimilar profundamente os princípios do Método, traduzindo-os em atendimentos diretos, tecnicamente refinados e altamente eficazes',
      'Sua aplicação segura da pressão, aliada a uma execução cuidadosa e a uma presença tranquila, resulta em um estilo ao mesmo tempo potente e elegante',
      'Hoje, segue consolidando sua própria trajetória profissional, refletindo o impacto que uma formação consistente pode ter na construção de uma carreira sólida',
    ],
    youtubeId: '6RMMgkR65pI',
    coordinates: [-43.937, -19.920], // Belo Horizonte, Minas Gerais
    instagram: 'espaco.hellenmartins',
  },
  {
    id: 'karen',
    name: 'Karen',
    city: 'Porto Alegre',
    country: 'Brasil',
    descriptors: ['Methodical', 'Observant', 'Confident'],
    descriptorsPT: ['Metódica', 'Observadora', 'Confiante'],
    nonPracticing: true,
    bio: 'Although Karen does not practice manual therapy professionally, she joined the CherieThai Institute with the goal of learning how to better support her husband\'s wellbeing.',
    bioPoints: [
      'Based in Rio Grande do Sul and working in aesthetics, she approached the CherieThai Method with a thoughtful and methodical mindset, carefully analysing each case before applying techniques',
      'Throughout the training, her confidence grew steadily as she developed precise movement, refined observation skills and a structured approach to understanding the body',
      'Her journey reflects how dedicated learning can empower people to provide meaningful care beyond professional practice',
    ],
    bioPT: 'Embora Karen não atue profissionalmente com terapia manual, ingressou no Instituto CherieThai com o objetivo de aprender a cuidar melhor do bem-estar do seu marido.',
    bioPTPoints: [
      'Atuando na área da estética e baseada no Rio Grande do Sul, aproximou-se do Método CherieThai com uma postura metódica e investigativa, buscando compreender cada caso antes de aplicar as técnicas',
      'Ao longo da formação, desenvolveu cada vez mais confiança, refinando seus movimentos, sua capacidade de observação e sua forma estruturada de compreender o corpo',
      'Sua trajetória demonstra como o aprendizado dedicado pode transformar a maneira de cuidar das pessoas, mesmo fora da prática profissional',
    ],
    youtubeId: '8tmeD3y_xsk',
    coordinates: [-51.217, -30.027], // Porto Alegre, Rio Grande do Sul
  },
  {
    id: 'anderson',
    name: 'Anderson',
    city: 'Ribeirão Preto',
    country: 'Brasil',
    descriptors: ['Serene', 'Perceptive', 'Sensitive'],
    descriptorsPT: ['Sereno', 'Perceptivo', 'Sensível'],
    bio: 'Based in Ribeirão Preto, São Paulo, Anderson expresses the CherieThai Method through serenity, perception and genuine sensitivity.',
    bioPoints: [
      'His calm presence allows him to observe subtle changes in movement and tissue quality',
      'His commitment to mastering every detail results in treatments that are both thoughtful and highly effective',
      'His refined oil work reflects a practitioner who believes that precision, patience and attentive touch can achieve profound results without relying on force',
    ],
    bioPT: 'Baseado em Ribeirão Preto, São Paulo, Anderson expressa o Método CherieThai por meio da serenidade, da empatia e de uma atenção excepcional aos detalhes.',
    bioPTPoints: [
      'Sua forma de trabalhar é marcada pela paciência e pelo compromisso de dominar cada movimento antes de avançar, resultando em atendimentos precisos e profundamente conscientes',
      'Embora seu toque seja extremamente delicado, sua técnica revela uma eficácia surpreendente, especialmente no trabalho refinado com óleo, onde sensibilidade e controle caminham juntos',
      'Seu trabalho reflete a convicção de que resultados significativos nascem da presença, da precisão e do cuidado, e não da força',
    ],
    youtubeId: 'IUMPdtsyr9o',
    coordinates: [-47.812, -21.177], // Ribeirão Preto, São Paulo
    instagram: 'andersoncastalditerapias',
  },
  {
    id: 'ruthgon',
    name: 'Ruth Gonçalves',
    city: 'São Paulo',
    country: 'Brasil',
    descriptors: ['Flowing', 'Integrated', 'Rhythmic'],
    descriptorsPT: ['Fluente', 'Integrada', 'Rítmica'],
    bio: 'Based in São Paulo, Ruth brings extensive experience in manual therapy to the CherieThai Method, expressing it through exceptional continuity of movement.',
    bioPoints: [
      'Drawing from a diverse therapeutic background, she integrates different techniques into a seamless and highly coordinated treatment style',
      'Her work is distinguished by fluid oil techniques, graceful transitions and an intuitive understanding of how one movement naturally evolves into the next',
      'Combining movement intelligence with refined manual skills, she creates treatments that feel cohesive, immersive and deeply restorative',
    ],
    bioPT: 'Baseada em São Paulo, Ruth une sua experiência em terapia manual ao Método CherieThai por meio de uma impressionante continuidade de movimento.',
    bioPTPoints: [
      'Com uma trajetória enriquecida por diferentes abordagens terapêuticas, integra essas experiências de forma natural e harmoniosa em seus atendimentos',
      'Seu trabalho se destaca pelo óleo fluido, pelas transições elegantes e por uma compreensão intuitiva de como cada movimento conduz naturalmente ao próximo',
      'Ao combinar inteligência corporal e técnicas manuais refinadas, cria tratamentos coesos, envolventes e profundamente restauradores',
    ],
    youtubeId: 'oBUjw3UowAw',
    coordinates: [-46.633, -23.550], // São Paulo
    instagram: 'massorootsz',
  },
  {
    id: 'sofia',
    name: 'Sofia',
    city: 'London',
    country: 'United Kingdom',
    descriptors: ['Expansive', 'Fluid', 'Athletic'],
    descriptorsPT: ['Expansiva', 'Fluida', 'Atlética'],
    bio: 'Originally from Uruguay and now based in London, Sofia brings together her background in yoga and the CherieThai Method through movement that is fluid, expansive and beautifully coordinated.',
    bioPoints: [
      'Treatments are characterised by seamless transitions, whole-body mechanics and an athletic quality that allows every technique to feel both effortless and precise',
      'Approaches manual therapy with elegance, adaptability and a deep appreciation for movement as an integrated expression of the body',
      'Creates treatments that are dynamic, balanced and highly engaging',
    ],
    bioPT: 'Natural do Uruguai e atualmente baseada em Londres, Sofia integra sua experiência em yoga ao Método CherieThai por meio de um movimento fluido, expansivo e extremamente coordenado.',
    bioPTPoints: [
      'Seus atendimentos são marcados por transições suaves, uso inteligente de todo o corpo e uma qualidade atlética que torna cada técnica precisa e natural',
      'Sua abordagem une elegância, adaptação e uma profunda compreensão do movimento como uma expressão integrada do corpo',
      'Resultando em tratamentos dinâmicos, equilibrados e envolventes',
    ],
    youtubeId: 'N1eqqQN-ucA',
    coordinates: [-0.127, 51.507], // London
    instagram: 'sofisansberro_',
  },
  {
    id: 'claudio',
    name: 'Claudio',
    city: 'Barra da Tijuca',
    country: 'Brasil',
    descriptors: ['Reliable', 'Determined', 'Protective'],
    descriptorsPT: ['Confiável', 'Determinado', 'Protetor'],
    nonPracticing: true,
    bio: 'Although Claudio does not practice manual therapy professionally, he joined the CherieThai Institute with the goal of learning how to care for someone close to him.',
    bioPoints: [
      'Throughout the programme, he demonstrated an impressive ability to understand and execute the Method\'s techniques with confidence',
      'Quickly developing precise movement and effective pressure',
      'His calm, dependable nature and genuine commitment to learning reflect the idea that thoughtful touch can be a meaningful expression of care, even outside professional practice',
    ],
    bioPT: 'Embora Claudio não atue profissionalmente com terapia manual, ingressou no Instituto CherieThai com o propósito de aprender a cuidar de alguém importante em sua vida.',
    bioPTPoints: [
      'Ao longo da formação, demonstrou uma impressionante facilidade para compreender e executar as técnicas do Método',
      'Desenvolvendo rapidamente movimentos precisos e uma aplicação de pressão segura e eficaz',
      'Sua postura tranquila, confiável e seu compromisso genuíno com o aprendizado refletem a ideia de que o toque consciente também pode ser uma poderosa forma de cuidado fora da prática profissional',
    ],
    youtubeId: 'kdZ5T5f062E',
    coordinates: [-43.365, -23.001], // Barra da Tijuca, Rio de Janeiro
  },
  {
    id: 'marcia',
    name: 'Márcia',
    city: 'Rio de Janeiro',
    country: 'Brasil',
    descriptors: ['Spontaneous', 'Receptive', 'Light-hearted'],
    descriptorsPT: ['Espontânea', 'Receptiva', 'Leve'],
    nonPracticing: true,
    bio: 'Based in Jardim Botânico, Rio de Janeiro, Márcia joined the CherieThai Institute with a deeply personal goal: to better understand the body and support her son\'s wellbeing.',
    bioPoints: [
      'Throughout the training, she demonstrated a remarkable ability to absorb and apply the principles of the CherieThai Method with confidence and precision',
      'Her natural curiosity, light-hearted personality and genuine enthusiasm made her a joy to learn alongside',
      'Proving that meaningful learning is driven by openness, dedication and a sincere desire to help others',
    ],
    bioPT: 'Baseada no Jardim Botânico, Rio de Janeiro, Márcia ingressou no Instituto CherieThai com um objetivo muito pessoal: compreender melhor o corpo para cuidar do bem-estar do seu filho.',
    bioPTPoints: [
      'Ao longo da formação, demonstrou uma notável capacidade de compreender e aplicar os princípios do Método CherieThai com naturalidade e precisão',
      'Sua curiosidade, seu jeito leve e seu entusiasmo genuíno tornaram sua trajetória inspiradora',
      'Mostrando que o aprendizado mais significativo nasce da abertura, da dedicação e do desejo sincero de cuidar das pessoas',
    ],
    youtubeId: '0LWmnJa7AUk',
    coordinates: [-43.223, -22.966], // Jardim Botânico, Rio de Janeiro
  },
  {
    id: 'edilene',
    name: 'Edilene',
    city: 'Seabra',
    country: 'Brasil',
    descriptors: ['Meticulous', 'Structural', 'Generous'],
    descriptorsPT: ['Minuciosa', 'Estrutural', 'Generosa'],
    bio: 'Based in Seabra, Chapada Diamantina, Bahia, Edilene combines years of experience as both a manual therapist and educator with the clinical reasoning of the CherieThai Method.',
    bioPoints: [
      'Treatments are distinguished by meticulous tissue assessment, refined deep oil techniques and an exceptional ability to recognise subtle differences in tissue quality',
      'With a naturally generous and approachable presence, she creates treatments that balance technical precision with genuine care',
      'Her work reflects a practitioner who values careful observation, continuous learning and a profound respect for the complexity of the human body',
    ],
    bioPT: 'Baseada em Seabra, na Chapada Diamantina, Bahia, Edilene une sua experiência como terapeuta e professora ao raciocínio clínico do Método CherieThai.',
    bioPTPoints: [
      'Seus atendimentos se destacam pela avaliação minuciosa dos tecidos, pelo trabalho refinado com óleo profundo e por sua notável capacidade de identificar diferenças sutis na qualidade dos tecidos',
      'Com uma presença naturalmente acolhedora e generosa, conduz tratamentos que equilibram precisão técnica e cuidado humano',
      'Seu trabalho reflete uma profissional que valoriza a observação cuidadosa, o aprendizado contínuo e o respeito pela complexidade do corpo humano',
    ],
    youtubeId: '8k7OsAepIN0',
    coordinates: [-41.776, -12.421], // Seabra, Chapada Diamantina, Bahia
    instagram: 'espacofenixseabra',
  },
  {
    id: 'ingrid',
    name: 'Ingrid',
    city: 'Barra da Tijuca',
    country: 'Brasil',
    descriptors: ['Contemplative', 'Adaptable', 'Inquisitive'],
    descriptorsPT: ['Contemplativa', 'Adaptável', 'Investigativa'],
    bio: 'Based in Barra da Tijuca, Rio de Janeiro, Ingrid expresses the CherieThai Method through patience, adaptability and thoughtful observation.',
    bioPoints: [
      'Rather than relying on deep pressure, she explores how precise releases, careful positioning and gradual progression can encourage meaningful change within the body',
      'Her elegant oil work and ability to adapt complex Thai techniques allow her to create treatments that feel both refined and highly effective',
      'Guided by genuine curiosity and a passion for helping people move beyond pain, she approaches every session with care, precision and respect for the body\'s natural process',
    ],
    bioPT: 'Baseada na Barra da Tijuca, Rio de Janeiro, Ingrid expressa o Método CherieThai por meio da paciência, da adaptação e da observação cuidadosa.',
    bioPTPoints: [
      'Em vez de depender da força, explora como liberações precisas, posicionamentos estratégicos e uma progressão gradual podem promover mudanças significativas no corpo',
      'Seu trabalho com óleo é marcado por movimentos elegantes, e sua capacidade de adaptar técnicas complexas da massagem tailandesa resulta em atendimentos refinados e altamente eficazes',
      'Movida pela curiosidade e pelo desejo genuíno de aliviar a dor, conduz cada sessão com precisão, sensibilidade e respeito ao ritmo natural do corpo',
    ],
    youtubeId: 'BCtUgLWcJC0',
    coordinates: [-43.365, -23.001], // Barra da Tijuca, Rio de Janeiro
    instagram: 'ingridmoras.fascias',
  },
  {
    id: 'ary',
    name: 'Ariane',
    city: 'Ilhabela',
    country: 'Brasil',
    descriptors: ['Attuned', 'Compassionate', 'Integrative'],
    descriptorsPT: ['Presente', 'Compassiva', 'Integrativa'],
    bio: 'Based in Ilhabela, São Paulo, Ariane expresses the CherieThai Method through exceptional sensitivity, presence and thoughtful integration.',
    bioPoints: [
      'Treatments are characterised by graceful movement, attentive touch and an intuitive ability to perceive subtle changes throughout the body',
      'Combines gentle precision with surprisingly effective pressure, creating unhurried sessions that encourage both physical restoration and a deep sense of ease',
      'Reflects a practitioner who values careful listening, meaningful connection and a truly individual approach to care',
    ],
    bioPT: 'Baseada em Ilhabela, São Paulo, Ariane expressa o Método CherieThai por meio de uma sensibilidade excepcional, presença e uma abordagem profundamente integrativa.',
    bioPTPoints: [
      'Seus atendimentos são marcados por movimentos elegantes, toque atento e uma capacidade intuitiva de perceber as sutilezas do corpo',
      'Combinando delicadeza e uma pressão surpreendentemente eficaz, conduz sessões sem pressa, favorecendo tanto a recuperação física quanto uma profunda sensação de bem-estar',
      'Seu trabalho reflete uma terapeuta que valoriza a escuta, a conexão humana e um cuidado verdadeiramente individualizado',
    ],
    youtubeId: 'pAcb0cOhUBQ',
    coordinates: [-45.358, -23.778], // Ilhabela, São Paulo
    instagram: 'aryspa.oficial',
  },
  {
    id: 'adrirod',
    name: 'Adriane Rodrigues',
    city: 'Recife',
    country: 'Brasil',
    descriptors: ['Investigative', 'Light', 'Persistent'],
    descriptorsPT: ['Investigativa', 'Leve', 'Persistente'],
    bio: 'Based in Recife, Adriani integrates her background in physiotherapy with the CherieThai Method through a mindset of continuous learning and refinement.',
    bioPoints: [
      'Naturally inquisitive, she approaches every technique with thoughtful curiosity — always seeking to understand not only how it works, but why',
      'Treatments are characterised by graceful movement, careful observation and an adaptable approach that respects each individual\'s needs',
      'Through dedication and repeated practice, she has developed an elegant style that reflects both technical precision and a deep commitment to lifelong learning',
    ],
    bioPT: 'Baseada em Recife, Adriani integra sua formação em Fisioterapia ao Método CherieThai por meio de uma postura marcada pela investigação e pelo aperfeiçoamento contínuo.',
    bioPTPoints: [
      'Naturalmente curiosa, busca compreender não apenas como cada técnica é executada, mas também o raciocínio por trás de sua aplicação',
      'Seus atendimentos são conduzidos com movimentos elegantes, observação cuidadosa e uma abordagem adaptável, sempre respeitando as necessidades individuais de cada pessoa',
      'Sua dedicação ao estudo e à prática constante resultou em um estilo refinado que une precisão técnica e um compromisso genuíno com a evolução profissional',
    ],
    youtubeId: 'Yeui6-zye_k',
    coordinates: [-34.881, -8.053], // Recife, Pernambuco
    instagram: 'adrianerodriguesfisio',
  },
  {
    id: 'vansan',
    name: 'Vanessa Santiago',
    city: 'Lauro de Freitas',
    country: 'Brasil',
    descriptors: ['Artistic', 'Harmonious', 'Sensitive'],
    descriptorsPT: ['Artística', 'Harmônica', 'Sensível'],
    bio: 'Based in Lauro de Freitas, Bahia, Vanessa combines her background in physiotherapy and Pilates with the CherieThai Method to create a refined and movement-focused approach to care.',
    bioPoints: [
      'Explores how manual therapy can complement movement education, helping individuals improve comfort, mobility and body awareness',
      'Treatments are characterised by graceful transitions, thoughtful touch and a strong sense of rhythm',
      'Reflects a practitioner who values both technical quality and artistic expression',
      'Her attention to detail and naturally elegant style allow each treatment to feel deeply personalised and purposeful',
    ],
    bioPT: 'Baseada em Lauro de Freitas, Bahia, Vanessa integra sua formação em Fisioterapia e Pilates ao Método CherieThai, desenvolvendo uma abordagem refinada e orientada pelo movimento.',
    bioPTPoints: [
      'Seu trabalho explora como a terapia manual pode complementar a educação do movimento, promovendo maior conforto, mobilidade e consciência corporal',
      'Seus atendimentos são marcados por transições elegantes, toque cuidadoso e um ritmo naturalmente harmonioso',
      'Reflete uma terapeuta que une qualidade técnica e sensibilidade artística',
      'Sua atenção aos detalhes e sua forma delicada de conduzir cada sessão tornam seus tratamentos únicos e profundamente personalizados',
    ],
    youtubeId: 'y6Nx5skKXKY',
    coordinates: [-38.331, -12.897], // Lauro de Freitas, Bahia
    instagram: 'institutovanessasantiago',
  },
  {
    id: 'kamala',
    name: 'Kamala',
    city: 'Niterói',
    country: 'Brasil',
    descriptors: ['Perceptive', 'Subtle', 'Holistic'],
    descriptorsPT: ['Perceptiva', 'Sutil', 'Holística'],
    bio: 'Based in Niterói, Rio de Janeiro, Kamala brings a distinctive perspective to the CherieThai Method through her background in Ayurvedic therapy.',
    bioPoints: [
      'Her natural ability to observe patterns within the body allows her to approach each treatment with remarkable perception and sensitivity',
      'Rather than focusing solely on isolated symptoms, she seeks to understand how different systems influence one another',
      'Creates treatments that are both subtle in execution and deeply effective',
      'Her work reflects a thoughtful integration of her previous experience with the clinical reasoning and manual principles of the CherieThai Method',
    ],
    bioPT: 'Baseada em Niterói, Rio de Janeiro, Kamala traz ao Método CherieThai uma perspectiva singular, enriquecida por sua formação em terapia ayurvédica.',
    bioPTPoints: [
      'Sua capacidade natural de perceber padrões no corpo permite conduzir cada atendimento com sensibilidade e profundidade',
      'Em vez de observar apenas sintomas isolados, busca compreender como diferentes sistemas se relacionam',
      'Constrói tratamentos sutis na execução e, ao mesmo tempo, profundamente eficazes',
      'Seu trabalho reflete uma integração cuidadosa entre sua experiência anterior e o raciocínio clínico e os princípios manuais desenvolvidos ao longo da formação no Método CherieThai',
    ],
    youtubeId: '92iNaPECTvg',
    coordinates: [-43.104, -22.883], // Niterói, Rio de Janeiro
    instagram: 'kamala_veda_',
  },
  {
    id: 'roseli',
    name: 'Rose',
    city: 'Rio de Janeiro',
    country: 'Brasil',
    descriptors: ['Adaptable', 'Determined', 'Creative'],
    descriptorsPT: ['Adaptável', 'Determinada', 'Criativa'],
    bio: 'Based in Ipanema, Rio de Janeiro, Rose brings an adaptable and creative perspective to the CherieThai Method.',
    bioPoints: [
      'Already experienced in manual therapy, she approached the training with curiosity and a genuine willingness to refine her practice',
      'Throughout the course, she continuously explored how to integrate the Method into her own style while remaining faithful to its principles',
      'Her commitment to improvement and her determination to develop greater precision and confidence reflect a practitioner who is always evolving in pursuit of better care',
    ],
    bioPT: 'Baseada em Ipanema, Rio de Janeiro, Rose traz uma abordagem adaptável e criativa ao Método CherieThai.',
    bioPTPoints: [
      'Já atuando com terapia manual, participou da formação com curiosidade e uma disposição genuína para aprimorar sua prática',
      'Ao longo do curso, buscou constantemente integrar o Método ao seu próprio estilo de atendimento, mantendo-se fiel aos seus princípios',
      'Sua determinação em evoluir e seu compromisso com o aperfeiçoamento contínuo refletem uma terapeuta que está sempre em desenvolvimento para oferecer um cuidado cada vez mais qualificado',
    ],
    youtubeId: 'KTmLmcBy608',
    coordinates: [-43.182, -22.971], // Rio de Janeiro
    instagram: 'rosecds',
  },
  {
    id: 'martha',
    name: 'Martha',
    city: 'Florianópolis',
    country: 'Brasil',
    descriptors: ['Coordinated', 'Fluid', 'Refined'],
    descriptorsPT: ['Coordenada', 'Fluente', 'Refinada'],
    bio: 'Based in Florianópolis, Martha brings a unique combination of movement expertise and manual therapy to the CherieThai Method.',
    bioPoints: [
      'Background in yoga and movement education',
      'Demonstrates exceptional body awareness, learning and expressing complex techniques with remarkable coordination and control',
      'Treatments are characterised by fluid transitions, elegant movement and thoughtful execution',
      'Reflects a practitioner who values both technical precision and the natural rhythm of the body',
    ],
    bioPT: 'Baseada em Florianópolis, Martha une sua experiência em yoga e movimento ao Método CherieThai de forma singular.',
    bioPTPoints: [
      'Sua consciência corporal e coordenação permitem compreender e executar técnicas complexas com naturalidade, precisão e controle',
      'Seus atendimentos são marcados por transições fluidas, movimentos elegantes e uma execução cuidadosa',
      'Reflete uma terapeuta que valoriza tanto a qualidade técnica quanto o ritmo natural do corpo',
    ],
    youtubeId: 'i9EHoqPDp6I',
    coordinates: [-48.548, -27.595], // Florianópolis
    instagram: 'marthamusolino',
  },
  {
    id: 'crisjes',
    name: 'Cristiane Jesus',
    city: 'Belo Horizonte',
    country: 'Brasil',
    descriptors: ['Deep', 'Determined', 'Integrative'],
    descriptorsPT: ['Profunda', 'Determinada', 'Integrativa'],
    bio: 'Cristiane is among the most determined and integrative practitioners to graduate from the CherieThai Institute.',
    bioPoints: [
      'Based in Belo Horizonte, Minas Gerais',
      'Completed both the CherieThai Professional Training and the Institute\'s inaugural Thailand Retreat',
      'Continually seeks to deepen her understanding of manual therapy beyond technique alone',
      'Work particularly expressed through refined oil treatments',
      'Combines thoughtful pressure, fluid transitions and an integrative perspective',
      'Delivers treatments that are both effective and deeply restorative',
    ],
    bioPT: 'Cristiane está entre as terapeutas mais determinadas e integrativas formadas pelo Instituto CherieThai.',
    bioPTPoints: [
      'Baseada em Belo Horizonte, Minas Gerais',
      'Formada pelo Instituto CherieThai e participante do primeiro Retiro CherieThai na Tailândia',
      'Busca aprofundar continuamente sua compreensão da terapia manual além das técnicas',
      'Trabalho especialmente expresso nas terapias com óleo',
      'Combina pressão precisa, transições fluidas e visão integrativa',
      'Oferece tratamentos eficazes e profundamente restauradores',
    ],
    youtubeId: 'SiRaFOEmDVw',
    coordinates: [-43.937, -19.920], // Belo Horizonte, Minas Gerais
    instagram: 'cris.jes',
  },
  {
    id: 'alok',
    name: 'Tati Alok',
    city: 'Florianópolis',
    country: 'Brasil',
    descriptors: ['Enigmatic', 'Ritualistic', 'Experienced'],
    descriptorsPT: ['Enigmática', 'Ritualística', 'Experiente'],
    bio: 'Based in Florianópolis, Tati Alok brings many years of experience in bodywork, Tantra and spiritual practices into her expression of the CherieThai Method.',
    bioPoints: [
      'Her work carries an almost ritualistic quality, shaped by an established sensitivity to touch, atmosphere and the subtleties of human presence',
      'During her training, she stood out for the way she transformed technique into something deeply personal — moving with intention, intuition and a quiet sense of mystery',
      'Rather than simply adding another modality to an already extensive practice, she absorbed the CherieThai Method into a body of work that has been developing over many years',
    ],
    bioPT: 'Baseada em Florianópolis, Tati Alok traz muitos anos de experiência em terapias corporais, Tantra e práticas de desenvolvimento espiritual para sua expressão do Método CherieThai.',
    bioPTPoints: [
      'Seu trabalho possui uma qualidade quase ritualística, construída a partir de uma sensibilidade já amadurecida para o toque, a atmosfera e as sutilezas da presença humana',
      'Durante a formação, destacou-se pela maneira como transformava técnica em algo profundamente pessoal, movendo-se com intenção, intuição e uma presença silenciosamente enigmática',
      'Mais do que acrescentar uma nova modalidade à sua trajetória, incorporou o Método CherieThai a um trabalho corporal que vem sendo desenvolvido e aprofundado ao longo de muitos anos',
    ],
    youtubeId: 'T0DEF-q4jdA',
    coordinates: [-48.549, -27.595], // Florianópolis, SC
    instagram: 'tati.alok',
  },
  {
    id: 'yurimussury',
    name: 'Yuri Mussury',
    city: 'Caraíva',
    country: 'Brasil',
    descriptors: ['Complete', 'Masterful', 'Insightful'],
    descriptorsPT: ['Completo', 'Magistral', 'Perspicaz'],
    bio: 'Based between Caraíva, Bahia, and São Paulo, Yuri represents one of the most complete expressions of the CherieThai Method to emerge from the Institute.',
    bioPoints: [
      'Demonstrated an exceptional understanding of movement, touch, transitions and the reasoning that connects them',
      'His work is beautifully composed, technically accomplished and remarkably natural — reflecting not simply an ability to reproduce techniques, but to truly understand and embody the Method',
      'Equally generous with his knowledge, he became a valuable presence among his peers, often helping others refine their own understanding throughout the training',
    ],
    bioPT: 'Dividindo sua atuação entre Caraíva, Bahia, e São Paulo, Yuri representa uma das expressões mais completas do Método CherieThai formadas pelo Instituto.',
    bioPTPoints: [
      'Demonstrou uma compreensão excepcional do movimento, do toque, das transições e do raciocínio que conecta cada elemento',
      'Seu trabalho é harmonioso, tecnicamente desenvolvido e extremamente natural, revelando não apenas a capacidade de executar as técnicas, mas de realmente compreender e incorporar o Método',
      'Generoso com seu conhecimento, tornou-se uma presença valiosa entre os colegas, contribuindo espontaneamente para o desenvolvimento dos demais durante a formação',
    ],
    youtubeId: 'cUrBv8NLx1I',
    coordinates: [-39.197, -16.998], // Caraíva, Bahia
    instagram: 'yurimussury',
  },
  {
    id: 'adrilira',
    name: 'Adri Lira',
    city: 'France',
    country: 'France',
    descriptors: ['Tactile', 'Intuitive', 'Potent'],
    descriptorsPT: ['Tátil', 'Intuitiva', 'Potente'],
    bio: 'Based in France, Adri Lira brings an exceptionally tactile and intuitive sensitivity to the CherieThai Method.',
    bioPoints: [
      'As a visually impaired practitioner, she has developed an attentive relationship with touch — using her hands to explore subtle differences in tissue, tension and response throughout the body',
      'Her work carries a beautiful contrast: remarkably gentle in its approach, yet surprisingly potent in its effect',
      'Naturally curious and deeply engaged with learning, Adri continually seeks to understand beyond the technique itself, approaching the body with sensitivity, exploration and genuine fascination',
    ],
    bioPT: 'Baseada na França, Adri Lira traz ao Método CherieThai uma sensibilidade tátil e intuitiva muito particular.',
    bioPTPoints: [
      'Como terapeuta com deficiência visual, desenvolveu uma relação extremamente atenta com o toque, utilizando as mãos para perceber diferenças sutis nos tecidos, nas tensões e nas respostas do corpo',
      'Seu trabalho carrega um contraste marcante: extremamente gentil na abordagem e, ao mesmo tempo, surpreendentemente potente',
      'Naturalmente curiosa e profundamente envolvida com o aprendizado, Adri busca constantemente compreender além da técnica, explorando o corpo com sensibilidade, interesse e uma genuína vontade de aprofundar',
    ],
    youtubeId: 'IZh4iLUfvCk',
    coordinates: [2.349, 48.864], // France — update city when known
    instagram: 'adrilira_massagem',
  },
  {
    id: 'mary',
    name: 'Mary',
    city: 'Belo Horizonte',
    country: 'Brasil',
    descriptors: ['Maternal', 'Therapeutic', 'Capable'],
    descriptorsPT: ['Maternal', 'Terapêutica', 'Resolutiva'],
    bio: 'Based in Belo Horizonte, Minas Gerais, Mary brings a deeply nurturing presence to the CherieThai Method, combined with a particularly strong ability to work with pain and physically demanding bodies.',
    bioPoints: [
      'Her gentle, reassuring nature allows people to feel at ease in her care, while beneath that softness lies a highly capable therapeutic approach',
      'She works particularly well with active and athletic bodies, adapting her touch and techniques to address tension, restriction and discomfort with confidence',
      "Mary's work is defined by a beautiful contrast: comforting in presence, yet purposeful and highly effective in treatment",
    ],
    bioPT: 'Baseada em Belo Horizonte, Minas Gerais, Mary traz ao Método CherieThai uma presença profundamente acolhedora, combinada com uma habilidade marcante no trabalho com dor e corpos fisicamente exigidos.',
    bioPTPoints: [
      'Seu jeito gentil e tranquilizador faz com que as pessoas se sintam naturalmente à vontade em seus cuidados, enquanto por trás dessa suavidade existe uma abordagem terapêutica extremamente capaz',
      'Tem especial facilidade com corpos ativos e atléticos, adaptando seu toque e suas técnicas para trabalhar tensões, restrições e desconfortos com segurança',
      'O trabalho de Mary é marcado por um contraste muito particular: acolhedor na presença, mas direcionado e eficaz no tratamento',
    ],
    youtubeId: 'NHDKqp8XWSA',
    coordinates: [-43.938, -19.921], // Belo Horizonte
    instagram: 'massoterapeuta_mary',
  },
  {
    id: 'juliovillanueva',
    name: 'Julio Villanueva',
    city: 'Salvador',
    country: 'Brasil',
    descriptors: ['Accomplished', 'Kinaesthetic', 'Inquisitive'],
    descriptorsPT: ['Exímio', 'Cinestésico', 'Investigativo'],
    bio: 'Based in Salvador, Bahia, Julio is a sports-focused therapist whose work within the CherieThai Method is distinguished by technical depth, curiosity and a strong capacity for complex therapeutic care.',
    bioPoints: [
      'A highly kinaesthetic learner, he seeks to experience techniques in his own body before reproducing them — understanding not only how a movement is performed, but how it should be perceived by the person receiving it',
      'Throughout his training, his constant desire to revisit, question and refine each technique revealed an exceptional commitment to quality',
      'His work is particularly suited to active bodies and complex presentations, combining confident manual skills with an investigative approach to treatment',
    ],
    bioPT: 'Baseado em Salvador, Bahia, Julio é um terapeuta voltado ao universo esportivo, cuja expressão do Método CherieThai se destaca pela profundidade técnica, curiosidade e capacidade de trabalhar casos complexos.',
    bioPTPoints: [
      'Com uma forma de aprendizado fortemente cinestésica, busca sentir as técnicas no próprio corpo antes de reproduzi-las, compreendendo não apenas como cada movimento é executado, mas também como deve ser percebido por quem o recebe',
      'Durante a formação, seu desejo constante de repetir, questionar e aperfeiçoar cada técnica revelou um compromisso excepcional com a qualidade',
      'Seu trabalho se destaca especialmente em corpos ativos e demandas complexas, combinando habilidade manual e uma abordagem investigativa ao tratamento',
    ],
    youtubeId: '6tnB6lB66v8',
    coordinates: [-38.501, -12.971], // Salvador, Bahia
    instagram: 'afroterapeuta',
  },
]

// ─── City coordinate reference (approximate centres) ──────────────────────────
// Use these when adding new students — copy the coordinates from here.
//
// BRAZIL
// São Paulo:            [-46.633, -23.550]
// Rio de Janeiro:       [-43.172, -22.906]
// Belo Horizonte:       [-43.937, -19.920]
// Brasília:             [-47.929, -15.780]
// Salvador:             [-38.510, -12.971]
// Curitiba:             [-49.273, -25.429]
// Fortaleza:            [-38.543,  -3.717]
// Porto Alegre:         [-51.217, -30.027]
// Recife:               [-34.881,  -8.053]
// Manaus:               [-60.021,  -3.101]
// Florianópolis:        [-48.548, -27.595]
// Goiânia:              [-49.253, -16.686]
// Belém:                [-48.504,  -1.455]
// Vitória:              [-40.337, -20.319]
// Natal:                [-35.209,  -5.794]
// Maceió:               [-35.735,  -9.666]
// João Pessoa:          [-34.863,  -7.115]
// Aracaju:              [-37.073, -10.909]
// Campo Grande:         [-54.645, -20.469]
// Cuiabá:               [-56.097, -15.601]
// Porto Velho:          [-63.900,  -8.761]
// Macapá:               [-51.066,   0.034]
// Boa Vista:            [-60.673,   2.819]
// Rio Branco:           [-67.808,  -9.974]
// Palmas:               [-48.359, -10.240]
// São Luís:             [-44.302,  -2.529]
// Teresina:             [-42.803,  -5.089]
// Maceió:               [-35.735,  -9.666]
//
// INTERNATIONAL
// Lisbon:               [-9.139,  38.722]
// London:               [-0.127,  51.507]
// Paris:                [ 2.352,  48.856]
// Berlin:               [13.405,  52.520]
// Amsterdam:            [ 4.902,  52.368]
// Madrid:               [-3.703,  40.416]
// Rome:                 [12.496,  41.902]
// Barcelona:            [ 2.154,  41.385]
// Bangkok:              [100.501, 13.756]
// Tokyo:                [139.691, 35.689]
// New York:             [-74.006, 40.712]
// Los Angeles:          [-118.243, 34.052]
// Miami:                [-80.191, 25.774]
// Buenos Aires:         [-58.381, -34.603]
// Bogotá:               [-74.072,  4.711]
// Santiago:             [-70.649, -33.458]
// Mexico City:          [-99.133, 19.432]
// Sydney:               [151.209, -33.868]
// Cape Town:            [ 18.424, -33.924]
// Dubai:                [ 55.296,  25.276]
