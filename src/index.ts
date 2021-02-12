export const enumChars = ((): {
  (word: string, min?: number, pattern?: string): string
  (word: string, pattern?: string, min?: number): string
  numbers: { (word: string, min?: number): string }
  lowers: { (word: string, min?: number): string }
  uppers: { (word: string, min?: number): string }
} => {
  const numbers = '0123456789'
  const lowers = 'abcdefghijklmnopqrstuvwxyz'
  const uppers = lowers.toUpperCase()

  const d = ''
  const size = (s: string): number => s.length
  const repeat = (string: string, count: number, res = d): string => {
    count = -~count || 0
    while (--count > 0) res += string
    return res
  }
  const padEnd = (s: string, len: number, pad: string): string =>
    !((len -= size(s)) > 0)
      ? s
      : s + repeat(pad, len / size(pad) + 1).slice(0, len)

  const isN = (v: any): boolean => v === 0 + v
  const isS = (v: any): boolean => v === d + v

  const enumChars = (
    word: string,
    min?: number | string,
    pattern?: string | number
  ): string => {
    word += d
    if (
      (isS(min) && (isN(pattern) || !pattern)) ||
      (isN(min) !== isS(pattern) && +min > +pattern)
    )
      [min, pattern] = [pattern, min]
    pattern = d + (pattern || numbers + lowers + uppers)
    min = +('0' + min) || 1

    const count = Math.max(size(word), +min)
    if (!size(word)) return padEnd(d, count, pattern[0])

    const wordArr = word.split(d).reverse()
    for (const char of wordArr) {
      word = word.slice(0, size(word) - 1)
      const charId = +pattern.indexOf(char)

      if (charId < size(pattern) - 1) {
        word = padEnd('' + (word + pattern[charId + 1]), count, pattern[0])
        return word
      }
    }

    return padEnd(d, count, pattern[0]) + pattern[0]
  }

  enumChars.numbers = (word: string, min: number): string =>
    enumChars(word, +min, numbers)
  enumChars.lowers = (word: string, min: number): string =>
    enumChars(word, +min, lowers)
  enumChars.uppers = (word: string, min: number): string =>
    enumChars(word, +min, uppers)

  return enumChars
})()

export default enumChars
