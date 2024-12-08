// Puntuación: 5 estrellas

/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  const race = '~'.repeat(length)

  let indice
  let pos = 1
  let array = []
  for(indice of indices) {
    let race_i
    if( indice === 0) race_i = race
    else if( indice === -1) race_i = race.slice(0,-1) + 'r'
    else race_i = race.slice(0,indice) + 'r' + race.slice(indice+1)

    race_i = (' ').repeat(indices.length - pos) + race_i + ' /' + pos
    array.push(race_i)
    pos++
  }

  return array.join('\n')
}
