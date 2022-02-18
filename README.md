# Lithials' React Webpack Template
I created this repo to learn more about how webpack works and to have a template that I can use in future projects.

## TODO:
Integrate eslint, prettier.
Create a branch for component libraries and react native.
Investigate why to use css variables over sass ones.
Investigate React Sass best practices. 
See if bem is right for react.
Look into asset loading for lazy images like gatsby has.

## How to use:

1. Clone the repo.
2. Select the branch to determine which template you want to use.
3. Run Yarn to install dependencies.
4. See the package.json for available scripts.

## Resources:
Based on this [Youtube Video](https://youtu.be/TOb1c39m64A), with more information found on [GitHub](https://github.com/Jimmydalecleveland/webpack-starters/tree/react-full-project-latest)


### Here are some other things this project supports:
* Built with yarn.
* (Fast) Hot and Live Reloading.
* Latest stable ES version transpiling through @babel/preset-env and babel-loader.
* JSX syntax through @babel/preset-react and babel-loader.
* .jsx file extensions, and importing them without adding the extension.
* importing .css files into javascript files through css-loader.
* Sass: .scss and .sass formats through sass-loader and dart sass (sass) package.
* importing images (including .svg) through import syntax in javascript and url() syntax in css.
* automatically inlining images less than 8kb (webpack default, which is configurable) into the javascript bundle output. Anything over 8kb will be created as a resource file in the final output folder.
* html-webpack-plugin@next for outputting an index.html from a template for proper production builds support. 
* clean-webpack-plugin for automatic cleanup of the output directory (dist/) on each build.


### Useful tips and tricks
`// @refresh reset` at the top of the file will stop fast refresh from keeping state on that component
