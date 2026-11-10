import { MessageSquareQuote } from 'lucide-react'
import { testimonialVideos } from './data'

export function VideoTestimonials() {
  return (
    <div className="mx-auto mt-6 max-w-6xl rounded-2xl border border-[#dce8e3] bg-white p-5 shadow-[0_22px_60px_rgba(15,60,57,0.08)] sm:p-7 lg:p-9 min-[1920px]:max-w-[1360px]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#176b67]">Video testimonials</p>
          <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#10313c] sm:text-3xl">
            Hear it from founders and finance leaders
          </h3>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#e5f3eb] px-4 py-2 text-sm font-extrabold text-[#23876e]">
          <MessageSquareQuote className="h-4 w-4" aria-hidden="true" />
          {testimonialVideos.length} client videos
        </div>
      </div>

      {/* Phones get one swipeable row so eight videos do not make the page endless. Larger screens get a grid. */}
      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0 xl:grid-cols-4">
        {testimonialVideos.map((video) => (
          <article key={video.id} className="w-[84%] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#dce8e3] bg-[#f9fbfa] shadow-[0_14px_36px_rgba(15,60,57,0.07)] md:w-auto">
            <div className="aspect-video w-full overflow-hidden bg-[#092733]">
              {/* loading="lazy" keeps the eight players from slowing down the first view of the page */}
              <iframe
                src={`https://fast.wistia.net/embed/iframe/${video.id}`}
                title={`${video.name} testimonial video`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="h-full w-full border-0"
              />
            </div>
            <div className="p-4">
              <p className="text-base font-extrabold text-[#10313c]">{video.name}</p>
              <p className="mt-1 text-[13px] leading-5 text-[#5a6d72]">{video.role}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-1 text-center text-xs font-semibold text-[#5a6d72] md:hidden">Swipe to see more videos →</p>
    </div>
  )
}
