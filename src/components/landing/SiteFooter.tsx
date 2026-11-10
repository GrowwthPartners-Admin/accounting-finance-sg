import { ArrowUpRight } from 'lucide-react'
import { site } from '../../config/site'

const footerLinks = [
  { label: 'About Growwth Partners', href: site.mainSiteUrl },
  { label: 'Privacy Policy', href: site.privacyUrl },
  { label: 'Terms of Service', href: site.termsUrl },
]

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden border-t border-[#d9e8e2] bg-[linear-gradient(180deg,#f3f8f6_0%,#eaf4ef_55%,#f8fbf9_100%)] text-[#10313c]"
    >
      <div aria-hidden="true" className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#2b9d83]/12 blur-3xl" />
      <div aria-hidden="true" className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#2b9d83]/8 blur-3xl" />

      <div className="container-shell relative py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="rounded-2xl border border-[#dce8e3] bg-[linear-gradient(135deg,#ffffff_0%,#f3f9f5_100%)] p-6 shadow-[0_20px_70px_rgba(15,60,57,0.08)] sm:p-8">
            <img src="/image/company_logo.webp" width="53" height="47" alt="" className="h-12 w-auto" loading="lazy" />
            <h2 className="mt-4 text-2xl font-black leading-tight tracking-[-0.03em] text-[#10313c] sm:text-3xl lg:text-[2rem]">
              Growwth Partners
            </h2>
            <p className="body-copy-lead mt-3 max-w-3xl text-base font-semibold leading-8 text-[#5a6d72]">
              Headquartered in Singapore. We look after accounting, tax, payroll and reporting for 200+ startups and businesses, in Singapore and abroad.
            </p>
            <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-extrabold text-[#176b67] sm:text-base">
              <a href={site.phoneHref} className="transition hover:text-[#0d514d]">{site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`} className="transition hover:text-[#0d514d]">{site.email}</a>
            </p>
          </div>

          <div className="rounded-2xl border border-[#dce8e3] bg-white p-5 shadow-[0_20px_70px_rgba(15,60,57,0.08)] sm:p-6">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#23876e]">Quick Links</p>

            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-[#dce8e3] bg-[#f8fbf9] px-4 py-3.5 text-sm font-semibold text-[#10313c] transition hover:border-[#8fc5b0] hover:bg-[#edf7f1] sm:text-base"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#278f77] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#d5e5dc] pt-5">
          <p className="text-center text-sm font-semibold text-[#5a6d72]">
            Copyright © 2026 Growwth Partners. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
