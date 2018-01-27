{
    "name": "react-parse",
    "version": "1.0.26",
    "description": "Starter kit to create npm modules using ES6 and Babel with sensible defaults",
    "main": "dist/index.js",
    "scripts": {
      "dev": "babel-node src/index.es6",
      "lint": "eslint src/**/*.es6",
      "compile": "babel --stage 0 -d dist/ src/",
      "prepublish": "npm run compile",
      "tape": "babel-node node_modules/argg src/test/*.es6",
      "istanbul": "npm run compile && istanbul cover --dir coverage/istanbul node_modules/argg dist/test/*.js --report lcovonly",
      "coverage": "npm run compile && istanbul cover --dir coverage/istanbul node_modules/argg dist/test/*.js --report html",
      "coveralls": "cat ./coverage/istanbul/lcov.info | ./node_modules/coveralls/bin/coveralls.js && rm -rf ./coverage",
      "plato": "plato -d coverage/plato dist/index.js",
      "test": "npm run istanbul && npm run coveralls"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/doronnahum/react-saga-parse-components.git"
    },
    "keywords": [
      "module",
      "npm",
      "starter",
      "boilerplate",
      "babel",
      "es6",
      "tape",
      "istanbul"
    ],
    "author": "doron nahum",
    "license": "MIT",
    "devDependencies": {
      "argg": "0.0.2",
      "babel": "^5",
      "babel-eslint": "^4.1.0",
      "coveralls": "^2.11.4",
      "eslint": "^1.2.1",
      "istanbul": "^0.3.18",
      "plato": "^1.5.0",
      "tape": "^4.2.0"
    },
    "dependencies": {
      "axios": "^0.16.2",
      "immutable": "^3.8.1",
      "lodash": "^4.17.4",
      "parse-axios-rest-api": "^1.0.0",
      "prop-types": "^15.5.10",
      "react": "16.0.0-alpha.6",
      "react-redux": "^5.0.6",
      "redux": "^3.6.0",
      "redux-saga": "^0.15.4",
      "reselect": "^3.0.1"
    },
    "bugs": {
      "url": "https://github.com/vinniegarcia/es6-module-starter/issues"
    },
    "homepage": "https://github.com/vinniegarcia/es6-module-starter#readme"
  }
  