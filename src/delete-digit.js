// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let string = n.toString();
  let arr = [];
  for (let i = 0; i < string.length; i += 1) {
    let current = '';
    for (let j = 0; j < string.length; j += 1) {
      if (i !== j) {
        current += string[j];
      }
    }
    arr.push(Number(current));
  }
  return Math.max.apply(null, arr);
}

module.exports = {
  deleteDigit,
};

// console.log(deleteDigit(152)); //, 52);
// console.log(deleteDigit(1001)); //, 101);
// console.log(deleteDigit(10)); //, 1);
// console.log(deleteDigit(222219)); //, 22229);
// console.log(deleteDigit(109)); //, 19);
// console.log(deleteDigit(342)); //, 42);
