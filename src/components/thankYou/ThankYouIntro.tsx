import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../../config/site'

export function ThankYouIntro() {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#cde8db] bg-white px-4 py-2 text-sm font-extrabold text-[#23876e] shadow-[0_12px_32px_rgba(15,60,57,0.08)]">
        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
        Submission received
      </div>

      <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-[-0.04em] text-[#10313c] sm:text-5xl lg:text-6xl">
        Thank you. Your consultation request is in.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5a6d72] sm:text-xl">
        We have received your details. Our team will review them and prepare the most relevant next step for your business.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c2410c] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_16px_36px_rgba(194,65,12,0.22)] transition hover:-translate-y-0.5 hover:bg-[#9a3412]">
          Back to home
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#dce8e3] bg-white px-6 py-3.5 text-sm font-extrabold text-[#176b67] shadow-[0_12px_34px_rgba(15,60,57,0.07)] transition hover:bg-[#f3f9f5]">
          Book directly on Calendly
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
