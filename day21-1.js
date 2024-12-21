// Puntuación: 3 estrellas

/**
   * @param {{ value: string; left: any; right: any }} tree
   * @returns {number} - Height of the tree.
   */
function treeHeight(tree) {

  function recurse(tree, size) {
    if( ! tree ) return size
    else return Math.max(size+1, recurse(tree.left, size+1), recurse(tree.right, size+1))
  }

  return recurse(tree, 0)
}
