/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'pure-green': '#00ff00',
			},
		},
	},
	plugins: [
		require("daisyui"),
	],
	daisyui: {
		themes: ["lofi"],
	},
}
