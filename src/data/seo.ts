import { siteConfig } from "@data/site";
import { getCommercialHubPage, getCommercialPage } from "@data/commercialPages";
import { getFaqPage } from "@data/faqPage";
import { getInternalPage } from "@data/internalPages";
import { getLegalPage } from "@data/legalPages";
import { requiredRoutes } from "@data/routes";

export type SeoEntry = {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
};

export const seoByPath: Record<string, SeoEntry> = Object.fromEntries(
  requiredRoutes.map((route) => {
    const legalPage = getLegalPage(route.path);
    const commercialHubPage = getCommercialHubPage(route.path);
    const commercialPage = getCommercialPage(route.path);
    const faqPage = getFaqPage(route.path);
    const internalPage = getInternalPage(route.path);

    return [
      route.path,
      legalPage?.seo ?? commercialHubPage?.seo ?? commercialPage?.seo ?? faqPage?.seo ?? internalPage?.seo ?? {
        title: route.path === "/" ? "Carimbos Personalizados em BH" : route.draftTitle,
        description:
          route.path === "/"
            ? "Peça carimbos personalizados em Belo Horizonte pelo WhatsApp. Carimbo CNPJ, médico, automático, empresa e madeira com retirada ou entrega por motoboy."
            : route.description,
        canonicalPath: route.path
      }
    ];
  })
);

export function getSeo(path: string): SeoEntry {
  return (
    seoByPath[path] ?? {
      title: siteConfig.defaultTitle,
      description: siteConfig.defaultDescription,
      canonicalPath: path
    }
  );
}
