import { getJournals } from '@/lib/content'
import SectionHeading from './SectionHeading'
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

function formatDate(dateString: string) {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function Journals() {
  const journals = getJournals()

  return (
    <section id="journals" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Writing"
          title="Technical journals"
          description="Insights and lessons from architecting and running cloud infrastructure at scale."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journals.map((journal) => {
            const Wrapper = journal.url ? 'a' : 'div'
            return (
              <Wrapper
                key={journal.id}
                {...(journal.url ? { href: journal.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="card-surface group flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={journal.image}
                    alt={journal.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
                  {journal.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-bg">
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-4 font-mono text-[11px] text-subtle">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(journal.publishedDate)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {journal.readTime}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold leading-snug text-fg transition-colors group-hover:text-accent">
                    {journal.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{journal.excerpt}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {journal.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="rounded-md border border-line bg-white/5 px-2 py-0.5 font-mono text-[11px] text-subtle">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="mt-5 inline-flex items-center gap-1 border-t border-line pt-4 text-sm font-medium text-accent">
                    {journal.url ? 'Read article' : 'Coming soon'}
                    {journal.url && <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                  </span>
                </div>
              </Wrapper>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://medium.com/@ozidevops"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/5 px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent"
          >
            Visit my Medium blog
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
