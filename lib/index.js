/**
 * Modules
 */

var isValidAttr = require('@f/is-valid-attr')

/**
 * Expose stringifyAttrs
 */

module.exports = stringifyAttrs

/**
 * stringifyAttrs
 */

function stringifyAttrs (attrs) {
  var str = ''
  var first = true

  for (var key in attrs) {
    var val = attrs[key]

    if (isValidAttr(val)) {
      if (!first) str += ' '
      else first = false

      str += key + '="' + val + '"'
    }
  }

  return str
}
