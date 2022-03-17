const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Inter', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};
