import { getExperience } from '@/lib/content'
import SectionHeading from './SectionHeading'
import { CalendarDays, MapPin } from 'lucide-react'

export default function Experience() {
  const experience = getExperience()

  return (
    <section id="experience" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Where I've built things"
          description="Leading DevOps transformations and cloud infrastructure across fintech, DeFi, e-commerce, and enterprise platforms."
        />

        <div className="mt-14 sm:pl-4">
          <div className="relative border-l border-line pl-8 sm:pl-10">
            {experience.map((job) => (
              <div key={job.id} className="relative pb-12 last:pb-0">
                {/* node */}
                <span className="absolute -left-[41px] top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-accent bg-bg sm:-left-[49px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <div className="card-surface p-6 sm:p-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-fg">{job.position}</h3>
                      <p className="mt-0.5 font-medium text-accent">{job.company}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-xs text-subtle sm:items-end">
                      <span className="inline-flex items-center gap-1.5 font-mono">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {job.startDate} — {job.endDate}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted">{job.description}</p>

                  {job.achievements?.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}

                  {job.technologies?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-line bg-white/5 px-2.5 py-1 font-mono text-xs text-subtle"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
