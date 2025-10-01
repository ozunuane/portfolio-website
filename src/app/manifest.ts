import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Unuane Godspower Ozimede - Professional Portfolio',
    short_name: 'Ozimede Portfolio',
    description: 'Professional portfolio of Unuane Godspower Ozimede. Explore my experience, skills, and projects.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
