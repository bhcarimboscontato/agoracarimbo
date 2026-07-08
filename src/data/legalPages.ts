import { businessInfo, siteConfig } from "@data/site";

type LegalTableRow = {
  name: string;
  purpose: string;
  type: string;
  duration?: string;
  owner?: string;
};

export type LegalPageSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: LegalTableRow[];
};

export type LegalPage = {
  path: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
  };
  updatedAt: string;
  sections: LegalPageSection[];
};

const contactLine = `E-mail: ${businessInfo.email}. WhatsApp: ${businessInfo.whatsappDisplay}. Endereço: ${businessInfo.address.street}, Bairro ${businessInfo.address.neighborhood}, ${businessInfo.address.region}, ${businessInfo.address.city}/${businessInfo.address.state}.`;
const siteName = "BH Carimbos / Agora Carimbos";
const domainLabel = siteConfig.domain.replace("https://", "");

export const legalPages = [
  {
    path: "/aviso-legal/",
    eyebrow: "Informações legais",
    title: "Aviso Legal",
    subtitle:
      "Informações sobre uso do site, responsabilidade, conteúdo, propriedade intelectual e contato.",
    seo: {
      title: "Aviso Legal",
      description:
        "Aviso legal do site BH Carimbos, com informações sobre uso do site, responsabilidade, conteúdo, propriedade intelectual e contato.",
      canonicalPath: "/aviso-legal/"
    },
    updatedAt: "Julho de 2026",
    sections: [
      {
        title: "Identificação do site",
        paragraphs: [
          `O site ${domainLabel} é utilizado para apresentação dos produtos, serviços, canais de atendimento e informações comerciais da ${siteName}.`,
          contactLine
        ]
      },
      {
        title: "Finalidade do site",
        paragraphs: [
          "Este site tem finalidade informativa e comercial. Ele apresenta modelos de carimbos, formas de atendimento, prazos, localização, entrega e canais de contato para pedidos e orçamentos."
        ]
      },
      {
        title: "Responsabilidade pelas informações",
        paragraphs: [
          "Os conteúdos são preparados para orientar visitantes e clientes, mas podem ser atualizados, revisados ou modificados sem aviso prévio.",
          "Informações sobre prazos, disponibilidade, modelos, produção e entrega dependem de confirmação pelo atendimento."
        ]
      },
      {
        title: "Links externos",
        paragraphs: [
          "O site pode conter links para serviços de terceiros, como WhatsApp, Google Maps, redes sociais ou outros recursos externos.",
          "A BH Carimbos não controla integralmente o conteúdo, disponibilidade ou políticas desses terceiros."
        ]
      },
      {
        title: "Propriedade intelectual",
        paragraphs: [
          "Textos, imagens, estrutura visual, marca, layout, elementos gráficos e demais conteúdos do site são protegidos.",
          "É proibida a reprodução, cópia, distribuição ou uso comercial sem autorização, salvo quando permitido por lei."
        ]
      },
      {
        title: "Uso adequado do site",
        paragraphs: [
          "O visitante não deve tentar comprometer a segurança, disponibilidade, integridade ou funcionamento do site.",
          "Também não deve utilizar o site para práticas ilícitas, abusivas ou fraudulentas."
        ]
      },
      {
        title: "Contato",
        paragraphs: [
          `Dúvidas sobre este aviso podem ser enviadas para ${businessInfo.email} ou pelo WhatsApp ${businessInfo.whatsappDisplay}.`
        ]
      }
    ]
  },
  {
    path: "/cookies/",
    eyebrow: "Privacidade",
    title: "Política de Cookies",
    subtitle:
      "Entenda como o site BH Carimbos utiliza cookies necessários, preferências e possíveis cookies de medição.",
    seo: {
      title: "Política de Cookies",
      description:
        "Entenda como o site BH Carimbos utiliza cookies necessários, preferências e possíveis cookies de medição para melhorar a navegação.",
      canonicalPath: "/cookies/"
    },
    updatedAt: "Julho de 2026",
    sections: [
      {
        title: "O que são cookies",
        paragraphs: [
          "Cookies são pequenos arquivos armazenados no navegador para permitir o funcionamento do site, lembrar preferências e, quando autorizado, ajudar na medição de uso."
        ]
      },
      {
        title: "Como usamos cookies",
        paragraphs: ["O site pode utilizar cookies para:"],
        bullets: [
          "funcionamento técnico do site;",
          "segurança e prevenção de falhas;",
          "lembrar preferências de consentimento;",
          "melhorar a experiência de navegação;",
          "medir desempenho e uso do site, somente quando houver ferramenta ativa e consentimento aplicável."
        ]
      },
      {
        title: "Tipos de cookies",
        table: [
          {
            name: "Cookies necessários",
            purpose:
              "Essenciais para funcionamento, segurança e registro da preferência de consentimento. Não podem ser desativados pelo banner.",
            type: "Necessário"
          },
          {
            name: "Cookies de preferências",
            purpose: "Podem lembrar escolhas do usuário, quando aplicável.",
            type: "Opcional"
          },
          {
            name: "Cookies de estatística/medição",
            purpose:
              "Podem ser usados para entender visitas e desempenho, somente se ferramentas de medição forem implementadas.",
            type: "Opcional"
          },
          {
            name: "Cookies de marketing",
            purpose:
              "O site não utiliza cookies de marketing no momento, salvo se futuramente forem integradas campanhas ou ferramentas que exijam consentimento específico.",
            type: "Opcional"
          }
        ]
      },
      {
        title: "Cookies atualmente previstos",
        table: [
          {
            name: "bhcarimbos_cookie_consent",
            purpose: "Armazenar a escolha do visitante sobre cookies.",
            type: "Necessário/preferência",
            duration: "180 dias",
            owner: siteName
          }
        ],
        paragraphs: [
          "No momento, este site não ativa cookies de estatística, marketing ou publicidade por conta própria. Caso ferramentas de medição ou publicidade sejam adicionadas futuramente, esta política será atualizada e o consentimento será solicitado quando necessário."
        ]
      },
      {
        title: "Como gerenciar cookies",
        paragraphs: ["O visitante pode:"],
        bullets: [
          "aceitar cookies;",
          "recusar cookies não necessários;",
          "configurar preferências no banner;",
          "limpar cookies diretamente no navegador."
        ]
      },
      {
        title: "Alterações nesta política",
        paragraphs: [
          "Esta política pode ser atualizada conforme novas funcionalidades, ferramentas ou exigências legais."
        ]
      }
    ]
  },
  {
    path: "/politica-de-privacidade/",
    eyebrow: "Privacidade",
    title: "Política de Privacidade",
    subtitle:
      "Saiba como a BH Carimbos trata dados pessoais enviados pelo site, WhatsApp, e-mail e formulário de contato.",
    seo: {
      title: "Política de Privacidade",
      description:
        "Saiba como a BH Carimbos trata dados pessoais enviados pelo site, WhatsApp, e-mail e formulário de contato, conforme a LGPD.",
      canonicalPath: "/politica-de-privacidade/"
    },
    updatedAt: "Julho de 2026",
    sections: [
      {
        title: "Quem somos",
        paragraphs: [
          `A ${siteName} utiliza o site ${domainLabel} para apresentar produtos, serviços e canais de atendimento.`,
          contactLine
        ]
      },
      {
        title: "Quais dados podemos coletar",
        paragraphs: ["Podemos tratar dados enviados voluntariamente pelo usuário, como:"],
        bullets: [
          "nome;",
          "telefone/WhatsApp;",
          "e-mail;",
          "dados do carimbo solicitado;",
          "CNPJ ou razão social, quando informado pelo próprio cliente;",
          "profissão ou registro profissional, quando informado pelo próprio cliente;",
          "endereço de entrega, quando necessário;",
          "mensagens enviadas pelo formulário, WhatsApp ou e-mail;",
          "arquivos, imagens ou logotipos enviados pelo cliente para criação do carimbo;",
          "dados técnicos básicos, como IP, data e hora de acesso, navegador/dispositivo, cookies necessários e preferências de cookies."
        ]
      },
      {
        title: "Finalidades do tratamento",
        bullets: [
          "responder pedidos de orçamento;",
          "orientar sobre modelos de carimbo;",
          "produzir layout ou arte do carimbo;",
          "confirmar dados antes da produção;",
          "organizar retirada ou entrega;",
          "emitir nota fiscal, quando aplicável;",
          "prestar suporte e atendimento;",
          "cumprir obrigações legais ou regulatórias;",
          "melhorar a navegação do site, quando aplicável."
        ]
      },
      {
        title: "Bases legais",
        paragraphs: [
          "Tratamos dados com base na execução de contrato ou procedimentos preliminares relacionados ao pedido, cumprimento de obrigação legal quando houver emissão fiscal, legítimo interesse para atendimento, segurança e melhoria do site, e consentimento quando necessário, como em cookies não essenciais ou comunicações opcionais."
        ]
      },
      {
        title: "Compartilhamento de dados",
        paragraphs: ["Dados podem ser compartilhados apenas quando necessário com:"],
        bullets: [
          "serviços de atendimento, como WhatsApp;",
          "serviços de e-mail;",
          "serviços de entrega ou motoboy, quando houver entrega;",
          "sistemas fiscais ou contábeis, quando necessário;",
          "fornecedores técnicos de hospedagem e infraestrutura."
        ]
      },
      {
        title: "Armazenamento e segurança",
        paragraphs: [
          "São adotadas medidas razoáveis de segurança para proteger dados contra acesso não autorizado, uso indevido, alteração ou destruição.",
          "Apesar desses cuidados, nenhum ambiente digital pode ser considerado absolutamente seguro."
        ]
      },
      {
        title: "Retenção de dados",
        paragraphs: [
          "Os dados serão mantidos pelo tempo necessário para cumprir a finalidade do atendimento, produção, entrega, obrigações legais ou defesa de direitos."
        ]
      },
      {
        title: "Direitos do titular",
        paragraphs: [
          `Conforme a LGPD, o titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio ou eliminação, portabilidade quando aplicável, informação sobre compartilhamento e revogação do consentimento quando aplicável. O canal para exercício desses direitos é ${businessInfo.email}.`
        ]
      },
      {
        title: "Menores de idade",
        paragraphs: [
          "O site não é direcionado especificamente a crianças ou adolescentes. Solicitações envolvendo menores devem ser feitas por responsáveis legais."
        ]
      },
      {
        title: "Atualizações",
        paragraphs: ["Esta política pode ser atualizada periodicamente."]
      }
    ]
  },
  {
    path: "/termos-de-uso/",
    eyebrow: "Termos",
    title: "Termos de Uso",
    subtitle:
      "Regras de navegação, informações comerciais, responsabilidades e propriedade intelectual do site.",
    seo: {
      title: "Termos de Uso",
      description:
        "Conheça os termos de uso do site BH Carimbos, incluindo regras de navegação, informações comerciais, responsabilidades e propriedade intelectual.",
      canonicalPath: "/termos-de-uso/"
    },
    updatedAt: "Julho de 2026",
    sections: [
      {
        title: "Aceitação dos termos",
        paragraphs: [
          "Ao acessar e navegar no site, o visitante declara ciência destes Termos de Uso."
        ]
      },
      {
        title: "Finalidade do site",
        paragraphs: [
          `O site apresenta informações sobre produtos, serviços, prazos, atendimento, localização e canais de contato da ${siteName}.`
        ]
      },
      {
        title: "Produtos, prazos e disponibilidade",
        paragraphs: [
          "Imagens, textos e informações são apresentados para fins comerciais e informativos.",
          "Prazos, disponibilidade, modelos, valores, formas de entrega e produção devem ser confirmados pelo atendimento.",
          "Não há compra online pelo site."
        ]
      },
      {
        title: "Pedidos pelo WhatsApp",
        paragraphs: [
          "Solicitações de orçamento e atendimento podem ser direcionadas ao WhatsApp.",
          "O envio de dados pelo WhatsApp é responsabilidade do usuário e será usado para atendimento e produção do pedido."
        ]
      },
      {
        title: "Uso correto do site",
        paragraphs: ["É proibido:"],
        bullets: [
          "usar o site para fins ilícitos;",
          "tentar invadir ou comprometer sistemas;",
          "enviar vírus ou códigos maliciosos;",
          "realizar uso automatizado abusivo;",
          "copiar conteúdo indevidamente;",
          "praticar atos que comprometam segurança ou funcionamento."
        ]
      },
      {
        title: "Propriedade intelectual",
        paragraphs: [
          "Os conteúdos do site são protegidos e não podem ser copiados, reproduzidos, distribuídos ou utilizados comercialmente sem autorização."
        ]
      },
      {
        title: "Links de terceiros",
        paragraphs: [
          "Links para WhatsApp, Google Maps ou outros serviços externos podem seguir regras próprias desses terceiros."
        ]
      },
      {
        title: "Limitação de responsabilidade",
        paragraphs: [
          "A empresa busca manter informações corretas, mas não garante ausência total de erros, indisponibilidades temporárias ou atualizações pendentes.",
          "Nada nestes Termos exclui responsabilidades legais obrigatórias."
        ]
      },
      {
        title: "Alterações",
        paragraphs: ["Estes Termos podem ser atualizados a qualquer momento."]
      },
      {
        title: "Contato",
        paragraphs: [`Dúvidas podem ser enviadas para ${businessInfo.email} ou ${businessInfo.whatsappDisplay}.`]
      }
    ]
  }
] as const satisfies LegalPage[];

export function getLegalPage(path: string): LegalPage | undefined {
  return legalPages.find((page) => page.path === path);
}
