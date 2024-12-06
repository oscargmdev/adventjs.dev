// Puntuación: 4 estrellas

type Inventory = Array<
  { name: string, quantity: number, category: string }
>

function organizeInventory(inventory: Inventory): object {
  const result = {}

  inventory.forEach(({ category, name, quantity }) => {
    result[category] = result[category] || {};
    result[category][name] = (result[category][name] || 0) + quantity;
  });

  return result;
}
