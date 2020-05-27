/**
 * Given an array of integers, replace each element of the array with the
 * product of every other element in the array without using the division
 * operator.
 */

/**
 * Maintain memo of previously calculated products. If a memo exists, return
 * that value. Otherwise, calculate it and store it for retrieval.
 */
const calcProduct = (a, i, direction, memo) => {
  if (i < 0 || i >= a.length) return 1
  if (!memo.hasOwnProperty(i)) {
    memo[i] = { left: null, right: null }
  }
  if (memo[i][direction] === null) {
    const incrememntVal = direction === 'right' ? 1 : -1
    memo[i][direction] = a[i] * calcProduct(a, i + incrememntVal, direction, memo)
  }
  return memo[i][direction]
}

const productOfOtherElements = (a) => {
  const memo = {}
  const products = []
  for (let i = 0; i < a.length; i++) {
    products[i] = calcProduct(a, i - 1, 'left', memo) * calcProduct(a, i + 1, 'right', memo)
  }
  return products
}

const a = [1, 2, 3, 4, 5]
productOfOtherElements(a)
