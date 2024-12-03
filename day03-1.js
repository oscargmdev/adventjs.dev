// Puntuación: 3 estrellas

function organizeInventory(inventory) {
  let result = {}

  inventory.forEach( value => {

    if( !result[value.category]) {
      result[value.category] = {}
    }

    if( !result[value.category][value.name] ) {
      result[value.category][value.name] = 0
    }

    result[value.category][value.name] += value.quantity

  })

  return result
}
