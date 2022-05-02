// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let count = [];
  for (let num of arr) {
    if (num !== -1) {
      count.push(num);
    }
  }

  count.sort((a, b) => a - b);

  for (let i = 0, j = 0; i < arr.length; i += 1) {
    if (arr[i] !== -1) {
      arr[i] = count[j];
      j += 1;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight,
};

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])); // [-1, 150, 160, 170, -1, -1, 180, 190],
// console.log(sortByHeight([-1, -1, -1, -1, -1])); //, [-1, -1, -1, -1, -1]);
// console.log(sortByHeight([-1])); //, [-1]);
// console.log(sortByHeight([4, 2, 9, 11, 2, 16])); //, [2, 2, 4, 9, 11, 16]);
// console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])); //[1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77],
