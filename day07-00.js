/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  const RIGHT = ")"
  const LEFT = "("
  let work = packages

  let first = work.indexOf(LEFT)
  if( first === -1 ) return work

  // separamos por ( o )
  let array1 = work.split(RIGHT)
  let array2 = array1[0].split(LEFT)
  let array = array2.concat(array1.slice(1))
  let half = array1.length

  for(let i=1;i<half;i=i+2) {
    if( i === array.length-1-i) {
      let unique = array[i]
      array[i] = [...unique].reverse().join('')  
    } else {
      let left = array[i]
      let right = array[array.length-1-i]
      array[i] = [...right].reverse().join('')
      array[array.length-1-i] = [...left].reverse().join('')
    }
  }

  return array.join('')
}
