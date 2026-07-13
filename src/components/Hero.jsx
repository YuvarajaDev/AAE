import { useTranslation } from 'react-i18next'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  const stats = [
    { value: '19', label: t('hero.statIndustries') },
    { value: '13', label: t('hero.statDomains') },
    { value: '30+', label: t('hero.statYears') },
    { value: '8', label: t('hero.statCountries') },
  ]

  return (
    <section id="home" className="relative overflow-hidden bg-sage pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cream/70 blur-2xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-16 top-20 h-56 w-56 rounded-full bg-terracotta/15 blur-2xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sage-deep/80 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream/70 px-4 py-1.5 text-xs font-medium tracking-wide text-forest">
          <Sparkles className="h-3.5 w-3.5" />
          {t('hero.eyebrow')}
        </span>

        <h1 className="mt-6 whitespace-pre-line text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
          {t('hero.heading')}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {t('hero.subheading')}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#industries"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-cream transition hover:bg-terracotta-dark"
          >
            {t('hero.ctaPrimary')}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#innovation"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3 text-sm font-semibold text-ink transition hover:border-forest hover:text-forest"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-line bg-cream/80 px-4 py-5 backdrop-blur-sm"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold text-terracotta sm:text-3xl">{stat.value}</dd>
              <dd className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
