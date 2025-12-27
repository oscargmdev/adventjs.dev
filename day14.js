/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {string[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  let result = []
  const backtracking = []
  const recursive = node => {
    if(node === gift) result = backtracking.slice()
    else if(Object(node) === node) {
      for(const key in node) {
        backtracking.push(key)
        recursive(node[key])
        backtracking.pop()
      }
    }
  }

  recursive(workshop)

  return result
}
