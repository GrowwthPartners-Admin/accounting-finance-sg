import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ThankYouHeader() {
  return (
    <header className="border-b border-[#e4ebea] bg-white">
      <div className="container-shell flex h-[76px] items-center justify-between gap-5">
        <Link to="/" aria-label="Growwth Partners, back to home" className="flex shrink-0 items-center">
          <img src="/image/company_logo.webp" width="53" height="47" alt="Growwth Partners" className="h-[54px] w-auto" />
        </Link>
        <Link to="/" className="inline-flex items-center gap-2 rounded-lg border border-[#dce8e3] bg-white px-4 py-2.5 text-sm font-bold text-[#10313c] transition hover:border-[#8fc5b0] hover:bg-[#f3f9f5]">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </header>
  )
}
