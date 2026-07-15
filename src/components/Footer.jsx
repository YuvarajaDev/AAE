import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Handshake, Lightbulb, TrendingUp, Globe2, Users } from 'lucide-react'
import Logo from './Logo'
import { industries } from '../data/industries'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './SocialIcons'

const NAV_ITEMS = [
  { key: 'home', href: '/#home' },
  { key: 'industries', href: '/#industries' },
  { key: 'innovation', href: '/#innovation' },
  { key: 'about', href: '/#about' },
  { key: 'contact', href: '/#contact' },
]

const SOCIALS = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
  { icon: TwitterIcon, href: '#', label: 'Twitter' },
]

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  const featuredIndustries = industries.slice(0, 6)

  const values = [
    { icon: Handshake, title: t('footer.valueTitle1'), desc: t('footer.valueDesc1') },
    { icon: Lightbulb, title: t('footer.valueTitle2'), desc: t('footer.valueDesc2') },
    { icon: TrendingUp, title: t('footer.valueTitle3'), desc: t('footer.valueDesc3') },
    { icon: Globe2, title: t('footer.valueTitle4'), desc: t('footer.valueDesc4') },
    { icon: Users, title: t('footer.valueTitle5'), desc: t('footer.valueDesc5') },
  ]

  return (
    <footer className="bg-navy text-cream/80">
      <div className="border-b border-cream/10 px-5 py-10 text-center sm:px-8">
        <p className="text-lg font-semibold text-gold-light sm:text-xl">{t('footer.taglineMain')}</p>
        <p className="mt-2 text-sm text-cream/70">{t('footer.taglineSub')}</p>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-5">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-2">
              <Icon className="h-6 w-6 text-gold" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-semibold text-cream">{title}</p>
                <p className="text-xs text-cream/60">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="font-semibold text-cream">Arasamaram Aalamaram</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">{t('footer.tagline')}</p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/25 text-cream/70 transition hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">{t('footer.quickLinks')}</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="text-sm text-cream/70 transition hover:text-gold">
                    {t(`nav.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">{t('footer.industriesTitle')}</h3>
            <ul className="mt-4 space-y-2.5">
              {featuredIndustries.map((ind) => (
                <li key={ind.key}>
                  <Link to={`/sector/${ind.key}`} className="text-sm text-cream/70 transition hover:text-gold">
                    {t(`industries.list.${ind.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">{t('footer.connect')}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
              <li>{t('contact.address')}</li>
              <li>{t('contact.phone')}</li>
              <li>{t('contact.email')}</li>
              <li>{t('contact.website')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>© {year} Arasamaram Aalamaram Enterprises. {t('footer.rights')}</p>
          <p>{t('footer.disclaimer')}</p>
        </div>
      </div>
    </footer>
  )
}
