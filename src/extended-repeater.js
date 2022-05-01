// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  let addition = options.addition == str ? str : options.addition;
  addition = options.addition === null ? 'null' : options.addition;

  const arr = repeat(str, options.repeatTimes);
  const sep = repeat(addition, options.additionRepeatTimes);

  const sepAddit = sep.join(additionSeparator);

  return arr.map(a => a + sepAddit).join(separator);
}

function repeat(str, times) {
  let arr = [];
  if (!times) {
    arr.push(str);
  } else {
    for (let i = 0; i < times; i += 1) {
      arr.push(str);
    }
  }

  return arr;
}

module.exports = {
  repeater,
};

// console.log(
//   repeater(null, {
//     repeatTimes: 3,
//     separator: '??? ',
//     addition: null,
//     additionRepeatTimes: 3,
//     additionSeparator: '!!!',
//   }),
// ); //   'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null',

// console.log(
//   repeater('TESTstr', {
//     separator: 'ds',
//     addition: 'ADD!',
//     additionSeparator: ')))000',
//   }),
// ); //   'TESTstrADD!',

// const objWithSpecificCoercion = {
//   [Symbol.toPrimitive]: hint =>
//     hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER',
// };

// console.log(
//   repeater(objWithSpecificCoercion, {
//     repeatTimes: 2,
//     addition: objWithSpecificCoercion,
//   }),
// ); //, 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT');

// console.log(repeater('point', { repeatTimes: 3, separator: '&&&' })); //, 'point&&&point&&&point');

// console.log(repeater('la', { repeatTimes: 3 })); //, 'la+la+la');
// console.log(repeater('single', { repeatTimes: 1 })); //, 'single');
// console.log(repeater('12345', { repeatTimes: 5 }));
// // '12345+12345+12345+12345+12345',

// // console.log(
// //   repeater('LALA', {
// //     repeatTimes: 3,
// //     separator: 's',
// //     addition: '++',
// //     additionRepeatTimes: 1,
// //   }),
// // );
// // 'LALA++sLALA++sLALA++',

// console.log(
//   repeater('nNIACubPBf', {
//     repeatTimes: 2,
//     separator: '4z7XU1DGhr',
//     addition: 'teFdkm2L4G',
//     additionRepeatTimes: 8,
//     additionSeparator: '6iCXJ9YUgq',
//   }),
// );
// // 'nNIACubPBfteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G4z7XU1DGhrnNIACubPBfteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G6iCXJ9YUgqteFdkm2L4G',
