/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {
  const drop = column => {
    for(let i=warehouse.length-1;i>=0;i--)
    {
      if(warehouse[i][column] === '.') {
        warehouse[i][column] = '#'
        break
      }
    }
  }

  for(const d of drops)
    drop(d)

  return warehouse
}
