// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import { pageRegistry } from './src/config/site-manifest.ts';

const noindexPaths = pageRegistry
  .filter((page) => page.noindex)
  .map((page) => page.path);

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL ?? "https://bolusanesthesia.com",
  trailingSlash: "always",
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
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/cloudflare'
    }
  }
});
