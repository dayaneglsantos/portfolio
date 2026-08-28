import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  FileCode2,
} from 'lucide-react'
import { projects, type Project } from '../data/projects'

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links mt-7 flex flex-wrap gap-3">
      <a
        className="project-link-primary"
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
      >
        {project.temporaryLiveUrl ? (
          <FileCode2 size={17} aria-hidden="true" />
        ) : (
          <ExternalLink size={17} aria-hidden="true" />
        )}
        {project.liveLabel}
      </a>
      <a
        className="project-link-secondary"
        href={project.repositoryUrl}
        target="_blank"
        rel="noreferrer"
      >
        <Code2 size={17} aria-hidden="true" />
        Ver código
      </a>
    </div>
  )
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="project-content">
      <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-violet-300/75 uppercase">
        {project.category}
      </p>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-white">
        {project.title}
      </h3>
      <p className="mt-2 font-medium leading-6 text-violet-200">
        {project.subtitle}
      </p>
      <p className="mt-4 text-sm leading-6 text-[#aaa2b5]">
        {project.description}
      </p>

      <ul className="mt-5 grid gap-2 text-sm text-[#c9c1d3] sm:grid-cols-2">
        {project.highlights.map((highlight) => (
          <li className="flex items-start gap-2" key={highlight}>
            <Check
              className="mt-0.5 shrink-0 text-violet-300"
              size={15}
              aria-hidden="true"
            />
            {highlight}
          </li>
        ))}
      </ul>

      <ul
        className="mt-6 flex flex-wrap gap-2"
        aria-label={`Tecnologias do ${project.title}`}
      >
        {project.technologies.map((technology) => (
          <li className="technology-tag" key={technology}>
            {technology}
          </li>
        ))}
      </ul>

      <ProjectLinks project={project} />
    </div>
  )
}

export function Projects() {
  return (
    <section
      id="projetos"
      className="relative scroll-mt-18 overflow-hidden px-5 py-24 sm:px-8 sm:py-28"
    >
      <div className="projects-glow" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-12 flex items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs tracking-[0.2em] text-violet-300 uppercase">
            Projetos
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-violet-400/35 to-transparent" />
        </motion.div>

        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-2xl text-3xl leading-tight font-semibold tracking-[-0.035em] text-white sm:text-4xl">
              Projetos que transformaram aprendizado em prática.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#aaa2b5] sm:text-base">
              Aplicações desenvolvidas em diferentes momentos da minha
              formação, reunindo interfaces, regras de negócio, integrações e
              APIs.
            </p>
          </div>
          <a
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
            href="https://github.com/dayaneglsantos"
            target="_blank"
            rel="noreferrer"
          >
            Ver GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="project-image-frame">
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
              </div>
              <ProjectContent project={project} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
