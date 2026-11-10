import { Head } from 'vite-react-ssg'
import { useEffect } from 'react'
import Footer from '../components/landing/SiteFooter'
import { NextStepsPanel } from '../components/thankYou/NextStepsPanel'
import { ThankYouHeader } from '../components/thankYou/ThankYouHeader'
import { ThankYouIntro } from '../components/thankYou/ThankYouIntro'
import { trackSubmittedLeadOnThankYouPage } from '../lib/leadConversion'

export function Component() {
  useEffect(() => {
    // The visitor usually arrives from far down the landing page, so start at the top here.
    window.scrollTo({ top: 0, behavior: 'instant' })
    trackSubmittedLeadOnThankYouPage()
  }, [])

  return (
    <>
      <Head>
        <title>Thank You | Growwth Partners</title>
        <meta name="description" content="Thank you for contacting Growwth Partners. Our team will review your request and follow up shortly." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="flex min-h-screen flex-col bg-white text-[#10313c]">
        <ThankYouHeader />
        <main className="relative flex-1 overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f3f8f6_48%,#ffffff_100%)]">
          <div aria-hidden="true" className="absolute left-0 top-16 h-72 w-72 rounded-full bg-[#2b9d83]/10 blur-3xl" />
          <div aria-hidden="true" className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[#2b9d83]/10 blur-3xl" />
          <div className="container-shell relative py-14 sm:py-16 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <ThankYouIntro />
              <NextStepsPanel />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
