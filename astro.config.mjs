import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://razzaqinspires.github.io',
  base: '/portofolio', // <--- WAJIB SAMA DENGAN NAMA REPO
  integrations: [react(), tailwind()],
});