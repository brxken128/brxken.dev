/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// 'accent': '#D53C9F',
				'accent': '#E9A6A6',
				'purplevoid': '#1F1D36',
				'greypurple': '#3F3351',
				'mutedpurple': '#864879',
				// 'pinksand': '#E9A6A6'
			},
			fontFamily: {
				sans: ["PT Sans", "sans-serif"],
			},
		}
	},
	plugins: [],
}
