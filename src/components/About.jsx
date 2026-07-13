import { useTranslation } from 'react-i18next'
import { Landmark, Layers, Rocket } from 'lucide-react'
import Logo from './Logo'

export default function About() {
  const { t } = useTranslation()

  const values = [
    { icon: Landmark, title: t('about.valueTitle1'), desc: t('about.valueDesc1') },
    { icon: Layers, title: t('about.valueTitle2'), desc: t('about.valueDesc2') },
    { icon: Rocket, title: t('about.valueTitle3'), desc: t('about.valueDesc3') },
  ]

  return (
    <section id="about" className="bg-charcoal py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-emerald-500/20 bg-panel/40 sm:h-80 sm:w-80">
            <div className="absolute inset-4 rounded-full border border-emerald-500/10" />
            <Logo className="h-32 w-32 sm:h-40 sm:w-40" />
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
            {t('about.eyebrow')}
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{t('about.heading')}</h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-400">
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
            <p>{t('about.paragraph3')}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-line/60 bg-panel/40 p-5">
                <Icon className="h-6 w-6 text-emerald-500" strokeWidth={1.75} />
                <h3 className="mt-3 text-sm font-semibold text-white">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
