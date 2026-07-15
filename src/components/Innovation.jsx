import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { innovationDomains } from '../data/innovation'
import SectionHeading from './SectionHeading'

const DOMAIN_COLORS = [
  '#455a7a',
  '#a85f2e',
  '#3f7d78',
  '#8b3a3a',
  '#6d4675',
  '#6b7a3f',
  '#c9a03f',
  '#2f6b4f',
  '#7a4b45',
]

export default function Innovation() {
  const { t } = useTranslation()

  return (
    <section id="innovation" className="bg-cream-deep pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('innovation.eyebrow')}
          heading={t('innovation.heading')}
          subheading={t('innovation.subheading')}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {innovationDomains.map(({ key, icon: Icon }, i) => {
            const color = DOMAIN_COLORS[i % DOMAIN_COLORS.length]
            return (
              <Link
                key={key}
                to={`/sector/${key}`}
                className="group flex flex-col rounded-3xl border border-line bg-white/70 p-6 shadow-sm shadow-ink/5 transition hover:-translate-y-1 hover:border-gold/40 hover:bg-white"
              >
                <div className="flex items-center gap-4">
                  <span
                    style={{ backgroundColor: `${color}1a`, color }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="flex-1 text-lg font-semibold text-ink">
                    {t(`innovation.list.${key}.title`)}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {t(`innovation.list.${key}.desc`)}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
