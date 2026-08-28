import { motion } from 'motion/react'
import {
  BookOpen,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  MonitorPlay,
} from 'lucide-react'

const educationItems = [
  {
    type: 'Graduação',
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Centro Universitário IESB',
    period: 'Concluído em jun/2026',
    description:
      'Formação voltada ao desenvolvimento de sistemas, programação, bancos de dados, construção de APIs e fundamentos de engenharia de software.',
    icon: GraduationCap,
    featured: true,
  },
  {
    type: 'Curso de especialização',
    title: 'React e Next.js',
    institution: 'Udemy',
    period: 'Concluído em fev/2024 · 93 horas',
    description:
      'Aprofundamento prático no desenvolvimento de aplicações com React e Next.js, complementando minha formação no ecossistema front-end.',
    icon: MonitorPlay,
    featured: false,
  },
  {
    type: 'Formação profissional',
    title: 'Engenheiro Front-end',
    institution: 'EBAC — Escola Britânica de Artes Criativas e Tecnologia',
    period: 'Concluído em 2023',
    description:
      'Formação prática em desenvolvimento de interfaces web, com HTML, CSS, JavaScript, React, TypeScript, responsividade e integração com APIs.',
    icon: Code2,
    featured: false,
  },
  {
    type: 'Graduação',
    title: 'Administração',
    institution: 'Faculdade Anhanguera de Brasília',
    period: 'Concluído em 2015',
    description:
      'Formação em gestão, processos organizacionais e planejamento, contribuindo para uma visão mais ampla sobre produtos, negócios e trabalho em equipe.',
    icon: BriefcaseBusiness,
    featured: false,
  },
]

export function Education() {
  return (
    <section
      id="formacao"
      className="relative scroll-mt-18 border-y border-white/6 bg-[#0d0814] px-5 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 flex items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs tracking-[0.2em] text-violet-300 uppercase">
            Formação
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-violet-400/35 to-transparent" />
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            <span className="mb-5 grid size-11 place-items-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
              <BookOpen size={21} aria-hidden="true" />
            </span>
            <h2 className="text-3xl leading-tight font-semibold tracking-[-0.035em] text-white sm:text-4xl">
              Aprendizado que acompanha minha evolução.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#aaa2b5] sm:text-base">
              Minha formação combina fundamentos de desenvolvimento de sistemas
              com uma preparação prática e direcionada ao ecossistema front-end.
            </p>
          </motion.div>

          <motion.div
            className="education-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {educationItems.map((item) => {
              const Icon = item.icon

              return (
                <motion.article
                  className={`education-item ${item.featured ? 'education-item-featured' : ''}`}
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="education-icon">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-violet-300/70 uppercase">
                          {item.type}
                        </p>
                        <h3 className="mt-1.5 text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <span className="shrink-0 font-mono text-xs text-[#aaa2b5]">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-violet-200">
                      {item.institution}
                    </p>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-[#aaa2b5]">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
