// Puntuación: 5 estrellas

/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {

  let prices = new Map()
  prices.set('*', 1)
  prices.set('o', 5)
  prices.set('^', 10)
  prices.set('#', 50)
  prices.set('@', 100)

  let sum = 0
  let previousValue = 0
  let currentValue
  for(let i=0; i<ornaments.length; i++) {
    currentValue = prices.get(ornaments.charAt(i))
    if( currentValue === undefined ) return undefined
    if( currentValue > previousValue ) {
      sum += currentValue + previousValue * -2
    } else {
      sum += currentValue
    }

    previousValue = currentValue
  }

  return sum
}
