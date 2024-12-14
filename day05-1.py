# Puntuación: 5 estrellas

def organizeShoes(shoes):
  I = 'I', R = 'R'
  paired = []
  unpaired = new Map()

  for shoe in shoes:
    size = shoe.size
    typeValue = shoe.type === I ? -1 : 1

    current = unpaired.get(size) | 0

    unpaired.set(size, current + typeValue)

    if typeValue * current < 0 :
        paired.push(size)

  return [...paired]
