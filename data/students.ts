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
  coordinates2?: [number, number] // second location pin (e.g. country of origin)
  city2?: string
  country2?: string
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
    bio: 'Ricardo is among the most technically accomplished and well-rounded practitioners to graduate from the CherieThai Institute.',
    bioPoints: [
      'Currently practicing as part of the CherieThai São Paulo team, he is also the founder of Hanai Massage — his own independent practice — a rare distinction that speaks to both his clinical excellence and his professional confidence.',
      'His approach brings together structural bodywork, refined manual techniques and careful clinical reasoning, allowing him to navigate complex presentations with thoughtfulness, depth and consistent precision.',
      'Treatments are distinguished by their reliability and attention to detail: attentive in assessment, methodical in execution and genuinely effective in their results, without relying on force or spectacle.',
      'Versatile across a wide range of presentations and body types, Ricardo has developed a comprehensive therapeutic approach that reflects the CherieThai Method at its most mature — technically grounded, clinically thoughtful and always deeply respectful of the individual.',
    ],
    bioPT: 'Ricardo está entre os terapeutas mais tecnicamente desenvolvidos e completos formados pelo Instituto CherieThai.',
    bioPTPoints: [
      'Integrante da equipe CherieThai São Paulo, é também fundador da Hanai Massage — sua própria prática independente — uma distinção que fala tanto de sua excelência clínica quanto de sua confiança profissional.',
      'Sua abordagem integra trabalho estrutural, técnicas manuais refinadas e raciocínio clínico cuidadoso, permitindo-lhe lidar com demandas complexas com profundidade, clareza e precisão constante.',
      'Seus atendimentos se destacam pela confiabilidade e atenção aos detalhes: avaliação atenta, execução meticulosa e resultados genuinamente eficazes, sem depender de força ou efeito.',
      'Versátil em diferentes demandas e tipos de corpo, Ricardo desenvolveu uma abordagem abrangente que reflete o Método CherieThai em seu estado mais maduro — tecnicamente sólido, clinicamente reflexivo e sempre profundamente respeitoso com cada indivíduo.',
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
    bio: 'Born and raised in Lençóis, in the heart of the Chapada Diamantina, Bahia, Mariana is among the most grounded and quietly powerful practitioners to graduate from the CherieThai Institute.',
    bioPoints: [
      'Her strength and quality of touch recall the hardworking women of the Thai northeast — strong hands, deep roots, and a presence that communicates care without a word needing to be said.',
      'She brings a calm, grounded attentiveness to every session, allowing her to observe the body with patience and respond to what she finds rather than simply following a fixed sequence.',
      'Her touch combines genuine sensitivity with clinical purpose, adapting each technique to what the individual actually requires — whether that means sustained depth, careful mobilisation or simply the intelligence to know when to pause.',
      'Rooted in the landscape and spirit of her home region, Mariana\'s work is an expression of something deeply personal: a connection to place, to the body and to the act of caring that feels completely unhurried and entirely her own.',
    ],
    bioPT: 'Natural de Lençóis, no coração da Chapada Diamantina, Bahia, Mariana está entre as terapeutas mais enraizadas e discretamente potentes formadas pelo Instituto CherieThai.',
    bioPTPoints: [
      'Sua força e qualidade de toque remetem às mulheres trabalhadoras do nordeste tailandês — mãos fortes, raízes profundas, e uma presença que comunica cuidado sem que uma palavra precise ser dita.',
      'Ela traz uma atenção calma e enraizada a cada sessão, observando o corpo com paciência e respondendo ao que encontra em vez de seguir uma sequência fixa.',
      'Seu toque une sensibilidade genuína e propósito clínico, adaptando cada técnica ao que o indivíduo realmente necessita — seja profundidade sustentada, mobilização cuidadosa ou simplesmente a inteligência de saber quando pausar.',
      'Enraizada na paisagem e no espírito de sua terra natal, o trabalho de Mariana é a expressão de algo profundamente pessoal: uma conexão com o lugar, com o corpo e com o ato de cuidar que parece completamente sem pressa e inteiramente seu.',
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
    bio: 'Based in Copacabana, Rio de Janeiro, Fausto is a certified dentist and CherieThai practitioner whose work sits at a distinctive intersection: the clinical precision of dental medicine and the integrated body intelligence of the CherieThai Method.',
    bioPoints: [
      'His background in craniofacial anatomy, occlusion and jaw function gives him an unusually detailed understanding of the upper body — one that he brings directly into his manual therapy practice, with particular focus on TMJ disorders, movement and muscular balance.',
      'Rather than treating isolated symptoms, Fausto approaches the body as an interconnected system, drawing lines of relationship between the jaw, the skull, the cervical spine and the rest of the body with analytical clarity that is genuinely rare in a manual therapist.',
      'His sessions are precise, methodical and deeply considered, combining careful assessment with a thoughtful application of technique — always seeking to understand the structural logic of what he finds before deciding how to proceed.',
      'The combination of his two clinical disciplines creates something that is greater than either alone: a practitioner who sees the body whole, moves through it with purpose and brings a level of analytical depth that consistently delivers results.',
    ],
    bioPT: 'Baseado em Copacabana, Rio de Janeiro, Fausto é cirurgião-dentista e terapeuta CherieThai, com uma atuação que habita uma intersecção singular: a precisão clínica da medicina odontológica e a inteligência corporal integrada do Método CherieThai.',
    bioPTPoints: [
      'Sua formação em anatomia craniofacial, oclusão e função mandibular proporciona uma compreensão incomum do segmento superior do corpo — que ele traduz diretamente em sua prática de terapia manual, com atenção especial às DTMs, ao movimento e ao equilíbrio muscular.',
      'Em vez de tratar sintomas isolados, Fausto aborda o corpo como um sistema integrado, traçando relações entre a mandíbula, o crânio, a coluna cervical e o restante do corpo com uma clareza analítica genuinamente rara em um terapeuta manual.',
      'Suas sessões são precisas, metódicas e profundamente refletidas, unindo avaliação cuidadosa e aplicação técnica criteriosa — sempre buscando compreender a lógica estrutural do que encontra antes de decidir como agir.',
      'A combinação de suas duas disciplinas clínicas cria algo maior do que qualquer uma delas isoladamente: um terapeuta que enxerga o corpo como um todo, move-se por ele com propósito e traz uma profundidade analítica que entrega resultados de forma consistente.',
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
    bio: 'Based in São Paulo, Renata joined the CherieThai Institute not to build a professional practice, but to deepen her understanding of the body — an intention that shaped the quality of her learning from the very beginning.',
    bioPoints: [
      'With a background in yoga and a naturally thoughtful, introspective approach to movement, she arrived with an existing sensitivity to the body that allowed her to engage with the Method\'s principles in a particularly genuine way.',
      'Throughout the training, she demonstrated patience and quiet discipline: never rushing ahead of herself, always returning to what she had not yet fully understood, and building her knowledge with care and integrity.',
      'Her commitment to mastering each detail before moving forward reflected not anxiety, but a deep respect for the complexity of the body and for the people who would eventually be in her care.',
      'Renata\'s journey is a reminder that the CherieThai Institute welcomes a wide range of intentions — and that some of the most dedicated learning happens when there is no professional goal to rush toward, only genuine curiosity and love of the practice.',
    ],
    bioPT: 'Baseada em São Paulo, Renata ingressou no Instituto CherieThai não para construir uma prática profissional, mas para aprofundar sua compreensão do corpo — uma intenção que moldou a qualidade do seu aprendizado desde o início.',
    bioPTPoints: [
      'Com uma trajetória no yoga e uma abordagem naturalmente reflexiva ao movimento, chegou ao Instituto com uma sensibilidade corporal já desenvolvida, o que lhe permitiu se conectar com os princípios do Método de forma genuinamente profunda.',
      'Ao longo da formação, demonstrou paciência e disciplina tranquila: sem pressa para avançar, sempre retornando ao que ainda não havia compreendido por completo, construindo seu conhecimento com cuidado e integridade.',
      'Seu comprometimento em dominar cada detalhe antes de seguir em frente refletia não ansiedade, mas um respeito profundo pela complexidade do corpo e pelas pessoas que eventualmente estariam sob seus cuidados.',
      'A trajetória de Renata é um lembrete de que o Instituto CherieThai acolhe uma ampla variedade de intenções — e que alguns dos aprendizados mais dedicados acontecem quando não há um objetivo profissional pressionando, apenas uma curiosidade genuína e amor à prática.',
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
    bio: 'Based in Tiradentes, Minas Gerais, Ivy Kate is among the most physically gifted and refined graduates of the CherieThai Institute — a practitioner whose background in fitness and active living translated into an immediately confident and capable quality of bodywork.',
    bioPoints: [
      'Her physical strength and body awareness, developed through years of athletic practice, gave her a natural foundation for manual therapy: she understood effort, control and the relationship between movement and the body before she ever began.',
      'Throughout the training, she refined that innate strength into something more precise and elegant — learning to channel power with sensitivity, to adapt pressure with intention and to move through technique with fluidity rather than force.',
      'The arc of her training was remarkable: what began as raw physical capability became something considerably more nuanced, as she discovered how to balance firmness with attentiveness and let the body she was working with guide her decisions.',
      'Ivy Kate\'s journey is a demonstration that exceptional bodywork is never simply a matter of strength — it is a question of intention, control, listening and the willingness to develop all of those qualities in tandem.',
    ],
    bioPT: 'Baseada em Tiradentes, Minas Gerais, Ivy Kate está entre as formandas mais atléticas e refinadas do Instituto CherieThai — uma praticante cuja trajetória no esporte e na vida ativa se traduziu em uma qualidade de trabalho corporal imediatamente segura e capaz.',
    bioPTPoints: [
      'Sua força física e consciência corporal, desenvolvidas ao longo de anos de prática atlética, forneceram uma base natural para a terapia manual: ela já entendia esforço, controle e a relação entre movimento e corpo antes mesmo de começar.',
      'Ao longo da formação, refinou essa força inata em algo mais preciso e elegante — aprendendo a canalizar a potência com sensibilidade, a adaptar a pressão com intenção e a percorrer as técnicas com fluidez, e não com força.',
      'O arco de sua formação foi notável: o que começou como habilidade física bruta tornou-se algo consideravelmente mais matizado, à medida que descobriu como equilibrar firmeza e atenção, deixando o corpo com quem trabalhava guiar suas decisões.',
      'A trajetória de Ivy Kate demonstra que um trabalho corporal excepcional nunca é apenas uma questão de força — é uma questão de intenção, controle, escuta e a disposição de desenvolver tudo isso em conjunto.',
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
    bio: 'Based in Maceió, Alagoas, Carliana is among the most graceful and quietly powerful graduates of the CherieThai Institute, bringing an established background in massage therapy into the clinical depth and structure of the CherieThai Method.',
    bioPoints: [
      'Having worked as a massage therapist before joining the Institute, she arrived with practical experience that gave her a strong foundation to refine and deepen throughout the training.',
      'Throughout the course, she developed a style defined by graceful, well-considered movement, attentive touch and a quiet self-assurance that never called attention to itself — simply present, always purposeful.',
      'Beneath her gentle exterior lies considerable therapeutic strength: her pressure is effective and well-calibrated, her transitions are smooth, and her ability to sustain a quality of care from the first movement to the last is genuinely impressive.',
      'Her work reflects the balance between warmth and precision that the CherieThai Method asks of every practitioner — expressed through a presence that is both nurturing in its nature and highly capable in its effect.',
    ],
    bioPT: 'Baseada em Maceió, Alagoas, Carliana está entre as formandas mais graciosas e discretamente potentes do Instituto CherieThai, trazendo uma trajetória já consolidada em massagem terapêutica para a profundidade clínica e a estrutura do Método CherieThai.',
    bioPTPoints: [
      'Tendo atuado como massoterapeuta antes de ingressar no Instituto, chegou com experiência prática que lhe forneceu uma base sólida para refinar e aprofundar ao longo da formação.',
      'Ao longo do curso, desenvolveu um estilo marcado por movimentos elegantes e bem considerados, toque atento e uma autoconfiança tranquila que nunca chamava atenção para si mesma — simplesmente presente, sempre propositiva.',
      'Por trás de sua aparência gentil existe uma força terapêutica considerável: sua pressão é eficaz e bem calibrada, suas transições são suaves, e sua capacidade de manter uma qualidade de cuidado do primeiro ao último movimento é genuinamente impressionante.',
      'Seu trabalho reflete o equilíbrio entre calor humano e precisão que o Método CherieThai exige de cada terapeuta — expresso por meio de uma presença ao mesmo tempo acolhedora em sua natureza e altamente capaz em seu efeito.',
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
    bio: 'Originally from Argentina and now based in Maracajaú, Rio Grande do Norte, Vanessa is among the most fluid and genuinely attentive practitioners to graduate from the CherieThai Institute.',
    bioPoints: [
      'Her expression of the CherieThai Method is characterised by graceful movement, seamless transitions and an adaptability that allows her to meet each individual where they are — adjusting her touch, her pace and her approach in response to what the body is asking for.',
      'Her oil work is particularly refined: smooth, well-paced and distinguished by a natural integration of mobility and relaxation that makes each movement feel continuous and purposeful rather than segmented.',
      'Naturally attentive to detail, she approaches every treatment with patience and a sincere desire to understand the person she is working with before deciding how to proceed.',
      'Settled on the coast of Rio Grande do Norte, Vanessa brings a quality of care that feels as unhurried and generous as the landscape she now calls home — deeply reassuring in presence, and consistently thoughtful in its effect.',
    ],
    bioPT: 'Natural da Argentina e atualmente baseada em Maracajaú, Rio Grande do Norte, Vanessa está entre as terapeutas mais fluidas e genuinamente atentas formadas pelo Instituto CherieThai.',
    bioPTPoints: [
      'Sua expressão do Método CherieThai é marcada por movimentos graciosos, transições suaves e uma adaptabilidade que lhe permite encontrar cada pessoa onde ela está — ajustando o toque, o ritmo e a abordagem em resposta ao que o corpo está pedindo.',
      'Seu trabalho com óleo é particularmente refinado: suave, bem ritmado e distinguido por uma integração natural de mobilidade e relaxamento que torna cada movimento contínuo e propositivo, em vez de segmentado.',
      'Naturalmente atenta aos detalhes, ela aborda cada atendimento com paciência e um desejo sincero de compreender a pessoa com quem está trabalhando antes de decidir como seguir.',
      'Instalada no litoral do Rio Grande do Norte, Vanessa traz uma qualidade de cuidado tão sem pressa e generosa quanto a paisagem que agora chama de lar — profundamente acolhedora na presença e consistentemente cuidadosa em seu efeito.',
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
    bio: 'Originally from Hungary and now based in Lençóis, in the Chapada Diamantina, Bahia, Anna Gemes brings an integrative and deeply inquisitive perspective to the CherieThai Method.',
    bioPoints: [
      'Shaped by a profound interest in the relationship between mind and body, she approaches manual therapy not as an isolated technique but as part of a broader somatic practice — one in which movement, awareness and touch are understood as inseparable dimensions of care.',
      'Throughout her training, she stood out for her genuine curiosity and her desire to understand the reasoning behind every movement, always seeking the connection between things rather than accepting each technique as a self-contained procedure.',
      'Her treatments reflect a holistic perspective that draws on her background in somatic work, allowing her to engage with the body on multiple levels simultaneously — structural and energetic, local and systemic, technical and deeply human.',
      'In Lençóis — a landscape that invites stillness, depth and an unhurried relationship with time — Anna continues to develop a practice that honours complexity, seeks integration and remains genuinely and openly committed to lifelong learning.',
    ],
    bioPT: 'Natural da Hungria e atualmente baseada em Lençóis, na Chapada Diamantina, Bahia, Anna Gemes traz ao Método CherieThai uma perspectiva integrativa e profundamente investigativa.',
    bioPTPoints: [
      'Movida por um interesse profundo na relação entre mente e corpo, aborda a terapia manual não como uma técnica isolada, mas como parte de uma prática somática mais ampla — na qual movimento, consciência corporal e toque são dimensões inseparáveis do cuidado.',
      'Durante a formação, destacou-se pela curiosidade genuína e pelo desejo de compreender o raciocínio por trás de cada movimento, buscando sempre a conexão entre as coisas em vez de aceitar cada técnica como um procedimento isolado.',
      'Seus atendimentos refletem uma perspectiva holística que nasce de sua trajetória em práticas somáticas, permitindo que ela se relacione com o corpo em múltiplos níveis simultaneamente — estrutural e energético, local e sistêmico, técnico e profundamente humano.',
      'Em Lençóis — uma paisagem que convida ao silêncio, à profundidade e a uma relação sem pressa com o tempo — Anna continua desenvolvendo uma prática que honra a complexidade, busca a integração e permanece genuína e abertamente comprometida com o aprendizado ao longo da vida.',
    ],
    youtubeId: 'ozB2VCdcJlA',
    coordinates: [-41.389, -12.561], // Lençóis, Chapada Diamantina, Bahia
    coordinates2: [19.040, 47.498], // Budapest, Hungary
    city2: 'Budapest',
    country2: 'Hungary',
    instagram: 'terapiasarte',
  },
  {
    id: 'camila',
    name: 'Camila',
    city: 'Brasília',
    country: 'Brasil',
    descriptors: ['Persevering', 'Serene', 'Consistent'],
    descriptorsPT: ['Perseverante', 'Serena', 'Constante'],
    bio: 'Based in Brasília, Camila is among the most persevering and consistently dedicated practitioners to graduate from the CherieThai Institute — a therapist who built her practice one carefully mastered detail at a time.',
    bioPoints: [
      'She approached every challenge throughout the training with humility and quiet determination, never moving ahead until she was certain that what she had already learned had truly settled in the body — not simply memorised, but fully integrated.',
      'This commitment to genuine understanding over speed is the quality that most defines her: Camila does not rush, and that patience translates directly into the quality of care she offers.',
      'Her calm, serene presence creates a naturally reassuring treatment environment — one in which people feel held, heard and unhurried, free to receive care at their own pace.',
      'Her dedication to continuous improvement is a direct reflection of the discipline and standard the CherieThai Institute cultivates: not perfection as an end point, but a sincere and ongoing commitment to becoming better at caring for others.',
    ],
    bioPT: 'Baseada em Brasília, Camila está entre as terapeutas mais perseverantes e dedicadas formadas pelo Instituto CherieThai — uma terapeuta que construiu sua prática um detalhe cuidadosamente dominado de cada vez.',
    bioPTPoints: [
      'Enfrentou cada desafio durante a formação com humildade e determinação tranquila, nunca avançando antes de ter certeza de que o que já havia aprendido havia realmente se estabelecido no corpo — não apenas memorizado, mas plenamente integrado.',
      'Esse comprometimento com a compreensão genuína, em detrimento da velocidade, é a qualidade que mais a define: Camila não tem pressa, e essa paciência se traduz diretamente na qualidade do cuidado que oferece.',
      'Sua presença calma e serena cria um ambiente de atendimento naturalmente acolhedor — no qual as pessoas se sentem sustentadas, ouvidas e sem pressa, livres para receber cuidado no próprio ritmo.',
      'Sua dedicação à evolução contínua é o reflexo direto da disciplina e do padrão que o Instituto CherieThai cultiva: não a perfeição como ponto de chegada, mas um compromisso sincero e contínuo de se tornar cada vez melhor no cuidado com o outro.',
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
    bio: 'Based in São Paulo, Waldeck is among the most open-minded and encouraging graduates of the CherieThai Institute — someone whose presence during the training elevated the learning environment for everyone around him.',
    bioPoints: [
      'He approached every concept with fresh eyes and genuine curiosity, never assuming he already knew the answer and always willing to set aside what he thought he understood in order to truly engage with something new.',
      'Each challenge was met with enthusiasm and a spirit of exploration rather than resistance, which meant that even the most demanding parts of the training became opportunities for discovery rather than obstacles to endure.',
      'His thoughtful questions, consistent encouragement of his peers and naturally generous presence helped create a collaborative atmosphere where people felt supported in the process of learning.',
      'Waldeck\'s journey reflects something important: that the willingness to stay curious and to approach difficult things with good humour and openness is itself a form of excellence — and that meaningful growth, in any discipline, always begins there.',
    ],
    bioPT: 'Baseado em São Paulo, Waldeck está entre os formandos mais receptivos e encorajadores do Instituto CherieThai — alguém cuja presença durante a formação elevou o ambiente de aprendizado para todos ao seu redor.',
    bioPTPoints: [
      'Encarou cada conceito com um olhar novo e curiosidade genuína, nunca presumindo que já sabia a resposta e sempre disposto a deixar de lado o que achava que entendia para se conectar verdadeiramente com algo novo.',
      'Cada desafio foi encarado com entusiasmo e espírito de exploração, e não de resistência — o que significava que até as partes mais exigentes da formação se tornavam oportunidades de descoberta em vez de obstáculos a superar.',
      'Suas perguntas reflexivas, o incentivo constante aos colegas e uma presença naturalmente generosa ajudaram a criar uma atmosfera colaborativa na qual as pessoas se sentiam apoiadas no processo de aprendizado.',
      'A trajetória de Waldeck reflete algo importante: que a disposição de permanecer curioso e de encarar coisas difíceis com bom humor e abertura é, por si só, uma forma de excelência — e que o crescimento significativo, em qualquer área, sempre começa por aí.',
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
    bio: 'Based in Nova Esperança, Paraná, Thaís is the founder of Movimente — a school she built around the conviction that the relationship between body, mind and emotional wellbeing deserves serious, dedicated study.',
    bioPoints: [
      'She expresses the CherieThai Method through intuitive observation, purposeful movement and a genuine commitment to continuous learning that is impossible to separate from her identity as both a practitioner and an educator.',
      'Her exceptional finger strength, combined with refined control and a thoughtful understanding of tissue response, allows her to deliver treatments that are both highly effective and carefully adapted to the specific needs of the individual in front of her.',
      'As a movement educator, she brings a quality of clarity and structural intelligence to her manual work that most practitioners take years to develop — understanding how posture, habit and compensation patterns contribute to pain, and working directly with those patterns rather than simply addressing symptoms.',
      'Every session she offers reflects confidence, purpose and a strong sense of direction: she knows why she is doing what she is doing, and that certainty translates into care that feels grounded, trustworthy and genuinely transformative.',
    ],
    bioPT: 'Baseada em Nova Esperança, Paraná, Thaís é fundadora da escola Movimente — um espaço que ela criou a partir da convicção de que a relação entre corpo, mente e bem-estar emocional merece um estudo sério e dedicado.',
    bioPTPoints: [
      'Ela expressa o Método CherieThai por meio de uma observação intuitiva, movimentos intencionais e um comprometimento genuíno com o aprendizado contínuo, algo inseparável de sua identidade como terapeuta e educadora.',
      'Sua excepcional força nos dedos, aliada a um controle refinado e uma compreensão cuidadosa da resposta dos tecidos, permite realizar atendimentos ao mesmo tempo altamente eficazes e cuidadosamente adaptados às necessidades específicas de cada pessoa.',
      'Como educadora do movimento, ela traz ao trabalho manual uma qualidade de clareza e inteligência estrutural que a maioria dos terapeutas leva anos para desenvolver — compreendendo como postura, hábitos e padrões de compensação contribuem para a dor, e trabalhando diretamente com esses padrões em vez de apenas tratar os sintomas.',
      'Cada sessão que oferece reflete segurança, propósito e um forte senso de direção: ela sabe por que está fazendo o que faz, e essa certeza se traduz em um cuidado que parece fundamentado, confiável e genuinamente transformador.',
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
    bio: 'Based in São Paulo, Gustavo brings his background in Tantra and Somatic Therapy into dialogue with the CherieThai Method, creating a calm, deeply embodied approach to manual therapy that is grounded in presence as much as in technique.',
    bioPoints: [
      'Although the CherieThai training was his first formal experience in hands-on bodywork, he demonstrated remarkable sensitivity, curiosity and dedication from the very beginning — proof that attunement to the body can arrive through many different paths.',
      'His background in somatic practice and the relational dimensions of touch gave him a quality of intuitive listening that translated naturally into his manual work, allowing him to meet the body where it is rather than where he expects it to be.',
      'His treatments are characterised by gentle presence, unhurried movement and a soft but effective quality of touch — creating an environment in which the nervous system feels genuinely safe, and in which restoration can happen without force or urgency.',
      'Gustavo\'s work reflects a practitioner who understands that care is as much about the space held around a session as it is about what happens within it — and who brings that understanding into everything he does.',
    ],
    bioPT: 'Baseado em São Paulo, Gustavo integra sua experiência em Tantra e Terapia Somática ao Método CherieThai, desenvolvendo uma abordagem calma e profundamente consciente da terapia manual, fundamentada tanto na presença quanto na técnica.',
    bioPTPoints: [
      'Embora a formação CherieThai tenha sido sua primeira experiência formal em trabalho manual, demonstrou sensibilidade, curiosidade e dedicação notáveis desde o início — prova de que a sintonia com o corpo pode chegar por muitos caminhos diferentes.',
      'Sua trajetória em práticas somáticas e nas dimensões relacionais do toque lhe deu uma qualidade de escuta intuitiva que se traduziu naturalmente em seu trabalho manual, permitindo encontrar o corpo onde ele está, e não onde se espera que esteja.',
      'Seus atendimentos são marcados por uma presença gentil, movimentos sem pressa e uma qualidade de toque suave, mas eficaz — criando um ambiente no qual o sistema nervoso se sente genuinamente seguro e no qual a restauração pode acontecer sem força ou urgência.',
      'O trabalho de Gustavo reflete um terapeuta que entende que o cuidado tem tanto a ver com o espaço sustentado ao redor de uma sessão quanto com o que acontece dentro dela — e que traz esse entendimento para tudo o que faz.',
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
    bio: 'Based in São Sebastião, São Paulo, Tati completed the CherieThai training as part of a personal journey of exploration and growth — one driven not by professional ambition but by a genuine desire to understand her own body and deepen her relationship with touch.',
    bioPoints: [
      'Throughout the course, she approached every experience with a quality of presence that was immediately apparent: open, curious and entirely committed to whatever technique or challenge was in front of her, without the hesitation that often accompanies people new to bodywork.',
      'Her naturally expressive movement and instinctive ability to connect with touch brought something distinctive to her Thai bodywork — a vitality and physical confidence that allowed even the most demanding sequences to feel grounded and authentic.',
      'Rather than following technique mechanically, she allowed herself to fully inhabit each movement, exploring what it felt like from the inside and letting that experience inform the quality of care she offered.',
      'Tati\'s journey is a vivid demonstration of how meaningful learning can emerge from the courage to engage fully with something unfamiliar — and how the body, given the right conditions, can surprise even its owner.',
    ],
    bioPT: 'Baseada em São Sebastião, São Paulo, Tati realizou a formação CherieThai como parte de uma jornada pessoal de exploração e desenvolvimento — impulsionada não pela ambição profissional, mas por um desejo genuíno de compreender o próprio corpo e aprofundar sua relação com o toque.',
    bioPTPoints: [
      'Ao longo do curso, abordou cada experiência com uma qualidade de presença imediatamente perceptível: aberta, curiosa e inteiramente comprometida com qualquer técnica ou desafio à sua frente, sem a hesitação que frequentemente acompanha quem está iniciando no trabalho corporal.',
      'Seus movimentos naturalmente expressivos e sua capacidade instintiva de se conectar por meio do toque trouxeram algo distintivo ao seu trabalho com a massagem tailandesa — uma vitalidade e uma confiança física que permitiam que até as sequências mais exigentes parecessem enraizadas e autênticas.',
      'Em vez de seguir as técnicas mecanicamente, ela se permitia habitá-las plenamente, explorando como cada uma se sentia por dentro e deixando essa experiência informar a qualidade do cuidado que oferecia.',
      'A trajetória de Tati é uma demonstração vívida de como um aprendizado significativo pode emergir da coragem de se envolver plenamente com algo desconhecido — e de como o corpo, nas condições certas, pode surpreender até o seu próprio habitante.',
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
    bio: 'Based in São Paulo and practicing as part of the CherieThai team, Grace Kelly expresses the Method through elegance, continuity and a rare ability to create genuine calm — not as a side effect of the work, but as one of its core intentions.',
    bioPoints: [
      'Her treatment style is defined by graceful, flowing movement and refined oil techniques that feel unhurried and complete — as though each gesture has been considered in relation to the one before it and the one that will follow.',
      'She holds a particular gift for nervous system regulation: her sessions create a quality of safety and relaxation that allows the body to release patterns of tension it may have been carrying for a long time, often without the person being fully aware of what is shifting.',
      'Her clinical work is never at the expense of the restorative quality of the experience: therapeutic intention and genuine care coexist in everything she does, resulting in sessions that are both deeply effective and profoundly nourishing.',
      'Grace represents the kind of practitioner the CherieThai Institute is proud to call its own — someone who has taken what she learned and made it entirely hers, bringing it to every session with consistency, precision and a quality of presence that cannot be taught.',
    ],
    bioPT: 'Baseada em São Paulo e integrante da equipe CherieThai, Grace Kelly expressa o Método por meio da elegância, da continuidade e de uma rara capacidade de criar calma genuína — não como efeito colateral do trabalho, mas como uma de suas intenções centrais.',
    bioPTPoints: [
      'Seu estilo de atendimento é marcado por movimentos fluidos e graciosos e técnicas refinadas com óleo que parecem sem pressa e completas — como se cada gesto fosse pensado em relação ao anterior e ao próximo.',
      'Ela possui um dom particular para a regulação do sistema nervoso: suas sessões criam uma qualidade de segurança e relaxamento que permite ao corpo liberar padrões de tensão que pode carregar há muito tempo, muitas vezes sem que a pessoa perceba o que está mudando.',
      'Seu trabalho clínico nunca compromete a qualidade restauradora da experiência: intenção terapêutica e cuidado genuíno coexistem em tudo o que ela faz, resultando em sessões ao mesmo tempo profundamente eficazes e verdadeiramente nutritivas.',
      'Grace representa o tipo de terapeuta de que o Instituto CherieThai tem orgulho de chamar seu: alguém que levou o que aprendeu e o tornou inteiramente seu, trazendo-o a cada atendimento com consistência, precisão e uma qualidade de presença que não pode ser ensinada.',
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
    bio: 'Based in Rio de Janeiro, Isabela Sheimberg brings a genuinely distinctive perspective to the CherieThai Method, shaped by years of competitive rock climbing — a discipline that has given her physical and manual qualities that very few practitioners possess from the outset.',
    bioPoints: [
      'The exceptional finger strength, precision grip and refined spatial awareness developed through climbing translate directly into her manual therapy: she is able to work with a level of accuracy and control that most practitioners develop only after years of practice.',
      'Her treatments combine elegant, fluid movement with confident and effective pressure — the kind of approach that feels both powerful and entirely measured, with no sense of force for its own sake.',
      'She is adaptable across a wide range of techniques and body types, expressing the CherieThai Method with technical consistency, thoughtful sequencing and an attention to detail that reflects someone who has been training her hands and her body for a very long time.',
      'In a city as physically active and demanding as Rio de Janeiro, Isabela\'s combination of athletic intelligence and refined manual skill makes her an exceptionally capable choice for those seeking bodywork that is both effective and genuinely refined.',
    ],
    bioPT: 'Baseada no Rio de Janeiro, Isabela Sheimberg traz ao Método CherieThai uma perspectiva genuinamente singular, moldada por anos de escalada esportiva — uma disciplina que lhe conferiu qualidades físicas e manuais que poucos terapeutas possuem desde o início.',
    bioPTPoints: [
      'A força excepcional nos dedos, a preensão precisa e a consciência espacial refinada desenvolvidas na escalada se traduzem diretamente em sua terapia manual: ela é capaz de trabalhar com um nível de precisão e controle que a maioria dos terapeutas só desenvolve após anos de prática.',
      'Seus atendimentos combinam movimentos elegantes e fluidos com uma pressão segura e eficaz — o tipo de abordagem que parece ao mesmo tempo potente e completamente calibrada, sem qualquer sensação de força pela força.',
      'Ela é adaptável em uma ampla variedade de técnicas e tipos de corpo, expressando o Método CherieThai com consistência técnica, sequenciamento cuidadoso e uma atenção aos detalhes que reflete alguém que vem treinando as mãos e o corpo há muito tempo.',
      'Em uma cidade tão fisicamente ativa e exigente quanto o Rio de Janeiro, a combinação de inteligência atlética e habilidade manual refinada de Isabela faz dela uma escolha excepcionalmente capaz para quem busca um trabalho corporal ao mesmo tempo eficaz e genuinamente refinado.',
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
    bio: 'Based in Belo Horizonte, Minas Gerais, Hellen expresses the CherieThai Method through precision, growing confidence and an increasingly purposeful quality of movement.',
    bioPoints: [
      'Throughout her training, she developed a remarkable ability to internalise the Method\'s principles and translate them into treatments that are direct, technically refined and genuinely effective — always oriented toward results rather than simply toward the performance of technique.',
      'Her application of pressure is confident and well-calibrated: firm where it needs to be, adaptable where the body asks for it, and always guided by careful observation of how the tissue and the person are responding.',
      'Quiet in presence and consistent in effort, she approaches every session with a seriousness of intent that communicates itself to the people she works with — they feel in safe hands.',
      'Today, building her own independent practice in Belo Horizonte, Hellen continues to develop as a clinician — and the trajectory she has established since graduation suggests that her most accomplished work is still ahead of her.',
    ],
    bioPT: 'Baseada em Belo Horizonte, Minas Gerais, Hellen expressa o Método CherieThai por meio da precisão, de uma confiança crescente e de uma qualidade de movimento cada vez mais propositiva.',
    bioPTPoints: [
      'Durante a formação, demonstrou uma notável capacidade de internalizar os princípios do Método e traduzi-los em atendimentos diretos, tecnicamente refinados e genuinamente eficazes — sempre orientados para resultados, e não apenas para a execução da técnica.',
      'Sua aplicação de pressão é segura e bem calibrada: firme onde precisa ser, adaptável onde o corpo pede, e sempre guiada pela observação cuidadosa de como os tecidos e a pessoa estão respondendo.',
      'Tranquila na presença e consistente no esforço, ela aborda cada sessão com uma seriedade de propósito que se comunica às pessoas com quem trabalha — elas sentem que estão em boas mãos.',
      'Hoje, construindo sua prática independente em Belo Horizonte, Hellen continua a se desenvolver como terapeuta — e a trajetória que estabeleceu desde a formação sugere que seu trabalho mais maduro ainda está por vir.',
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
    bio: 'Based in Porto Alegre, Rio Grande do Sul, Karen joined the CherieThai Institute with a deeply personal motivation: to learn how to better care for her husband\'s wellbeing — a goal that gave her learning a quality of sincerity and focus that was evident throughout her entire training.',
    bioPoints: [
      'Working in aesthetics and already familiar with the discipline required to develop manual skills, she approached the CherieThai Method with a thoughtful and methodical mindset: analysing each technique carefully before applying it, and always seeking to understand the body before she attempted to work with it.',
      'Throughout the training, her confidence developed steadily and visibly — her movements became more precise, her observation more nuanced and her overall approach more structured and assured with every session.',
      'Her background in aesthetics gave her an existing sensitivity to touch and to the way the skin and tissue respond under different kinds of pressure, which she was able to build on and deepen throughout the course.',
      'Karen\'s journey is a quiet and powerful demonstration of how dedicated learning — even outside a professional context — can genuinely transform the quality of care one person is able to offer another.',
    ],
    bioPT: 'Baseada em Porto Alegre, Rio Grande do Sul, Karen ingressou no Instituto CherieThai com uma motivação profundamente pessoal: aprender a cuidar melhor do bem-estar do seu marido — um objetivo que conferiu ao seu aprendizado uma qualidade de sinceridade e foco perceptível ao longo de toda a formação.',
    bioPTPoints: [
      'Atuando na estética e já familiarizada com a disciplina necessária para desenvolver habilidades manuais, aproximou-se do Método CherieThai com uma postura reflexiva e metódica: analisando cada técnica com cuidado antes de aplicá-la e buscando sempre compreender o corpo antes de tentar trabalhar com ele.',
      'Ao longo da formação, sua confiança se desenvolveu de forma constante e visível — seus movimentos tornaram-se mais precisos, sua observação mais matizada e sua abordagem geral mais estruturada e segura a cada sessão.',
      'Sua trajetória na estética lhe conferiu uma sensibilidade já desenvolvida ao toque e à forma como a pele e os tecidos respondem a diferentes tipos de pressão, o que ela pôde construir e aprofundar durante o curso.',
      'A trajetória de Karen é uma demonstração silenciosa e poderosa de como o aprendizado dedicado — mesmo fora de um contexto profissional — pode genuinamente transformar a qualidade do cuidado que uma pessoa é capaz de oferecer a outra.',
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
    bio: 'Based in Ribeirão Preto, São Paulo, Anderson expresses the CherieThai Method through serenity, quiet perception and a genuine sensitivity to the body that makes his work unusually attentive.',
    bioPoints: [
      'His calm and unhurried presence allows him to observe subtle changes in movement, tissue quality and response — listening with his hands as much as with his eyes, building a clear picture of each individual before deciding how to proceed.',
      'His approach is defined by patience and a commitment to mastering every detail before advancing: he does not rush, and that quality of steadiness translates directly into the consistency and thoughtfulness of the care he offers.',
      'His oil work is particularly refined — fluid, well-paced and deeply attentive to how tissue responds beneath the hand, with a quality of touch that is delicate on the surface but surprisingly effective in its depth and results.',
      'Anderson represents a quality of care that is genuinely rare: quiet in manner, thorough in practice and consistently focused on achieving meaningful outcomes through presence, precision and an attentiveness that never wavers.',
    ],
    bioPT: 'Baseado em Ribeirão Preto, São Paulo, Anderson expressa o Método CherieThai por meio da serenidade, de uma percepção tranquila e de uma sensibilidade genuína ao corpo que torna seu trabalho incomumente atento.',
    bioPTPoints: [
      'Sua presença calma e sem pressa permite que observe variações sutis no movimento, na qualidade dos tecidos e nas respostas do corpo — escutando com as mãos tanto quanto com os olhos, construindo uma visão clara de cada pessoa antes de decidir como agir.',
      'Sua abordagem é definida pela paciência e pelo compromisso de dominar cada detalhe antes de avançar: ele não tem pressa, e essa qualidade de estabilidade se traduz diretamente na consistência e na atenção do cuidado que oferece.',
      'Seu trabalho com óleo é particularmente refinado — fluido, bem ritmado e profundamente atento à forma como o tecido responde sob as mãos, com uma qualidade de toque delicada na superfície, mas surpreendentemente eficaz em profundidade e resultados.',
      'Anderson representa uma qualidade de cuidado genuinamente rara: tranquilo na forma, minucioso na prática e constantemente focado em obter resultados significativos por meio da presença, da precisão e de uma atenção que nunca vacila.',
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
    bio: 'Based in São Paulo, Ruth Gonçalves is a movement therapist, dancer and practitioner of movement culture whose expression of the CherieThai Method is shaped by a lifetime of understanding the body through motion — making her sessions feel less like a series of techniques and more like a single, unbroken conversation with the body from beginning to end.',
    bioPoints: [
      'Her background as a dancer and movement artist gives her a quality of physical intelligence that is immediately felt in the way she works: she inhabits movement rather than executes it, and that distinction makes everything she does read as natural, continuous and deeply intentional.',
      'As part of the movement culture, she has spent years exploring how the body learns, adapts and expresses itself — and she brings that depth of understanding into her manual therapy, approaching each body with the same curiosity and attentiveness she would bring to choreography or somatic practice.',
      'Drawing from a rich and diverse therapeutic background, she integrates multiple approaches into a treatment style that is seamlessly coordinated: there is no sense of switching between techniques, only a fluid progression guided by what the body needs next, shaped by the same intelligence that guides a dancer through a score.',
      'Her oil work is particularly distinguished — smooth, rhythmic and deeply attentive to how one movement naturally evolves into the next, creating a quality of immersion that allows the person receiving it to fully let go.',
      'Ruth represents a type of practitioner that is genuinely rare: someone whose years of experience have not become routine, but have continued to deepen into something increasingly conscious, precise and unmistakably alive.',
    ],
    bioPT: 'Baseada em São Paulo, Ruth Gonçalves é terapeuta do movimento, dançarina e praticante da cultura do movimento, cuja expressão do Método CherieThai é moldada por uma vida de compreensão do corpo pelo movimento — fazendo com que suas sessões pareçam menos uma série de técnicas e mais uma conversa única e ininterrupta com o corpo, do início ao fim.',
    bioPTPoints: [
      'Sua trajetória como dançarina e artista do movimento lhe confere uma qualidade de inteligência física que é imediatamente sentida na forma como trabalha: ela habita o movimento em vez de executá-lo, e essa distinção faz com que tudo o que faz pareça natural, contínuo e profundamente intencional.',
      'Como parte da cultura do movimento, ela passou anos explorando como o corpo aprende, se adapta e se expressa — e traz essa profundidade de compreensão para a terapia manual, abordando cada corpo com a mesma curiosidade e atenção que traria à coreografia ou à prática somática.',
      'Com uma trajetória terapêutica rica e diversificada, ela integra diferentes abordagens em um estilo de atendimento perfeitamente coordenado: sem a sensação de transição entre técnicas, apenas uma progressão fluida guiada pelo que o corpo precisa a seguir, moldada pela mesma inteligência que conduz uma dançarina por uma partitura.',
      'Seu trabalho com óleo é particularmente distinto — suave, rítmico e profundamente atento a como um movimento evolui naturalmente para o próximo, criando uma qualidade de imersão que permite à pessoa receber inteiramente.',
      'Ruth representa um tipo de terapeuta genuinamente raro: alguém cujos anos de experiência não se tornaram rotina, mas continuaram se aprofundando em algo cada vez mais consciente, preciso e inconfundivelmente vivo.',
    ],
    youtubeId: 'oBUjw3UowAw',
    coordinates: [-46.633, -23.550], // São Paulo
    instagram: 'massorootsz',
  },
  {
    id: 'sofia',
    name: 'Sofia',
    city: 'Montevideo',
    country: 'Uruguay',
    descriptors: ['Expansive', 'Fluid', 'Athletic'],
    descriptorsPT: ['Expansiva', 'Fluida', 'Atlética'],
    bio: 'Based between Montevideo, Uruguay and London, Sofia brings together her background in yoga and the CherieThai Method through movement that is fluid, expansive and beautifully coordinated — a quality of physical expression that is immediately apparent and genuinely difficult to teach.',
    bioPoints: [
      'Her treatments are characterised by seamless transitions, full-body engagement and an athletic quality that allows every technique to feel simultaneously effortless and precise — the result of years of dedicated movement practice translated directly and naturally into therapeutic bodywork.',
      'She approaches manual therapy with elegance and adaptability, drawing on a deep appreciation for movement as an integrated expression of the whole body rather than a collection of isolated procedures, and letting that philosophy guide the arc of every session.',
      'Equally at home in Thai mat work and oil-based therapy, she brings fluidity and structural awareness to both forms, creating sessions that feel genuinely complete — dynamic in quality, balanced in intention and absorbing from the very first movement to the last.',
      'Her dual life between South America and London has given her an international breadth of perspective, and her work carries that openness: adaptable to different bodies, different cultural contexts and different ways of understanding what care can be.',
    ],
    bioPT: 'Baseada entre Montevidéu, Uruguai e Londres, Sofia integra sua experiência em yoga ao Método CherieThai por meio de um movimento fluido, expansivo e extraordinariamente coordenado — uma qualidade de expressão física que é imediatamente perceptível e genuinamente difícil de ensinar.',
    bioPTPoints: [
      'Seus atendimentos são marcados por transições suaves, envolvimento de todo o corpo e uma qualidade atlética que torna cada técnica ao mesmo tempo precisa e natural — o resultado de anos de prática dedicada de movimento traduzida direta e naturalmente em terapia corporal.',
      'Ela aborda a terapia manual com elegância e adaptabilidade, a partir de uma profunda valorização do movimento como expressão integrada do corpo inteiro, e não como um conjunto de procedimentos isolados, deixando essa filosofia guiar o arco de cada sessão.',
      'Igualmente à vontade no trabalho no colchão e na terapia com óleo, traz fluidez e consciência estrutural às duas modalidades, criando sessões genuinamente completas — dinâmicas em qualidade, equilibradas em intenção e envolventes do primeiro ao último movimento.',
      'Sua vida dividida entre a América do Sul e Londres lhe conferiu uma amplitude de perspectiva internacional, e seu trabalho carrega essa abertura: adaptável a diferentes corpos, diferentes contextos culturais e diferentes formas de compreender o que o cuidado pode ser.',
    ],
    youtubeId: 'N1eqqQN-ucA',
    coordinates: [-56.165, -34.901], // Montevideo, Uruguay
    coordinates2: [-0.127, 51.507],  // London, UK
    city2: 'London',
    country2: 'United Kingdom',
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
    bio: 'Based in Barra da Tijuca, Rio de Janeiro, Claudio joined the CherieThai Institute with a clear and deeply personal purpose: to learn how to care for someone close to him — an intention that shaped the sincerity and commitment of his entire training.',
    bioPoints: [
      'Throughout the programme, he demonstrated an impressive ability to understand and execute the Method\'s techniques with growing confidence, absorbing the principles of the approach and translating them into a quality of touch that was both purposeful and genuinely effective.',
      'He developed precise movement and effective pressure with remarkable speed, showing that when the motivation to learn is rooted in real care for another person, the body finds its way to the work with unusual commitment.',
      'Calm, dependable and quietly focused, Claudio brought a quality of seriousness to his learning that earned him real competence — his touch, by the end of the training, was something a person could trust.',
      'His journey reflects one of the most compelling truths the CherieThai Institute has encountered: that thoughtful touch, learned with genuine intention, can be a profound expression of love — and that the Method has something meaningful to offer anyone willing to give themselves to learning it.',
    ],
    bioPT: 'Baseado na Barra da Tijuca, Rio de Janeiro, Claudio ingressou no Instituto CherieThai com um propósito claro e profundamente pessoal: aprender a cuidar de alguém importante em sua vida — uma intenção que moldou a sinceridade e o comprometimento de toda a sua formação.',
    bioPTPoints: [
      'Ao longo da formação, demonstrou uma impressionante capacidade de compreender e executar as técnicas do Método com segurança crescente, absorvendo os princípios da abordagem e traduzindo-os em uma qualidade de toque ao mesmo tempo propositiva e genuinamente eficaz.',
      'Desenvolveu movimentos precisos e uma pressão segura com notável rapidez, mostrando que quando a motivação para aprender está enraizada no cuidado real por outra pessoa, o corpo encontra o caminho para o trabalho com um comprometimento incomum.',
      'Calmo, confiável e silenciosamente focado, Claudio trouxe uma qualidade de seriedade ao seu aprendizado que lhe rendeu uma competência real — seu toque, ao final da formação, era algo em que uma pessoa podia confiar.',
      'Sua trajetória reflete uma das verdades mais tocantes que o Instituto CherieThai já encontrou: que o toque consciente, aprendido com intenção genuína, pode ser uma expressão profunda de amor — e que o Método tem algo significativo a oferecer a qualquer pessoa disposta a se entregar ao aprendizado.',
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
    bio: 'Based in Jardim Botânico, Rio de Janeiro, Márcia joined the CherieThai Institute with a deeply personal goal: to better understand the body and learn how to support her son\'s wellbeing — a motivation as sincere as any the Institute has known.',
    bioPoints: [
      'Throughout the training, she demonstrated a remarkable ability to absorb and apply the principles of the CherieThai Method with confidence and genuine precision, developing real competence in the techniques despite having no previous professional background in bodywork.',
      'Her natural curiosity, warmth and light-hearted enthusiasm made her an exceptional presence to learn alongside — she approached every session with a willingness to try, to laugh at difficulty and to keep going until the movement felt right.',
      'The speed with which she developed a quality of touch that felt trustworthy and effective was a genuine reminder that physical intelligence is not reserved for those who have trained for years — it can arrive quickly when the motivation is real.',
      'Márcia\'s journey is proof that the most meaningful learning is always driven by openness, love and a sincere desire to care for the people who matter most.',
    ],
    bioPT: 'Baseada no Jardim Botânico, Rio de Janeiro, Márcia ingressou no Instituto CherieThai com um objetivo profundamente pessoal: compreender melhor o corpo e aprender a cuidar do bem-estar do seu filho — uma motivação tão sincera quanto qualquer outra que o Instituto já conheceu.',
    bioPTPoints: [
      'Ao longo da formação, demonstrou uma notável capacidade de absorver e aplicar os princípios do Método CherieThai com confiança e precisão genuína, desenvolvendo uma real competência nas técnicas mesmo sem experiência profissional prévia com trabalho corporal.',
      'Sua curiosidade natural, calor humano e entusiasmo leve tornaram sua presença excepcional durante o aprendizado — ela abordava cada sessão com disposição para tentar, para rir das dificuldades e para continuar até que o movimento parecesse certo.',
      'A rapidez com que desenvolveu uma qualidade de toque que parecia confiável e eficaz foi um lembrete genuíno de que a inteligência física não é reservada a quem treinou durante anos — ela pode chegar rapidamente quando a motivação é real.',
      'A trajetória de Márcia é uma prova de que o aprendizado mais significativo é sempre movido pela abertura, pelo amor e pelo desejo sincero de cuidar das pessoas que mais importam.',
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
    bio: 'Based in Seabra, in the Chapada Diamantina, Bahia, Edilene brings years of experience as both a manual therapist and educator into the clinical reasoning of the CherieThai Method — creating work that is deeply informed, technically accomplished and genuinely generous.',
    bioPoints: [
      'Her treatments are distinguished by meticulous tissue assessment and a refined approach to deep oil work — she reads the body carefully before she touches it, and continues reading it throughout the session, adjusting her decisions in response to what she finds.',
      'Her exceptional ability to recognise subtle differences in tissue quality allows her to work with a level of specificity that makes each treatment feel truly individual rather than adapted from a standard sequence.',
      'With a naturally warm and approachable presence, she creates a treatment environment in which technical precision and genuine care feel inseparable — the people she works with trust her, and that trust allows the body to respond more fully.',
      'Her work reflects a practitioner who has built something rare over many years: a deep respect for the complexity of the human body, combined with the skill and knowledge to actually meet that complexity with intelligence and care.',
    ],
    bioPT: 'Baseada em Seabra, na Chapada Diamantina, Bahia, Edilene traz anos de experiência como terapeuta e educadora para o raciocínio clínico do Método CherieThai — criando um trabalho profundamente informado, tecnicamente desenvolvido e genuinamente generoso.',
    bioPTPoints: [
      'Seus atendimentos se distinguem pela avaliação minuciosa dos tecidos e por uma abordagem refinada no trabalho com óleo profundo — ela lê o corpo com atenção antes de tocá-lo e continua lendo ao longo de toda a sessão, ajustando suas decisões em resposta ao que encontra.',
      'Sua excepcional capacidade de perceber diferenças sutis na qualidade dos tecidos permite que trabalhe com um nível de especificidade que faz cada atendimento parecer verdadeiramente individual, e não adaptado de uma sequência padrão.',
      'Com uma presença naturalmente acolhedora e calorosa, ela cria um ambiente de atendimento no qual precisão técnica e cuidado genuíno parecem inseparáveis — as pessoas com quem trabalha confiam nela, e essa confiança permite que o corpo responda de forma mais plena.',
      'Seu trabalho reflete uma profissional que construiu algo raro ao longo de muitos anos: um profundo respeito pela complexidade do corpo humano, combinado com a habilidade e o conhecimento de realmente encontrar essa complexidade com inteligência e cuidado.',
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
    bio: 'Based in Barra da Tijuca, Rio de Janeiro, Ingrid expresses the CherieThai Method through patience, adaptability and a thoughtful quality of observation that allows her to understand what the body needs before she tries to change it.',
    bioPoints: [
      'Rather than relying on deep pressure as the primary tool, she explores how precise releases, careful positioning and gradual progression can encourage meaningful and lasting change within the body — working with its natural logic rather than imposing something upon it.',
      'Her oil work is elegant and well-sequenced, and her ability to adapt complex Thai techniques to individual bodies and conditions allows her to create treatments that feel refined, considered and genuinely effective across a wide range of presentations.',
      'Guided by real curiosity about why people experience pain and how the body organises itself around discomfort, she brings an investigative quality to her clinical work that goes beyond simple technique and into a genuine engagement with each person\'s situation.',
      'Her approach reflects a practitioner who believes that lasting results come from understanding and working with the body\'s own processes — patient, precise and always respectful of its natural rhythm.',
    ],
    bioPT: 'Baseada na Barra da Tijuca, Rio de Janeiro, Ingrid expressa o Método CherieThai por meio da paciência, da adaptabilidade e de uma qualidade de observação cuidadosa que lhe permite compreender o que o corpo precisa antes de tentar modificá-lo.',
    bioPTPoints: [
      'Em vez de depender da pressão profunda como principal ferramenta, ela explora como liberações precisas, posicionamentos estratégicos e uma progressão gradual podem promover mudanças significativas e duradouras no corpo — trabalhando com sua lógica natural em vez de impor algo sobre ele.',
      'Seu trabalho com óleo é elegante e bem sequenciado, e sua capacidade de adaptar técnicas complexas da massagem tailandesa a corpos e condições individuais permite criar atendimentos refinados, cuidadosos e genuinamente eficazes em uma ampla variedade de demandas.',
      'Movida por uma curiosidade real sobre por que as pessoas experienciam dor e como o corpo se organiza ao redor do desconforto, ela traz uma qualidade investigativa ao seu trabalho clínico que vai além da técnica simples e adentra um engajamento genuíno com a situação de cada pessoa.',
      'Sua abordagem reflete uma terapeuta que acredita que resultados duradouros vêm de compreender e trabalhar com os próprios processos do corpo — paciente, precisa e sempre respeitosa com seu ritmo natural.',
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
    bio: 'Based in Ilhabela, São Paulo, Ariane expresses the CherieThai Method through exceptional sensitivity, an unhurried quality of presence and a genuinely integrative approach to the body — one that attends to the person as much as to the tissue.',
    bioPoints: [
      'Her treatments are characterised by graceful, deliberate movement and an attentive quality of touch that allows her to perceive subtle changes throughout the body — shifts in tension, response and availability that guide her clinical decisions in real time.',
      'She combines a gentle, reassuring presence with a quality of pressure that is more effective than it initially appears: patient in its approach, but purposeful and consistent in its results.',
      'Her sessions are unhurried by design — she believes that the body changes more fully when it feels held rather than worked on, and she creates conditions for that quality of ease as the foundation of everything else she does.',
      'Set in the extraordinary landscape of Ilhabela, Ariane\'s practice reflects a therapist who has found her place — someone who values careful listening, meaningful human connection and an approach to care that is as individual as the person receiving it.',
    ],
    bioPT: 'Baseada em Ilhabela, São Paulo, Ariane expressa o Método CherieThai por meio de uma sensibilidade excepcional, de uma qualidade de presença sem pressa e de uma abordagem genuinamente integrativa do corpo — que atende à pessoa tanto quanto ao tecido.',
    bioPTPoints: [
      'Seus atendimentos são marcados por movimentos elegantes e deliberados e por uma qualidade de toque atenta que lhe permite perceber variações sutis ao longo do corpo — mudanças de tensão, resposta e disponibilidade que guiam suas decisões clínicas em tempo real.',
      'Ela combina uma presença gentil e acolhedora com uma qualidade de pressão que é mais eficaz do que parece à primeira vista: paciente em sua abordagem, mas propositiva e consistente em seus resultados.',
      'Suas sessões são intencionalmente sem pressa — ela acredita que o corpo muda de forma mais completa quando se sente sustentado em vez de trabalhado, e cria as condições para essa qualidade de facilidade como base de tudo o mais que faz.',
      'Na paisagem extraordinária de Ilhabela, a prática de Ariane reflete uma terapeuta que encontrou seu lugar — alguém que valoriza a escuta cuidadosa, a conexão humana significativa e uma abordagem ao cuidado tão individual quanto a pessoa que o recebe.',
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
    bio: 'Based in Recife, Pernambuco, Adriane integrates her background in physiotherapy with the CherieThai Method through a mindset of continuous enquiry — always seeking not only to perform technique, but to genuinely understand what she is doing and why.',
    bioPoints: [
      'Naturally inquisitive, she approaches every movement with thoughtful curiosity: not satisfied with being able to reproduce a technique, she pushes further, asking what it is actually doing in the body and how that understanding should shape the way she applies it.',
      'Her physiotherapy background gives her a structural foundation that enriches her manual therapy, allowing her to think clearly about function, compensation and the relationship between different areas of the body as she works.',
      'Her treatments are characterised by graceful movement, careful observation and an adaptable approach: she listens continuously throughout the session, adjusting her decisions in response to how the body responds rather than following a fixed progression.',
      'Through consistent dedication and repeated practice, she has developed an elegant and considered style that reflects both technical refinement and a deep, ongoing commitment to growing as a clinician and as a person.',
    ],
    bioPT: 'Baseada em Recife, Pernambuco, Adriane integra sua formação em Fisioterapia ao Método CherieThai por meio de uma postura de investigação contínua — sempre buscando não apenas realizar a técnica, mas compreender genuinamente o que está fazendo e por quê.',
    bioPTPoints: [
      'Naturalmente curiosa, ela aborda cada movimento com questionamento reflexivo: não satisfeita em reproduzir uma técnica, vai além, perguntando o que ela está realmente fazendo no corpo e como esse entendimento deve moldar a forma como a aplica.',
      'Sua formação em fisioterapia lhe oferece uma base estrutural que enriquece sua terapia manual, permitindo que pense com clareza sobre função, compensação e as relações entre diferentes áreas do corpo enquanto trabalha.',
      'Seus atendimentos são marcados por movimentos elegantes, observação cuidadosa e uma abordagem adaptável: ela escuta continuamente ao longo da sessão, ajustando suas decisões em resposta a como o corpo responde, em vez de seguir uma progressão fixa.',
      'Por meio de dedicação constante e prática repetida, desenvolveu um estilo elegante e refletido que une refinamento técnico e um comprometimento profundo e contínuo com o crescimento como terapeuta e como pessoa.',
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
    bio: 'Based in Lauro de Freitas, Bahia, Vanessa Santiago integrates her background in physiotherapy and Pilates with the CherieThai Method to create a refined, movement-intelligent approach to care that is as attentive to how the body moves as it is to how it feels.',
    bioPoints: [
      'Her combination of physiotherapy training and Pilates expertise gives her an unusually thorough understanding of movement mechanics — one that she brings directly into her manual therapy, thinking simultaneously about structure, function and the individual patterns of the person in front of her.',
      'She actively explores how manual therapy and movement education can complement one another: her sessions often open pathways that her clients can then develop through movement, creating a continuity of care that extends beyond the treatment table.',
      'Her treatments are distinguished by graceful, well-sequenced transitions, thoughtful touch and a strong natural sense of rhythm — the kind of quality that makes a session feel both technically considered and genuinely pleasurable to receive.',
      'Vanessa reflects a practitioner who values both precision and artistry: her attention to detail and her naturally elegant way of working allow each treatment to feel deeply personalised, purposeful and quietly beautiful.',
    ],
    bioPT: 'Baseada em Lauro de Freitas, Bahia, Vanessa Santiago integra sua formação em Fisioterapia e Pilates ao Método CherieThai, desenvolvendo uma abordagem refinada e inteligente em movimento, tão atenta a como o corpo se move quanto a como ele se sente.',
    bioPTPoints: [
      'A combinação de sua formação em fisioterapia e sua expertise em Pilates lhe proporciona uma compreensão incomumente profunda da mecânica do movimento — algo que ela traz diretamente para a terapia manual, pensando simultaneamente em estrutura, função e nos padrões individuais de cada pessoa à sua frente.',
      'Ela explora ativamente como terapia manual e educação do movimento podem se complementar: suas sessões frequentemente abrem caminhos que seus clientes podem então desenvolver através do movimento, criando uma continuidade de cuidado que se estende além da maca.',
      'Seus atendimentos se distinguem por transições elegantes e bem sequenciadas, toque cuidadoso e um forte senso rítmico natural — a qualidade que faz com que uma sessão pareça ao mesmo tempo tecnicamente refletida e genuinamente prazerosa de receber.',
      'Vanessa reflete uma terapeuta que valoriza tanto a precisão quanto a expressão: sua atenção aos detalhes e sua forma naturalmente elegante de trabalhar permitem que cada atendimento pareça profundamente personalizado, propositivo e silenciosamente belo.',
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
    bio: 'Based in Niterói, Rio de Janeiro, Kamala brings a distinctive and genuinely holistic perspective to the CherieThai Method through her background in Ayurvedic therapy — a tradition that has given her an unusually perceptive way of reading the body.',
    bioPoints: [
      'Her Ayurvedic training taught her to observe patterns before she acts: to look at the whole person, notice how different systems relate to one another, and understand the body as a dynamic, interconnected field rather than a collection of parts to be addressed one at a time.',
      'This systemic way of seeing translates naturally into her manual therapy, where she approaches each session with remarkable perception and sensitivity — identifying tensions, compensations and relationships that a less attentive practitioner might miss entirely.',
      'Her treatments are subtle in their execution but deeply effective in their results, precisely because she is working with the body\'s actual logic rather than imposing an external protocol upon it.',
      'Her work reflects a careful and ongoing integration of her Ayurvedic foundations with the clinical reasoning and manual principles of the CherieThai Method — two different ways of understanding the body that, in her hands, speak to one another with unusual fluency.',
    ],
    bioPT: 'Baseada em Niterói, Rio de Janeiro, Kamala traz ao Método CherieThai uma perspectiva genuinamente holística e distinta, enriquecida por sua formação em terapia ayurvédica — uma tradição que lhe conferiu uma forma excepcionalmente perceptiva de ler o corpo.',
    bioPTPoints: [
      'Sua formação ayurvédica lhe ensinou a observar padrões antes de agir: a olhar para a pessoa como um todo, perceber como diferentes sistemas se relacionam e compreender o corpo como um campo dinâmico e interconectado, e não como um conjunto de partes a serem trabalhadas uma de cada vez.',
      'Essa maneira sistêmica de enxergar se traduz naturalmente em sua terapia manual, onde ela aborda cada sessão com uma percepção e sensibilidade notáveis — identificando tensões, compensações e relações que um terapeuta menos atento poderia deixar passar inteiramente.',
      'Seus tratamentos são sutis em execução, mas profundamente eficazes em seus resultados, precisamente porque ela está trabalhando com a lógica real do corpo em vez de impor um protocolo externo sobre ele.',
      'Seu trabalho reflete uma integração cuidadosa e contínua entre suas bases ayurvédicas e o raciocínio clínico e os princípios manuais do Método CherieThai — duas formas diferentes de compreender o corpo que, em suas mãos, dialogam com uma fluência incomum.',
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
    bio: 'Based in Ipanema, Rio de Janeiro, Rose brings an adaptable and creatively curious perspective to the CherieThai Method — arriving with existing experience in manual therapy and a genuine desire to deepen and refine what she already knew.',
    bioPoints: [
      'Her existing therapeutic background meant she came to the training with a foundation to build on, but also with the habits and assumptions that experience can instil — and she approached the challenge of setting those aside with admirable openness and intellectual honesty.',
      'Throughout the course, she continuously explored how to integrate the CherieThai Method into her own practice while remaining genuinely faithful to its principles: not grafting new techniques onto old patterns, but allowing her approach to actually shift and evolve.',
      'Her creative energy and adaptability made her a dynamic presence in the learning environment, consistently finding new ways to understand and express what she was learning.',
      'Her commitment to growth and her determination to develop greater precision, confidence and range reflect a practitioner who is always in motion — always pursuing a level of care that is more thoughtful, more effective and more entirely her own.',
    ],
    bioPT: 'Baseada em Ipanema, Rio de Janeiro, Rose traz ao Método CherieThai uma perspectiva adaptável e criativamente curiosa — chegando com experiência prévia em terapia manual e um desejo genuíno de aprofundar e refinar o que já sabia.',
    bioPTPoints: [
      'Sua trajetória terapêutica prévia significava que ela chegava à formação com uma base a construir, mas também com os hábitos e pressupostos que a experiência pode instalar — e ela encarou o desafio de deixá-los de lado com uma abertura admirável e honestidade intelectual.',
      'Ao longo do curso, explorou continuamente como integrar o Método CherieThai à sua própria prática, mantendo-se genuinamente fiel aos seus princípios: não enxertando novas técnicas em padrões antigos, mas permitindo que sua abordagem realmente mudasse e evoluísse.',
      'Sua energia criativa e adaptabilidade fizeram dela uma presença dinâmica no ambiente de aprendizado, encontrando constantemente novas formas de compreender e expressar o que estava aprendendo.',
      'Seu comprometimento com o crescimento e sua determinação em desenvolver maior precisão, confiança e amplitude refletem uma terapeuta sempre em movimento — sempre buscando um nível de cuidado mais reflexivo, mais eficaz e mais inteiramente seu.',
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
    bio: 'Based in Florianópolis, Santa Catarina, Martha brings a distinctive combination of movement expertise and manual therapy to the CherieThai Method — shaped by years of practice in yoga and movement education that have given her an exceptional quality of physical intelligence.',
    bioPoints: [
      'Her background in yoga and body awareness allows her to approach complex techniques not as external shapes to be copied, but as movements to be understood from the inside out — she inhabits what she learns before she transmits it, which gives her execution a quality of naturalness that is genuinely difficult to teach.',
      'Her body coordination and spatial awareness are exceptional, allowing her to navigate even the most technically demanding sequences with fluidity, control and an elegance that makes the work look considerably easier than it is.',
      'Treatments are characterised by smooth, well-considered transitions and a thoughtful quality of sequencing — there is always a sense that one movement is connected to the next, guided by an underlying logic rather than by habit or routine.',
      'Martha reflects a practitioner who has found a genuine synthesis between movement education and manual therapy: someone who understands the body as a whole, respects its rhythm and brings both technical precision and an educated appreciation for movement into everything she does.',
    ],
    bioPT: 'Baseada em Florianópolis, Santa Catarina, Martha une ao Método CherieThai uma combinação distintiva de expertise em movimento e terapia manual — moldada por anos de prática em yoga e educação do movimento que lhe conferiram uma qualidade excepcional de inteligência física.',
    bioPTPoints: [
      'Sua trajetória no yoga e na consciência corporal permite que ela aborde técnicas complexas não como formas externas a serem copiadas, mas como movimentos a serem compreendidos de dentro para fora — ela habita o que aprende antes de transmiti-lo, o que dá à sua execução uma qualidade de naturalidade genuinamente difícil de ensinar.',
      'Sua coordenação corporal e consciência espacial são excepcionais, permitindo que ela percorra até as sequências mais exigentes tecnicamente com fluidez, controle e uma elegância que faz o trabalho parecer consideravelmente mais fácil do que é.',
      'Seus atendimentos são marcados por transições suaves e bem consideradas e por uma qualidade de sequenciamento reflexivo — sempre há a sensação de que um movimento está conectado ao próximo, guiado por uma lógica subjacente em vez de hábito ou rotina.',
      'Martha reflete uma terapeuta que encontrou uma síntese genuína entre educação do movimento e terapia manual: alguém que compreende o corpo como um todo, respeita seu ritmo e traz tanto precisão técnica quanto uma valorização educada do movimento para tudo o que faz.',
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
    bio: 'Based in Belo Horizonte, Minas Gerais, Cristiane is among the most determined and integrative practitioners to emerge from the CherieThai Institute — a therapist who has pursued the Method with a level of commitment that goes well beyond the formal training itself.',
    bioPoints: [
      'Having completed both the CherieThai Professional Training and the Institute\'s inaugural Thailand Retreat, her understanding of the Method is unusually deep, shaped by immersive practice in the country of its origins and by the sustained personal growth that kind of experience demands.',
      'Her work is particularly expressed through refined oil therapy, where her ability to combine thoughtful pressure, fluid transitions and an integrative vision allows her to create treatments that are both genuinely effective and profoundly restorative from the very first touch.',
      'She approaches manual therapy as a practitioner who is never satisfied with simply reproducing technique — always seeking to understand the reasoning that connects each element of the Method, from the logic of initial assessment through to the progression and conclusion of a session.',
      'Cristiane represents a quality of professional commitment that is increasingly rare: someone whose curiosity, discipline and desire to deepen her practice continue to grow long after the training has ended, and whose work will keep evolving for many years to come.',
    ],
    bioPT: 'Baseada em Belo Horizonte, Minas Gerais, Cristiane está entre as terapeutas mais determinadas e integrativas formadas pelo Instituto CherieThai — uma profissional que buscou o Método com um nível de comprometimento que vai muito além da formação formal.',
    bioPTPoints: [
      'Tendo concluído tanto a Formação Profissional CherieThai quanto o primeiro Retiro na Tailândia, sua compreensão do Método é incomum em profundidade, moldada pela prática imersiva no país de origem e pelo crescimento pessoal sustentado que esse tipo de experiência exige.',
      'Seu trabalho é especialmente expresso na terapia com óleo, onde sua capacidade de combinar pressão cuidadosa, transições fluidas e uma visão integrativa resulta em atendimentos ao mesmo tempo genuinamente eficazes e profundamente restauradores desde o primeiro toque.',
      'Ela aborda a terapia manual como uma terapeuta que nunca se satisfaz em apenas reproduzir técnica — sempre buscando compreender o raciocínio que conecta cada elemento do Método, da lógica da avaliação inicial à progressão e conclusão de uma sessão.',
      'Cristiane representa uma qualidade de comprometimento profissional cada vez mais rara: alguém cuja curiosidade, disciplina e desejo de aprofundar a prática continuam crescendo muito depois de encerrada a formação, e cujo trabalho continuará evoluindo por muitos anos.',
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
    bio: 'Based in Florianópolis, Tati Alok brings many years of experience in bodywork, Tantra and spiritual practice into her expression of the CherieThai Method — a practitioner whose depth of background gives everything she does a quality of authority and presence that is immediately felt.',
    bioPoints: [
      'Her work carries an almost ritualistic quality: shaped by an established sensitivity to touch, atmosphere and the subtleties of human presence, her sessions inhabit a register that goes beyond the clinical and into something altogether more complete.',
      'During her training, she stood out for the way she absorbed and transformed technique — not performing movements, but moving with a quality of intention, intuition and quiet mystery that made her work feel unlike anyone else\'s in the room.',
      'The CherieThai Method did not arrive in her practice as something to be added onto what she already knew: she allowed it to enter and to reshape her existing body of work, integrating its clinical rigour and structural intelligence into a practice that has been developing and deepening for many years.',
      'To receive a session from Tati Alok is to experience bodywork from someone who has genuinely lived the territory — whose presence communicates not only skill, but a relationship with the body and with care that has been earned through long and serious practice.',
    ],
    bioPT: 'Baseada em Florianópolis, Tati Alok traz muitos anos de experiência em terapias corporais, Tantra e práticas espirituais para sua expressão do Método CherieThai — uma terapeuta cuja profundidade de trajetória confere a tudo o que faz uma qualidade de autoridade e presença que é imediatamente sentida.',
    bioPTPoints: [
      'Seu trabalho carrega uma qualidade quase ritualística: moldado por uma sensibilidade já amadurecida para o toque, a atmosfera e as sutilezas da presença humana, suas sessões habitam um registro que vai além do clínico e adentra algo consideravelmente mais completo.',
      'Durante a formação, destacou-se pela forma como absorveu e transformou a técnica — não executando movimentos, mas movendo-se com uma qualidade de intenção, intuição e mistério silencioso que tornava seu trabalho diferente do de qualquer outra pessoa na sala.',
      'O Método CherieThai não chegou à sua prática como algo a ser acrescentado ao que ela já sabia: ela o deixou entrar e remodelar seu trabalho corporal já existente, integrando seu rigor clínico e inteligência estrutural a uma prática que vem sendo desenvolvida e aprofundada há muitos anos.',
      'Receber uma sessão de Tati Alok é experienciar o trabalho corporal de alguém que genuinamente viveu o território — cuja presença comunica não apenas habilidade, mas uma relação com o corpo e com o cuidado que foi conquistada por meio de uma prática longa e séria.',
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
    bio: 'Based between Caraíva, Bahia, and São Paulo, Yuri represents one of the most complete and naturally gifted expressions of the CherieThai Method to emerge from the Institute — a practitioner who does not simply perform the work, but genuinely embodies it.',
    bioPoints: [
      'His understanding of movement, touch, transitions and the reasoning that connects them is exceptional: he grasps not only what each technique does, but why it exists within the larger architecture of the Method, and that level of comprehension makes his work qualitatively different from mere reproduction.',
      'His treatments are beautifully composed, technically accomplished and remarkably natural — there is no sense of effort or performance in what he does, only a fluid, confident intelligence that moves through the body with ease and purpose.',
      'Equally generous with his knowledge, he became a genuinely valuable presence among his peers throughout the training: someone who helped others refine their understanding not through instruction, but through the quality of his own work and the quiet consistency of his engagement.',
      'Between the wild coast of Caraíva and the energy of São Paulo, Yuri carries the CherieThai Method into two very different worlds — and brings the same depth, naturalness and quality of care to both.',
    ],
    bioPT: 'Dividindo sua atuação entre Caraíva, Bahia, e São Paulo, Yuri representa uma das expressões mais completas e naturalmente talentosas do Método CherieThai formadas pelo Instituto — um terapeuta que não apenas realiza o trabalho, mas genuinamente o encarna.',
    bioPTPoints: [
      'Sua compreensão do movimento, do toque, das transições e do raciocínio que os conecta é excepcional: ele percebe não apenas o que cada técnica faz, mas por que ela existe dentro da arquitetura maior do Método — e esse nível de compreensão torna seu trabalho qualitativamente diferente da mera reprodução.',
      'Seus atendimentos são harmoniosamente compostos, tecnicamente desenvolvidos e extremamente naturais — não há nenhuma sensação de esforço ou desempenho no que ele faz, apenas uma inteligência fluida e confiante que se move pelo corpo com facilidade e propósito.',
      'Igualmente generoso com seu conhecimento, tornou-se uma presença genuinamente valiosa entre os colegas durante a formação: alguém que ajudou os outros a refinar sua compreensão não pela instrução, mas pela qualidade de seu próprio trabalho e pela constância tranquila de seu envolvimento.',
      'Entre a costa selvagem de Caraíva e a energia de São Paulo, Yuri carrega o Método CherieThai para dois mundos muito diferentes — e traz a mesma profundidade, naturalidade e qualidade de cuidado para ambos.',
    ],
    youtubeId: 'cUrBv8NLx1I',
    coordinates: [-39.197, -16.998], // Caraíva, Bahia
    coordinates2: [-46.633, -23.550], // São Paulo
    city2: 'São Paulo',
    country2: 'Brasil',
    instagram: 'yurimussury',
  },
  {
    id: 'adrilira',
    name: 'Adri Lira',
    city: 'France',
    country: 'France',
    descriptors: ['Tactile', 'Intuitive', 'Potent'],
    descriptorsPT: ['Tátil', 'Intuitiva', 'Potente'],
    bio: 'Based in France, Adri Lira brings an exceptionally tactile and intuitive sensitivity to the CherieThai Method — one that has been shaped, in the most profound way, by her experience as a visually impaired practitioner.',
    bioPoints: [
      'Without the use of vision to guide her reading of the body, Adri has developed an extraordinary depth of touch: her hands perceive subtle differences in tissue quality, tension and response that many practitioners with full sight would simply not register, and she builds her clinical understanding of each person entirely through what she feels beneath her hands.',
      'Her work carries a beautiful and striking contrast: it is remarkably gentle in its approach — patient, exploratory and deeply considerate — and yet surprisingly potent in its effect, achieving results through a quality of listening and presence rather than through force or pressure.',
      'Naturally curious and deeply committed to learning, she continually seeks to understand beyond the technique itself, approaching the body with a quality of fascination and openness that keeps her work alive and genuinely investigative rather than routine.',
      'Adri represents something the CherieThai Institute is deeply proud of: a practitioner who has turned what the world might see as a limitation into one of the most remarkable clinical gifts in the room — and who offers care of a depth and attentiveness that is genuinely exceptional.',
    ],
    bioPT: 'Baseada na França, Adri Lira traz ao Método CherieThai uma sensibilidade tátil e intuitiva excepcionalmente particular — moldada, da forma mais profunda, por sua experiência como terapeuta com deficiência visual.',
    bioPTPoints: [
      'Sem o uso da visão para guiar sua leitura do corpo, Adri desenvolveu uma profundidade de toque extraordinária: suas mãos percebem diferenças sutis na qualidade dos tecidos, nas tensões e nas respostas que muitos terapeutas com visão plena simplesmente não registrariam — e ela constrói sua compreensão clínica de cada pessoa inteiramente por meio do que sente sob as mãos.',
      'Seu trabalho carrega um contraste marcante e belo: é notavelmente gentil em sua abordagem — paciente, exploratório e profundamente considerado — e, ao mesmo tempo, surpreendentemente potente em seu efeito, alcançando resultados por meio de uma qualidade de escuta e presença, e não de força ou pressão.',
      'Naturalmente curiosa e profundamente comprometida com o aprendizado, ela busca continuamente compreender além da técnica em si, abordando o corpo com uma qualidade de fascínio e abertura que mantém seu trabalho vivo e genuinamente investigativo, em vez de rotineiro.',
      'Adri representa algo de que o Instituto CherieThai tem profundo orgulho: uma terapeuta que transformou o que o mundo poderia ver como uma limitação em um dos dons clínicos mais notáveis da sala — e que oferece um cuidado de uma profundidade e atenção genuinamente excepcionais.',
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
    bio: 'Based in Belo Horizonte, Minas Gerais, Mary brings a deeply nurturing presence to the CherieThai Method — combined with a particularly strong and confident ability to work with pain, restriction and the demands of physically active bodies.',
    bioPoints: [
      'Her gentle, unhurried nature creates an immediate quality of ease: people feel held in her care before the session has properly begun, and that sense of safety allows the body to release patterns of tension that it might otherwise protect against.',
      'Beneath that warmth lies a highly capable therapeutic approach — she is especially effective with active and athletic bodies, adapting her touch, depth and techniques to address restriction and discomfort with a directness and confidence that produces real results.',
      'She has a particular gift for pain: not simply working around it, but engaging with it thoughtfully — understanding how the body has organised itself around a problem and gently, persistently encouraging it to reorganise.',
      "Mary's work is defined by a contrast that is rare and genuinely valuable: comforting in presence, purposeful in treatment and consistently effective in the results she delivers.",
    ],
    bioPT: 'Baseada em Belo Horizonte, Minas Gerais, Mary traz ao Método CherieThai uma presença profundamente acolhedora — combinada com uma habilidade marcante e segura no trabalho com dor, restrição e as exigências de corpos fisicamente ativos.',
    bioPTPoints: [
      'Seu jeito gentil e sem pressa cria uma qualidade imediata de facilidade: as pessoas se sentem acolhidas em seus cuidados antes mesmo de a sessão propriamente começar, e essa sensação de segurança permite que o corpo libere padrões de tensão que de outra forma protegeria.',
      'Por trás desse calor existe uma abordagem terapêutica extremamente capaz — ela é especialmente eficaz com corpos ativos e atléticos, adaptando seu toque, profundidade e técnicas para trabalhar restrições e desconfortos com uma diretividade e confiança que produzem resultados reais.',
      'Ela tem um dom particular para a dor: não apenas contornando-a, mas engajando-se com ela de forma cuidadosa — compreendendo como o corpo se organizou ao redor de um problema e encorajando-o, gentil e persistentemente, a se reorganizar.',
      'O trabalho de Mary é marcado por um contraste raro e genuinamente valioso: acolhedor na presença, propositivo no tratamento e consistentemente eficaz nos resultados que entrega.',
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
    bio: 'Based in Salvador, Bahia, Julio is a sports-focused therapist whose work within the CherieThai Method is distinguished by technical depth, relentless curiosity and an unusually strong capacity for complex and demanding therapeutic care.',
    bioPoints: [
      'A highly kinaesthetic learner, he insists on experiencing every technique in his own body before reproducing it — understanding not only how a movement is mechanically performed, but how it should actually feel to the person receiving it, and what quality of execution creates the most meaningful effect.',
      'Throughout the training, his constant desire to revisit, question and refine each technique — returning to movements others had already moved past, asking why they worked and what would happen if they were applied differently — revealed an exceptional and genuinely rare commitment to quality.',
      'His sports background gives him an instinctive understanding of how active bodies load, compensate and break down, allowing him to approach athletic presentations with a specificity and confidence that most manual therapists cannot offer.',
      'His work is particularly well suited to complex presentations: he does not shy away from difficulty, but engages with it directly, combining strong and capable manual skills with an investigative mindset that keeps him asking better questions long after the technique is mastered.',
    ],
    bioPT: 'Baseado em Salvador, Bahia, Julio é um terapeuta voltado ao universo esportivo, cuja expressão do Método CherieThai se destaca pela profundidade técnica, pela curiosidade incansável e por uma capacidade incomumente forte de cuidado terapêutico complexo e exigente.',
    bioPTPoints: [
      'Com um aprendizado fortemente cinestésico, ele insiste em sentir cada técnica no próprio corpo antes de reproduzi-la — compreendendo não apenas como um movimento é mecanicamente executado, mas como deve realmente ser sentido por quem o recebe, e que qualidade de execução cria o efeito mais significativo.',
      'Durante a formação, seu desejo constante de revisitar, questionar e aperfeiçoar cada técnica — retornando a movimentos que outros já haviam superado, perguntando por que funcionavam e o que aconteceria se fossem aplicados de forma diferente — revelou um comprometimento com a qualidade excepcional e genuinamente raro.',
      'Seu histórico esportivo lhe confere uma compreensão instintiva de como corpos ativos se sobrecarregam, compensam e entram em colapso, permitindo-lhe abordar demandas atléticas com uma especificidade e confiança que a maioria dos terapeutas manuais não consegue oferecer.',
      'Seu trabalho é particularmente adequado a demandas complexas: ele não foge da dificuldade, mas se engaja diretamente com ela, combinando habilidade manual forte e capaz com uma mentalidade investigativa que o mantém fazendo melhores perguntas muito depois de a técnica estar dominada.',
    ],
    youtubeId: '6tnB6lB66v8',
    coordinates: [-38.501, -12.971], // Salvador, Bahia
    instagram: 'afroterapeuta',
  },
  {
    id: 'bryzateles',
    name: 'Bryza Teles',
    city: 'Chapada dos Veadeiros',
    country: 'Brasil',
    descriptors: ['Magnetic', 'Fluid', 'Expansive'],
    descriptorsPT: ['Magnética', 'Fluida', 'Expansiva'],
    bio: 'Based in Chapada dos Veadeiros, Goiás, Bryza Teles brings a deeply established and expansive background in bodywork to the CherieThai Method — arriving not as a beginner, but as a practitioner, teacher and founder who has spent years developing her own voice in the field.',
    bioPoints: [
      'Founder of her own institute, teacher and longtime traveller, she has returned to Thailand numerous times throughout her professional journey — continually exploring different expressions of movement, touch and therapeutic practice, and integrating those experiences into a body of work that is genuinely hers.',
      'Within CherieThai, her work is characterised by fluidity, elegance and a naturally magnetic presence: she moves through the body with an ease that comes from years of practice, and that quality of command communicates itself to the people she works with before a word is spoken.',
      'What distinguishes Bryza is the quality of curiosity she brought to the training despite her extensive experience: she approached CherieThai with genuine humility and openness, willing to be questioned and changed by what she encountered rather than simply confirming what she already knew.',
      'The result is a practice that is expressive, intuitive and unmistakably her own — enriched and sharpened by the CherieThai Method, but never replaced by it.',
    ],
    bioPT: 'Baseada na Chapada dos Veadeiros, Goiás, Bryza Teles traz ao Método CherieThai uma trajetória profundamente consolidada e ampla nas terapias corporais — chegando não como iniciante, mas como terapeuta, professora e fundadora que passou anos desenvolvendo sua própria voz no campo.',
    bioPTPoints: [
      'Fundadora de seu próprio instituto, professora e viajante, esteve na Tailândia diversas vezes ao longo de sua trajetória profissional — explorando continuamente diferentes expressões do movimento, do toque e da prática terapêutica, e integrando essas experiências a um trabalho genuinamente seu.',
      'Dentro do CherieThai, seu trabalho se destaca pela fluidez, elegância e uma presença naturalmente magnética: ela percorre o corpo com uma facilidade que vem de anos de prática, e essa qualidade de domínio se comunica com as pessoas com quem trabalha antes mesmo que uma palavra seja dita.',
      'O que distingue Bryza é a qualidade de curiosidade que trouxe à formação apesar de sua vasta experiência: ela se aproximou do CherieThai com humildade e abertura genuínas, disposta a ser questionada e transformada pelo que encontrou, em vez de simplesmente confirmar o que já sabia.',
      'O resultado é uma prática expressiva, intuitiva e inconfundivelmente sua — enriquecida e aprimorada pelo Método CherieThai, mas nunca substituída por ele.',
    ],
    youtubeId: 'lh-Tvt9nfJU',
    coordinates: [-47.670, -14.062], // Chapada dos Veadeiros, Goiás
    instagram: 'bryzateles',
  },
  {
    id: 'isabelazaya',
    name: 'Isabelle Zaya',
    city: 'São Paulo',
    country: 'Brasil',
    descriptors: ['Subtle', 'Somatic', 'Restorative'],
    descriptorsPT: ['Sutil', 'Somática', 'Restauradora'],
    bio: 'Based in São Paulo, Isabelle Zaya came to the CherieThai Method from a background in somatic therapy, arriving with a clear intention: to expand her understanding of the body through manual therapy, and in particular to deepen her capacity to work meaningfully with pain.',
    bioPoints: [
      'Her naturally gentle and soft-spoken presence translates into an exceptionally subtle quality of touch — she approaches the body with patience, careful observation and a willingness to listen before she acts, reading what she finds rather than imposing a predetermined plan.',
      'Throughout the training, she expanded this innate softness into more substantial therapeutic work, developing the confidence and capacity to move between subtle somatic listening and deeper manual intervention when the body genuinely requires it.',
      'Her somatic background gives her a particular sensitivity to how the body holds experience, how patterns of tension and protection can be long-standing, and how care must sometimes be very patient before change becomes available.',
      'Her work brings together somatic awareness and manual therapy in a way that feels restorative, unhurried and deeply individual — an approach that honours both the person and the body\'s own intelligence in how it moves toward greater ease.',
    ],
    bioPT: 'Baseada em São Paulo, Isabelle Zaya chegou ao Método CherieThai com uma trajetória em terapia somática e uma intenção clara: ampliar sua compreensão do corpo por meio da terapia manual e, em particular, aprofundar sua capacidade de trabalhar de forma significativa com a dor.',
    bioPTPoints: [
      'Sua presença naturalmente gentil e tranquila se traduz em uma qualidade de toque extremamente sutil — ela se aproxima do corpo com paciência, observação cuidadosa e disposição para escutar antes de agir, lendo o que encontra em vez de impor um plano predeterminado.',
      'Ao longo da formação, expandiu essa suavidade inata para um trabalho terapêutico mais substancial, desenvolvendo a confiança e a capacidade de transitar entre a escuta somática sutil e intervenções manuais mais profundas quando o corpo genuinamente necessita.',
      'Sua trajetória somática lhe confere uma sensibilidade particular a como o corpo carrega experiências, como padrões de tensão e proteção podem ser duradouros e como o cuidado precisa às vezes ser muito paciente antes que a mudança se torne disponível.',
      'Seu trabalho une consciência somática e terapia manual de uma forma que parece restauradora, sem pressa e profundamente individual — uma abordagem que honra tanto a pessoa quanto a inteligência própria do corpo em seu movimento em direção a um maior bem-estar.',
    ],
    youtubeId: 'NfdlpH12ZKE',
    coordinates: [-46.633, -23.550], // São Paulo
    instagram: 'tudoaflordapele',
  },
  {
    id: 'melissa',
    name: 'Melissa Giovana',
    city: 'Goiânia',
    country: 'Brasil',
    descriptors: ['Ethereal', 'Restorative', 'Adaptive'],
    descriptorsPT: ['Etérea', 'Restauradora', 'Adaptável'],
    bio: 'Based in Goiânia, Goiás, Melissa brings an optimistic and deeply reassuring presence to her expression of the CherieThai Method — a quality that creates immediate ease for the people she works with, and that forms the foundation of genuinely effective therapeutic care.',
    bioPoints: [
      'Her work is particularly oriented toward pain: she has a natural gift for making people feel safe enough to allow the body to release what it has been holding, while simultaneously working with a therapeutic depth and directness that actually changes how the body feels and functions.',
      'Throughout her training, she demonstrated an impressive capacity to adapt technique to the specifics of her own body, finding ways to achieve the Method\'s intentions through movement that was genuinely hers rather than a copy of someone else\'s shape — transforming individual characteristics into strengths rather than limitations.',
      'Her approach is restorative and attentive in a way that goes deeper than symptom relief: she seeks to understand how the body has organised itself around discomfort, and to help it find a new way of holding itself — one with greater ease, function and balance.',
      'Optimistic by nature and technically capable in practice, Melissa combines a warmth that puts people immediately at ease with the clinical intelligence to actually use that ease as the starting point for meaningful change.',
    ],
    bioPT: 'Baseada em Goiânia, Goiás, Melissa traz uma presença otimista e profundamente acolhedora à sua expressão do Método CherieThai — uma qualidade que cria facilidade imediata para as pessoas com quem trabalha e que forma a base de um cuidado terapêutico genuinamente eficaz.',
    bioPTPoints: [
      'Seu trabalho é especialmente direcionado à dor: ela tem um dom natural para fazer as pessoas se sentirem seguras o suficiente para permitir que o corpo libere o que vem carregando, enquanto ao mesmo tempo trabalha com uma profundidade terapêutica e uma diretividade que realmente mudam como o corpo se sente e funciona.',
      'Durante a formação, demonstrou uma habilidade impressionante de adaptar a técnica às especificidades do próprio corpo, encontrando formas de alcançar as intenções do Método por meio de movimentos genuinamente seus — transformando características individuais em recursos, e não em limitações.',
      'Sua abordagem é restauradora e atenta de uma forma que vai além do alívio de sintomas: ela busca compreender como o corpo se organizou ao redor do desconforto e ajudá-lo a encontrar uma nova forma de se sustentar — com maior facilidade, função e equilíbrio.',
      'Otimista por natureza e tecnicamente capaz na prática, Melissa combina um calor humano que coloca as pessoas imediatamente à vontade com a inteligência clínica de realmente usar essa facilidade como ponto de partida para mudanças significativas.',
    ],
    youtubeId: 'f0XPy1qScuY',
    coordinates: [-49.253, -16.679], // Goiânia, Goiás
    instagram: '_melterapeuta',
  },
  {
    id: 'crislacerda',
    name: 'Cristiane Lacerda',
    city: 'Belo Horizonte',
    country: 'Brasil',
    descriptors: ['Systematic', 'Profound', 'Masterful'],
    descriptorsPT: ['Sistemática', 'Profunda', 'Magistral'],
    bio: 'Based in Belo Horizonte, Minas Gerais, Cristiane Lacerda is a physiotherapist, movement practitioner and educator whose expression of the CherieThai Method is grounded in an exceptionally deep understanding of the body — one built across years of clinical work, teaching and dedicated movement practice.',
    bioPoints: [
      'Her background in body awareness and movement culture gives her a highly systematic way of observing function: she reads how different regions of the body relate to one another, notices the patterns and compensations that underlie pain and restriction, and translates that understanding into manual work of genuine sophistication.',
      'Her treatments combine confident technique, movement intelligence and mature clinical reasoning — she approaches complex bodies not with protocols, but with a quality of enquiry that asks what this particular person actually needs and why, then works accordingly.',
      'As both a practitioner and a teacher, she brings an already well-established body of knowledge into CherieThai, and the Method has in turn sharpened and expanded her clinical repertoire in ways she continues to integrate into her work with students and clients alike.',
      'To receive a session from Cristiane Lacerda is to experience care from someone who genuinely understands the body in depth: technically accomplished, clinically intelligent and always guided by a standard of precision that reflects years of real professional commitment.',
    ],
    bioPT: 'Baseada em Belo Horizonte, Minas Gerais, Cristiane Lacerda é fisioterapeuta, praticante de movimento e educadora, cuja expressão do Método CherieThai está fundamentada em uma compreensão excepcionalmente profunda do corpo — construída ao longo de anos de trabalho clínico, ensino e prática dedicada de movimento.',
    bioPTPoints: [
      'Sua trajetória em consciência corporal e cultura do movimento lhe confere uma forma altamente sistemática de observar a função: ela lê como diferentes regiões do corpo se relacionam, percebe os padrões e compensações subjacentes à dor e à restrição, e traduz esse entendimento em um trabalho manual de genuína sofisticação.',
      'Seus atendimentos combinam técnica segura, inteligência de movimento e raciocínio clínico maduro — ela aborda corpos complexos não com protocolos, mas com uma qualidade de investigação que pergunta o que essa pessoa específica realmente precisa e por quê, e então trabalha em conformidade.',
      'Como terapeuta e professora, ela traz ao CherieThai um corpo de conhecimento já bem consolidado, e o Método, por sua vez, aprimorou e expandiu seu repertório clínico de formas que ela continua integrando ao seu trabalho com estudantes e clientes.',
      'Receber uma sessão de Cristiane Lacerda é experienciar o cuidado de alguém que genuinamente compreende o corpo em profundidade: tecnicamente realizada, clinicamente inteligente e sempre guiada por um padrão de precisão que reflete anos de comprometimento profissional real.',
    ],
    youtubeId: 'CWeEfV7HTLE',
    coordinates: [-43.938, -19.921], // Belo Horizonte
    instagram: 'crislacerdac',
  },
  {
    id: 'lilianmiranda',
    name: 'Lilian Miranda',
    city: 'Riviera de São Lourenço',
    country: 'Brasil',
    descriptors: ['Contemplative', 'Receptive', 'Explorative'],
    descriptorsPT: ['Contemplativa', 'Receptiva', 'Exploradora'],
    bio: 'Based in Riviera de São Lourenço, São Paulo, Lilian brings a contemplative presence and a profound openness to learning into the CherieThai Method — someone whose life of travel and enquiry has given her a genuinely broad and respectful relationship with different traditions of touch and care.',
    bioPoints: [
      'Her time in India and Thailand has brought her into contact with diverse approaches to the body, to healing and to the nature of presence — experiences she holds not as fixed answers, but as ongoing questions that continue to shape how she listens, how she touches and how she thinks about care.',
      'Throughout her training, she stood out for the quality of attention she brought to each teaching: not merely listening to absorb content, but genuinely reflecting on what she heard, returning with thoughtful questions and sitting with ideas until they had settled into something she actually understood.',
      'She sought to understand not only the execution of each technique but the thinking behind it — the clinical reasoning, the intention, the relationship between one movement and the next — which gave her practice a quality of depth that goes beyond surface competence.',
      'Her work reflects a sensitive and receptive therapist who is not in a hurry to arrive anywhere: someone who trusts the process of exploration, values what she does not yet know and continues to discover new dimensions in both the body and the nature of care itself.',
    ],
    bioPT: 'Baseada na Riviera de São Lourenço, São Paulo, Lilian traz ao Método CherieThai uma presença contemplativa e uma abertura profunda ao aprendizado — alguém cuja vida de viagens e investigação lhe conferiu uma relação genuinamente ampla e respeitosa com diferentes tradições de toque e cuidado.',
    bioPTPoints: [
      'Seu tempo na Índia e na Tailândia a colocou em contato com abordagens diversas ao corpo, à cura e à natureza da presença — experiências que ela não carrega como respostas fixas, mas como questões abertas que continuam moldando como ela escuta, como toca e como pensa sobre o cuidado.',
      'Durante a formação, destacou-se pela qualidade de atenção que trouxe a cada ensinamento: não apenas ouvindo para absorver conteúdo, mas genuinamente refletindo sobre o que escutava, retornando com perguntas cuidadosas e permanecendo com as ideias até que se estabelecessem em algo que realmente compreendesse.',
      'Ela buscou entender não apenas a execução de cada técnica, mas o pensamento por trás dela — o raciocínio clínico, a intenção, a relação entre um movimento e o próximo — o que conferiu à sua prática uma qualidade de profundidade que vai além da competência superficial.',
      'Seu trabalho reflete uma terapeuta sensível e receptiva que não tem pressa de chegar a lugar nenhum: alguém que confia no processo de exploração, valoriza o que ainda não sabe e continua descobrindo novas dimensões tanto no corpo quanto na natureza do próprio cuidado.',
    ],
    youtubeId: 'U6oyjr4gXgc',
    coordinates: [-46.138, -23.854], // Bertioga / Riviera de São Lourenço, SP
    instagram: 'lilian.mirandatc',
  },
  {
    id: 'luciano',
    name: 'Luciano Jorge',
    city: 'Uberlândia',
    country: 'Brasil',
    descriptors: ['Adaptive', 'Grounded', 'Transformative'],
    descriptorsPT: ['Adaptável', 'Centrado', 'Transformador'],
    bio: 'Based in Uberlândia, Minas Gerais, Luciano Jorge came to the CherieThai Method as a complete beginner in manual therapy — bringing with him a background in yoga, a rich previous career as a successful vegan chef and entrepreneur, and the particular kind of openness that comes from someone who has already reinvented himself once.',
    bioPoints: [
      'His willingness to begin again from nothing revealed a natural and genuine adaptability to bodywork: he approached the body with the same quality of care and presence he had brought to the kitchen — attentive to texture, to timing, to the subtle signals that something is working or needs adjustment.',
      'Throughout his training, he developed a calm and deeply attentive approach to manual therapy, learning not simply to reproduce movement but to understand the person he was working with — to adapt technique to the individual rather than the other way around.',
      'His yoga background gave him a quality of body awareness and spatial intelligence that translated directly into the physical demands of the CherieThai Method, allowing him to develop movement precision and sensitivity with a naturalness that surprised even him.',
      'Luciano\'s journey is a reflection of curiosity, transformation and the particular courage it takes to enter a completely unfamiliar field with nothing but honesty, commitment and a genuine desire to be of use to other people.',
    ],
    bioPT: 'Baseado em Uberlândia, Minas Gerais, Luciano Jorge chegou ao Método CherieThai como iniciante na terapia manual — trazendo consigo uma trajetória no yoga, uma rica carreira anterior como chef vegano e empreendedor de sucesso, e o tipo particular de abertura que vem de alguém que já se reinventou uma vez.',
    bioPTPoints: [
      'Sua disposição para começar do zero revelou uma adaptabilidade natural e genuína ao trabalho corporal: ele se aproximou do corpo com a mesma qualidade de atenção e presença que havia trazido à cozinha — atento à textura, ao tempo, aos sinais sutis de que algo está funcionando ou precisa de ajuste.',
      'Ao longo da formação, desenvolveu uma abordagem calma e profundamente atenta à terapia manual, aprendendo não apenas a reproduzir movimentos, mas a compreender a pessoa com quem estava trabalhando — a adaptar a técnica ao indivíduo, e não o contrário.',
      'Sua trajetória no yoga lhe conferiu uma qualidade de consciência corporal e inteligência espacial que se traduziu diretamente nas exigências físicas do Método CherieThai, permitindo-lhe desenvolver precisão de movimento e sensibilidade com uma naturalidade que até ele mesmo se surpreendeu.',
      'A trajetória de Luciano é um reflexo de curiosidade, transformação e da coragem particular que é necessária para entrar em um campo completamente desconhecido com nada além de honestidade, compromisso e um desejo genuíno de ser útil a outras pessoas.',
    ],
    youtubeId: 'UqV19C_lvGs',
    coordinates: [-48.277, -18.918], // Uberlândia, Minas Gerais
    instagram: 'lucianorespira',
  },
  {
    id: 'amandaagni',
    name: 'Amanda Agni',
    city: 'Juquehy',
    country: 'Brasil',
    descriptors: ['Grounded', 'Graceful', 'Powerful'],
    descriptorsPT: ['Ancorada', 'Graciosa', 'Potente'],
    bio: 'Based in Juquehy, on the northern coast of São Paulo, Amanda brings a deeply grounded and instinctive quality to her expression of the CherieThai Method — a practitioner whose physical confidence, natural strength and genuine love of movement are present in every technique she offers.',
    bioPoints: [
      'An experienced body therapist with a strong and longstanding connection to movement practice, she combines graceful stretching and elegant Thai techniques with a quality of manual work that is remarkably firm and effective — physical without ever feeling aggressive, powerful without losing sensitivity.',
      'Her treatments are particularly well suited to active and athletic bodies: she understands how athletes and physically active people load their bodies, where restriction accumulates and what depth of work is required to actually make a difference — and her natural strength allows her to deliver that depth while maintaining the fluidity and control that define good Thai bodywork.',
      'Throughout her training, she demonstrated a striking naturalness in the CherieThai approach: the movements seemed to arrive easily, expressing themselves with a confidence and physical intelligence that felt genuinely embodied rather than learned by rote.',
      'Her vibrant character, her connection to the body and her instinct for care all remain unmistakably present in everything she does — making her sessions feel not only effective, but fully alive.',
    ],
    bioPT: 'Baseada em Juquehy, no litoral norte de São Paulo, Amanda traz uma qualidade profundamente ancorada e instintiva à sua expressão do Método CherieThai — uma terapeuta cuja confiança física, força natural e amor genuíno pelo movimento estão presentes em cada técnica que oferece.',
    bioPTPoints: [
      'Terapeuta corporal experiente com uma conexão forte e duradoura com a prática de movimento, ela combina alongamentos graciosos e técnicas tailandesas elegantes com uma qualidade de trabalho manual notavelmente firme e eficaz — física sem nunca parecer agressiva, potente sem perder sensibilidade.',
      'Seus atendimentos são particularmente adequados a corpos ativos e atléticos: ela entende como atletas e pessoas fisicamente ativas sobrecarregam o corpo, onde as restrições se acumulam e que profundidade de trabalho é realmente necessária para fazer diferença — e sua força natural lhe permite entregar essa profundidade mantendo a fluidez e o controle que definem um bom trabalho tailandês.',
      'Ao longo da formação, demonstrou uma naturalidade marcante na abordagem CherieThai: os movimentos pareciam chegar com facilidade, expressando-se com uma confiança e inteligência física que pareciam genuinamente incorporadas, e não aprendidas mecanicamente.',
      'Seu caráter vibrante, sua conexão com o corpo e seu instinto pelo cuidado permanecem inconfundivelmente presentes em tudo o que faz — tornando suas sessões não apenas eficazes, mas completamente vivas.',
    ],
    youtubeId: '5Pb-qgRcj0I',
    coordinates: [-45.155, -23.793], // Juquehy, Litoral Norte, São Paulo
    instagram: 'terapeuta_agni',
  },
  {
    id: 'brunomarinho',
    name: 'Bruno Marinho',
    city: 'Brasília',
    country: 'Brasil',
    descriptors: ['Devoted', 'Intuitive', 'Eloquent'],
    descriptorsPT: ['Devotado', 'Intuitivo', 'Eloquente'],
    bio: 'Based in Brasília, Bruno Marinho brings an intuitive and deeply embodied understanding of movement to the CherieThai approach — a quality that is immediately felt in the way he works, as though the technique is not being executed but genuinely spoken through the body.',
    bioPoints: [
      'As a movement artist, he has an exceptional ability to translate technique through his entire body: his sessions feel fluid, eloquent and naturally connected, one movement arising from the last without interruption, guided by an instinctive understanding of how the body wants to be moved.',
      'His dedication throughout the training was genuine and consistent — he approached each detail with a real desire to understand, not simply to perform, and that quality of intellectual honesty gave his development a depth that went beyond what many practitioners achieve in the same time.',
      'Particularly drawn to pain and to the movement patterns that contribute to it, Bruno brings sensitivity, body awareness and a strong physical instinct to his clinical work, adapting what he does in response to what he finds rather than applying technique according to a fixed plan.',
      'His natural ability, humility and devotion to caring for others reveal a practitioner who is already doing meaningful work and who has an exceptionally promising professional path ahead — someone the CherieThai Institute is proud to have trained.',
    ],
    bioPT: 'Baseado em Brasília, Bruno Marinho traz à abordagem CherieThai uma compreensão intuitiva e profundamente corporal do movimento — uma qualidade que é imediatamente sentida em seu modo de trabalhar, como se a técnica não estivesse sendo executada, mas genuinamente falada através do corpo.',
    bioPTPoints: [
      'Como artista do movimento, ele possui uma capacidade excepcional de traduzir a técnica por todo o corpo: suas sessões parecem fluidas, eloquentes e naturalmente conectadas, um movimento surgindo do anterior sem interrupção, guiado por uma compreensão instintiva de como o corpo quer ser movido.',
      'Sua dedicação ao longo da formação foi genuína e consistente — ele abordou cada detalhe com um desejo real de compreender, e não apenas de realizar, e essa qualidade de honestidade intelectual conferiu ao seu desenvolvimento uma profundidade que vai além do que muitos terapeutas alcançam no mesmo período.',
      'Especialmente atraído pela dor e pelos padrões de movimento que contribuem para ela, Bruno traz sensibilidade, consciência corporal e um forte instinto físico ao seu trabalho clínico, adaptando o que faz em resposta ao que encontra em vez de aplicar técnica de acordo com um plano fixo.',
      'Sua habilidade natural, humildade e profunda dedicação ao cuidado revelam um terapeuta que já realiza um trabalho significativo e tem um caminho profissional extremamente promissor pela frente — alguém de quem o Instituto CherieThai tem orgulho de ter formado.',
    ],
    youtubeId: 'Xu5V8q0d-XU',
    coordinates: [-47.929, -15.780], // Brasília, DF
    instagram: 'marinhomassoterapia',
  },
  {
    id: 'agustina',
    name: 'Agustina',
    city: 'Buenos Aires',
    country: 'Argentina',
    descriptors: ['Attuned', 'Compassionate', 'Conscientious'],
    descriptorsPT: ['Sintonizada', 'Compassiva', 'Conscienciosa'],
    bio: 'Based in Buenos Aires, Argentina, Agustina is a family physician who has brought her medical understanding of the human body into the CherieThai approach with exceptional sensitivity, compassion and a quality of care that is shaped by years of clinical practice with real people in real situations.',
    bioPoints: [
      'Her medical background gives her a structural and physiological depth of knowledge that very few manual therapists possess — and rather than making her approach more clinical or detached, it has made it more human: she uses that knowledge to understand what she is feeling beneath her hands, and to make better decisions about how to respond to it.',
      'Her clinical background is complemented by a deeply attuned way of listening and observing: she is a physician who has learned, through years of general practice, that caring for a person means attending to far more than the presenting complaint — and she brings that quality of whole-person awareness into every session.',
      'Throughout the training, she approached every movement with curiosity, intention and a remarkable sense of responsibility — reflecting a genuine desire not only to understand the body, but to be truly worthy of the trust that people place in a practitioner.',
      'Her journey into manual therapy has expanded and enriched the way she cares for others, bringing together medicine, therapeutic touch and a profoundly conscientious attention to human wellbeing that reflects the best of both disciplines.',
    ],
    bioPT: 'Baseada em Buenos Aires, Argentina, Agustina é médica de família que trouxe sua compreensão médica do corpo humano para a abordagem CherieThai com sensibilidade, compaixão e uma qualidade de cuidado excepcionais, moldados por anos de prática clínica com pessoas reais em situações reais.',
    bioPTPoints: [
      'Sua formação médica lhe confere uma profundidade de conhecimento estrutural e fisiológico que poucos terapeutas manuais possuem — e em vez de tornar sua abordagem mais clínica ou distante, isso a tornou mais humana: ela usa esse conhecimento para entender o que sente sob as mãos e para tomar melhores decisões sobre como responder.',
      'Sua formação clínica é complementada por uma forma profundamente sintonizada de escutar e observar: ela é uma médica que aprendeu, ao longo de anos de clínica geral, que cuidar de uma pessoa significa atender a muito mais do que a queixa apresentada — e traz essa qualidade de consciência da pessoa como um todo para cada sessão.',
      'Durante a formação, aproximou-se de cada movimento com curiosidade, intenção e um marcante senso de responsabilidade — refletindo um desejo genuíno não apenas de compreender o corpo, mas de ser verdadeiramente digna da confiança que as pessoas depositam em um terapeuta.',
      'Sua entrada na terapia manual ampliou e enriqueceu sua forma de cuidar dos outros, reunindo medicina, toque terapêutico e uma atenção profundamente conscienciosa ao bem-estar humano que reflete o melhor de ambas as disciplinas.',
    ],
    youtubeId: 'XVpmseD8H9o',
    coordinates: [-58.381, -34.603], // Buenos Aires, Argentina
    instagram: 'nanai__masoterapia',
  },
  {
    id: 'anaclara',
    name: 'Ana Clara',
    city: 'Mairiporã',
    country: 'Brasil',
    descriptors: ['Instinctive', 'Alchemical', 'Catalytic'],
    descriptorsPT: ['Instintiva', 'Alquímica', 'Catalisadora'],
    bio: 'Based in Mairiporã, São Paulo, Ana Clara brings a rich and layered background in somatic practice, feminine health and self-knowledge into her expression of the CherieThai approach — arriving not as someone beginning a new direction, but as someone expanding an already deeply considered body of work.',
    bioPoints: [
      'Her existing practice explores the relationship between body, vital energy, creativity and self-knowledge, guiding people through processes of deeper connection with themselves — work that is already integrative, already somatic and already fundamentally oriented toward the body as the site of transformation.',
      'Her entry into manual therapy represents a natural and intentional expansion of that work: a desire to meet the body not only through awareness and exploration, but through direct physical contact — something tangible, grounded and immediately experienced through the hands and the tissue.',
      'Although relatively new to hands-on therapy, she demonstrated a remarkable instinct for the deeper intention behind each technique, absorbing not just the movement but the reasoning within it — and quickly understanding how to translate what she was learning into her own field of practice.',
      'Her approach is distinctly alchemical: she brings different forms of knowledge into contact with one another and allows something new to arise from that encounter, using touch as a catalyst for greater awareness, possibility and change in the people she works with.',
    ],
    bioPT: 'Baseada em Mairiporã, São Paulo, Ana Clara traz uma trajetória rica e multidimensional em práticas somáticas, saúde feminina e autoconhecimento para sua expressão da abordagem CherieThai — chegando não como alguém iniciando uma nova direção, mas como alguém expandindo um trabalho já profundamente refletido.',
    bioPTPoints: [
      'Sua prática existente explora a relação entre corpo, energia vital, criatividade e autoconhecimento, conduzindo pessoas por processos de conexão mais profunda consigo mesmas — um trabalho que já é integrativo, já é somático e já está fundamentalmente orientado para o corpo como lugar de transformação.',
      'Sua entrada na terapia manual representa uma expansão natural e intencional desse trabalho: o desejo de encontrar o corpo não apenas por meio da consciência e da exploração, mas pelo contato físico direto — algo tangível, ancorado e diretamente experienciado pelas mãos e pelo tecido.',
      'Embora relativamente nova no trabalho manual, ela demonstrou um instinto marcante para a intenção mais profunda por trás de cada técnica, absorvendo não apenas o movimento, mas o raciocínio que o habita — e compreendendo rapidamente como traduzir o que aprendia para seu próprio campo de atuação.',
      'Sua abordagem é essencialmente alquímica: ela coloca diferentes formas de conhecimento em contato umas com as outras e permite que algo novo surja desse encontro, utilizando o toque como catalisador para uma maior consciência, possibilidade e mudança nas pessoas com quem trabalha.',
    ],
    youtubeId: 'YXMWcdVbc2M',
    coordinates: [-46.585, -23.318], // Mairiporã, São Paulo
    instagram: 'anaclaragarcia.tsh',
  },
  {
    id: 'laisanascimento',
    name: 'Laisa Nascimento',
    city: 'Uberlândia',
    country: 'Brasil',
    descriptors: ['Meticulous', 'Commanding', 'Ingenious'],
    descriptorsPT: ['Meticulosa', 'Dinâmica', 'Engenhosa'],
    bio: 'Based in Uberlândia, Minas Gerais, Laisa Nascimento brings an advanced and well-established background in body therapy to her expression of the CherieThai approach — arriving as the founder of Spa Emório, her own body therapy clinic, with a clinical practice already built on seriousness, depth and professional commitment.',
    bioPoints: [
      'Her work is meticulous, firm and deeply therapeutic: she has a particular ability to enter into the finer details of tissue, reading what she finds with unusual accuracy and understanding what each body actually requires rather than what a standard protocol would suggest.',
      'She takes exactly the time necessary to fully comprehend a movement before integrating it — but once it has settled, her execution becomes remarkably assured, fluid and effective, as though the technique has always belonged to her.',
      'Throughout the training, she demonstrated the confidence and intelligence to develop deliberate variations of techniques based on the principles she had learned — not improvising arbitrarily, but working from a real understanding of why each technique does what it does and how that understanding can be extended.',
      'Elegant in movement and genuinely potent in touch, she approaches pain and complex presentations with depth, intention and a clarity of purpose that comes from knowing exactly what she is doing and why — the mark of a practitioner whose training has become truly her own.',
    ],
    bioPT: 'Baseada em Uberlândia, Minas Gerais, Laisa Nascimento traz uma trajetória avançada e já consolidada em terapia corporal para sua expressão da abordagem CherieThai — chegando como fundadora do Spa Emório, sua própria clínica de terapia corporal, com uma prática clínica já construída sobre seriedade, profundidade e comprometimento profissional.',
    bioPTPoints: [
      'Seu trabalho é meticuloso, firme e profundamente terapêutico: ela tem uma capacidade particular de entrar nos detalhes dos tecidos, lendo o que encontra com precisão incomum e compreendendo o que cada corpo realmente necessita em vez do que um protocolo padrão sugeriria.',
      'Ela dedica exatamente o tempo necessário para compreender plenamente um movimento antes de integrá-lo — mas, uma vez assentado, sua execução se torna notavelmente segura, fluida e eficaz, como se a técnica sempre lhe tivesse pertencido.',
      'Durante a formação, demonstrou confiança e inteligência para desenvolver variações intencionais de técnicas a partir dos princípios que havia aprendido — não improvisando arbitrariamente, mas trabalhando a partir de uma compreensão real de por que cada técnica faz o que faz e como esse entendimento pode ser ampliado.',
      'Elegante no movimento e genuinamente potente no toque, ela aborda a dor e demandas complexas com profundidade, intenção e uma clareza de propósito que vem de saber exatamente o que está fazendo e por quê — a marca de uma terapeuta cuja formação se tornou verdadeiramente sua.',
    ],
    youtubeId: 'BF_AYQQ85wc',
    coordinates: [-48.277, -18.918], // Uberlândia, Minas Gerais
    instagram: 'laisa_massoterapeuta_',
  },
  {
    id: 'keeran',
    name: 'Keeran',
    city: 'Preston',
    country: 'United Kingdom',
    descriptors: ['Curious', 'Adaptive', 'Exploratory'],
    descriptorsPT: ['Curioso', 'Adaptável', 'Exploratório'],
    bio: 'Based in Preston, UK, Keeran\'s work is shaped by an ongoing curiosity for movement, bodywork and the different ways the body responds to touch and positioning. Working frequently with sportspeople and active bodies, he has developed a particular affinity for stretch-based work, often favouring longer, sustained holds that allow the body time to adapt rather than moving quickly from one technique to the next.',
    bioPoints: [
      'His sessions play with changes in pace and rhythm — at times slower and more sustained, at others more dynamic — creating a treatment that feels varied and responsive rather than following a fixed sequence.',
      'A committed student of bodywork who continually seeks out new training, Keeran brings elements from his wider studies into his practice while continuing to refine his own individual style.',
      'His affinity for working with sporting and active bodies gives his sessions a particular quality of physical intelligence — an understanding of how bodies trained for performance hold tension differently, and what they require in order to genuinely release it.',
      'What defines his approach is not any single technique but a willingness to follow the body rather than lead it — adjusting pace, depth and direction in response to what he finds, and allowing the session to develop according to what is actually needed.',
    ],
    bioPT: 'Baseado em Preston, Reino Unido, o trabalho de Keeran é moldado por uma curiosidade contínua pelo movimento, pelo trabalho corporal e pelas diferentes formas como o corpo responde ao toque e ao posicionamento. Trabalhando frequentemente com esportistas e corpos ativos, desenvolveu uma afinidade particular pelo trabalho de alongamento, favorecendo sustentações mais longas que permitem ao corpo tempo para se adaptar, em vez de avançar rapidamente de uma técnica para a próxima.',
    bioPTPoints: [
      'Suas sessões brincam com mudanças de ritmo e cadência — às vezes mais lentas e sustentadas, outras mais dinâmicas — criando um atendimento que parece variado e responsivo, em vez de seguir uma sequência fixa.',
      'Um aluno dedicado do trabalho corporal que busca continuamente novas formações, Keeran integra elementos de seus estudos mais amplos à sua prática enquanto continua a aprimorar seu estilo individual.',
      'Sua afinidade por trabalhar com corpos esportivos e ativos confere às suas sessões uma qualidade particular de inteligência física — uma compreensão de como corpos treinados para performance sustentam a tensão de forma diferente e do que precisam para genuinamente liberá-la.',
      'O que define sua abordagem não é nenhuma técnica isolada, mas uma disposição de seguir o corpo em vez de guiá-lo — ajustando ritmo, profundidade e direção em resposta ao que encontra, e permitindo que a sessão se desenvolva de acordo com o que é realmente necessário.',
    ],
    youtubeId: '',
    coordinates: [-2.706, 53.763], // Preston, UK
    instagram: 'keeran',
  },
  {
    id: 'dorina',
    name: 'Dorina Sucz',
    city: 'London',
    country: 'United Kingdom',
    descriptors: ['Expressive', 'Powerful', 'Intuitive'],
    descriptorsPT: ['Expressiva', 'Poderosa', 'Intuitiva'],
    bio: 'Dorina brings an unusual combination of softness and strength to her work. Exceptionally attentive and receptive as a student, she adapts quickly, absorbs detail with precision and has a very clear sense of what she wants to communicate through movement and touch.',
    bioPoints: [
      'Her bodywork is firm and powerful, but never rigid. There is an expressive quality to the way she moves — confident, illustrative and full of intention — allowing techniques to feel both strong and fluid.',
      'She has a natural ability to translate what she learns into something that already feels distinctly her own.',
      'Teaching Dorina was particularly rewarding. There is something in the conviction of her movement, her adaptability and the way she approaches the body that feels very familiar to me — qualities I was especially excited to help her develop further.',
    ],
    bioPT: 'Dorina traz uma combinação incomum de suavidade e força ao seu trabalho. Excepcionalmente atenta e receptiva como aluna, adapta-se rapidamente, absorve detalhes com precisão e tem um senso muito claro do que quer comunicar através do movimento e do toque.',
    bioPTPoints: [
      'Seu trabalho corporal é firme e poderoso, mas nunca rígido. Há uma qualidade expressiva na maneira como ela se move — confiante, ilustrativa e cheia de intenção — permitindo que as técnicas se sintam ao mesmo tempo fortes e fluidas.',
      'Ela tem uma habilidade natural de traduzir o que aprende em algo que já parece distintamente seu.',
      'Ensinar Dorina foi particularmente gratificante. Há algo na convicção do seu movimento, na sua adaptabilidade e na forma como ela se aproxima do corpo que me parece muito familiar — qualidades que fiquei especialmente entusiasmada em ajudá-la a desenvolver ainda mais.',
    ],
    youtubeId: '',
    coordinates: [-0.127, 51.507], // London
    instagram: 'dorci',
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
