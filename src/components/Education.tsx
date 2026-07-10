import { getEducation, getCertifications } from '@/lib/content'
import SectionHeading from './SectionHeading'
import { GraduationCap, Award, MapPin, Calendar, ExternalLink } from 'lucide-react'

export default function Education() {
  const education = getEducation()
  const certifications = getCertifications()

  return (
    <section id="education" className="scroll-mt-20 border-y border-line bg-bg-elevated/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Education & certifications"
          description="Formal background and professional certifications behind a commitment to continuous learning."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Education */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
              <GraduationCap className="h-4 w-4 text-accent" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="card-surface p-6">
                  <h4 className="text-base font-semibold text-fg">{edu.degree}</h4>
                  <p className="mt-0.5 font-medium text-accent">{edu.field}</p>
                  <p className="mt-1 text-sm text-muted">{edu.institution}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-subtle">
                    <span className="inline-flex items-center gap-1.5 font-mono">
                      <Calendar className="h-3.5 w-3.5" />
                      {edu.year}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
              <Award className="h-4 w-4 text-accent-2" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="card-surface p-6">
                  <h4 className="text-base font-semibold text-fg">{cert.name}</h4>
                  <p className="mt-0.5 font-medium text-accent-2">{cert.issuer}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-subtle">
                    <span className="inline-flex items-center gap-1.5 font-mono">
                      <Calendar className="h-3.5 w-3.5" />
                      {cert.date}
                    </span>
                    {cert.credentialId && (
                      <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[11px]">ID: {cert.credentialId}</span>
                    )}
                  </div>
                  {(cert.credentialUrl || cert.verificationUrl) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white/5 px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-accent"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          View credential
                        </a>
                      )}
                      {cert.verificationUrl && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-white/5 px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent-2/40 hover:text-accent-2"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Verify
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
