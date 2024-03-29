const enumChars = require('..').default

test('enumChars:', function() {
  expect(enumChars('')).toBe('a')
  expect(enumChars('a')).toBe('b')
  expect(enumChars('b')).toBe('c')
  expect(enumChars('aa')).toBe('ab')
  expect(enumChars('aZ')).toBe('ba')
  expect(enumChars('aZZ')).toBe('baa')
  expect(enumChars('aZZY')).toBe('aZZZ')
  expect(enumChars('aZZZ')).toBe('baaa')

  expect(enumChars('', 5, '01')).toBe('00000')
  expect(enumChars('', '01', 5)).toBe('00000')
  expect(enumChars('', 5, '10')).toBe('11111')
  expect(enumChars('', '10', 5)).toBe('11111')

  expect(enumChars('00000', 5, '01')).toBe('00001')
  expect(enumChars('00000', '01', 5)).toBe('00001')
  expect(enumChars('11111', 5, '10')).toBe('11110')
  expect(enumChars('11111', '10', 5)).toBe('11110')

  expect(enumChars('11110', 5, '10')).toBe('11101')
  expect(enumChars('11110', '10', 5)).toBe('11101')

  expect(enumChars('', 3, '5')).toBe('555')
  expect(enumChars('', '3', 5)).toBe('33333')

  expect(enumChars('', 3, 5)).toBe('555')
  expect(enumChars('', '3', '5')).toBe('555')
  expect(enumChars('', 5, 3)).toBe('555')
  expect(enumChars('', '5', '3')).toBe('555')

  expect(enumChars.numbers('')).toBe('0')
  expect(enumChars.numbers('0')).toBe('1')
  expect(enumChars.numbers('0', '')).toBe('1')
  expect(enumChars.numbers('0', 5)).toBe('10000')
  expect(enumChars.numbers('0', '5')).toBe('10000')

  expect(enumChars.lowers('')).toBe('a')
  expect(enumChars.lowers('a')).toBe('b')

  expect(enumChars.uppers('')).toBe('A')
  expect(enumChars.uppers('A')).toBe('B')
})
