module.exports = {
	plugins: {
		'postcss-nested': {},
		autoprefixer: {},
		cssnano: {},
		'@fullhuman/postcss-purgecss': {
			content: ['src/**/*.tsx'],
			css: ['src/**/*.css'],
			safelist: {
				standard: [/Error$/],
				deep: [/containerTabs$/],
				greedy: [/active$/]
			}
		}
	}
}
