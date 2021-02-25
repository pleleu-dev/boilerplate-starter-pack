# TypeScript Node Starter

The main purpose of this repository is to have a stater pack for building node - express js typescript API

# Table of contents:

- [Pre-reqs](#pre-reqs)
- [Sources](#getting-started)
- [Project Structure](#project-structure)
- [Building the project](#building-the-project)
- [Testing](#testing)
- [ESLint](#eslint)
- [Dependencies](#dependencies)
	- [`dependencies`](#dependencies)
	- [`devDependencies`](#devdependencies)

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)

# Sources 
- This project was build upon
```
https://github.com/Microsoft/TypeScript-Node-Starter
```

# Project Structure
The most obvious difference in a TypeScript + Node project is the folder structure.
In a TypeScript project, it's best to have separate _source_  and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `dist` folder.
The `test` folders remain top level as expected.

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run build`

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **.vscode**              | Contains VS Code specific settings                                                            |
| **.github**              | Contains GitHub settings and configurations, including the GitHub Actions workflows            |
| **dist**                 | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **src**                  | Contains your source code that will be compiled to the dist dir                               |
| **src/public**           | Static assets that will be used client side                                                   |
| **src/types**            | Holds .d.ts files not found on DefinitelyTyped. Covered more in this [section](#type-definition-dts-files)          |
| **src**/server.ts        | Entry point to your express app                                                               |
| **test**                 | Contains your tests. Separate from source because there is a different build process.         |
| .env.example             | API keys, tokens, passwords, database URI. Clone this, but don't check it in to public repos. |
| package.json             | File that contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)                          |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |
| .eslintrc                | Config settings for ESLint code style checking                                                |
| .eslintignore            | Config settings for paths to exclude from linting                                             |
| .prettierrc              | Prettier config file                                                                          |


# Running the build

| Npm Script | Description  |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
|                           |                                                                                                   |
| `build-ts`                | Compiles all source `.ts` files to `.js` files in the `dist` folder                               |
| `build`                   | Full build. Runs ALL build tasks (`build-ts`, `lint`, `copy-static-assets`)                       |
| `debug`                   | Performs a full build and then serves the app in watch mode                                       |
| `lint`                    | Runs ESLint on project files                                                                      |
| `format`                  | Runs Prettier on project files                                                                    |
| `serve-debug`             | Runs the app with the --inspect flag                                                              |
| `serve`                   | Runs node on `dist/server.js` which is the apps entry point                                       |
| `start`                   | Does the same as 'npm run serve'. Can be invoked with `npm start`                                 |
| `test`                    | Runs tests using Jest test runner                                                                 |
| `watch-debug`             | The same as `watch` but includes the --inspect flag so you can attach a debugger                  |
| `watch-node`              | Runs node with nodemon so the process restarts if it crashes. Used in the main watch task         |
| `watch-test`              | Runs tests in watch mode                                                                          |
| `watch-ts`                | Same as `build-ts` but continuously watches `.ts` files and re-compiles when needed               |
| `watch`                   | Runs all watch tasks (TypeScript, Sass, Node). Use this if you're not touching static assets.     |



## Testing
For this project, I chose [Jest](https://facebook.github.io/jest/) as our test framework.

## ESLint / Prettier
ESLint is a code linter which mainly helps catch quickly minor code quality and style issues.
```
npm i -D --save-exact eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-import-resolver-typescript eslint-loader eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y  @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
Prettier
```
npm i -D --save-exact prettier prettier-eslint prettier-eslint-cli eslint-plugin-prettier
```

## Husky

pre-Commit hooks check using Husky:
```
npm i -D --save-exact husky lint-staged
```
package.json add :

    "husky": {
        "hooks": {
        "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
        "prettier --write"
        ]
    },

## VSCode Extensions

To enhance your development experience while working in VSCode we also provide you a list of the suggested extensions for working with this project:

- [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VS Code Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

# Dependencies
Dependencies are managed through `package.json`.
In that file you'll find two sections:

## `dependencies`

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| errorhandler                    | Express 4 middleware.                                                 |
| express                         | Node.js web framework.                                                |
| 

## `devDependencies`

| Package                         | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| @types                          | Dependencies in this folder are `.d.ts` files used to provide types    |
| chai                            | Testing utility library that makes it easier to write tests            |
| supertest                       | HTTP assertion library.            |
| concurrently                    | Utility that manages multiple concurrent tasks. Used with npm scripts  |
| jest                            | Testing library for JavaScript.                                        |
| nodemon                         | Utility that automatically restarts node process when it crashes       |
| ts-jest                         | A preprocessor with sourcemap support to help use TypeScript with Jest.|
| ts-node                         | Enables directly running TS files. Used to run `copy-static-assets.ts` |
| eslint                          | Linter for JavaScript and TypeScript files                             |
| typescript                      | JavaScript compiler/type checker that boosts JavaScript productivity   |
| husky                           | Pre commit hooks                                                       |
| prettier                        | JavaScript code formatting                                             |

To install or update these dependencies you can use `npm install` or `npm update`.
