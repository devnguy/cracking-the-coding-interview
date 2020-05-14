/**
 * Implement a MyQueue class which implements a queue using two stacks.
 *
 */

const Stack = require('./Stack')

class MyQueue {
  constructor() {
    this.back = new Stack()
    this.front = new Stack()
  }

  add(data) {
    this.back.push(data)
  }

  remove() {
    while (!this.back.isEmpty()) {
      this.front.push(this.back.pop())
    }
    const firstElement = this.front.pop()
    while (!this.front.isEmpty()) {
      this.back.push(this.front.pop())
    }
    return firstElement
  }

  displayReverse() {
    let current = this.back.top
    while (current) {
      process.stdout.write(`${current.data} `)
      current = current.next
    }
    process.stdout.write('\n')
  }
}

const q = new MyQueue()
q.add(1)
q.add(2)
q.add(3)
q.add(4)
q.add(5)
q.displayReverse()
q.remove()
q.displayReverse()
