import { getPersonalInfo } from '@/lib/content'
import SectionHeading from './SectionHeading'
import { Server, ShieldCheck, GitBranch, Gauge } from 'lucide-react'

const focus = [
  { icon: Server, title: '24/7 Operations', body: 'High-reliability infrastructure for DeFi protocols and payment-grade fintech where downtime hits users and TVL.' },
  { icon: GitBranch, title: 'Platform & GitOps', body: 'Kubernetes orchestration, CI/CD, and GitOps workflows that ship safely and scale across clouds.' },
  { icon: ShieldCheck, title: 'Cloud Security', body: 'Hardened, compliant environments for regulated and high-stakes systems — from IAM to zero-trust.' },
  { icon: Gauge, title: 'FinOps & Efficiency', body: 'Published research on cloud cost optimization, turning observability into measurable savings.' },
]

export default function About() {
  const personal = getPersonalInfo()

  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="About" title="Engineering reliability where it matters most" />
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{personal.bio}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {focus.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card-surface p-6">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/12 text-accent ring-1 ring-inset ring-accent/25">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-fg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
