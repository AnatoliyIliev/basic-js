// const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  const activSample = Number(sampleActivity);

  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.ceil(Math.log(MODERN_ACTIVITY / activSample) / k);

  // console.log(activSample);
  // console.log(t);
  if (MODERN_ACTIVITY < activSample || isNaN(activSample) || activSample <= 0) {
    return false;
  }

  return t;
}

module.exports = {
  dateSample,
};
// console.log(dateSample('1')); //, 22387(или 22392
// console.log(dateSample('3')); //, 13305);
// console.log(dateSample('3.142')); //, 12923);
// console.log(dateSample('1.1')); //, 21599);
// console.log(dateSample('9.8888')); //, 3445);
// console.log(dateSample('9.59383373526808')); //, 3695);
// console.log(dateSample('9.122605776326203')); //, 4111);
// console.log(dateSample([3])); //, false);
// console.log(dateSample('-5')); //, false);
// console.log(dateSample('one')); //, false);
// console.log(dateSample('-52892')); //, false);
