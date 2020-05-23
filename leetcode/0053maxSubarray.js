// version 1
const maxSubArray = (a) => {
  if (a.length === 0) return 0
  let maxSoFar = Number.NEGATIVE_INFINITY
  let maxEndingHere = Number.NEGATIVE_INFINITY
  let prev = maxEndingHere
  for (let i = 0, length = a.length; i < length; i++) {
    if (prev + a[i] > a[i]) {
      maxEndingHere = prev + a[i]
    } else {
      maxEndingHere = a[i]
    }
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere
    }
    prev = maxEndingHere
  }
  return maxSoFar
}

// version 2
const maxSubArray2 = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i - 1] + nums[i])
  }
  return Math.max(...nums)
}
