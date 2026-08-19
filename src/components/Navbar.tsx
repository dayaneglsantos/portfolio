import { useState } from 'react'
import { Menu, Rocket, X } from 'lucide-react'

const navigation = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#09060f]/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-18 max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Navegação principal"
      >
        <a
          href="#inicio"
          className="group flex items-center gap-2 font-semibold tracking-tight text-white"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-xl border border-violet-400/25 bg-violet-400/10 text-violet-300 transition-colors group-hover:bg-violet-400/20">
            <Rocket size={18} aria-hidden="true" />
          </span>
          <span>Dayane Santos</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-[#b8b0c3] md:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                className="transition-colors hover:text-white focus-visible:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-xl border border-white/10 text-white transition-colors hover:bg-white/5 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/8 bg-[#09060f] px-5 py-4 md:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  className="block rounded-xl px-4 py-3 text-[#c8c0d2] transition-colors hover:bg-white/5 hover:text-white"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
