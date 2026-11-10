import { site } from '../config/site'
import { faqs } from '../content/faqs'

// Schema.org data that helps search engines understand who we are and what the page answers.

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Growwth Partners',
  description:
    'Accounting for Singapore startups and SMEs. Bookkeeping, IRAS and GST compliance, payroll, and investor-ready reporting.',
  url: `${site.url}/`,
  logo: `${site.url}/favicon.png`,
  image: `${site.url}/image/accounting-team.jpg`,
  telephone: site.phoneDisplay,
  email: site.email,
  areaServed: { '@type': 'Country', name: 'Singapore' },
  address: { '@type': 'PostalAddress', addressCountry: 'SG' },
  founder: { '@type': 'Person', name: 'Jatin Detwani' },
  sameAs: [
    'https://www.linkedin.com/company/growwth-partners/',
    'https://www.youtube.com/@Growwth-Partners',
  ],
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}
