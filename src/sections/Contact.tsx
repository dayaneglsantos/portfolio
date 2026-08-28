import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Rocket,
} from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons'

const contactLinks = [
  {
    label: 'E-mail',
    value: 'dayaneglsantos@gmail.com',
    href: 'mailto:dayaneglsantos@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/dayaneglsantos',
    href: 'https://www.linkedin.com/in/dayaneglsantos/',
    icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    value: 'github.com/dayaneglsantos',
    href: 'https://github.com/dayaneglsantos',
    icon: GitHubIcon,
  },
]

export function Contact() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-18 overflow-hidden border-t border-white/6 bg-[#0d0814] px-5 pt-24 sm:px-8 sm:pt-28"
    >
      <div
        className="pointer-events-none absolute right-[-12rem] top-[-8rem] size-[30rem] rounded-full bg-violet-700/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mb-12 flex items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs tracking-[0.2em] text-violet-300 uppercase">
            Contato
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-violet-400/35 to-transparent" />
        </motion.div>

        <div className="grid gap-12 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <span className="mb-5 grid size-11 place-items-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
              <Rocket size={21} aria-hidden="true" />
            </span>
            <h2 className="max-w-3xl text-3xl leading-tight font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Vamos transformar uma ideia em uma experiência digital?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#b8b0c3] sm:text-lg sm:leading-8">
              Estou disponível para oportunidades em desenvolvimento front-end
              e para continuar evoluindo como desenvolvedora full stack.
              Entre em contato para conversarmos.
            </p>

            <a
              className="button-primary mt-8"
              href="mailto:dayaneglsantos@gmail.com"
            >
              Enviar um e-mail
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            className="grid gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <div className="mb-2 flex items-center gap-2 text-sm text-[#aaa2b5]">
              <MapPin size={16} className="text-violet-300" aria-hidden="true" />
              Brasília, DF · Trabalho remoto
            </div>

            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <motion.a
                className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-4 transition-colors hover:border-violet-300/25 hover:bg-white/[0.045] sm:p-5"
                href={href}
                key={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                variants={{
                  hidden: { opacity: 0, x: 18 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.45 }}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-violet-400/10 text-violet-300">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold tracking-[0.14em] text-violet-300/70 uppercase">
                    {label}
                  </span>
                  <span className="mt-1 block truncate text-sm text-[#d8d1e0] sm:text-base">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  className="shrink-0 text-[#6f657c] transition-colors group-hover:text-violet-300"
                  size={18}
                  aria-hidden="true"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <footer className="flex flex-col gap-2 border-t border-white/8 py-7 text-xs text-[#756c80] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dayane Santos</p>
          <p>Desenvolvido com React, TypeScript e muita curiosidade.</p>
        </footer>
      </div>
    </section>
  )
}
