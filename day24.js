/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {

  const recursive = (root1, root2) => {
    if( !root1 && !root2 ) return true
    if( root1.value !== root2.value ) return false
    
    const left = recursive(root1.left, root2.right)
    const right = recursive(root1.right, root2.left)

    return left && right
  }

  return [recursive(tree1, tree2), tree1.value]
}