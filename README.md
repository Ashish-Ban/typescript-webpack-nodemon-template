# Simple Typescript Webpack Nodemon template

## What this template is ?

<p>
This template is a very minimal typescript webpack setup with development and production environment, with webpack watch mode and different configs for development and production, Mainly focused on beginners to get started with webpack and for anyone who wishes to quickly setup webpack and add other libraries as required for frontend or backend development as required. 
In this template, you can use 2 environment file (.env.development and .env.production). 
</p>

### Some notes about the template

- For beginners, please understand webpack is a build system, so it is used to build and do some transformation of bundles etc, you should use this to install other libraries of your choice for frontend or backend as necessary.
- It only has webpack, nodemon and typescript configured for watch mode and building the files. So if you run `npm start` it will build and run the code and restart the code when you save the changes. Watch mode (`npm start` and `webpack --watch` ) does not mean hot module replacement or hot reload or live reload, for such frontend development assistance please install other plugins or use webpack's build in HMR plugin or other plugins.

### Usage

#### Environment variables

Create 2 environment files .env.production and .env.development in the root of the project. Add your environment variables in to those files as necessary

```env
myenv=DEVEL
```

#### (Optional) Webpack configs and customisation

3 files : `webpack.common.js` exports the configurations which are common in both the development and production environment. You can webpack plugins as required in the `webpack.common.js` or `webpack.dev.js` or `webpack.prod.js` as required based on the environment you want to add to, as necessary. Remember to setup the webpack-merge plugin as required to merge the config or mergeWithCustomize etc as required for more refer this [merge-webpack](https://www.npmjs.com/package/webpack-merge) plugin docs.

NOTE: If you change the entry file or output file in the configs then please do add the code to apply those changes to [NodemonPlugin](https://www.npmjs.com/package/nodemon-webpack-plugin) in webpack config to point to that file, as shown below, assuming you changed the file index.ts to server.js

```js
new NodemonPlugin({
  // If using more than one entry, you can specify
  // which output file will be restarted.
  script: "./dist/server.js",

  // What to watch.
  watch: path.resolve("./dist"),

  // Arguments to pass to the script being watched.
  args: ["demo"],

  // Node arguments.
  nodeArgs: ["--debug=9222"],

  // Files to ignore.
  ignore: ["*.js.map"],

  // Extensions to watch.
  ext: "js,njk,json",

  // Unlike the cli option, delay here is in milliseconds (also note that it's a string).
  // Here's 1 second delay:
  delay: "1000",

  // Detailed log.
  verbose: true,

  // Environment variables to pass to the script to be restarted
  env: {
    NODE_ENV: "development",
  },
});
```

#### Build and Run

To Build and run with restart on code changes:

```cmd
npm run start
```

To Build production

```cmd
npm run build
```
