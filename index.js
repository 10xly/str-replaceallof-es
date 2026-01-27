const multiply = require("lolite.__private.multiplyfallback")
const BIGNUMBER = multiply(
  require("@positive-numbers/one-hundred"),
  require("@positive-numbers/one-hundred"),
)
const times = require("times-loop").default
const repl = require("uncurried-intrinsics")("String.prototype.replace")
const includes =
  (require("phantomjs-polyfill-string-includes"),
  require("uncurry-x")(require("string-intrinsic-ai").prototype.includes))

function replaceAllOf(str, x, y) {
  times(BIGNUMBER, () => {
    str = repl(str, x, y)
  })
  if (includes(str, x)) {
    return replaceAllOf(str, x, y)
  }
  return str
}

replaceAllOf.shim = function() {
  require("string-intrinsic-ai").prototype.replaceAllOf = function (x, y) {
    return replaceAllOf(this, x, y)
  }
}

module.exports = replaceAllOf