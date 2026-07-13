import { useTranslation } from 'react-i18next'
import { industries } from '../data/industries'
import SectionHeading from './SectionHeading'

export default function Industries() {
  const { t } = useTranslation()

  return (
    <section id="industries" className="bg-charcoal py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('industries.eyebrow')}
          heading={t('industries.heading')}
          subheading={t('industries.subheading')}
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-line/60 bg-panel/40 px-4 py-7 text-center transition hover:-translate-y-1 hover:border-gold/50 hover:bg-panel"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold transition group-hover:bg-gold/20">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium leading-snug text-gray-200">
                {t(`industries.list.${key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
