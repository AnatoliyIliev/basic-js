// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members
      .map(elem => {
        if (typeof elem === 'string') return elem.trim();
      })
      .reduce((acc, member) => {
        if (typeof member === 'string') return acc + member[0].toUpperCase();
        else return acc;
      }, '')
      .split('')
      .sort()
      .join('');
  } else return false;
}

module.exports = {
  createDreamTeam,
};

// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])); // => 'ADMM'
// console.log(createDreamTeam(['matt', 'ann', 'dmitry', 'max'])); // => 'ADMM'
// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])); //  => 'LOO'
// console.log(createDreamTeam(3)); //, false
// console.log(createDreamTeam({ foo: 'bar' })); //, false
// console.log(
//   createDreamTeam([
//     '   William Alston ',
//     ' Paul Benacerraf',
//     '  Ross Cameron',
//     '       Gilles Deleuze',
//     '  Arda Denkel ',
//     '  Michael Devitt',
//     '  Kit Fine',
//     ' Nelson Goodman',
//     'David Kolb',
//     '   Saul Kripke',
//     '  Trenton Merricks',
//     '  Jay Rosenberg',
//   ]),
// );
// //, 'ADGJKMNPRSTW')

// console.log(
//   createDreamTeam([
//     ['David Abram'],
//     ['Robin Attfield'],
//     'Thomas Berry',
//     ['Paul R.Ehrlich'],
//     'donna Haraway',
//     ' BrIaN_gOodWiN  ',
//     {
//       0: 'Serenella Iovino',
//     },
//     'Erazim Kohak',
//     '  val_plumwood',
//   ]),
// );
// //, 'BDETV');
