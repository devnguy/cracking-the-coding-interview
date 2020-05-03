class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

/**
 * Singly linked list that maintains length.
 * last is a sentinel value holding the last Node to allow constant time add.
 */
class LinkedList {
  constructor() {
    this.head = null
    this.last = this.head
    this.length = 0
  }

  /**
   * Appends a Node containing the data to the LinkedList.
   * @param {any} data data to append
   */
  add(data) {
    const newNode = new Node(data)
    if (this.last) {
      this.last.next = newNode
    } else {
      this.head = newNode
    }
    this.last = newNode
    this.length++
    // if (this.head) {
    //   let current = this.head
    //   while (current.next) {
    //     current = current.next
    //   }
    //   current.next = new Node(data)
    // } else {
    //   this.head = new Node(data)
    // }
    // this.length++
  }

  /**
   * Removes the first Node containing the data from the LinekdList.
   * @param {any} data data to remove
   */
  remove(data) {
    let current = this.head
    let prev = undefined
    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = current.next
        } else if (current === this.last) {
          prev.next = current.next
          this.last = prev
        } else {
          prev.next = current.next
        }
        this.length--
        return true
      } else {
        prev = current
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
}

module.exports = LinkedList
