/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
  if(routes.length === 0) return []
  
  const path = [...routes[0]]
  routes = routes.slice(1)
  
  const routesMap = new Map()
  for(let r of routes) {
    routesMap.set(r[0], r[1])
  }

  while(true) {
    if( routesMap.has(path.at(-1)) )
      path.push(routesMap.get(path.at(-1)))
    else
      break
  }

  return path
}
