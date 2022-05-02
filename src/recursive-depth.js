// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  check = arr => arr.some(a => Array.isArray(a));

  calculateDepth(arr) {
    let result = 1;

    if (this.check(arr)) {
      const newArrey = arr.reduce((prev, current) => prev.concat(current), []);

      return result + this.calculateDepth(newArrey);
    }
    return result;
  }
}

module.exports = {
  DepthCalculator,
};

// const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([[[]]]));
// console.log(
//   depthCalc.calculateDepth([
//     1,
//     [8, [[]]],
//     [
//       [
//         [
//           [
//             [
//               [
//                 [
//                   [
//                     [
//                       [[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]],
//                       [],
//                     ],
//                   ],
//                 ],
//               ],
//             ],
//           ],
//         ],
//       ],
//     ],
//     2,
//     3,
//     [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
//     [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
//     4,
//     5,
//     ['6575', ['adas', ['dfg', [0]]]],
//   ]),
// ); //, 31);
