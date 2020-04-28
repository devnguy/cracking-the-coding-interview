/**
 * Given a string, write a function to check if it is a permutation of a
 * palindrome. The palindrome does not need to be limited to just dictionary
 * words.
 *
 * solved 4/28/20. O(n)
 */

// str.toLower
// str.split
// for char in str
//   if char not in charSet
//     charSet[char] = 1
//   else
//     charSet[char]++
// maxOddCount = (charSet.length % 2 === 0 ? 0 : 1)
// oddCount = 0
// for val in charSet
//   if val % 2 !== 0
//     oddCount++
//   if oddCount > maxOddCount
//     return false
// return true

const palindromePermutation = (str) => {
  const strArray = str.toLowerCase().replace(/\s/g, '').split('')
  const charSet = {}
  strArray.forEach((char) => {
    if (charSet.hasOwnProperty(char)) {
      charSet[char]++
    } else {
      charSet[char] = 1
    }
  })
  const maxOddCount = charSet.length % 2 === 0 ? 0 : 1
  let oddCount = 0
  for (const char in charSet) {
    if (charSet[char] % 2 !== 0) {
      oddCount++
    }
    if (oddCount > maxOddCount) {
      return false
    }
  }
  return true
}

console.log(palindromePermutation('go hang A Salami Im a LASAGNA hog'))
