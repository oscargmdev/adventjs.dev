/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  let tree = ''
  let nextOrnamentPos = frequency -1
  let pos = 0
  for(let i=0;i<height;i++) {
    tree += ' '.repeat(height-i-1)
    for(let j=0;j<2*i+1;j++) {
      if( pos === nextOrnamentPos ) {
        tree += ornament
        nextOrnamentPos += frequency
      } else {
        tree += '*'
      }
      pos++
    }
    tree += '\n'
  }
  tree += ' '.repeat(height-1) + '#'
  return tree
}
