'use client'

import { useState } from 'react'
import { getPersonalInfo, getSocialLinks } from '@/lib/content'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'

const inputClass =
  'block w-full rounded-lg border border-line bg-white/5 px-3.5 py-2.5 text-sm text-fg placeholder:text-subtle transition-colors focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/40'

export default function Contact() {
  const personalInfo = getPersonalInfo()
  const socialLinks = getSocialLinks()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="card-surface overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Info panel */}
            <div className="relative border-b border-line bg-bg-elevated/60 p-8 sm:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
              <p className="eyebrow">Contact</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-fg">Let&apos;s build something reliable</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Open to senior DevOps roles, consulting, and speaking. Reach out and I&apos;ll get back to you.
              </p>

              <div className="mt-8 space-y-4 text-sm">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-muted transition-colors hover:text-accent">
                  <Mail className="h-5 w-5 text-accent" />
                  {personalInfo.email}
                </a>
                {personalInfo.phone && (
                  <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-muted transition-colors hover:text-accent">
                    <Phone className="h-5 w-5 text-accent" />
                    {personalInfo.phone}
                  </a>
                )}
                <div className="flex items-center gap-3 text-muted">
                  <MapPin className="h-5 w-5 text-accent" />
                  {personalInfo.location}
                </div>
              </div>

              <div className="mt-8 flex gap-2">
                {socialLinks.github && (
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-fg">
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/40 hover:text-fg">
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Form */}
            <div className="p-8 sm:p-10 lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-fg">Name</label>
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">Email</label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-fg">Subject</label>
                  <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg">Message</label>
                  <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className={inputClass} />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-bg transition-transform duration-200 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-bg/40 border-t-bg" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <p className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    Sorry, there was an error. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
