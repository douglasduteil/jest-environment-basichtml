# jest-environment-basichtml

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

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

## License

    Copyright © 2018 Douglas Duteil <douglasduteil@gmail.com>
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. See the LICENCE file for more details.

[npm-url]: https://npmjs.org/package/jest-environment-basichtml
[npm-image]: http://img.shields.io/npm/v/jest-environment-basichtml.svg
[travis-url]: http://travis-ci.org/douglasduteil/jest-environment-basichtml
[travis-image]: http://travis-ci.org/douglasduteil/jest-environment-basichtml.svg?branch=master
