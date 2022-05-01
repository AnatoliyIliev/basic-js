// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let newArr = [];

  const domain = domains.map(dom => dom.split('.').reverse());
  domain.forEach(d => {
    d.forEach((elem, idx) => {
      if (idx > 0) {
        newArr.push(newArr[idx - 1] + '.' + elem);
      } else {
        newArr.push('.' + elem);
      }
    });
  });

  newArr.forEach(elem => {
    if (elem in obj) {
      obj[elem] += 1;
    } else {
      obj[elem] = 1;
    }
  });

  return obj;
}

module.exports = {
  getDNSStats,
};

// console.log(getDNSStats(['epam.com'])); //, { '.com': 1, '.com.epam': 1 });
// console.log(getDNSStats(['epam.com', 'info.epam.com'])); //, {
//  '.com': 2,
//  '.com.epam': 2,
//  '.com.epam.info': 1,
//});
// console.log(getDNSStats([])); //, {});
