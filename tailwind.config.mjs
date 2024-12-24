/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderWidth: {
				1: "1px",
				3: "3px",
				thick: "17px",
			},
			colors: {
				melon: {
					DEFAULT: "#ffbcb5", /* pink */
					darker: "#ff8e82",
				},
				tidal: "#f4fdaf", /* highlighter yellow */
				australianMint: "#f1fbad", /* mint */
				wasabi: "#778948", /* green */
				redDamask: "#d56f3e", /* red */
				cardinGreen: "#203423", /* dark green */
			}
		},
		fontFamily: {
			sans: ["Work Sans", "sans-serif"],
			display: ["Unbounded", "sans-serif"],
			handwriting: ["De Lionist", "script"],
		},
	},
	plugins: [],
}
