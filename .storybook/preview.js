import "!style-loader!css-loader!sass-loader!../src/styles/index.scss";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(StoryFn, { globals: { height = 400 } }) => (
		<>
			<div style={{
				height: `${height}px`
			}}>
				<StoryFn />
			</div>
		</>
	),
];
