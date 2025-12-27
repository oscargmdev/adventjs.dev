// Puntuación: 4 estrellas

function organizeInventory(inventory) {
  const result = {}

  inventory.forEach(({ category, name, quantity }) => {
    result[category] = result[category] || {}
    result[category][name] = (result[category][name] || 0) + quantity
  })

  return result
}
