export const siteConfig = {
  name: "BH Carimbos",
  legalName: "Agora Carimbos",
  domain: "https://bhcarimbos.com.br",
  locale: "pt-BR",
  defaultTitle: "BH Carimbos",
  titleTemplate: "%s | BH Carimbos",
  defaultDescription:
    "Site oficial da BH Carimbos, empresa de carimbos personalizados em Belo Horizonte.",
  ogImage: "/assets/seo/og-image.png"
} as const;

export const businessInfo = {
  whatsappDisplay: "+55 31 3274-5665",
  whatsappDigits: "553132745665",
  email: "agoracarimbos@hotmail.com",
  address: {
    street: "Rua Tenente Marino Freire, 679",
    neighborhood: "Maria Helena",
    region: "Venda Nova",
    city: "Belo Horizonte",
    state: "MG",
    country: "BR"
  },
  openingHours: {
    weekdays: "Segunda a sexta, das 07:00 às 18:00",
    saturday: "Sábado, das 07:00 às 12:00"
  },
  paymentMethods: ["Cartão de crédito", "Cartão de débito", "Pix"],
  averageProductionTime: "24 horas",
  averageDeliveryTime: "48 horas",
  googleMapsRouteUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Rua%20Tenente%20Marino%20Freire%2C%20679%2C%20Maria%20Helena%2C%20Venda%20Nova%2C%20Belo%20Horizonte%20MG"
} as const;

export const brandAssets = {
  logoHorizontal: "/assets/logo/logo-horizontal.png",
  logoIcon: "/assets/logo/logo-icon.png",
  logoPrincipal: "/assets/logo/logo-principal.png",
  favicon: "/assets/favicon/favicon.ico",
  appleTouchIcon: "/assets/favicon/apple-touch-icon.png"
} as const;
