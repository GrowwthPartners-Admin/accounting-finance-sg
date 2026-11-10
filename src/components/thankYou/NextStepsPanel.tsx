import { CalendarDays, Clock3, FileText, ShieldCheck } from 'lucide-react'

const nextSteps = [
  {
    icon: Clock3,
    title: 'Review in progress',
    body: 'Our team reviews your details and aligns your request with the right finance support.',
  },
  {
    icon: CalendarDays,
    title: 'Follow-up shortly',
    body: 'You can expect a timely follow-up with the next step that fits your business needs.',
  },
  {
    icon: FileText,
    title: 'A sharper first conversation',
    body: 'Your submission helps us make the first call practical, focused, and relevant.',
  },
]

export function NextStepsPanel() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute -inset-4 rounded-2xl bg-[linear-gradient(120deg,#2b9d83,#8fc5b0,#176b67)] opacity-15 blur-xl" />
      <div className="relative overflow-hidden rounded-2xl border border-[#dce8e3] bg-white p-6 shadow-[0_28px_90px_rgba(15,60,57,0.12)] sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#e3f5ec] text-[#23876e] shadow-[0_14px_34px_rgba(15,60,57,0.10)]">
            <ShieldCheck className="h-8 w-8" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#176b67]">What happens next</p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-[#10313c] sm:text-3xl">We will take it from here.</h2>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {nextSteps.map((step) => {
            const Icon = step.icon

            return (
              <div key={step.title} className="rounded-2xl border border-[#e2ede7] bg-[#f8fbf9] p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf5ef] text-[#23876e]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-base font-black text-[#10313c]">{step.title}</p>
                    <p className="body-copy mt-1 text-sm font-semibold leading-7 text-[#5a6d72]">{step.body}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
