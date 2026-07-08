# PROJECT_RULES.md
# Regras Permanentes do Projeto — Site BH Carimbos / Agora Carimbos

Este documento define as regras obrigatórias para desenvolvimento, segurança, arquitetura, qualidade, SEO, uso de assets, performance e manutenção do projeto.

Antes de qualquer decisão técnica, alteração estrutural, criação de componente, criação de página ou implementação, este arquivo deve ser consultado.

---

## 1. Princípio central do projeto

O objetivo do projeto é desenvolver um site profissional, rápido, seguro, responsivo e otimizado para captação de clientes para uma empresa de carimbos em Belo Horizonte/MG.

O site deve funcionar como uma ferramenta comercial, com foco em:

- gerar contatos pelo WhatsApp;
- fortalecer presença orgânica no Google;
- transmitir confiança;
- apresentar produtos e serviços de forma clara;
- facilitar pedidos de orçamento;
- estruturar páginas para SEO local;
- preparar a base para campanhas futuras;
- manter independência técnica para que outro profissional consiga administrar o projeto futuramente.

O site não deve ser apenas bonito. Ele deve ser funcional, rápido, claro, objetivo e orientado à conversão.

---

## 2. Stack e arquitetura

A stack deve ser escolhida tecnicamente pelo Codex, considerando os seguintes critérios obrigatórios:

- alta performance;
- excelente SEO;
- facilidade de manutenção;
- compatibilidade com Vercel;
- possibilidade de geração estática sempre que possível;
- baixo risco de segurança;
- ausência de backend próprio, salvo necessidade justificada;
- facilidade para outro profissional assumir o projeto no futuro;
- organização clara de arquivos e componentes;
- baixo acoplamento;
- código limpo, legível e documentável.

A escolha da stack deve ser justificada antes da implementação.

O projeto deve evitar complexidade desnecessária. Não usar banco de dados, CMS, autenticação, painel administrativo ou backend interno, salvo se houver autorização expressa posterior.

---

## 3. Modelo funcional do site

O site será composto principalmente por páginas fixas/estáticas.

Funcionalidades dinâmicas permitidas:

- envio de formulário por API externa;
- links para WhatsApp com mensagem pré-formatada;
- mapa incorporado;
- recursos de SEO técnico;
- arquivos estáticos como sitemap.xml, robots.txt e llms.txt.

Não implementar:

- área de login;
- painel administrativo;
- banco de dados próprio;
- sistema de cadastro de produtos;
- carrinho;
- checkout;
- comentários;
- blog;
- busca interna;
- autenticação;
- APIs internas desnecessárias.

---

## 4. Segurança obrigatória

O projeto deve seguir regras rígidas de segurança.

É proibido:

- expor senhas, tokens, chaves privadas ou credenciais no código;
- deixar variáveis sensíveis hardcoded;
- exibir dados sensíveis no console;
- usar `console.log` desnecessário em produção;
- deixar páginas de teste públicas;
- deixar rotas experimentais acessíveis;
- criar endpoints sem necessidade;
- usar scripts externos sem justificativa;
- usar bibliotecas inseguras ou abandonadas;
- inserir comentários não profissionais no código;
- deixar textos como “teste”, “lorem ipsum”, “placeholder”, “TODO visível” ou qualquer conteúdo temporário no frontend final;
- usar imagens aleatórias externas em produção;
- usar links sem destino real;
- deixar botões sem ação;
- deixar links de WhatsApp quebrados;
- deixar formulários sem tratamento mínimo de erro;
- coletar dados desnecessários dos usuários.

Todos os formulários devem validar campos antes do envio.

O formulário deve informar claramente ao usuário quando:

- o envio deu certo;
- houve erro;
- algum campo obrigatório está ausente.

Se houver integração com API externa, a chave ou configuração sensível deve ficar protegida conforme a stack escolhida.

---

## 5. Privacidade e dados

O site deve coletar apenas dados necessários para atendimento comercial.

Campos permitidos no formulário:

- nome;
- telefone/WhatsApp;
- e-mail, se necessário;
- tipo de carimbo;
- mensagem ou detalhes do pedido.

Não coletar dados sensíveis sem necessidade.

Não solicitar documentos pessoais diretamente pelo formulário, salvo se houver orientação posterior.

Qualquer envio de dados deve deixar claro que o objetivo é atendimento/orçamento.

As páginas de Política de Privacidade e Termos de Uso devem existir.

---

## 6. Uso obrigatório dos assets

O projeto possui uma pasta `assets` na raiz com imagens e arquivos fornecidos.

A estrutura atual considerada é:

```text
assets/
├── documentos/
├── favicon/
├── icones/
├── imagens-gerais/
├── imagens-produtos/
├── logo/
└── seo/

O Codex deve usar os arquivos fornecidos sempre que possível.

Não deve inventar imagens finais.

Não deve baixar imagens externas aleatórias.

Não deve usar imagens de banco externo sem autorização.

Se uma imagem necessária não existir, deve usar um placeholder visual simples e profissional, feito em código, e registrar claramente qual imagem precisa ser substituída futuramente.

O placeholder deve conter texto discreto e profissional, por exemplo:

Imagem do produto será inserida aqui

ou

Foto real da loja será inserida aqui

Nunca usar placeholder informal.

Nunca usar imagens genéricas que possam parecer definitivas se não forem fornecidas pelo cliente.

7. Logos disponíveis

Usar os arquivos da pasta:

assets/logo/

Arquivos esperados:

logo-horizontal.png
logo-icon.png
logo-principal.png

Uso recomendado:

logo-horizontal.png: header/navbar;
logo-principal.png: footer, seções institucionais e páginas de apresentação;
logo-icon.png: favicon, ícones auxiliares, microdetalhes visuais e possível loader.

A logo não deve ser distorcida.

A logo deve manter proporção original.

Nunca aplicar efeitos exagerados na logo.

Não alterar a cor da logo sem autorização.

8. Favicons

Usar os arquivos da pasta:

assets/favicon/

Arquivos existentes:

android-chrome-192x192.png
android-chrome-512x512.png
apple-touch-icon.png
favicon-16x16.png
favicon-32x32.png
favicon.ico
favicon.png

Configurar corretamente os metadados de favicon no projeto.

Garantir que o favicon apareça corretamente no navegador.

9. Imagens de produtos

Usar os arquivos da pasta:

assets/imagens-produtos/

Arquivos existentes:

nykon302-2.jpg
nykon302-3.jpg
nykon302-4.jpg
nykon302.jpg
nykon303.jpg
nykon304.jpg
nykon321d.jpg
nykon321n.jpg
nykon355.jpg

Essas imagens devem ser utilizadas preferencialmente em:

cards de produtos;
seção “Nossos produtos”;
páginas de serviço;
página de carimbo automático;
página de carimbo para empresa;
página de carimbo personalizado;
galerias comerciais.

As imagens devem ter:

alt descritivo;
tamanho otimizado;
carregamento adequado;
bom enquadramento visual;
layout responsivo.
10. Imagens gerais

Usar os arquivos da pasta:

assets/imagens-gerais/

Arquivos existentes:

carimbo-kraft1.jpg
carimbo-kraft2.jpg
carimbo-kraft3.jpg
carimbo-madeira1.jpg
carimbo-madeira2.jpg
carimbo-madeira3.jpg

Essas imagens podem ser usadas em:

seções institucionais;
seção de carimbos personalizados;
seção de carimbo de madeira;
páginas de serviço;
seções visuais de apoio;
blocos comerciais.

Não usar imagens de madeira para páginas onde o contexto principal é carimbo automático, salvo como exemplo complementar.

11. Ícones

Não usar bibliotecas de ícones como:

Lucide;
React Icons;
Font Awesome;
Heroicons;
Bootstrap Icons;
Material Icons.

Os ícones devem vir da pasta:

assets/icones/

Caso algum ícone necessário ainda não exista, o Codex deve:

criar a interface com espaço reservado simples;
informar claramente o nome do ícone necessário;
sugerir nome de arquivo;
sugerir tamanho;
sugerir uso.

Exemplo:

Ícone necessário:
- Nome visual: WhatsApp
- Arquivo sugerido: assets/icones/icon-whatsapp.svg
- Tamanho recomendado: 32x32 ou 48x48
- Uso: botão principal de contato e CTA flutuante

Não inventar ícones finais.

Não usar emojis como ícones principais em interface profissional.

12. Placeholders permitidos

Como não haverá pasta específica de placeholders, placeholders devem ser feitos preferencialmente em HTML/CSS, e não como imagens definitivas.

Exemplo aceitável:

<div class="image-placeholder">
  Foto real do produto será inserida aqui
</div>

Regras:

placeholder deve ter aparência profissional;
deve ser discreto;
deve deixar claro que é temporário;
não deve parecer erro;
não deve usar texto informal;
deve ser fácil de localizar no código;
deve ser listado ao final de cada etapa se ainda existir.

Antes da entrega final, o Codex deve listar todos os placeholders restantes.

13. Cores da marca

A identidade visual atual utiliza:

laranja forte;
preto;
branco;
cinzas neutros.

Paleta inicial recomendada:

Laranja principal: #F97316 ou equivalente próximo ao da logo
Preto principal: #111111
Cinza escuro: #2B2B2B
Cinza médio: #6B7280
Cinza claro: #F3F4F6
Branco: #FFFFFF

O laranja deve ser usado principalmente em:

botões principais;
detalhes visuais;
links ativos;
destaques;
ícones;
pequenos elementos de reforço.

Evitar usar grandes blocos laranja em excesso, para não deixar o site visualmente pesado.

O fundo principal deve ser claro, preferencialmente branco ou cinza muito leve.

Contraste deve ser sempre priorizado.

14. Estilo visual

O estilo desejado é:

popular;
direto;
comercial;
claro;
confiável;
objetivo;
com aparência profissional;
sem parecer premium demais;
sem parecer genérico;
sem parecer site de template barato.

O site deve comunicar:

rapidez;
facilidade;
atendimento local;
confiança;
tradição;
praticidade;
pedido simples pelo WhatsApp.

Evitar:

visual excessivamente sofisticado;
estética de startup distante do público;
textos frios ou muito técnicos;
animações exageradas;
excesso de gradientes;
excesso de elementos decorativos;
linguagem vaga.
15. Tipografia

Usar fontes modernas, legíveis e profissionais.

A escolha deve priorizar:

carregamento rápido;
boa leitura no celular;
aparência comercial;
compatibilidade com performance.

Se usar Google Fonts, carregar apenas os pesos necessários.

Evitar muitas famílias tipográficas.

Preferência:

uma fonte principal para títulos e textos;
variações de peso para hierarquia.

15.1. Direção visual adicional

O projeto deve evitar estética genérica de template, aparência de site criado por IA, visual SaaS/startup e componentes arredondados sem função.

Regras visuais obrigatórias:

- cantos arredondados são permitidos apenas de forma mínima, controlada e intencional;
- usar `border-radius` para melhorar acabamento visual sem comprometer a identidade comercial, objetiva e profissional da marca;
- botões devem usar radius controlado entre 4px e 8px, sem formato pill;
- cards devem usar radius controlado entre 8px e 14px, sem aparência infantil ou genérica;
- inputs devem usar radius controlado entre 6px e 10px;
- badges e chips devem usar radius controlado entre 4px e 8px;
- wrappers visuais e imagens internas podem usar radius entre 8px e 16px quando isso melhorar a composição;
- não usar botões pill, cards com radius exagerado ou elementos excessivamente arredondados;
- evitar sombras suaves genéricas, gradientes artificiais e blocos decorativos sem função comercial;
- priorizar visual comercial, técnico/produtivo, objetivo e adequado a uma empresa local real;
- usar contraste forte entre preto, branco, cinza e laranja, com laranja aplicado de forma controlada;
- preferir bordas, hierarquia clara, botões sólidos e estrutura firme orientada à conversão.

15.2. Tratamento de assets

Todo asset deve ser renderizado com contexto e tamanho controlados.

Regras obrigatórias:

- ícones devem usar componente/classe própria, com largura e altura explícitas;
- nenhum SVG deve ser renderizado em tamanho natural;
- ícones comuns não devem ultrapassar 40px sem autorização;
- logos, ícones, imagens de produto, imagens gerais e banners devem ter padrões/classes diferentes;
- imagens devem respeitar proporção, responsividade e limite de tamanho conforme o uso;
- hero/background só deve ser criado com controle explícito de enquadramento, proporção e responsividade;
- nenhum asset deve ser usado como banner, ícone ou imagem decorativa fora do contexto previsto.
16. Performance

Meta de performance:

site extremamente rápido;
carregamento mobile otimizado;
imagens comprimidas;
CSS enxuto;
JavaScript mínimo;
evitar dependências desnecessárias;
evitar animações pesadas;
evitar sliders pesados;
evitar vídeos automáticos;
evitar bibliotecas grandes sem necessidade.

Meta desejada:

Lighthouse mobile: 95+;
Lighthouse desktop: 98+;
SEO: 100, se possível;
Acessibilidade: 90+;
Best Practices: 95+.

Não sacrificar clareza e conversão apenas para atingir pontuação.

Performance e conversão devem caminhar juntas.

17. Responsividade

O site deve ser projetado mobile-first.

Prioridade:

celular;
desktop;
tablet.

Testar visualmente:

360px;
390px;
430px;
768px;
1024px;
1366px;
1440px.

O WhatsApp deve ser fácil de acessar no celular.

Botões devem ter área de toque adequada.

Não permitir textos estourados, imagens cortadas sem intenção ou cards desalinhados.

18. Acessibilidade

O site deve seguir boas práticas básicas de acessibilidade:

contraste adequado;
textos legíveis;
botões com nomes claros;
imagens com alt;
headings em ordem lógica;
links distinguíveis;
foco visível quando aplicável;
evitar dependência exclusiva de cor para comunicar informação.
19. SEO técnico obrigatório

Implementar:

titles únicos por página;
meta descriptions únicas por página;
canonical quando aplicável;
headings bem estruturados;
URLs amigáveis;
sitemap.xml;
robots.txt;
llms.txt;
schema LocalBusiness;
schema FAQPage quando houver FAQ real;
schema BreadcrumbList quando aplicável;
Open Graph básico;
Twitter Card básico;
imagens com alt text;
conteúdo local para Belo Horizonte;
links internos entre páginas estratégicas.

Cada página deve ter intenção clara.

Não duplicar o mesmo texto em todas as páginas.

Evitar páginas de localização com conteúdo artificial.

As páginas de localização devem reforçar atendimento real nas regiões informadas.

20. AEO/GEO

O conteúdo deve ser estruturado para mecanismos modernos de busca e IA.

Aplicar:

perguntas frequentes;
respostas objetivas;
conteúdo direto;
dados comerciais claros;
localização clara;
serviço claro;
formas de contato claras;
área de atendimento clara;
prazos claros;
diferenciais reais.

Não prometer que o site será citado por IA.

O objetivo é melhorar clareza semântica e compreensão do conteúdo.

21. WhatsApp

WhatsApp principal:

+55 31 3274-5665

Todo link de WhatsApp deve estar correto.

Formato recomendado:

https://wa.me/553132745665?text=MENSAGEM_ENCODED

Cada página pode ter mensagem contextual.

Exemplos:

página de carimbo CNPJ:
“Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo CNPJ.”
página de carimbo médico:
“Olá! Vim pelo site e gostaria de pedir um orçamento para carimbo médico.”
página de carimbo na hora:
“Olá! Vim pelo site e preciso de um carimbo com urgência em BH.”
página principal:
“Olá! Vim pelo site e gostaria de pedir um orçamento de carimbo.”

Todos os CTAs devem apontar para o WhatsApp correto.

22. Formulário de contato

O formulário deve funcionar por API externa.

Não criar backend próprio.

Campos sugeridos:

nome;
WhatsApp;
tipo de carimbo;
mensagem.

O formulário deve ter:

validação;
mensagem de sucesso;
mensagem de erro;
proteção básica contra envio vazio;
copy clara.

Se a API externa ainda não estiver definida, o Codex deve estruturar o formulário de forma preparada e indicar exatamente qual configuração falta.

23. Google Maps

O site deve ter mapa incorporado ou link para rota.

Endereço:

Rua Tenente Marino Freire, 679
Bairro Maria Helena
Venda Nova
Belo Horizonte/MG

O mapa deve ser leve.

Se iframe do Google Maps prejudicar performance, considerar:

carregar somente na página de contato;
usar botão “Ver rota no Google Maps”;
carregar iframe sob demanda;
evitar mapa pesado na home.
24. Dados comerciais

Usar os seguintes dados:

Empresa: BH Carimbos / Agora Carimbos
WhatsApp: +55 31 3274-5665
E-mail: agoracarimbos@hotmail.com
Endereço: Rua Tenente Marino Freire, 679, Bairro Maria Helena, Venda Nova, Belo Horizonte/MG
Horário: segunda a sexta, das 07:00 às 18:00; sábado, das 07:00 às 12:00
Formas de pagamento: cartão de crédito, débito e Pix
Nota fiscal: emite nota fiscal
Entrega: motoboy, Belo Horizonte e região
Prazo médio de produção: 24 horas
Prazo médio de entrega: 48 horas
Diferencial adicional: produção no mesmo dia e possibilidade de produção em até 60 minutos, quando aplicável e confirmado pelo atendimento

Quando houver conflito entre “produção em até 60 minutos” e “prazo médio de 24h”, escrever com cuidado:

“produção rápida”;
“possibilidade de produção no mesmo dia”;
“em alguns casos, produção em até 60 minutos, mediante confirmação pelo atendimento”.

Não prometer 60 minutos em todas as páginas como regra absoluta.

25. Público-alvo

Prioridade:

empresas;
médicos;
advogados;
profissionais liberais;
psicólogos;
nutricionistas;
pessoas físicas;
clientes com urgência;
clientes que querem pedir pelo WhatsApp.

O cliente mais importante:

médicos;
advogados;
empresas.

O texto deve falar diretamente com esses públicos.

26. Páginas obrigatórias

Criar as seguintes páginas:

/carimbo-em-bh/
/carimbo-personalizado-bh/
/carimbo-na-hora-bh/
/carimbo-cnpj-bh/
/carimbo-automatico-bh/
/carimbo-medico-bh/
/carimbo-empresa-bh/
/carimbo-madeira-bh/
/carimbos-pampulha/
/carimbos-centro-bh/
/carimbos-savassi/
/carimbos-buritis/
/carimbos-venda-nova/
/contato/
/como-pedir/
/prazos-e-entrega/
/perguntas-frequentes/
/politica-de-privacidade/
/termos-de-uso/
/nossos-produtos/
/quem-somos/

A página inicial / também deve existir.

A página /contatos/ não deve duplicar /contato/ sem necessidade. Usar apenas /contato/, salvo decisão posterior.

27. Estrutura de navegação

Menu principal recomendado:

Início;
Produtos;
Serviços;
Como pedir;
Prazos e entrega;
Quem somos;
Contato.

No mobile, menu simples e claro.

O botão principal do header deve ser:

Pedir orçamento

ou

Chamar no WhatsApp
28. CTAs

CTAs devem ser claros, diretos e comerciais.

Exemplos permitidos:

Pedir orçamento pelo WhatsApp
Fazer meu carimbo agora
Solicitar carimbo com entrega em BH
Enviar dados do carimbo
Quero um carimbo CNPJ
Pedir carimbo urgente
Falar com atendimento agora
Ver modelos de carimbo

Evitar:

Saiba mais como CTA principal;
Clique aqui;
Enviar;
Fale conosco de forma isolada quando houver opção mais específica.
29. Tom de comunicação

O tom deve ser:

persuasivo;
direto;
comercial;
simples;
claro;
com foco em urgência e facilidade.

Evitar linguagem excessivamente técnica.

Evitar promessas absolutas.

Evitar exageros como “o melhor de BH”, salvo se houver prova.

Preferir:

“Carimbos personalizados em BH com pedido rápido pelo WhatsApp.”
“Envie seus dados, aprove o layout e escolha retirada ou entrega.”
“Atendimento para empresas, médicos, advogados e profissionais liberais.”
30. Páginas de localização

Páginas de localização obrigatórias:

/carimbos-pampulha/
/carimbos-centro-bh/
/carimbos-savassi/
/carimbos-buritis/
/carimbos-venda-nova/

Essas páginas devem ter conteúdo realista.

Não escrever como se houvesse loja física em todos os bairros.

Usar formulação segura:

“Atendimento para a região da Pampulha”
“Entrega em bairros da região”
“Pedidos pelo WhatsApp com envio por motoboy”
“Consulte disponibilidade e prazo para sua região”

Evitar:

“Nossa loja na Savassi”
“Unidade Buritis”
“Estamos localizados no Centro”

A localização física real é em Venda Nova/Maria Helena.

31. Páginas de serviço

Cada página de serviço deve ter:

H1 específico;
descrição clara do serviço;
público indicado;
quando usar;
como pedir;
dados necessários para produção;
prazo e entrega;
CTA para WhatsApp contextual;
FAQ curta;
links internos para páginas relacionadas.

Exemplo:

/carimbo-cnpj-bh/

Deve explicar:

para que serve;
quais dados enviar;
se pode incluir razão social, CNPJ, endereço, telefone etc.;
aprovação da arte;
prazo;
entrega;
CTA específico.
32. Independência técnica

O projeto deve ser desenvolvido de modo que outro profissional possa dar manutenção posteriormente.

Regras:

estrutura clara de pastas;
nomes de arquivos compreensíveis;
componentes reutilizáveis;
CSS organizado;
sem dependência de conta pessoal do desenvolvedor;
sem bloqueios artificiais;
sem código ofuscado;
sem dependências privadas;
sem caminhos absolutos locais;
sem scripts que só funcionem em ambiente pessoal.

Ao final, criar documentação básica, mas somente quando o site estiver finalizado.

33. Documentação final

A documentação só deve ser criada no final do projeto.

A documentação final deve conter:

stack utilizada;
como rodar localmente;
como fazer build;
como publicar na Vercel;
estrutura de pastas;
onde alterar textos;
onde alterar imagens;
onde alterar links de WhatsApp;
onde alterar SEO;
como atualizar sitemap/robots/llms;
lista de arquivos principais;
orientações para outro profissional manter o projeto.
34. Processo de desenvolvimento

O Codex deve trabalhar por fases.

Fase 1:

entender o projeto;
validar briefing;
escolher stack;
propor arquitetura;
listar riscos;
listar pendências.

Fase 2:

criar base do projeto;
configurar estrutura;
configurar assets;
configurar estilos globais;
criar componentes base.

Fase 3:

criar home;
validar design e estrutura.

Fase 4:

criar páginas de serviço.

Fase 5:

criar páginas de localização.

Fase 6:

criar páginas institucionais e complementares.

Fase 7:

configurar SEO técnico, sitemap, robots, llms, schema.

Fase 8:

revisar performance, responsividade, acessibilidade, links e segurança.

Fase 9:

criar documentação final.

Não pular etapas sem validação.

35. Validação obrigatória após cada etapa

Após cada etapa, o Codex deve informar:

o que foi feito;
quais arquivos foram criados;
quais arquivos foram alterados;
quais decisões técnicas foram tomadas;
quais riscos existem;
quais pendências ainda dependem do usuário;
o que deve ser validado antes da próxima etapa.

Nunca assumir que algo está correto se houver dúvida.

Se faltar informação, perguntar.

Se houver conflito entre instruções, parar e pedir confirmação.

36. Qualidade de código

O código deve ser:

limpo;
legível;
modular;
consistente;
sem duplicação desnecessária;
sem comentários inúteis;
sem gambiarra;
sem dependências desnecessárias;
com nomes claros;
preparado para manutenção.

Evitar arquivos gigantes.

Evitar componentes com muitas responsabilidades.

Separar dados repetidos em arquivos de configuração quando fizer sentido.

37. Conteúdo e copy

O Codex pode criar textos iniciais com base no briefing, mas deve manter tom profissional e comercial.

Não inventar dados não fornecidos.

Não inventar avaliações.

Não inventar quantidade de clientes.

Não inventar número exato de anos se houver risco de inconsistência. O briefing informa “mais de 40 anos de mercado”; usar somente se o cliente confirmar que isso é verdadeiro.

Não inventar marcas além de Trodat, Colop, Nykon ou similares.

Não prometer preço, prazo ou entrega absoluta sem confirmação.

38. Regras sobre informações incertas

Se não houver certeza, usar formulações seguras.

Exemplo:

Em vez de:

Seu carimbo fica pronto em 60 minutos.

Usar:

Produção rápida, com possibilidade de atendimento no mesmo dia conforme o modelo e a demanda.

Ou:

Em alguns casos, a produção pode ser feita em até 60 minutos. Consulte disponibilidade pelo WhatsApp.
39. Ambiente de produção

Antes da publicação, verificar:

build sem erros;
links funcionando;
WhatsApp correto;
formulário funcionando ou claramente preparado;
favicons funcionando;
imagens carregando;
sitemap acessível;
robots acessível;
llms acessível;
páginas obrigatórias acessíveis;
mobile funcionando;
desktop funcionando;
sem logs sensíveis;
sem placeholders indevidos;
sem textos temporários;
sem páginas de teste;
SEO básico aplicado.
40. Regra final

Nunca priorizar velocidade de entrega acima de:

segurança;
clareza;
qualidade;
manutenção;
SEO;
responsabilidade profissional.

Se houver dúvida técnica, não decidir sozinho. Apresentar opções, vantagens, riscos e recomendação.
