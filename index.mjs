/* eslint-disable */
/*
dester builds:
index.ts
*/
/* filename: index.ts
  timestamp: 2022-07-19T18:44:03.346Z */
var enumChars = (() => {
  var NUMBERS = '0123456789';
  var LOWERS = 'abcdefghijklmnopqrstuvwxyz';
  var UPPERS = LOWERS.toUpperCase();
  var LETTERS = LOWERS + UPPERS;
  var ALL = LOWERS + NUMBERS + UPPERS;

  var repeat = (string, count, res) => {
    count = -~count || 0;

    while (--count > 0) {
      res += string;
    }

    return res;
  };

  var padEnd = (s, len, pad) => !((len -= s.length) > 0) ? s : s + repeat(pad, len / pad.length + 1, '').slice(0, len);

  var isN = v => v === +('0' + v);

  var isS = v => v === '' + v;

  var enumChars = (word, min, pattern) => {
    word += '';

    if (isS(min) && (isN(pattern) || !pattern) || isN(min) !== isS(pattern) && +min > +pattern) {
      [min, pattern] = [pattern, min];
    }

    pattern = '' + (pattern || ALL);
    min = +('0' + min) || 1;
    var wordSize = word.length;
    if (wordSize > min) min = wordSize;else if (!wordSize) return padEnd('', min, pattern[0]);
    var patternSize1 = pattern.length - 1;

    for (var charId, i = wordSize; i-- > 0;) {
      if ((charId = +pattern.indexOf(word[i])) < patternSize1) {
        return padEnd(word.slice(0, i) + pattern[charId + 1], min, pattern[0]);
      }
    }

    return padEnd('', min, pattern[0]) + pattern[0];
  };

  enumChars.numbers = (word, min) => enumChars(word, min, NUMBERS);

  enumChars.letters = (word, min) => enumChars(word, min, LETTERS);

  enumChars.lowers = (word, min) => enumChars(word, min, LOWERS);

  enumChars.uppers = (word, min) => enumChars(word, min, UPPERS);

  return enumChars;
})();

export { enumChars as default, enumChars };
