# jest-environment-basichtml

[![Build Status][travis-image]][travis-url]

> [basicHTML](https://github.com/WebReflection/basicHTML) environment in [Jest](https://github.com/facebook/jest)

## Install

```sh
$ npm install --save-dev jest-environment-basichtml
# or
$ yarn -D jest-environment-basichtml
```

## Usage

```js
test('should say hello world', () => {
  document.body.append('Hello world');
  expect(document.body.outerHTML).toBe('<body>Hello world</body>');
});
```

[travis-url]: http://travis-ci.org/douglasduteil/jest-environment-basichtml
[travis-image]: http://travis-ci.org/douglasduteil/jest-environment-basichtml.svg?branch=master
