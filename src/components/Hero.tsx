import Image from 'next/image'
import { Download, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <div className="relative mx-auto h-32 w-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
              <Image
                src="/gpunuane-photo.jpg"
                alt="Unuane Godspower Ozimede"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Unuane Godspower Ozimede
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Passionate professional dedicated to delivering exceptional results through innovative solutions and collaborative teamwork.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="/UNUANE GODSPOWER OZIMEDE_CV_25 (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-500" />
      </div>
    </section>
  )
}
