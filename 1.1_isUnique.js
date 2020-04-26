/**
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

// O(n) assuming seen is a hashtable
function isUnique(str) {
  var seen = []
  for (let i = 0; i < str.length; i++) {
    if (seen.includes(str[i])) {
      return false
    } else {
      seen.push(str[i])
    }
  }
  return true
}

console.log(isUnique('apple')) // true
console.log(isUnique('algorithm')) // false
