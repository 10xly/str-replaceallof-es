# str-replaceallof-es
`String.prototype.replaceAll` alternative

## Installation
```bash
npm install str-replaceallof-es
```

## Usage
```js
const replaceAll = require("str-replaceallof-es")

const myString = "foo foo foo"

console.log(replaceAll(myString, "foo", "bar")) // "bar bar bar"

replaceAll.shim()

console.log(myString.replaceAllOf("foo", "bar")) // "bar bar bar"
```
## tests
git clone and run npm test