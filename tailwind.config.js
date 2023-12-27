/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["K2D", "sans-serif"],
				serif: ["K2D", "serif"],
			},
		},
	},
	plugins: [],
};
