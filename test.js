const assert = require("assert")
const replaceAllOf = require("./index")

describe("replaceAllOf", () => {
  it("should replace all occurrences using the BIGNUMBER loop", () => {
    const input = "test test test"
    const result = replaceAllOf(input, "test", "pass")
    assert.strictEqual(result, "pass pass pass")
  })

  it("should handle recursive replacements when y contains x", () => {
    const input = "aaaa"
    const result = replaceAllOf(input, "aa", "a")
    assert.strictEqual(result, "a")
  })

  describe("String.prototype shim", () => {
    it("should allow calling replaceAllOf directly on a string literal", () => {
      replaceAllOf.shim()
      
      const result = "10xly 10xly".replaceAllOf("10xly", "coding")
      assert.strictEqual(result, "coding coding")
    })

    it("should maintain 'this' context correctly", () => {
      const input = "uncurried"
      const result = input.replaceAllOf("u", "U")
      assert.strictEqual(result, "UncUrried")
    })
  })
})