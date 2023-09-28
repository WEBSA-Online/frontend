/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-image": "url('/src/images/websa-online.jpg')",
			},
			colors: {
				"websa-green": "#1b4b15",
				"websa-red": "#a70707",
				"light-blue": "#3d57ac",
				"light-green": "#03a155",
				"middle-green": "#1e807d",
			},
			fontFamily: {
				"websa-bold": ["Poppins-Bold"],
				"websa-regular": ["Poppins-Regular"],
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
