// Puntuación: 5 + 3 estreellas
/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  const r = []
  for (const ginfo of giftsToProduce) {
    if (Number.isInteger(ginfo.quantity) && ginfo.quantity > 0)
      r.push(...new Array(ginfo.quantity).fill(ginfo.toy))
  }
  return r
}