// Puntuación: 5 estrellas

/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {

  const leftTraversal = []

  function traversalLeft(root) {
    if (! root) return
    
    leftTraversal.push(root.value)

    traversalLeft(root.left)
    traversalLeft(root.right)
  }

  const rightTraversal = []

  function traversalRight(root) {
    if (! root ) return
    
    rightTraversal.push(root.value)

    traversalRight(root.right)
    traversalRight(root.left)
  }

  traversalLeft(tree1)
  traversalRight(tree2)

  let result = true
  for(let i=0;result && i<leftTraversal.length;i++) {
    if(leftTraversal[i] !== rightTraversal[i]) result = false
  }

  return [result, tree1.value]
}
