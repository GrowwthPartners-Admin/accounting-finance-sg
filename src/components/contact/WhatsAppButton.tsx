import { site } from '../../config/site'
import { WhatsAppIcon } from '../landing/Icons'

// Floating button that stays in the bottom corner on every screen size.
export function WhatsAppButton() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp at ${site.phoneDisplay}`}
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_14px_34px_rgba(9,39,51,.28)] transition hover:scale-105 hover:bg-[#1fb957] sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
