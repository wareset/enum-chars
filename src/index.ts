export const enumChars = ((): {
  (word: string, min?: number, pattern?: string): string;
  (word: string, pattern?: string, min?: number): string;
  numbers: { (word: string, min?: number): string };
  letters: { (word: string, min?: number): string };
  lowers: { (word: string, min?: number): string };
  uppers: { (word: string, min?: number): string };
} => {
  const NUMBERS = '0123456789'
  const LOWERS = 'abcdefghijklmnopqrstuvwxyz'
  const UPPERS = LOWERS.toUpperCase()
  const LETTERS = LOWERS + UPPERS
  const ALL = LOWERS + NUMBERS + UPPERS

  const repeat = (string: string, count: number, res: string): string => {
    count = -~count || 0
    while (--count > 0) res += string
    return res
  }
  const padEnd =
    (s: string, len: number, pad: string): string => !((len -= s.length) > 0)
      ? s
      : s + repeat(pad, len / pad.length + 1, '').slice(0, len)

  const isN = (v?: number | string): boolean => v === +('0' + v)
  const isS = (v?: number | string): boolean => v === '' + v

  const enumChars = (
    word: string,
    min?: number | string,
    pattern?: string | number
  ): string => {
    word += ''
    if (
      isS(min) && (isN(pattern) || !pattern) ||
      isN(min) !== isS(pattern) && +min! > +pattern!
    ) {
      [min, pattern] = [pattern, min]
    }
    pattern = '' + (pattern || ALL); min = +('0' + min) || 1

    const wordSize = word.length
    if (wordSize > min) min = wordSize
    else if (!wordSize) return padEnd('', min, pattern[0])

    const patternSize1 = pattern.length - 1
    for (let charId: number, i = wordSize; i-- > 0;) {
      if ((charId = +pattern.indexOf(word[i])) < patternSize1) {
        return padEnd(word.slice(0, i) + pattern[charId + 1], min, pattern[0])
      }
    }

    return padEnd('', min, pattern[0]) + pattern[0]
  }

  enumChars.numbers =
    (word: string, min?: number): string => enumChars(word, min, NUMBERS)
  enumChars.letters =
    (word: string, min?: number): string => enumChars(word, min, LETTERS)
  enumChars.lowers =
    (word: string, min?: number): string => enumChars(word, min, LOWERS)
  enumChars.uppers =
    (word: string, min?: number): string => enumChars(word, min, UPPERS)
  return enumChars
})()

export default enumChars
