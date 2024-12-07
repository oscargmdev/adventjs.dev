// Timeout of 1000 ms

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  const RIGHT = ")"
  const LEFT = "("
  let work = packages

  let foundR, foundL
  while( true  ) {
    foundR = work.indexOf(RIGHT)
    if( foundR === -1 ) break
    foundL = work.lastIndexOf(LEFT)

    work = work.substring(0,foundL) + [...work.substring(foundL+1,foundR)].reverse().join('') + work.substring(foundR+1)
  }

  return work
}
