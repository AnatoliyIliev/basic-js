// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0;
  let newArray = [];

  for (let i = 0; i < matrix[0].length; i += 1) {
    newArray.push([matrix[0][i]]);
    for (let j = 1; j < matrix.length; j += 1) {
      newArray[i].push(matrix[j][i]);
    }
  }

  return newArray.reduce((acc, arr) => (acc += calculation(arr)), 0);
}

function calculation(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
      count += arr[i];
    } else {
      return count;
    }
  }

  return count;
}

module.exports = {
  getMatrixElementsSum,
};

// console.log(
//   getMatrixElementsSum([
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3],
//   ]),
// );
// // 9

// console.log(
//   getMatrixElementsSum([
//     [1, 2, 3, 4],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3],
//   ]),
// );
// // 15

// console.log(getMatrixElementsSum([[1], [5], [0], [2]])); //, 6);
