import { getSkills } from '@/lib/content'
import SectionHeading from './SectionHeading'
import { Cpu, Users, Wrench } from 'lucide-react'

function Meter({ level }: { level: number }) {
  const filled = Math.round(level / 20)
  return (
    <div className="flex gap-1" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-4 rounded-full ${i < filled ? 'bg-accent' : 'bg-white/10'}`}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  const skills = getSkills()

  return (
    <section id="skills" className="scroll-mt-20 border-y border-line bg-bg-elevated/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Core competencies"
          description="The technical depth, leadership, and tooling that drive successful DevOps transformations and cloud infrastructure at scale."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Technical */}
          <div className="card-surface p-7 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/12 text-accent ring-1 ring-inset ring-accent/25">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-fg">Technical expertise</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {skills.technical.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-muted">{skill.name}</span>
                  <Meter level={skill.level} />
                </li>
              ))}
            </ul>
          </div>

          {/* Soft */}
          <div className="card-surface p-7">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent-2/12 text-accent-2 ring-1 ring-inset ring-accent-2/25">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-fg">Leadership &amp; collaboration</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.soft.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line bg-white/5 px-3 py-1.5 text-sm font-medium text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="card-surface p-7">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/12 text-accent ring-1 ring-inset ring-accent/25">
                <Wrench className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-fg">DevOps toolchain</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-line bg-white/5 px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
