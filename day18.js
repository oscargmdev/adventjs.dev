/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {

  const checkCol = (row, col) => 
    row+3<board.length &&
    board[row][col] === board[row+1][col] &&
    board[row][col] === board[row+2][col] &&
    board[row][col] === board[row+3][col]

  const checkRow = (row, col) =>
    col+3<board[0].length &&
    board[row][col] === board[row][col+1] &&
    board[row][col] === board[row][col+2] &&
    board[row][col] === board[row][col+3]
 
  const checkDiag1 = (row, col) =>
    row+3<board[0].length && col+3<board.length &&
    board[row][col] === board[row+1][col+1] &&
    board[row][col] === board[row+2][col+2] &&
    board[row][col] === board[row+3][col+3]
  
  const checkDiag2 = (row, col) =>
    row>=3 && col+3<board.length &&
    board[row][col] === board[row-1][col+1] &&
    board[row][col] === board[row-2][col+2] &&
    board[row][col] === board[row-3][col+3]
  
  for(let row=0; row<board.length; row++) {
    for(let col=0; col<board[0].length; col++) {
      if( board[row][col] === '.') continue
      if( checkRow(row, col) ) return true
      if( checkCol(row, col) ) return true
      if( checkDiag1(row, col) ) return true
      if( checkDiag2(row, col) ) return true
    }
  }

  return false
}
