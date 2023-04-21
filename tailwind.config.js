/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"websa-green": "#1b4b15",
				"websa-red": "#a70707",
			},
			fontFamily: {
				"websa-bold": ["Poppins-Bold"],
				"websa-nromal": ["Poppins-Regular"],
			},
			animation: {
				"ping-slow": "ping-slow 1s cubic-bezier(0, 0, 0.2, 1) infinite;",
			},
			keyframes: {
				"ping-slow": {
					"50%": {
						opacity: 1,
						transform: "scale(1.02)",
					},
					"100%": {
						opacity: 1,
						transform: "scale(1.1)",
					},
				},
			},
		},
	},
	plugins: [],
};
