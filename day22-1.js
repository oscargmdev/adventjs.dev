// Puntuación: 5 estrellas

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {

  let collections = []

  function recursive(curGifts, moreGifts, depth) {
    if( curGifts.length === depth ) {
      collections.push([...curGifts])
    } else {
      for(let i=0;i<moreGifts.length;i++) {
        recursive([...curGifts, moreGifts[i]], moreGifts.slice(i+1), depth)
      }
    }
  }

  for(let d=0;d<gifts.length;d++) {
    // depth d means d+1 elements
    recursive([], gifts, d+1)
  }

  return collections
}
