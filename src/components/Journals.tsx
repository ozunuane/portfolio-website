import { getJournals } from '@/lib/content'
import { Calendar, Clock, Tag } from 'lucide-react'
import Image from 'next/image'

export default function Journals() {
  const journals = getJournals()

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

  return (
    <section id="journals" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technical Journals
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Insights, experiences, and lessons learned from architecting and managing cloud infrastructure at scale.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {journals.map((journal) => (
            <article key={journal.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 overflow-hidden">
                  <Image
                    src={journal.image}
                    alt={journal.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                {journal.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={journal.publishedDate}>
                      {formatDate(journal.publishedDate)}
                    </time>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{journal.readTime}</span>
                  </div>
                </div>

                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {journal.url ? (
                      <a href={journal.url} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0" />
                        {journal.title}
                      </a>
                    ) : (
                      <span>{journal.title}</span>
                    )}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {journal.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {journal.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  {journal.url ? (
                    <a
                      href={journal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
                    >
                      Read full article
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-sm font-medium text-gray-400">
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600 mb-4">
            Want to read more technical insights and DevOps experiences?
          </p>
          <a
            href="https://medium.com/@ozidevops"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            Visit My Medium Blog
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
