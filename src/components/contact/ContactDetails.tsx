import { Mail, Phone } from 'lucide-react'
import { site } from '../../config/site'
import { WhatsAppIcon } from '../landing/Icons'

const contactLinks = [
  { label: 'Call us', value: site.phoneDisplay, href: site.phoneHref, icon: Phone, newTab: false },
  { label: 'WhatsApp', value: site.phoneDisplay, href: site.whatsappHref, icon: WhatsAppIcon, newTab: true },
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: Mail, newTab: false },
]

// Phone, WhatsApp and email as a short list. Written for dark backgrounds.
export function ContactDetails() {
  return (
    <ul className="space-y-3">
      {contactLinks.map((link) => {
        const Icon = link.icon

        return (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.newTab ? '_blank' : undefined}
              rel={link.newTab ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-3.5 rounded-xl border border-white/15 bg-white/[.06] px-4 py-3 transition hover:border-white/35 hover:bg-white/[.12]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/70">{link.label}</span>
                <span className="block truncate text-[15px] font-extrabold text-white">{link.value}</span>
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
