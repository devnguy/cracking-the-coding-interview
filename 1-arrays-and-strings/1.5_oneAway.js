/**
 * There are three types of edits that can be performed on strings: insert a
 * character, remove a character or replace a character. Given two strings,
 * write a function to check if they are one edit (or zero edits) away.
 *
 * Solved 4/29/20. O(n)
 */

const oneAway = (str1, str2) => {
  a = str1.split('')
  b = str2.split('')
  // x is str1 index, y is str2 index
  let x = 0
  let y = 0
  let editCounter = 0
  const length = a.length >= b.length ? a.length : b.length
  for (let i = 0; i < length; i++) {
    if (a[x] !== b[y]) {
      editCounter++
      if (editCounter > 1) {
        return false
      }
      if (a.length > b.length) {
        x++
      } else if (b.length > a.length) {
        y++
      } else {
        x++
        y++
      }
    } else {
      x++
      y++
    }
  }
  return true
}

console.log(oneAway('pale', 'bale'))
