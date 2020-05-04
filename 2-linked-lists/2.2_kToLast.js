/**
 * Implement an algorithm to find the kth to last element of a singly linked
 * list.
 *
 * Solved 5/4/20. O(n)
 */

const LinkedList = require('./LinkedList')

const kToLast = (ll, k) => {
  let index = 0
  let current = ll.head
  const result = []
  while (current) {
    if (index >= k) {
      result.push(current)
    }
    index++
    current = current.next
  }
  return result
}

const ll = new LinkedList()
ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)
ll.add(5)
console.log(kToLast(ll, 2))
