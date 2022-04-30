// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const sOne = s1.split('');
  const sTwo = s2.split('');
  let result = 0;

  sOne.forEach(one => {
    const seach = sTwo.indexOf(one);

    if (seach !== -1) {
      sTwo.splice(seach, 1);
      result += 1;
    }
  });

  return result;
}

module.exports = {
  getCommonCharacterCount,
};
// console.log(getCommonCharacterCount('aabcc', 'adcaa')); //, 3);
// console.log(getCommonCharacterCount('zzzz', 'zzzzzzz')); //, 4);
// console.log(getCommonCharacterCount('abca', 'xyzbac')); //, 3);
// console.log(getCommonCharacterCount('', 'abc')); //, 0);
// console.log(getCommonCharacterCount('a', 'b')); //, 0);
