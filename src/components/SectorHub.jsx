import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { industries } from '../data/industries'
import SectionHeading from './SectionHeading'
import Logo from './Logo'

const SPOKE_COLORS = [
  '#c9a03f',
  '#3f7d78',
  '#8b3a3a',
  '#455a7a',
  '#6b7a3f',
  '#a85f2e',
  '#6d4675',
  '#2f6b4f',
]

const RADIUS = 40

function nodePosition(index, total) {
  const angle = (-90 + (360 / total) * index) * (Math.PI / 180)
  return {
    x: 50 + RADIUS * Math.cos(angle),
    y: 50 + RADIUS * Math.sin(angle),
  }
}

export default function SectorHub() {
  const { t } = useTranslation()

  return (
    <section id="industries" className="bg-cream pt-12 pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('industries.eyebrow')}
          heading={t('industries.heading')}
          subheading={t('industries.subheading')}
        />

        {/* Desktop radial hub */}
        <div className="relative mx-auto mt-20 hidden aspect-square max-w-180 md:block">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
            {industries.map((item, i) => {
              const { x, y } = nodePosition(i, industries.length)
              return (
                <line
                  key={item.key}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  stroke={SPOKE_COLORS[i % SPOKE_COLORS.length]}
                  strokeWidth="0.4"
                  opacity="0.55"
                />
              )
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <Logo className="h-40 w-40 lg:h-48 lg:w-48" />
          </div>

          {industries.map((item, i) => {
            const { x, y } = nodePosition(i, industries.length)
            const Icon = item.icon
            const color = SPOKE_COLORS[i % SPOKE_COLORS.length]
            return (
              <Link
                key={item.key}
                to={`/sector/${item.key}`}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="group absolute z-10 flex w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
              >
                <span
                  style={{ borderColor: color, backgroundColor: `${color}1a`, color }}
                  className="flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-md transition group-hover:-translate-y-1 group-hover:shadow-lg lg:h-16 lg:w-16"
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="text-center text-[10.5px] font-medium leading-tight text-ink">
                  {t(`industries.list.${item.key}`)}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Mobile / tablet fallback grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:hidden">
          {industries.map(({ key, icon: Icon }, i) => {
            const color = SPOKE_COLORS[i % SPOKE_COLORS.length]
            return (
              <Link
                key={key}
                to={`/sector/${key}`}
                className="group flex flex-col items-center gap-3 rounded-3xl border border-line bg-white/70 px-4 py-7 text-center shadow-sm shadow-ink/5 transition hover:-translate-y-1 hover:bg-white"
              >
                <span
                  style={{ backgroundColor: `${color}1a`, color }}
                  className="flex h-12 w-12 items-center justify-center rounded-full transition"
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium leading-snug text-ink">
                  {t(`industries.list.${key}`)}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
