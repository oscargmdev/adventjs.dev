/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
  let count = 0
  let weight = 0
  for(const g of gifts) {
    if( g > maxWeight ) return null
    if( weight + g > maxWeight) {
      count++
      weight = 0
    }

    weight += g
  }

  return weight > 0 ? count+1 : 0
}
