import { BarChart3, BookOpen, FileCheck2, TrendingUp, Users, Wallet } from 'lucide-react'
import { ArrowIcon, CheckIcon } from './Icons'
import { SectionHeading } from './SectionHeading'
import { ContactButton } from '../contact/ContactModalContext'

const services = [
  {
    title: 'Bookkeeping',
    description: 'Every transaction recorded accurately.',
    items: ['Transaction recording', 'Bank reconciliation'],
    icon: BookOpen,
  },
  {
    title: 'Tax & GST compliance',
    description: 'Filings on time, books audit-ready.',
    items: ['Corporate tax', 'GST filing', 'IRAS compliance'],
    icon: FileCheck2,
  },
  {
    title: 'Payroll',
    description: 'Accurate payroll, paid on time.',
    items: ['Payroll processing', 'Payroll records'],
    icon: Users,
  },
  {
    title: 'Financial reporting',
    description: "A clear view of your business's health.",
    items: ['P&L', 'Balance sheet', 'Cash flow'],
    icon: BarChart3,
  },
  {
    title: 'Cash flow management',
    description: 'Know where your cash is going.',
    items: ['Cash flow monitoring', 'Forecasting support'],
    icon: Wallet,
  },
  {
    title: 'Strategic finance advice',
    description: 'Guidance to grow revenue and profit.',
    items: ['Growth planning', 'Cost reduction'],
    icon: TrendingUp,
  },
]

// Cards take these three colour accents in turn.
const accents = [
  { icon: 'bg-[#e5f3eb] text-[#1f8069]', line: 'bg-[#278f77]' },
  { icon: 'bg-[#e8f2f4] text-[#2b7181]', line: 'bg-[#4a9aaa]' },
  { icon: 'bg-[#eaf1f5] text-[#365f84]', line: 'bg-[#6c9db8]' },
]

export function ServicesSection() {
  return (
    <section id="services" className="section-space bg-[linear-gradient(180deg,#f4f8f6_0%,#eef5f2_100%)]">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="What we do" title="Your own accounting team, for half the price." />
          <ContactButton className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-[#b9d6cb] bg-white px-5 py-3 text-sm font-extrabold text-[#176b67] transition hover:border-[#176b67] hover:text-[#0d514d] lg:self-auto">
            Discuss your needs <ArrowIcon className="h-4 w-4" />
          </ContactButton>
        </div>

        <div className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            const accent = accents[index % accents.length]

            return (
              <article
                key={service.title}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#dce8e3] bg-white p-6 shadow-[0_12px_32px_rgba(15,60,57,0.055)] transition duration-300 hover:-translate-y-1 hover:border-[#9ecbb9] hover:shadow-[0_24px_52px_rgba(15,60,57,0.12)] sm:p-7"
              >
                <span className={`absolute inset-x-0 top-0 h-1 ${accent.line}`} aria-hidden="true" />
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.icon}`}>
                    <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <span className="pt-1 text-xs font-extrabold tracking-[0.15em] text-[#9aadb0]">
                    {String(index + 1).padStart(2, '0')} / 06
                  </span>
                </div>

                <h3 className="mt-6 text-[21px] font-extrabold leading-snug tracking-[-0.025em] text-[#10313c]">{service.title}</h3>
                <p className="body-copy mt-2.5 text-[15px] leading-7 text-[#5a6d72]">{service.description}</p>

                <div className="mt-auto pt-7">
                  <div className="border-t border-[#e4eeea] pt-5">
                    <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#438575]">What&apos;s included</p>
                    <ul className="space-y-2.5">
                      {service.items.map((item) => (
                        <li key={item} className="body-copy flex items-start gap-2.5 text-[13px] font-semibold leading-5 text-[#496168]">
                          <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#e5f3eb] text-[#278f77]">
                            <CheckIcon className="h-3 w-3" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
