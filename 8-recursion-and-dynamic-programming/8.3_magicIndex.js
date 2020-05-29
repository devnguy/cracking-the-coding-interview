/**
 * A magic index is an array A[0...n-1] is defined to be an index such that
 * A[i] = i. Given a sorted array of distinct integers, write a method to find
 * a magic index, if one exists, in array A.
 *
 * Follow up: What if the values are not distinct?
 */

const magicIndex = (a, lo = 0, hi = a.length) => {
  if (lo > hi) return false
  const mid = Math.trunc((lo + hi) / 2)
  if (a[mid] === mid) {
    return mid
  } else if (a[mid] < mid) {
    return magicIndex(a, mid + 1, hi)
  } else {
    return magicIndex(a, lo, mid - 1)
  }
}

/**
 * Check for duplicates. Duplicates will either be at a[mid - 1] or a[mid + 1]
 * Call binary search again to maintain log(n) time.
 */
const magicIndex2 = (a, lo = 0, hi = a.length) => {
  if (lo > hi) return false
  const mid = Math.trunc((lo + hi) / 2)
  if (a[mid] === mid) {
    return mid
  } else if (a[mid] < mid) {
    // Check for dup. If magic index found, return it. Otherwise, continue as
    // normally.
    if (a[mid - 1] === a[mid]) {
      const result = magicIndex2(a, lo, mid - 1)
      if (result) return result
    }
    return magicIndex2(a, mid + 1, hi)
  } else {
    if (a[mid + 1] === a[mid]) {
      const result = magicIndex2(a, mid + 1, hi)
      if (result) return result
    }
    return magicIndex2(a, lo, mid - 1)
  }
}

const a = [-1, 1, 3, 10, 10, 10]
console.log(magicIndex2(a))
