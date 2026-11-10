import { Briefcase, ClipboardCheck, Users } from 'lucide-react'
import { ArrowIcon, CheckIcon } from './Icons'
import { SectionHeading } from './SectionHeading'
import { ContactButton } from '../contact/ContactModalContext'

const proofPoints = [
  'Founded Growwth Partners in 2013',
  '10+ years leading finance teams',
  'Mentored 250+ founders',
  'Personally reviews every engagement',
]

const credentials = [
  { label: 'Finance leadership', text: 'ASX-listed and VC-backed businesses', icon: Briefcase },
  { label: 'Founder advisor', text: '250+ founders mentored, multiple advisory boards', icon: Users },
  { label: 'Engagement oversight', text: 'Reviews every engagement before it goes live', icon: ClipboardCheck },
]

export function FounderSection() {
  return (
    <section id="meet-jatin" className="section-space bg-white">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 xl:gap-20">
        <div>
          <SectionHeading eyebrow="Who would be on your team?" title="You'll be working with Jatin's team. Here's who he is." />

          <p className="body-copy-lead mt-6 max-w-[620px] text-base font-bold leading-8 text-[#28434b] sm:text-lg">
            Best suited to Singapore businesses that have outgrown basic bookkeeping but don&apos;t yet need a full in-house finance team.
          </p>
          <p className="body-copy mt-4 max-w-[620px] text-base leading-8 text-[#566a70]">
            Jatin Detwani founded Growwth Partners in 2013 after a decade leading finance for ASX-listed and VC-backed companies. He has mentored 250+ founders, sits on multiple advisory boards, and personally reviews every engagement before it goes live.
          </p>

          <ul className="mt-7 grid max-w-[620px] gap-3 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-2.5 rounded-xl border border-[#dce8e3] bg-[#f4f8f6] px-3.5 py-3 text-[13px] font-extrabold leading-5 text-[#28434b]">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#cde9dd] text-[#21876c]">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <ContactButton className="mt-9 inline-flex items-center justify-center gap-3 rounded-lg bg-[#c2410c] px-6 py-4 text-sm font-extrabold text-white shadow-[0_12px_26px_rgba(194,65,12,.18)] transition hover:bg-[#9a3412] min-[1920px]:text-base">
            Book a 20-min call with Jatin <ArrowIcon className="h-4 w-4" />
          </ContactButton>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] lg:mx-0 lg:justify-self-end">
          <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl border border-[#cfe0da]" aria-hidden="true" />
          <article className="relative overflow-hidden rounded-2xl border border-[#dce8e3] bg-white shadow-[0_24px_64px_rgba(15,60,57,0.13)]">
            {/* The photo is zoomed in a little so the frame stays on Jatin and not on the backdrop shapes. */}
            <div className="h-[280px] overflow-hidden border-b border-[#e4eeea] bg-white sm:h-[310px]">
              <img
                src="/image/jatin-detwani.webp"
                width="506"
                height="477"
                alt="Jatin Detwani, founder of Growwth Partners"
                loading="lazy"
                className="w-full origin-top scale-[1.42]"
              />
            </div>

            <div className="p-6 sm:p-7">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#176b67]">Meet Jatin</p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-[#10313c]">Jatin Detwani</h3>
              <p className="mt-1 text-sm font-bold text-[#5a6d72]">Founder, Growwth Partners</p>

              <ul className="mt-5 border-t border-[#e4eeea]">
                {credentials.map((credential) => {
                  const Icon = credential.icon

                  return (
                    <li key={credential.label} className="flex items-start gap-3.5 border-b border-[#e4eeea] py-4 last:border-b-0 last:pb-0">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e5f3eb] text-[#23876e]">
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-extrabold text-[#10313c]">{credential.label}</p>
                        <p className="body-copy mt-0.5 text-[13px] leading-6 text-[#5a6d72]">{credential.text}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
