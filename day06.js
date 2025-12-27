/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const map = {}
  const matched = {}
  for(const g of gloves) {
    const num = g.hand === 'L' ? -1 : 1
    if(
      ( num > 0 && map[g.color] < 0 ) ||
      ( num < 0 && map[g.color] > 0 ) ) {
      matched[g.color] = (matched[g.color] || 0 ) + 1 
    }
    map[g.color] = ( map[g.color] || 0 ) + num
  }

  const result = []
  for( const g of gloves) {
    if( matched[g.color] > 0) {
      result.push(g.color)
      matched[g.color] = matched[g.color] - 1
    }
  }
  return result
}