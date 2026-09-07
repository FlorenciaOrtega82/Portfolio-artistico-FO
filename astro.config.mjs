// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // "site" es obligatorio para que @astrojs/sitemap y las etiquetas
  // canónicas/OG generen URLs absolutas correctas (no relativas).
  site: 'https://portfolio-artistico-fo.vercel.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});