// Puntuación: 5 estrellas

/** @param {string[]} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  let str = moves
  str = str.replaceAll('*L', 'LL')
  str = str.replaceAll('*R', 'RR')
  str = str.replaceAll('*U', 'UU')
  str = str.replaceAll('*D', 'DD')
  str = str.replaceAll('!L', 'R')
  str = str.replaceAll('!R', 'L')
  str = str.replaceAll('!D', 'U')
  str = str.replaceAll('!U', 'D')

  let p
  while( (p = str.indexOf('?')) > -1 ) {
    let previous = str.substring(0,p)
    let letter = str[p+1]
    let after = str.substring(p+2)

    // si está repetida no la añadimos
    if( previous.indexOf(letter) > -1) {
      letter = ''
    }

    str = previous + letter + after
  }

  moves = str.split('')

  let pos = [0, 0]

  for(let move of moves) {
    if( move === 'L') pos[0] = pos[0] - 1
    if( move === 'R') pos[0] = pos[0] + 1
    if( move === 'U') pos[1] = pos[1] + 1
    if( move === 'D') pos[1] = pos[1] - 1
  }

  return (pos[0] === 0 && pos[1] === 0) ? true : pos
}
