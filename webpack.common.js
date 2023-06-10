const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"],
        // Add support for TypeScripts fully qualified ESM imports.
        extensionAlias: {
            ".js": [".js", ".ts"],
            ".cjs": [".cjs", ".cts"],
            ".mjs": [".mjs", ".mts"]
        }
    },
    module: {
        rules: [
            // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new Dotenv({ path: path.join(__dirname, ".env." + process.env.NODE_ENV) })
    ]
}