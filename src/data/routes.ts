export type RouteKind = "home" | "service" | "location" | "content" | "legal";

export type SiteRoute = {
  path: string;
  label: string;
  kind: RouteKind;
  draftTitle: string;
  description: string;
};

export const requiredRoutes: SiteRoute[] = [
  {
    path: "/",
    label: "Início",
    kind: "home",
    draftTitle: "Página inicial",
    description: "Página inicial da BH Carimbos."
  },
  {
    path: "/carimbo-em-bh/",
    label: "Carimbo em BH",
    kind: "service",
    draftTitle: "Carimbo em BH",
    description: "Página principal de SEO local."
  },
  {
    path: "/carimbos-bh/",
    label: "Carimbos em BH",
    kind: "service",
    draftTitle: "Carimbos em BH",
    description: "Hub comercial de carimbos em Belo Horizonte."
  },
  {
    path: "/carimbo-personalizado-bh/",
    label: "Carimbo personalizado",
    kind: "service",
    draftTitle: "Carimbo personalizado BH",
    description: "Página de serviço para carimbos personalizados."
  },
  {
    path: "/carimbo-na-hora-bh/",
    label: "Carimbo na hora",
    kind: "service",
    draftTitle: "Carimbo na hora BH",
    description: "Página de serviço para pedidos com urgência."
  },
  {
    path: "/carimbo-cnpj-bh/",
    label: "Carimbo CNPJ",
    kind: "service",
    draftTitle: "Carimbo CNPJ BH",
    description: "Página de serviço para carimbos CNPJ."
  },
  {
    path: "/carimbo-automatico-bh/",
    label: "Carimbo automático",
    kind: "service",
    draftTitle: "Carimbo automático BH",
    description: "Página de serviço para carimbos automáticos."
  },
  {
    path: "/carimbo-medico-bh/",
    label: "Carimbo médico",
    kind: "service",
    draftTitle: "Carimbo médico BH",
    description: "Página de serviço para profissionais de saúde."
  },
  {
    path: "/carimbo-empresa-bh/",
    label: "Carimbo para empresa",
    kind: "service",
    draftTitle: "Carimbo para empresa BH",
    description: "Página de serviço para empresas."
  },
  {
    path: "/carimbo-madeira-bh/",
    label: "Carimbo de madeira",
    kind: "service",
    draftTitle: "Carimbo de madeira BH",
    description: "Página de serviço para carimbos de madeira."
  },
  {
    path: "/carimbo-advogado-bh/",
    label: "Carimbo advogado",
    kind: "service",
    draftTitle: "Carimbo para advogado BH",
    description: "Página comercial para carimbos de advogado em Belo Horizonte."
  },
  {
    path: "/carimbo-psicologo-bh/",
    label: "Carimbo psicólogo",
    kind: "service",
    draftTitle: "Carimbo para psicólogo BH",
    description: "Página comercial para carimbos de psicólogo em Belo Horizonte."
  },
  {
    path: "/carimbo-nutricionista-bh/",
    label: "Carimbo nutricionista",
    kind: "service",
    draftTitle: "Carimbo para nutricionista BH",
    description: "Página comercial para carimbos de nutricionista em Belo Horizonte."
  },
  {
    path: "/carimbo-enfermagem-bh/",
    label: "Carimbo enfermagem",
    kind: "service",
    draftTitle: "Carimbo para enfermagem BH",
    description: "Página comercial para carimbos de enfermagem em Belo Horizonte."
  },
  {
    path: "/carimbo-assinatura-bh/",
    label: "Carimbo de assinatura",
    kind: "service",
    draftTitle: "Carimbo de assinatura BH",
    description: "Página comercial para carimbo de assinatura em Belo Horizonte."
  },
  {
    path: "/carimbo-datador-bh/",
    label: "Carimbo datador",
    kind: "service",
    draftTitle: "Carimbo datador BH",
    description: "Página comercial para carimbo datador em Belo Horizonte."
  },
  {
    path: "/carimbo-numerador-bh/",
    label: "Carimbo numerador",
    kind: "service",
    draftTitle: "Carimbo numerador BH",
    description: "Página comercial para carimbo numerador em Belo Horizonte."
  },
  {
    path: "/carimbo-para-clinica-bh/",
    label: "Carimbo para clínica",
    kind: "service",
    draftTitle: "Carimbo para clínica BH",
    description: "Página comercial para carimbos de clínica em Belo Horizonte."
  },
  {
    path: "/carimbo-para-escritorio-bh/",
    label: "Carimbo para escritório",
    kind: "service",
    draftTitle: "Carimbo para escritório BH",
    description: "Página comercial para carimbos de escritório em Belo Horizonte."
  },
  {
    path: "/carimbo-urgente-bh/",
    label: "Carimbo urgente",
    kind: "service",
    draftTitle: "Carimbo urgente BH",
    description: "Página comercial para pedidos urgentes de carimbo em Belo Horizonte."
  },
  {
    path: "/carimbos-pampulha/",
    label: "Pampulha",
    kind: "location",
    draftTitle: "Carimbos Pampulha",
    description: "Página local para atendimento na região da Pampulha."
  },
  {
    path: "/carimbos-venda-nova/",
    label: "Venda Nova",
    kind: "location",
    draftTitle: "Carimbos Venda Nova",
    description: "Página local para atendimento em Venda Nova."
  },
  {
    path: "/servicos/",
    label: "Serviços",
    kind: "content",
    draftTitle: "Serviços de carimbos em Belo Horizonte",
    description: "Página com soluções comerciais de carimbos em Belo Horizonte."
  },
  {
    path: "/contato/",
    label: "Contato",
    kind: "content",
    draftTitle: "Contato",
    description: "Página de contato com rota, WhatsApp e formulário."
  },
  {
    path: "/como-pedir/",
    label: "Como pedir",
    kind: "content",
    draftTitle: "Como pedir",
    description: "Página explicando o fluxo de pedido."
  },
  {
    path: "/prazos-e-entrega/",
    label: "Prazos e entrega",
    kind: "content",
    draftTitle: "Prazos e entrega",
    description: "Página sobre produção, retirada e entrega."
  },
  {
    path: "/perguntas-frequentes/",
    label: "Perguntas frequentes",
    kind: "content",
    draftTitle: "Perguntas frequentes",
    description: "Página de FAQ."
  },
  {
    path: "/aviso-legal/",
    label: "Aviso Legal",
    kind: "legal",
    draftTitle: "Aviso Legal",
    description: "Página legal preparada para informações do site."
  },
  {
    path: "/cookies/",
    label: "Cookies",
    kind: "legal",
    draftTitle: "Cookies",
    description: "Página preparada para informações sobre cookies."
  },
  {
    path: "/politica-de-privacidade/",
    label: "Política de privacidade",
    kind: "legal",
    draftTitle: "Política de privacidade",
    description: "Página legal com informações de privacidade."
  },
  {
    path: "/termos-de-uso/",
    label: "Termos de uso",
    kind: "legal",
    draftTitle: "Termos de uso",
    description: "Página legal com termos de uso do site."
  },
  {
    path: "/nossos-produtos/",
    label: "Nossos produtos",
    kind: "content",
    draftTitle: "Nossos produtos",
    description: "Página de produtos."
  },
  {
    path: "/quem-somos/",
    label: "Quem somos",
    kind: "content",
    draftTitle: "Quem somos",
    description: "Página institucional."
  }
];

export function getRouteByPath(path: string): SiteRoute | undefined {
  return requiredRoutes.find((route) => route.path === path);
}
