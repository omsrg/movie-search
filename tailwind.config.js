const { fontFamily, screens } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Inter', ...fontFamily.sans],
			},
			gridTemplateColumns: {
				custom1: 'repeat(auto-fit, minmax(5rem, 14rem))',
				custom2: 'repeat(auto-fill, minmax(200px, 1fr))',
				custom3: 'repeat(auto-fill, minmax(225, 1fr))',
			},
			colors: {
				dark: {
					200: '#ffffffb3',
					300: '#303030',
					400: '#1f1f1f',
					500: '#121212',
				},
			},
		},
		screens: {
			xs: '475px',
			...screens,
		},
	},
	plugins: [],
};
