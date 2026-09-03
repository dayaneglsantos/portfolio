export type Project = {
  title: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  technologies: string[];
  liveUrl: string;
  liveLabel: string;
  repositoryUrl: string;
  temporaryLiveUrl?: boolean;
};

export const projects: Project[] = [
  {
    title: "Venda-me",
    category: "Projeto acadêmico · Desenvolvimento individual",
    subtitle: "Marketplace para publicação e gerenciamento de anúncios",
    description:
      "Plataforma inspirada em marketplaces como a OLX. Permite explorar produtos publicamente e oferece a usuários cadastrados recursos completos para criar e gerenciar seus próprios anúncios.",
    image: "/projects/venda-me.png",
    imageAlt:
      "Tela do Venda-me com filtros, indicadores e listagem de anúncios",
    highlights: [
      "Autenticação e rotas protegidas",
      "Gerenciamento completo de anúncios",
      "Busca, filtros e indicadores",
      "Upload e ordenação de imagens",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Hook Form",
      "Zod",
    ],
    liveUrl: "https://venda-me.vercel.app/",
    liveLabel: "Acessar aplicação",
    repositoryUrl: "https://github.com/dayaneglsantos/venda-me",
  },
  {
    title: "API Faculdade",
    category: "Projeto acadêmico · Desenvolvimento individual",
    subtitle: "API REST para gerenciamento acadêmico",
    description:
      "API para gerenciar usuários, cursos e matrículas com autenticação JWT, controle de acesso por perfil, persistência em MySQL e documentação OpenAPI.",
    image: "/projects/api-faculdade.png",
    imageAlt:
      "Documentação Swagger da API Faculdade com endpoints de autenticação e usuários",
    highlights: [
      "Autenticação e autorização",
      "Usuários, cursos e matrículas",
      "Documentação OpenAPI",
      "Testes de integração",
    ],
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "Swagger",
      "Vitest e Supertest",
    ],
    liveUrl: "https://api-faculdade-production.up.railway.app/api-docs",
    liveLabel: "Ver documentação",
    repositoryUrl: "https://github.com/dayaneglsantos/api_faculdade",
  },
  {
    title: "E-food",
    category: "Projeto final · EBAC",
    subtitle: "Experiência de pedidos inspirada em aplicativos de delivery",
    description:
      "Aplicação desenvolvida a partir de requisitos fornecidos pela EBAC. Permite navegar por restaurantes, visualizar cardápios, gerenciar o carrinho e realizar o fluxo de pedido.",
    image: "/projects/efood.png",
    imageAlt: "Tela do E-food com restaurante italiano e pratos disponíveis",
    highlights: [
      "Restaurantes e cardápios",
      "Carrinho com Redux",
      "Formulários e checkout",
      "Integração com API",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Router",
      "Styled Components",
      "Formik e Yup",
    ],
    liveUrl: "https://projeto-final-efood.vercel.app/",
    liveLabel: "Acessar aplicação",
    repositoryUrl: "https://github.com/dayaneglsantos/ProjetoFinal-Efood",
  },
];
