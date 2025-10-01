import { getSkills } from '@/lib/content'

export default function Skills() {
  const skills = getSkills()

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Core Competencies
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Technical expertise, leadership capabilities, and tools that drive successful DevOps transformations and cloud infrastructure solutions.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Technical Skills */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <div className="h-4 w-4 rounded bg-blue-600"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Technical Expertise</h3>
              </div>
              <div className="space-y-4">
                {skills.technical.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                  <div className="h-4 w-4 rounded bg-green-600"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Leadership & Collaboration</h3>
              </div>
              <div className="space-y-3">
                {skills.soft.map((skill) => (
                  <div 
                    key={skill}
                    className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mr-2 mb-2"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center">
                  <div className="h-4 w-4 rounded bg-purple-600"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">DevOps Toolchain</h3>
              </div>
              <div className="space-y-3">
                {skills.tools.map((tool) => (
                  <div 
                    key={tool}
                    className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20 mr-2 mb-2"
                  >
                    {tool}
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
