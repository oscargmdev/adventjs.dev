/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
  const WALL = '#', START = 'S', EXIT = 'E'
  const rowLength = maze.length
  const colLength = maze[0].length

  let positionS
  for(let i=0;i<rowLength ;i++)
    for(let j=0;j<colLength;j++)
      if(maze[i][j] === START) positionS = [i,j]
  
  const visited = maze.map(() => Array(colLength).fill(false))

  const queue = []
  queue.push(positionS)

  const inBounds = next => next[0]>-1 && next[0]<rowLength && next[1]>-1 && next[1]<colLength

  const addIfValid = (current, mov) => {
    const next = [current[0] + mov[0], current[1] + mov[1]]

    if( !inBounds(next) ) return 
    if( visited[next[0]][next[1]] ) return
    if( maze[next[0]][next[1]] === WALL) return

    queue.push(next)
    visited[next[0]][next[1]] = true
  }

  const checkExit = curr => maze[curr[0]][curr[1]] === EXIT
  const DIRECTIONS = [[-1,0], [1,0], [0, -1], [0, 1]]

  while(queue.length > 0) {
    const curr = queue.shift()

    if( checkExit(curr) ) return true

    for(const d of DIRECTIONS)
      addIfValid(curr, d)
  }

  return false
}