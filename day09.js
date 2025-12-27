/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  const MOVS = {
    'L': {x: -1, y: 0},
    'R': {x: 1, y: 0},
    'U': {x: 0, y: -1},
    'D': {x: 0, y: 1}
  }
  const RENO = '@'
  const REGALO = '*'
  const COLUMNA = '#'

  const STATE_SUCCESS = 'success'
  const STATE_CRASH = 'crash'
  const STATE_FAIL = 'fail'

  const arrBoard = board.slice(1,-1).split('\n')
  const y = arrBoard.findIndex( value => value.includes(RENO))
  const x = arrBoard[y].indexOf(RENO)
  let posReno = {x: x, y: y}

  const checkOffLimits = (pos) =>
    (pos.y < 0 || pos.y === arrBoard.length) ||
    (pos.x < 0 || pos.x === arrBoard[pos.y].length)

  const applyMov = (pos, delta) =>
    ({x: pos.x + delta.x, y: pos.y + delta.y})


  for(let m of moves) {
    const newPos = applyMov(posReno, MOVS[m])

    if( checkOffLimits(newPos) )
      return STATE_CRASH
    if(arrBoard[newPos.y].charAt(newPos.x) === COLUMNA)
      return STATE_CRASH
    if(arrBoard[newPos.y].charAt(newPos.x) === REGALO)
      return STATE_SUCCESS

    posReno = newPos
  }

  return STATE_FAIL
}