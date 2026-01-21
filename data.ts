import { ReviewItem, Category } from './types';

// Images extracted directly from the provided HTML to ensure exact match
export const IMAGES = {
  HERO_VACUUM: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs2VVuBdwUAlhw8MMe1ITpbzz2JyLQCbMP1JeGY_RXzaHwCN3WCKn8xxaJx-SXqaPYdWZQtymn6HAK0h1MJ-cvOlMGS6LWEq7tnCTkiR_dp04mIcpFs41hlxhASeWgnr02zy8dwb-oWTizTRgSyq1F4N2ZcexX_ZXVT4ZpaTdKqGP6HEkVs1X52EB7bkJvh7zZVy7No-ia3vAqMw-WcAM5ReTUCdLcSbGTLCNoBb-XA4VG9SfJ7__cL838P1Q8A1HQrPaqhS-1e80',
  AIR_FRYER: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwiJem71sCu6h_47HJ9ki1EpF5h-8lJMeMH7SEaCEysWBoHNx2H0vOiLlO8cI12O9xqlv-Uvh6-BzCzkfZQJS4d8iYD3FHKsKMAv28HHTYHAhezJgDumpTKKo8_cGBRLinPNmLkb2OcNny-AQSg6aDjReoAUVZF9fEW7kRsH1_H7y8jFLDEGMQSH_Sobk9rD3_kytNOJO6Ok9jYOAvE6fLTj8pQBKVgzOPAJNp-QvYH4S946VN3ykuX1Sxw1QXBgrpvgsskeBh0ow',
  HEADPHONES: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnO8D0ZQPMaYiiV1UXSzBEJKKSCh1zxWwxvr5gQeF6rvrjj5PauxeptmW3H41m8JBWVFlD_kjwVTbSEa8p1M4sq-EfR6aANxJEh5iRZUXyFFGwM7tblcDihVoQQT5APpuadgXcdJNCZrZcPxvUfJ7LgLqTTfu78zO_EtN15R1Nu98dojSJEEWESLwUdYx9UXwBOCtlh0rZ25b-7iQNqMJzhSPeDf2wApdMdr4DIvQqm5g-OXI2P7NwrDb-u5FRu6ZmQMZsDNj06q8',
  OFFICE_CHAIR: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWYMM2LDxkaD2c1Hk_XPlWc1G-I_ajSuLUraY7ssrYvOqwtLUNRKn2vzw2Pa6eE69vNBsDfMHBX77eizyLT6pprwFAsuK7rhS91FbGdV7_UCshGWWDons3L0_aWN69Kugp7UPgyC12t5rL4IjOHe_yRY6HejFTzMP7lja7tYCJjIyYUUUQYEfxICQroFYTaaJwhsUhtRzeZrihHtVll8dRFOBTbna0rNTRtp-g5xQuqpL9QmX108Gpjkm14Uh8uzs5aaS54KP84RI',
  LUGGAGE: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpIbzBX4sB2bK9I__mpe1Rubaz2jH7LaFwxMNycVSvf8-DVwyjV7Q2Qm7vA63AfxUo3AGmVovmWVSUKx1U-JwwSwMbNA85jL3kZiM_Ze8A4TUqwXffsOwkYk9V4FNk5wYg9hLalzvgXVILdAx1tR8ThuOL0ncK__02iGH7Vf9846IR32d2SRPbHZFyX9I0ZjPeO6bNZTp3NNiNlOo7pDDpa2nqd12e6VEtggUBFxwEP0m4ZEx0Ol673xiMs6wZf4WR93oNKLB6N-0',
  ESPRESSO: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6YijBr-HpSSmEvmJQia356ipwYHXV5iODoh2rjr4zebt7NLQUnyg0wWv4Ms0wm1SOoetTNatM_VU2brf_tEbWV3o89hMLVIVOIUofzqmJp1GRhL9x65YeLEbjyv1iPAkbw4h8funFJNAgHTUzf_71pi0dfna5kc-9VyTzirmfVRDp0AZAsEWK1beSpmBTiRu_QvNPtQHBkx5-CC81VH2lRnLbGbWRia8mU3bHP6Gn3ahVWulvd0L3R5BJ_zpKqCYQ5YF_O5XqWdw',
  SMARTWATCH: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHJNYGfV6N-Rpd2hXzTA_dpDnyVxm-DVl8ceTMO5SFbrPAG4EwVBBwZbMJumNtB-eTd3YTco1bJ_XkkyjzsZK4Ifr54jh1eSFUradFcIaxpIr0arbGV1iNvShxqVEIBzeCD2gGe4wpGX3PU4bT-rlpxIMYjzZ0B8sGe_39b5M5Ds9ogxMayuQUVARn5sTWe__hlVGEaf4Fqiuwa_tDeC-2BsDHsYyagzaOt5sso4c0h96G4Ur-9I7j5_0-ci7QbuUpnJA5Ti4pZNM',
  ROBOROCK_DETAIL: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx3Isv8Jkt_R9ZyACbdEwp9qVBb_LqR4gNenI-JO3ndyyW20-FD2ufTt0LYxqnNxryq7d266k2I21oQtjoEumyZvfzDcPjU0DI1J2Zt_9WBNNId3SLACDiLnDb9e5GzCBGxr6juJG5e-2wxsl0YijAebCtlCmmhVVXz8d913-e3iHpWiIJBsnVeN-FfWw012dmCks5YuvIFlJTsfx46KZPP4vMgjOQtPM604gVJjWNb0yHruTIR2fQozvMtcZrnfFiSdcid3bLZ2Q',
  EUFY_DETAIL: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtQnJENs18W6zWvf7yXNUjsgcWqXQQreRPnlNPfiM26Ruj5klO5NKj_pIqq4KbPXeK48affH2zp_2A77vHoth3LaQLEYnl24kB1PB5uqZa74J7Fsji1zuSCt9ptoWIqXvRLoudCkzBYrr15VeNbj1_WxOCFDG13k3yEtehxN2Ml8UoXNWkYQBs3Y-SOCI7K2iZSkOACAwIOZcgmV0kZcy6mpu0wFCopG6CE5V9WGEc5g5k-gWQbYEhZntkCuIZVGLEmf7URgojdY8',
  ROOMBA_DETAIL: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAFnTqsq1rEYqhD52zPa1Ka7sIzevRI54WYGdhyDfgDkRH4XAuIRKoG4D0fny1IZlYTbQzhbExNWRREnx6-ggn1PuJju983Z_ynNjmhFlP0inJvUT3R-WQz4EjaNYSJe8hlMKvikTZtp3CYgrMB71UNAn8xFmj6e6nnx85sa4vs_NyvV0Dr0xKWL91wgK7wOxKnC6fwNMxKucKTm8ZpKOzX8rUU1zPOTvjjv9zzf2HivEwORrdSn-Tzxoi5gw9UlbvVVqMu01G9U4',
  VITAMIX: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRKtNj340sv0tmgVp06XhxvsKNGK0atGnOyPuo5YuHuYcBBBfYYENRebncc_EXvcK5sFTGmVvyZJrhiobTISZRDl9rnQg7ScEB8zlGHFWL-3FSuVLKxFQ6Betg7QLZOcj_2eowQf0hCF2pLKv3DdBSksgLlkB29S6zGKgozesZTYwJNRRrzitTJc_AkpNaM79x-ZwMfXxF2WtNRC6gNfZb_PRzYjSWD-54Hx6bWghLWUhdtIoYoiuwqlvGOlhLvd4U48UY9Lkc-ls',
  USER_1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnMQQroQq74f61YY_Nc7NdjyBv8CaOOY7I3Li1F4euV4DNWtci-2CAKPBn5qvMtQfXg4L4AZEyXgtMojQzfGzOzSZ_x2OSEYByxdKY3RJeGr8XNbEgoDeoOOjroA02EBsarSrz6EO5lKyxhVbjD6CEu52uyKJxOf45KAI013dCC03F4Ma0ZrdWAsV10SleLXm3dFLDGOgNcw-AY5ZII52YQREeCht9YzKjo2Lhdo0Q7AVzdf3wd6xKJwQPN9S3wMafyEfALENhVAg',
  USER_2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYlBIyewbV8dbvqjhkxXiIsdepespt4gtWytje6atU9_yi0zMdClyFLuKzOABbLZfGax2DHwkZ-l84xfXyRGfWBdLLcT7cji3phw8G2E1REG7KXeZuHriiGy0qKJyafmpA2uQLMvg_R4UuTfhZHMkg7UjrEzNfGq8H-UmiCmvv5YNis9YgZCqxbl_31yxWHccG1nVWwbcLdfJA1A5EjtiC6jXBQfNrGV_jEMmnxTNcYRPSRr6puPuBN8x_IFa8NQ_jI01Jfk-F5hQ',
  AUTHOR_SARAH: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8c9XPaJolnMy3iBtVlIQb6748WjjsDPdGKfNFDzTETbY8kPYgfP-a0aBTaHRukVJPNALmnvATCy60jNimNjF0k9ZwS505elnZCKpuvaMwScRx7mArTAoqc7DOtE6Vy97ckbsref_QpMHk_6eVwU9eKkPoSrWeQYWgPumV8oM2J6JWFsT-SYLB9835ADH6C-kwFJMeQ-cdJJ-2UIQAQ3VttL6vnaf_wPyJR7vRstnyST0QfmA2_I9TkT51ozCiyI1e5O5ZGS6tvf0'
};

export const REVIEWS: ReviewItem[] = [
  {
    id: '1',
    title: 'As 10 Melhores Fritadeiras Elétricas de 2024: Batatas Crocantes Sem Culpa',
    excerpt: 'Cozinhamos mais de 20kg de batatas fritas e asas de frango para encontrar as fritadeiras mais consistentes e fáceis de limpar.',
    image: IMAGES.AIR_FRYER,
    category: 'Cozinha',
    date: 'Atualizado 24 Out, 2024',
    readTime: '7 min de leitura',
    isEditorChoice: true,
    fullDescription: "Após semanas de testes intensivos, a Fritadeira Premium X500 se destacou como a melhor opção geral. Ela conseguiu consistentemente a textura mais crocante nas batatas fritas congeladas e assou asas de frango uniformemente sem secá-las. A interface digital é intuitiva, embora faça bipes um pouco altos demais. O cesto quadrado aproveita melhor o espaço do que os modelos redondos.",
    specs: {
      "Capacidade": "5.5 Litros",
      "Potência": "1700W",
      "Temperatura Máx": "200°C",
      "Lavável em Lava-louças": "Sim",
      "Dimensões": "30 x 30 x 35 cm"
    },
    pros: [
      "Fritura extremamente uniforme",
      "Cesto antiaderente de fácil limpeza",
      "Pré-aquecimento rápido (menos de 3 min)",
      "Design compacto para a capacidade"
    ],
    cons: [
      "Bipes do painel são muito altos",
      "O cabo pode ficar levemente morno",
      "Exterior em preto brilhante marca digitais"
    ]
  },
  {
    id: '2',
    title: 'Melhores Fones com Cancelamento de Ruído para Viagem em 2024',
    excerpt: "Seja em um voo longo ou no trânsito barulhento, estas escolhas oferecem o melhor silêncio que o dinheiro pode comprar.",
    image: IMAGES.HEADPHONES,
    category: 'Tech',
    date: 'Lançamento',
    readTime: '12 min de leitura',
    isNew: true,
    fullDescription: "O SonicSilence 5 é, sem dúvida, o rei do silêncio. Em nossos testes de voo simulado, ele reduziu o ruído do motor em impressionantes 95%. A qualidade de áudio é rica e equilibrada, favorecendo vocais claros e graves controlados. O conforto é excepcional, permitindo uso contínuo por 8 horas sem fadiga nas orelhas.",
    specs: {
      "Bateria": "30 horas (ANC ligado)",
      "Peso": "250g",
      "Conectividade": "Bluetooth 5.3, Cabo 3.5mm",
      "Cancelamento de Ruído": "Adaptativo Ativo",
      "Carregamento": "USB-C, Carga Rápida"
    },
    pros: [
      "Cancelamento de ruído líder de classe",
      "Extremamente confortáveis e leves",
      "Modo transparência muito natural",
      "Controles por toque responsivos"
    ],
    cons: [
      "Preço elevado",
      "Não dobra de forma compacta",
      "Cabo de carregamento incluso é curto"
    ]
  },
  {
    id: '3',
    title: 'Top 5 Cadeiras de Escritório Ergonômicas Abaixo de R$ 1.800',
    excerpt: "Você não precisa gastar uma fortuna para salvar suas costas. Encontramos as melhores cadeiras ergonômicas com bom custo-benefício.",
    image: IMAGES.OFFICE_CHAIR,
    category: 'Home Office',
    date: '20 Out, 2024',
    readTime: '5 min de leitura',
    fullDescription: "A ErgoFlex 300 oferece ajustes que normalmente só encontramos em cadeiras de mil dólares. O suporte lombar é ajustável em altura e profundidade, e o assento desliza para frente e para trás para acomodar diferentes comprimentos de perna. O tecido de malha (mesh) mantém você fresco durante longas jornadas de trabalho.",
    specs: {
      "Material": "Malha Respirável (Mesh)",
      "Peso Suportado": "Até 130kg",
      "Ajustes": "Altura, Lombar, Braços 3D",
      "Reclinação": "Até 135 graus",
      "Garantia": "5 anos"
    },
    pros: [
      "Excelente custo-benefício",
      "Apoio lombar robusto",
      "Montagem simples (aprox. 20 min)",
      "Assento de espuma de alta densidade"
    ],
    cons: [
      "Apoio de braço um pouco rígido",
      "Design genérico",
      "Rodinhas poderiam ser mais suaves em piso duro"
    ]
  },
  {
    id: '4',
    title: 'A Melhor Mala de Mão Que Realmente Cabe no Compartimento Superior',
    excerpt: 'Pare de pagar taxas de bagagem despachada. Medimos e enchemos 20 malas de mão para encontrar as verdadeiras campeãs.',
    image: IMAGES.LUGGAGE,
    category: 'Viagem',
    date: '15 Out, 2024',
    readTime: '8 min de leitura',
    fullDescription: "A Traveler Pro Carry-On maximiza cada centímetro cúbico permitido pelas companhias aéreas. O sistema de compressão interna permite que você leve roupas para uma semana tranquilamente. As rodas giratórias duplas deslizam como manteiga em carpetes de aeroporto e calçadas irregulares.",
    specs: {
      "Dimensões": "55 x 35 x 23 cm",
      "Peso": "3.1 kg",
      "Material": "Policarbonato Makrolon",
      "Rodas": "4 Rodas Duplas 360°",
      "Cadeado": "TSA Integrado"
    },
    pros: [
      "Garantia vitalícia",
      "Sistema de compressão eficiente",
      "Bolso para bateria portátil (power bank)",
      "Extremamente resistente a riscos"
    ],
    cons: [
      "Preço acima da média",
      "Sem bolso externo para laptop",
      "A alça telescópica tem um leve jogo"
    ]
  },
  {
    id: '5',
    title: "Máquinas de Expresso para Iniciantes: Um Guia de Compra Completo",
    excerpt: 'De semi-automáticas a máquinas de cápsula, ajudamos você a escolher a máquina certa para o seu ritual matinal.',
    image: IMAGES.ESPRESSO,
    category: 'Cozinha',
    date: '12 Out, 2024',
    readTime: '10 min de leitura',
    fullDescription: "Para quem quer começar no mundo do café especial sem complicação, a Barista Start é imbatível. Ela aquece em 3 segundos e possui um moedor integrado de alta qualidade. O vaporizador de leite automático cria uma microespuma sedosa perfeita para lattes, mesmo se você nunca fez um antes.",
    specs: {
      "Pressão": "15 Bar",
      "Moedor": "Integrado, Cônico",
      "Aquecimento": "ThermoJet (3 seg)",
      "Reservatório": "2 Litros",
      "Material": "Aço Inoxidável Escovado"
    },
    pros: [
      "Aquecimento instantâneo",
      "Interface amigável para iniciantes",
      "Design clássico e durável",
      "Acessórios de qualidade inclusos"
    ],
    cons: [
      "Requer limpeza regular do moedor",
      "Ocupa bastante espaço na bancada",
      "Bandeja de gotejamento enche rápido"
    ]
  },
  {
    id: '6',
    title: 'Melhores Smartwatches para Usuários Android em 2024',
    excerpt: "O Apple Watch não é a única opção. Aqui estão os melhores wearables para o ecossistema Android.",
    image: IMAGES.SMARTWATCH,
    category: 'Tech',
    date: 'Popular',
    readTime: '6 min de leitura',
    isPopular: true,
    fullDescription: "O Galaxy Watch 6 define o padrão para usuários Android. A tela Super AMOLED é brilhante e nítida sob a luz do sol. O rastreamento de sono foi aprimorado e agora oferece insights de 'coaching' para melhorar seu descanso. A integração com o ecossistema Samsung é perfeita, mas funciona muito bem com qualquer Android.",
    specs: {
      "Tela": "1.5 pol Super AMOLED",
      "Bateria": "Até 40 horas",
      "Sensores": "BIA, ECG, Frequência Cardíaca",
      "Resistência": "IP68 + 5ATM",
      "OS": "Wear OS 4"
    },
    pros: [
      "Tela fantástica com bordas finas",
      "Rastreamento de saúde abrangente",
      "Vasta biblioteca de apps (Wear OS)",
      "Design leve e confortável"
    ],
    cons: [
      "Bateria dura apenas um dia e meio",
      "Alguns recursos exclusivos para celulares Samsung",
      "Carregamento poderia ser mais rápido"
    ]
  },
  {
    id: '7',
    title: 'Série Vitamix 5200: Ainda é a Rainha dos Liquidificadores?',
    excerpt: 'Potência e durabilidade imbatíveis tornam este liquidificador clássico um item básico na cozinha mesmo anos após o lançamento.',
    image: IMAGES.VITAMIX,
    category: 'Cozinha',
    date: '01 Nov, 2024',
    readTime: '8 min de leitura',
    rating: 5,
    fullDescription: "Não se deixe enganar pelos interruptores analógicos simples; o Vitamix 5200 é uma besta. Ele pulveriza sementes de morango, transforma amêndoas em manteiga e até aquece sopa através da fricção das lâminas. A jarra alta cria um vórtice perfeito que puxa os ingredientes para as lâminas sem precisar parar para mexer.",
    specs: {
      "Potência": "2.0 HP",
      "Velocidades": "Variável (1-10) + High",
      "Jarra": "2 Litros (Livre de BPA)",
      "Lâminas": "Aço Inoxidável Endurecido",
      "Garantia": "7 anos"
    },
    pros: [
      "Durabilidade lendária",
      "Texturas incrivelmente suaves",
      "Controles simples e intuitivos",
      "Auto-limpeza fácil"
    ],
    cons: [
      "Muito barulhento na velocidade máxima",
      "Não cabe embaixo de armários baixos",
      "Design utilitário (não é bonito)"
    ]
  },
  {
    id: '8',
    title: 'Análise Profunda do Roborock S7 MaxV Ultra',
    excerpt: 'A melhor experiência de limpeza sem as mãos. O preço alto se justifica para donos de animais de estimação?',
    image: IMAGES.ROBOROCK_DETAIL,
    category: 'Tech',
    date: '15 Out, 2024',
    readTime: '15 min de leitura',
    rating: 4.9,
    price: 'R$ 8.399',
    fullDescription: "O Roborock S7 MaxV Ultra é o auge da automação doméstica. A base não apenas carrega, mas esvazia a lixeira do robô, lava o pano de esfregar e reabastece o tanque de água. A navegação por IA evita cocô de cachorro, cabos e sapatos com precisão cirúrgica. O esfregão sônico vibra para remover manchas secas.",
    specs: {
      "Poder de Sucção": "5100 Pa",
      "Bateria": "5200 mAh (180 min)",
      "Navegação": "LiDAR + Câmera RGB + Luz 3D",
      "Base": "Auto-limpeza, Auto-esvaziamento",
      "App": "Controle total e Mapas 3D"
    },
    pros: [
      "Navegação e evitação de obstáculos impecáveis",
      "Sistema de esfregar levanta em tapetes",
      "Manutenção extremamente baixa",
      "App rico em recursos"
    ],
    cons: [
      "Preço proibitivo para muitos",
      "A base é enorme e ocupa espaço",
      "Design industrial pode não agradar a todos"
    ]
  }
];

export const CATEGORIES: Category[] = ['Todos', 'Cozinha', 'Tech', 'Home Office', 'Viagem', 'Ar Livre', 'Beleza'];