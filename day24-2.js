// Puntuación: 5 estrellas

/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {

  function traversal(root, dir, store) {
    if (! root) return
    
    store.push(root.value)

    dir > 0 ?
      traversal(root.left,  dir, store) :
      traversal(root.right, dir, store)

    dir > 0 ?
      traversal(root.right, dir, store) :
      traversal(root.left,  dir, store)
  }

  const leftTraversal = []
  const rightTraversal = []

  traversal(tree1,  1, leftTraversal)
  traversal(tree2, -1, rightTraversal)

  let result = true
  for(let i=0;result && i<leftTraversal.length;i++) {
    if(leftTraversal[i] !== rightTraversal[i]) result = false
  }

  return [result, tree1.value]
}
