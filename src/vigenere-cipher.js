// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(msg, key) {
    if (!msg || !key || typeof msg !== 'string' || typeof key !== 'string')
      throw new Error('Incorrect arguments!');
    let mes = msg.toUpperCase().split(' ').join(''),
      k = key.toUpperCase(),
      res = '',
      result = '';
    for (; mes.length > k.length; ) k += k;

    for (let i = 0; i < mes.length; i++) {
      let newLetter = [...this.letter].slice('');
      let codeAbc = newLetter
        .concat(newLetter.splice(0, newLetter.indexOf(k[i])))
        .join('');

      if (this.letter.includes(mes[i]))
        res += codeAbc[this.letter.indexOf(mes[i])];
      else res += mes[i];
    }

    let revM = res.split('').reverse();

    for (let i = 0; i < msg.length; i++) {
      if (msg[i] != ' ') result += revM.pop();
      else result += ' ';
    }

    if (this.type) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }

  decrypt(msg, key) {
    if (!msg || !key || typeof msg !== 'string' || typeof key !== 'string')
      throw new Error('Incorrect arguments!');
    let mes = msg.toUpperCase().split(' ').join(''),
      k = key.toUpperCase(),
      res = '',
      result = '';
    for (; mes.length > k.length; ) k += k;

    for (let i = 0; i < mes.length; i++) {
      let newLetter = [...this.letter].slice('');
      let codeAbc = newLetter
        .concat(newLetter.splice(0, newLetter.indexOf(k[i])))
        .join('');

      if (this.letter.includes(mes[i]))
        res += this.letter[codeAbc.indexOf(mes[i])];
      else res += mes[i];
    }

    let revM = res.split('').reverse();

    for (let i = 0; i < msg.length; i++) {
      if (msg[i] != ' ') result += revM.pop();
      else result += ' ';
    }

    if (this.type) {
      console.log(result);
      return result;
    } else {
      console.log(result.split('').reverse().join(''));
      return result.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};

// console.log(directMachine.encrypt('attack at dawn!', 'alphonse')); //,  'AEIHQX SX DLLU!',
// console.log(
//   directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey'),
// ); //,  'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.',
// console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js')); //, 'LEARN FRONTEND DEVELOPMENT :)');
// console.log(
//   directMachine.decrypt('ICWWQAM KECEIK JVZZT EADGG!', 'rollingscopes'),
// ); //, 'ROLLING SCOPES SHOOL RULES!');
// console.log(directMachine.decrypt('TRVVFB VT JSUIFMYL!', 'learning')); //, 'INVEST IN YOURSELF!');
// console.log(directMachine.decrypt('HSVD AJAL ^^', 'behappy')); //, 'GOOD LUCK ^^');
