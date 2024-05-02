/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
                background: '#ecf0f1',
                principal: '#056CF2',
                secondary: '#0540F2',
                text: '#ecf0f1',
                'text-secondary': '#000',
                'button-color': '#A6033F',
                'button-hover': '#BF2604'
			}
		},
	},
	plugins: [],
}
