import { motion } from "motion/react";
import { Building2, CalendarDays } from "lucide-react";

const professionalTechnologies = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Tailwind CSS",
  "Material UI",
];

const roles = [
  {
    title: "Desenvolvedora Front-end",
    type: "PJ",
    period: "abr/2026 — atual",
    current: true,
  },
  {
    title: "Estagiária em Desenvolvimento Front-end",
    type: "Estágio",
    period: "abr/2024 — abr/2026",
    current: false,
  },
];

export function Experience() {
  return (
    <section
      id="experiencia"
      className="relative scroll-mt-18 overflow-hidden px-5 py-24 sm:px-8 sm:py-28"
    >
      <div className="experience-glow" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-12 flex items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs tracking-[0.2em] text-violet-300 uppercase">
            Experiência
          </span>
          <span className="h-px flex-1 bg-linear-to-r from-violet-400/35 to-transparent" />
        </motion.div>

        <motion.article
          className="experience-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="experience-company">
            <div>
              <span className="mb-5 grid size-12 place-items-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                <Building2 size={22} aria-hidden="true" />
              </span>
              <p className="text-xs font-semibold tracking-[0.18em] text-violet-300/70 uppercase">
                Tecnologia educacional
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Estudologia
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-[#aaa2b5]">
                Soluções digitais orientadas por dados para apoiar a gestão do
                ensino e da aprendizagem.
              </p>
            </div>
          </div>

          <div className="experience-content">
            <ol
              className="experience-timeline"
              aria-label="Cargos na Estudologia"
            >
              {roles.map((role) => (
                <li className="experience-role" key={role.title}>
                  <span
                    className={`experience-marker ${role.current ? "experience-marker-current" : ""}`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-semibold text-white">
                          {role.title}
                        </h3>
                        <span className="rounded-md border border-white/8 bg-white/4 px-2 py-0.5 text-[0.65rem] font-medium text-[#aaa2b5]">
                          {role.type}
                        </span>
                      </div>
                      {role.current && (
                        <p className="mt-1.5 text-xs font-medium text-violet-300">
                          Efetivação após dois anos de estágio
                        </p>
                      )}
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-xs text-[#aaa2b5]">
                      <CalendarDays size={14} aria-hidden="true" />
                      {role.period}
                    </span>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-9 space-y-4 text-sm leading-7 text-[#b8b0c3] sm:text-base">
              <p>
                Atuo no desenvolvimento e na evolução de aplicações web
                utilizando React e TypeScript. Minhas atividades incluem
                construção de interfaces, integração com APIs, manutenção de
                funcionalidades, correção de bugs e adaptação de telas para
                diferentes dispositivos.
              </p>
            </div>

            <ul
              className="mt-7 flex flex-wrap gap-2"
              aria-label="Tecnologias utilizadas na Estudologia"
            >
              {professionalTechnologies.map((technology) => (
                <li className="technology-tag" key={technology}>
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
