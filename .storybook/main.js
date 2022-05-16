module.exports = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y",
        "@storybook/preset-scss",
    ],
    framework: "@storybook/react",
    core: {
        builder: "webpack5",
    },
    reactOptions: {
        fastRefresh: true,
        strictMode: true,
    },
};
