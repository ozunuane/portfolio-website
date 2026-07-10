'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#portfolio' },
  { name: 'Writing', href: '#journals' },
  { name: 'Speaking', href: '#speaking' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-line bg-bg/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:h-20 lg:px-8" aria-label="Global">
        <a href="#" className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 text-accent ring-1 ring-inset ring-accent/30">
            &gt;_
          </span>
          <span className="text-fg">ozimede<span className="text-accent">.dev</span></span>
        </a>

        <div className="hidden items-center gap-x-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-fg"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-bg transition-transform duration-200 hover:scale-[1.03]"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-fg lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open main menu"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={cn('lg:hidden', mobileMenuOpen ? 'block' : 'hidden')}>
        <div
          className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-bg-elevated px-6 py-5 ring-1 ring-line">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm font-semibold text-fg">ozimede<span className="text-accent">.dev</span></span>
            <button
              type="button"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-fg"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-white/5 hover:text-fg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-3 text-base font-semibold text-bg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}
