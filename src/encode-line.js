// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let count = 1;
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else {
      if (count == 1) result.push([arr[i]]);
      else result.push([count + arr[i]]);
      count = 1;
    }
  }

  return result.join('');
}

module.exports = {
  encodeLine,
};

// console.log(encodeLine('aaaatttt')); //, '4a4t');
// console.log(encodeLine('aabbccc')); //, '2a2b3c');
// console.log(encodeLine('abbcca')); //, 'a2b2ca');
// console.log(encodeLine('xyz')); //, 'xyz');
// console.log(encodeLine('')); //, '');
