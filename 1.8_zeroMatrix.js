/**
 * Write an algorithm such that if an element in an MxN matrix is 0, its
 * entire row and column are set to 0.
 *
 * Solved 5/2/20. Hint used. O(n^2)
 */

const zeroMatrix = (a) => {
  const m = a.length
  const n = a[0].length
  const zeroColumns = {}
  const zeroRows = {}

  // Find cells containing 0s
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (a[i][j] === 0) {
        if (!zeroRows.hasOwnProperty(i)) {
          zeroRows[i] = true
        }
        if (!zeroColumns.hasOwnProperty(j)) {
          zeroColumns[j] = true
        }
      }
    }
  }
  // Modify the matrix, setting rows/cols to 0 based on 0 cells found
  for (const key in zeroRows) {
    a[parseInt(key, 10)].fill(0)
  }
  for (const key in zeroColumns) {
    for (let i = 0; i < m; i++) {
      a[i][parseInt(key, 10)] = 0
    }
  }
}

a = [
  [7, 0, 3, 0],
  [1, 0, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
]

zeroMatrix(a)

console.log(a)
