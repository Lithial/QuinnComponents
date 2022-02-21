module.exports = {
	env: {
		"browser": true,
		"es2021": true,
		"node": true,
		"jest": true,
		"jest/globals": true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"plugin:storybook/recommended",
		"plugin:jest/recommended",
	],
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "jest"],
	rules: {
		"react/jsx-uses-vars": "error",
		"react/jsx-uses-react": "warn",
		"react/react-in-jsx-scope": "off",
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/prefer-to-have-length": "warn",
	},
};
