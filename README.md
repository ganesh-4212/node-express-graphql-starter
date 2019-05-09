# babel integration to nodejs

Boiler-plate code to get started with Nodejs and babel.

## Initialize npm

```bash
npm init -y
```

## Install babel dependencies

```bash
npm i -D @babel/core @babel/node @babel/preset-env
```

## Configure babel in .babelrc file

```json
{
  "presets": ["@babel/preset-env"]
}
```

## Install prettier

```bash
npm i -D prettier
```

## configure prettier (.prettierrc)

```json
{
  "printWidth": 100,
  "singleQuote": true
}
```

## Install Eslint

```bash
npm i -D eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier
```

## configure Eslint (.eslintrc.js)

```js
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': ['error']
  }
};
```

## install nodemon

```bash
npm i -D nodemon
```

## NPM Scripts

```json
{
  "scripts": {
    "test": "npm test",
    "start": "nodemon --exec babel-node src/index.js",
    "debug": "nodemon --exec babel-node src/index.js --inspect ./bin/www",
    "build": "babel src --out-dir dist",
    "serve": "node dist/index.js"
  }
}
```

## Start project

```bash
npm start
```

## Debug project

### Add launch configuration to vscode for debugging.

paste following code to .vscode/launch.json file.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Node: Nodemon",
      "processId": "${command:PickProcess}",
      "restart": true,
      "protocol": "inspector"
    }
  ]
}
```

### Start nodemon inspect mode

```bash
npm run debug
```

### Attach vscode debugger to nodemon

Press `F5` and select running nodemon process.

## Folder structure

```
.
+-- src
    +-- index.js
+-- .babelrc
+-- .eslintrc.js
+-- .prettierrc
+-- package.json
```
