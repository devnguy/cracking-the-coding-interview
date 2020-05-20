/**
 * You are given two sorted arrays, A and B, where A has a large enough buffer
 * at the end to hold B. Write a method to merge B into A in sorted order.
 */

function sortedMerge(a, b) {
  const helperArray = a.filter((el) => {
    if (el !== null) return el
  })
  let i = 0,
    j = 0,
    k = 0
  while (j < helperArray.length && k < b.length) {
    if (helperArray[j] <= b[k]) {
      a[i] = helperArray[j]
      j++
    } else {
      a[i] = b[k]
      k++
    }
    i++
  }
  // Copy the remaining elements into a.
  while (j < helperArray.length) {
    a[i] = helperArray[j]
    i++
    j++
  }
  while (k < b.length) {
    a[i] = b[k]
    i++
    k++
  }
}

const a = [1, 2, 3, 4, 5, null, null, null, null]
const b = [3, 4, 5, 6]
sortedMerge(a, b)

console.log(a)
