export default function SectionHeading({ eyebrow, heading, subheading, align = 'center' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <span className="text-sm font-semibold uppercase tracking-[0.15em] text-gold-dark">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{heading}</h2>
      {subheading && <p className="mt-4 text-base leading-relaxed text-muted">{subheading}</p>}
    </div>
  )
}
