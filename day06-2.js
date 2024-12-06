// Puntuación: 5 estrellas

/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  const gift = '*'

  const width = box[0].length
  const fullLength = width * box.length

  let find = box.join('').indexOf(gift)

  // o no está o está en la tapa superior
  if( find < width ) return false
  // está en la tapa inferior
  if( find > fullLength - width) return false
  
  // tiene que estar, validamos que no está en los extremos
  let inside = find%width
  if( inside === 0) return false
  if( inside === width - 1) return false

  return true
}
