// Puntuación: 5 estrellas

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {

  function at(i,j) {
    return (grid[i]?.[j]) ? 1 : 0
  }

  function sum(i,j) {
    return at(i-1,j-1) + at(i-1, j) + at(i-1, j+1) +
      at(i,j-1) + at(i,j+1) +
      at(i+1, j-1) + at(i+1, j) + at(i+1, j+1)
  }

  return grid.map((row, i) => row.map((_, j) => sum(i, j)))
}
