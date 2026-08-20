export type TechnologyGroup = {
  title: string
  description: string
  technologies: string[]
}

export const technologyGroups: TechnologyGroup[] = [
  {
    title: 'Front-end',
    description: 'Interfaces responsivas, acessíveis e orientadas à experiência.',
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Back-end e dados',
    description: 'Aplicações e integrações que conectam regras de negócio e dados.',
    technologies: ['Node.js', 'Express', 'APIs REST', 'MySQL'],
  },
  {
    title: 'Ferramentas e qualidade',
    description: 'Fluxo de desenvolvimento, versionamento e verificação de código.',
    technologies: ['Git', 'GitHub', 'Vite', 'Vitest', 'Testing Library'],
  },
]
