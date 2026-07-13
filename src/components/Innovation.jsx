import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { innovationDomains } from '../data/innovation'
import SectionHeading from './SectionHeading'

export default function Innovation() {
  const { t } = useTranslation()
  const [openKeys, setOpenKeys] = useState(() => new Set([innovationDomains[0].key]))

  function toggle(key) {
    setOpenKeys((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <section id="innovation" className="bg-sage pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('innovation.eyebrow')}
          heading={t('innovation.heading')}
          subheading={t('innovation.subheading')}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {innovationDomains.map(({ key, icon: Icon }) => {
            const isOpen = openKeys.has(key)
            return (
              <button
                type="button"
                key={key}
                onClick={() => toggle(key)}
                aria-expanded={isOpen}
                className={`flex w-full flex-col rounded-3xl border p-6 text-left shadow-sm transition ${
                  isOpen
                    ? 'border-terracotta/50 bg-cream shadow-terracotta/10'
                    : 'border-line bg-cream/70 shadow-ink/5 hover:-translate-y-1 hover:border-terracotta/30 hover:bg-cream'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="flex-1 text-lg font-semibold text-ink">
                    {t(`innovation.list.${key}.title`)}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-terracotta' : ''
                    }`}
                  />
                </div>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {t(`innovation.list.${key}.desc`)}
                    </p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
