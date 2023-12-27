/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#ff0000",
					light: "#ff6666",
					dark: "#cc0000",
					50: "#ff8080",
					100: "#ff6666",
					200: "#ff4d4d",
					300: "#ff3333",
					400: "#ff1a1a",
					500: "#e60000",
					600: "#b30000",
					700: "#990000",
					800: "#800000",
					900: "#660000",
				},
			},
			fontFamily: {
				sans: ["K2D", "sans-serif"],
				serif: ["K2D", "serif"],
			},
		},
	},
	plugins: [],
};
