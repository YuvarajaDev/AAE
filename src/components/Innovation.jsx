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
    <section id="innovation" className="relative overflow-hidden bg-ink py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(20,184,166,0.18), transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('innovation.eyebrow')}
          heading={t('innovation.heading')}
          subheading={t('innovation.subheading')}
        />

        <div className="mt-14 space-y-3">
          {innovationDomains.map(({ key, icon: Icon }) => {
            const isOpen = openKeys.has(key)
            return (
              <div
                key={key}
                className="overflow-hidden rounded-2xl border border-line/60 bg-panel/50 transition hover:border-teal-500/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(key)}
                  aria-expanded={isOpen}
                  aria-controls={`innovation-panel-${key}`}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-500">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="flex-1 text-base font-semibold text-white sm:text-lg">
                    {t(`innovation.list.${key}.title`)}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-teal-500' : ''
                    }`}
                  />
                </button>
                <div
                  id={`innovation-panel-${key}`}
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-20 text-sm leading-relaxed text-gray-400 sm:pr-16">
                      {t(`innovation.list.${key}.desc`)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
