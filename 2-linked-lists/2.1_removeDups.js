/**
 * Write code to remove duplicates from an unsorted linked list.
 * Follow up: How would you solve this problem if a temporrary buffer was not
 * allowed?
 */
const LinkedList = require('./LinkedList')

const removeDuplicates = (ll) => {
  const duplicates = {}
  let current = ll.head
  while (current) {
    if (!duplicates[current.data]) {
      duplicates[current.data] = 1
    } else {
      duplicates[current.data]++
    }
    if (duplicates[current.data] > 1) {
      ll.remove(current.data)
      duplicates[current.data]--
    }
    current = current.next
  }
}

const removeDuplicates2 = (ll) => {
  let current = ll.head
  while (current) {
    let forwardPtr = current.next
    while (forwardPtr) {
      if (forwardPtr.data === current.data) {
        ll.remove(forwardPtr.data)
        current = current.next
      }
      forwardPtr = forwardPtr.next
    }
    current = current.next
  }
}

const ll = new LinkedList()
ll.add(1)
ll.add(2)
ll.add(2)
ll.add(3)
ll.add(3)
ll.add(4)
ll.add(3)
ll.add(4)
ll.add(4)
ll.add(4)

ll.display()
removeDuplicates2(ll)
ll.display()
