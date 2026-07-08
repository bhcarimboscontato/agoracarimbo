import type { WhatsAppMessageKey } from "@data/whatsapp";

export const homeHero = {
  eyebrow: "Carimbos em Belo Horizonte",
  title: "Carimbos personalizados em BH com pedido rápido pelo WhatsApp",
  subtitle:
    "Envie os dados do seu carimbo, aprove o layout e escolha retirada no local ou entrega por motoboy em Belo Horizonte e região.",
  support: "Atendimento local, produção rápida e suporte direto pelo WhatsApp.",
  primaryCta: {
    label: "Pedir orçamento pelo WhatsApp",
    message: "general" satisfies WhatsAppMessageKey
  },
  secondaryCta: {
    label: "Ver modelos de carimbo",
    href: "#produtos"
  },
  bullets: ["Pedido pelo WhatsApp", "Aprovação da arte", "Retirada ou entrega em BH", "Nota fiscal"]
} as const;

export const benefits = [
  {
    title: "Pedido pelo WhatsApp",
    description: "Envie os dados e receba orientação direta para escolher o modelo.",
    icon: "icon-whatsapp"
  },
  {
    title: "Produção rápida",
    description: "Prazo ágil conforme modelo, fila de produção e confirmação do atendimento.",
    icon: "icon-fast"
  },
  {
    title: "Entrega por motoboy",
    description: "Retirada no local ou entrega em Belo Horizonte e região.",
    icon: "icon-delivery"
  },
  {
    title: "Aprovação da arte",
    description: "Confira o layout antes da produção do carimbo.",
    icon: "icon-check"
  },
  {
    title: "Empresas e profissionais",
    description: "Atendimento para empresas, médicos, advogados e profissionais liberais.",
    icon: "icon-company"
  }
] as const;

export const paymentMethods = {
  title: "Pix, crédito ou débito",
  description: "Formas de pagamento práticas para pedidos comerciais e profissionais.",
  icon: "icon-card",
  note: "Transações seguras e protegidas.",
  logos: [
    {
      name: "Pix",
      src: "/assets/icones/icon-pix.png",
      width: 180,
      height: 64
    },
    {
      name: "Visa",
      src: "/assets/icones/icon-visa.png",
      width: 180,
      height: 58
    },
    {
      name: "Mastercard",
      src: "/assets/icones/icon-mastercard.png",
      width: 120,
      height: 74
    },
    {
      name: "Elo",
      src: "/assets/icones/icon-elo.png",
      width: 120,
      height: 80
    }
  ]
} as const;

export const featuredProducts = [
  {
    id: "carimbo-cnpj",
    category: "Empresa",
    categoryIcon: "icon-company",
    badge: "Mais escolhido",
    badgeIcon: "icon-stamp",
    tone: "orange",
    layout: "featured",
    title: "Carimbo CNPJ",
    description: "Modelo indicado para razão social, CNPJ, endereço e dados comerciais.",
    image: "/assets/imagens-produtos/nykon304.jpg",
    alt: "Carimbo automático Nykon usado para dados de empresa e CNPJ",
    href: "/carimbo-cnpj-bh/",
    cta: "Quero um carimbo CNPJ",
    message: "cnpj" satisfies WhatsAppMessageKey,
    highlights: ["Dados comerciais organizados", "Uso administrativo", "Atendimento com nota fiscal"]
  },
  {
    id: "carimbo-automatico",
    category: "Automático",
    categoryIcon: "icon-stamp",
    badge: "Praticidade",
    badgeIcon: "icon-fast",
    tone: "pink",
    layout: "featured",
    title: "Carimbo automático",
    description: "Prático para uso frequente em escritório, recepção e rotina administrativa.",
    image: "/assets/imagens-produtos/nykon302.jpg",
    alt: "Carimbo automático Nykon 302",
    href: "/carimbo-automatico-bh/",
    cta: "Pedir carimbo automático",
    message: "general" satisfies WhatsAppMessageKey,
    highlights: ["Agilidade no dia a dia", "Formato automático", "Pedido orientado pelo WhatsApp"]
  },
  {
    id: "carimbo-medico",
    category: "Profissional",
    categoryIcon: "icon-medical",
    badge: "Profissional",
    badgeIcon: "icon-medical",
    tone: "blue",
    layout: "standard",
    title: "Carimbo médico",
    description: "Opção para profissionais de saúde com dados profissionais e registro.",
    image: "/assets/imagens-produtos/nykon321d.jpg",
    alt: "Modelo de carimbo automático para uso profissional",
    href: "/carimbo-medico-bh/",
    cta: "Pedir carimbo médico",
    message: "medical" satisfies WhatsAppMessageKey,
    highlights: []
  },
  {
    id: "carimbo-empresa",
    category: "Empresa",
    categoryIcon: "icon-company",
    badge: "Empresa",
    badgeIcon: "icon-company",
    tone: "blue",
    layout: "standard",
    title: "Carimbo para empresa",
    description: "Carimbos para setores administrativos, financeiro, estoque e atendimento.",
    image: "/assets/imagens-produtos/nykon303.jpg",
    alt: "Carimbo automático Nykon para empresas",
    href: "/carimbo-empresa-bh/",
    cta: "Solicitar para empresa",
    message: "general" satisfies WhatsAppMessageKey,
    highlights: []
  },
  {
    id: "carimbo-madeira",
    category: "Madeira",
    categoryIcon: "icon-stamp",
    badge: "Tradicional",
    badgeIcon: "icon-stamp",
    tone: "brown",
    layout: "standard",
    title: "Carimbo de madeira",
    description: "Modelo tradicional para uso eventual, artesanato, embalagem e identificação.",
    image: "/assets/imagens-gerais/carimbo-madeira1.jpg",
    alt: "Carimbo de madeira personalizado",
    href: "/carimbo-madeira-bh/",
    cta: "Pedir carimbo de madeira",
    message: "wood" satisfies WhatsAppMessageKey,
    highlights: []
  },
  {
    id: "carimbo-personalizado",
    category: "Personalizado",
    categoryIcon: "icon-stamp",
    badge: "Exclusivo",
    badgeIcon: "icon-stamp",
    tone: "orange",
    layout: "wide",
    title: "Carimbo personalizado",
    description: "Produção com texto, dados, logotipo ou composição conforme necessidade.",
    image: "/assets/imagens-gerais/carimbo-kraft1.jpg",
    alt: "Carimbo personalizado aplicado em papel kraft",
    href: "/carimbo-personalizado-bh/",
    cta: "Fazer personalizado",
    message: "custom" satisfies WhatsAppMessageKey,
    highlights: ["Texto, dados ou logotipo", "Identidade da sua marca", "Aprovação antes da produção"]
  }
] as const;

export const processSteps = [
  {
    icon: "icon-whatsapp",
    title: "Envie os dados pelo WhatsApp",
    description: "Informe nome, profissão, CNPJ, logotipo ou detalhes que devem entrar no carimbo."
  },
  {
    icon: "icon-file-invoice",
    title: "Aprove o layout do carimbo",
    description: "O atendimento orienta o modelo e confirma a arte antes da produção."
  },
  {
    icon: "icon-delivery",
    title: "Retire ou receba por motoboy",
    description: "Escolha retirada na loja em Venda Nova ou consulte entrega em BH e região."
  }
] as const;

export const processAssurances = [
  {
    icon: "icon-fast",
    title: "Atendimento rápido",
    description: "Resposta ágil por WhatsApp."
  },
  {
    icon: "icon-check",
    title: "Arte aprovada por você",
    description: "Só produzimos após sua confirmação."
  },
  {
    icon: "icon-file-invoice",
    title: "Seus dados protegidos",
    description: "Informações usadas apenas para o pedido."
  },
  {
    icon: "icon-map-pin",
    title: "Retirada em Venda Nova",
    description: "Ou entrega em BH e região."
  }
] as const;

export const trustItems = [
  "Atendimento local em Belo Horizonte",
  "Aprovação da arte antes da produção",
  "Emite nota fiscal",
  "Aceita Pix, crédito e débito",
  "Trabalha com marcas como Trodat, Colop, Nykon ou similares",
  "Mais de 40 anos de mercado"
] as const;

export const homeFaqs = [
  {
    question: "Quanto tempo demora para fazer um carimbo?",
    answer:
      "O prazo médio informado é de 24 horas para produção. Em alguns casos, pode haver atendimento mais rápido conforme modelo e demanda."
  },
  {
    question: "Posso pedir pelo WhatsApp?",
    answer:
      "Sim. Você pode enviar os dados pelo WhatsApp e receber orientação para escolher o modelo ideal."
  },
  {
    question: "Vocês entregam em Belo Horizonte?",
    answer:
      "Sim. A BH Carimbos trabalha com retirada no local e entrega por motoboy em Belo Horizonte e região, mediante consulta."
  },
  {
    question: "Posso aprovar a arte antes da produção?",
    answer: "Sim. A aprovação do layout antes da produção faz parte do atendimento."
  },
  {
    question: "Vocês fazem carimbo CNPJ?",
    answer: "Sim. É possível solicitar carimbo CNPJ com razão social, CNPJ, endereço e outros dados comerciais."
  },
  {
    question: "Quais formas de pagamento?",
    answer: "As formas informadas são Pix, cartão de crédito e cartão de débito."
  },
  {
    question: "Vocês emitem nota fiscal?",
    answer: "Sim. A empresa emite nota fiscal."
  }
] as const;

export const servedRegions = [
  "Pampulha",
  "Venda Nova",
  "Planalto",
  "Castelo",
  "Cidade Nova",
  "São Francisco",
  "Floresta",
  "Centro",
  "Savassi",
  "Buritis",
  "Belo Horizonte e região"
] as const;
