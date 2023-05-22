let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './tailwind.config.js';
const tailwind = require('tailwindcss')(tailwindConfig);
const autoprefixer = require('autoprefixer');

console.log('Using postcss.config.js from ' + tailwindConfig);

module.exports = {
	// eslint-disable-next-line no-process-env
	plugins: [tailwind, ...(process.env.HUGO_ENVIRONMENT === 'production' ? [autoprefixer] : [])],
};
