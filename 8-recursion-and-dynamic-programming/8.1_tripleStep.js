/**
 * A child is running up a staircase with n steps and can hop either 1 step, 2
 * steps, or 3 steps at a time. Implement a method to count how many possible
 * ways the child can run up the stairs.
 */

const tripleStep = (n, memo = {}) => {
  if (n < 0) {
    return 0
  } else if (n === 0) {
    return 1
  } else {
    if (!memo.hasOwnProperty(n)) {
      memo[n] = tripleStep(n - 3, memo) + tripleStep(n - 2, memo) + tripleStep(n - 1, memo)
    }
    return memo[n]
  }
}

console.log(tripleStep(5))
