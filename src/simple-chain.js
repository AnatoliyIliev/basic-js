// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      position - 1 < 0 ||
      !Number.isInteger(position) ||
      position - 1 >= this.array.length
    ) {
      this.array = [];
      throw Error("You can't remove incorrect link!");
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array = this.array.reverse();
    return this;
  },
  finishChain() {
    let res = this.array.join('~~');
    this.array = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};

// console.log(
//   chainMaker
//     .addLink('8.963')
//     .reverseChain()
//     .reverseChain()
//     .reverseChain()
//     .reverseChain()
//     .addLink({ 0: 'first', 1: 'second', length: 2 })
//     .reverseChain()
//     .addLink(3.14)
//     .addLink('DEF')
//     .reverseChain()
//     .finishChain(),
// ); //, '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )');

// console.log(
//   chainMaker
//     .addLink(true)
//     .reverseChain()
//     .addLink(Infinity)
//     .addLink(333)
//     .addLink(1)
//     .addLink(NaN)
//     .addLink(1.233)
//     .reverseChain()
//     .addLink(22)
//     .reverseChain()
//     .finishChain(),
// ); //, '( 22 )~~( true )~~( Infinity )~~( 333 )~~( 1 )~~( NaN )~~( 1.233 )');
