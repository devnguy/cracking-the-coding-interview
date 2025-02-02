const LinkedList = require('../2-linked-lists/LinkedList')

class Stack {
  constructor() {
    this.top = null
    this.length = 0
  }

  push(data) {
    const newNode = new LinkedList.Node(data)
    if (this.top) {
      newNode.next = this.top
    } else {
      newNode.next = null
    }
    this.length++
    this.top = newNode
  }

  pop() {
    if (this.isEmpty()) return
    const poppedTop = this.top.data
    this.top = this.top.next
    this.length--
    return poppedTop
  }

  peek() {
    return this.top.data
  }

  isEmpty() {
    return !this.top
  }

  displayReverse() {
    let current = this.top
    while (current) {
      process.stdout.write(`${current.data} `)
      current = current.next
    }
    process.stdout.write('\n')
  }
}

module.exports = Stack
