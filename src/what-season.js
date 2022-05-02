// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();

    let month = date.getMonth();

    const allSeasons = {
      winter: [11, 0, 1],
      spring: [2, 3, 4],
      summer: [5, 6, 7],
      autumn: [8, 9, 10],
    };
    for (let elem in allSeasons) {
      if (allSeasons[elem].includes(month)) {
        return elem;
      }
    }
  } catch (e) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason,
};
