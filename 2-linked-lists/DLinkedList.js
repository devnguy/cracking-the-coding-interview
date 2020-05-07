class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

/**
 * Doubly linked list that maintains length.
 * last is a sentinel value holding the last Node to allow constant time add.
 */
class LinkedList {
  constructor() {
    this.head = null
    this.last = this.head
    this.length = 0
  }

  /**
   * Appends a Node containing the data to the DLinkedList.
   * @param {any} data data to append
   */
  add(data) {
    const newNode = new Node(data)
    if (this.last) {
      this.last.next = newNode
      newNode.prev = this.last
    } else {
      this.head = newNode
    }
    this.last = newNode
    this.length++
  }

  /**
   * Removes the first Node containing the data from the DLinekdList.
   * @param {any} data data to remove
   */
  remove(data) {
    let current = this.head
    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          current.next.prev = null
          this.head = current.next
        } else if (current === this.last) {
          current.prev.next = null
          this.last = current.prev
        } else {
          current.prev.next = current.next
          current.next.prev = current.prev
        }
        this.length--
        return true
      } else {
        current = current.next
      }
    }
    return false
  }

  /**
   * Determine whether a data exists within a LinkedList.
   * @param {any} data search data
   */
  contains(data) {
    let current = this.head
    while (current) {
      if (current.data === data) {
        return true
      } else {
        current = current.next
      }
    }
    return false
  }

  /**
   * Print all data in the LinkedList.
   */
  display() {
    let current = this.head
    while (current) {
      process.stdout.write(`${current.data} `)
      current = current.next
    }
    process.stdout.write('\n')
  }

  displayReverse() {
    let current = this.last
    while (current) {
      process.stdout.write(`${current.data} `)
      current = current.prev
    }
    process.stdout.write('\n')
  }
}

module.exports = LinkedList
