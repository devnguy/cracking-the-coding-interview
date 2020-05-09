/**
 * Given a circular linked list, implement an algorithm that returns the node
 * at the beginning of the loop.
 * A circular linked list is one in which a node's next pointer points to an
 * earlier node, so as to make a loop in the linked list.
 */

const LinkedList = require('./LinkedList')

const loopDetection = (ll) => {
  let current = ll.head
  const seen = new WeakMap()
  while (current) {
    if (seen.has(current)) {
      return current
    } else {
      seen.set(current, current.data) // Using arbitrary value
      current = current.next
    }
  }
}

const ll = new LinkedList()
ll.add(1)
ll.add(2)
ll.add(3)
ll.add(1)
ll.add(5)
console.log(loopDetection(ll)) // false
