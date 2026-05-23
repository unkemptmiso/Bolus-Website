// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import { pageRegistry } from './src/config/site-manifest.ts';

const isDev = process.env.NODE_ENV !== 'production';

const noindexPaths = pageRegistry
  .filter((page) => page.noindex)
  .map((page) => page.path);

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL ?? "https://bolusanesthesia.com",
  integrations: [
    react(), 
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        const path = url.pathname !== '/' ? url.pathname.replace(/\/$/, '') : '/';
        return !noindexPaths.includes(path);
      }
    })
  ],
  // Skip the Cloudflare adapter in dev — it intercepts public/ static assets
  // and causes 404s for images, videos, and other files.
  adapter: isDev ? undefined : cloudflare(),
  image: {
    service: {
      entrypoint: isDev
        ? 'astro/assets/services/sharp'
        : 'astro/assets/services/cloudflare'
    }
  }
});
