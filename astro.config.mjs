// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [tailwind(), mdx(), sitemap(), svelte()],
  experimental: {
    svg: {
      mode: "sprite",
    },
  },
});