/**
 * Modules
 */

var isValidAttr = require('@f/is-valid-attr')
var toInlineStyle = require('@f/to-inline-style')

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

    if (key === 'style' && typeof val !== 'string') {
      val = toInlineStyle(val)
    }

    if (isValidAttr(val)) {
      if (val === true) str += ' ' + key
      else if (val === false) continue
      else str += ' ' + key + '="' + val + '"'
    }
  }

  return str
}
