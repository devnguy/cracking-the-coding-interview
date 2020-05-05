/**
 * Write code to partition a linked list around a value x, such that all nodes
 * less than x come before all nodes greater than or equal to x. If x is
 * contained within the list, the values of x only need to be after the
 * elements less than x. The partition element x can appear anywhere in the
 * "right partition"; it does not need to appear between the left and right
 * partitions.
 *
 * Solved 5/5/20. O(n)
 */

const LinkedList = require('./LinkedList')

const partition = (ll, x) => {
  const rightPartition = new LinkedList()
  let current = ll.head
  let leftPartitionEnd = null
  while (current) {
    if (current.data >= x) {
      rightPartition.add(current.data)
    } else {
      if (!leftPartitionEnd) {
        ll.head = current
      } else {
        leftPartitionEnd.next = current
      }
      leftPartitionEnd = current
    }
    current = current.next
  }
  leftPartitionEnd.next = rightPartition.head
}

const ll = new LinkedList()
ll.add(9)
ll.add(8)
ll.add(7)
ll.add(6)
ll.add(5)
ll.add(4)
ll.add(3)
ll.add(2)
ll.add(1)
partition(ll, 5)
ll.display()
