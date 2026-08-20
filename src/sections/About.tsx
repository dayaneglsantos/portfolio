import { motion } from 'motion/react'
import { Braces, CodeXml, ServerCog, Wrench } from 'lucide-react'
import { technologyGroups } from '../data/technologies'

const groupIcons = [CodeXml, ServerCog, Wrench]

export function About() {
  return (
    <section
      id="sobre"
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
            01 / Sobre mim
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-violet-400/35 to-transparent" />
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-5 grid size-11 place-items-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
              <Braces size={21} aria-hidden="true" />
            </span>
            <h2 className="max-w-xl text-3xl leading-tight font-semibold tracking-[-0.035em] text-white sm:text-4xl">
              Tecnologia, aprendizado e produtos com propósito.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-7 text-[#b8b0c3]">
              <p>
                Minha trajetória na tecnologia começou com o desenvolvimento
                front-end, área em que transformo requisitos e ideias em
                interfaces funcionais, responsivas e fáceis de usar. Trabalho
                profissionalmente com React e TypeScript e venho ampliando meus
                conhecimentos em desenvolvimento back-end com Node.js.
              </p>
              <p>
                Gosto de compreender o contexto por trás de cada funcionalidade
                e encontrar soluções que conciliem experiência do usuário,
                organização do código e necessidades do produto. Minha evolução
                de estagiária para desenvolvedora na Estudologia reforçou meu
                interesse pelo aprendizado contínuo e pela construção de
                produtos digitais com propósito.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {technologyGroups.map((group, index) => {
              const Icon = groupIcons[index]

              return (
                <motion.article
                  key={group.title}
                  className={`technology-card ${index === 0 ? 'sm:col-span-2' : ''}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-violet-400/10 text-violet-300">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{group.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#aaa2b5]">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label={group.title}>
                    {group.technologies.map((technology) => (
                      <li className="technology-tag" key={technology}>
                        {technology}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
