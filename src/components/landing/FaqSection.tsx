import { useState } from 'react'
import { faqs } from '../../content/faqs'
import { ArrowIcon } from './Icons'
import { SectionHeading } from './SectionHeading'
import { ContactButton } from '../contact/ContactModalContext'

export function FaqSection() {
  // All questions start closed. Only one is open at a time.
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faqs" className="section-space bg-[#f4f8f6]">
      <div className="container-shell">
        <SectionHeading eyebrow="Common questions" title="Answers before we get started." centered />

        <div className="mx-auto mt-11 max-w-[860px] space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const questionId = `faq-question-${index}`
            const answerId = `faq-answer-${index}`

            return (
              <article key={faq.question} className={`rounded-2xl border bg-white transition-colors duration-300 ${isOpen ? 'border-[#8bc1ae]' : 'border-[#dce7e3]'}`}>
                <h3>
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex min-h-[72px] w-full items-center justify-between gap-5 px-5 py-4 text-left text-base font-extrabold text-[#10313c] sm:px-7"
                  >
                    <span>{faq.question}</span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e5f3eb] text-xl font-normal text-[#23876e] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">+</span>
                  </button>
                </h3>
                <div id={answerId} role="region" aria-labelledby={questionId} aria-hidden={!isOpen} data-open={isOpen} className="faq-answer">
                  <div className="min-h-0 overflow-hidden">
                    <p className="body-copy mx-5 mb-5 border-t border-[#e6eeeb] pt-4 text-[15px] leading-7 text-[#5a6d72] sm:mx-7">{faq.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-9 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[15px] font-semibold text-[#5a6d72]">
          Have a different question?
          <ContactButton className="inline-flex items-center gap-1.5 font-extrabold text-[#176b67] transition hover:text-[#0d514d]">
            Ask our team <ArrowIcon className="h-4 w-4" />
          </ContactButton>
        </p>
      </div>
    </section>
  )
}
