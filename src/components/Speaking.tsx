import { getSpeaking } from '@/lib/content'
import { Calendar, Clock, MapPin, Users, ExternalLink, Play, FileText } from 'lucide-react'

export default function Speaking() {
  const speakingEngagements = getSpeaking()

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Date not available'

    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) return 'Invalid date'

      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch (error) {
      console.error('Date formatting error:', error)
      return 'Date not available'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'conference talk':
        return 'bg-blue-100 text-blue-800 ring-blue-600/20'
      case 'meetup talk':
        return 'bg-green-100 text-green-800 ring-green-600/20'
      case 'workshop':
        return 'bg-purple-100 text-purple-800 ring-purple-600/20'
      case 'panel':
        return 'bg-orange-100 text-orange-800 ring-orange-600/20'
      default:
        return 'bg-gray-100 text-gray-800 ring-gray-600/20'
    }
  }

  return (
    <section id="speaking" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Speaking Engagements
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sharing knowledge and insights on DevOps, cloud infrastructure, and modern software engineering practices at conferences, meetups, and workshops.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="space-y-8">
            {speakingEngagements.map((engagement) => (
              <div key={engagement.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {engagement.title}
                        </h3>
                        <p className="text-lg text-blue-600 font-medium mb-3">
                          {engagement.event}
                        </p>
                      </div>
                      {engagement.featured && (
                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 ml-4">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {engagement.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>{formatDate(engagement.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{engagement.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>{engagement.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span>{engagement.audience}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${getTypeColor(engagement.type)}`}>
                        {engagement.type}
                      </span>
                      {engagement.topics.map((topic) => (
                        <span
                          key={topic}
                          className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-4 lg:mt-0 lg:ml-6">
                    {engagement.slides && (
                      <a
                        href={engagement.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
                      >
                        <FileText className="h-4 w-4" />
                        Slides
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    {engagement.video && (
                      <a
                        href={engagement.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors"
                      >
                        <Play className="h-4 w-4" />
                        Video
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600 mb-4">Interested in having me speak at your event?</p>
          <a
            href="mailto:godspowerunuane@gmail.com?subject=Speaking%20Engagement%20Inquiry"
            className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            Get In Touch
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
