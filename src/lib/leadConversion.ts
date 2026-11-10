import { site } from '../config/site'

const pendingConversionKey = 'accounting-sg-pending-lead-conversion'

let pendingConversion = false

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, parameters?: Record<string, string>) => void
  }
}

// Called right after the form is sent, just before we move to the thank-you page.
export function markLeadSubmitted() {
  pendingConversion = true

  try {
    window.sessionStorage.setItem(pendingConversionKey, '1')
  } catch {
    // The in-memory flag still works if browser storage is unavailable.
  }
}

// Fires the Google Ads conversion once per submitted form.
// Opening or refreshing the thank-you page directly does not count again.
export function trackSubmittedLeadOnThankYouPage() {
  let shouldTrack = pendingConversion
  pendingConversion = false

  try {
    shouldTrack = window.sessionStorage.getItem(pendingConversionKey) === '1' || shouldTrack
    window.sessionStorage.removeItem(pendingConversionKey)
  } catch {
    // The in-memory flag covers the normal in-app navigation path.
  }

  if (shouldTrack) {
    window.gtag?.('event', 'conversion', { send_to: site.adsConversionId })
  }
}
