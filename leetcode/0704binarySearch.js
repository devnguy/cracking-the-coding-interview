const binarySearch = (nums, target) => {
  let lo = 0
  let hi = nums.length - 1
  while (lo <= hi) {
    const mid = Math.trunc((lo + hi) / 2)
    if (target === nums[mid]) {
      return mid
    } else if (target > nums[mid]) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return -1
}

const a = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(binarySearch(a, 2))
