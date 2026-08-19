import { motion } from 'motion/react'
import {
  ArrowDownRight,
  ContactRound,
  GitBranch,
  Mail,
  MapPin,
  Rocket,
} from 'lucide-react'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/dayaneglsantos',
    icon: GitBranch,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dayaneglsantos/',
    icon: ContactRound,
  },
  {
    label: 'E-mail',
    href: 'mailto:dayaneglsantos@gmail.com',
    icon: Mail,
  },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen scroll-mt-18 items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32"
    >
      <div className="hero-glow hero-glow-primary" aria-hidden="true" />
      <div className="hero-glow hero-glow-secondary" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(15rem,0.6fr)] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="mb-8 flex flex-wrap items-end gap-x-6 gap-y-3">
            <div className="border-l-2 border-violet-400 pl-3.5">
              <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-violet-300/70 uppercase">
                Status profissional
              </p>
              <p className="mt-1 text-sm font-medium text-[#eeeaf4]">
                Disponível para oportunidades
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 pb-0.5 text-sm text-[#aaa2b5]">
              <MapPin size={15} aria-hidden="true" /> Brasília, DF
            </span>
          </div>

          <p className="mb-3 flex items-center gap-2 font-medium text-violet-300">
            <Rocket size={18} aria-hidden="true" />
            Olá, eu sou a Dayane
          </p>
          <h1 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.045em] text-balance text-white sm:text-6xl lg:text-7xl">
            Desenvolvedora{' '}
            <span className="text-gradient">React e TypeScript</span>
            <br />
            Full Stack com Node.js
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#b8b0c3] sm:text-lg sm:leading-8">
            Desenvolvo interfaces web funcionais e acessíveis com atenção à
            experiência de quem as utiliza. Atualmente, amplio minha atuação no
            desenvolvimento full stack construindo aplicações com Node.js.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="button-primary"
              href="#projetos"
            >
              Conheça meus projetos
              <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a className="button-secondary" href="mailto:dayaneglsantos@gmail.com">
              Entre em contato
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                className="social-link"
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
              >
                <Icon size={19} aria-hidden="true" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[13rem] sm:max-w-[15rem] lg:mx-0 lg:ml-auto lg:max-w-[16.25rem]"
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: 'easeOut' }}
        >
          <div className="photo-frame">
            <div className="photo-corners" aria-hidden="true" />
            <img
              className="aspect-[4/5] w-full object-cover object-[50%_42%]"
              src="/dayane-santos.jpg"
              alt="Dayane Santos sorrindo"
              width="1536"
              height="2048"
            />
          </div>

        </motion.div>
      </div>
    </section>
  )
}
