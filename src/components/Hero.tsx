import Image from 'next/image'
import { Download, ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { getPersonalInfo, getSocialLinks } from '@/lib/content'

const stats = [
  { value: '8+', label: 'Years in DevOps' },
  { value: '4', label: 'Cloud platforms' },
  { value: '24/7', label: 'Ops reliability' },
]

const stack = ['Kubernetes', 'AWS', 'Terraform', 'GitOps', 'Observability', 'Cloud Security']

export default function Hero() {
  const personal = getPersonalInfo()
  const social = getSocialLinks()
  const role = personal.title.split('|')[0].trim()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pt-32">
      {/* atmospheric grid */}
      <div className="grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        {/* Left — copy */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for EMEA-remote roles
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-fg">{personal.name.split(' ')[0]} </span>
            <span className="text-gradient">{personal.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="eyebrow mt-5">{role}</p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {personal.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg transition-transform duration-200 hover:scale-[1.03]"
            >
              Let&apos;s work together
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/unuane_ozimede_devops_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/5 px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <div className="flex items-center gap-1 pl-1">
              <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-fg">
                <Github className="h-5 w-5" />
              </a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-fg">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-bold text-fg sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-subtle sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — portrait card */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-transparent to-accent-2/20 blur-2xl" aria-hidden />
            <div className="card-surface animate-floaty overflow-hidden p-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                <Image
                  src="/gpunuane-photo.jpg"
                  alt={personal.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
                <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-lg border border-line bg-bg/60 px-3 py-2 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="font-mono text-xs text-muted">{personal.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech ticker */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden border-t border-line bg-bg/40 py-4 backdrop-blur-sm sm:block">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 font-mono text-xs uppercase tracking-widest text-subtle">
          {stack.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
