/**
 * Given an array of integers, find all distinct combinations of given length.
 */

const distinctCombinations = (a, k, result = []) => {
  if (a.length < k) return result
  for (let i = 1; i < a.length; i++) {
    result.push([a[0], a[i]])
  }
  return distinctCombinations(a.slice(1), k, result)
}

const a = [1, 2, 3]
const k = 3
console.log(distinctCombinations(a, k))
