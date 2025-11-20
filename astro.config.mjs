import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // URL domain GitHub Pages Anda
  site: 'https://razzaqinspires.github.io',
  
  // Nama Repository GitHub Anda (WAJIB SAMA PERSIS)
  // Jika nama repo Anda 'portofolio', biarkan seperti ini.
  base: '/portofolio', 
  
  // Integrasi yang kita pakai (React untuk Three.js, Tailwind untuk Styling)
  integrations: [react(), tailwind()],
});