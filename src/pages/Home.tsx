import { Head } from 'vite-react-ssg'
import { site } from '../config/site'
import { businessSchema, faqSchema } from '../lib/structuredData'
import { ContactModalProvider } from '../components/contact/ContactModalContext'
import { WhatsAppButton } from '../components/contact/WhatsAppButton'
import { SiteHeader } from '../components/landing/SiteHeader'
import { HeroSection } from '../components/landing/HeroSection'
import { AwardsSection } from '../components/landing/AwardsSection'
import { TrustedLogosSection } from '../components/landing/TrustedLogosSection'
import { ProblemSection } from '../components/landing/ProblemSection'
import { ServicesSection } from '../components/landing/ServicesSection'
import { AudienceSection } from '../components/landing/AudienceSection'
import { FounderSection } from '../components/landing/FounderSection'
import { ClientStoriesSection } from '../components/landing/ClientStoriesSection'
import { ProcessSection } from '../components/landing/ProcessSection'
import { FaqSection } from '../components/landing/FaqSection'
import { ContactSection } from '../components/landing/ContactSection'
import Footer from '../components/landing/SiteFooter'

const pageTitle = 'Accounting Services in Singapore | Growwth Partners'
const pageDescription =
  'Accounting for Singapore startups and SMEs. Bookkeeping, IRAS and GST compliance, payroll, and investor-ready reporting. Book a free call.'
const pageUrl = `${site.url}/`
const shareImage = `${site.url}${site.heroImage.src}`

export function Component() {
  return (
    <ContactModalProvider>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Growwth Partners" />
        <meta property="og:locale" content="en_SG" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={shareImage} />
        <meta property="og:image:width" content={String(site.heroImage.width)} />
        <meta property="og:image:height" content={String(site.heroImage.height)} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={shareImage} />

        <link rel="preload" as="image" href={site.heroImage.src} />

        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Head>

      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#10283b]">
        Skip to main content
      </a>

      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <AwardsSection />
        <TrustedLogosSection />
        <ProblemSection />
        <ServicesSection />
        <AudienceSection />
        <FounderSection />
        <ClientStoriesSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </ContactModalProvider>
  )
}
