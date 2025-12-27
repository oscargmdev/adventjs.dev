/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
  const OPEN = '['
  let max = 0
  let current = 0
  for(let c of s) {
    current += (c === OPEN) ? 1 : -1
    if( max < current ) max = current
    if( current === -1 ) return -1
  } 
  return current === 0 ? max : -1
}