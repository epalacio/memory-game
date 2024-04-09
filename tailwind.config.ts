import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				yellow: '#FDA214',
				jungleMist: '#BCCED9',
				pickledBluewood: '#304859',
				bigStone: '#152938',
				concrete: '#F2F2F2',
				gothic: '#7191A5',
				hippieBlue: '#6395B8',
				alabaster: '#FCFCFC',
			},
			fontFamily: {
				Atkinson: ['Atkinson', 'sans-serif'],
			},
			fontSize: {
				body: ['18px', '16px'],
				title: ['48px', '42px'],
				subTitle: ['32px', '26px'],
				marker: ['20px', '18px'],
			},
		},
	},
	plugins: [],
};
export default config;
