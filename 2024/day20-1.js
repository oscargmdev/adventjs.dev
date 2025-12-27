// Puntuación: 5 estrellas

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {

  let receivedObj = {}
  for(let gift of received) {
    receivedObj[gift] = (receivedObj[gift] | 0) + 1
  }

  let expectedObj = {}
  for(let gift of expected) {
    expectedObj[gift] = (expectedObj[gift] | 0) + 1
  }

  let missing = {}
  for(let gift of Object.keys(expectedObj)) {
    if( ! receivedObj[gift] ) {
      missing[gift] = expectedObj[gift]
    } else if( (! receivedObj[gift]) || receivedObj[gift] < expectedObj[gift] ) {
      missing[gift] = expectedObj[gift] - receivedObj[gift] | 0
    }
  }

  let extra = {}
  for(let gift of Object.keys(receivedObj)) {
    if( ! expectedObj[gift] ) {
      extra[gift] = receivedObj[gift]
    } else if( expectedObj[gift] < receivedObj[gift] ) {
      extra[gift] = receivedObj[gift] - expectedObj[gift]
    }
  }

  return {
    missing: missing,
    extra: extra
  }
}
