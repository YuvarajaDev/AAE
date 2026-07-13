import { useTranslation } from 'react-i18next'
import { industries } from '../data/industries'
import SectionHeading from './SectionHeading'

export default function Industries() {
  const { t } = useTranslation()

  return (
    <section id="industries" className="bg-sage-deep py-24">
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
              className="group flex flex-col items-center gap-3 rounded-3xl border border-line bg-cream/70 px-4 py-7 text-center shadow-sm shadow-ink/5 transition hover:-translate-y-1 hover:border-terracotta/50 hover:bg-cream"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest transition group-hover:bg-terracotta/15 group-hover:text-terracotta">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium leading-snug text-ink">
                {t(`industries.list.${key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
