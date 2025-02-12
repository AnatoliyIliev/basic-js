// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const newArr = [];
  let discardNext = false;
  arr.forEach((item, i) => {
    switch (item) {
      case '--discard-next':
        discardNext = true;
        break;
      case '--discard-prev':
        if (arr[i - 1] === newArr[newArr.length - 1]) {
          newArr.pop();
        }
        break;
      case '--double-next':
        if (arr[i + 1]) {
          newArr.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (arr[i - 1] && arr[i - 1] === newArr[newArr.length - 1]) {
          newArr.push(arr[i - 1]);
        }
        break;
      default:
        discardNext ? (discardNext = false) : newArr.push(item);
    }
  });
  return newArr;
}

module.exports = {
  transform,
};

// console.log(transform([1, 2, 3, '--double-next', 4, 5])); // => [1, 2, 3, 4, 4, 5]
// console.log(transform([1, 2, 3, '--discard-prev', 4, 5])); // => [1, 2, 4, 5]
