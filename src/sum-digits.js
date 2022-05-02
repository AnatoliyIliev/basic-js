// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let string = n.toString();
  let count = string
    .split('')
    .reduce((a, b) => Number(a) + Number(b))
    .toString();

  if (count.length === 1) {
    return Number(count);
  }

  return getSumOfDigits(count);
}

module.exports = {
  getSumOfDigits,
};

// console.log(getSumOfDigits(91)); //, 1);
// console.log(getSumOfDigits(100)); //, 1);
// console.log(getSumOfDigits(35)); //, 8);
// console.log(getSumOfDigits(99)); //, 9);
// console.log(getSumOfDigits(123)); //, 6);
