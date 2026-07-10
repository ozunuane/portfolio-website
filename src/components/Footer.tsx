import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-elevated/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent/15 text-accent ring-1 ring-inset ring-accent/30">&gt;_</span>
          <span className="text-fg">ozimede<span className="text-accent">.dev</span></span>
        </div>

        <p className="order-last text-center text-xs text-subtle md:order-none">
          © {new Date().getFullYear()} Unuane Godspower Ozimede. All rights reserved.
        </p>

        <div className="flex gap-2">
          <a href="https://github.com/ozunuane" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-fg">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/ozimede/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-fg">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:godspowerunuane@gmail.com" aria-label="Email" className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-fg">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
