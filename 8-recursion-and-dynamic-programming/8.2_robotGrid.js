/**
 * Imagine a robot sitting on the upper left corner of grid waith r rows and c
 * columns. The robot can only move in two directions, right and down, but
 * certain cells are "off limits" such that the robot cannot step on them.
 * Design an algorithm to find a path for the robot from the top left to the
 * bottom right.
 */

const Stack = require('../3-stacks-and-queues/Stack')

const robotGrid = (grid, row = 0, col = 0, path = null) => {
  if (path === null) path = new Stack()
  if (row >= grid.length || col >= grid[row].length) return false
  // 1 represents off limits.
  if (grid[row][col] === 1) return false
  if (row === grid.length - 1 && col === grid[row].length - 1) {
    path.push({ row, col })
    return true
  }
  if (robotGrid(grid, row + 1, col, path) || robotGrid(grid, row, col + 1, path)) {
    path.push({ row, col })
  }
  return path
}

// testing
const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]

const path = robotGrid(grid)
// path.displayReverse()
let current = path.top
while (current !== null) {
  console.log(`(${current.data.row}, ${current.data.col}), `)
  current = current.next
}
