export type ProductCategoryFilter =
  | "todos"
  | "automaticos"
  | "madeira"
  | "empresas"
  | "profissionais"
  | "medicos"
  | "embalagens"
  | "assinatura";

export type ProductCatalogItem = {
  id: string;
  title: string;
  model: string;
  category: string;
  categoryIds: ProductCategoryFilter[];
  image: string;
  alt: string;
  summary: string;
  tags: string[];
  searchTerms: string[];
  variations?: {
    label: string;
    image: string;
    color?: string;
  }[];
  modal: {
    title: string;
    summary: string;
    benefits: string[];
    indicatedFor: string[];
    applications: string[];
    personalization: string[];
    dataInstructions: string[];
    production: string[];
    prazo: string;
    structure: string;
    printQuality: string;
    modelInfo: string;
    differentials: string[];
    whatsappMessage: string;
  };
};

export type ProductCatalogSection = {
  id: string;
  title: string;
  description: string;
  productIds: string[];
};

const productImageBase = "/assets/carimbos-produtos";

export const productFilters: { id: ProductCategoryFilter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "automaticos", label: "Automáticos" },
  { id: "madeira", label: "Madeira" },
  { id: "empresas", label: "Empresas" },
  { id: "profissionais", label: "Profissionais" },
  { id: "medicos", label: "Médicos / CRM-MG" },
  { id: "embalagens", label: "Embalagens" },
  { id: "assinatura", label: "Assinatura" }
];

export const productCatalogItems: ProductCatalogItem[] = [
  {
    id: "nykon-302",
    title: "Carimbo Automático Nykon 302",
    model: "Nykon 302",
    category: "Automático compacto",
    categoryIds: ["automaticos", "empresas", "profissionais", "medicos", "assinatura"],
    image: `${productImageBase}/Nykon-302.jpeg`,
    alt: "Carimbo automático Nykon 302 personalizado",
    summary: "Modelo automático prático para rotina comercial, profissional e administrativa.",
    tags: ["Uso frequente", "Empresas", "Profissionais"],
    searchTerms: ["nykon", "302", "automatico", "automático", "cnpj", "medico", "médico", "crm", "assinatura", "profissional"],
    variations: [
      { label: "Azul claro", image: `${productImageBase}/Nykon-302-AzulClaro.jpeg`, color: "#9ad8e8" },
      { label: "Bege", image: `${productImageBase}/Nykon-302-Bege.jpeg`, color: "#d8c8a8" },
      { label: "Branco", image: `${productImageBase}/Nykon-302-Branco.jpeg`, color: "#f7f7f7" },
      { label: "Cinza", image: `${productImageBase}/Nykon-302-Cinza.jpeg`, color: "#9ca3af" },
      { label: "Preto", image: `${productImageBase}/Nykon-302-Preto.jpeg`, color: "#171717" },
      { label: "Rosa", image: `${productImageBase}/Nykon-302-Rosa.jpeg`, color: "#f3a6bb" },
      { label: "Roxo", image: `${productImageBase}/Nykon-302-Roxo.jpeg`, color: "#7c3aed" },
      { label: "Textura madeira", image: `${productImageBase}/Nykon-302-Textura-Madeira.jpeg`, color: "#9a6a3a" }
    ],
    modal: {
      title: "Nykon 302 personalizado para uso diário",
      summary: "Boa opção para quem precisa de carimbo automático em escritório, recepção, empresa ou rotina profissional.",
      benefits: ["Aplicação prática no dia a dia", "Estrutura própria para uso frequente", "Composição personalizada conforme os dados enviados"],
      indicatedFor: ["Empresas e MEIs", "Profissionais liberais", "Recepções e escritórios", "Carimbo CNPJ, profissional ou assinatura"],
      applications: ["Identificação de documentos", "Dados comerciais", "Rotina administrativa", "Uso profissional com dados informados pelo cliente"],
      personalization: ["Nome, empresa ou razão social", "CNPJ e dados comerciais", "Registro profissional quando aplicável", "Texto curto ou assinatura, conforme viabilidade"],
      dataInstructions: ["Envie os dados pelo WhatsApp", "Revise nomes, números e registros antes da aprovação", "Informe a finalidade de uso para orientação do modelo"],
      production: ["O atendimento orienta a composição", "A arte pode ser conferida antes da produção", "Produção conforme confirmação dos dados e disponibilidade"],
      prazo: "Produção média de 24h. Produção rápida no mesmo dia ou até 60 min somente sob consulta.",
      structure: "Modelo automático indicado para rotina comercial e profissional.",
      printQuality: "Impressão limpa e legível quando o layout respeita o espaço do modelo.",
      modelInfo: "Marca/modelo: Nykon 302.",
      differentials: ["Variações de cor em um único produto", "Pedido online pelo WhatsApp", "Retirada em Venda Nova/Maria Helena ou motoboy sob consulta"],
      whatsappMessage: "Olá! Vim pelo site e quero informações sobre o Carimbo Automático Nykon 302 personalizado."
    }
  },
  {
    id: "nykon-342",
    title: "Carimbo Automático Nykon 342",
    model: "Nykon 342",
    category: "Automático profissional",
    categoryIds: ["automaticos", "empresas", "profissionais"],
    image: `${productImageBase}/Nykon-342-Roxo.jpeg`,
    alt: "Carimbo automático Nykon 342 roxo",
    summary: "Modelo automático para composições profissionais e dados organizados.",
    tags: ["Automático", "Profissional", "Dados organizados"],
    searchTerms: ["nykon", "342", "automatico", "automático", "profissional", "empresa", "cnpj"],
    modal: {
      title: "Nykon 342 para rotinas profissionais",
      summary: "Indicado para pedidos personalizados com dados profissionais, comerciais ou administrativos.",
      benefits: ["Modelo indicado para rotina profissional", "Ajuda a organizar dados no carimbo", "Pedido orientado pelo WhatsApp"],
      indicatedFor: ["Profissionais liberais", "Empresas", "Escritórios", "Clínicas e atendimento"],
      applications: ["Documentos", "Identificação", "Protocolos", "Dados comerciais"],
      personalization: ["Nome e profissão", "Empresa e CNPJ", "Contato ou setor", "Texto personalizado"],
      dataInstructions: ["Envie os dados completos", "Informe se deseja logotipo", "Confira a arte antes da produção"],
      production: ["Modelo confirmado pelo atendimento", "Layout ajustado conforme espaço disponível", "Produção conforme disponibilidade"],
      prazo: "Produção média de 24h, com urgência somente sob consulta.",
      structure: "Estrutura própria para uso frequente em rotina profissional.",
      printQuality: "Boa legibilidade quando os dados são distribuídos de forma adequada.",
      modelInfo: "Marca/modelo: Nykon 342.",
      differentials: ["Atendimento para BH e região", "Nota fiscal", "Orientação para escolha do modelo"],
      whatsappMessage: "Olá! Vim pelo site e quero informações sobre carimbo profissional personalizado."
    }
  },
  {
    id: "nykon-355",
    title: "Carimbo Automático Nykon 355",
    model: "Nykon 355",
    category: "Automático com mais presença",
    categoryIds: ["automaticos", "empresas", "profissionais"],
    image: `${productImageBase}/Nykon-355.jpeg`,
    alt: "Carimbo automático Nykon 355",
    summary: "Opção para pedidos com mais informação e presença visual.",
    tags: ["Automático", "Empresas", "Mais informação"],
    searchTerms: ["nykon", "355", "automatico", "automático", "empresa", "cnpj", "profissional"],
    modal: {
      title: "Nykon 355 para composições com mais dados",
      summary: "Modelo indicado quando o carimbo precisa acomodar dados comerciais ou profissionais com boa organização.",
      benefits: ["Ajuda em composições com mais informação", "Uso profissional", "Orientação antes da produção"],
      indicatedFor: ["Empresas", "Setores administrativos", "Profissionais", "Pedidos personalizados"],
      applications: ["Dados de empresa", "Identificação de setores", "Textos personalizados", "Rotina administrativa"],
      personalization: ["CNPJ, razão social e contato", "Nome profissional", "Setor ou função", "Logotipo quando viável"],
      dataInstructions: ["Envie os dados em texto", "Informe prioridades do conteúdo", "Confirme a arte recebida"],
      production: ["O atendimento avalia a composição", "A produção ocorre após confirmação dos dados", "Retirada e entrega são combinadas pelo WhatsApp"],
      prazo: "Produção média de 24h, conforme modelo e aprovação da arte.",
      structure: "Modelo indicado para rotina comercial e profissional.",
      printQuality: "Impressão legível quando a quantidade de informação respeita o espaço do modelo.",
      modelInfo: "Marca/modelo: Nykon 355.",
      differentials: ["Atendimento com nota fiscal", "Pedido online", "Entrega por motoboy conforme disponibilidade"],
      whatsappMessage: "Olá! Vim pelo site e quero informações sobre carimbo profissional personalizado."
    }
  },
  {
    id: "trodat-3911",
    title: "Carimbo Automático Trodat 3911",
    model: "Trodat 3911",
    category: "Automático",
    categoryIds: ["automaticos", "empresas", "profissionais"],
    image: `${productImageBase}/Trodat-3911-Azul.jpeg`,
    alt: "Carimbo automático Trodat 3911 azul",
    summary: "Modelo Trodat para uso recorrente em escritório, empresa e atendimento.",
    tags: ["Trodat", "Automático", "Uso recorrente"],
    searchTerms: ["trodat", "3911", "automatico", "automático", "empresa", "profissional"],
    modal: {
      title: "Trodat 3911 para uso frequente",
      summary: "Alternativa automática para quem busca praticidade em tarefas recorrentes.",
      benefits: ["Uso prático", "Indicado para rotina de escritório", "Personalização conforme dados enviados"],
      indicatedFor: ["Empresas", "Recepções", "Profissionais", "Rotina documental"],
      applications: ["Identificação", "Protocolos", "Dados comerciais", "Atendimento"],
      personalization: ["Nome ou empresa", "Texto administrativo", "Dados de contato", "CNPJ quando aplicável"],
      dataInstructions: ["Envie o texto final", "Informe o uso pretendido", "Revise a arte antes da produção"],
      production: ["Atendimento orienta o modelo", "Produção após confirmação", "Retirada ou entrega combinada pelo WhatsApp"],
      prazo: "Produção média de 24h. Consulte urgência pelo WhatsApp.",
      structure: "Modelo automático para rotina de uso frequente.",
      printQuality: "Resultado limpo e legível quando o layout respeita a área disponível.",
      modelInfo: "Marca/modelo: Trodat 3911.",
      differentials: ["Marca reconhecida", "Pedido orientado", "Mais de 40 anos de mercado"],
      whatsappMessage: "Olá! Vim pelo site e quero informações sobre carimbo profissional personalizado."
    }
  },
  {
    id: "trodat-4911",
    title: "Carimbo Automático Trodat 4911",
    model: "Trodat 4911",
    category: "Automático profissional",
    categoryIds: ["automaticos", "empresas", "profissionais", "medicos", "assinatura"],
    image: `${productImageBase}/Trodat-4911-Preto.jpeg`,
    alt: "Carimbo automático Trodat 4911 preto",
    summary: "Modelo automático versátil para empresas, profissionais e carimbos de identificação.",
    tags: ["Trodat", "CNPJ", "Profissional"],
    searchTerms: ["trodat", "4911", "automatico", "automático", "cnpj", "medico", "médico", "crm", "assinatura", "profissional"],
    variations: [
      { label: "Preto", image: `${productImageBase}/Trodat-4911-Preto.jpeg`, color: "#171717" },
      { label: "Roxo", image: `${productImageBase}/Trodat-4911-Roxo.jpeg`, color: "#7c3aed" },
      { label: "Preto com arte ilustrativa", image: `${productImageBase}/Trodat-4911-Preto-IA.jpeg`, color: "#27272a" },
      { label: "Roxo com arte ilustrativa", image: `${productImageBase}/Trodat-4911-ROXO-IA.jpeg`, color: "#8b5cf6" },
      { label: "Modelo ilustrativo", image: `${productImageBase}/Trodat-4911-IA.jpeg`, color: "#e5e7eb" }
    ],
    modal: {
      title: "Trodat 4911 personalizado",
      summary: "Modelo automático muito usado para identificação profissional, empresas e documentos de rotina.",
      benefits: ["Versátil para diferentes usos", "Estrutura própria para uso frequente", "Personalização conforme os dados confirmados"],
      indicatedFor: ["Carimbo CNPJ", "Carimbo profissional", "Carimbo médico", "Carimbo de assinatura"],
      applications: ["Documentos comerciais", "Receituários e documentos profissionais", "Rotina administrativa", "Assinatura com uso cauteloso"],
      personalization: ["Nome, profissão e registro", "Razão social e CNPJ", "Texto de identificação", "Assinatura ou logotipo quando viável"],
      dataInstructions: ["Dados profissionais devem ser informados pelo cliente", "Revise registros e números antes de aprovar", "Informe se o pedido vem de fluxo profissional específico"],
      production: ["O atendimento orienta a composição", "A arte é conferida antes da produção quando aplicável", "Produção conforme confirmação dos dados e disponibilidade"],
      prazo: "Produção média de 24h. Produção rápida somente sob consulta.",
      structure: "Modelo automático indicado para rotina comercial e profissional.",
      printQuality: "Impressão limpa e legível quando o layout respeita o espaço do modelo.",
      modelInfo: "Marca/modelo: Trodat 4911.",
      differentials: ["Variações tratadas como um único produto", "Boa opção para carimbos profissionais", "Atendimento online para BH e região"],
      whatsappMessage: "Olá! Vim pelo site e quero informações sobre o Carimbo Automático Trodat 4911 personalizado."
    }
  },
  {
    id: "madeira-personalizado",
    title: "Carimbo de Madeira Personalizado",
    model: "Madeira",
    category: "Manual tradicional",
    categoryIds: ["madeira", "embalagens", "empresas"],
    image: `${productImageBase}/Carimbo-Madeira.jpeg`,
    alt: "Carimbo de madeira personalizado",
    summary: "Modelo manual para texto, marca, embalagem e uso personalizado.",
    tags: ["Madeira", "Manual", "Personalizado"],
    searchTerms: ["madeira", "manual", "personalizado", "embalagem", "kraft", "empresa", "marca"],
    modal: {
      title: "Carimbo de madeira personalizado",
      summary: "Opção tradicional para quem precisa de carimbo manual com texto, marca ou composição simples.",
      benefits: ["Visual tradicional", "Bom para usos específicos", "Personalização conforme necessidade"],
      indicatedFor: ["Embalagens", "Pequenos negócios", "Identificação simples", "Uso eventual"],
      applications: ["Papel kraft", "Etiquetas", "Identificação de marca", "Textos personalizados"],
      personalization: ["Nome da marca", "Texto curto", "CNPJ ou contato quando necessário", "Logotipo simples, se houver boa leitura"],
      dataInstructions: ["Envie texto e referência visual", "Informe onde pretende aplicar", "Confirme a arte antes da produção"],
      production: ["O atendimento avalia a viabilidade", "Modelo e composição são confirmados pelo WhatsApp", "Produção conforme dados aprovados"],
      prazo: "Produção média de 24h, com urgência somente sob consulta.",
      structure: "Modelo manual geralmente usado com almofada separada.",
      printQuality: "A qualidade da impressão depende do layout, superfície, tinta/almofada e forma de aplicação.",
      modelInfo: "Tipo: carimbo de madeira personalizado.",
      differentials: ["Indicado para embalagens e usos personalizados", "Retirada em Venda Nova/Maria Helena", "Atendimento com orientação"],
      whatsappMessage: "Olá! Vim pelo site e quero informações sobre carimbo de madeira personalizado."
    }
  },
  {
    id: "carimbo-embalagem",
    title: "Carimbo para Embalagem",
    model: "Aplicação personalizada",
    category: "Embalagens",
    categoryIds: ["embalagens", "madeira", "empresas"],
    image: `${productImageBase}/Exemplo-Emabalagem-Carimbada.jpeg`,
    alt: "Exemplo de embalagem carimbada",
    summary: "Solução para personalizar embalagem, sacola, etiqueta ou papel com identidade da marca.",
    tags: ["Embalagem", "Marca", "Personalizado"],
    searchTerms: ["embalagem", "embalagens", "kraft", "marca", "personalizado", "madeira", "loja"],
    modal: {
      title: "Carimbo para embalagem personalizada",
      summary: "Indicado para pequenos negócios que querem aplicar marca, texto ou identificação em embalagens.",
      benefits: ["Ajuda a reforçar a identidade visual", "Pode ser usado em papel e embalagem conforme teste de aplicação", "Pedido orientado pelo WhatsApp"],
      indicatedFor: ["Lojas", "Artesãos", "Delivery", "Produtos autorais"],
      applications: ["Papel kraft", "Sacolas", "Etiquetas", "Cartões e embalagens simples"],
      personalization: ["Logotipo", "Nome da marca", "Redes sociais ou contato", "Texto curto"],
      dataInstructions: ["Envie a arte ou logotipo", "Informe o material da embalagem", "A viabilidade depende da qualidade do arquivo e do espaço"],
      production: ["A composição é avaliada antes da produção", "O atendimento orienta modelo e cuidados", "Produção conforme aprovação dos dados"],
      prazo: "Produção média de 24h, conforme arte e disponibilidade.",
      structure: "Pode ser produzido em modelo manual ou outro modelo indicado pelo atendimento.",
      printQuality: "A impressão varia conforme superfície, tinta, pressão e layout; o atendimento orienta para buscar boa legibilidade.",
      modelInfo: "Tipo: carimbo para aplicação em embalagens.",
      differentials: ["Foco em orientação comercial", "Sem necessidade de e-commerce", "Contato direto pelo WhatsApp"],
      whatsappMessage: "Olá! Vim pelo site e quero informações sobre carimbo para embalagem personalizada."
    }
  },
  {
    id: "carimbo-cnpj",
    title: "Carimbo CNPJ",
    model: "Empresa / MEI",
    category: "Empresas",
    categoryIds: ["empresas", "automaticos"],
    image: `${productImageBase}/Nykon-302-Preto.jpeg`,
    alt: "Modelo automático indicado para carimbo CNPJ",
    summary: "Carimbo para razão social, CNPJ, endereço, contato e dados comerciais.",
    tags: ["CNPJ", "Empresas", "MEI"],
    searchTerms: ["cnpj", "mei", "empresa", "razão social", "razao social", "automatico", "automático", "nykon", "trodat"],
    modal: {
      title: "Carimbo CNPJ para empresas e MEIs",
      summary: "Opção para organizar dados comerciais em documentos, protocolos e rotinas administrativas.",
      benefits: ["Facilita a identificação empresarial", "Ajuda em documentos recorrentes", "Composição conforme os dados enviados"],
      indicatedFor: ["MEIs", "Empresas", "Prestadores de serviço", "Escritórios"],
      applications: ["Documentos comerciais", "Protocolos", "Formulários", "Rotina administrativa"],
      personalization: ["Razão social", "Nome fantasia", "CNPJ", "Endereço, telefone, e-mail ou setor"],
      dataInstructions: ["Envie os dados empresariais em texto", "Revise CNPJ e endereço", "Informe se deseja modelo automático ou manual"],
      production: ["O atendimento orienta o modelo", "A arte pode ser conferida antes da produção", "Produção conforme confirmação e disponibilidade"],
      prazo: "Produção média de 24h, com possibilidade rápida sob consulta.",
      structure: "Pode ser feito em modelo automático ou outro modelo indicado pelo atendimento.",
      printQuality: "Legibilidade depende da quantidade de dados e da área disponível no modelo.",
      modelInfo: "Tipo: carimbo CNPJ personalizado.",
      differentials: ["Emite nota fiscal", "Pagamento por Pix ou link de cartão", "Atendimento online para BH e região"],
      whatsappMessage: "Olá! Vim pelo site e quero fazer um carimbo CNPJ personalizado."
    }
  },
  {
    id: "carimbo-profissional",
    title: "Carimbo Profissional",
    model: "Profissionais liberais",
    category: "Profissionais",
    categoryIds: ["profissionais", "automaticos"],
    image: `${productImageBase}/Trodat-4911-IA.jpeg`,
    alt: "Modelo automático para carimbo profissional",
    summary: "Carimbo para nome, profissão, registro e dados informados pelo cliente.",
    tags: ["Profissional", "Registro", "Atendimento"],
    searchTerms: ["profissional", "registro", "advogado", "psicologo", "psicólogo", "nutricionista", "medico", "médico", "crm"],
    modal: {
      title: "Carimbo profissional personalizado",
      summary: "Indicado para profissionais que precisam identificar documentos com dados conferidos pelo próprio cliente.",
      benefits: ["Atendimento orientado", "Dados profissionais organizados", "Modelo indicado conforme uso"],
      indicatedFor: ["Profissionais liberais", "Consultórios", "Escritórios", "Prestadores de serviço"],
      applications: ["Documentos profissionais", "Receituários quando aplicável", "Protocolos", "Identificação"],
      personalization: ["Nome", "Profissão", "Registro profissional", "Contato, clínica ou escritório quando necessário"],
      dataInstructions: ["Os dados profissionais são informados pelo cliente", "Quando houver exigência específica, confira nos canais do conselho profissional", "Revise tudo antes da aprovação"],
      production: ["O atendimento monta a composição conforme os dados enviados", "A produção ocorre após confirmação", "Prazo e entrega são combinados pelo WhatsApp"],
      prazo: "Produção média de 24h, com urgência somente sob consulta.",
      structure: "Modelo indicado conforme quantidade de dados e frequência de uso.",
      printQuality: "Impressão limpa e legível quando o layout respeita o espaço escolhido.",
      modelInfo: "Tipo: carimbo profissional personalizado.",
      differentials: ["Atendimento para diferentes profissões", "Aprovação da arte quando aplicável", "Retirada em Venda Nova/Maria Helena"],
      whatsappMessage: "Olá! Vim pelo site e quero informações sobre carimbo profissional personalizado."
    }
  },
  {
    id: "carimbo-medico-crm",
    title: "Carimbo Médico / CRM-MG",
    model: "Médicos em Minas Gerais",
    category: "Médicos / CRM-MG",
    categoryIds: ["medicos", "profissionais", "automaticos"],
    image: `${productImageBase}/Trodat-4911-Preto-IA.jpeg`,
    alt: "Modelo automático indicado para carimbo médico",
    summary: "Atendimento preparado para carimbos médicos solicitados pelo fluxo do CRM-MG.",
    tags: ["CRM-MG", "Médicos", "Profissional"],
    searchTerms: ["medico", "médico", "crm", "crm-mg", "controle eletrônico", "controle eletronico", "profissional", "saúde", "saude"],
    modal: {
      title: "Carimbo médico com atendimento preparado para o CRM-MG",
      summary: "A BH Carimbos está preparada para atender médicos que solicitam carimbo profissional pelo Controle Eletrônico de Carimbo do CRM-MG.",
      benefits: ["Credenciada no Controle Eletrônico de Carimbo do CRM-MG", "Atendimento preparado para médicos regularmente inscritos no CRM-MG", "Orientação pelo WhatsApp durante o pedido"],
      indicatedFor: ["Médicos em Minas Gerais", "Consultórios", "Clínicas", "Profissionais que usam o fluxo do CRM-MG"],
      applications: ["Carimbo profissional médico", "Documentos e receituários conforme uso profissional", "Identificação em rotina de atendimento", "Pedidos orientados pelo fluxo do CRM-MG"],
      personalization: ["Nome profissional", "Dados profissionais informados pelo médico", "Especialidade, quando aplicável e informada", "Outras informações confirmadas pelo cliente"],
      dataInstructions: ["O médico deve seguir as orientações do próprio CRM-MG", "Os dados profissionais são informados pelo cliente", "A BH Carimbos produz conforme informações confirmadas"],
      production: ["O pedido pode ser orientado pelo WhatsApp", "A produção segue os dados informados e confirmados", "Disponibilidade, prazo e retirada/entrega são combinados no atendimento"],
      prazo: "Produção média de 24h. Produção rápida somente sob consulta e conforme disponibilidade.",
      structure: "Modelo indicado conforme quantidade de dados e rotina de uso profissional.",
      printQuality: "Impressão limpa e legível quando a composição respeita o espaço do modelo.",
      modelInfo: "Tipo: carimbo médico profissional. Modelos automáticos podem ser orientados pelo atendimento.",
      differentials: ["Credenciada no Controle Eletrônico de Carimbo do CRM-MG", "Mensagem dedicada para médicos", "Experiência com carimbos profissionais"],
      whatsappMessage: "Olá! Vim pelo site e quero informações sobre carimbo médico pelo fluxo do CRM-MG."
    }
  },
  {
    id: "carimbo-assinatura",
    title: "Carimbo para Assinatura",
    model: "Assinatura",
    category: "Assinatura",
    categoryIds: ["assinatura", "profissionais", "empresas"],
    image: `${productImageBase}/Nykon-302-Branco.jpeg`,
    alt: "Modelo indicado para carimbo de assinatura",
    summary: "Opção para reproduzir assinatura em usos internos, conforme finalidade e aceitação do documento.",
    tags: ["Assinatura", "Uso cauteloso", "Personalizado"],
    searchTerms: ["assinatura", "rubrica", "profissional", "empresa", "documento"],
    modal: {
      title: "Carimbo para assinatura",
      summary: "Pode apoiar rotinas internas, sempre considerando a finalidade e a aceitação do documento.",
      benefits: ["Facilita usos internos repetitivos", "Personalização conforme imagem enviada", "Atendimento orienta viabilidade"],
      indicatedFor: ["Rotinas internas", "Empresas", "Profissionais", "Documentos sem exigência de assinatura original"],
      applications: ["Identificação interna", "Documentos administrativos", "Rotinas autorizadas pelo cliente", "Uso conforme regra da instituição"],
      personalization: ["Assinatura enviada pelo cliente", "Nome ou identificação complementar", "Texto de apoio quando necessário", "Modelo conforme orientação"],
      dataInstructions: ["Envie imagem nítida da assinatura", "Informe a finalidade de uso", "Confira se o documento aceita esse tipo de carimbo"],
      production: ["A viabilidade depende da qualidade da imagem", "A arte deve ser conferida pelo cliente", "Produção conforme confirmação dos dados"],
      prazo: "Produção média de 24h, conforme avaliação da arte.",
      structure: "Pode ser feito em modelo automático ou manual, conforme orientação do atendimento.",
      printQuality: "A legibilidade depende da qualidade da assinatura enviada e do espaço do modelo.",
      modelInfo: "Tipo: carimbo de assinatura personalizado.",
      differentials: ["Linguagem cautelosa sobre uso", "Sem promessa de validade jurídica", "Pedido direto pelo WhatsApp"],
      whatsappMessage: "Olá! Vim pelo site e quero informações sobre carimbo profissional personalizado."
    }
  }
];

export const productCatalogSections: ProductCatalogSection[] = [
  {
    id: "automaticos",
    title: "Carimbos automáticos",
    description: "Modelos práticos para uso frequente em empresas, escritórios e rotina profissional.",
    productIds: ["nykon-302", "trodat-4911", "nykon-342", "nykon-355", "trodat-3911"]
  },
  {
    id: "madeira",
    title: "Carimbos de madeira",
    description: "Opções manuais para textos personalizados, embalagem e aplicações específicas.",
    productIds: ["madeira-personalizado", "carimbo-embalagem"]
  },
  {
    id: "empresas-profissionais",
    title: "Empresas e profissionais",
    description: "Carimbos para CNPJ, identificação profissional, rotina administrativa e atendimento.",
    productIds: ["carimbo-cnpj", "carimbo-profissional", "nykon-302", "trodat-4911", "carimbo-assinatura"]
  },
  {
    id: "medicos-crm",
    title: "Médicos e CRM-MG",
    description: "Atendimento preparado para médicos que solicitam carimbo profissional pelo fluxo do CRM-MG.",
    productIds: ["carimbo-medico-crm", "trodat-4911", "nykon-302", "carimbo-profissional"]
  },
  {
    id: "aplicacoes",
    title: "Aplicações personalizadas",
    description: "Modelos para embalagem, marca, assinatura, dados comerciais e outras necessidades.",
    productIds: ["carimbo-embalagem", "madeira-personalizado", "carimbo-assinatura", "carimbo-cnpj"]
  }
];
