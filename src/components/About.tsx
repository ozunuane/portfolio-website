import { getPersonalInfo, getSkills } from '@/lib/content'

export default function About() {
  const personalInfo = getPersonalInfo()
  const skills = getSkills()

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            {personalInfo.bio || personalInfo.summary}
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="h-5 w-5 flex-none rounded-full bg-blue-600"></div>
                Technical Skills
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-700">
                <div className="space-y-2">
                  {skills.technical.slice(0, 6).map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-sm">{skill.name}</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </dd>
            </div>
            
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="h-5 w-5 flex-none rounded-full bg-green-600"></div>
                Soft Skills
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-700">
                <div className="flex flex-wrap gap-2">
                  {skills.soft?.map((skill) => (
                    <span 
                      key={skill}
                      className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                    >
                      {skill}
                    </span>
                  )) || <span className="text-gray-700">No soft skills available</span>}
                </div>
              </dd>
            </div>
            
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="h-5 w-5 flex-none rounded-full bg-purple-600"></div>
                Tools & Technologies
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-700">
                <div className="flex flex-wrap gap-2">
                  {skills.tools?.map((tool) => (
                    <span 
                      key={tool}
                      className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20"
                    >
                      {tool}
                    </span>
                  )) || <span className="text-gray-700">No tools available</span>}
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
