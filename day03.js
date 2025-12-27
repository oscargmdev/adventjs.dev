/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  if(size<2) return ''
  const tapa = symbol.repeat(size)
  const middle = symbol + ' '.repeat(size-2) + symbol + '\n'
  return tapa + '\n' + middle.repeat(size-2) + tapa
}