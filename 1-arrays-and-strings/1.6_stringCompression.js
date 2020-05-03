/**
 * Implement a method to perform basic string compression using the counts of
 * repeated characters. For example, the string aabcccccaaa would become
 * a2b1c5a3. If the "compressed" string would not become smaller than the
 * original string, your method should return the original string. You can
 * assume the string has only uppercase and lowercase letters (a - z).
 *
 * Solved 4/30/20. O(n)
 */

/**
 * This solution builds 'compressed' as we iterate through str. Keep track of
 * prev. When char !== prev, reset count and concat onto compressed.
 *
 * compressed = ''
 * count = 0
 * for char in str
 *   if index === 0 // no prev
 *     compressed += char
 *     count++
 *   else
 *     if char !== prev
 *       compressed += (count + char)
 *       count = 1
 *     else
 *       count++
 *   if index === str.length - 1
 *     compressed += count
 *   prev = char
 *
 */

const stringCompression = (str) => {
  strArray = str.toLowerCase().split('')
  let prev = '0'
  let compressed = ''
  let count = 0
  strArray.forEach((char, index) => {
    if (index === 0) {
      compressed += char
      count++
    } else {
      if (char !== prev) {
        compressed += count + char
        count = 1
      } else {
        count++
      }
    }
    if (index === str.length - 1) {
      compressed += count
    }
    prev = char
  })
  return compressed.length < str.length ? compressed : str
}

console.log(stringCompression('aabcccccaaa'))
