[npm]: https://img.shields.io/npm/v/enum-chars
[npm-url]: https://www.npmjs.com/package/enum-chars
[size]: https://packagephobia.now.sh/badge?p=enum-chars
[size-url]: https://packagephobia.now.sh/result?p=enum-chars

[![npm][npm]][npm-url]
[![size][size]][size-url]

# enum-chars

Enumeration of characters according to template.

### Simple example:

```js
import enumChars from 'enum-chars'

let i = 0
let n = ''
while (n.length < 3) {
  console.log([i, (n = enumChars.numbers(n, 2))])
  i++
}
/* RETURNS in console.log: */
;[0, '00']
;[1, '01']
// ...
;[9, '09']
// ...

// Min word size:
console.log(enumChars.uppers('', 10)) // AAAAAAAAAA
console.log(enumChars.uppers('ABC', 10)) // ABDAAAAAAA
console.log(enumChars.uppers('AAAAAAAAAA', 10)) // AAAAAAAAAB
```

## Install

Using npm:

```console
npm install enum-chars
```

or

```console
yarn add enum-chars
```

## Usage

#### enumChars(word = '', min = 1, pattern = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')

#### enumChars.letters(word = '', min = 1, pattern = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')

#### enumChars.numbers(word = '', min = 1, pattern = '0123456789')

#### enumChars.lowers(word = '', min = 1, pattern = 'abcdefghijklmnopqrstuvwxyz')

#### enumChars.uppers(word = '', min = 1, pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')

```js
import enumChars from 'enum-chars'

let w = 'abc'
for (let i = 0; i < 20000; ++i) {
  w = enumChars(w, 1, 'abcdefghijklmnopqrstuvwxyz')
  console.log([i, w])
}
/* RETURNS in console.log: */
;[0, 'abd']
;[1, 'abe']
// ...
;[22, 'abz']
;[23, 'aca']
// ...
;[17545, 'zzy']
;[17546, 'zzz']
;[17547, 'aaaa']
;[17548, 'aaab']
// ...

// Example of working with a binary system
let n = ''
for (let i = 0; i < 257; ++i) {
  n = enumChars(n, 8, '01')
  console.log([i, n, parseInt(n, 2)])
}
/* RETURNS in console.log: */
;[0, '00000000', 0]
;[1, '00000001', 1]
;[2, '00000010', 2]
;[3, '00000011', 3]
// ...
;[254, '11111110', 254]
;[255, '11111111', 255]
;[256, '000000000', 0]
```

## Meta

[LICENSE (MIT)](/LICENSE)
