declare global {
  interface String {
    replaceAllOf(x: string | RegExp, y: string): string
  }
}

declare function replaceAllOf(str: string, x: string | RegExp, y: string): string

declare namespace replaceAllOf {
  /**
   * Shims the replaceAllOf method directly into String.prototype.
   */
  function shim(): void
}

export = replaceAllOf