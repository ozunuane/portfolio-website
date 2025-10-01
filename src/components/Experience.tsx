import { getExperience } from '@/lib/content'
import { CalendarDays, MapPin, Building2 } from 'lucide-react'

export default function Experience() {
  const experience = getExperience()

  return (
    <section id="experience" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Career Journey
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Leading DevOps transformations and cloud infrastructure initiatives across fintech, e-commerce, and enterprise platforms.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={job.id} className="relative pl-8 pb-8">
                {/* Timeline line */}
                {index !== experience.length - 1 && (
                  <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-white" />
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{job.position}</h3>
                      <p className="text-base text-blue-600 font-medium">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 sm:mt-0 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{job.startDate} - {job.endDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>
                  
                  {job.achievements && job.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {job.technologies && job.technologies.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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
