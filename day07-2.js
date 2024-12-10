// Puntuación: 5 estrellas

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  let workArray = [...packages]

  function reverseArray(array, begin, end) {
    let subArray = array.slice(begin, end)
    subArray.reverse()
    array.splice(begin, end - begin, ...subArray)
    return array
  }

  let foundL, foundR

  while( (foundL = workArray.lastIndexOf('(')) > -1 ) {
    foundR = workArray.indexOf(')', foundL)

    workArray = reverseArray(workArray, foundL+1, foundR)
    workArray[foundL] = ''
    workArray[foundR] = ''
  }

  return workArray.join('')
}
