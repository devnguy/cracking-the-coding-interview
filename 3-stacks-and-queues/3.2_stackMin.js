/**
 * How would you design a stack which, in addition to push and pop, has a
 * function min which returns the minimum element? Push, pop and min should
 * all operate in O(1) time.
 *
 * See MinStack.js
 */

const MinStack = require('./MinStack')

const s = new MinStack()
s.push(5)
s.push(7)
s.push(4)
s.push(2)
s.push(8)
s.displayReverse()
console.log(s.min().data)
s.pop()
console.log(s.min().data)
s.pop()
console.log(s.min().data)

s.pop()
s.pop()
console.log(s.min().data)
s.pop()
console.log(s.min())
