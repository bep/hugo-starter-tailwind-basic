const theme = require('tailwindcss/defaultTheme');
const typography = require('@tailwindcss/typography');

//const colorBrand = 'var(--color-pretty)';

// Utils
const round = (num) => num.toFixed(7).replace(/(\.[0-9]+?)0+$/, '$1').replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const px = (px) => `${px}px`;

module.exports = {
	important: true, // See https://tailwindcss.com/docs/configuration#important
	purge: {
		enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: [
      './hugo_stats.json',
      './layouts/**/*.html',
		],
		extractors: [
      {
        extractor: (content) => {
					let els = JSON.parse(content).htmlElements;
					return els.tags.concat(els.classes, els.ids);
				},
        extensions: ['json']
      },
    ],
		mode: 'all',
		
	},
	plugins: [ typography ]
};
