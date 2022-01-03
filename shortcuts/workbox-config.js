module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.html'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};