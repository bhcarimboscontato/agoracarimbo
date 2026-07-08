import { brandAssets, businessInfo, siteConfig } from "@data/site";

export function getCanonicalUrl(path: string): string {
  return new URL(path, siteConfig.domain).toString();
}

export function getLogoUrl(): string {
  return new URL(brandAssets.logoHorizontal, siteConfig.domain).toString();
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.domain,
    logo: getLogoUrl(),
    email: businessInfo.email,
    telephone: businessInfo.whatsappDisplay
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.domain,
    inLanguage: siteConfig.locale,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.domain,
      logo: getLogoUrl()
    }
  };
}

export function getWebPageSchema({
  title,
  description,
  canonicalPath
}: {
  title: string;
  description: string;
  canonicalPath: string;
}) {
  const url = getCanonicalUrl(canonicalPath);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.domain
    },
    inLanguage: siteConfig.locale
  };
}

export function getLocalBusinessSchema() {
  const address = businessInfo.address;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.domain,
    image: getLogoUrl(),
    logo: getLogoUrl(),
    email: businessInfo.email,
    telephone: businessInfo.whatsappDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      addressCountry: address.country
    },
    areaServed: {
      "@type": "City",
      name: "Belo Horizonte"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessInfo.whatsappDisplay,
      contactType: "Atendimento comercial",
      areaServed: "BR",
      availableLanguage: "Portuguese"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "12:00"
      }
    ]
  };
}

export function getFaqPageSchema(
  faqs: ReadonlyArray<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
