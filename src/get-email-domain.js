// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  return email.split('@').pop();
}

module.exports = {
  getEmailDomain,
};

// console.log(getEmailDomain('prettyandsimple@example.com')); //, 'example.com');
// console.log(getEmailDomain('someaddress@yandex.ru')); //, 'yandex.ru');
// console.log(getEmailDomain('very.unusual.@.unusual.com@usual.com')); //, 'usual.com');
// console.log(getEmailDomain('admin@mailserver2.ru')); //, 'mailserver2.ru');
// console.log(getEmailDomain('example-indeed@strange-example.com')); //, 'strange-example.com');
