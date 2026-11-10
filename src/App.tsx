import type { RouteRecord } from 'vite-react-ssg'

export const routes: RouteRecord[] = [
  {
    path: '/',
    lazy: () => import('./pages/Home'),
  },
  {
    path: '/thank-you',
    lazy: () => import('./pages/ThankYou'),
  },
]

