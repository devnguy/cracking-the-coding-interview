/**
 * Write a program to sort a stack such that the smallest items are on the
 * top. You can use an additional temporary stack, but you may not copy the
 * elements to any other data structure (such as an array). The stack supports
 * the following operations: push, pop, peek, and isEmpty.
 */

const Stack = require('./Stack')

const sortStack = (s1) => {
  const s2 = new Stack()

  while (!s1.isEmpty()) {
    const temp = s1.pop()
    let popCounter = 0
    while (!s2.isEmpty() && s2.peek() > temp) {
      s1.push(s2.pop())
      popCounter++
    }
    s2.push(temp)

    for (let i = 0; i < popCounter; i++) {
      s2.push(s1.pop())
    }
  }

  // s2 is now in descending order. Pop all elements from s2 back into s1 so
  // that they're in ascending (reverse) order.
  while (!s2.isEmpty()) {
    s1.push(s2.pop())
  }
}

const s = new Stack()
s.push(1)
s.push(4)
s.push(2)
s.push(5)
s.push(3)
s.displayReverse()

sortStack(s)

s.displayReverse()
