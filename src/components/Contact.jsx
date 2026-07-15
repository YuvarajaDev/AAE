import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Mail, Globe2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const { t } = useTranslation()

  function handleSubmit(e) {
    e.preventDefault()
  }

  const details = [
    { icon: MapPin, title: t('contact.addressTitle'), value: t('contact.address') },
    { icon: Phone, title: t('contact.phoneTitle'), value: t('contact.phone') },
    { icon: Mail, title: t('contact.emailTitle'), value: t('contact.email') },
    { icon: Globe2, title: t('contact.websiteTitle'), value: t('contact.website') },
  ]

  return (
    <section id="contact" className="bg-cream-deep py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('contact.eyebrow')}
          heading={t('contact.heading')}
          subheading={t('contact.subheading')}
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            {details.map(({ icon: Icon, title, value }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-3xl border border-line bg-white/70 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-line bg-white/70 p-6">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
                {t('contact.formName')}
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-lg border border-line bg-cream px-4 py-2.5 text-sm text-ink outline-none transition focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
                {t('contact.formEmail')}
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-lg border border-line bg-cream px-4 py-2.5 text-sm text-ink outline-none transition focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
                {t('contact.formMessage')}
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full resize-none rounded-lg border border-line bg-cream px-4 py-2.5 text-sm text-ink outline-none transition focus:border-gold"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gold py-3 text-sm font-semibold text-navy transition hover:bg-gold-light"
            >
              {t('contact.formSubmit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
