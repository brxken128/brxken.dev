/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'accent': '#d642c7',
		},
		fontFamily: {
			sans: ["PT Sans", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
}
