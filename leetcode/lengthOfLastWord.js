/**
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word (last word means the last
 * appearing word if we loop from left to right) in the string.
 *
 * If the last word does not exist, return 0.
 *
 * Note: A word is defined as a maximal substring consisting of non-space
 * characters only.
 */

const lengthOfLastWord = (s) => {
  const a = s.trim().split(' ')
  if (a.length === 0) return 0
  return a[a.length - 1].length
}
