// Puntuación: 5 estrellas

/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  reindeer = reindeer.sort()
  stables = stables.sort()

  let sum = 0
  for(let i=0;i<reindeer.length;i++) {
    sum += Math.abs(reindeer[i] - stables[i])
  }
  return sum
}
