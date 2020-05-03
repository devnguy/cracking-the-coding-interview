/**
 * Given two strings, write a method to decide if one is a permutation of the
 * other
 *
 * Completed 4/26. O(n)
 */

// apple, algorithm

const checkPermutation = (str1, str2) => {
  // init a hashtable
  if (str1.length !== str2.length) {
    return false
  }
  const charSet = {}
  // for char in str1
  //  if char not in hashtable
  //    hashtable.add(char: 1)
  //  else
  //    hashtable[char]++
  strArray1 = str1.split('')
  strArray1.forEach((char) => {
    if (!charSet[char]) {
      charSet[char] = 1
    } else {
      charSet[char]++
    }
  })
  // for char in str2
  //  if char not in hashtable or hashtable[char] is 0
  //    return false
  //  else
  //    hashtable[char]--
  strArray2 = str2.split('')
  strArray2.forEach((char) => {
    if (!charSet[char]) {
      return false
    } else {
      charSet[char]--
    }
  })
  // for key value in hashtable
  //  if hashtable[key] !== 0
  //    return false
  // return true
  for (const key in charSet) {
    if (charSet[key] !== 0) {
      return false
    }
  }
  return true
}

console.log(checkPermutation('apple', 'pealz'))
