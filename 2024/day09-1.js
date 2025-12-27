// Puntuación: 1 estrella

/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  const UP = 'U'
  const DOWN = 'D'
  const RIGHT = 'R'
  const LEFT = 'L'

  function locateHead(board) {
    const HEAD = '@'
    let x, y
    for(y=0;y<board.length;y++) {
      x = board[y].indexOf(HEAD)
      if( x > -1 ) return {x: x, y: y}
    }
  }

  function check(board, x, y) {
    const VAGON = 'o'
    const FRUTA = '*'
    const CRASH = 'crash'
    const EAT = 'eat'
    const NONE = 'none'

    if( y < 0 || 
        x < 0 || 
        y === board.length || 
        x === board[0].length ) return CRASH
    if( board[y][x] === FRUTA ) return EAT
    if( board[y][x] === VAGON ) return CRASH
    return NONE
  }

  let {x, y} = locateHead(board)
  let dx=0, dy=0

  switch(mov) {
    case UP:
      dy = -1
      break
    case DOWN:
      dy = 1
      break
    case LEFT:
      dx = -1
      break
    case RIGHT:
      dx = 1
      break
  }

  return check(board, x+dx, y+dy)
}
