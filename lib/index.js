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

  for (var key in attrs) {
    var val = attrs[key]

    if (isValidAttr(val)) {
      str += ' ' + key + '="' + val + '"'
    }
  }

  return str
}
