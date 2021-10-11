/* eslint-disable */
/*
dester builds:
index.ts
*/
/* filename: index.ts
  timestamp: 2021-10-11T11:06:42.726Z */
var enumChars = (() => {
  var numbers = '0123456789';
  var lowers = 'abcdefghijklmnopqrstuvwxyz';
  var uppers = lowers.toUpperCase();
  var letters = lowers + uppers;
  var d = '';

  var size = s => s.length;

  var repeat = (string, count, res = d) => {
    count = -~count || 0;

    while (--count > 0) {
      res += string;
    }

    return res;
  };

  var padEnd = (s, len, pad) => !((len -= size(s)) > 0) ? s : s + repeat(pad, len / size(pad) + 1).slice(0, len);

  var isN = v => v === 0 + v;

  var isS = v => v === d + v;

  var enumChars = (word, min, pattern) => {
    word += d;
    if (isS(min) && (isN(pattern) || !pattern) || isN(min) !== isS(pattern) && +min > +pattern) [min, pattern] = [pattern, min];
    pattern = d + (pattern || lowers + numbers + uppers);
    min = +('0' + min) || 1;
    var count = Math.max(size(word), +min);
    if (!size(word)) return padEnd(d, count, pattern[0]);
    var wordArr = word.split(d).reverse();

    for (var char of wordArr) {
      word = word.slice(0, size(word) - 1);
      var charId = +pattern.indexOf(char);

      if (charId < size(pattern) - 1) {
        word = padEnd('' + (word + pattern[charId + 1]), count, pattern[0]);
        return word;
      }
    }

    return padEnd(d, count, pattern[0]) + pattern[0];
  };

  enumChars.numbers = (word, min) => enumChars(word, +min, numbers);

  enumChars.lowers = (word, min) => enumChars(word, +min, lowers);

  enumChars.uppers = (word, min) => enumChars(word, +min, uppers);

  enumChars.letters = (word, min) => enumChars(word, +min, letters);

  return enumChars;
})();

export default enumChars;
export { enumChars };
