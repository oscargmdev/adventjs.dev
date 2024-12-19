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

  let resp = new Array()

  for(let i=0;i<grid.length;i++) {
    resp.push(new Array())
    for(let j=0;j<grid[i].length;j++) {
      resp[i].push( sum(i,j) )
    }
  }

  return resp
}