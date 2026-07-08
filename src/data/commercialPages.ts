import { businessInfo, siteConfig } from "@data/site";
import { getCanonicalUrl } from "@lib/seo";

export type CommercialPageType =
  | "produto"
  | "servico"
  | "profissional"
  | "localidade"
  | "urgencia"
  | "institucional-comercial";

export type CommercialLink = {
  label: string;
  href: string;
};

export type CommercialFaq = {
  question: string;
  answer: string;
};

export type CommercialPage = {
  path: string;
  type: CommercialPageType;
  eyebrow: string;
  title: string;
  description: string;
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
  };
  whatsappMessage: string;
  primaryCta: string;
  secondaryCta: CommercialLink;
  trustPoints: string[];
  intro: {
    title: string;
    text: string;
  };
  indicatedFor: string[];
  stampData: string[];
  process: string[];
  delivery: string;
  serviceArea: string;
  relatedLinks: CommercialLink[];
  faq: CommercialFaq[];
};

export type CommercialHubCard = CommercialLink & {
  description: string;
  tag?: string;
};

export type CommercialHubGroup = {
  title: string;
  description: string;
  items: CommercialHubCard[];
};

export type CommercialHubPage = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
  };
  whatsappMessage: string;
  finalWhatsappMessage: string;
  primaryCta: string;
  secondaryCta: CommercialLink;
  trustPoints: string[];
  intro: {
    title: string;
    text: string;
  };
  groups: CommercialHubGroup[];
  choiceGuide: string[];
  process: string[];
  delivery: string;
  faq: CommercialFaq[];
};

const defaultTrustPoints = [
  "Loja em Venda Nova",
  "Entrega por motoboy em BH",
  "Mais de 40 anos de mercado",
  "Emite nota fiscal"
];

const defaultProcess = [
  "Envie pelo WhatsApp o texto, logotipo ou dados que devem aparecer no carimbo.",
  "Receba orientação sobre modelo, tamanho e melhor composição para o uso desejado.",
  "Confira e aprove a arte antes da produção.",
  "Combine retirada na loja ou consulte entrega por motoboy em Belo Horizonte e região."
];

const defaultDelivery =
  "A produção média é de 24 horas e a entrega média é de 48 horas, conforme modelo, aprovação da arte, demanda e região. Produção no mesmo dia ou em até 60 minutos pode ser possível sob consulta, sem promessa absoluta.";

const bhServiceArea =
  "O atendimento é feito pelo WhatsApp para Belo Horizonte e região, com loja física para retirada na Rua Tenente Marino Freire, 679, Bairro Maria Helena, Venda Nova.";

const locationServiceArea =
  "A loja física fica em Venda Nova, no bairro Maria Helena. Para outras regiões de Belo Horizonte, o pedido pode ser feito pelo WhatsApp com consulta de entrega por motoboy.";

export const commercialHubPage = {
  path: "/carimbos-bh/",
  eyebrow: "Central de carimbos em BH",
  title: "Carimbos em BH para empresas, profissionais e uso diário",
  description:
    "Encontre o tipo de carimbo ideal para sua necessidade, peça orientação pelo WhatsApp e escolha entre retirada em Venda Nova ou entrega por motoboy em Belo Horizonte e região.",
  seo: {
    title: "Carimbos em BH: modelos, prazos e atendimento",
    description:
      "Conheça opções de carimbos em BH para empresas, profissionais, clínicas, escritórios e uso administrativo. Pedido pelo WhatsApp, retirada em Venda Nova e entrega por motoboy em Belo Horizonte.",
    canonicalPath: "/carimbos-bh/"
  },
  whatsappMessage: "Olá! Vim pelo site e quero ajuda para escolher o tipo de carimbo ideal em BH.",
  finalWhatsappMessage:
    "Olá! Vim pelo site e preciso de ajuda para escolher um carimbo em BH.",
  primaryCta: "Pedir orientação pelo WhatsApp",
  secondaryCta: { label: "Ver como pedir", href: "/como-pedir/" },
  trustPoints: [
    "Loja em Venda Nova",
    "Entrega por motoboy em BH",
    "Produção média 24h",
    "Mais de 40 anos de mercado",
    "Nota fiscal"
  ],
  intro: {
    title: "Escolha o carimbo pela finalidade, não pelo nome do modelo",
    text:
      "Existem diferentes tipos de carimbos em Belo Horizonte conforme a rotina, a quantidade de dados, a frequência de uso e a urgência do pedido. Você não precisa saber o modelo exato antes de chamar: envie os dados que devem entrar no carimbo ou explique a finalidade, e o atendimento orienta pelo WhatsApp a opção mais adequada."
  },
  groups: [
    {
      title: "Carimbos mais procurados",
      description:
        "Opções comuns para quem precisa de carimbo personalizado, CNPJ, automático, madeira ou produção rápida sob consulta.",
      items: [
        {
          label: "Carimbo em BH",
          href: "/carimbo-em-bh/",
          tag: "Atendimento local",
          description:
            "Página ampla para quem procura carimbos em BH com pedido pelo WhatsApp, retirada em Venda Nova e entrega local."
        },
        {
          label: "Carimbo personalizado",
          href: "/carimbo-personalizado-bh/",
          tag: "Sob medida",
          description:
            "Carimbo com nome, empresa, profissão, CNPJ, logotipo ou texto personalizado conforme os dados enviados."
        },
        {
          label: "Carimbo CNPJ",
          href: "/carimbo-cnpj-bh/",
          tag: "Empresas e MEIs",
          description:
            "Opção para dados empresariais, razão social, CNPJ, endereço e rotina documental de empresas."
        },
        {
          label: "Carimbo automático",
          href: "/carimbo-automatico-bh/",
          tag: "Uso frequente",
          description:
            "Modelo prático para empresas, recepções, escritórios e profissionais que carimbam com frequência."
        },
        {
          label: "Carimbo de madeira",
          href: "/carimbo-madeira-bh/",
          tag: "Tradicional",
          description:
            "Opção manual e personalizada para textos, identificação e demandas com uso mais tradicional."
        },
        {
          label: "Carimbo na hora",
          href: "/carimbo-na-hora-bh/",
          tag: "Sob consulta",
          description:
            "Atendimento para urgência, com prazo confirmado conforme modelo, fila de produção e disponibilidade."
        }
      ]
    },
    {
      title: "Empresas e rotina administrativa",
      description:
        "Carimbos para documentos, setores internos, controle de datas, numeração e processos de escritório.",
      items: [
        {
          label: "Carimbo para empresa",
          href: "/carimbo-empresa-bh/",
          tag: "CNPJ e setores",
          description:
            "Indicado para razão social, CNPJ, endereço, departamentos e tarefas administrativas recorrentes."
        },
        {
          label: "Carimbo para escritório",
          href: "/carimbo-para-escritorio-bh/",
          tag: "Documentos",
          description:
            "Para escritórios administrativos, contabilidade, advocacia, imobiliárias e prestadores de serviço."
        },
        {
          label: "Carimbo datador",
          href: "/carimbo-datador-bh/",
          tag: "Controle de datas",
          description:
            "Ajuda em recebimento, protocolo, conferência, almoxarifado e organização por data."
        },
        {
          label: "Carimbo numerador",
          href: "/carimbo-numerador-bh/",
          tag: "Sequência",
          description:
            "Usado para identificação sequencial de processos, arquivos, protocolos e controles internos."
        },
        {
          label: "Carimbo de assinatura",
          href: "/carimbo-assinatura-bh/",
          tag: "Uso cauteloso",
          description:
            "Pode apoiar rotinas internas; a aceitação depende do tipo de documento, finalidade e regra interna."
        }
      ]
    },
    {
      title: "Profissionais, clínicas e saúde",
      description:
        "Páginas para carimbo profissional com dados informados pelo cliente, sem regras profissionais inventadas.",
      items: [
        {
          label: "Carimbo médico",
          href: "/carimbo-medico-bh/",
          tag: "Saúde",
          description:
            "Para consultórios, clínicas e profissionais de saúde com dados profissionais informados pelo cliente."
        },
        {
          label: "Carimbo para advogado",
          href: "/carimbo-advogado-bh/",
          tag: "Jurídico",
          description:
            "Para rotina documental de advogados e escritórios, usando dados profissionais enviados pelo cliente."
        },
        {
          label: "Carimbo para psicólogo",
          href: "/carimbo-psicologo-bh/",
          tag: "Consultório",
          description:
            "Opção para atendimento profissional, documentos e identificação em consultórios e clínicas."
        },
        {
          label: "Carimbo para nutricionista",
          href: "/carimbo-nutricionista-bh/",
          tag: "Profissional",
          description:
            "Carimbo personalizado para nutricionistas, clínicas e documentos com dados informados pelo cliente."
        },
        {
          label: "Carimbo para enfermagem",
          href: "/carimbo-enfermagem-bh/",
          tag: "Identificação",
          description:
            "Para profissionais e técnicos de enfermagem, com dados profissionais enviados e aprovados pelo cliente."
        },
        {
          label: "Carimbo para clínica",
          href: "/carimbo-para-clinica-bh/",
          tag: "Atendimento",
          description:
            "Para clínicas, recepções, setores internos e profissionais que atendem dentro da unidade."
        }
      ]
    },
    {
      title: "Região, retirada e urgência",
      description:
        "Informações para quem quer retirar na loja, consultar entrega por motoboy ou verificar produção rápida.",
      items: [
        {
          label: "Carimbos em Venda Nova",
          href: "/carimbos-venda-nova/",
          tag: "Loja física",
          description:
            "Loja na Rua Tenente Marino Freire, 679, Bairro Maria Helena, com retirada combinada pelo atendimento."
        },
        {
          label: "Carimbos Pampulha",
          href: "/carimbos-pampulha/",
          tag: "Entrega sob consulta",
          description:
            "Atendimento para clientes da Pampulha via WhatsApp, sem afirmar loja física fora de Venda Nova."
        },
        {
          label: "Carimbo urgente",
          href: "/carimbo-urgente-bh/",
          tag: "Disponibilidade",
          description:
            "Produção no mesmo dia ou até 60 minutos pode ser possível sob consulta, conforme fila e modelo."
        },
        {
          label: "Prazos e entrega",
          href: "/prazos-e-entrega/",
          tag: "Orientação",
          description:
            "Entenda produção média, entrega média, retirada em Venda Nova e motoboy em BH e região."
        },
        {
          label: "Contato",
          href: "/contato/",
          tag: "Atendimento",
          description:
            "Veja WhatsApp, e-mail, endereço, horário e rota para falar com a BH Carimbos."
        },
        {
          label: "Perguntas frequentes",
          href: "/perguntas-frequentes/",
          tag: "Dúvidas",
          description:
            "Tire dúvidas sobre modelos, pedidos pelo WhatsApp, prazos, retirada, entrega e pagamento."
        }
      ]
    }
  ],
  choiceGuide: [
    "Para documentos simples, um carimbo personalizado ou automático pode atender conforme a frequência de uso.",
    "Para empresa, avalie carimbo CNPJ ou carimbo para empresa com dados comerciais e setor.",
    "Para consultórios e profissionais, use carimbo profissional com dados informados pelo cliente.",
    "Para controle interno, datador ou numerador podem ajudar em datas, protocolos e sequências.",
    "Para urgência, consulte disponibilidade pelo WhatsApp antes de contar com produção rápida."
  ],
  process: [
    "Envie o tipo de carimbo ou explique a finalidade do uso.",
    "Informe os dados que devem aparecer no carimbo.",
    "Receba orientação de modelo e confira o layout.",
    "Confirme a produção após aprovação da arte.",
    "Retire em Venda Nova ou consulte entrega por motoboy."
  ],
  delivery:
    "A produção média é de 24 horas e a entrega média é de 48 horas. A retirada é feita na loja em Venda Nova, bairro Maria Helena, e a entrega por motoboy em Belo Horizonte e região depende de disponibilidade. Produção no mesmo dia ou em até 60 minutos pode ser possível apenas sob consulta, conforme modelo, fila e disponibilidade.",
  faq: [
    {
      question: "Quais tipos de carimbos a BH Carimbos faz?",
      answer:
        "A BH Carimbos atende carimbos personalizados, CNPJ, automáticos, madeira, profissionais, datadores, numeradores, assinatura e modelos para empresas, clínicas e escritórios."
    },
    {
      question: "Preciso saber o modelo antes de pedir?",
      answer:
        "Não. Você pode enviar a finalidade e os dados que precisam entrar no carimbo para receber orientação pelo WhatsApp."
    },
    {
      question: "Vocês fazem carimbo CNPJ?",
      answer:
        "Sim. O carimbo CNPJ pode incluir razão social, nome fantasia, CNPJ, endereço, contato ou setor, conforme dados enviados pelo cliente."
    },
    {
      question: "Vocês fazem carimbo para profissionais da saúde?",
      answer:
        "Sim. A produção usa os dados profissionais informados pelo cliente, que deve conferir a arte antes da produção."
    },
    {
      question: "Tem carimbo urgente em BH?",
      answer:
        "Há possibilidade de produção rápida sob consulta. O prazo depende do modelo, fila de produção, dados enviados e aprovação da arte."
    },
    {
      question: "A loja fica em qual região?",
      answer:
        "A loja física fica em Venda Nova, no bairro Maria Helena, em Belo Horizonte/MG."
    },
    {
      question: "Vocês entregam por motoboy?",
      answer:
        "Há entrega por motoboy em Belo Horizonte e região, conforme disponibilidade, endereço e confirmação pelo atendimento."
    },
    {
      question: "Posso pedir tudo pelo WhatsApp?",
      answer:
        "Sim. O pedido pode começar pelo WhatsApp com envio dos dados, orientação de modelo, aprovação da arte e combinação de retirada ou entrega."
    }
  ]
} as const satisfies CommercialHubPage;

export const commercialPages = [
  {
    path: "/carimbo-em-bh/",
    type: "institucional-comercial",
    eyebrow: "Carimbos em Belo Horizonte",
    title: "Carimbo em BH com pedido pelo WhatsApp e entrega local",
    description:
      "Atendimento para quem precisa de carimbos personalizados em Belo Horizonte, com orientação pelo WhatsApp, aprovação da arte e opção de retirada ou entrega por motoboy.",
    seo: {
      title: "Carimbo em BH com Entrega Local",
      description:
        "Peça carimbo em BH pelo WhatsApp. Atendimento em Belo Horizonte, retirada em Venda Nova, entrega por motoboy e aprovação da arte antes da produção.",
      canonicalPath: "/carimbo-em-bh/"
    },
    whatsappMessage: "Olá! Vim pelo site e gostaria de pedir um orçamento de carimbo em BH.",
    primaryCta: "Pedir orçamento de carimbo em BH",
    secondaryCta: { label: "Ver modelos de carimbos", href: "/nossos-produtos/" },
    trustPoints: defaultTrustPoints,
    intro: {
      title: "Uma página para quem procura carimbo em Belo Horizonte",
      text:
        "Esta opção atende pedidos variados de carimbos em BH, desde uso empresarial até identificação profissional e demandas pessoais. O atendimento ajuda a definir o modelo adequado, organiza os dados e confirma a arte antes de iniciar a produção."
    },
    indicatedFor: [
      "Empresas que precisam de carimbos para rotina administrativa",
      "Profissionais liberais que usam carimbo em documentos",
      "Pessoas físicas que precisam de identificação personalizada",
      "Clientes que preferem pedir pelo WhatsApp e retirar em Venda Nova"
    ],
    stampData: [
      "Nome, razão social ou texto personalizado",
      "CNPJ, endereço e dados comerciais, quando necessário",
      "Logotipo enviado pelo cliente",
      "Telefone, e-mail, setor ou informação de atendimento"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Ver todos os tipos de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo personalizado em BH", href: "/carimbo-personalizado-bh/" },
      { label: "Carimbo CNPJ em BH", href: "/carimbo-cnpj-bh/" },
      { label: "Carimbo urgente em BH", href: "/carimbo-urgente-bh/" },
      { label: "Prazos e entrega", href: "/prazos-e-entrega/" },
      { label: "Tirar dúvidas sobre carimbos em BH", href: "/perguntas-frequentes/" }
    ],
    faq: [
      {
        question: "Vocês fazem carimbo em Belo Horizonte?",
        answer:
          "Sim. A BH Carimbos atende pedidos em Belo Horizonte pelo WhatsApp, com retirada na loja em Venda Nova ou entrega por motoboy conforme disponibilidade."
      },
      {
        question: "Posso pedir o carimbo pelo WhatsApp?",
        answer:
          "Pode. Envie os dados do carimbo, informe o uso desejado e o atendimento orienta modelo, layout e prazo."
      },
      {
        question: "A arte é conferida antes da produção?",
        answer:
          "Sim. O layout é confirmado antes da produção para reduzir erros e garantir que as informações estejam corretas."
      },
      {
        question: "Tem entrega de carimbo em BH?",
        answer:
          "Há entrega por motoboy em Belo Horizonte e região mediante consulta de disponibilidade e endereço."
      }
    ]
  },
  {
    path: "/carimbo-personalizado-bh/",
    type: "servico",
    eyebrow: "Carimbo personalizado",
    title: "Carimbo personalizado em BH para uso profissional ou comercial",
    description:
      "Produção de carimbos personalizados com texto, dados, logotipo ou composição conforme a necessidade do cliente.",
    seo: {
      title: "Carimbo Personalizado em BH",
      description:
        "Peça carimbo personalizado em BH com nome, empresa, CNPJ, profissão ou logotipo. Atendimento pelo WhatsApp, arte para aprovação e entrega em BH.",
      canonicalPath: "/carimbo-personalizado-bh/"
    },
    whatsappMessage: "Olá! Vim pelo site e gostaria de fazer um carimbo personalizado em BH.",
    primaryCta: "Pedir carimbo personalizado",
    secondaryCta: { label: "Como funciona o pedido", href: "/como-pedir/" },
    trustPoints: defaultTrustPoints,
    intro: {
      title: "Personalização orientada pelo uso do carimbo",
      text:
        "O carimbo personalizado pode reunir dados de empresa, profissão, atendimento, logotipo ou uma frase específica. A equipe orienta a composição para manter boa leitura e evitar excesso de informação no espaço escolhido."
    },
    indicatedFor: [
      "Empresas que querem padronizar documentos e setores",
      "Profissionais liberais que precisam de identificação",
      "Lojas, escritórios e prestadores de serviço",
      "Clientes que precisam incluir logotipo ou texto próprio"
    ],
    stampData: [
      "Nome da pessoa, empresa ou marca",
      "CNPJ, profissão ou registro informado pelo cliente",
      "Logotipo em arquivo digital, se houver",
      "Endereço, telefone, e-mail ou mensagem curta"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Conhecer outras opções de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" },
      { label: "Carimbo de madeira em BH", href: "/carimbo-madeira-bh/" },
      { label: "Nossos produtos", href: "/nossos-produtos/" },
      { label: "Contato", href: "/contato/" }
    ],
    faq: [
      {
        question: "O que posso personalizar no carimbo?",
        answer:
          "Você pode enviar texto, nome, empresa, CNPJ, dados profissionais, contato, endereço ou logotipo. O atendimento orienta a melhor composição."
      },
      {
        question: "Posso incluir logotipo no carimbo?",
        answer:
          "Sim, desde que o arquivo permita boa leitura no tamanho escolhido. O layout é conferido antes da produção."
      },
      {
        question: "Vocês ajudam a escolher o modelo?",
        answer:
          "Sim. Pelo WhatsApp, a equipe avalia a quantidade de dados e o uso pretendido para sugerir um modelo adequado."
      },
      {
        question: "Carimbo personalizado pode ser entregue em BH?",
        answer:
          "Pode haver entrega por motoboy em Belo Horizonte e região, conforme disponibilidade e confirmação pelo atendimento."
      }
    ]
  },
  {
    path: "/carimbo-cnpj-bh/",
    type: "produto",
    eyebrow: "Carimbo CNPJ",
    title: "Carimbo CNPJ em BH para empresas, MEIs e prestadores de serviço",
    description:
      "Carimbo com CNPJ, razão social, endereço e dados comerciais para rotina administrativa, emissão de documentos e identificação empresarial.",
    seo: {
      title: "Carimbo CNPJ em BH",
      description:
        "Peça carimbo CNPJ personalizado em Belo Horizonte para MEI, empresas e prestadores de serviço. Atendimento pelo WhatsApp, retirada em Venda Nova e entrega em BH.",
      canonicalPath: "/carimbo-cnpj-bh/"
    },
    whatsappMessage: "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo CNPJ em BH.",
    primaryCta: "Pedir orçamento de carimbo CNPJ",
    secondaryCta: { label: "Ver carimbo para empresa", href: "/carimbo-empresa-bh/" },
    trustPoints: defaultTrustPoints,
    intro: {
      title: "Carimbo CNPJ para facilitar a rotina da empresa",
      text:
        "O carimbo CNPJ ajuda a aplicar dados empresariais de forma rápida em documentos, protocolos, formulários e rotinas internas. A composição pode ser adaptada ao espaço disponível e aos dados enviados pelo cliente."
    },
    indicatedFor: [
      "MEIs que precisam identificar documentos comerciais",
      "Empresas com rotina de atendimento, financeiro ou estoque",
      "Prestadores de serviço que usam dados empresariais em formulários",
      "Escritórios que lidam com protocolos e documentos recorrentes"
    ],
    stampData: [
      "Razão social ou nome fantasia informado pelo cliente",
      "CNPJ",
      "Endereço, telefone ou e-mail, quando necessário",
      "Setor, departamento ou texto auxiliar"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Central de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo para empresa em BH", href: "/carimbo-empresa-bh/" },
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" },
      { label: "Como pedir", href: "/como-pedir/" },
      { label: "Prazos e entrega", href: "/prazos-e-entrega/" },
      { label: "Ver perguntas frequentes", href: "/perguntas-frequentes/" }
    ],
    faq: [
      {
        question: "Quais dados posso colocar no carimbo CNPJ?",
        answer:
          "Normalmente entram razão social, nome fantasia, CNPJ, endereço, telefone, e-mail ou setor. O conteúdo final depende dos dados enviados pelo cliente."
      },
      {
        question: "Vocês fazem carimbo CNPJ para MEI?",
        answer:
          "Sim. O atendimento pode orientar carimbos para MEI, empresas e prestadores de serviço conforme os dados informados."
      },
      {
        question: "Posso pedir carimbo CNPJ pelo WhatsApp?",
        answer:
          "Sim. Envie os dados pelo WhatsApp para receber orientação sobre modelo, layout e prazo."
      },
      {
        question: "O carimbo CNPJ pode ficar pronto no mesmo dia?",
        answer:
          "Pode haver produção rápida em alguns casos, conforme modelo, fila e aprovação da arte. A disponibilidade é confirmada pelo atendimento."
      }
    ]
  },
  {
    path: "/carimbo-na-hora-bh/",
    type: "urgencia",
    eyebrow: "Produção rápida sob consulta",
    title: "Carimbo na hora em BH com urgência sob consulta",
    description:
      "Atendimento para quem precisa de carimbo com rapidez em Belo Horizonte, sempre com confirmação de modelo, fila de produção e disponibilidade.",
    seo: {
      title: "Carimbo na Hora em BH sob Consulta",
      description:
        "Precisa de carimbo na hora em BH? Consulte produção rápida pelo WhatsApp. Possibilidade no mesmo dia ou em até 60 minutos conforme modelo e disponibilidade.",
      canonicalPath: "/carimbo-na-hora-bh/"
    },
    whatsappMessage:
      "Olá! Vim pelo site e preciso consultar a possibilidade de carimbo na hora em BH.",
    primaryCta: "Consultar produção rápida",
    secondaryCta: { label: "Ver prazos e entrega", href: "/prazos-e-entrega/" },
    trustPoints: ["Urgência sob consulta", "Retirada em Venda Nova", "Entrega em BH", "Arte aprovada antes"],
    intro: {
      title: "Urgência tratada com confirmação real de disponibilidade",
      text:
        "Pedidos urgentes precisam ser avaliados pelo atendimento antes da produção. Em alguns casos, a produção no mesmo dia ou em até 60 minutos pode ser possível, dependendo do modelo, da fila e da aprovação da arte."
    },
    indicatedFor: [
      "Clientes com reunião, entrega ou documento próximo",
      "Empresas que precisam repor um carimbo rapidamente",
      "Profissionais que perderam ou danificaram o carimbo",
      "Pedidos simples com dados prontos para conferência"
    ],
    stampData: [
      "Texto final do carimbo já revisado",
      "CNPJ, profissão ou dados profissionais quando aplicável",
      "Preferência de modelo, se já houver",
      "Confirmação de retirada ou consulta de entrega"
    ],
    process: [
      "Chame no WhatsApp e informe que precisa de produção rápida.",
      "Envie os dados completos e confirme se há logotipo ou texto especial.",
      "Aguarde a confirmação de modelo, prazo possível e arte.",
      "Após aprovação, combine retirada em Venda Nova ou consulte entrega."
    ],
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Modelos de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo urgente em BH", href: "/carimbo-urgente-bh/" },
      { label: "Como pedir", href: "/como-pedir/" },
      { label: "Contato", href: "/contato/" },
      { label: "Carimbo em BH", href: "/carimbo-em-bh/" },
      { label: "Consultar dúvidas sobre prazos e entrega", href: "/perguntas-frequentes/" }
    ],
    faq: [
      {
        question: "Vocês fazem carimbo na hora em BH?",
        answer:
          "Há possibilidade de produção rápida sob consulta. O atendimento confirma prazo conforme modelo, fila, dados enviados e aprovação da arte."
      },
      {
        question: "Carimbo em até 60 minutos é garantido?",
        answer:
          "Não. Em alguns casos pode ser possível, mas depende de modelo, disponibilidade, demanda e confirmação pelo atendimento."
      },
      {
        question: "O que agiliza um pedido urgente?",
        answer:
          "Enviar os dados completos, revisar o texto antes, responder rapidamente à aprovação da arte e confirmar a forma de retirada ou entrega."
      },
      {
        question: "Pedido urgente pode ser entregue por motoboy?",
        answer:
          "Pode ser consultado. A entrega depende de disponibilidade de motoboy, região e horário do pedido."
      }
    ]
  },
  {
    path: "/carimbo-automatico-bh/",
    type: "produto",
    eyebrow: "Carimbo automático",
    title: "Carimbo automático em BH para uso frequente no dia a dia",
    description:
      "Modelos automáticos para empresas, recepções, escritórios e profissionais que precisam de aplicação prática e recorrente.",
    seo: {
      title: "Carimbo Automático em BH",
      description:
        "Peça carimbo automático em BH para empresas, escritórios e uso profissional. Atendimento pelo WhatsApp, marcas Trodat, Colop, Nykon ou similares.",
      canonicalPath: "/carimbo-automatico-bh/"
    },
    whatsappMessage: "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo automático em BH.",
    primaryCta: "Pedir carimbo automático",
    secondaryCta: { label: "Ver modelos", href: "/nossos-produtos/" },
    trustPoints: ["Trodat, Colop, Nykon ou similares", "Uso profissional", "Nota fiscal", "Entrega em BH"],
    intro: {
      title: "Praticidade para quem carimba muitas vezes",
      text:
        "O carimbo automático é uma opção prática para rotinas com uso frequente, pois facilita a aplicação sem depender de almofada separada. O atendimento orienta o modelo conforme quantidade de dados e finalidade."
    },
    indicatedFor: [
      "Recepções e balcões de atendimento",
      "Escritórios administrativos e financeiros",
      "Empresas com uso recorrente em documentos",
      "Profissionais que precisam de aplicação rápida e limpa"
    ],
    stampData: [
      "Nome, empresa, CNPJ ou identificação profissional",
      "Endereço, telefone, e-mail ou setor",
      "Logotipo, se a arte permitir boa leitura",
      "Texto curto para protocolos, conferências ou atendimento"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Ver todos os tipos de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo personalizado em BH", href: "/carimbo-personalizado-bh/" },
      { label: "Carimbo CNPJ em BH", href: "/carimbo-cnpj-bh/" },
      { label: "Nossos produtos", href: "/nossos-produtos/" },
      { label: "Como pedir", href: "/como-pedir/" }
    ],
    faq: [
      {
        question: "Quando vale pedir carimbo automático?",
        answer:
          "Ele costuma ser indicado para uso frequente, como atendimento, escritório, documentos empresariais e identificação profissional."
      },
      {
        question: "Quais marcas vocês trabalham?",
        answer:
          "A BH Carimbos trabalha com marcas como Trodat, Colop, Nykon ou similares, conforme disponibilidade e indicação do atendimento."
      },
      {
        question: "O atendimento ajuda a escolher o tamanho?",
        answer:
          "Sim. Envie os dados e a equipe orienta um modelo compatível com a quantidade de informação."
      },
      {
        question: "Carimbo automático pode ter CNPJ?",
        answer:
          "Pode. O carimbo automático é usado com frequência para dados de empresa, CNPJ, endereço e setor."
      }
    ]
  },
  {
    path: "/carimbo-medico-bh/",
    type: "profissional",
    eyebrow: "Carimbo profissional",
    title: "Carimbo médico em BH para consultórios, clínicas e profissionais de saúde",
    description:
      "Atendimento para carimbos de profissionais de saúde com dados profissionais informados pelo cliente e arte conferida antes da produção.",
    seo: {
      title: "Carimbo Médico em BH",
      description:
        "Peça carimbo médico em BH pelo WhatsApp para consultórios, clínicas e profissionais de saúde. Arte aprovada antes da produção e entrega em BH.",
      canonicalPath: "/carimbo-medico-bh/"
    },
    whatsappMessage: "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo médico em BH.",
    primaryCta: "Pedir carimbo médico",
    secondaryCta: { label: "Ver carimbo automático", href: "/carimbo-automatico-bh/" },
    trustPoints: defaultTrustPoints,
    intro: {
      title: "Carimbo para identificação profissional na área da saúde",
      text:
        "O carimbo médico pode reunir nome, especialidade e dados profissionais informados pelo cliente. A BH Carimbos não define regras de conselho profissional; o conteúdo deve ser enviado e conferido pelo próprio solicitante."
    },
    indicatedFor: [
      "Médicos e profissionais de saúde",
      "Consultórios e clínicas",
      "Atendimento administrativo em saúde",
      "Profissionais que precisam identificar documentos e receituários"
    ],
    stampData: [
      "Nome profissional informado pelo cliente",
      "Especialidade ou função, quando aplicável",
      "Dados profissionais enviados pelo solicitante",
      "Contato ou informação complementar, se couber no layout"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Conhecer opções de carimbos profissionais", href: "/carimbos-bh/" },
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" },
      { label: "Carimbo para clínica em BH", href: "/carimbo-para-clinica-bh/" },
      { label: "Como pedir", href: "/como-pedir/" },
      { label: "Prazos e entrega", href: "/prazos-e-entrega/" },
      { label: "Tirar dúvidas antes de pedir", href: "/perguntas-frequentes/" }
    ],
    faq: [
      {
        question: "Quais dados entram no carimbo médico?",
        answer:
          "Entram os dados profissionais informados pelo cliente, como nome, especialidade e registro quando aplicável. O cliente deve conferir as informações antes da aprovação."
      },
      {
        question: "Vocês definem regras do CRM?",
        answer:
          "Não. A BH Carimbos produz o carimbo com os dados enviados e aprovados pelo cliente, sem orientar regras específicas de conselho profissional."
      },
      {
        question: "Posso pedir pelo WhatsApp?",
        answer:
          "Sim. Envie os dados e o atendimento orienta modelo, layout e prazo."
      },
      {
        question: "Tem entrega para clínicas em BH?",
        answer:
          "A entrega por motoboy em Belo Horizonte e região pode ser consultada pelo atendimento."
      }
    ]
  },
  {
    path: "/carimbo-empresa-bh/",
    type: "servico",
    eyebrow: "Carimbo empresarial",
    title: "Carimbo para empresa em BH com dados comerciais e nota fiscal",
    description:
      "Carimbos para empresas, setores administrativos, financeiro, estoque, atendimento, protocolos e documentos internos.",
    seo: {
      title: "Carimbo para Empresa em BH",
      description:
        "Peça carimbo para empresa em BH com CNPJ, razão social, endereço, setor ou dados administrativos. Atendimento pelo WhatsApp e nota fiscal.",
      canonicalPath: "/carimbo-empresa-bh/"
    },
    whatsappMessage: "Olá! Vim pelo site e gostaria de pedir um orçamento de carimbo para empresa em BH.",
    primaryCta: "Pedir carimbo para empresa",
    secondaryCta: { label: "Ver carimbo CNPJ", href: "/carimbo-cnpj-bh/" },
    trustPoints: defaultTrustPoints,
    intro: {
      title: "Carimbos para organizar a rotina empresarial",
      text:
        "Empresas usam carimbos para identificar documentos, agilizar protocolos, padronizar setores e facilitar tarefas administrativas. O modelo ideal depende da quantidade de dados e da frequência de uso."
    },
    indicatedFor: [
      "Administração, financeiro, compras e estoque",
      "Atendimento ao cliente e recepção",
      "Empresas que precisam de CNPJ e razão social no carimbo",
      "Prestadores de serviço com rotina documental"
    ],
    stampData: [
      "Razão social, nome fantasia e CNPJ",
      "Endereço, telefone, e-mail ou site",
      "Departamento, setor ou função do carimbo",
      "Texto de protocolo, recebido, pago ou conferido"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Central de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo CNPJ em BH", href: "/carimbo-cnpj-bh/" },
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" },
      { label: "Carimbo para escritório em BH", href: "/carimbo-para-escritorio-bh/" },
      { label: "Contato", href: "/contato/" }
    ],
    faq: [
      {
        question: "Vocês emitem nota fiscal?",
        answer: "Sim. A BH Carimbos emite nota fiscal para pedidos conforme atendimento comercial."
      },
      {
        question: "Carimbo para empresa pode ter setor?",
        answer:
          "Sim. Pode incluir setor, departamento, texto administrativo ou dados comerciais, conforme necessidade da empresa."
      },
      {
        question: "Qual modelo é indicado para uso frequente?",
        answer:
          "Em muitos casos, o automático é prático para uso frequente. A indicação depende da quantidade de dados e rotina de uso."
      },
      {
        question: "Empresas podem pedir pelo WhatsApp?",
        answer:
          "Sim. O atendimento pelo WhatsApp recebe os dados, orienta o modelo e confirma a arte antes da produção."
      }
    ]
  },
  {
    path: "/carimbo-madeira-bh/",
    type: "produto",
    eyebrow: "Carimbo de madeira",
    title: "Carimbo de madeira em BH para uso tradicional e personalizado",
    description:
      "Opção tradicional de carimbo manual para textos, dados comerciais e identificações personalizadas, com orientação de modelo pelo WhatsApp.",
    seo: {
      title: "Carimbo de Madeira em BH",
      description:
        "Peça carimbo de madeira em BH com texto, empresa, CNPJ ou dados personalizados. Atendimento pelo WhatsApp, retirada em Venda Nova e entrega em BH.",
      canonicalPath: "/carimbo-madeira-bh/"
    },
    whatsappMessage: "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo de madeira em BH.",
    primaryCta: "Pedir carimbo de madeira",
    secondaryCta: { label: "Comparar com automático", href: "/carimbo-automatico-bh/" },
    trustPoints: defaultTrustPoints,
    intro: {
      title: "Modelo tradicional para diferentes tipos de texto",
      text:
        "O carimbo de madeira é uma alternativa manual para quem prefere uma solução tradicional. Ele pode ser usado com dados simples ou composições personalizadas, sempre com orientação sobre tamanho e legibilidade."
    },
    indicatedFor: [
      "Pedidos com texto simples e objetivo",
      "Uso eventual em documentos e identificações",
      "Clientes que preferem carimbo manual",
      "Empresas e profissionais com demanda específica"
    ],
    stampData: [
      "Nome, texto personalizado ou identificação",
      "CNPJ ou dados comerciais, quando necessário",
      "Logotipo simples, se houver boa leitura",
      "Tamanho desejado ou referência de uso"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Modelos de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" },
      { label: "Carimbo personalizado em BH", href: "/carimbo-personalizado-bh/" },
      { label: "Nossos produtos", href: "/nossos-produtos/" },
      { label: "Como pedir", href: "/como-pedir/" }
    ],
    faq: [
      {
        question: "Carimbo de madeira precisa de almofada?",
        answer:
          "Por ser manual, normalmente o uso depende de almofada separada. O atendimento orienta conforme o modelo solicitado."
      },
      {
        question: "Posso fazer carimbo de madeira personalizado?",
        answer:
          "Sim. O carimbo pode receber texto, dados comerciais ou composição personalizada, conforme viabilidade do layout."
      },
      {
        question: "Vocês informam preço pelo site?",
        answer:
          "Não há preço fixo informado na página. O orçamento é confirmado pelo atendimento conforme modelo e dados do pedido."
      },
      {
        question: "Dá para retirar em Venda Nova?",
        answer:
          "Sim. A retirada pode ser combinada na loja em Venda Nova após confirmação do atendimento."
      }
    ]
  },
  {
    path: "/carimbos-venda-nova/",
    type: "localidade",
    eyebrow: "Venda Nova",
    title: "Carimbos em Venda Nova com loja física no bairro Maria Helena",
    description:
      "Atendimento local para carimbos em Venda Nova, com retirada na Rua Tenente Marino Freire, 679, e pedido pelo WhatsApp.",
    seo: {
      title: "Carimbos em Venda Nova",
      description:
        "Peça carimbos em Venda Nova com a BH Carimbos. Loja no bairro Maria Helena, pedido pelo WhatsApp, retirada no local e entrega em BH.",
      canonicalPath: "/carimbos-venda-nova/"
    },
    whatsappMessage: "Olá! Vim pelo site e gostaria de pedir um carimbo para retirar em Venda Nova.",
    primaryCta: "Pedir carimbo em Venda Nova",
    secondaryCta: { label: "Ver contato e rota", href: "/contato/" },
    trustPoints: ["Loja em Venda Nova", "Bairro Maria Helena", "Retirada no local", "Atendimento por WhatsApp"],
    intro: {
      title: "Atendimento local para quem está em Venda Nova",
      text:
        "A BH Carimbos atende na região de Venda Nova, no bairro Maria Helena, com pedido pelo WhatsApp e retirada na loja. É uma opção prática para quem está próximo e quer combinar o pedido antes de se deslocar."
    },
    indicatedFor: [
      "Clientes de Venda Nova e bairros próximos",
      "Empresas que preferem retirada local",
      "Profissionais que precisam confirmar o pedido pelo WhatsApp",
      "Quem busca uma loja física de carimbos em Belo Horizonte"
    ],
    stampData: [
      "Texto, nome, empresa ou CNPJ",
      "Dados profissionais informados pelo cliente",
      "Logotipo, quando houver",
      "Modelo desejado ou finalidade de uso"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea:
      "A loja fica na Rua Tenente Marino Freire, 679, Bairro Maria Helena, região de Venda Nova, Belo Horizonte/MG. A retirada deve ser combinada pelo atendimento.",
    relatedLinks: [
      { label: "Ver todos os tipos de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Contato", href: "/contato/" },
      { label: "Prazos e entrega", href: "/prazos-e-entrega/" },
      { label: "Carimbo em BH", href: "/carimbo-em-bh/" },
      { label: "Como pedir", href: "/como-pedir/" },
      { label: "Entender como funciona o pedido", href: "/perguntas-frequentes/" }
    ],
    faq: [
      {
        question: "A BH Carimbos fica em Venda Nova?",
        answer:
          "Sim. A loja fica na Rua Tenente Marino Freire, 679, Bairro Maria Helena, na região de Venda Nova, Belo Horizonte/MG."
      },
      {
        question: "Posso retirar o carimbo na loja?",
        answer:
          "Sim. A retirada pode ser combinada pelo atendimento após confirmação do pedido, produção e aprovação da arte."
      },
      {
        question: "Preciso ir até a loja para pedir?",
        answer:
          "Não necessariamente. O pedido pode começar pelo WhatsApp, com envio dos dados e confirmação do layout."
      },
      {
        question: "Tem entrega para outras regiões de BH?",
        answer:
          "Há entrega por motoboy em Belo Horizonte e região, mediante consulta de disponibilidade."
      }
    ]
  },
  {
    path: "/carimbo-advogado-bh/",
    type: "profissional",
    eyebrow: "Carimbo jurídico",
    title: "Carimbo para advogado em BH com atendimento rápido pelo WhatsApp",
    description:
      "Carimbo profissional para advogados e escritórios de advocacia em Belo Horizonte, com dados informados pelo cliente e aprovação da arte antes da produção.",
    seo: {
      title: "Carimbo para Advogado em BH",
      description:
        "Peça carimbo para advogado em BH pelo WhatsApp. Atendimento para profissionais e escritórios, retirada em Venda Nova e entrega por motoboy em BH.",
      canonicalPath: "/carimbo-advogado-bh/"
    },
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo de advogado em BH.",
    primaryCta: "Pedir orçamento de carimbo para advogado",
    secondaryCta: { label: "Ver carimbo para escritório", href: "/carimbo-para-escritorio-bh/" },
    trustPoints: defaultTrustPoints,
    intro: {
      title: "Identificação profissional para rotina jurídica",
      text:
        "O carimbo para advogado pode ajudar em documentos, protocolos, atendimento de escritório e identificação profissional. A composição é feita com os dados profissionais informados pelo cliente, sem definição de campos obrigatórios pela BH Carimbos."
    },
    indicatedFor: [
      "Advogados autônomos com rotina documental",
      "Escritórios de advocacia e equipes administrativas",
      "Atendimento jurídico que precisa identificar documentos",
      "Profissionais que preferem pedir e aprovar a arte pelo WhatsApp"
    ],
    stampData: [
      "Nome profissional informado pelo cliente",
      "Dados de registro, se o cliente optar por incluir",
      "Escritório, telefone, e-mail ou endereço, quando necessário",
      "Texto de identificação, protocolo ou atendimento jurídico"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Conhecer outras opções de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo para escritório em BH", href: "/carimbo-para-escritorio-bh/" },
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" },
      { label: "Como pedir", href: "/como-pedir/" },
      { label: "Prazos e entrega", href: "/prazos-e-entrega/" }
    ],
    faq: [
      {
        question: "Quais dados posso colocar no carimbo de advogado?",
        answer:
          "Você pode incluir nome, dados profissionais informados pelo cliente, escritório, contato ou texto de identificação. O cliente deve conferir os dados antes da aprovação da arte."
      },
      {
        question: "Vocês fazem carimbo para escritório de advocacia?",
        answer:
          "Sim. O atendimento pode orientar modelos para advogados, escritórios e rotinas administrativas jurídicas."
      },
      {
        question: "Posso enviar os dados pelo WhatsApp?",
        answer:
          "Sim. Envie os dados pelo WhatsApp para receber orientação sobre modelo, layout e prazo."
      },
      {
        question: "Tem retirada em Venda Nova?",
        answer:
          "Sim. A retirada pode ser combinada na loja em Venda Nova, bairro Maria Helena, após confirmação do pedido."
      },
      {
        question: "Vocês entregam em BH?",
        answer:
          "Há entrega por motoboy em Belo Horizonte e região, mediante consulta de disponibilidade."
      }
    ]
  },
  {
    path: "/carimbo-psicologo-bh/",
    type: "profissional",
    eyebrow: "Carimbo profissional",
    title: "Carimbo para psicólogo em BH para consultórios e atendimento profissional",
    description:
      "Carimbos para psicólogos, consultórios e clínicas em Belo Horizonte, com dados profissionais informados pelo cliente e pedido orientado pelo WhatsApp.",
    seo: {
      title: "Carimbo para Psicólogo em BH",
      description:
        "Peça carimbo para psicólogo em BH com atendimento pelo WhatsApp, aprovação da arte, retirada em Venda Nova e entrega em Belo Horizonte.",
      canonicalPath: "/carimbo-psicologo-bh/"
    },
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo de psicólogo em BH.",
    primaryCta: "Pedir orçamento de carimbo para psicólogo",
    secondaryCta: { label: "Ver carimbo para clínica", href: "/carimbo-para-clinica-bh/" },
    trustPoints: defaultTrustPoints,
    intro: {
      title: "Carimbo para rotina de consultório e identificação",
      text:
        "Psicólogos podem solicitar carimbos para identificação profissional, documentos de atendimento e rotina de consultório. A BH Carimbos produz conforme os dados profissionais enviados e aprovados pelo cliente, sem definir regras de conselho."
    },
    indicatedFor: [
      "Psicólogos em atendimento particular",
      "Consultórios e clínicas multiprofissionais",
      "Profissionais que precisam identificar documentos",
      "Rotinas de recepção, atendimento e organização interna"
    ],
    stampData: [
      "Nome profissional informado pelo cliente",
      "Dados profissionais enviados pelo solicitante",
      "Consultório, clínica ou contato, quando necessário",
      "Informações complementares que caibam com boa leitura"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Ver carimbos profissionais em BH", href: "/carimbos-bh/" },
      { label: "Carimbo para clínica em BH", href: "/carimbo-para-clinica-bh/" },
      { label: "Carimbo médico em BH", href: "/carimbo-medico-bh/" },
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" },
      { label: "Como pedir", href: "/como-pedir/" }
    ],
    faq: [
      {
        question: "Quais dados entram no carimbo para psicólogo?",
        answer:
          "Entram os dados profissionais informados pelo cliente, como nome, identificação profissional e informações de contato quando desejado."
      },
      {
        question: "Vocês orientam regras do CRP?",
        answer:
          "Não. A BH Carimbos produz com os dados enviados e aprovados pelo cliente, sem definir regras específicas de conselho profissional."
      },
      {
        question: "Dá para pedir carimbo para consultório pelo WhatsApp?",
        answer:
          "Sim. O pedido pode começar pelo WhatsApp, com envio dos dados, orientação de modelo e aprovação da arte."
      },
      {
        question: "O carimbo pode ser automático?",
        answer:
          "Pode, conforme quantidade de dados e uso pretendido. O atendimento orienta o modelo mais adequado."
      }
    ]
  },
  {
    path: "/carimbo-nutricionista-bh/",
    type: "profissional",
    eyebrow: "Carimbo profissional",
    title: "Carimbo para nutricionista em BH com personalização profissional",
    description:
      "Atendimento para nutricionistas, clínicas e consultórios que precisam de carimbo profissional em Belo Horizonte, com arte conferida antes da produção.",
    seo: {
      title: "Carimbo para Nutricionista em BH",
      description:
        "Peça carimbo para nutricionista em BH pelo WhatsApp. Personalização com dados profissionais informados pelo cliente, retirada e entrega em BH.",
      canonicalPath: "/carimbo-nutricionista-bh/"
    },
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo de nutricionista em BH.",
    primaryCta: "Pedir orçamento de carimbo para nutricionista",
    secondaryCta: { label: "Ver carimbo para clínica", href: "/carimbo-para-clinica-bh/" },
    trustPoints: defaultTrustPoints,
    intro: {
      title: "Identificação para atendimento nutricional e documentos",
      text:
        "O carimbo para nutricionista pode ser usado em consultórios, clínicas e documentos de rotina profissional. O conteúdo é montado a partir dos dados profissionais informados pelo cliente e aprovado antes da produção."
    },
    indicatedFor: [
      "Nutricionistas em consultório próprio ou compartilhado",
      "Clínicas de saúde e atendimento multidisciplinar",
      "Profissionais que emitem documentos e orientações impressas",
      "Atendimentos que precisam de identificação clara"
    ],
    stampData: [
      "Nome profissional informado pelo cliente",
      "Dados profissionais enviados pelo solicitante",
      "Nome da clínica ou consultório, se desejado",
      "Contato, endereço ou informação complementar"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Central de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo para clínica em BH", href: "/carimbo-para-clinica-bh/" },
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" },
      { label: "Como pedir", href: "/como-pedir/" },
      { label: "Prazos e entrega", href: "/prazos-e-entrega/" }
    ],
    faq: [
      {
        question: "Vocês fazem carimbo para nutricionista?",
        answer:
          "Sim. A produção é feita com os dados profissionais informados pelo cliente e aprovação da arte antes da produção."
      },
      {
        question: "Vocês definem regras do CRN?",
        answer:
          "Não. O cliente deve informar e conferir os dados profissionais que deseja incluir no carimbo."
      },
      {
        question: "Posso colocar nome da clínica no carimbo?",
        answer:
          "Pode, se essa informação for enviada pelo cliente e couber no layout com boa leitura."
      },
      {
        question: "Tem entrega em Belo Horizonte?",
        answer:
          "Há entrega por motoboy em BH e região mediante consulta de disponibilidade."
      }
    ]
  },
  {
    path: "/carimbo-enfermagem-bh/",
    type: "profissional",
    eyebrow: "Carimbo enfermagem",
    title: "Carimbo para enfermagem em BH para uso profissional e identificação",
    description:
      "Carimbos para profissionais de enfermagem e técnicos de enfermagem em Belo Horizonte, com dados informados pelo cliente e atendimento pelo WhatsApp.",
    seo: {
      title: "Carimbo para Enfermagem em BH",
      description:
        "Peça carimbo para enfermagem em BH pelo WhatsApp. Atendimento para profissionais e técnicos, aprovação de arte, retirada e entrega em BH.",
      canonicalPath: "/carimbo-enfermagem-bh/"
    },
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo de enfermagem em BH.",
    primaryCta: "Pedir orçamento de carimbo para enfermagem",
    secondaryCta: { label: "Ver carimbo para clínica", href: "/carimbo-para-clinica-bh/" },
    trustPoints: defaultTrustPoints,
    intro: {
      title: "Carimbo para identificação em rotinas de saúde",
      text:
        "Profissionais e técnicos de enfermagem podem solicitar carimbos para identificação em documentos e rotinas de atendimento. A produção segue os dados profissionais informados pelo cliente, sem definição de regras do COREN pela BH Carimbos."
    },
    indicatedFor: [
      "Profissionais de enfermagem",
      "Técnicos de enfermagem",
      "Clínicas, hospitais e serviços de saúde",
      "Rotinas internas que exigem identificação profissional"
    ],
    stampData: [
      "Nome profissional informado pelo cliente",
      "Dados profissionais enviados pelo solicitante",
      "Função, setor ou unidade, quando desejado",
      "Contato ou identificação complementar"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Conhecer carimbos profissionais em BH", href: "/carimbos-bh/" },
      { label: "Carimbo para clínica em BH", href: "/carimbo-para-clinica-bh/" },
      { label: "Carimbo médico em BH", href: "/carimbo-medico-bh/" },
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" },
      { label: "Prazos e entrega", href: "/prazos-e-entrega/" }
    ],
    faq: [
      {
        question: "Vocês fazem carimbo para técnico de enfermagem?",
        answer:
          "Sim. O atendimento pode orientar a produção com os dados profissionais informados pelo cliente."
      },
      {
        question: "A BH Carimbos orienta regras do COREN?",
        answer:
          "Não. O cliente deve informar os dados que deseja incluir e conferir a arte antes da produção."
      },
      {
        question: "O pedido pode ser feito pelo WhatsApp?",
        answer:
          "Sim. Envie os dados pelo WhatsApp para receber orientação de modelo, layout e prazo."
      },
      {
        question: "É possível produção rápida?",
        answer:
          "Pode haver produção rápida sob consulta, conforme modelo, fila de produção e aprovação da arte."
      }
    ]
  },
  {
    path: "/carimbo-assinatura-bh/",
    type: "produto",
    eyebrow: "Carimbo de assinatura",
    title: "Carimbo de assinatura em BH para rotina administrativa",
    description:
      "Carimbo de assinatura para uso administrativo e rotinas internas, com orientação sobre modelo e atenção ao contexto de uso do documento.",
    seo: {
      title: "Carimbo de Assinatura em BH",
      description:
        "Peça carimbo de assinatura em BH para rotina administrativa. Atendimento pelo WhatsApp, aprovação de arte, retirada em Venda Nova e entrega em BH.",
      canonicalPath: "/carimbo-assinatura-bh/"
    },
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo de assinatura em BH.",
    primaryCta: "Pedir orçamento de carimbo de assinatura",
    secondaryCta: { label: "Ver carimbo para escritório", href: "/carimbo-para-escritorio-bh/" },
    trustPoints: defaultTrustPoints,
    intro: {
      title: "Praticidade para documentos repetitivos e processos internos",
      text:
        "O carimbo de assinatura pode ajudar em rotinas administrativas com repetição de identificação. A aceitação do carimbo de assinatura depende do tipo de documento, finalidade e regra interna de cada instituição."
    },
    indicatedFor: [
      "Rotinas administrativas internas",
      "Empresas com documentos repetitivos",
      "Escritórios que precisam padronizar identificação",
      "Processos em que o uso do carimbo é aceito pela própria instituição"
    ],
    stampData: [
      "Assinatura enviada pelo cliente em arquivo adequado",
      "Nome ou identificação complementar, se desejado",
      "Setor, empresa ou texto de apoio",
      "Tamanho e finalidade de uso para orientar o modelo"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Modelos de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo para escritório em BH", href: "/carimbo-para-escritorio-bh/" },
      { label: "Carimbo para empresa em BH", href: "/carimbo-empresa-bh/" },
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" },
      { label: "Como pedir", href: "/como-pedir/" }
    ],
    faq: [
      {
        question: "Carimbo de assinatura substitui assinatura manual?",
        answer:
          "Não é possível afirmar isso de forma geral. A aceitação depende do tipo de documento, finalidade e regra interna de cada instituição."
      },
      {
        question: "Como envio a assinatura?",
        answer:
          "Envie pelo WhatsApp uma imagem ou arquivo da assinatura para o atendimento avaliar a viabilidade e orientar o layout."
      },
      {
        question: "Pode incluir nome junto com a assinatura?",
        answer:
          "Pode, se o cliente desejar e o layout permitir boa leitura no tamanho escolhido."
      },
      {
        question: "Tem entrega em BH?",
        answer:
          "Há retirada em Venda Nova e entrega por motoboy em Belo Horizonte e região sob consulta."
      }
    ]
  },
  {
    path: "/carimbo-datador-bh/",
    type: "produto",
    eyebrow: "Carimbo datador",
    title: "Carimbo datador em BH para controle de documentos e protocolos",
    description:
      "Carimbo datador para recebimento, protocolo, almoxarifado, escritórios, clínicas e rotinas administrativas em Belo Horizonte.",
    seo: {
      title: "Carimbo Datador em BH",
      description:
        "Peça carimbo datador em BH para controle de documentos, protocolos e recebimentos. Atendimento pelo WhatsApp, retirada e entrega em BH.",
      canonicalPath: "/carimbo-datador-bh/"
    },
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo datador em BH.",
    primaryCta: "Pedir orçamento de carimbo datador",
    secondaryCta: { label: "Ver carimbo para empresa", href: "/carimbo-empresa-bh/" },
    trustPoints: ["Uso administrativo", "Pedido pelo WhatsApp", "Retirada em Venda Nova", "Entrega em BH"],
    intro: {
      title: "Controle de datas em processos e documentos",
      text:
        "O carimbo datador é usado em rotinas que precisam registrar datas de recebimento, conferência, protocolo ou movimentação interna. O atendimento orienta o modelo conforme o uso e a necessidade de texto adicional."
    },
    indicatedFor: [
      "Protocolo e recebimento de documentos",
      "Almoxarifado, estoque e expedição",
      "Escritórios, clínicas e empresas",
      "Rotinas que exigem controle por data"
    ],
    stampData: [
      "Texto de apoio como recebido, protocolado ou conferido",
      "Nome da empresa, setor ou unidade",
      "Formato de uso desejado",
      "Informações adicionais que caibam no layout"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Ver opções administrativas de carimbos", href: "/carimbos-bh/" },
      { label: "Carimbo para empresa em BH", href: "/carimbo-empresa-bh/" },
      { label: "Carimbo para escritório em BH", href: "/carimbo-para-escritorio-bh/" },
      { label: "Carimbo numerador em BH", href: "/carimbo-numerador-bh/" },
      { label: "Como pedir", href: "/como-pedir/" }
    ],
    faq: [
      {
        question: "Para que serve o carimbo datador?",
        answer:
          "Ele ajuda a registrar datas em documentos, protocolos, recebimentos e controles internos, conforme a rotina do cliente."
      },
      {
        question: "Pode ter texto junto com a data?",
        answer:
          "Pode, conforme o modelo e o espaço disponível. O atendimento orienta a composição antes da produção."
      },
      {
        question: "Empresas podem pedir pelo WhatsApp?",
        answer:
          "Sim. Envie a necessidade, texto desejado e dados da empresa para receber orientação."
      },
      {
        question: "Qual é o prazo?",
        answer:
          "A produção média é de 24 horas, mas pode variar conforme modelo, disponibilidade e aprovação da arte."
      }
    ]
  },
  {
    path: "/carimbo-numerador-bh/",
    type: "produto",
    eyebrow: "Carimbo numerador",
    title: "Carimbo numerador em BH para organização e controle sequencial",
    description:
      "Carimbo numerador para controle sequencial, arquivos, processos, protocolos e identificação interna em empresas e escritórios.",
    seo: {
      title: "Carimbo Numerador em BH",
      description:
        "Peça carimbo numerador em BH para controle sequencial, organização documental e protocolos. Atendimento pelo WhatsApp, retirada e entrega em BH.",
      canonicalPath: "/carimbo-numerador-bh/"
    },
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo numerador em BH.",
    primaryCta: "Pedir orçamento de carimbo numerador",
    secondaryCta: { label: "Ver carimbo datador", href: "/carimbo-datador-bh/" },
    trustPoints: ["Controle sequencial", "Uso administrativo", "Atendimento pelo WhatsApp", "Entrega em BH"],
    intro: {
      title: "Numeração para processos, arquivos e controles internos",
      text:
        "O carimbo numerador auxilia rotinas que precisam marcar sequências, documentos, protocolos ou arquivos. A escolha do modelo depende do volume de uso e da forma como a numeração será aplicada."
    },
    indicatedFor: [
      "Controle de processos e protocolos",
      "Arquivos físicos e organização documental",
      "Setores administrativos e financeiros",
      "Empresas que usam identificação sequencial"
    ],
    stampData: [
      "Finalidade da numeração",
      "Texto adicional, se necessário",
      "Setor, empresa ou identificação interna",
      "Frequência de uso para orientar o modelo"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Central de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo datador em BH", href: "/carimbo-datador-bh/" },
      { label: "Carimbo para empresa em BH", href: "/carimbo-empresa-bh/" },
      { label: "Carimbo para escritório em BH", href: "/carimbo-para-escritorio-bh/" },
      { label: "Prazos e entrega", href: "/prazos-e-entrega/" }
    ],
    faq: [
      {
        question: "Para que serve o carimbo numerador?",
        answer:
          "Ele é usado para marcar sequências em documentos, processos, protocolos, arquivos ou controles internos."
      },
      {
        question: "O atendimento ajuda a escolher o modelo?",
        answer:
          "Sim. Informe a finalidade e a frequência de uso para o atendimento orientar o modelo mais adequado."
      },
      {
        question: "Pode ter texto junto da numeração?",
        answer:
          "Pode haver texto auxiliar conforme modelo e espaço disponível. A composição é confirmada antes da produção."
      },
      {
        question: "Tem retirada em Venda Nova?",
        answer:
          "Sim. A retirada pode ser combinada na loja em Venda Nova após confirmação do pedido."
      }
    ]
  },
  {
    path: "/carimbo-para-clinica-bh/",
    type: "servico",
    eyebrow: "Carimbo para clínica",
    title: "Carimbo para clínica em BH com modelos para rotina de atendimento",
    description:
      "Carimbos para clínicas médicas, odontológicas, psicológicas, estéticas, fisioterapia e saúde em geral, com atendimento pelo WhatsApp.",
    seo: {
      title: "Carimbo para Clínica em BH",
      description:
        "Peça carimbo para clínica em BH para recepção, documentos e profissionais de saúde. Atendimento pelo WhatsApp, retirada e entrega em BH.",
      canonicalPath: "/carimbo-para-clinica-bh/"
    },
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo para clínica em BH.",
    primaryCta: "Pedir orçamento de carimbo para clínica",
    secondaryCta: { label: "Ver carimbo médico", href: "/carimbo-medico-bh/" },
    trustPoints: defaultTrustPoints,
    intro: {
      title: "Carimbos para recepção, profissionais e documentos de clínica",
      text:
        "Clínicas podem precisar de carimbos para recepção, identificação profissional, dados da unidade, conferências e documentos internos. A produção usa dados da clínica e dados profissionais informados pelo cliente."
    },
    indicatedFor: [
      "Clínicas médicas, odontológicas e psicológicas",
      "Clínicas de estética, fisioterapia e saúde em geral",
      "Recepções e setores administrativos",
      "Profissionais que atendem dentro da clínica"
    ],
    stampData: [
      "Nome da clínica, unidade ou setor",
      "CNPJ, endereço ou contato, quando necessário",
      "Dados profissionais informados pelo cliente",
      "Textos de atendimento, recebido, conferido ou identificação"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Conhecer outras opções de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo médico em BH", href: "/carimbo-medico-bh/" },
      { label: "Carimbo para psicólogo em BH", href: "/carimbo-psicologo-bh/" },
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" },
      { label: "Como pedir", href: "/como-pedir/" }
    ],
    faq: [
      {
        question: "Vocês fazem carimbo para clínica?",
        answer:
          "Sim. O atendimento orienta carimbos para recepção, documentos internos, identificação da clínica e profissionais."
      },
      {
        question: "Pode incluir dados da clínica e do profissional?",
        answer:
          "Pode, desde que os dados sejam informados pelo cliente e caibam no layout com boa leitura."
      },
      {
        question: "Vocês inventam regras profissionais?",
        answer:
          "Não. A BH Carimbos produz com os dados enviados e aprovados pelo cliente, sem definir regras de conselhos profissionais."
      },
      {
        question: "Tem entrega para clínicas em BH?",
        answer:
          "Há entrega por motoboy em Belo Horizonte e região, conforme disponibilidade e confirmação pelo atendimento."
      }
    ]
  },
  {
    path: "/carimbo-para-escritorio-bh/",
    type: "servico",
    eyebrow: "Carimbo para escritório",
    title: "Carimbo para escritório em BH para documentos e rotina administrativa",
    description:
      "Carimbos para escritórios administrativos, contabilidade, advocacia, imobiliárias e prestadores de serviço em Belo Horizonte.",
    seo: {
      title: "Carimbo para Escritório em BH",
      description:
        "Peça carimbo para escritório em BH para documentos, protocolos e identificação administrativa. Atendimento pelo WhatsApp, retirada e entrega em BH.",
      canonicalPath: "/carimbo-para-escritorio-bh/"
    },
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo para escritório em BH.",
    primaryCta: "Pedir orçamento de carimbo para escritório",
    secondaryCta: { label: "Ver carimbo para empresa", href: "/carimbo-empresa-bh/" },
    trustPoints: defaultTrustPoints,
    intro: {
      title: "Carimbos para organizar documentos e atendimento",
      text:
        "Escritórios usam carimbos para protocolos, identificação, documentos internos, recibos, contratos e rotinas administrativas. O atendimento ajuda a escolher entre modelo automático, madeira ou composição personalizada."
    },
    indicatedFor: [
      "Escritórios administrativos e contábeis",
      "Advocacia, imobiliárias e prestadores de serviço",
      "Recepção, financeiro e arquivo",
      "Rotinas com documentos recorrentes"
    ],
    stampData: [
      "Nome do escritório, empresa ou profissional",
      "CNPJ, endereço, telefone ou e-mail",
      "Texto de protocolo, recebido, pago ou conferido",
      "Setor, departamento ou identificação interna"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Modelos de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo para empresa em BH", href: "/carimbo-empresa-bh/" },
      { label: "Carimbo CNPJ em BH", href: "/carimbo-cnpj-bh/" },
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" },
      { label: "Carimbo datador em BH", href: "/carimbo-datador-bh/" }
    ],
    faq: [
      {
        question: "Qual carimbo é indicado para escritório?",
        answer:
          "Depende do uso. Para uso frequente, o automático costuma ser prático; para textos específicos, o atendimento avalia o melhor modelo."
      },
      {
        question: "Pode fazer carimbo de protocolo?",
        answer:
          "Pode. Envie o texto desejado, setor e dados do escritório para orientação de layout."
      },
      {
        question: "Vocês atendem escritórios em BH?",
        answer:
          "Sim. O pedido pode ser feito pelo WhatsApp, com retirada em Venda Nova ou entrega por motoboy sob consulta."
      },
      {
        question: "É possível incluir CNPJ?",
        answer:
          "Sim. CNPJ, razão social, endereço e contato podem entrar quando enviados pelo cliente."
      }
    ]
  },
  {
    path: "/carimbo-urgente-bh/",
    type: "urgencia",
    eyebrow: "Carimbo urgente",
    title: "Carimbo urgente em BH com atendimento pelo WhatsApp",
    description:
      "Consulta de disponibilidade para produção rápida de carimbo em Belo Horizonte, com pedido pelo WhatsApp, arte conferida e prazo confirmado pelo atendimento.",
    seo: {
      title: "Carimbo Urgente em BH sob Consulta",
      description:
        "Consulte carimbo urgente em BH pelo WhatsApp. Produção no mesmo dia ou até 60 minutos pode ser possível conforme modelo, fila e disponibilidade.",
      canonicalPath: "/carimbo-urgente-bh/"
    },
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de consultar a disponibilidade para fazer um carimbo urgente em BH.",
    primaryCta: "Consultar disponibilidade para carimbo urgente",
    secondaryCta: { label: "Ver carimbo na hora", href: "/carimbo-na-hora-bh/" },
    trustPoints: ["Urgência sob consulta", "Pedido pelo WhatsApp", "Retirada em Venda Nova", "Entrega em BH sob consulta"],
    intro: {
      title: "Atendimento rápido com confirmação antes da promessa",
      text:
        "A página de carimbo urgente é para quem precisa resolver o pedido com rapidez, mas o prazo sempre depende de modelo, fila de produção, dados enviados e aprovação da arte. Produção no mesmo dia ou em até 60 minutos pode ser possível sob consulta."
    },
    indicatedFor: [
      "Quem perdeu ou danificou um carimbo de uso diário",
      "Empresas com demanda documental próxima",
      "Profissionais que precisam de identificação com rapidez",
      "Pedidos simples com dados já conferidos pelo cliente"
    ],
    stampData: [
      "Texto completo e revisado",
      "Nome, empresa, CNPJ ou dados profissionais",
      "Logotipo, somente se houver arquivo pronto e viável",
      "Forma de retirada ou endereço para consulta de entrega"
    ],
    process: [
      "Envie uma mensagem informando que precisa de carimbo urgente.",
      "Mande os dados completos e indique se já sabe o modelo desejado.",
      "Aguarde confirmação real de prazo, fila e disponibilidade.",
      "Aprove a arte rapidamente para liberar a produção."
    ],
    delivery: defaultDelivery,
    serviceArea: bhServiceArea,
    relatedLinks: [
      { label: "Ver todos os tipos de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo na hora em BH", href: "/carimbo-na-hora-bh/" },
      { label: "Carimbo em BH", href: "/carimbo-em-bh/" },
      { label: "Contato", href: "/contato/" },
      { label: "Prazos e entrega", href: "/prazos-e-entrega/" },
      { label: "Consultar dúvidas sobre prazos e entrega", href: "/perguntas-frequentes/" }
    ],
    faq: [
      {
        question: "Vocês fazem carimbo urgente em BH?",
        answer:
          "Há possibilidade de produção rápida sob consulta, conforme modelo, fila de produção, dados enviados e aprovação da arte."
      },
      {
        question: "Carimbo em até 60 minutos é garantido?",
        answer:
          "Não. Produção no mesmo dia ou em até 60 minutos pode ser possível sob consulta, conforme modelo, fila e disponibilidade."
      },
      {
        question: "Como agilizar o atendimento?",
        answer:
          "Envie os dados completos e revisados, responda rapidamente à aprovação da arte e confirme retirada ou entrega."
      },
      {
        question: "Entrega urgente é garantida?",
        answer:
          "Não. A entrega depende de motoboy, endereço, horário e disponibilidade confirmada pelo atendimento."
      }
    ]
  },
  {
    path: "/carimbos-pampulha/",
    type: "localidade",
    eyebrow: "Atendimento Pampulha",
    title: "Carimbos para clientes da Pampulha com pedido pelo WhatsApp",
    description:
      "Atendimento para clientes da Pampulha que precisam de carimbos personalizados, com pedido remoto e entrega conforme disponibilidade.",
    seo: {
      title: "Carimbos Pampulha com Entrega sob Consulta",
      description:
        "Carimbos para clientes da Pampulha em BH com pedido pelo WhatsApp, produção em Venda Nova e entrega por motoboy conforme disponibilidade.",
      canonicalPath: "/carimbos-pampulha/"
    },
    whatsappMessage:
      "Olá! Vim pelo site e gostaria de pedir um carimbo para atendimento na região da Pampulha.",
    primaryCta: "Consultar carimbo para Pampulha",
    secondaryCta: { label: "Ver prazos e entrega", href: "/prazos-e-entrega/" },
    trustPoints: ["Pedido pelo WhatsApp", "Entrega sob consulta", "Produção em BH", "Retirada em Venda Nova"],
    intro: {
      title: "Atendimento para a Pampulha sem afirmar loja fora de Venda Nova",
      text:
        "Clientes da Pampulha podem pedir carimbos pelo WhatsApp e consultar entrega por motoboy. A loja física da BH Carimbos fica em Venda Nova, no bairro Maria Helena, com retirada também disponível."
    },
    indicatedFor: [
      "Empresas e profissionais localizados na Pampulha",
      "Clínicas, escritórios e comércios da região",
      "Clientes que preferem resolver o pedido pelo WhatsApp",
      "Quem precisa consultar entrega por motoboy em BH"
    ],
    stampData: [
      "Nome, empresa, CNPJ ou texto personalizado",
      "Dados profissionais informados pelo cliente",
      "Endereço ou contato, se for entrar no carimbo",
      "Informação sobre retirada ou entrega desejada"
    ],
    process: defaultProcess,
    delivery: defaultDelivery,
    serviceArea: locationServiceArea,
    relatedLinks: [
      { label: "Central de carimbos em BH", href: "/carimbos-bh/" },
      { label: "Carimbo em BH", href: "/carimbo-em-bh/" },
      { label: "Carimbo personalizado em BH", href: "/carimbo-personalizado-bh/" },
      { label: "Prazos e entrega", href: "/prazos-e-entrega/" },
      { label: "Contato", href: "/contato/" },
      { label: "Ver dúvidas sobre modelos de carimbo", href: "/perguntas-frequentes/" }
    ],
    faq: [
      {
        question: "Vocês têm loja na Pampulha?",
        answer:
          "Não há afirmação de loja física na Pampulha. A loja fica em Venda Nova, e o atendimento para a Pampulha pode ser feito pelo WhatsApp com entrega sob consulta."
      },
      {
        question: "Posso pedir da Pampulha pelo WhatsApp?",
        answer:
          "Sim. Envie os dados pelo WhatsApp para receber orientação, aprovar a arte e consultar retirada ou entrega."
      },
      {
        question: "A entrega para Pampulha é garantida?",
        answer:
          "A entrega depende de disponibilidade, endereço e horário. O atendimento confirma a possibilidade antes de finalizar."
      },
      {
        question: "Quais tipos de carimbo posso pedir?",
        answer:
          "Você pode solicitar carimbos personalizados, CNPJ, automáticos, profissionais e outros modelos conforme orientação do atendimento."
      }
    ]
  }
] as const satisfies CommercialPage[];

export function getCommercialPage(path: string): CommercialPage | undefined {
  return commercialPages.find((page) => page.path === path);
}

export function getCommercialHubPage(path: string): CommercialHubPage | undefined {
  return path === commercialHubPage.path ? commercialHubPage : undefined;
}

export function getCommercialPageSchemas(page: CommercialPage) {
  const pageUrl = getCanonicalUrl(page.path);

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: siteConfig.domain
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Carimbos em BH",
          item: getCanonicalUrl("/carimbo-em-bh/")
        },
        {
          "@type": "ListItem",
          position: 3,
          name: page.title,
          item: pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      description: page.description,
      provider: {
        "@type": "LocalBusiness",
        name: siteConfig.name,
        url: siteConfig.domain,
        telephone: businessInfo.whatsappDisplay,
        address: {
          "@type": "PostalAddress",
          streetAddress: businessInfo.address.street,
          addressLocality: businessInfo.address.city,
          addressRegion: businessInfo.address.state,
          addressCountry: businessInfo.address.country
        }
      },
      areaServed: {
        "@type": "City",
        name: "Belo Horizonte"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    }
  ];
}

export function getCommercialHubPageSchemas(page: CommercialHubPage) {
  const pageUrl = getCanonicalUrl(page.path);

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: siteConfig.domain
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.title,
          item: pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      description: page.description,
      provider: {
        "@type": "LocalBusiness",
        name: siteConfig.name,
        url: siteConfig.domain,
        telephone: businessInfo.whatsappDisplay,
        address: {
          "@type": "PostalAddress",
          streetAddress: businessInfo.address.street,
          addressLocality: businessInfo.address.city,
          addressRegion: businessInfo.address.state,
          addressCountry: businessInfo.address.country
        }
      },
      areaServed: {
        "@type": "City",
        name: "Belo Horizonte"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer
        }
      }))
    }
  ];
}
