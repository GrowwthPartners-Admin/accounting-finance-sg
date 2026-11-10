import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from './data'

export function CaseStudyCards() {
  return (
    <div className="mx-auto mt-6 grid max-w-6xl gap-5 md:grid-cols-2 min-[1920px]:max-w-[1360px]">
      {caseStudies.map((study) => (
        <a
          key={study.title}
          href={study.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-2xl border border-[#dce8e3] bg-white p-6 shadow-[0_14px_36px_rgba(15,60,57,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#9ecbb9] hover:shadow-[0_24px_52px_rgba(15,60,57,0.12)] sm:p-7"
        >
          <p className="w-fit rounded-full bg-[#e5f3eb] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#23876e]">
            Case study · {study.industry}
          </p>
          <h3 className="mt-4 text-xl font-extrabold leading-snug tracking-[-0.025em] text-[#10313c]">{study.title}</h3>
          <p className="body-copy mt-2.5 text-[15px] leading-7 text-[#5a6d72]">{study.summary}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-extrabold text-[#176b67]">
            Read the case study
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </a>
      ))}
    </div>
  )
}
