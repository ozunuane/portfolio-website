import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}