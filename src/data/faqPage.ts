import { createWhatsAppUrl } from "@lib/whatsapp";
import { getFaqPageSchema } from "@lib/seo";

export type FaqPageQuestion = {
  question: string;
  answer: string;
};

export type FaqPageCategory = {
  id: string;
  title: string;
  description: string;
  questions: FaqPageQuestion[];
};

export const faqPage = {
  path: "/perguntas-frequentes/",
  eyebrow: "Perguntas frequentes",
  title: "Perguntas frequentes sobre carimbos em BH",
  subtitle:
    "Reunimos as principais dúvidas sobre modelos de carimbos, pedidos pelo WhatsApp, prazos, entrega por motoboy, retirada em Venda Nova, formas de pagamento e informações necessárias para solicitar um orçamento.",
  seo: {
    title: "Perguntas Frequentes sobre Carimbos em BH",
    description:
      "Tire dúvidas sobre carimbos personalizados em BH, prazos, entrega, retirada, pagamento, modelos, carimbo CNPJ, carimbos profissionais e pedidos pelo WhatsApp.",
    canonicalPath: "/perguntas-frequentes/"
  },
  finalCta: {
    title: "Ainda ficou com alguma dúvida?",
    text: "Envie sua pergunta pelo WhatsApp e receba orientação sobre o modelo ideal, dados necessários, prazo de produção, retirada ou entrega.",
    label: "Falar com a BH Carimbos pelo WhatsApp",
    href: createWhatsAppUrl("Olá! Vim pela página de perguntas frequentes e ainda tenho uma dúvida sobre carimbos.")
  },
  usefulLinks: [
    { label: "Central de carimbos em BH", href: "/carimbos-bh/" },
    { label: "Produtos e modelos", href: "/nossos-produtos/" },
    { label: "Como pedir", href: "/como-pedir/" },
    { label: "Prazos e entrega", href: "/prazos-e-entrega/" },
    { label: "Contato", href: "/contato/" },
    { label: "Política de cookies", href: "/cookies/" },
    { label: "Política de privacidade", href: "/politica-de-privacidade/" }
  ],
  categories: [
    {
      id: "pedido-e-atendimento",
      title: "Pedido e atendimento",
      description: "Como iniciar o pedido, enviar dados e receber orientação pelo WhatsApp.",
      questions: [
        {
          question: "Como faço para pedir um carimbo?",
          answer:
            "Você pode pedir pelo WhatsApp da BH Carimbos. Envie os dados que devem aparecer no carimbo, informe a finalidade de uso e, se tiver preferência, diga o modelo desejado. O atendimento orienta o modelo mais adequado, confirma as informações e passa as condições de produção, retirada ou entrega."
        },
        {
          question: "Preciso ir até a loja para fazer o pedido?",
          answer:
            "Não necessariamente. O pedido pode ser iniciado pelo WhatsApp. Você pode enviar as informações do carimbo, tirar dúvidas e combinar retirada ou entrega. A loja física fica em Venda Nova/Maria Helena para quem preferir retirar ou ser atendido presencialmente."
        },
        {
          question: "Posso fazer tudo pelo WhatsApp?",
          answer:
            "Sim. Em muitos casos, o atendimento, envio dos dados, confirmação do modelo e orientação sobre prazo podem ser feitos pelo WhatsApp. Dependendo do pedido, o atendimento pode solicitar confirmação adicional das informações antes da produção."
        },
        {
          question: "Quais informações preciso enviar para pedir um carimbo?",
          answer:
            "Depende do tipo de carimbo. Em geral, envie o texto que deve aparecer, nome, empresa, CNPJ, profissão, registro profissional, endereço, telefone ou outras informações desejadas. Para carimbos profissionais, os dados são informados pelo próprio cliente."
        },
        {
          question: "Vocês ajudam a escolher o modelo ideal?",
          answer:
            "Sim. Se você não souber qual modelo escolher, envie sua necessidade pelo WhatsApp. O atendimento pode orientar conforme o uso, quantidade de informações, frequência de uso e urgência."
        },
        {
          question: "Posso enviar uma arte, logotipo ou imagem?",
          answer:
            "Sim, você pode enviar arquivos ou imagens pelo WhatsApp para análise. A viabilidade depende da qualidade do arquivo, do tipo de carimbo e do espaço disponível no modelo escolhido."
        }
      ]
    },
    {
      id: "prazos-e-urgencia",
      title: "Prazos e urgência",
      description: "Produção média, pedidos rápidos e consulta de disponibilidade.",
      questions: [
        {
          question: "Qual é o prazo médio de produção?",
          answer:
            "A produção média é de 24 horas, conforme o modelo, quantidade de informações, fila de produção e disponibilidade."
        },
        {
          question: "Vocês fazem carimbo no mesmo dia?",
          answer:
            "Pode ser possível em alguns casos, sob consulta. A produção no mesmo dia depende do modelo, da fila de produção, da confirmação dos dados e da disponibilidade no momento do pedido."
        },
        {
          question: "É possível fazer carimbo em até 60 minutos?",
          answer:
            "Pode ser possível somente sob consulta. Esse prazo não é uma garantia para todos os pedidos e depende do modelo, complexidade, fila de produção e disponibilidade."
        },
        {
          question: "O prazo muda conforme o modelo?",
          answer:
            "Sim. Alguns modelos ou pedidos com mais detalhes podem exigir mais tempo de conferência ou produção. O atendimento confirma a previsão conforme o caso."
        },
        {
          question: "Se eu tiver urgência, o que devo fazer?",
          answer:
            "Chame pelo WhatsApp e informe que precisa de urgência. Envie os dados do carimbo e a finalidade para que o atendimento verifique a possibilidade de produção rápida."
        },
        {
          question: "A entrega também pode ser urgente?",
          answer:
            "A entrega por motoboy depende de disponibilidade, região e horário. Em caso de urgência, consulte o atendimento pelo WhatsApp para verificar as opções possíveis."
        }
      ]
    },
    {
      id: "retirada-entrega-localizacao",
      title: "Retirada, entrega e localização",
      description: "Endereço da loja, retirada em Venda Nova e entrega por motoboy.",
      questions: [
        {
          question: "Onde fica a loja física?",
          answer:
            "A loja física fica na Rua Tenente Marino Freire, 679, Bairro Maria Helena, região de Venda Nova, Belo Horizonte/MG."
        },
        {
          question: "Vocês atendem em toda Belo Horizonte?",
          answer:
            "A BH Carimbos atende clientes de Belo Horizonte e região por WhatsApp, com possibilidade de retirada na loja ou entrega por motoboy conforme disponibilidade e localidade."
        },
        {
          question: "Vocês têm loja na Pampulha?",
          answer:
            "Não. A loja física fica em Venda Nova/Maria Helena. Clientes da Pampulha podem ser atendidos pelo WhatsApp e consultar entrega por motoboy conforme disponibilidade."
        },
        {
          question: "Vocês entregam por motoboy?",
          answer:
            "Sim, há possibilidade de entrega por motoboy em BH e região, conforme disponibilidade, endereço e horário. A entrega deve ser confirmada no atendimento."
        },
        {
          question: "Posso retirar o carimbo na loja?",
          answer:
            "Sim. Após a confirmação do pedido e da produção, você pode combinar retirada na loja física em Venda Nova/Maria Helena."
        },
        {
          question: "Qual é o horário de atendimento?",
          answer: "O atendimento funciona de segunda a sexta, das 07:00 às 18:00, e sábado, das 07:00 às 12:00."
        }
      ]
    },
    {
      id: "modelos-e-tipos",
      title: "Modelos e tipos de carimbo",
      description: "Principais modelos, usos e marcas trabalhadas.",
      questions: [
        {
          question: "Quais tipos de carimbo vocês fazem?",
          answer:
            "A BH Carimbos trabalha com carimbos personalizados, carimbos automáticos, carimbos de madeira, carimbos CNPJ, carimbos profissionais, carimbos para empresas, modelos datadores, numeradores e outras opções conforme a necessidade do cliente."
        },
        {
          question: "O que é um carimbo automático?",
          answer:
            "É um modelo prático para uso frequente, geralmente com estrutura que facilita a aplicação no dia a dia. É muito usado em escritórios, recepções, empresas, clínicas e rotinas administrativas."
        },
        {
          question: "O que é um carimbo de madeira?",
          answer:
            "É um modelo tradicional de carimbo, geralmente usado com almofada separada. Pode ser uma opção para usos específicos, pedidos personalizados ou quem prefere um modelo mais simples."
        },
        {
          question: "Vocês fazem carimbo CNPJ?",
          answer:
            "Sim. É possível solicitar carimbo com CNPJ, razão social, nome fantasia, endereço, telefone ou outros dados comerciais informados pelo cliente."
        },
        {
          question: "Vocês fazem carimbo para empresa?",
          answer:
            "Sim. A BH Carimbos atende empresas, MEIs, prestadores de serviço, escritórios, lojas, clínicas e outros negócios que precisam de carimbos para documentos, identificação e rotina administrativa."
        },
        {
          question: "Vocês fazem carimbo datador?",
          answer:
            "Sim, há opções de carimbo datador conforme a necessidade. Esse tipo de carimbo costuma ser usado para controle de datas, recebimentos, protocolos e organização de documentos."
        },
        {
          question: "Vocês fazem carimbo numerador?",
          answer:
            "Sim, há opções de carimbo numerador conforme o uso desejado. Ele pode ajudar em controle sequencial, organização de documentos, processos internos e protocolos."
        },
        {
          question: "Vocês trabalham com marcas específicas?",
          answer:
            "A BH Carimbos trabalha com marcas como Trodat, Colop, Nykon ou similares, conforme disponibilidade e necessidade do pedido."
        }
      ]
    },
    {
      id: "carimbos-profissionais",
      title: "Carimbos profissionais",
      description: "Dúvidas sobre carimbos para profissões e dados profissionais.",
      questions: [
        {
          question: "Vocês fazem carimbo para médico?",
          answer:
            "Sim. É possível solicitar carimbo médico com os dados profissionais informados pelo cliente. O atendimento pode orientar o modelo mais adequado conforme a quantidade de informações e o uso."
        },
        {
          question: "Vocês fazem carimbo para advogado?",
          answer:
            "Sim. Advogados e escritórios de advocacia podem solicitar carimbos personalizados com os dados informados pelo cliente, para uso em rotina documental e identificação profissional."
        },
        {
          question: "Vocês fazem carimbo para psicólogo?",
          answer:
            "Sim. Psicólogos podem solicitar carimbos personalizados com os dados profissionais informados pelo cliente, conforme a necessidade de uso em consultório ou atendimento."
        },
        {
          question: "Vocês fazem carimbo para nutricionista?",
          answer: "Sim. Nutricionistas podem solicitar carimbos profissionais personalizados com os dados informados pelo cliente."
        },
        {
          question: "Vocês fazem carimbo para enfermagem?",
          answer:
            "Sim. Profissionais de enfermagem e técnicos de enfermagem podem solicitar carimbos com os dados profissionais informados pelo cliente."
        },
        {
          question: "Quais dados profissionais devem ir no carimbo?",
          answer:
            "Os dados devem ser informados pelo próprio cliente. Em geral, podem incluir nome, profissão, registro profissional, especialidade, telefone, clínica, empresa ou outras informações necessárias ao uso."
        },
        {
          question: "Vocês conferem regras de conselhos profissionais?",
          answer:
            "A BH Carimbos produz o carimbo conforme os dados informados pelo cliente. Quando houver exigência específica de conselho profissional, o cliente deve conferir previamente quais informações deseja incluir."
        }
      ]
    },
    {
      id: "arte-layout-personalizacao",
      title: "Arte, layout e personalização",
      description: "Personalização de texto, logotipo, tamanho e conferência de dados.",
      questions: [
        {
          question: "Posso personalizar o texto do carimbo?",
          answer:
            "Sim. O carimbo pode ser personalizado com as informações desejadas, respeitando o espaço do modelo escolhido e a legibilidade do resultado final."
        },
        {
          question: "O carimbo pode ter logotipo?",
          answer:
            "Pode ser possível, dependendo da qualidade do arquivo, do tipo de logotipo, do tamanho do carimbo e da área disponível. Envie o arquivo pelo WhatsApp para avaliação."
        },
        {
          question: "Posso escolher o tamanho do carimbo?",
          answer:
            "O tamanho depende dos modelos disponíveis e da quantidade de informações que precisam aparecer. O atendimento pode orientar uma opção adequada."
        },
        {
          question: "Posso aprovar o layout antes da produção?",
          answer:
            "Quando aplicável, as informações podem ser conferidas antes da produção. É importante revisar nomes, números, registros, CNPJ e demais dados enviados."
        },
        {
          question: "O que acontece se eu enviar algum dado errado?",
          answer:
            "Os dados enviados pelo cliente devem ser conferidos antes da produção. Se houver erro nas informações fornecidas, pode ser necessário refazer o pedido ou ajustar conforme avaliação do atendimento."
        },
        {
          question: "Dá para fazer carimbo com muitas informações?",
          answer:
            "Depende do modelo escolhido e do espaço disponível. Muitas informações podem reduzir a legibilidade. O atendimento pode orientar um modelo mais adequado."
        }
      ]
    },
    {
      id: "pagamento-e-nota-fiscal",
      title: "Pagamento e nota fiscal",
      description: "Formas de pagamento, nota fiscal e orçamento.",
      questions: [
        {
          question: "Quais formas de pagamento são aceitas?",
          answer: "A BH Carimbos aceita Pix, cartão de crédito e cartão de débito."
        },
        {
          question: "Vocês aceitam Pix?",
          answer: "Sim. Pix é uma das formas de pagamento disponíveis."
        },
        {
          question: "Vocês aceitam cartão?",
          answer: "Sim. São aceitos cartão de crédito e cartão de débito."
        },
        {
          question: "Vocês emitem nota fiscal?",
          answer: "Sim. A BH Carimbos emite nota fiscal."
        },
        {
          question: "O preço aparece no site?",
          answer:
            "Não. O valor pode variar conforme modelo, tamanho, quantidade de informações, personalização e necessidade do pedido. Para orçamento, fale pelo WhatsApp."
        },
        {
          question: "Posso pedir orçamento antes de confirmar?",
          answer: "Sim. Você pode solicitar orientação e orçamento pelo WhatsApp antes de confirmar o pedido."
        }
      ]
    },
    {
      id: "uso-cuidados-limitacoes",
      title: "Uso, cuidados e limitações",
      description: "Cuidados básicos, legibilidade e limites de uso.",
      questions: [
        {
          question: "O carimbo de assinatura tem validade jurídica?",
          answer:
            "A aceitação de um carimbo de assinatura depende do tipo de documento, finalidade e regra interna de cada instituição. Ele não deve ser tratado como substituto universal de assinatura manual ou digital."
        },
        {
          question: "Como saber se meu carimbo ficará legível?",
          answer:
            "A legibilidade depende do tamanho do carimbo, quantidade de texto, tipo de informação e qualidade da arte enviada. O atendimento pode orientar para evitar excesso de informação."
        },
        {
          question: "Posso usar carimbo em qualquer documento?",
          answer:
            "Depende do documento e da finalidade. Alguns documentos podem ter regras próprias de aceitação. Quando houver dúvida, confirme com a instituição responsável pelo documento."
        },
        {
          question: "O carimbo precisa de algum cuidado?",
          answer:
            "Sim. Evite quedas, excesso de pressão, sujeira e armazenamento inadequado. O cuidado correto ajuda a preservar a qualidade de uso."
        },
        {
          question: "Se o carimbo falhar, o que pode ser?",
          answer:
            "Pode haver necessidade de verificar tinta, almofada, pressão de uso, superfície aplicada ou desgaste. Consulte o atendimento para orientação conforme o modelo."
        }
      ]
    },
    {
      id: "regioes-e-publicos",
      title: "Atendimento para regiões e públicos",
      description: "Atendimento para Venda Nova, Pampulha, empresas e pessoas físicas.",
      questions: [
        {
          question: "Vocês atendem clientes de Venda Nova?",
          answer: "Sim. A loja física fica na região de Venda Nova/Maria Helena, em Belo Horizonte."
        },
        {
          question: "Vocês atendem clientes da Pampulha?",
          answer: "Sim. Clientes da Pampulha podem pedir pelo WhatsApp e consultar entrega por motoboy conforme disponibilidade."
        },
        {
          question: "Vocês atendem empresas?",
          answer: "Sim. A BH Carimbos atende empresas, MEIs, escritórios, clínicas, lojas e prestadores de serviço."
        },
        {
          question: "Vocês atendem pessoa física?",
          answer: "Sim. Pessoas físicas também podem solicitar carimbos personalizados conforme a necessidade."
        },
        {
          question: "Vocês fazem carimbo para clínicas e consultórios?",
          answer:
            "Sim. Clínicas e consultórios podem solicitar carimbos para profissionais, recepção, documentos e rotina de atendimento."
        }
      ]
    },
    {
      id: "seguranca-privacidade-dados",
      title: "Segurança, privacidade e dados enviados",
      description: "Uso dos dados enviados e links para políticas do site.",
      questions: [
        {
          question: "Os dados enviados pelo WhatsApp são usados para quê?",
          answer:
            "Os dados enviados são usados para atendimento, orçamento, produção do carimbo, retirada, entrega e emissão de nota fiscal quando aplicável."
        },
        {
          question: "Preciso enviar documentos pessoais?",
          answer:
            "Em geral, não é necessário enviar documentos pessoais para pedir um orçamento simples. Envie apenas os dados que devem constar no carimbo ou que sejam necessários para atendimento."
        },
        {
          question: "Posso pedir remoção ou correção dos meus dados?",
          answer:
            "Sim. Solicitações relacionadas a dados pessoais podem ser enviadas pelos canais de contato informados na Política de Privacidade."
        },
        {
          question: "Onde vejo a Política de Privacidade?",
          answer: "A Política de Privacidade está disponível em /politica-de-privacidade/."
        },
        {
          question: "Onde vejo a Política de Cookies?",
          answer: "A Política de Cookies está disponível em /cookies/."
        }
      ]
    },
    {
      id: "duvidas-rapidas",
      title: "Dúvidas rápidas",
      description: "Respostas diretas para dúvidas comuns antes do contato.",
      questions: [
        {
          question: "A BH Carimbos faz carimbo personalizado em BH?",
          answer:
            "Sim. A BH Carimbos faz carimbos personalizados em Belo Horizonte, com atendimento pelo WhatsApp, retirada em Venda Nova e entrega por motoboy conforme disponibilidade."
        },
        {
          question: "Preciso saber o nome do modelo antes de pedir?",
          answer:
            "Não. Basta explicar sua necessidade ou enviar os dados que devem aparecer no carimbo. O atendimento pode orientar o modelo ideal."
        },
        {
          question: "Posso pedir mais de um carimbo?",
          answer: "Sim. Informe a quantidade e os dados de cada carimbo para orçamento e orientação."
        },
        {
          question: "Vocês fazem carimbo para MEI?",
          answer:
            "Sim. MEIs podem solicitar carimbos com CNPJ, nome empresarial, nome fantasia ou outros dados comerciais informados pelo cliente."
        },
        {
          question: "Vocês fazem carimbo para recibo, protocolo ou controle interno?",
          answer:
            "Sim. É possível solicitar carimbos para recibos, protocolos, controle de documentos, identificação interna e outras rotinas administrativas."
        },
        {
          question: "Como tiro uma dúvida que não está na página?",
          answer:
            "Fale com a BH Carimbos pelo WhatsApp. O atendimento pode orientar conforme o tipo de carimbo, prazo, retirada, entrega e disponibilidade."
        }
      ]
    }
  ] satisfies FaqPageCategory[]
} as const;

export function getFaqPage(path: string) {
  return path === faqPage.path ? faqPage : undefined;
}

export type FaqPageData = typeof faqPage;

export function getFaqQuestions(): FaqPageQuestion[] {
  return faqPage.categories.flatMap((category) => category.questions);
}

export function getFaqPageSchemas() {
  return [getFaqPageSchema(getFaqQuestions())];
}
