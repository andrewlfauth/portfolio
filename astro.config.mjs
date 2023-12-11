import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'

export default defineConfig({
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
    preact(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      langs: [],
      wrap: true,
    },
  },
})
