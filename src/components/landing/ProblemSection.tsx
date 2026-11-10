import { CalendarClock, Clock3, EyeOff } from 'lucide-react'
import { ArrowIcon } from './Icons'
import { SectionHeading } from './SectionHeading'
import { ContactButton } from '../contact/ContactModalContext'

const problems = [
  {
    title: 'Reports arrive too late',
    text: 'You see the numbers after the decision window has closed.',
    icon: Clock3,
  },
  {
    title: 'Compliance feels reactive',
    text: 'Statutory and IRAS deadlines keep interrupting your week.',
    icon: CalendarClock,
  },
  {
    title: 'Management lacks visibility',
    text: 'Revenue and costs are recorded but never turned into insight.',
    icon: EyeOff,
  },
]

export function ProblemSection() {
  return (
    <section id="problems" className="section-space bg-white">
      <div className="container-shell">
        <SectionHeading eyebrow="Sound familiar?" title="Are your numbers holding back growth?" centered />

        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {problems.map((problem) => {
            const Icon = problem.icon

            return (
              <article
                key={problem.title}
                className="rounded-2xl border border-[#e9e2dc] bg-[#fffaf6] p-6 shadow-[0_12px_32px_rgba(60,35,15,0.05)] sm:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fde9dd] text-[#c2410c]">
                  <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-[21px] font-extrabold leading-snug tracking-[-0.025em] text-[#10313c]">{problem.title}</h3>
                <p className="body-copy mt-2.5 text-[15px] leading-7 text-[#5a6d72]">{problem.text}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 text-center">
          <p className="text-lg font-extrabold tracking-[-0.02em] text-[#10313c] sm:text-xl">
            The issue is usually the system, <span className="text-[#176b67]">not the effort.</span>
          </p>
          <ContactButton className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#c2410c] px-6 py-4 text-sm font-extrabold text-white shadow-[0_12px_26px_rgba(194,65,12,.18)] transition hover:bg-[#9a3412] min-[1920px]:text-base">
            Book a free accounting health check <ArrowIcon className="h-4 w-4" />
          </ContactButton>
        </div>
      </div>
    </section>
  )
}
