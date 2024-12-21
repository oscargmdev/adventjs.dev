// Puntuación: 5 estrellas

/**
   * @param {{ value: string; left: any; right: any }} tree
   * @returns {number} - Height of the tree.
   */
function treeHeight(tree) {
  if( ! tree ) return 0

  return 1 + Math.max(
    treeHeight(tree.left),
    treeHeight(tree.right))
}
