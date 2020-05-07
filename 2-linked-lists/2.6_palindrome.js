/**
 * Implement a function to check if a linked list is a palindrome.
 *
 * Solved 5/7/20. O(n/2) = O(n)
 * I cheated. Doubly linked list was not the solution. Reverse the linked list
 * and compare reversed with original.
 */

const DLinkedList = require('./DLinkedList')

const palindrome = (ll) => {
  let headPtr = ll.head
  let tailPtr = ll.last
  let counter = 0
  let mid = Math.floor((ll.length - 1) / 2)
  while (counter <= mid) {
    if (headPtr.data !== tailPtr.data) {
      return false
    }
    headPtr = headPtr.next
    tailPtr = tailPtr.prev
    counter++
  }
  return true
}

const ll = new DLinkedList()
ll.add('t')
ll.add('a')
ll.add('o')
ll.add('o')
ll.add('c')
ll.add('a')
ll.add('t')
console.log(palindrome(ll))
