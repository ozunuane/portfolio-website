interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeading({ eyebrow, title, description, centered }: SectionHeadingProps) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow flex items-center gap-2">
        {!centered && <span className="h-px w-8 bg-accent/60" aria-hidden />}
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </div>
  )
}
