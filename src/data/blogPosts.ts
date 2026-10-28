import { businessInfo, siteConfig } from "@data/site";
import { getCanonicalUrl, getLogoUrl } from "@lib/seo";

export type BlogLink = {
  label: string;
  href: string;
};

export type BlogSource = {
  label: string;
  publisher: string;
  href: string;
};

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; tone: "source" | "tip" | "warning"; title: string; text: string }
  | { type: "stampPreview"; caption: string; lines: string[] }
  | { type: "compare"; columns: [string, string]; rows: { label: string; values: [string, string] }[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "checklist"; title: string; items: string[] }
  | { type: "messageTemplate"; title: string; text: string };

export type BlogSection = {
  id: string;
  heading: string;
  blocks: BlogBlock[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  path: string;
  category: string;
  title: string;
  description: string;
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
  };
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  /** Texto curto que aparece na "impressão" de carimbo do card e do topo do artigo. */
  stampMark: string;
  lead: string;
  sections: BlogSection[];
  faq: BlogFaq[];
  sources: BlogSource[];
  /** Data em que as fontes foram conferidas (AAAA-MM-DD). */
  sourcesCheckedAt?: string;
  relatedLinks: BlogLink[];
  whatsappMessage: string;
  ctaTitle: string;
  ctaText: string;
};

export const blogIndex = {
  path: "/blog/",
  eyebrow: "Blog BH Carimbos",
  title: "Guias práticos para escolher, pedir e cuidar do seu carimbo",
  description:
    "Respostas diretas para dúvidas que chegam todo dia no balcão e no WhatsApp: o que colocar no carimbo, qual modelo escolher, como conservar e quanto tempo leva.",
  seo: {
    title: "Blog: guias sobre carimbos",
    description:
      "Guias da BH Carimbos sobre carimbo médico, carimbo CNPJ, automático ou madeira, troca de almofada e prazos de produção em Belo Horizonte.",
    canonicalPath: "/blog/"
  }
} as const;

export const blogPosts: BlogPost[] = [
  {
    path: "/blog/o-que-precisa-constar-no-carimbo-medico/",
    category: "Saúde",
    title: "O que precisa constar no carimbo médico em MG",
    description:
      "O carimbo médico é obrigatório? O que o CFM exige nos documentos, como fica o CRM-MG e quando a especialidade pode aparecer. Com as normas oficiais citadas.",
    seo: {
      title: "O que precisa constar no carimbo médico em MG",
      description:
        "Entenda o que o CFM exige na identificação de receitas e atestados, como indicar o CRM-MG, quando incluir especialidade e RQE e se o carimbo é obrigatório.",
      canonicalPath: "/blog/o-que-precisa-constar-no-carimbo-medico/"
    },
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
    readingMinutes: 5,
    stampMark: "CRM-MG",
    lead:
      "Antes de pedir o carimbo, vale saber o que as normas do Conselho Federal de Medicina pedem de verdade. A resposta curta: o que é exigido é a identificação clara do médico com o número do CRM. O carimbo é a forma mais prática de fazer isso, mas não é a única.",
    sections: [
      {
        id: "e-obrigatorio",
        heading: "O carimbo médico é obrigatório?",
        blocks: [
          {
            type: "paragraph",
            text:
              "Não. O Conselho Federal de Medicina já se manifestou mais de uma vez sobre isso. O Parecer CFM nº 1/2014 diz que o uso de carimbo em prescrição é opcional, porque não há obrigatoriedade legal ou ética, e que o que se exige é a assinatura com identificação clara do profissional e o respectivo CRM."
          },
          {
            type: "paragraph",
            text:
              "O Parecer CFM nº 40/2019 vai na mesma linha para qualquer documento médico: o carimbo não é requisito de validade do documento, desde que o emissor esteja identificado de forma legível, com CRM e assinatura."
          },
          {
            type: "callout",
            tone: "tip",
            title: "Na prática",
            text:
              "Mesmo sem ser obrigatório, o carimbo resolve a parte da identificação legível em segundos, em qualquer papel. É por isso que a maioria dos médicos usa."
          }
        ]
      },
      {
        id: "o-que-o-documento-precisa-ter",
        heading: "O que o documento médico precisa ter",
        blocks: [
          {
            type: "paragraph",
            text:
              "A Resolução CFM nº 2.381/2024, publicada no Diário Oficial da União em 2 de julho de 2024, lista o mínimo que todo documento médico deve conter. Pelo texto do art. 2º, são:"
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Identificação do médico: nome e CRM/UF",
              "Registro de Qualificação de Especialista (RQE), quando houver",
              "Identificação do paciente: nome e número do CPF, quando houver",
              "Data de emissão",
              "Assinatura qualificada, no documento eletrônico, ou assinatura e carimbo ou número de registro no CRM, no documento manuscrito",
              "Dados de contato profissional (telefone e/ou e-mail)",
              "Endereço profissional ou residencial do médico"
            ]
          },
          {
            type: "paragraph",
            text:
              "Repare no item 5: no papel, a resolução aceita assinatura com carimbo ou assinatura com o número do CRM escrito. O carimbo entra como uma das formas de cumprir a identificação."
          }
        ]
      },
      {
        id: "como-fica-em-mg",
        heading: "Como fica o CRM em Minas Gerais",
        blocks: [
          {
            type: "paragraph",
            text:
              "As regras acima são nacionais, então valem para quem atua em Minas. O que muda é a UF do registro: o médico inscrito no Conselho Regional de Medicina de Minas Gerais indica o CRM com a sigla MG e o número da inscrição."
          },
          {
            type: "stampPreview",
            caption: "Exemplo de composição. Os dados são fictícios.",
            lines: ["Dra. Nome Sobrenome", "Clínica Médica", "CRM-MG 00000 | RQE 00000"]
          },
          {
            type: "callout",
            tone: "warning",
            title: "Confira antes de aprovar a arte",
            text:
              "O número do CRM e do RQE é o dado mais importante do carimbo. Copie direto da carteira ou do registro no conselho e confira dígito por dígito na arte que enviamos antes da produção."
          }
        ]
      },
      {
        id: "especialidade-e-rqe",
        heading: "Quando a especialidade pode aparecer",
        blocks: [
          {
            type: "paragraph",
            text:
              "O Parecer CFM nº 40/2019 diz que, se o médico anunciar especialidade, o carimbo deve conter também o número do RQE. Sem RQE, o mais seguro é deixar só o nome e o CRM."
          },
          {
            type: "paragraph",
            text:
              "Se você tem pós-graduação, mas não tem RQE, confirme com o CRM-MG como pode se identificar antes de colocar qualquer área no carimbo. Não é um ponto em que a gráfica deva decidir pelo médico."
          }
        ]
      },
      {
        id: "o-que-colocar-no-carimbo",
        heading: "O que colocar no carimbo, na prática",
        blocks: [
          {
            type: "checklist",
            title: "Dados que costumam entrar",
            items: [
              "Nome como você assina e quer ser identificado",
              "CRM-MG e o número da inscrição",
              "Especialidade e RQE, somente se você tiver o RQE",
              "Telefone, e-mail ou endereço, se você preferir que esses dados saiam no carimbo em vez de no receituário impresso"
            ]
          },
          {
            type: "paragraph",
            text:
              "Para uso diário no consultório, o carimbo automático costuma ser mais prático, porque já tem a tinta embutida. Quem atende em mais de um lugar normalmente prefere um modelo compacto, que vai no bolso do jaleco."
          }
        ]
      }
    ],
    faq: [
      {
        question: "O carimbo médico é obrigatório em receitas?",
        answer:
          "Segundo o Parecer CFM nº 1/2014, não. O que se exige é a assinatura com identificação clara do médico e o número do CRM."
      },
      {
        question: "Posso colocar minha especialidade no carimbo?",
        answer:
          "Segundo o Parecer CFM nº 40/2019, se o médico anunciar especialidade, o carimbo deve conter o número do RQE. Em caso de dúvida, confirme com o CRM-MG."
      },
      {
        question: "A BH Carimbos confere se meus dados estão corretos perante o conselho?",
        answer:
          "Não. Produzimos com os dados que você envia e aprova. A arte é enviada para conferência antes da produção, e a responsabilidade pelo conteúdo é de quem pede."
      }
    ],
    sources: [
      {
        label: "Parecer CFM nº 1/2014: uso de carimbo em prescrição",
        publisher: "Conselho Federal de Medicina",
        href: "https://sistemas.cfm.org.br/normas/arquivos/pareceres/BR/2014/1_2014.pdf"
      },
      {
        label: "Parecer CFM nº 40/2019: carimbo em documentos médicos e RQE",
        publisher: "Conselho Federal de Medicina",
        href: "https://sistemas.cfm.org.br/normas/arquivos/pareceres/BR/2019/40_2019.pdf"
      },
      {
        label: "Resolução CFM nº 2.381/2024: documentos médicos",
        publisher: "Conselho Federal de Medicina",
        href: "https://sistemas.cfm.org.br/normas/arquivos/resolucoes/BR/2024/2381_2024.pdf"
      }
    ],
    sourcesCheckedAt: "2026-10-28",
    relatedLinks: [
      { label: "Carimbo médico em BH", href: "/carimbo-medico-bh/" },
      { label: "Carimbo para clínica em BH", href: "/carimbo-para-clinica-bh/" },
      { label: "Carimbo para dentista em BH", href: "/carimbo-dentista-bh/" },
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" }
    ],
    whatsappMessage:
      "Olá! Li o artigo sobre carimbo médico no site e quero fazer o meu. Posso enviar meus dados?",
    ctaTitle: "Já sabe o que vai no seu carimbo?",
    ctaText:
      "Mande nome, CRM-MG e, se tiver, especialidade com RQE. A gente devolve a arte para você conferir antes de produzir."
  },
  {
    path: "/blog/carimbo-cnpj-o-que-colocar/",
    category: "Empresas",
    title: "Carimbo CNPJ: o que colocar e quando usar",
    description:
      "Quais dados entram no carimbo CNPJ, onde ele é usado no dia a dia da empresa e o que muda com o CNPJ alfanumérico que a Receita Federal começou a emitir em 2026.",
    seo: {
      title: "Carimbo CNPJ: o que colocar e quando usar",
      description:
        "Veja os dados que costumam entrar no carimbo CNPJ, onde ele é usado e o cuidado extra com o novo CNPJ alfanumérico da Receita Federal. Guia prático da BH Carimbos.",
      canonicalPath: "/blog/carimbo-cnpj-o-que-colocar/"
    },
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
    readingMinutes: 4,
    stampMark: "CNPJ",
    lead:
      "O carimbo CNPJ é aquele que identifica a empresa em notas, recibos, canhotos e documentos internos. Ele não é um documento oficial: é uma forma rápida e padronizada de colocar os dados da empresa no papel. Por isso, o que manda é usar os dados certos, do jeito que estão no cadastro.",
    sections: [
      {
        id: "o-que-e",
        heading: "O que o carimbo CNPJ é, e o que ele não é",
        blocks: [
          {
            type: "paragraph",
            text:
              "O documento que comprova a inscrição da empresa é o Comprovante de Inscrição e de Situação Cadastral, emitido gratuitamente no site da Receita Federal. O carimbo não substitui esse comprovante. Ele serve para identificar a empresa de forma legível e igual em todos os papéis."
          },
          {
            type: "callout",
            tone: "tip",
            title: "Antes de pedir",
            text:
              "Se foi um cliente, banco ou órgão que pediu o carimbo, pergunte quais dados ele espera ver. Assim você evita fazer um segundo carimbo depois."
          }
        ]
      },
      {
        id: "dados",
        heading: "Quais dados costumam entrar",
        blocks: [
          {
            type: "checklist",
            title: "Composição mais comum",
            items: [
              "Número do CNPJ, com pontuação",
              "Razão social (nome empresarial), como está no cadastro",
              "Nome fantasia, se a empresa usa",
              "Endereço completo, com CEP",
              "Inscrição estadual ou municipal, quando quem pede exigir"
            ]
          },
          {
            type: "stampPreview",
            caption: "Exemplo de composição. Os dados são fictícios.",
            lines: ["00.000.000/0001-00", "NOME EMPRESARIAL LTDA", "Rua Exemplo, 000, Bairro", "Belo Horizonte/MG, CEP 00000-000"]
          },
          {
            type: "paragraph",
            text:
              "A dica mais útil é copiar tudo do Comprovante de Inscrição, e não de memória ou de um papel antigo. Mudança de endereço e de razão social são as causas mais comuns de carimbo desatualizado."
          }
        ]
      },
      {
        id: "quando-usar",
        heading: "Onde o carimbo CNPJ é usado",
        blocks: [
          {
            type: "list",
            items: [
              "Recibos, orçamentos e pedidos de compra",
              "Canhotos e comprovantes de recebimento de mercadoria",
              "Declarações e documentos internos",
              "Protocolos de entrega de documentos para clientes e fornecedores"
            ]
          },
          {
            type: "paragraph",
            text:
              "Para quem usa muitas vezes por dia, o carimbo automático é o mais prático. Para uso eventual, o de madeira atende bem."
          }
        ]
      },
      {
        id: "cnpj-alfanumerico",
        heading: "O que muda com o CNPJ alfanumérico",
        blocks: [
          {
            type: "paragraph",
            text:
              "A Receita Federal começou a atribuir CNPJ com letras e números em 2026. Segundo o Serpro, a implantação é progressiva a partir de 31 de julho de 2026 e vale só para novas inscrições. O número continua com 14 caracteres: as letras podem aparecer nas 12 primeiras posições, e os dois últimos continuam sendo números."
          },
          {
            type: "callout",
            tone: "source",
            title: "Quem já tem CNPJ não muda nada",
            text:
              "A própria Receita informa que quem já está inscrito no CNPJ permanece com o seu número válido. Não é preciso refazer o carimbo por causa dessa mudança."
          },
          {
            type: "callout",
            tone: "warning",
            title: "Se a sua empresa abriu agora",
            text:
              "Com letras no número, a chance de confusão aumenta, por exemplo entre a letra O e o número zero. Confira cada caractere na arte antes de aprovar."
          }
        ]
      }
    ],
    faq: [
      {
        question: "O carimbo CNPJ substitui o cartão CNPJ?",
        answer:
          "Não. O documento oficial é o Comprovante de Inscrição e de Situação Cadastral, emitido no site da Receita Federal. O carimbo serve para identificar a empresa nos papéis do dia a dia."
      },
      {
        question: "Preciso refazer meu carimbo por causa do CNPJ alfanumérico?",
        answer:
          "Não. Segundo a Receita Federal, quem já tem CNPJ continua com o mesmo número. O novo formato vale para novas inscrições."
      },
      {
        question: "Posso colocar o logotipo junto?",
        answer:
          "Pode, se o tamanho do carimbo permitir boa leitura. O atendimento orienta o modelo conforme a quantidade de dados."
      }
    ],
    sources: [
      {
        label: "CNPJ alfanumérico: o que muda para empresas e empreendedores",
        publisher: "Serpro (23/07/2026)",
        href: "https://www.serpro.gov.br/menu/noticias/noticias-2026/cnpj-alfanumerico-o-que-muda"
      },
      {
        label: "CNPJ alfanumérico",
        publisher: "Receita Federal",
        href: "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/cnpj-alfanumerico"
      },
      {
        label: "Emissão do Comprovante de Inscrição e de Situação Cadastral",
        publisher: "Receita Federal",
        href: "https://solucoes.receita.fazenda.gov.br/servicos/cnpjreva/cnpjreva_solicitacao.asp"
      }
    ],
    sourcesCheckedAt: "2026-10-28",
    relatedLinks: [
      { label: "Carimbo CNPJ em BH", href: "/carimbo-cnpj-bh/" },
      { label: "Carimbo para empresa em BH", href: "/carimbo-empresa-bh/" },
      { label: "Carimbo para contador em BH", href: "/carimbo-contador-bh/" },
      { label: "Carimbo para escritório em BH", href: "/carimbo-para-escritorio-bh/" }
    ],
    whatsappMessage:
      "Olá! Li o artigo sobre carimbo CNPJ no site e quero fazer o da minha empresa. Posso enviar os dados?",
    ctaTitle: "Faça o carimbo com os dados certos",
    ctaText:
      "Mande o CNPJ e os dados que devem aparecer, ou uma foto do Comprovante de Inscrição. A gente monta a arte e você confere antes da produção."
  },
  {
    path: "/blog/carimbo-automatico-ou-de-madeira/",
    category: "Escolha do modelo",
    title: "Carimbo automático ou de madeira: qual escolher",
    description:
      "Comparação direta entre carimbo automático e carimbo de madeira: tinta, frequência de uso, transporte, reposição e para quem cada um faz mais sentido.",
    seo: {
      title: "Carimbo automático ou de madeira: qual escolher",
      description:
        "Compare carimbo automático e carimbo de madeira por uso, tinta, transporte e reposição. Veja qual faz mais sentido para empresa, consultório ou uso eventual.",
      canonicalPath: "/blog/carimbo-automatico-ou-de-madeira/"
    },
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
    readingMinutes: 4,
    stampMark: "A ou M?",
    lead:
      "Os dois imprimem o mesmo texto. A diferença está em como a tinta chega na borracha, e isso muda tudo na rotina: velocidade, sujeira, transporte e reposição. A escolha certa depende de quantas vezes por dia você vai carimbar.",
    sections: [
      {
        id: "diferenca",
        heading: "A diferença em uma frase",
        blocks: [
          {
            type: "paragraph",
            text:
              "No automático, a almofada com tinta fica dentro do próprio carimbo: você aperta, ele carimba e volta para a tinta. No de madeira, a borracha fica presa a um cabo e você precisa de uma almofada separada a cada uso."
          }
        ]
      },
      {
        id: "comparativo",
        heading: "Comparativo lado a lado",
        blocks: [
          {
            type: "compare",
            columns: ["Automático", "Madeira"],
            rows: [
              { label: "Tinta", values: ["Embutida no carimbo", "Almofada separada"] },
              { label: "Uso frequente", values: ["Ideal: um aperto por carimbada", "Mais lento: molhar e carimbar"] },
              { label: "Transporte", values: ["Fecha e vai na bolsa sem sujar", "Precisa levar a almofada junto"] },
              { label: "Reposição", values: ["Troca da almofada interna ou reentintagem", "Troca ou reentintagem da almofada avulsa"] },
              { label: "Formato", values: ["Tamanhos padrão de cada modelo", "Mais liberdade de tamanho"] },
              { label: "Indicado para", values: ["Recepção, consultório, escritório", "Uso eventual e tamanhos específicos"] }
            ]
          }
        ]
      },
      {
        id: "quando-automatico",
        heading: "Quando o automático vale mais a pena",
        blocks: [
          {
            type: "list",
            items: [
              "Você carimba várias vezes ao dia, como em recepção, caixa ou consultório",
              "Precisa levar o carimbo para outros lugares",
              "Mais de uma pessoa usa o mesmo carimbo e você quer evitar sujeira",
              "O carimbo tem CNPJ, CRM ou outros dados que precisam sair sempre iguais"
            ]
          },
          {
            type: "paragraph",
            text:
              "A BH Carimbos trabalha com marcas como Trodat, Colop e Nykon, entre outras, conforme a disponibilidade. Cada modelo tem um tamanho de área de impressão, e o atendimento indica o que comporta os seus dados."
          }
        ]
      },
      {
        id: "quando-madeira",
        heading: "Quando o de madeira faz mais sentido",
        blocks: [
          {
            type: "list",
            items: [
              "O uso é eventual, algumas vezes por semana",
              "Você precisa de um tamanho que foge dos modelos automáticos",
              "O carimbo fica sempre no mesmo lugar, ao lado da almofada"
            ]
          },
          {
            type: "callout",
            tone: "tip",
            title: "Em dúvida?",
            text:
              "Conte para o atendimento onde e quantas vezes por dia você vai usar o carimbo. Essa informação decide o modelo mais do que qualquer outra."
          }
        ]
      }
    ],
    faq: [
      {
        question: "O carimbo automático precisa de almofada?",
        answer:
          "Não de uma almofada separada. A almofada fica dentro do próprio carimbo e pode ser trocada ou reentintada quando a impressão enfraquece."
      },
      {
        question: "Qual dura mais?",
        answer:
          "Depende do uso, do cuidado e do modelo. O mais importante é escolher o tipo que combina com a sua rotina e conservar bem."
      },
      {
        question: "Vocês informam preço no site?",
        answer:
          "Não. O orçamento é passado pelo atendimento, conforme o modelo e os dados do carimbo."
      }
    ],
    sources: [],
    relatedLinks: [
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" },
      { label: "Carimbo de madeira em BH", href: "/carimbo-madeira-bh/" },
      { label: "Nossos produtos", href: "/nossos-produtos/" },
      { label: "Carimbo personalizado em BH", href: "/carimbo-personalizado-bh/" }
    ],
    whatsappMessage:
      "Olá! Li o artigo sobre carimbo automático e de madeira e quero ajuda para escolher o meu.",
    ctaTitle: "Ainda em dúvida entre os dois?",
    ctaText:
      "Conte como e onde você vai usar o carimbo. O atendimento indica o modelo e o tamanho que cabem os seus dados."
  },
  {
    path: "/blog/como-trocar-almofada-carimbo-automatico/",
    category: "Cuidados",
    title: "Como trocar a almofada e conservar o carimbo automático",
    description:
      "Sinais de que a almofada acabou, passo a passo para trocar ou reentintar a almofada do carimbo automático e cuidados simples para ele durar mais.",
    seo: {
      title: "Como trocar a almofada do carimbo automático",
      description:
        "Saiba quando trocar a almofada do carimbo automático, como fazer a troca ou reentintar sem sujar e como conservar o carimbo no dia a dia.",
      canonicalPath: "/blog/como-trocar-almofada-carimbo-automatico/"
    },
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
    readingMinutes: 4,
    stampMark: "Refil",
    lead:
      "Carimbo automático falhando quase nunca é defeito: na maioria das vezes, a almofada interna só precisa ser trocada ou receber tinta nova. É uma troca simples, que leva poucos minutos quando você sabe o modelo do seu carimbo.",
    sections: [
      {
        id: "sinais",
        heading: "Sinais de que a almofada acabou",
        blocks: [
          {
            type: "list",
            items: [
              "A impressão sai clara ou falhada, mesmo apertando normalmente",
              "Partes do texto somem, principalmente nas bordas",
              "Você precisa apertar duas vezes no mesmo lugar para ler"
            ]
          },
          {
            type: "callout",
            tone: "warning",
            title: "Se a impressão sai borrada",
            text:
              "Excesso de tinta, sujeira na borracha ou pressão demais também causam falha. Antes de trocar, limpe a borracha com cuidado e teste em um papel de rascunho."
          }
        ]
      },
      {
        id: "modelo",
        heading: "Primeiro passo: descubra o modelo",
        blocks: [
          {
            type: "paragraph",
            text:
              "Cada modelo de carimbo automático usa uma almofada de tamanho específico. A marca e o número do modelo normalmente vêm gravados no corpo do carimbo. Anote os dois e a cor da tinta antes de procurar a almofada nova."
          }
        ]
      },
      {
        id: "passo-a-passo",
        heading: "Passo a passo da troca",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Destrave a almofada",
                text:
                  "Na maioria dos modelos, você aperta o carimbo até a metade para a borracha sair de cima da almofada. Alguns modelos têm uma trava lateral que segura essa posição."
              },
              {
                title: "Puxe a almofada usada",
                text:
                  "Com o carimbo nessa posição, puxe a almofada pela lateral, segurando pela abinha. Faça isso sobre um papel, para não sujar a mesa."
              },
              {
                title: "Encaixe a nova",
                text:
                  "Empurre a almofada nova pelo mesmo caminho até ela encaixar. Solte o carimbo devagar."
              },
              {
                title: "Teste",
                text:
                  "Faça três ou quatro carimbadas em um papel de rascunho. As primeiras podem sair mais carregadas."
              }
            ]
          },
          {
            type: "paragraph",
            text:
              "O jeito exato de destravar varia de marca para marca. Se o seu carimbo veio com manual, ele é a melhor referência."
          }
        ]
      },
      {
        id: "reentintar",
        heading: "Trocar ou reentintar?",
        blocks: [
          {
            type: "paragraph",
            text:
              "Também é possível pingar tinta na almofada usada. Funciona quando a almofada está inteira e só seca. Use tinta própria para carimbo, da mesma cor, poucas gotas espalhadas, e espere absorver antes de colocar de volta. Tinta demais é a causa mais comum de carimbo borrado."
          },
          {
            type: "paragraph",
            text:
              "Se a almofada estiver deformada, rasgada ou com crosta de tinta seca, a troca é o melhor caminho."
          }
        ]
      },
      {
        id: "conservacao",
        heading: "Cuidados para o carimbo durar mais",
        blocks: [
          {
            type: "checklist",
            title: "No dia a dia",
            items: [
              "Carimbe sobre superfície lisa e firme, sem força excessiva",
              "Evite quedas, que podem desalinhar o mecanismo",
              "Guarde longe do sol e de calor, que ressecam a almofada",
              "Mantenha a borracha limpa de poeira e restos de papel"
            ]
          }
        ]
      }
    ],
    faq: [
      {
        question: "Posso usar qualquer tinta para reentintar?",
        answer:
          "Use tinta própria para carimbo e na mesma cor da almofada. Tintas de outro tipo podem danificar a borracha ou borrar a impressão."
      },
      {
        question: "Como sei qual almofada comprar?",
        answer:
          "Veja a marca e o modelo gravados no carimbo. A almofada precisa ser compatível com esse modelo. Na dúvida, consulte o atendimento com uma foto do carimbo."
      },
      {
        question: "A borracha também se desgasta?",
        answer:
          "Com o tempo e o uso, sim. Se a almofada é nova e a impressão continua falhando, vale consultar o atendimento para avaliar o carimbo."
      }
    ],
    sources: [],
    relatedLinks: [
      { label: "Carimbo automático em BH", href: "/carimbo-automatico-bh/" },
      { label: "Nossos produtos", href: "/nossos-produtos/" },
      { label: "Perguntas frequentes", href: "/perguntas-frequentes/" },
      { label: "Contato", href: "/contato/" }
    ],
    whatsappMessage:
      "Olá! Meu carimbo automático está falhando. Posso mandar uma foto para vocês verem o modelo?",
    ctaTitle: "Não achou o modelo do seu carimbo?",
    ctaText:
      "Mande uma foto pelo WhatsApp. O atendimento ajuda a identificar o modelo e orienta o que fazer."
  },
  {
    path: "/blog/prazo-carimbo-urgente-bh/",
    category: "Prazos",
    title: "Quanto tempo leva para fazer um carimbo e como pedir com urgência em BH",
    description:
      "Prazo médio de produção e entrega, o que realmente acelera um pedido de carimbo e um modelo de mensagem pronto para pedir com urgência pelo WhatsApp.",
    seo: {
      title: "Quanto tempo leva para fazer um carimbo em BH",
      description:
        "Veja o prazo médio para fazer um carimbo em BH, o que acelera o pedido e uma mensagem pronta para pedir com urgência pelo WhatsApp na BH Carimbos.",
      canonicalPath: "/blog/prazo-carimbo-urgente-bh/"
    },
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-28",
    readingMinutes: 3,
    stampMark: "Urgente",
    lead:
      "Na BH Carimbos, a produção média é de 24 horas e a entrega média é de 48 horas. Em alguns casos dá para fazer no mesmo dia, mas isso é sempre sob consulta. O que mais encurta o prazo está nas suas mãos: mandar tudo certo de primeira.",
    sections: [
      {
        id: "prazos",
        heading: "Os prazos, sem rodeio",
        blocks: [
          {
            type: "list",
            items: [
              "Produção média: 24 horas",
              "Entrega média: 48 horas, conforme a região",
              "Mesmo dia ou em até 60 minutos: pode ser possível sob consulta, conforme modelo, fila e disponibilidade"
            ]
          },
          {
            type: "callout",
            tone: "warning",
            title: "Produção rápida não é garantia",
            text:
              "O prazo curto depende do modelo, da fila de produção naquele momento e da aprovação da arte. O atendimento confirma antes de você contar com ele."
          }
        ]
      },
      {
        id: "o-que-acelera",
        heading: "O que mais acelera o pedido",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Avise a urgência na primeira mensagem",
                text: "Assim o atendimento já verifica a fila e o modelo disponível antes de qualquer outra coisa."
              },
              {
                title: "Mande os dados completos e conferidos",
                text: "Texto exato, CNPJ ou número de registro sem erro. Cada correção na arte é uma volta a mais."
              },
              {
                title: "Envie o logotipo em boa qualidade",
                text: "Se o carimbo leva logo, mande o arquivo original ou uma imagem nítida."
              },
              {
                title: "Aprove a arte assim que receber",
                text: "A produção só começa depois da aprovação. Responder rápido é o que mais encurta o prazo."
              }
            ]
          }
        ]
      },
      {
        id: "retirada-ou-entrega",
        heading: "Retirar na loja ou receber por motoboy",
        blocks: [
          {
            type: "paragraph",
            text: `Retirar é o caminho mais rápido: a loja fica na ${businessInfo.address.street}, bairro ${businessInfo.address.neighborhood}, em ${businessInfo.address.region}. A entrega por motoboy em Belo Horizonte e região depende de disponibilidade, endereço e horário.`
          },
          {
            type: "paragraph",
            text: `O atendimento funciona de ${businessInfo.openingHours.weekdays.toLowerCase()}, e no ${businessInfo.openingHours.saturday.toLowerCase()}. Pedido que chega perto do fechamento costuma ficar para o próximo período.`
          }
        ]
      },
      {
        id: "mensagem-pronta",
        heading: "Mensagem pronta para pedir com urgência",
        blocks: [
          {
            type: "messageTemplate",
            title: "Copie, preencha e envie",
            text:
              "Olá! Preciso de um carimbo com urgência.\nPara quando: \nTipo: (automático, madeira, não sei)\nTexto do carimbo:\n\nVou retirar na loja ou preciso de entrega? \nEndereço de entrega, se for o caso: "
          }
        ]
      }
    ],
    faq: [
      {
        question: "Vocês fazem carimbo no mesmo dia?",
        answer:
          "Pode ser possível em alguns casos, sob consulta. Depende do modelo, da fila de produção, da confirmação dos dados e da disponibilidade no momento do pedido."
      },
      {
        question: "A produção começa quando?",
        answer:
          "Depois que você confere e aprova a arte enviada pelo atendimento."
      },
      {
        question: "A entrega urgente é garantida?",
        answer:
          "Não. A entrega por motoboy depende de disponibilidade, região e horário. O atendimento confirma as opções pelo WhatsApp."
      }
    ],
    sources: [],
    relatedLinks: [
      { label: "Carimbo urgente em BH", href: "/carimbo-urgente-bh/" },
      { label: "Carimbo na hora em BH", href: "/carimbo-na-hora-bh/" },
      { label: "Prazos e entrega", href: "/prazos-e-entrega/" },
      { label: "Carimbos no Centro de BH", href: "/carimbos-centro-bh/" }
    ],
    whatsappMessage: "Olá! Preciso de um carimbo com urgência. Pode verificar o prazo para mim?",
    ctaTitle: "Precisa para hoje?",
    ctaText:
      "Chame no WhatsApp e avise a urgência logo na primeira mensagem. O atendimento confirma o que é possível antes de você contar com o prazo."
  }
];

export function getBlogPost(path: string): BlogPost | undefined {
  return blogPosts.find((post) => post.path === path);
}

export function isBlogIndex(path: string): boolean {
  return path === blogIndex.path;
}

export function formatBlogDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
}

export function getBlogPostSchemas(post: BlogPost) {
  const pageUrl = getCanonicalUrl(post.path);

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.domain },
        { "@type": "ListItem", position: 2, name: "Blog", item: getCanonicalUrl(blogIndex.path) },
        { "@type": "ListItem", position: 3, name: post.title, item: pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      inLanguage: siteConfig.locale,
      image: new URL(siteConfig.ogImage, siteConfig.domain).toString(),
      author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.domain },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: { "@type": "ImageObject", url: getLogoUrl() }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer }
      }))
    }
  ];
}

export function getBlogIndexSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.domain },
        { "@type": "ListItem", position: 2, name: "Blog", item: getCanonicalUrl(blogIndex.path) }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: `Blog ${siteConfig.name}`,
      description: blogIndex.description,
      url: getCanonicalUrl(blogIndex.path),
      inLanguage: siteConfig.locale,
      blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: getCanonicalUrl(post.path),
        datePublished: post.publishedAt
      }))
    }
  ];
}
