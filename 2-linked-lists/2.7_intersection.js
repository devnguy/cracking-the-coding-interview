/**
 * Given two (singly) linked lists, determine if the two lists intersect.
 * Return the intersecting node. Note that the intersection is defined based
 * on reference, not value. That is, if the kth node of the first linked list
 * is the exact same node (by reference) as the jth node of the second linked
 * list, then they are intersecting.
 *
 * 1. Get length and tail reference of both lists
 * 2. If both tails are not equal, then there is no intersection, return
 * 3. Get the difference of list lengths so that traversal can start at the
 *    same node relative to the tail
 * 4. Traverse both lists until the intersection node is found
 *
 * Solved 5/8/20, 1 hint used. O(n)
 */

const LinekdList = require('./LinkedList')

const intersection = (a, b) => {
  const aData = getListData(a)
  const bData = getListData(b)
  if (aData.tail !== bData.tail) {
    return
  }
  let aPtr = 0
  let bPtr = 0
  if (aData.length > bData.length) {
    bPtr = aData.length - bData.length
  } else if (aData.length < bData.length) {
    aPtr = bData.length - aData.length
  }
  let aCurrent = a.head
  let bCurrent = b.head
  while (aPtr !== bPtr) {
    if (aPtr < bPtr) {
      aCurrent = aCurrent.next
      aPtr++
    } else if (bPtr < aPtr) {
      bCurrent = bCurrent.next
      bPtr++
    }
  }
  while (aCurrent && bCurrent) {
    if (aCurrent === bCurrent) {
      return aCurrent
    }
    aCurrent = aCurrent.next
    bCurrent = bCurrent.next
  }
}

const getListData = (ll) => {
  let curr = ll.head
  const result = {
    tail: undefined,
    length: 0,
  }
  while (curr) {
    if (curr.next === null) {
      result.tail = curr
    }
    result.length++
    curr = curr.next
  }
  return result
}
