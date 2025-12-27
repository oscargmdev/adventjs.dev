/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  let pos = [0,0]
  let path = new Set()

  while(true) {
    if( (pos[1] <0 || pos[1] >= factory.length) ||
      (pos[0]<0 || pos[0] >= factory[0].length) )
      return 'broken'
    if(path.has(pos[0]+'.'+pos[1])) return 'loop'
    const instruction = factory[pos[1]][pos[0]]
    if(instruction === '.') return 'completed'
    else if(instruction === '>') {
      path.add(pos[0]+'.'+pos[1])
      pos = [pos[0]+1, pos[1]]
    }
    else if(instruction === '<') {
      path.add(pos[0]+'.'+pos[1])
      pos = [pos[0]-1, pos[1]]
    }
    else if(instruction === '^') {
      path.add(pos[0]+'.'+pos[1])
      pos = [pos[0], pos[1]-1]
    }
    else if(instruction === 'v') {
      path.add(pos[0]+'.'+pos[1])
      pos = [pos[0], pos[1]+1]
    }
  }

  return 'completed'
}