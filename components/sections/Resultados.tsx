'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import { useLanguage } from '@/contexts/LanguageContext'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

const uiTranslations = {
  PT: {
    heroLabel: 'Clínicas  ·  Resultados',
    heroLine1: 'O trabalho',
    heroLine2: 'em evidência.',
    heroBody: 'Casos reais. Dores com histórico. Resultados documentados que permanecem.',
    editorialNote: 'Cada caso aqui documentado é real. Nenhum foi editado para impressionar. O trabalho fala por si.',
    filterAll: 'Todos',
    filterLabel: 'São Paulo  ·  Rio de Janeiro',
    symptoms: 'Sintomas',
    treatment: 'Tratamento',
    techniques: 'Técnicas utilizadas',
    outcome: 'Resultado',
    testimonial: 'Depoimento',
    videoSoon: 'Vídeo em breve',
    before: 'Antes',
    after: 'Depois',
    closingQuote: '"Estes casos não são excepcionais. São o que acontece quando o corpo recebe\no trabalho certo, com a leitura certa, no momento certo."',
    closingAttribution: 'Cherie T. Charnkul',
  },
  EN: {
    heroLabel: 'Clinics  ·  Results',
    heroLine1: 'The work,',
    heroLine2: 'made visible.',
    heroBody: 'Real cases. Longstanding pain. Documented results that remain.',
    editorialNote: 'Every case shown here is real. Nothing was edited to impress. The work speaks for itself.',
    filterAll: 'All',
    filterLabel: 'São Paulo  ·  Rio de Janeiro',
    symptoms: 'Symptoms',
    treatment: 'Treatment',
    techniques: 'Techniques used',
    outcome: 'Result',
    testimonial: 'Testimonial',
    videoSoon: 'Video coming soon',
    before: 'Before',
    after: 'After',
    closingQuote: '"These cases are not exceptional. They are what happens when the body receives\nthe right work, with the right reading, at the right moment."',
    closingAttribution: 'Cherie T. Charnkul',
  },
}

type Case = {
  id: string
  location: 'São Paulo' | 'Rio de Janeiro'
  client: string
  age: number | null
  profession: string
  headline: string
  years: string
  complaint: string
  symptoms: string
  treatment: string
  techniques: string[]
  outcome?: string
  sessions?: string
  testimonial?: { author: string; role: string; text: string }
  before?: string | null
  after?: string | null
  cover?: string | null
  video: string | null
}

const cases: Case[] = [
  {
    id: 'amanda',
    location: 'São Paulo',
    client: 'Amanda',
    age: 43,
    profession: 'Economista',
    headline: 'Superou 15 anos de dor no ombro e pescoço',
    years: '15 anos',
    complaint: 'Dor crônica no ombro, pescoço e distúrbio do sono',
    symptoms: 'Dor crônica e constante no ombro e cefaleias, com restrição de movimento, dor aguda, impacto respiratório e distúrbio do sono.',
    treatment: 'Trabalho em camadas para liberação de aderências, criação de espaço entre as fibras e reeducação da postura e da respiração. A tolerância à dor foi progressivamente ampliada para melhorar a funcionalidade durante as crises.',
    techniques: [
      'Liberação de aderências em camadas',
      'Criação de espaço entre fibras',
      'Reeducação postural',
      'Reeducação respiratória',
      'Ampliação progressiva da tolerância',
    ],
    video: 'https://www.youtube.com/embed/swtG3Y3nmyw?autoplay=1&mute=1&loop=1&playlist=swtG3Y3nmyw&controls=1&playsinline=1&rel=0&modestbranding=1',
  },
  {
    id: 'fisio',
    location: 'São Paulo',
    client: 'Fisioterapeuta',
    age: null,
    profession: 'Fisioterapeuta · Hospital privado, São Paulo',
    headline: 'Superou 5 anos de dor crônica no ombro',
    years: '5 anos',
    complaint: 'Dor no trapézio com bloqueio severo de rotação cervical',
    symptoms: 'Dor constante com sensação de pinçamento na região do ombro e grande limitação para rotacionar o pescoço. A rotação cervical para a direita, lado da dor, não ultrapassava cerca de 30 graus. Histórico de aproximadamente cinco anos de dor persistente no trapézio, iniciada durante a pandemia.',
    treatment: 'O trabalho focou em restaurar progressivamente a rotação cervical enquanto aumentávamos a tolerância do sistema ao movimento. Foi realizada uma liberação profunda das tensões acumuladas no trapézio, que estavam comprimindo a região e contribuindo para o pinçamento. A descompressão dessas estruturas permitiu criar mais espaço funcional no ombro e no pescoço, facilitando o retorno do movimento sem dor.',
    techniques: [
      'Liberação profunda do trapézio',
      'Descompressão cervical progressiva',
      'Restauração da rotação cervical',
      'Criação de espaço funcional no ombro',
      'Ampliação progressiva da tolerância ao movimento',
    ],
    outcome: 'Ao final da primeira sessão, a cliente relatou cerca de 80% de redução da dor e melhora significativa da mobilidade cervical. Rotação restaurada em 90%. A sensação de pinçamento foi completamente eliminada. O resultado permaneceu estável um mês depois.',
    sessions: '1 sessão · retorno após 1 mês',
    testimonial: {
      author: '@ci.f.gomes',
      role: 'Fisioterapeuta · Hospital privado, São Paulo',
      text: 'Eu tinha uma dor de estimação na região do ombro, que eu sempre ia levando com adesivos para dor e outras medicações. Mas ultimamente a mobilidade do braço direito e da cervical estavam indo cada vez mais para o espaço. Durante a sessão com a Cherrie, eu fui sentindo os pontos dolorosos se desfazendo aos pouquinhos. Ela foi respeitando meus limites e cuidadosamente, liberando toda a tensão. A certeza de cada ação e a paz que ela transmite fez toda a diferença. Sai de lá destravada real. E depois da segunda sessão, percebi que ganhei ainda mais mobilidade de cervical.',
    },
    video: 'https://www.youtube.com/embed/FsbpJW6Mq54?autoplay=1&mute=1&loop=1&playlist=FsbpJW6Mq54&controls=1&playsinline=1&rel=0&modestbranding=1',
  },
  {
    id: 'joelho-nazare',
    location: 'São Paulo',
    client: 'Nazaré',
    age: null,
    profession: 'Paciente · @nazaremiranda',
    headline: 'Realinhamento de joelho em uma sessão',
    years: '1 sessão',
    complaint: 'Desalinhamento do joelho com comprometimento postural',
    symptoms: 'Desalinhamento visível do joelho com impacto na distribuição de carga e postura. Padrão de compensação estrutural afetando quadris e coluna.',
    treatment: 'Realizamos ajustes manuais no joelho, mantendo o foco principal em quadris, alinhamento e distribuição de carga. Quando entendemos que o joelho não trabalha sozinho, mas em conexão direta com os quadris, o corpo responde rápido.',
    techniques: [
      'Ajuste manual do joelho',
      'Mobilidade e alinhamento de quadris',
      'Redistribuição de carga',
      'Reorganização biomecânica postural',
    ],
    outcome: 'Realinhamento visível do joelho após uma única sessão. Melhora imediata na distribuição de carga e postura.',
    sessions: '1 sessão',
    before: null,
    after: null,
    video: null,
  },
  {
    id: 'miranda-nazare',
    location: 'São Paulo',
    client: 'Miranda Nazaré',
    age: 63,
    profession: 'Empresária · Herbalife',
    headline: 'Superou 15 anos de dor lombar crônica',
    years: '15 anos',
    complaint: 'Dor lombar crônica com origem em fratura antiga',
    symptoms: 'Dor lombar persistente por mais de 15 anos, associada a sobrecarga progressiva após fratura na perna aos 20 anos. O corpo desenvolveu compensações na pelve e na distribuição de carga, gerando tensão contínua na região sacrolombar, rigidez muscular e dor durante atividades físicas.',
    treatment: 'Trabalhamos de forma integrada toda a região sacrolombar e cadeia inferior, com foco na liberação profunda dos tecidos, mobilidade de quadril e reorganização biomecânica do corpo. Através de três sessões intensivas, reduzimos as compensações estruturais e restauramos a elasticidade muscular. Após o processo, houve reversão significativa da sobrecarga e eliminação da dor.',
    techniques: [
      'Liberação profunda sacrolombar',
      'Mobilidade de quadril',
      'Reorganização biomecânica',
      'Liberação da cadeia inferior',
      'Restauração da elasticidade muscular',
    ],
    outcome: 'Eliminação da dor após 3 sessões intensivas. Dois meses após a última sessão, permanece sem dor, seguindo apenas com manutenção periódica.',
    sessions: '3 sessões intensivas',
    testimonial: {
      author: '@nazaremiranda',
      role: 'Empresária · São Paulo',
      text: 'Sempre fui uma pessoa muito ativa. Mas com 20 anos sofri um acidente e perdi um pouco de mobilidade na perna esquerda. Depois de muitos anos compensando essa perda, meu corpo começou a sentir. Uma tarde espirrei e travei. Por esse motivo entrei em contato com a Cherie e desde a hora que cheguei senti confiança. Ela foi muito pontual e sai de lá sem dor, andando bem e destravada. Já voltei outras vezes porque percebi que depois de alguns dias, continuei evoluindo minha condição. Verdadeiramente sou muito grata e pelo menos uma vez por mês quero estar com ela para continuar me sentindo bem.',
    },
    video: 'https://www.youtube.com/embed/0UwufJJtq_0?autoplay=1&mute=1&loop=1&playlist=0UwufJJtq_0&controls=1&playsinline=1&rel=0&modestbranding=1',
  },
  {
    id: 'vanessa',
    location: 'São Paulo',
    client: 'Vanessa',
    age: 44,
    profession: 'Empresária',
    headline: 'Superando 5 anos de dor na lombar',
    years: '5 anos',
    complaint: 'Dor lombar com rigidez e padrões de proteção crônicos',
    symptoms: 'Dor lombar há cinco anos, com limitação de movimento e ativação constante do sistema nervoso, resultando em rigidez corporal e padrões de proteção excessivos.',
    treatment: 'Utilizamos alongamentos tailandeses avançados estudados, adaptados e moldados dentro da abordagem CherieThai: uma integração de mobilidade ativa, tração miofascial, manipulação articular e compressões profundas. Essa combinação reorganizou os padrões musculares crônicos, liberou bloqueios de fáscia e devolveu ao corpo a capacidade de movimento eficiente e sem dor. Sessão após sessão, o corpo começou a recuperar função, estabilidade e amplitude.',
    techniques: [
      'Alongamentos tailandeses avançados',
      'Mobilidade ativa integrada',
      'Tração miofascial',
      'Manipulação articular',
      'Compressões profundas',
      'Descompressão lombar progressiva',
    ],
    outcome: 'Redução progressiva da dor ao longo das sessões, com recuperação da estabilidade, função e amplitude de movimento.',
    testimonial: {
      author: '@vaamorim',
      role: 'Empresária · São Paulo',
      text: 'Eu cheguei até a Cherie por indicação e foi incrível. O nível de relaxamento, não só mental, mas de todos os músculos, porque ela vai soltando cada fibra muscular. Parece que a Cherie vai te dissolvendo aos poucos. Saio sem dor porque é um tratamento. Tem muita técnica e ela se entrega de corpo e alma, porque entende e ama o que faz. Obrigada por cuidar tão bem de mim!',
    },
    video: 'https://www.youtube.com/embed/dNbG-NJdI2g?autoplay=1&mute=1&loop=1&playlist=dNbG-NJdI2g&controls=1&playsinline=1&rel=0&modestbranding=1',
  },
  {
    id: 'karen',
    location: 'São Paulo',
    client: 'Karen',
    age: 29,
    profession: 'Artista circense profissional',
    headline: 'Superou 2 anos de dor e dormência no ombro',
    years: '2 anos',
    complaint: 'Dor e dormência no ombro direito',
    symptoms: 'Dor aguda no ombro direito há dois anos, associada a dormência nos dedos. Tentativas anteriores de tratamento não apresentaram resultados.',
    treatment: 'O trabalho focou na região cervical, abordando a irritação do nervo radial com irradiação para a mão. Foram utilizadas técnicas de estimulação sensorial e descompressão das fibras musculares ao redor do nervo, além da liberação do ombro para reduzir padrões compressivos. Técnicas de neuromodulação favoreceram a reorganização sensorial, permitindo o retorno progressivo da sensibilidade.',
    techniques: [
      'Liberação cervical profunda',
      'Descompressão de fibras musculares',
      'Estimulação sensorial',
      'Neuromodulação',
      'Liberação do ombro',
    ],
    video: 'https://www.youtube.com/embed/v_5QA8QqE8E?autoplay=1&mute=1&loop=1&playlist=v_5QA8QqE8E&controls=1&playsinline=1&rel=0&modestbranding=1',
  },
  {
    id: 'flavio',
    location: 'São Paulo',
    client: 'Flávio',
    age: 48,
    profession: 'Diretor de produção',
    headline: 'Superou 4 anos de dor no joelho',
    years: '4 anos',
    complaint: 'Dor crônica no joelho direito',
    symptoms: 'Dor no joelho direito há quatro anos, com limitação de movimento e impacto nas atividades do dia a dia.',
    treatment: 'Foi adotada uma abordagem integrativa considerando não apenas o joelho, mas todas as estruturas diretamente relacionadas à sua função. O trabalho incluiu liberação específica dos músculos adutores. Por se tratar de um quadro de desgaste associado a anos de treino e à idade, o foco foi o manejo da dor e a manutenção da funcionalidade, permitindo que ele continuasse treinando em acompanhamento com seu médico.',
    techniques: [
      'Abordagem integrativa estrutural',
      'Liberação dos músculos adutores',
      'Manejo da dor funcional',
      'Mobilização articular do joelho',
    ],
    video: 'https://www.youtube.com/embed/6nd3rOV_-G8?autoplay=1&mute=1&loop=1&playlist=6nd3rOV_-G8&controls=1&playsinline=1&rel=0&modestbranding=1',
  },
  {
    id: 'vitor',
    location: 'São Paulo',
    client: 'Vitor',
    age: 28,
    profession: 'Secretário executivo',
    headline: 'Superou 4 anos de dor nas costas',
    years: '4 anos',
    complaint: 'Tensão crônica dorsal com cefaleia',
    symptoms: 'Tensão crônica há anos, com limitação constante na região dorsal e episódios de cefaleia.',
    treatment: 'Combinação de pressões profundas, alongamentos específicos e acupressão, sincronizados com a respiração, permitindo acesso seguro às camadas profundas e liberação progressiva das tensões acumuladas.',
    techniques: [
      'Pressões profundas sincronizadas',
      'Alongamentos específicos',
      'Acupressão',
      'Integração respiratória',
      'Liberação progressiva em camadas',
    ],
    video: 'https://www.youtube.com/embed/j9gFj0iwJQY?autoplay=1&mute=1&loop=1&playlist=j9gFj0iwJQY&controls=1&playsinline=1&rel=0&modestbranding=1',
  },
  {
    id: 'guilherme',
    location: 'São Paulo',
    client: 'Guilherme',
    age: 30,
    profession: 'Psicólogo',
    headline: 'Superou 7 anos de dor na lombar',
    years: '7 anos',
    complaint: 'Dor lombar crônica de alta intensidade',
    symptoms: 'Dor lombar constante há 7 anos, com variação de intensidade associada ao trabalho, treino, postura e longos períodos sentado.',
    treatment: 'Foco no aumento da mobilidade dos quadris para reduzir a sobrecarga na lombar e restaurar o alinhamento natural da coluna. Após uma sessão intensa, houve redução significativa da dor e melhora funcional.',
    techniques: [
      'Mobilidade avançada de quadris',
      'Descompressão lombar',
      'Restauração do alinhamento da coluna',
      'Mobilidade Thai avançada',
    ],
    video: 'https://www.youtube.com/embed/Rw8bzLNUA3E?autoplay=1&mute=1&loop=1&playlist=Rw8bzLNUA3E&controls=1&playsinline=1&rel=0&modestbranding=1',
  },
  {
    id: 'bruno',
    location: 'Rio de Janeiro',
    client: 'Bruno',
    age: null,
    profession: 'Tenista · Ipanema, Rio de Janeiro',
    headline: 'Quase 2 anos sem poder jogar tênis. Hoje treina sem remédio.',
    years: '2 anos',
    complaint: 'Dor lombar crônica com perda total de função',
    symptoms: 'Quase dois anos sem conseguir jogar tênis ou praticar qualquer exercício — nem amarrar o cadarço. Músculos sempre contraídos, reagindo com dor a qualquer movimento. Tentativas anteriores com outras terapias e uso contínuo de anti-inflamatórios sem resultado.',
    treatment: 'O processo abordou não apenas a dor física, mas o elemento do medo — o obstáculo de voltar a confiar no próprio corpo depois de anos de sofrimento. Após o alívio da dor, o trabalho evoluiu para o recondicionamento do movimento e a reprogramação mental necessária para a recuperação completa.',
    techniques: [
      'Liberação lombar profunda',
      'Recondicionamento corporal progressivo',
      'Reabilitação funcional',
      'Trabalho com o elemento do medo',
      'Reprogramação do movimento',
    ],
    outcome: 'Voltou a jogar tênis e treinar sob orientação profissional. Zero medicamentos. "A Cherri salvou minha vida, serei eternamente grato."',
    sessions: 'Processo de 1 ano · verificado 4 meses após',
    testimonial: {
      author: '@brunochiminazzo',
      role: 'Paciente · Rio de Janeiro',
      text: 'Passei quase 2 anos sem poder jogar tênis e praticar qualquer exercício, não conseguia nem amarrar o cadarço! Já tinha tentado outras terapias e tomava muitos anti-inflamatórios. Meus músculos reagiam com dor aos movimentos e estavam sempre contraídos. Graças à Cherie eu comecei a melhorar e tomei coragem para voltar aos treinos. Hoje estou jogando tênis e treinando e não uso mais nenhum remédio! A Cherri salvou minha vida, serei eternamente grato.',
    },
    video: 'https://www.youtube.com/embed/DsP6716MzUw?autoplay=1&mute=1&loop=1&playlist=DsP6716MzUw&controls=1&playsinline=1&rel=0&modestbranding=1',
  },
  {
    id: 'edna',
    location: 'Rio de Janeiro',
    client: 'Edna',
    age: 81,
    profession: 'Paciente · Ipanema, Rio de Janeiro',
    headline: '81 anos. Anos de dor. 3 sessões.',
    years: 'Anos',
    complaint: 'Dor crônica com anos de evolução',
    symptoms: 'Dona Edna, 81 anos, carregava anos de dor crônica que o tempo havia normalizado. Após múltiplas tentativas com a medicina tradicional sem resultado, a família buscou o tratamento como última alternativa.',
    treatment: 'Abordagem integrada com liberação estrutural das cadeias de tensão acumuladas ao longo dos anos, adaptada às especificidades da faixa etária e ao histórico da paciente. O trabalho foi conduzido com precisão e sensibilidade, respeitando os limites do corpo em cada momento.',
    techniques: [
      'Liberação estrutural em camadas',
      'Descompressão das cadeias de tensão',
      'Mobilização suave e progressiva',
      'Abordagem geriátrica adaptada',
    ],
    outcome: 'Melhora significativa após a sessão, presenciada pela família. A cada sessão seguinte, testemunharam uma melhora notável e contínua.',
    sessions: '3 sessões · Rio de Janeiro',
    testimonial: {
      author: 'Família de Edna',
      role: 'Rio de Janeiro',
      text: 'A avó já estava há anos sofrendo com dor crônica. Depois de muitas tentativas frustradas com a medicina tradicional, foi a melhor decisão possível. A cada sessão, testemunhamos uma melhora notável. Você fez a diferença em nossas vidas. Que possa impactar a vida de mais e mais pessoas. Mil vezes obrigado. Eu, Dudu e toda a sua família, seremos eternamente gratos.',
    },
    video: 'https://www.youtube.com/embed/XFFAP-_K-1o?autoplay=1&mute=1&loop=1&playlist=XFFAP-_K-1o&controls=1&playsinline=1&rel=0&modestbranding=1',
  },
  {
    id: 'pvpiress',
    location: 'Rio de Janeiro',
    client: 'Paulo',
    age: null,
    profession: 'Paciente · Rio de Janeiro',
    headline: 'Sem dor após 7 anos de enxaquecas terríveis.',
    years: '7 anos',
    complaint: 'Dor crônica no ombro com enxaquecas recorrentes',
    symptoms: 'Quase 7 anos sofrendo com crises terríveis de enxaqueca, associadas a dor crônica no ombro. O quadro afetava profundamente a qualidade de vida e não havia cedido com tratamentos anteriores.',
    treatment: 'Liberação cervical profunda e descompressão das estruturas associadas ao ombro, abordando as conexões neurovasculares que alimentavam as enxaquecas. O trabalho integrou a cadeia cervical, escapular e craniana, permitindo que o sistema nervoso encontrasse um novo padrão de regulação.',
    techniques: [
      'Liberação cervical profunda',
      'Descompressão do complexo ombro-escápula',
      'Abordagem neurovascular',
      'Liberação craniana',
      'Reorganização do sistema nervoso',
    ],
    outcome: 'Livre das enxaquecas. Resultados perceptíveis desde a primeira sessão. "Um dos melhores investimentos da minha vida."',
    sessions: '4 sessões',
    testimonial: {
      author: 'PV Pires',
      role: '★★★★★ · Google Review · Rio de Janeiro',
      text: 'Minha recuperação com a Cherie foi incomparável. Ela realmente me salvou. Não foi um investimento barato, mas faço questão de dizer que foi um dos melhores investimentos da minha vida. Depois de quase 7 anos sofrendo com crises terríveis de enxaqueca, hoje posso dizer que estou livre. Tudo isso ficou no passado graças ao talento, sensibilidade e profissionalismo da Cherie. Os resultados já foram perceptíveis desde a primeira sessão, o que pra mim foi impressionante.',
    },
    video: 'https://www.youtube.com/embed/0MpzjewC2XE?autoplay=1&mute=1&loop=1&playlist=0MpzjewC2XE&controls=1&playsinline=1&rel=0&modestbranding=1',
  },
  {
    id: 'miriam-zigoni',
    location: 'Rio de Janeiro',
    client: 'Miriam',
    age: null,
    profession: 'Paciente · @miriam_zigoni · Tratamento com Karl',
    headline: 'Quase 100 noites sem dormir. Hoje sem dor.',
    years: '~100 dias',
    complaint: 'Dor no ombro com insônia severa',
    symptoms: 'Quase 100 noites consecutivas sem dormir por conta de dor intensa no ombro. O quadro havia se tornado insustentável, afetando todas as dimensões da vida da paciente.',
    treatment: 'Karl trabalhou na liberação profunda do ombro e das estruturas adjacentes que geravam dor noturna. O foco foi eliminar o padrão de tensão que impedia o descanso e restaurar a amplitude funcional do braço e do ombro.',
    techniques: [
      'Liberação profunda do ombro',
      'Descompressão cervical',
      'Liberação das estruturas periarticulares',
      'Restauração da função noturna',
    ],
    outcome: 'Sem dor após o tratamento com Karl. Recuperação do sono após quase 100 noites de privação.',
    video: null,
  },
  {
    id: 'cassio',
    location: 'Rio de Janeiro',
    client: 'Cássio',
    age: 51,
    profession: 'Atleta · @cassiosaragoni · Tratamento com Karl',
    headline: '51 anos. Melhor do que nunca.',
    years: '4 meses após',
    complaint: 'Limitação de mobilidade e dor crônica impedindo o desenvolvimento corporal',
    symptoms: 'Limitações progressivas de mobilidade e dor crônica que impediam a prática plena de atividades físicas. Como atleta, a perda de função corporal afetava diretamente sua identidade e qualidade de vida.',
    treatment: 'Karl conduziu o processo de liberação e recondicionamento, trabalhando as restrições de mobilidade e padrões de tensão acumulados. O trabalho permitiu ao corpo recuperar sua capacidade natural de movimento — não apenas aliviando a dor, mas devolvendo a confiança no próprio corpo.',
    techniques: [
      'Liberação miofascial profunda',
      'Recondicionamento de mobilidade',
      'Reabilitação funcional atlética',
      'Trabalho com Karl CherieThai',
    ],
    outcome: 'Quatro meses após a última sessão, voltou a treinar naturalmente e livremente. "51 anos na vida, 27 mental."',
    sessions: 'Resultado verificado 4 meses após última sessão',
    video: null,
  },
  {
    id: 'escoliose',
    location: 'Rio de Janeiro',
    client: 'Paciente',
    age: 12,
    profession: 'Estudante',
    headline: 'Correção de escoliose em paciente de 12 anos',
    years: 'Múltiplas sessões',
    complaint: 'Escoliose com curvatura lateral visível da coluna',
    symptoms: 'Escoliose com desvio lateral significativo da coluna, visível na inspeção postural. A curvatura comprometia a postura e o desenvolvimento corporal saudável da paciente.',
    treatment: 'Abordagem progressiva e respeitosa ao corpo jovem em desenvolvimento. Liberação das tensões musculares e fasciais que mantinham a curvatura, combinada com mobilização vertebral gradual e reorganização biomecânica. Pressão e intensidade ajustadas à especificidade da faixa etária.',
    techniques: [
      'Liberação fascial da coluna',
      'Mobilização vertebral progressiva',
      'Reorganização biomecânica',
      'Liberação das cadeias musculares',
      'Abordagem pediátrica adaptada',
    ],
    outcome: 'Correção visível da escoliose com melhora significativa no alinhamento da coluna, documentada em fotos antes e depois.',
    video: null,
  },
]

function CaseBlock({ caso, index, ui }: { caso: Case; index: number; ui: typeof uiTranslations['PT'] }) {
  const [open, setOpen] = useState(false)
  const isEven = index % 2 === 0

  return (
    <motion.article
      className="border-b border-earth/8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.0, delay: 0.05, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 border-b border-earth/6">
        <span className="label-text text-earth/20 text-xs">{String(index + 1).padStart(2, '0')}</span>
        <span className="label-text text-sage/40 flex items-center gap-1.5 text-xs">
          <span aria-hidden className="text-sage/25">◎</span>
          {caso.location}
        </span>
      </div>

      {/* ── Main layout ── */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

        {/* Left: video / placeholder */}
        <div
          className={`relative min-h-[340px] md:min-h-[480px] flex items-center justify-center overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
          style={{
            background: `linear-gradient(${isEven ? '145deg' : '225deg'}, #1A1F1B 0%, #2A3329 50%, #3D4A40 100%)`,
          }}
        >
          {caso.video ? (
            <YouTubeEmbed
              src={caso.video}
              className="absolute inset-0 w-full h-full"
            />
          ) : caso.cover ? (
            <img
              src={caso.cover}
              alt={caso.headline}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: '50% 30%' }}
            />
          ) : caso.before && caso.after ? (
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="relative overflow-hidden">
                <img src={caso.before} alt={ui.before} className="w-full h-full object-cover object-top" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-3 px-4">
                  <p className="label-text text-sand/70 text-xs">{ui.before}</p>
                </div>
              </div>
              <div className="relative overflow-hidden border-l border-white/10">
                <img src={caso.after} alt={ui.after} className="w-full h-full object-cover object-top" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-3 px-4">
                  <p className="label-text text-sand/70 text-xs">{ui.after}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center px-8">
              <p className="label-text text-sand/15 text-xs mb-3">{ui.videoSoon}</p>
              <p
                className="font-cormorant font-light text-ivory/20"
                style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1 }}
              >
                {caso.years}
              </p>
            </div>
          )}

          {/* Overlay client info */}
          <div className="absolute bottom-8 left-8 right-8">
            <p className="label-text text-sand/30 text-xs mb-1">
              {caso.client}{caso.age ? `, ${caso.age}` : ''}
            </p>
            <p className="label-text text-sand/20 text-xs">{caso.profession}</p>
            {caso.sessions && (
              <p className="label-text text-sand/18 text-xs mt-1">{caso.sessions}</p>
            )}
          </div>
        </div>

        {/* Right: text */}
        <div className={`px-6 md:px-10 lg:px-14 py-14 md:py-20 flex flex-col justify-between bg-ivory ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>

          {/* Headline */}
          <div className="mb-10">
            <motion.h2
              className="font-cormorant font-light text-deep-moss mb-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05 }}
              {...inView(0.1)}
            >
              {caso.headline}
            </motion.h2>
            <motion.p {...inView(0.15)} className="label-text text-sage/50">
              {caso.complaint}
            </motion.p>
          </div>

          {/* Sintomas */}
          <motion.div {...inView(0.2)} className="mb-8">
            <p className="label-text text-sage/40 mb-3">{ui.symptoms}</p>
            <p className="body-text text-earth/65 text-sm leading-relaxed">
              {caso.symptoms}
            </p>
          </motion.div>

          {/* Tratamento */}
          <motion.div {...inView(0.25)} className="mb-8">
            <p className="label-text text-sage/40 mb-3">{ui.treatment}</p>
            <p className="body-text text-earth/65 text-sm leading-relaxed">
              {caso.treatment}
            </p>
          </motion.div>

          {/* Techniques toggle */}
          <motion.div {...inView(0.3)}>
            <button
              onClick={() => setOpen(!open)}
              aria-label={ui.techniques}
              className="label-text text-earth/35 hover:text-earth/65 transition-colors duration-300 flex items-center gap-2 mb-4"
            >
              <span>{ui.techniques}</span>
              <motion.span
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.25 }}
                aria-hidden
              >
                →
              </motion.span>
            </button>

            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className="overflow-hidden space-y-2"
                >
                  {caso.techniques.map((t) => (
                    <li key={t} className="body-text text-earth/55 text-sm flex items-start gap-2">
                      <span className="text-sage/35 shrink-0 mt-1">·</span>
                      {t}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Outcome */}
          {caso.outcome && (
            <motion.div {...inView(0.35)} className="border-t border-earth/10 pt-6 mt-8">
              <p className="label-text text-sage/40 mb-3">{ui.outcome}</p>
              <p className="font-cormorant italic text-deep-moss/70 text-lg leading-relaxed">
                {caso.outcome}
              </p>
            </motion.div>
          )}

          {/* Testimonial */}
          {caso.testimonial && (
            <motion.div {...inView(0.4)} className="border-t border-earth/10 pt-6 mt-6">
              <p className="label-text text-sage/40 mb-4">{ui.testimonial}</p>
              <blockquote className="font-cormorant italic text-deep-moss/60 text-base leading-relaxed mb-4">
                "{caso.testimonial.text}"
              </blockquote>
              <p className="label-text text-sage/40 text-xs">{caso.testimonial.author} · {caso.testimonial.role}</p>
            </motion.div>
          )}

        </div>
      </div>
    </motion.article>
  )
}

export default function Resultados() {
  const { lang } = useLanguage()
  const ui = uiTranslations[lang]
  const [filter, setFilter] = useState<'todos' | 'São Paulo' | 'Rio de Janeiro'>('todos')
  const filtered = filter === 'todos' ? cases : cases.filter((c) => c.location === filter)

  return (
    <section id="resultados" className="overflow-hidden">

      {/* ── Hero ── */}
      <div
        className="relative flex items-end min-h-[70vh] overflow-hidden noise-overlay"
        style={{
          background: 'linear-gradient(155deg, #1A1F1B 0%, #2A3329 35%, #3D4A40 65%, #1A1F1B 100%)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(26,31,27,0.85) 0%, rgba(26,31,27,0.2) 60%, transparent 100%)',
          }}
        />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
          <motion.p
            className="label-text text-sage mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {ui.heroLabel}
          </motion.p>

          <motion.h1
            className="font-cormorant font-light text-ivory"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', lineHeight: 1.0 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35 }}
          >
            {ui.heroLine1}<br />
            <span className="text-sand">{ui.heroLine2}</span>
          </motion.h1>

          <motion.p
            className="body-text text-sand/55 max-w-sm text-base md:text-lg mt-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            {ui.heroBody}
          </motion.p>
        </div>
      </div>

      {/* ── Editorial note ── */}
      <div className="bg-dark-moss px-6 md:px-12 lg:px-16 py-10 border-b border-sand/8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-cormorant italic text-sand/50 text-lg md:text-xl leading-relaxed max-w-xl">
            {ui.editorialNote}
          </p>
          <p className="label-text text-sage/30 text-xs shrink-0">
            {ui.filterLabel}
          </p>
        </div>
      </div>

      {/* ── Filter ── */}
      <div className="bg-ivory px-6 md:px-12 lg:px-16 pt-12 pb-2">
        <div className="max-w-6xl mx-auto flex gap-8 border-b border-earth/8 pb-6">
          {(['todos', 'São Paulo', 'Rio de Janeiro'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="label-text transition-colors duration-300"
              style={{ color: filter === f ? '#3D4A40' : 'rgba(61,74,64,0.28)' }}
            >
              {f === 'todos' ? ui.filterAll : f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Cases ── */}
      <div className="bg-ivory">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((caso, i) => (
              <CaseBlock key={caso.id} caso={caso} index={i} ui={ui} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Closing note ── */}
      <div className="bg-off-white border-t border-earth/10 px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="font-cormorant italic text-earth/55 text-xl md:text-2xl leading-relaxed whitespace-pre-line"
            {...inView()}
          >
            {ui.closingQuote}
          </motion.p>
          <motion.p {...inView(0.15)} className="label-text text-sage/35 text-xs mt-6">
            {ui.closingAttribution}
          </motion.p>
        </div>
      </div>

    </section>
  )
}
