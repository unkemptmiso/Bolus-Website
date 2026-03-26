// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL ?? "https://bolus-site.invalid",
  integrations: [react(), sitemap()],
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/cloudflare'
    }
  }
});
