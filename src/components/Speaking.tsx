import { getSpeaking } from '@/lib/content'
import SectionHeading from './SectionHeading'
import { Calendar, Clock, MapPin, Users, ExternalLink, Play, FileText } from 'lucide-react'

function formatDate(dateString: string) {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function Speaking() {
  const engagements = getSpeaking()

  return (
    <section id="speaking" className="scroll-mt-20 border-y border-line bg-bg-elevated/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Talks"
          title="Speaking engagements"
          description="Sharing knowledge on DevOps, cloud infrastructure, and modern software engineering at conferences, meetups, and workshops."
        />

        <div className="mt-14 space-y-5">
          {engagements.map((e) => (
            <div key={e.id} className="card-surface p-6 sm:p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                      {e.type}
                    </span>
                    {e.featured && (
                      <span className="rounded-full border border-line bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-muted">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-fg">{e.title}</h3>
                  <p className="mt-0.5 font-medium text-accent-2">{e.event}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{e.description}</p>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-subtle sm:grid-cols-4">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{formatDate(e.date)}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{e.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{e.duration}</span>
                    <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{e.audience}</span>
                  </div>

                  {e.topics?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.topics.map((topic) => (
                        <span key={topic} className="rounded-md border border-line bg-white/5 px-2 py-0.5 font-mono text-[11px] text-subtle">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {(e.slides || e.video) && (
                  <div className="flex gap-2 lg:flex-col lg:w-36">
                    {e.slides && (
                      <a
                        href={e.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-line bg-white/5 px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-accent"
                      >
                        <FileText className="h-4 w-4" /> Slides <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    {e.video && (
                      <a
                        href={e.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-line bg-white/5 px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-accent-2/40 hover:text-accent-2"
                      >
                        <Play className="h-4 w-4" /> Video <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-4 text-sm text-muted">Interested in having me speak at your event?</p>
          <a
            href="mailto:godspowerunuane@gmail.com?subject=Speaking%20Engagement%20Inquiry"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform duration-200 hover:scale-[1.03]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
