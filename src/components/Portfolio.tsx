import { getFeaturedProjects } from '@/lib/content'
import SectionHeading from './SectionHeading'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
  const projects = getFeaturedProjects()

  return (
    <section id="portfolio" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="Infrastructure, automation, and platform work — highlighting technical depth and real-world impact."
        />

        {projects.length === 0 ? (
          <p className="mt-14 text-center text-muted">No projects available yet. Check back soon.</p>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.id} className="card-surface group flex flex-col overflow-hidden">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-wider">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={tech} className="flex items-center gap-2">
                        {i > 0 && <span className="text-subtle">·</span>}
                        <span className="text-accent">{tech}</span>
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-fg transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex items-center gap-4 border-t border-line pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-accent"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-fg"
                      >
                        <Github className="h-4 w-4" />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
