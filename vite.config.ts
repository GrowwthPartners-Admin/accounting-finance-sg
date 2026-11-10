import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [tailwindcss(), react()],
  build: {
    // The server build only renders the HTML, so it does not need its own copy of public/.
    // Skipping the copy also stops a Windows "EBUSY" error when its temp folder is deleted.
    copyPublicDir: !isSsrBuild,
  },
  ssgOptions: {
    // The build adds a preload tag for every imported image, even logos far down the page.
    // Removing them lets the browser load the hero image and fonts first.
    onPageRendered: (_route, html) =>
      html.replace(/<link rel="preload" as="image" href="\/assets\/[^>]*>/g, ''),
  },
}))
