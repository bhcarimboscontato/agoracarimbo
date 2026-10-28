import { track } from "@vercel/analytics";

// Medição de cliques no WhatsApp e de envios do formulário.
// A conversão do Google Ads continua a mesma (gtag_report_conversion, definida no BaseLayout);
// aqui só acrescentamos de qual página e de qual parte da página veio o clique.

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  gtag_report_conversion?: (url?: string) => boolean;
};

type VisitOrigin = {
  landing: string;
  referrer: string;
};

const originStorageKey = "bhcarimbos_origem";
const campaignParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
const ga4MeasurementId = import.meta.env.PUBLIC_GA4_MEASUREMENT_ID ?? "";
const gtagWindow = window as GtagWindow;

function sendGa4Event(name: string, params: Record<string, string>): void {
  if (!ga4MeasurementId || typeof gtagWindow.gtag !== "function") return;
  gtagWindow.gtag("event", name, { ...params, send_to: ga4MeasurementId });
}

function sendVercelEvent(name: string, params: Record<string, string>): void {
  try {
    track(name, params);
  } catch {
    // Sem Web Analytics ativo: ignora.
  }
}

function getPageType(path: string): string {
  if (path === "/") return "home";
  if (path === "/blog/") return "blog";
  if (path.startsWith("/blog/")) return "guia";
  if (path === "/contato/") return "contato";
  return "pagina";
}

function getLinkLocation(link: Element): string {
  const marked = link.closest<HTMLElement>("[data-track-location]");
  if (marked?.dataset.trackLocation) return marked.dataset.trackLocation;
  if (link.closest(".site-header__bar")) return "barra-topo";
  if (link.closest(".mobile-menu")) return "menu-mobile";
  if (link.closest("header.site-header")) return "topo";
  if (link.closest("footer")) return "rodape";
  return "conteudo";
}

/** Guarda a primeira página vista na visita e os parâmetros de campanha (sem dados pessoais). */
function rememberOrigin(): VisitOrigin {
  try {
    const stored = sessionStorage.getItem(originStorageKey);
    if (stored) return JSON.parse(stored) as VisitOrigin;
  } catch {
    // sessionStorage indisponível: calcula sem guardar.
  }

  const params = new URLSearchParams(window.location.search);
  const campaign = new URLSearchParams();
  campaignParams.forEach((key) => {
    const value = params.get(key);
    if (value) campaign.set(key, value.slice(0, 80));
  });

  const query = campaign.toString();
  let referrer = "";
  try {
    const referrerUrl = document.referrer ? new URL(document.referrer) : null;
    if (referrerUrl && referrerUrl.host !== window.location.host) referrer = referrerUrl.host;
  } catch {
    referrer = "";
  }

  const origin: VisitOrigin = {
    landing: `${window.location.pathname}${query ? `?${query}` : ""}`,
    referrer
  };

  try {
    sessionStorage.setItem(originStorageKey, JSON.stringify(origin));
  } catch {
    // ignora
  }

  return origin;
}

/** Texto curto para o formulário: página atual, página de entrada e origem. Máximo 300 caracteres. */
export function describeVisitOrigin(): string {
  const origin = rememberOrigin();
  const parts = [window.location.href.split("#")[0]];
  if (origin.landing && origin.landing !== window.location.pathname) parts.push(`entrada: ${origin.landing}`);
  if (origin.referrer) parts.push(`veio de: ${origin.referrer}`);
  return parts.join(" | ").slice(0, 300);
}

/** Acrescenta a página de origem na mensagem pronta do WhatsApp, para o atendimento saber de onde veio. */
function withPageReference(href: string, path: string): string {
  try {
    const url = new URL(href);
    const text = url.searchParams.get("text");
    if (!text || path === "/" || text.includes("bhcarimbos.com.br/")) return href;
    url.searchParams.set("text", `${text}\n\n(Página: bhcarimbos.com.br${path})`);
    return url.toString();
  } catch {
    return href;
  }
}

function isWhatsAppLink(link: HTMLAnchorElement): boolean {
  const href = link.getAttribute("href") || "";
  return (
    href.includes("wa.me/") ||
    href.includes("api.whatsapp.com") ||
    href.includes("web.whatsapp.com") ||
    link.dataset.conversion === "whatsapp"
  );
}

rememberOrigin();

document.addEventListener("click", (event) => {
  const target = event.target;
  const link = target instanceof Element ? target.closest<HTMLAnchorElement>("a") : null;
  if (!link || !isWhatsAppLink(link)) return;

  const path = window.location.pathname;
  const params = {
    page_path: path,
    page_type: getPageType(path),
    link_location: getLinkLocation(link)
  };

  sendGa4Event("whatsapp_click", params);
  sendVercelEvent("WhatsApp", params);

  // Modelos de mensagem do blog já são o texto que o cliente quer mandar: não mexe neles.
  const href = link.hasAttribute("data-template-send") ? link.href : withPageReference(link.href, path);

  if (typeof gtagWindow.gtag_report_conversion === "function") {
    event.preventDefault();
    gtagWindow.gtag_report_conversion(href);
    return;
  }

  if (href !== link.href) link.href = href;
});

document.addEventListener("bh:lead", () => {
  const path = window.location.pathname;
  const params = { page_path: path, page_type: getPageType(path), method: "formulario" };
  sendGa4Event("generate_lead", params);
  sendVercelEvent("Formulario enviado", params);
});
