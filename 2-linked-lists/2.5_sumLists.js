/**
 * You have two numbers represented by a linked list, where each node contains
 * a single digit. The digits are stored in reverse order, such that the 1's
 * digit is at the head of the list. Write a function that adds the two
 * numbers and returns the sum as a linked list.
 *
 * Follow up:
 * Suppose the digits are stored in forward order. Repeat the above problem.
 *
 * Solved 5/6/20. O(n)
 */

const LinkedList = require('./LinkedList')

const sumLists = (a, b) => {
  let aCurrent = a.head
  let bCurrent = b.head
  const sumList = new LinkedList()
  while (aCurrent && bCurrent) {
    sumList.add(aCurrent.data + bCurrent.data)
    aCurrent = aCurrent.next
    bCurrent = bCurrent.next
  }
  // If a and b contain different number of digits
  if (aCurrent && !bCurrent) {
    sumList.add(aCurrent.data)
  } else if (!aCurrent && bCurrent) {
    sumList.add(bCurrent.data)
  }
  // Handle adding carry amount
  let current = sumList.head
  let carry = 0
  while (current) {
    current.data += carry
    if (current.data >= 10) {
      current.data -= 10
      carry = 1
      if (current.next === null) {
        sumList.add(0)
      }
    } else {
      carry = 0
    }
    current = current.next
  }
  return sumList
}

const sumLists2 = (a, b) => {
  let aCurrent = a.head
  let bCurrent = b.head
  const sumArray = []
  while (aCurrent && bCurrent) {
    sumArray.push(aCurrent.data + bCurrent.data)
    aCurrent = aCurrent.next
    bCurrent = bCurrent.next
  }
  // If a and b contain different number of digits
  if (aCurrent && !bCurrent) {
    sumArray.push(aCurrent.data)
  } else if (!aCurrent && bCurrent) {
    sumArray.push(bCurrent.data)
  }

  // Iterate through sumArray backwards to handle carry additiion
  let carry = 0
  for (let i = sumArray.length - 1; i >= 0; i--) {
    sumArray[i] += carry
    if (sumArray[i] >= 10) {
      sumArray[i] -= 10
      carry = 1
      if (i === 0) {
        sumArray.unshift(0)
        i++
      }
    } else {
      carry = 0
    }
  }

  const sumList = new LinkedList()
  sumArray.forEach((digit) => {
    sumList.add(digit)
  })
  return sumList
}

const a = new LinkedList()
const b = new LinkedList()
a.add(9)
a.add(1)
a.add(7)
b.add(2)
b.add(9)
b.add(5)
const sum = sumLists2(a, b)
sum.display()
