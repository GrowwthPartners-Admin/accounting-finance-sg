import { Star } from 'lucide-react'
import cmoAsia from '../../assets/awards/cmo-asia.jpg'
import goldenGlobeTiger from '../../assets/awards/golden-globe-tiger.webp'
import innovationAward from '../../assets/awards/innovation-excellence-award.png'
import passionVista from '../../assets/awards/passion-vista.jpg'
import xero from '../../assets/awards/xero.png'

const awards = [
  { label: "Asia's Greatest CFO Award", image: goldenGlobeTiger, alt: 'Golden Globe Tigers Awards', width: 774, height: 551 },
  { label: 'CMO Asia recognition', image: cmoAsia, alt: 'CMO Asia', width: 520, height: 305 },
  { label: 'Innovation Excellence Award', image: innovationAward, alt: 'Innovation Excellence Award', width: 384, height: 131 },
  { label: 'Passion Vista recognition', image: passionVista, alt: 'Passion Vista', width: 447, height: 447 },
  { label: 'Xero Silver Partner', image: xero, alt: 'Xero Silver Partner badge', width: 554, height: 554 },
]

const cardClass =
  'flex flex-col items-center justify-between gap-3 rounded-2xl border border-[#dce8e3] bg-white p-4 text-center shadow-[0_10px_28px_rgba(15,60,57,0.06)]'

export function AwardsSection() {
  return (
    <section id="awards" className="strip-space bg-white">
      <div className="container-shell">
        <div className="mx-auto max-w-[740px] text-center">
          <p className="flex items-center justify-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#176b67]">
            <span className="h-px w-7 bg-[#176b67]" />
            Awards & partnerships
          </p>
          <h2 className="mt-4 text-balance text-[1.65rem] font-extrabold leading-tight tracking-[-0.035em] text-[#102f3b] sm:text-[2.1rem]">
            Recognised for the work behind the numbers.
          </h2>
        </div>

        <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {awards.map((award) => (
            <li key={award.label} className={cardClass}>
              <img
                src={award.image}
                alt={award.alt}
                width={award.width}
                height={award.height}
                className="h-20 w-full object-contain sm:h-24"
                loading="eager"
                decoding="async"
              />
              <p className="text-xs font-extrabold leading-5 text-[#314d55]">{award.label}</p>
            </li>
          ))}

          <li className={`${cardClass} bg-[linear-gradient(135deg,#0d3441_0%,#15596a_60%,#278f77_100%)]`}>
            <div className="flex h-20 flex-col items-center justify-center sm:h-24">
              <p className="text-4xl font-extrabold leading-none tracking-[-0.03em] text-white">5.0</p>
              <div className="mt-2.5 flex gap-0.5 text-[#ffd166]" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
              </div>
            </div>
            <p className="text-xs font-extrabold leading-5 text-white">5.0 rated</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
