export type RouteKind = "home" | "service" | "location" | "content" | "legal" | "blog";

export type SiteRoute = {
  path: string;
  label: string;
  kind: RouteKind;
  draftTitle: string;
  description: string;
  /** Data (AAAA-MM-DD) da última alteração relevante do conteúdo. Usada no lastmod do sitemap. */
  lastModified?: string;
};

/** Data da última alteração de conteúdo das páginas que não definem lastModified. */
export const defaultLastModified = "2026-08-07";

/** Data das páginas novas, do blog e da revisão das páginas antigas e da política de cookies (outubro de 2026). */
const contentUpdate = "2026-10-28";

export const requiredRoutes: SiteRoute[] = [
  {
    path: "/",
    label: "Início",
    kind: "home",
    draftTitle: "Página inicial",
    description: "Página inicial da BH Carimbos.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-em-bh/",
    label: "Carimbo em BH",
    kind: "service",
    draftTitle: "Carimbo em BH",
    description: "Página principal de SEO local.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbos-bh/",
    label: "Carimbos em BH",
    kind: "service",
    draftTitle: "Carimbos em BH",
    description: "Hub comercial de carimbos em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-personalizado-bh/",
    label: "Carimbo personalizado",
    kind: "service",
    draftTitle: "Carimbo personalizado BH",
    description: "Página de serviço para carimbos personalizados.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-na-hora-bh/",
    label: "Carimbo na hora",
    kind: "service",
    draftTitle: "Carimbo na hora BH",
    description: "Página de serviço para pedidos com urgência.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-cnpj-bh/",
    label: "Carimbo CNPJ",
    kind: "service",
    draftTitle: "Carimbo CNPJ BH",
    description: "Página de serviço para carimbos CNPJ.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-automatico-bh/",
    label: "Carimbo automático",
    kind: "service",
    draftTitle: "Carimbo automático BH",
    description: "Página de serviço para carimbos automáticos.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-medico-bh/",
    label: "Carimbo médico",
    kind: "service",
    draftTitle: "Carimbo médico BH",
    description: "Página de serviço para profissionais de saúde.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-empresa-bh/",
    label: "Carimbo para empresa",
    kind: "service",
    draftTitle: "Carimbo para empresa BH",
    description: "Página de serviço para empresas.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-madeira-bh/",
    label: "Carimbo de madeira",
    kind: "service",
    draftTitle: "Carimbo de madeira BH",
    description: "Página de serviço para carimbos de madeira.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-advogado-bh/",
    label: "Carimbo advogado",
    kind: "service",
    draftTitle: "Carimbo para advogado BH",
    description: "Página comercial para carimbos de advogado em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-psicologo-bh/",
    label: "Carimbo psicólogo",
    kind: "service",
    draftTitle: "Carimbo para psicólogo BH",
    description: "Página comercial para carimbos de psicólogo em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-nutricionista-bh/",
    label: "Carimbo nutricionista",
    kind: "service",
    draftTitle: "Carimbo para nutricionista BH",
    description: "Página comercial para carimbos de nutricionista em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-enfermagem-bh/",
    label: "Carimbo enfermagem",
    kind: "service",
    draftTitle: "Carimbo para enfermagem BH",
    description: "Página comercial para carimbos de enfermagem em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-assinatura-bh/",
    label: "Carimbo de assinatura",
    kind: "service",
    draftTitle: "Carimbo de assinatura BH",
    description: "Página comercial para carimbo de assinatura em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-datador-bh/",
    label: "Carimbo datador",
    kind: "service",
    draftTitle: "Carimbo datador BH",
    description: "Página comercial para carimbo datador em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-numerador-bh/",
    label: "Carimbo numerador",
    kind: "service",
    draftTitle: "Carimbo numerador BH",
    description: "Página comercial para carimbo numerador em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-para-clinica-bh/",
    label: "Carimbo para clínica",
    kind: "service",
    draftTitle: "Carimbo para clínica BH",
    description: "Página comercial para carimbos de clínica em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-para-escritorio-bh/",
    label: "Carimbo para escritório",
    kind: "service",
    draftTitle: "Carimbo para escritório BH",
    description: "Página comercial para carimbos de escritório em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-urgente-bh/",
    label: "Carimbo urgente",
    kind: "service",
    draftTitle: "Carimbo urgente BH",
    description: "Página comercial para pedidos urgentes de carimbo em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbos-pampulha/",
    label: "Pampulha",
    kind: "location",
    draftTitle: "Carimbos Pampulha",
    description: "Página local para atendimento na região da Pampulha.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbos-venda-nova/",
    label: "Venda Nova",
    kind: "location",
    draftTitle: "Carimbos Venda Nova",
    description: "Página local para atendimento em Venda Nova.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-dentista-bh/",
    label: "Carimbo dentista",
    kind: "service",
    draftTitle: "Carimbo para dentista BH",
    description: "Página comercial para carimbos de dentista em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-fisioterapeuta-bh/",
    label: "Carimbo fisioterapeuta",
    kind: "service",
    draftTitle: "Carimbo para fisioterapeuta BH",
    description: "Página comercial para carimbos de fisioterapeuta em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-veterinario-bh/",
    label: "Carimbo veterinário",
    kind: "service",
    draftTitle: "Carimbo para veterinário BH",
    description: "Página comercial para carimbos de veterinário em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbo-contador-bh/",
    label: "Carimbo contador",
    kind: "service",
    draftTitle: "Carimbo para contador BH",
    description: "Página comercial para carimbos de contador em Belo Horizonte.",
    lastModified: contentUpdate
  },
  {
    path: "/carimbos-centro-bh/",
    label: "Centro de BH",
    kind: "location",
    draftTitle: "Carimbos Centro de BH",
    description: "Página local para atendimento no Centro de Belo Horizonte.",
    lastModified: contentUpdate
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
    description: "Página preparada para informações sobre cookies.",
    lastModified: contentUpdate
  },
  {
    path: "/politica-de-privacidade/",
    label: "Política de privacidade",
    kind: "legal",
    draftTitle: "Política de privacidade",
    description: "Página legal com informações de privacidade.",
    lastModified: contentUpdate
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
  },
  {
    path: "/blog/",
    label: "Blog",
    kind: "blog",
    draftTitle: "Blog BH Carimbos",
    description: "Guias práticos sobre carimbos.",
    lastModified: contentUpdate
  },
  {
    path: "/blog/o-que-precisa-constar-no-carimbo-medico/",
    label: "O que precisa constar no carimbo médico",
    kind: "blog",
    draftTitle: "O que precisa constar no carimbo médico em MG",
    description: "Artigo do blog.",
    lastModified: contentUpdate
  },
  {
    path: "/blog/carimbo-cnpj-o-que-colocar/",
    label: "Carimbo CNPJ: o que colocar",
    kind: "blog",
    draftTitle: "Carimbo CNPJ: o que colocar e quando usar",
    description: "Artigo do blog.",
    lastModified: contentUpdate
  },
  {
    path: "/blog/carimbo-automatico-ou-de-madeira/",
    label: "Automático ou de madeira",
    kind: "blog",
    draftTitle: "Carimbo automático ou de madeira: qual escolher",
    description: "Artigo do blog.",
    lastModified: contentUpdate
  },
  {
    path: "/blog/como-trocar-almofada-carimbo-automatico/",
    label: "Trocar almofada do automático",
    kind: "blog",
    draftTitle: "Como trocar a almofada e conservar o carimbo automático",
    description: "Artigo do blog.",
    lastModified: contentUpdate
  },
  {
    path: "/blog/prazo-carimbo-urgente-bh/",
    label: "Prazo e urgência",
    kind: "blog",
    draftTitle: "Quanto tempo leva para fazer um carimbo em BH",
    description: "Artigo do blog.",
    lastModified: contentUpdate
  }
];

export function getRouteByPath(path: string): SiteRoute | undefined {
  return requiredRoutes.find((route) => route.path === path);
}
