/**
 * Check if a number is a palindrome.
 * Follow up: Can you solve it without converting the number to a string?
 */

const isPalindrome = (x) => {
  a = x.toString().split('')
  return isPalindromeRec(a)
}

const isPalindromeRec = (a) => {
  if (a.length === 1) return true
  if (a.length === 2 && a[0] === a[1]) return true
  if (a[0] !== a[a.length - 1]) return false
  return isPalindromeRec(a.slice(1, a.length - 1))
}

const x = 121
console.log(isPalindrome(x))
