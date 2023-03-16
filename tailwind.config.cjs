/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
	theme: {
		extend: {
			colors: {
				background: '#202124',
				secondary: '#3C4043',
			},
		},
	},
	plugins: [],
}
