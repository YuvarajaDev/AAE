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
    <section id="home" className="relative overflow-hidden bg-ink pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(212,175,106,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(59,111,214,0.15), transparent 45%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#d4af6a 1px, transparent 1px), linear-gradient(90deg, #d4af6a 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-panel/60 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-light">
          <Sparkles className="h-3.5 w-3.5" />
          {t('hero.eyebrow')}
        </span>

        <h1 className="mt-6 whitespace-pre-line text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          {t('hero.heading')}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
          {t('hero.subheading')}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#industries"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-ink transition hover:bg-gold-light"
          >
            {t('hero.ctaPrimary')}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#innovation"
            className="inline-flex items-center gap-2 rounded-full border border-gray-600 px-7 py-3 text-sm font-semibold text-gray-200 transition hover:border-gold hover:text-gold"
          >
            {t('hero.ctaSecondary')}
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-line/60 bg-panel/40 px-4 py-5 backdrop-blur-sm"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold text-gold sm:text-3xl">{stat.value}</dd>
              <dd className="mt-1 text-xs text-gray-400 sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
