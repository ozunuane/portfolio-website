import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1120',
}

export const metadata: Metadata = {
  title: 'Unuane Godspower Ozimede - Professional Portfolio',
  description: 'Professional portfolio of Unuane Godspower Ozimede. Explore my experience, skills, and projects.',
  keywords: ['Unuane Godspower', 'Ozimede', 'Portfolio', 'Professional', 'CV'],
  authors: [{ name: 'Unuane Godspower Ozimede' }],
  creator: 'Unuane Godspower Ozimede',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ozimede.dev',
    title: 'Unuane Godspower Ozimede - Professional Portfolio',
    description: 'Professional portfolio of Unuane Godspower Ozimede. Explore my experience, skills, and projects.',
    siteName: 'Unuane Godspower Ozimede',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unuane Godspower Ozimede - Professional Portfolio',
    description: 'Professional portfolio of Unuane Godspower Ozimede. Explore my experience, skills, and projects.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}