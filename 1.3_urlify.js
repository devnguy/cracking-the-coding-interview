/**
 * Write a method to replace all spaces in a string with '%20'. You may assume
 * that the string has sufficient space at the end to hold the additional
 * characters, and that you are given the "true" length of the string.
 *
 * Solved 4/27/20. O(n)
 */

/**
 * tokenize the string
 * store each word in a hash table
 * init cursor = 0
 * space = '%20'
 * for word in words
 *   for char in word
 *     str[cursor] = char
 *     cursor++
 *   if word is not last word in words
 *     for char in space
 *       str[cursor] = char
 *       cursor++
 */

const urlify = (str) => {
  const words = str.split(' ')
  const strArray = str.split('')
  let cursor = 0
  const space = '%20'
  words.forEach((word, index) => {
    for (let i = 0; i < word.length; i++) {
      strArray[cursor] = word.charAt(i)
      cursor++
    }
    if (index !== words.length - 1) {
      for (let j = 0; j < space.length; j++) {
        strArray[cursor] = space.charAt(j)
        cursor++
      }
    }
  })
  return strArray.join('')
}

let str = 'Mr John Smith\0\0\0\0'
console.log(urlify(str))
