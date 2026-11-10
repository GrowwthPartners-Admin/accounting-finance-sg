# Accounting services Singapore ads page

Landing page for Growwth Partners' accounting services in Singapore. It is built for ad traffic, so the copy is short, the proof sits high on the page and every section has a way to book a call.

Planned URL: https://accounting-services-singapore.growwthpartners.com

Built with React, TypeScript, Vite, Tailwind CSS and `vite-react-ssg`, the same stack as the US accounting page.

## Start

You need Node.js 20.19 or newer.

```sh
npm install
npm run dev
```

The contact form works out of the box against the production API. If you want to point it somewhere else, copy `.env.example` to `.env` and set `VITE_CONTACTAPI_PRODURL`. For a local API use something like `http://localhost:8081` in `.env.local`.

## Build

```sh
npm run build
npm run preview
```

The build writes prerendered HTML into `dist/`. That folder is what gets deployed.

## Deploy on Vercel

Import the repo as a Vite project. `vercel.json` already sets the build command, the `dist` output folder and clean URLs, so `/thank-you` works without any rewrite rules.

Environment variables (both optional):

- `VITE_CONTACTAPI_PRODURL` is the contact API base URL.
- `VITE_SITE_URL` is the public address of the page, used for the canonical and social sharing tags. If it is empty, the planned URL above is used.

After the domain is live, allow it in the contact API's CORS settings, otherwise the form cannot send. If the final domain is different from the planned one, also update `public/robots.txt` and `public/sitemap.xml`.

## Where things are

- `src/config/site.ts` has everything specific to Singapore: phone and WhatsApp number, email, site URL, the campaign message sent with each lead and the Google Ads conversion ID. Start here when something like the phone number changes.
- `src/pages/Home.tsx` puts the page together and holds the SEO tags.
- `src/components/landing/` has one file per section, in the same order as the page. The copy for a section sits at the top of its file.
- `src/components/contact/` has the pop-up, the lead form (shared by the pop-up and the last section) and the floating WhatsApp button.
- `src/components/socialProof/` has the featured testimonial, the case study cards and the client videos. Their content is in `data.ts`.
- `src/content/faqs.ts` has the FAQs. The page and the FAQ schema for Google both read from it.
- `src/lib/` has the contact API call, the conversion tracking and the structured data.

## Leads and tracking

Every "Book a free accounting health check" button opens the same pop-up. The form in the pop-up and the one at the bottom of the page both POST to `/api/contact-growwth` with a `{ data: ... }` body. The `message` field is always `Accounting-SG-Marketing-page`, which is how these leads are told apart from the other pages.

After a successful submit the visitor lands on `/thank-you`. That page fires the Google Ads conversion `AW-18185462224/psZmCIXJxKUdENDDwN9D` once per submitted form. Opening or refreshing `/thank-you` directly does not fire it again. The Google tag and the factors.ai script are loaded in `index.html`.

It is worth checking the conversion with Google Tag Assistant once the page is deployed.
