module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'airbnb-base',
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		indent: ['error', 'tab'],
		'no-underscore-dangle': 'off',
		'no-unused-vars': 'warn',
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		'import/prefer-default-export': 'off',
		'import/no-cycle': 'off',
		'comma-dangle': ['warn', 'always-multiline'],
		// no "any" in PropTypes
		'no-empty-pattern': 'warn',
		// disable warning linebreak lf crlf
		'linebreak-style': 0,
		'no-tabs': 'off',
	},
};
