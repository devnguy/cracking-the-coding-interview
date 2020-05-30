/**
 * Write a recursive function to multiply two positive integers without using
 * the * operator. You can use addition, subtraction, and bit shifting, but
 * you should minimize the number of those operations.
 */

const recursiveMultiply = (a, b) => {
  if (a === 1) {
    return b
  } else {
    return b + recursiveMultiply(a - 1, b)
  }
}

console.log(recursiveMultiply(10, 10))
