/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Mengatur Font Family agar sesuai dengan desain 'God Mode'
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
			},
			// Menambahkan Animasi Custom
			animation: {
				'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
				'shimmer': 'shimmer 2s infinite',
			},
			// Definisi Keyframes (Gerakan Animasi)
			keyframes: {
				fadeInDown: {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				shimmer: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				}
			}
		},
	},
	plugins: [],
}