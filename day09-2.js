// Puntuación: 4 estrellas

/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {

  let head = null

  let x, y
  for(y=0;y<board.length;y++) {
    x = board[y].indexOf('@')
    if( x > -1) break
  }

  const movements = {
    'U': { dx: 0, dy: -1},
    'D': { dx: 0, dy: 1},
    'L': { dx: -1, dy: 0},
    'R': { dx: 1, dy: 0}
  }

  let {dx, dy} = movements[mov]
  x += dx
  y += dy

  let value = (board[y] ?? undefined) ? board[y][x] ?? 'o' : 'o'

  if( value === 'o') return 'crash'
  if( value === '*') return 'eat'

  return 'none'
}
