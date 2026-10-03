// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.madridcheer.com',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !/\/(styleguide|privacidad-modal)\/?$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
