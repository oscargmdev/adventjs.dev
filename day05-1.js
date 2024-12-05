// Puntuación: 5 estrellas

/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
  const I = 'I', R = 'R'
  let paired = []
  let unpaired = new Map()

  shoes.forEach( value => {
    let size = value.size
    let typeValue = value.type === I ? -1 : 1

    let current = unpaired.get(size) | 0

    unpaired.set(size, current + typeValue)

    if( typeValue * current < 0 ) {
        paired.push(size)
    }
  })

  return [...paired]
}
