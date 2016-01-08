
# stringify-attrs

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Turn an attributes object into a string

## Installation

    $ npm install @f/stringify-attrs

## Usage

```js
var stringifyAttrs = require('@f/stringify-attrs')

stringifyAttrs({href: 'http://www.google.com', class: 'link'}) === ' href="http://www.google.com" class="link"'
```

## API

### stringifyAttrs(attrs)

- `attrs` - An object of key/value pairs representing attributes

**Returns:** A string containing the attributes in `key=value` style. Returns empty string if falsy value passed.

## Prepended space

The returned string starts with a prepended space (e.g. `' class="link"'`). This makes the code short, simpler, and faster, and also comports better with the most common use-case, which is rendering a DOM element as a string (if you don't have the prepended space, you have to again awkwardly check whether attrs is empty).

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/stringify-attrs.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/stringify-attrs
[git-image]: https://img.shields.io/github/tag/micro-js/stringify-attrs.svg
[git-url]: https://github.com/micro-js/stringify-attrs
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/stringify-attrs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/stringify-attrs
