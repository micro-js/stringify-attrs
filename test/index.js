/**
 * Imports
 */

var stringifyAttrs = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(stringifyAttrs({href: 'http://www.google.com', style: 'color:red', class: 'link pointer'}), ' href="http://www.google.com" style="color:red" class="link pointer"')
  t.equal(stringifyAttrs({style: {marginBottom: 10}}), ' style="margin-bottom:10px;"')

  t.equal(stringifyAttrs(), '')
  t.equals(stringifyAttrs({autofocus: true, indeterminate: false}), ' autofocus')

  t.end()
})

test('should skip', function (t) {
  t.equal(stringifyAttrs({a: 'test', innerHTML: 'asdf'}, {innerHTML: true}), ' a="test"')
  t.end()
})
