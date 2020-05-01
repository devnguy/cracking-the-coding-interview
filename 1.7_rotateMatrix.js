/**
 * Given an image represented by an NxN matrix, where each pixel in the image
 * is 4 bytes, write a method to rotate the image by 90 degrees. Can you do
 * this in place?
 *
 * Solution: Swap rows with columns
 * Solved 5/1/20. Summation from j = 0 to n -> O(n^2)
 *
 */

const rotateMatrix = (a) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
      let temp = a[i][j]
      a[i][j] = a[j][i]
      a[j][i] = temp
    }
  }
}

const a = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
]

rotateMatrix(a)
console.log(a)
