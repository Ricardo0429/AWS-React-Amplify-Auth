module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: [
            'airbnb',
            'plugin:jest/recommended',
		'jest-enzyme',
		"prettier",
		"prettier/react",
		"prettier/standard"
      ],
	plugins: [
		'babel',
		'import',
		'jsx-a11y',
		'react',
		'prettier',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		"no-param-reassign": "off",
            'comma-dangle': ['error', 'never'],
		'no-plusplus': 'off',
		'indent': ['error', 6],
		"react/jsx-filename-extension": "off",
		"react/forbid-prop-types": "off",
		"react/destructuring-assignment": "off",
            'prettier/prettier': 'error'
	}
};