import { useState, type FormEvent, type RefObject } from 'react'
import { useNavigate } from 'react-router-dom'
import { site } from '../../config/site'
import { sendContactRequest, type ContactApiPayload } from '../../lib/contactApi'
import { markLeadSubmitted } from '../../lib/leadConversion'

// The values are what the contact API expects, the labels are what visitors see.
const services = [
  { value: 'Accounting Services', label: 'Accounting services' },
  { value: 'Bookkeeping', label: 'Bookkeeping' },
  { value: 'Taxation & Compliance', label: 'Taxation & compliance' },
  { value: 'Payroll', label: 'Payroll' },
  { value: 'Part-Time/Fractional CFO', label: 'Part-time/fractional CFO' },
  { value: 'Financial Modelling', label: 'Financial modelling' },
  { value: 'Corporate Secretary', label: 'Corporate secretary' },
  { value: 'Company Incorporation', label: 'Company incorporation' },
  { value: 'Valuation', label: 'Valuation' },
  { value: 'Due Diligence', label: 'Due diligence' },
  { value: 'Pitch Your StartUp', label: 'Pitch your startup' },
  { value: 'Investor Growth Services', label: 'Investor growth services' },
  { value: 'Other', label: 'Other' },
]

const inputClass =
  'mt-2 w-full rounded-xl border border-[#d5e1df] bg-[#f9fbfa] px-4 py-3.5 text-sm font-medium text-[#102f3b] outline-none transition placeholder:text-[#95a7aa] focus:border-[#218fbc] focus:bg-white focus:ring-4 focus:ring-[#218fbc]/10'
const labelClass = 'block text-[13px] font-bold text-[#28434b]'

type LeadFormProps = {
  // The form shows up twice (pop-up and final section), so each copy needs its own ids.
  idPrefix: string
  nameInputRef?: RefObject<HTMLInputElement>
}

export function LeadForm({ idPrefix, nameInputRef }: LeadFormProps) {
  const navigate = useNavigate()
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isSending) return

    const form = event.currentTarget
    const fields = new FormData(form)
    const payload: ContactApiPayload = {
      name: String(fields.get('name') ?? '').trim(),
      companyName: String(fields.get('companyName') ?? '').trim(),
      email: String(fields.get('email') ?? '').trim(),
      phoneNumber: String(fields.get('phoneNumber') ?? '').trim(),
      serviceLookingFor: String(fields.get('serviceLookingFor') ?? '').trim(),
      message: site.campaignMessage,
    }

    if (!payload.name || !payload.companyName || !payload.email || !payload.phoneNumber || !payload.serviceLookingFor) {
      setError('Please complete all fields before sending.')
      return
    }

    setError('')
    setIsSending(true)

    try {
      await sendContactRequest(payload)
      form.reset()
      markLeadSubmitted()
      navigate('/thank-you')
    } catch {
      setIsSending(false)
      setError('We could not send your request. Please try again in a moment.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass} htmlFor={`${idPrefix}-name`}>
          Name
          <input ref={nameInputRef} id={`${idPrefix}-name`} name="name" type="text" autoComplete="name" required maxLength={120} placeholder="Your name" className={inputClass} />
        </label>
        <label className={labelClass} htmlFor={`${idPrefix}-company`}>
          Company name
          <input id={`${idPrefix}-company`} name="companyName" type="text" autoComplete="organization" required maxLength={160} placeholder="Company name" className={inputClass} />
        </label>
        <label className={labelClass} htmlFor={`${idPrefix}-email`}>
          Email
          <input id={`${idPrefix}-email`} name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" className={inputClass} />
        </label>
        <label className={labelClass} htmlFor={`${idPrefix}-phone`}>
          Phone
          <input id={`${idPrefix}-phone`} name="phoneNumber" type="tel" autoComplete="tel" inputMode="tel" required minLength={7} maxLength={30} placeholder="+65 9123 4567" className={inputClass} />
        </label>
      </div>

      <label className={labelClass} htmlFor={`${idPrefix}-service`}>
        Service
        <select id={`${idPrefix}-service`} name="serviceLookingFor" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select a service</option>
          {services.map((service) => (
            <option key={service.value} value={service.value}>{service.label}</option>
          ))}
        </select>
      </label>

      {error && (
        <p role="alert" className="rounded-lg border border-[#f5c1b0] bg-[#fff3ef] px-4 py-3 text-sm font-semibold text-[#9e3e25]">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSending}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#c2410c] px-6 py-4 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(194,65,12,.2)] transition hover:bg-[#9a3412] disabled:cursor-wait disabled:opacity-70"
      >
        {isSending ? 'Sending your request…' : 'Send my request'}
        {!isSending && <span aria-hidden="true">→</span>}
      </button>

      <p className="text-center text-xs leading-5 text-[#758a8e]">
        We use your details to respond to your request.{' '}
        <a href={site.privacyUrl} target="_blank" rel="noreferrer" className="font-semibold text-[#1a728c] underline underline-offset-2">
          Privacy policy
        </a>
      </p>
    </form>
  )
}
