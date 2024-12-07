// Puntuación: 1 estrella

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  const RIGHT = ")"
  const LEFT = "("
  let work = packages

  let foundL, foundR
  while( true  ) {
    foundL = work.lastIndexOf(LEFT)
    if( foundL === -1 ) break
    foundR = work.indexOf(RIGHT, foundL)

    work = work.substring(0,foundL) + [...work.substring(foundL+1,foundR)].reverse().join('') + work.substring(foundR+1)
  }

  return work
}
