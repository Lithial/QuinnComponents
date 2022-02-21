module.exports = {
    verbose: true,
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.js"
    ],
    moduleFileExtensions: [
        "js", "jsx", "json"],
    transform: {
        ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
        "^.+\\.(js|jsx)?$": "babel-jest"
    },
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "babel-jest"
    },
    transformIgnorePatterns: [
        "<rootDir>/node_modules/"
    ]
}
