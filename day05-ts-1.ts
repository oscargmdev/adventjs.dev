// Puntuación: 5 estrellas

type Shoe = {
  type: 'I' | 'R'
  size: number
}

function organizeShoes(shoes: Shoe[]): number[] {
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
