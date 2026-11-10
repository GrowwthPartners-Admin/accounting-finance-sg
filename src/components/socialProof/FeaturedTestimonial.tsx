import { useState } from 'react'
import { ChevronDown, ChevronUp, MessageSquareQuote, Star } from 'lucide-react'
import { featuredTestimonial as story } from './data'

export function FeaturedTestimonial() {
  const [showFullStory, setShowFullStory] = useState(false)

  return (
    <figure className="mx-auto mt-11 max-w-6xl overflow-hidden rounded-2xl border border-[#dce8e3] bg-white shadow-[0_22px_60px_rgba(15,60,57,0.09)] min-[1920px]:max-w-[1360px]">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[15rem_1fr] lg:gap-10 lg:p-10">
        <figcaption className="flex items-center gap-4 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-[#e5f3eb] bg-[#e5f3eb] shadow-[0_16px_42px_rgba(15,60,57,0.12)] lg:h-36 lg:w-36">
            <img
              src={story.image}
              alt={`${story.name}, ${story.role} at ${story.company}`}
              width="144"
              height="144"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="lg:mt-5">
            <p className="text-lg font-extrabold text-[#10313c]">{story.name}</p>
            <p className="mt-0.5 text-sm font-semibold text-[#5a6d72]">{story.role}</p>
            <p className="text-sm font-extrabold text-[#23876e]">{story.company}</p>
          </div>
        </figcaption>

        <div className="min-w-0">
          <div className="flex items-center gap-4">
            <MessageSquareQuote className="h-8 w-8 text-[#176b67]" aria-hidden="true" />
            <div className="flex gap-1 text-[#176b67]" role="img" aria-label="5 out of 5 stars">
              {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-5 w-5 fill-current" aria-hidden="true" />)}
            </div>
          </div>

          <blockquote className="mt-4">
            <p className="text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#10313c] sm:text-3xl">
              “{story.headline}”
            </p>
            <p className="body-copy-lead mt-5 text-base leading-8 text-[#566a70]">{story.shortQuote}</p>

            {showFullStory && (
              <div className="body-copy-lead mt-5 space-y-4 text-base leading-8 text-[#566a70]">
                {story.fullQuote.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            )}
          </blockquote>

          <button
            type="button"
            aria-expanded={showFullStory}
            onClick={() => setShowFullStory((isShown) => !isShown)}
            className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#176b67] transition hover:text-[#0d514d]"
          >
            {showFullStory ? 'Show less' : 'Read full story'}
            {showFullStory
              ? <ChevronUp className="h-4 w-4" aria-hidden="true" />
              : <ChevronDown className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <dl className="grid grid-cols-3 divide-x divide-[#dce8e3] border-t border-[#dce8e3] bg-[#f4f8f6]">
        {story.results.map((result) => (
          <div key={result.label} className="flex flex-col px-3 py-5 text-center sm:py-6">
            <dt className="order-2 mt-1 text-xs font-bold leading-5 text-[#5a6d72] sm:text-sm">{result.label}</dt>
            <dd className="order-1 text-2xl font-extrabold tracking-[-0.03em] text-[#176b67] sm:text-4xl">{result.value}</dd>
          </div>
        ))}
      </dl>
    </figure>
  )
}
