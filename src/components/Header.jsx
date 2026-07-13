import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'

const NAV_ITEMS = [
  { key: 'home', href: '#home' },
  { key: 'industries', href: '#industries' },
  { key: 'innovation', href: '#innovation' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
]

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#home" className="flex items-center gap-3">
          <Logo className="h-10 w-10 shrink-0" />
          <span className="hidden text-left leading-tight sm:block">
            <span className="block font-semibold text-gold-light">Arasamaram Aalamaram</span>
            <span className="block text-xs tracking-wide text-gray-400">Enterprises</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition hover:text-gold"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="hidden rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink transition hover:bg-gold-light md:block"
          >
            {t('nav.cta')}
          </a>
          <button
            className="text-gray-200 lg:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-line/60 bg-ink px-5 py-4 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-panel hover:text-gold"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
