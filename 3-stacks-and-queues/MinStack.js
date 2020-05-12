class MinNode {
  constructor(data) {
    this.data = data
    this.next = null
    this.min = null
  }
}

class MinStack {
  constructor() {
    this.top = null
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

  pop() {
    if (!this.top) {
      return null
    }
    const top = this.top
    if (!this.top.next) {
      this.top = null
      return top
    }
    this.top = this.top.next
    return top
  }

  min() {
    if (!this.top) {
      return null
    }
    return this.top.min
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

module.exports = MinStack
