/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {

  const check = (row, col, direction) => {
    let last = '.'
    let count = 0
    while(row >= 0 && row<board.length && col >=0 && col<board[0].length) {
      const c = board[row][col]
      if( last !== c ) count = 0
      if( c !== '.' ) count++
      if( count > 3 ) return true
      last = c
      row += direction[0]
      col += direction[1]
    }

    return false
  }

  for(let row=0; row<board.length; row++){
    if( check(row, 0, [0,1]) ) return true
    if( check(row, 0, [1,1]) ) return true
    if( check(row, 0, [-1,1]) ) return true  
  }

  for(let col = 0; col<board[0].length; col++) {
    if( check(0,col,[1,0]) ) return true
    if( check(0, col, [1,1]) ) return true
    if( check(0, col, [-1,1]) ) return true
  }

  return false
}
