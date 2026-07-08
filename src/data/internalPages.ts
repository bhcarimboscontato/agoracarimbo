import { businessInfo } from "@data/site";
import type { WhatsAppMessageKey } from "@data/whatsapp";

export type InternalPageItem = {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  alt?: string;
  tags?: string[];
  bullets?: string[];
  benefits?: string[];
  ctaLabel?: string;
  href?: string;
  whatsappMessage?: WhatsAppMessageKey;
  whatsappText?: string;
};

export type InternalPageSection = {
  eyebrow?: string;
  title: string;
  description?: string;
  variant?: "cards" | "steps" | "feature" | "split" | "products";
  items: InternalPageItem[];
};

export type InternalPage = {
  path: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
  };
  heroImage?: {
    src: string;
    alt: string;
  };
  primaryCta?: {
    label: string;
    message: WhatsAppMessageKey;
  };
  finalCta?: {
    title: string;
    text: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  intro?: string;
  sections: InternalPageSection[];
  contact?: boolean;
};

export const internalPages = [
  {
    path: "/nossos-produtos/",
    eyebrow: "Modelos principais",
    title: "Produtos e modelos de carimbos em BH",
    subtitle:
      "Conheça os principais modelos de carimbos personalizados para empresas, profissionais liberais e uso pessoal. Envie sua necessidade pelo WhatsApp e receba orientação para escolher o modelo ideal.",
    seo: {
      title: "Produtos e Modelos de Carimbos em BH",
      description:
        "Conheça modelos de carimbos Nykon e opções personalizadas para empresas, profissionais liberais e uso pessoal em Belo Horizonte. Peça pelo WhatsApp.",
      canonicalPath: "/nossos-produtos/"
    },
    heroImage: {
      src: "/assets/imagens-gerais/banner-produtos.webp",
      alt: "Modelos de carimbos personalizados da BH Carimbos"
    },
    primaryCta: {
      label: "Pedir orçamento pelo WhatsApp",
      message: "general"
    },
    intro:
      "A escolha do modelo depende do uso, frequência, quantidade de dados e finalidade do carimbo. Se você ainda não sabe qual opção pedir, envie sua necessidade pelo WhatsApp para receber orientação.",
    sections: [
      {
        eyebrow: "Linha Nykon",
        title: "Modelos reais para pedidos personalizados",
        description: "Veja opções disponíveis nos assets do projeto e use o WhatsApp para confirmar o modelo mais adequado para seu pedido.",
        variant: "products",
        items: [
          {
            title: "Nykon 302",
            description: "Modelo automático compacto para uso frequente em escritórios, recepções, atendimento e rotina administrativa.",
            image: "/assets/imagens-produtos/nykon302.jpg",
            alt: "Carimbo automático Nykon 302",
            tags: ["Modelo automático", "Rotina administrativa", "Uso frequente"],
            bullets: ["Empresas", "Profissionais liberais", "Documentos e identificação"],
            benefits: ["Uso prático no dia a dia", "Boa leitura", "Ideal para pedidos personalizados"],
            ctaLabel: "Pedir orientação sobre Nykon 302",
            whatsappText: "Olá! Vim pelo site e gostaria de pedir orientação sobre o modelo Nykon 302."
          },
          {
            title: "Nykon 303",
            description: "Modelo automático para carimbos personalizados de uso profissional, com boa presença visual e aplicação prática no dia a dia.",
            image: "/assets/imagens-produtos/nykon303.jpg",
            alt: "Carimbo automático Nykon 303",
            tags: ["Uso profissional", "Personalizado", "Atendimento"],
            bullets: ["Empresas", "Profissionais liberais", "Uso administrativo"],
            benefits: ["Aplicação prática", "Boa presença visual", "Pedido orientado pelo WhatsApp"],
            ctaLabel: "Pedir orientação sobre Nykon 303",
            whatsappText: "Olá! Vim pelo site e gostaria de pedir orientação sobre o modelo Nykon 303."
          },
          {
            title: "Nykon 304",
            description: "Modelo automático indicado para empresas, CNPJ, razão social, endereço e dados comerciais.",
            image: "/assets/imagens-produtos/nykon304.jpg",
            alt: "Carimbo automático Nykon 304",
            tags: ["Empresas", "CNPJ", "Dados comerciais"],
            bullets: ["Razão social", "CNPJ", "Endereço e contato"],
            benefits: ["Organiza dados comerciais", "Uso recorrente", "Atendimento com nota fiscal"],
            ctaLabel: "Pedir orientação sobre Nykon 304",
            whatsappText: "Olá! Vim pelo site e gostaria de pedir orientação sobre o modelo Nykon 304."
          },
          {
            title: "Nykon 321D",
            description: "Modelo indicado para aplicações profissionais que exigem dados organizados e boa legibilidade.",
            image: "/assets/imagens-produtos/nykon321d.jpg",
            alt: "Carimbo Nykon 321D para aplicação profissional",
            tags: ["Uso profissional", "Dados organizados", "Boa legibilidade"],
            bullets: ["Profissionais liberais", "Rotina administrativa", "Identificação"],
            benefits: ["Composição clara", "Uso profissional", "Modelo sob orientação do atendimento"],
            ctaLabel: "Pedir orientação sobre Nykon 321D",
            whatsappText: "Olá! Vim pelo site e gostaria de pedir orientação sobre o modelo Nykon 321D."
          },
          {
            title: "Nykon 321N",
            description: "Modelo profissional da linha Nykon, indicado para demandas administrativas e uso recorrente.",
            image: "/assets/imagens-produtos/nykon321n.jpg",
            alt: "Carimbo Nykon 321N para demandas administrativas",
            tags: ["Linha Nykon", "Uso recorrente", "Administrativo"],
            bullets: ["Empresas", "Setores internos", "Profissionais"],
            benefits: ["Ajuda na rotina", "Boa organização visual", "Consulte o modelo ideal"],
            ctaLabel: "Pedir orientação sobre Nykon 321N",
            whatsappText: "Olá! Vim pelo site e gostaria de pedir orientação sobre o modelo Nykon 321N."
          },
          {
            title: "Nykon 355",
            description: "Modelo indicado para pedidos que exigem mais presença visual e composição personalizada.",
            image: "/assets/imagens-produtos/nykon355.jpg",
            alt: "Carimbo Nykon 355 para composição personalizada",
            tags: ["Mais presença", "Personalizado", "Empresas"],
            bullets: ["Dados comerciais", "Composição personalizada", "Pedidos com mais informação"],
            benefits: ["Destaque visual", "Boa leitura", "Orientação antes da produção"],
            ctaLabel: "Pedir orientação sobre Nykon 355",
            whatsappText: "Olá! Vim pelo site e gostaria de pedir orientação sobre o modelo Nykon 355."
          }
        ]
      },
      {
        eyebrow: "Orientação",
        title: "Não sabe qual modelo escolher?",
        description:
          "Envie pelo WhatsApp os dados que devem entrar no carimbo e o atendimento orienta o modelo mais adequado para sua necessidade.",
        variant: "split",
        items: [
          {
            title: "Atendimento pelo WhatsApp",
            description: "Informe se o carimbo será usado em empresa, consultório, escritório, documentos ou identificação. A equipe ajuda a escolher o modelo sem você precisar saber especificações técnicas.",
            icon: "icon-whatsapp"
          }
        ]
      }
    ]
  },
  {
    path: "/servicos/",
    eyebrow: "Serviços",
    title: "Serviços de carimbos em Belo Horizonte",
    subtitle:
      "Atendimento para quem precisa de carimbo personalizado, carimbo profissional, carimbo para empresa ou produção rápida com retirada e entrega em BH.",
    seo: {
      title: "Serviços de Carimbos em Belo Horizonte",
      description:
        "Serviços de carimbos em Belo Horizonte para empresas, profissionais liberais e pessoas físicas, com pedido pelo WhatsApp e entrega em BH.",
      canonicalPath: "/servicos/"
    },
    heroImage: {
      src: "/assets/imagens-gerais/banner-servico.webp",
      alt: "Serviços de carimbos personalizados em Belo Horizonte"
    },
    primaryCta: {
      label: "Solicitar atendimento pelo WhatsApp",
      message: "general"
    },
    finalCta: {
      title: "Precisa de um carimbo em Belo Horizonte?",
      text: "Fale com o atendimento pelo WhatsApp e envie os dados do seu carimbo para receber orientação."
    },
    intro:
      "A BH Carimbos atende empresas, profissionais liberais e pessoas físicas que precisam de carimbos personalizados com orientação rápida pelo WhatsApp, aprovação da arte e opção de retirada ou entrega por motoboy em Belo Horizonte e região.",
    sections: [
      {
        eyebrow: "Soluções",
        title: "Soluções para diferentes necessidades",
        description: "Cada atendimento começa pelo WhatsApp, com envio dos dados e orientação conforme o uso do carimbo.",
        variant: "cards",
        items: [
          {
            title: "Carimbos personalizados",
            description: "Produção de carimbos com texto, dados, logotipo ou composição conforme a necessidade do cliente.",
            icon: "icon-stamp"
          },
          {
            title: "Carimbos para empresas",
            description: "Modelos para razão social, CNPJ, endereço, setor administrativo, financeiro, estoque e atendimento.",
            icon: "icon-company"
          },
          {
            title: "Carimbos para profissionais liberais",
            description: "Atendimento para médicos, advogados, psicólogos, nutricionistas, técnicos de enfermagem e outros profissionais.",
            icon: "icon-medical"
          },
          {
            title: "Carimbo com entrega em BH",
            description: "Pedidos pelo WhatsApp com possibilidade de retirada em Venda Nova ou entrega por motoboy em Belo Horizonte e região.",
            icon: "icon-delivery"
          },
          {
            title: "Aprovação da arte antes da produção",
            description: "Antes da produção, o atendimento confirma o layout para reduzir erros e garantir que os dados estejam corretos.",
            icon: "icon-check"
          },
          {
            title: "Produção rápida sob consulta",
            description: "Há possibilidade de produção no mesmo dia conforme modelo, demanda e confirmação pelo atendimento.",
            icon: "icon-fast"
          }
        ]
      },
      {
        eyebrow: "Atendimento",
        title: "Como funciona o atendimento",
        variant: "steps",
        items: [
          {
            title: "Envie os dados do carimbo pelo WhatsApp",
            description: "Informe os dados que devem aparecer no carimbo para iniciar o atendimento."
          },
          {
            title: "Receba orientação sobre o modelo ideal",
            description: "A equipe orienta o formato conforme o uso, frequência e quantidade de informação."
          },
          {
            title: "Aprove a arte antes da produção",
            description: "O layout é confirmado antes da produção para reduzir erros nos dados."
          },
          {
            title: "Escolha retirada ou consulte entrega em BH",
            description: "Retire em Venda Nova ou consulte entrega por motoboy em Belo Horizonte e região."
          }
        ]
      }
    ]
  },
  {
    path: "/como-pedir/",
    eyebrow: "Como pedir",
    title: "Como pedir seu carimbo pelo WhatsApp",
    subtitle:
      "Envie os dados do seu carimbo, receba orientação sobre o modelo ideal, aprove o layout e escolha retirada ou entrega em Belo Horizonte.",
    seo: {
      title: "Como Pedir Carimbo pelo WhatsApp",
      description:
        "Veja como pedir seu carimbo pelo WhatsApp: envie os dados, aprove a arte e escolha retirada ou entrega em Belo Horizonte.",
      canonicalPath: "/como-pedir/"
    },
    heroImage: {
      src: "/assets/imagens-gerais/banner-como-pedir.webp",
      alt: "Pedido de carimbo pelo WhatsApp com aprovação de arte"
    },
    primaryCta: {
      label: "Enviar dados do carimbo pelo WhatsApp",
      message: "general"
    },
    intro:
      "O pedido é feito de forma direta: você chama no WhatsApp, envia as informações do carimbo e recebe orientação para confirmar o modelo e a arte.",
    sections: [
      {
        eyebrow: "Passo a passo",
        title: "Do envio dos dados até a retirada ou entrega",
        variant: "steps",
        items: [
          {
            title: "Envie seus dados pelo WhatsApp",
            description: "Abra o atendimento e informe que deseja pedir um carimbo."
          },
          {
            title: "Informe o tipo de carimbo",
            description: "Diga se precisa de carimbo CNPJ, automático, médico, madeira, personalizado ou outro modelo."
          },
          {
            title: "Envie nome, profissão, CNPJ, logotipo ou texto",
            description: "Passe os dados que devem aparecer no carimbo para o atendimento conferir.",
            ctaLabel: "Ver dúvidas frequentes sobre pedidos",
            href: "/perguntas-frequentes/"
          },
          {
            title: "Receba orientação do atendimento",
            description: "A equipe orienta o modelo conforme uso, frequência e quantidade de informação."
          },
          {
            title: "Aprove a arte antes da produção",
            description: "Confira o layout e confirme os dados antes da produção do carimbo."
          },
          {
            title: "Retire na loja ou consulte entrega por motoboy",
            description: "Escolha retirada em Venda Nova ou consulte entrega em Belo Horizonte e região."
          }
        ]
      },
      {
        eyebrow: "Dados",
        title: "Quais dados enviar?",
        description: "Você não precisa mandar tudo se não souber. Envie o que já tiver e o atendimento orienta o restante.",
        variant: "feature",
        items: [
          { title: "Nome ou razão social", description: "Nome da pessoa, empresa ou marca que deve aparecer no carimbo.", icon: "icon-company" },
          { title: "CNPJ, se for carimbo de empresa", description: "Inclua CNPJ e endereço quando esses dados forem necessários.", icon: "icon-file-invoice" },
          { title: "Profissão ou registro", description: "Para carimbo profissional, envie profissão e registro quando aplicável.", icon: "icon-medical" },
          { title: "Contato e endereço", description: "Telefone, endereço ou e-mail podem entrar se fizerem parte do uso do carimbo.", icon: "icon-phone" },
          { title: "Logotipo, se houver", description: "Envie o arquivo da marca caso deseje incluir identidade visual.", icon: "icon-stamp" },
          { title: "Tamanho ou modelo desejado", description: "Se já souber o modelo, informe. Se não souber, a equipe ajuda na escolha.", icon: "icon-check" }
        ]
      },
      {
        eyebrow: "Orientação",
        title: "Não sabe qual modelo escolher?",
        description:
          "Se você ainda não sabe qual modelo de carimbo precisa, o atendimento orienta pelo WhatsApp de acordo com o uso, frequência e dados que devem entrar no carimbo.",
        variant: "split",
        items: [
          {
            title: "Atendimento direto",
            description: "Explique como pretende usar o carimbo e receba uma indicação objetiva do modelo mais adequado.",
            icon: "icon-whatsapp"
          }
        ]
      }
    ]
  },
  {
    path: "/prazos-e-entrega/",
    eyebrow: "Prazos e entrega",
    title: "Prazos de produção e entrega de carimbos em BH",
    subtitle:
      "Consulte a disponibilidade para produção, retirada na loja ou entrega por motoboy em Belo Horizonte e região.",
    seo: {
      title: "Prazos e Entrega de Carimbos em BH",
      description:
        "Consulte prazos de produção e entrega de carimbos em BH, com retirada em Venda Nova ou envio por motoboy em Belo Horizonte e região.",
      canonicalPath: "/prazos-e-entrega/"
    },
    heroImage: {
      src: "/assets/imagens-gerais/banner-prazos-e-entregas.webp",
      alt: "Prazos de produção e entrega de carimbos em Belo Horizonte"
    },
    primaryCta: {
      label: "Consultar prazo pelo WhatsApp",
      message: "delivery"
    },
    intro:
      "Os prazos dependem do modelo, aprovação da arte, demanda de produção e região de entrega. O atendimento confirma a disponibilidade pelo WhatsApp.",
    sections: [
      {
        eyebrow: "Prazos informados",
        title: "Produção, retirada e entrega com orientação clara",
        variant: "feature",
        items: [
          {
            title: "Produção média: 24 horas",
            description: "Prazo médio informado para produção, podendo variar conforme modelo e demanda.",
            icon: "icon-clock"
          },
          {
            title: "Entrega média: 48 horas",
            description: "Prazo médio informado para entrega por motoboy, conforme região e disponibilidade.",
            icon: "icon-delivery"
          },
          {
            title: "Produção rápida sob consulta",
            description:
              "Produção rápida, com possibilidade de atendimento no mesmo dia conforme o modelo e a demanda.",
            icon: "icon-fast",
            ctaLabel: "Ver dúvidas sobre prazos e entrega",
            href: "/perguntas-frequentes/"
          },
          {
            title: "Possibilidade de até 60 minutos",
            description:
              "Em alguns casos, a produção pode ser feita em até 60 minutos. Consulte disponibilidade pelo WhatsApp.",
            icon: "icon-check"
          },
          {
            title: "Retirada no local",
            description: "Retirada na loja em Venda Nova, bairro Maria Helena, Belo Horizonte/MG.",
            icon: "icon-map-pin"
          },
          {
            title: "Entrega por motoboy",
            description: "Entrega por motoboy em Belo Horizonte e região, mediante consulta.",
            icon: "icon-delivery"
          }
        ]
      },
      {
        eyebrow: "Variações",
        title: "O que pode influenciar o prazo?",
        variant: "cards",
        items: [
          { title: "Modelo do carimbo", description: "Alguns modelos exigem mais etapas de conferência e produção.", icon: "icon-stamp" },
          { title: "Quantidade", description: "Pedidos com mais unidades podem precisar de mais tempo.", icon: "icon-company" },
          { title: "Aprovação da arte", description: "A produção segue após confirmação do layout pelo cliente.", icon: "icon-check" },
          { title: "Fila de produção", description: "A demanda do dia pode alterar a previsão de atendimento.", icon: "icon-fast" },
          { title: "Região de entrega", description: "O prazo de motoboy depende da localização e disponibilidade.", icon: "icon-route" },
          { title: "Horário do pedido", description: "Pedidos feitos mais cedo tendem a ter confirmação de prazo mais rápida.", icon: "icon-clock" }
        ]
      }
    ]
  },
  {
    path: "/quem-somos/",
    eyebrow: "Quem somos",
    title: "Quem somos",
    subtitle:
      "Mais de 40 anos de experiência em carimbos personalizados, atendimento local e compromisso com qualidade.",
    seo: {
      title: "Quem Somos",
      description:
        "Conheça a BH Carimbos / Agora Carimbos, empresa com mais de 40 anos de mercado em carimbos personalizados em Belo Horizonte.",
      canonicalPath: "/quem-somos/"
    },
    heroImage: {
      src: "/assets/logo/logo-principal.png",
      alt: "Logo da BH Carimbos"
    },
    primaryCta: {
      label: "Falar com a BH Carimbos pelo WhatsApp",
      message: "general"
    },
    intro:
      "A Agora Carimbos é uma empresa que conta com mais de 40 anos de mercado, sempre trabalhando com qualidade e perfeição nos seus produtos.",
    sections: [
      {
        eyebrow: "Institucional",
        title: "Tradição, qualidade e atendimento próximo",
        description:
          "Trabalhamos com todos os tipos de carimbos e com uma equipe especializada, em constante treinamento para desenvolver a melhor impressão. Investimos em tecnologia a todo momento para atender a necessidade dos clientes.",
        variant: "cards",
        items: [
          {
            title: "História e tradição",
            description: "Mais de 40 anos de mercado em carimbos personalizados e atendimento local.",
            icon: "icon-stamp"
          },
          {
            title: "Qualidade na produção",
            description: "Produção orientada por conferência de dados, acabamento e aprovação da arte.",
            icon: "icon-check"
          },
          {
            title: "Equipe especializada",
            description: "Atendimento preparado para orientar empresas, profissionais liberais e pessoas físicas.",
            icon: "icon-company"
          },
          {
            title: "Tecnologia e melhoria contínua",
            description: "Investimento constante para atender melhor cada necessidade de impressão.",
            icon: "icon-fast"
          },
          {
            title: "Atendimento para diferentes públicos",
            description: "Empresas, médicos, advogados, profissionais liberais, autônomos e clientes pessoais.",
            icon: "icon-medical"
          },
          {
            title: "Suporte pelo WhatsApp",
            description: "Orientação no pedido, aprovação de arte e acompanhamento direto pelo atendimento.",
            icon: "icon-whatsapp"
          }
        ]
      }
    ]
  },
  {
    path: "/contato/",
    eyebrow: "Contato",
    title: "Contato da BH Carimbos",
    subtitle: "Fale pelo WhatsApp, consulte endereço da loja ou envie uma mensagem para atendimento.",
    seo: {
      title: "Contato",
      description:
        "Fale com a BH Carimbos pelo WhatsApp, consulte endereço, horário de atendimento e rota da loja em Venda Nova, Belo Horizonte.",
      canonicalPath: "/contato/"
    },
    heroImage: {
      src: "/assets/imagens-gerais/banner-contato.webp",
      alt: "Contato e atendimento da BH Carimbos em Belo Horizonte"
    },
    secondaryCta: {
      label: "Ver rota no Google Maps",
      href: "route"
    },
    primaryCta: {
      label: "Chamar no WhatsApp",
      message: "general"
    },
    intro:
      "Use o WhatsApp para atendimento mais rápido ou envie uma mensagem pelo formulário preparado para coleta inicial dos dados do pedido.",
    contact: true,
    sections: [
      {
        eyebrow: "Atendimento",
        title: "Canais e dados da loja",
        variant: "feature",
        items: [
          {
            title: "WhatsApp",
            description: businessInfo.whatsappDisplay,
            icon: "icon-whatsapp",
            ctaLabel: "Consultar perguntas frequentes",
            href: "/perguntas-frequentes/"
          },
          {
            title: "E-mail",
            description: businessInfo.email,
            icon: "icon-email"
          },
          {
            title: "Endereço",
            description: `${businessInfo.address.street}, Bairro ${businessInfo.address.neighborhood}, ${businessInfo.address.region}, ${businessInfo.address.city}/${businessInfo.address.state}`,
            icon: "icon-map-pin"
          },
          {
            title: "Horário",
            description: `${businessInfo.openingHours.weekdays}. ${businessInfo.openingHours.saturday}.`,
            icon: "icon-clock"
          },
          {
            title: "Entrega",
            description: "Motoboy em Belo Horizonte e região.",
            icon: "icon-delivery"
          }
        ]
      }
    ]
  }
] as const satisfies InternalPage[];

export function getInternalPage(path: string): InternalPage | undefined {
  return internalPages.find((page) => page.path === path);
}
