import { useEffect, useRef } from 'react'
import { Phone } from 'lucide-react'
import { site } from '../../config/site'
import { WhatsAppIcon } from '../landing/Icons'
import { ContactDetails } from './ContactDetails'
import { LeadForm } from './LeadForm'

type ContactModalProps = {
  open: boolean
  onRequestClose: () => void
}

export function ContactModal({ open, onRequestClose }: ContactModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (!open) {
      if (dialog.open) dialog.close()
      return
    }

    // Stop the page behind the pop-up from scrolling while it is open.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    if (!dialog.open) dialog.showModal()
    const focusFrame = requestAnimationFrame(() => nameRef.current?.focus())

    return () => {
      cancelAnimationFrame(focusFrame)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="contact-modal-title"
      aria-modal="true"
      className="contact-dialog m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[960px] overflow-y-auto rounded-2xl border-0 bg-white p-0 text-[#102f3b] shadow-[0_35px_100px_rgba(0,25,36,.3)]"
      onCancel={(event) => {
        event.preventDefault()
        onRequestClose()
      }}
      onClick={(event) => {
        // A click on the dialog itself means the backdrop was clicked.
        if (event.target === event.currentTarget) onRequestClose()
      }}
    >
      <div className="grid md:grid-cols-[.82fr_1.18fr]">
        <aside className="relative hidden overflow-hidden bg-[#0d3441] p-9 text-white md:flex md:flex-col md:justify-between lg:p-11">
          <div className="pointer-events-none absolute -right-28 -top-20 h-72 w-72 rounded-full border-[52px] border-white/[.07]" aria-hidden="true" />
          <div className="relative">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#a7e8d8]">Growwth Partners · Singapore</p>
            <h3 className="mt-8 text-[2rem] font-extrabold leading-[1.15] tracking-[-0.04em]">Talk to our Singapore accounting team.</h3>
            <p className="body-copy mt-4 text-pretty text-sm leading-7 text-[#c3d9da]">Call or WhatsApp us, or book a free health check.</p>
          </div>
          <div className="relative mt-10">
            <ContactDetails />
          </div>
        </aside>

        <div className="relative p-6 sm:p-8 md:p-9 lg:p-11">
          <button
            type="button"
            aria-label="Close contact form"
            onClick={onRequestClose}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#eef3f1] text-[#426169] transition hover:bg-[#dfeae6] hover:text-[#102f3b]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="h-5 w-5">
              <path d="M5 5l14 14M19 5 5 19" />
            </svg>
          </button>

          <p className="pr-12 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#176b67]">Start a conversation</p>
          <h2 id="contact-modal-title" className="mt-3 pr-10 text-[1.7rem] font-extrabold leading-tight tracking-[-0.04em] sm:text-[2rem]">
            Book a free accounting health check
          </h2>
          <p className="body-copy mt-3 max-w-md text-sm leading-6 text-[#64787c]">
            Share a few details and we will get in touch to set up a time.
          </p>

          {/* The side panel is hidden on phones, so the quick contact options move here. */}
          <div className="mt-5 flex flex-wrap gap-2.5 md:hidden">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-[#cfe0da] bg-[#f4f8f6] px-4 py-2 text-[13px] font-extrabold text-[#10313c]">
              <Phone className="h-4 w-4 text-[#176b67]" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#cfe0da] bg-[#f4f8f6] px-4 py-2 text-[13px] font-extrabold text-[#10313c]">
              <WhatsAppIcon className="h-4 w-4 text-[#1fa855]" />
              WhatsApp us
            </a>
          </div>

          {/* Mounting the form only while open gives every visit a clean, empty form. */}
          <div className="mt-7">
            {open && <LeadForm idPrefix="popup" nameInputRef={nameRef} />}
          </div>
        </div>
      </div>
    </dialog>
  )
}
