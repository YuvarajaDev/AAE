import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'
import Layout from '../components/Layout'
import { getSectorByKey } from '../data/sectors'

export default function SectorPage() {
  const { key } = useParams()
  const { t } = useTranslation()
  const sector = getSectorByKey(key)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [key])

  if (!sector) {
    return (
      <Layout>
        <section className="mx-auto max-w-3xl px-5 py-40 text-center sm:px-8">
          <h1 className="text-2xl font-semibold text-ink">Sector not found</h1>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark transition hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('common.backHome')}
          </Link>
        </section>
      </Layout>
    )
  }

  const Icon = sector.icon
  const isIndustry = sector.type === 'industry'
  const title = isIndustry ? t(`industries.list.${key}`) : t(`innovation.list.${key}.title`)
  const paragraph1 = isIndustry ? t(`industries.detail.${key}`) : t(`innovation.list.${key}.desc`)
  const paragraph2 = isIndustry
    ? t('industries.detailClosing', { name: title })
    : t('innovation.detailClosing')
  const badgeLabel = isIndustry ? t('common.industryBadge') : t('common.innovationBadge')

  return (
    <Layout>
      <section className="bg-cream pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-gold-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('common.backHome')}
          </Link>

          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy text-gold">
              <Icon className="h-8 w-8" strokeWidth={1.75} />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
                {badgeLabel}
              </span>
              <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{title}</h1>
            </div>
          </div>

          <div className="mt-8 space-y-4 rounded-3xl border border-line bg-white p-6 text-base leading-relaxed text-muted shadow-sm sm:p-8">
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
