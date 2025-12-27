/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  let lettersArray = []
  let lettersMap = {}
  for(const l of toy) {
    const lLower = l.toLowerCase()
    if( ! lettersMap[lLower] ) {
      lettersArray.push(l)
      lettersMap[lLower] = 1
    } else {
      lettersMap[lLower]++
    }
  }
  for(const l of lettersArray) {
    const lLower = l.toLowerCase()
    if(lettersMap[lLower] == 1) return l
  }

  return ''
}