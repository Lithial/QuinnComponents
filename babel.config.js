const plugins = [];
//react fast refresh only in dev
if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test") {
	plugins.push("react-refresh/babel");
}

module.exports = {
	presets: [
		["@babel/preset-env", { targets: { node: "current" } }],
		["@babel/preset-react", { runtime: "automatic" }],
	],
	plugins: plugins,
};
