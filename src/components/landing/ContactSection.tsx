import { ArrowIcon } from './Icons'
import { ContactDetails } from '../contact/ContactDetails'
import { LeadForm } from '../contact/LeadForm'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-space relative isolate overflow-hidden bg-gradient-to-r from-[#1eaedb] to-[#1d4ed8] text-white"
    >
      <div className="cta-grid pointer-events-none absolute inset-0 opacity-10" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 -top-40 h-[430px] w-[430px] rounded-full bg-white/10 blur-3xl" aria-hidden="true" />

      <div className="container-shell relative grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[2.9rem]">
            Feel fully in control of your finances.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
            Book a free accounting health check. We&apos;ll map out exactly what your business needs.
          </p>

          {/* On phones the form sits further down, so this button takes the visitor to it. */}
          <a
            href="#lead-form"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#c2410c] px-6 py-4 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(18,56,109,.2)] transition hover:bg-[#9a3412] lg:hidden"
          >
            Book a free accounting health check <ArrowIcon className="h-4 w-4" />
          </a>

          <div className="mt-9 max-w-md">
            <ContactDetails />
          </div>
        </div>

        <div id="lead-form" className="rounded-2xl bg-white p-6 text-[#102f3b] shadow-[0_30px_80px_rgba(8,30,80,.3)] sm:p-8 lg:p-10">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#176b67]">Free accounting health check</p>
          <h3 className="mt-3 text-[1.7rem] font-extrabold leading-tight tracking-[-0.04em] sm:text-[2rem]">Tell us what you need.</h3>
          <div className="mt-7">
            <LeadForm idPrefix="page" />
          </div>
        </div>
      </div>
    </section>
  )
}
