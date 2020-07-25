const numbers = '0123456789';
const lowers = 'abcdefghijklmnopqrstuvwxyz';
const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const _pattern = numbers + lowers + uppers;

function enumChars(word, min = 1, pattern = _pattern) {
  const count = Math.max(word.length, +min);
  if (!word.length) return ''.padEnd(count, pattern[0]);

  const wordArr = word.split('').reverse();
  for (const char of wordArr) {
    word = word.slice(0, word.length - 1);
    const charId = +pattern.indexOf(char);

    if (charId < pattern.length - 1) {
      word = String(word + pattern[charId + 1]).padEnd(count, pattern[0]);
      return word;
    }
  }

  return ''.padEnd(count, pattern[0]) + pattern[0];
}

enumChars.numbers = function enumCharsNumbers(word, min = 1, a = numbers) {
  return enumChars(word, min, a);
};

enumChars.lowers = function enumCharsLowers(word, min = 1, a = lowers) {
  return enumChars(word, min, a);
};

enumChars.uppers = function enumCharsUppers(word, min = 1, a = uppers) {
  return enumChars(word, min, a);
};

module.exports = enumChars;
