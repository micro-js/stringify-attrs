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
  t.equal(stringifyAttrs(), '')

  t.end()
})
