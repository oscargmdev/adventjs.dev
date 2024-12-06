// Puntuación: 4 estrellas

/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  const gift = '*'

  // validamos que no está ni en la tapa ni en el fondo
  if( box[0].includes(gift) ) return false
  if( box.at(-1).includes(gift)) return false

  let inside = false

  for(const row of box) {
    // validamos que no está en los laterales
    if(row.startsWith(gift)) return false
    if(row.endsWith(gift)) return false

    // revisamos si está dentro o no
    if(row.includes(gift)) return true
  }

  return inside
}
