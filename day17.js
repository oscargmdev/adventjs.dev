/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  const checkRow = row => {
    let last = '.'
    let count = 0
    for(const c of row) {
      if( last !== c ) count = 0
      last = c
      if(c !== '.') count++
      if(count >3) return count
    }
    return count
  }

  for(const row of board)
    if(checkRow(row) > 3) return true

  const trasposed = board[0].map((_,i)=>board.map(row => row[i]).join(''))

  for(const row of trasposed)
    if(checkRow(row) >3) return true
  // Code here
  return false
}
