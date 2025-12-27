/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
  const WALL = '#', START = 'S', HOUSE = 'G'
  
  const inBounds = (i, j) =>
  i >= 0 && i < map.length && j >= 0 && j < map[0].length

  let startPos
  const houses = new Map()
  for(let i=0;i<map.length;i++)
    for(let j=0;j<map[0].length;j++) {
      if(map[i][j] === START) startPos = [i,j,0]
      if(map[i][j] === HOUSE) houses.set(`${i}.${j}`, Infinity)
    }
  
  const queue = [startPos]
  const visited = new Set()
  visited.add(`${startPos[0]}.${startPos[1]}`)

  const updateHouseDistance = next => {
    const key = `${next[0]}.${next[1]}`
    const storedDist = houses.get(key)
    if (storedDist > next[2]) houses.set(key, next[2])
  }
  
  const addIfValid = (current, mov) => {
    const next = [current[0] + mov[0], current[1] + mov[1], current[2] + 1]
    const [i, j] = next

    if (!inBounds(i, j)) return
    if (visited.has(`${i}.${j}`)) return 
    if (map[i][j] === WALL) return
    
    if (map[i][j] === HOUSE) updateHouseDistance(next)
    queue.push(next)
    visited.add(`${i}.${j}`)
  }

  const DIRECTIONS = [[-1,0], [1,0], [0, -1], [0, 1]]


  while( queue.length > 0 ) {
    const current = queue.shift()
    for(const d of DIRECTIONS)
      addIfValid(current, d)
  }

  let result = 0
  for(const h of houses.values()) {
    if( h === Infinity ) return -1
    result += h
  }
  return result
}
