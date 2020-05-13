const LinkedList = require('../2-linked-lists/LinkedList')
const Stack = require('./Stack')

class MinNode extends LinkedList.Node {
  constructor(data) {
    super(data)
    this.min = null
  }
}

class MinStack extends Stack {
  constructor() {
    super()
  }

  push(data) {
    const newNode = new MinNode(data)
    if (this.top) {
      newNode.next = this.top
      newNode.min = data < this.top.min.data ? newNode : this.top.min
    } else {
      newNode.next = null
      newNode.min = newNode
    }
    this.top = newNode
  }

  min() {
    if (!this.top) return null
    return this.top.min
  }
}

module.exports = MinStack
