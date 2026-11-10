import { CaseStudyCards } from '../socialProof/CaseStudyCards'
import { FeaturedTestimonial } from '../socialProof/FeaturedTestimonial'
import { VideoTestimonials } from '../socialProof/VideoTestimonials'
import { ArrowIcon } from './Icons'
import { SectionHeading } from './SectionHeading'
import { ContactButton } from '../contact/ContactModalContext'

export function ClientStoriesSection() {
  return (
    <section id="client-stories" className="section-space bg-[#f4f8f6]">
      <div className="container-shell">
        <SectionHeading eyebrow="Client stories" title="Founders who got their time back." centered />

        <FeaturedTestimonial />
        <CaseStudyCards />
        <VideoTestimonials />

        <div className="mt-10 flex justify-center">
          <ContactButton className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#c2410c] px-6 py-4 text-sm font-extrabold text-white shadow-[0_12px_26px_rgba(194,65,12,.18)] transition hover:bg-[#9a3412] min-[1920px]:text-base">
            Book a free accounting health check <ArrowIcon className="h-4 w-4" />
          </ContactButton>
        </div>
      </div>
    </section>
  )
}
