import { getEducation, getCertifications } from '@/lib/content'
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react'

export default function Education() {
  const education = getEducation()
  const certifications = getCertifications()

  return (
    <section id="education" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Education & Certifications
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            My educational background and professional certifications that demonstrate my commitment to continuous learning.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                        <p className="text-blue-600 font-medium">{edu.field}</p>
                        <p className="text-gray-600 font-medium">{edu.institution}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-green-600" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900">{cert.name}</h4>
                        <p className="text-green-600 font-medium">{cert.issuer}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{cert.date}</span>
                          </div>
                          {cert.credentialId && (
                            <div className="text-xs bg-gray-100 px-2 py-1 rounded">
                              ID: {cert.credentialId}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
