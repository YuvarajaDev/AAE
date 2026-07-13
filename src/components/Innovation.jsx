import { useTranslation } from 'react-i18next'
import { innovationDomains } from '../data/innovation'
import SectionHeading from './SectionHeading'

export default function Innovation() {
  const { t } = useTranslation()

  return (
    <section id="innovation" className="relative overflow-hidden bg-ink py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(59,111,214,0.18), transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('innovation.eyebrow')}
          heading={t('innovation.heading')}
          subheading={t('innovation.subheading')}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {innovationDomains.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="rounded-2xl border border-line/60 bg-panel/50 p-6 transition hover:-translate-y-1 hover:border-azure/60 hover:shadow-lg hover:shadow-azure/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-azure/15 text-azure">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {t(`innovation.list.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {t(`innovation.list.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
