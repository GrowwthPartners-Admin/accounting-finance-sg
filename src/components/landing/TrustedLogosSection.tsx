import { motion, useReducedMotion } from 'framer-motion'
import appboxo from '../../assets/logos/appboxo.webp?url&no-inline'
import dataLeap from '../../assets/logos/Data-leap-client.webp?url&no-inline'
import ebility from '../../assets/logos/ebility.webp?url&no-inline'
import greenA from '../../assets/logos/GreenA.webp?url&no-inline'
import hybrid from '../../assets/logos/hybrid.webp?url&no-inline'
import juvoxa from '../../assets/logos/juvoxa.webp?url&no-inline'
import kayaFounders from '../../assets/logos/kaya-founders.webp?url&no-inline'
import manaClient from '../../assets/logos/Mana-client.webp?url&no-inline'
import mangtas from '../../assets/logos/mangtas.webp?url&no-inline'
import okeyReply from '../../assets/logos/okeyReply.webp?url&no-inline'
import ronpos from '../../assets/logos/ronpos.webp?url&no-inline'
import tigerhall from '../../assets/logos/tigerhall.webp?url&no-inline'
import treeDots from '../../assets/logos/TreeDots-client.webp?url&no-inline'

const logos = [
  { name: 'Data Leap', image: dataLeap },
  { name: 'Appboxo', image: appboxo },
  { name: 'eBility', image: ebility },
  { name: 'GreenA', image: greenA },
  { name: 'Hybrid', image: hybrid },
  { name: 'Mana', image: manaClient },
  { name: 'Juvoxa', image: juvoxa },
  { name: 'Kaya Founders', image: kayaFounders },
  { name: 'Mangtas', image: mangtas },
  { name: 'TreeDots', image: treeDots },
  { name: 'OkeyReply', image: okeyReply },
  { name: 'Ronpos', image: ronpos },
  { name: 'Tigerhall', image: tigerhall },
]

type Logo = (typeof logos)[number]

function LogoCard({ logo, duplicate = false }: { logo: Logo; duplicate?: boolean }) {
  return (
    <div
      role="listitem"
      aria-hidden={duplicate}
      className="mx-2.5 flex h-[88px] w-40 shrink-0 snap-start items-center justify-center rounded-2xl border border-[#dce8e3] bg-white p-2 shadow-[0_10px_30px_rgba(15,60,57,0.06)]"
    >
      <img
        src={logo.image}
        alt={duplicate ? '' : `${logo.name} logo`}
        className="h-[72px] w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export function TrustedLogosSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="trusted-by" className="strip-space overflow-hidden bg-[#f4f8f6]">
      <div className="container-shell">
        <div className="mx-auto max-w-[740px] text-center">
          <p className="flex items-center justify-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#176b67]">
            <span className="h-px w-7 bg-[#176b67]" />
            Our clients
          </p>
          <h2 className="mt-4 text-balance text-[1.65rem] font-extrabold leading-tight tracking-[-0.035em] text-[#102f3b] sm:text-[2.1rem]">
            Trusted by 200+ startups and businesses worldwide.
          </h2>
        </div>
      </div>

      {/* Desktop: logos scroll on their own. The list is doubled so the loop has no visible seam. */}
      <div className="container-shell container-shell--wide mt-9 hidden md:block">
        {reduceMotion ? (
          <div role="list" aria-label="Companies that trust Growwth Partners" className="flex flex-wrap justify-center gap-y-4">
            {logos.map((logo) => <LogoCard key={logo.name} logo={logo} />)}
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f4f8f6] to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f4f8f6] to-transparent" aria-hidden="true" />
            <motion.div
              role="list"
              aria-label="Companies that trust Growwth Partners"
              className="flex w-max items-center py-2"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            >
              {logos.map((logo) => <LogoCard key={logo.name} logo={logo} />)}
              {logos.map((logo) => <LogoCard key={`${logo.name}-copy`} logo={logo} duplicate />)}
            </motion.div>
          </div>
        )}
      </div>

      {/* Phones: a simple row the visitor can swipe. */}
      <div role="list" aria-label="Companies that trust Growwth Partners" className="mt-8 flex snap-x snap-mandatory overflow-x-auto px-3 pb-2 md:hidden">
        {logos.map((logo) => <LogoCard key={logo.name} logo={logo} />)}
      </div>
      <p className="mt-2 text-center text-xs font-semibold text-[#5a6d72] md:hidden">Swipe to see more logos →</p>
    </section>
  )
}
