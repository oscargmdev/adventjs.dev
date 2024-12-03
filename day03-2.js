// Puntuación: 4 estrellas

function organizeInventory(inventory) {
  let result = {}

  inventory.forEach( value => {
    let { category, name, quantity } = value

    if( !result[category] ) result[category] = {}

    result[category][name] = ( result[category][name] || 0 ) + quantity

  })

  return result
}
