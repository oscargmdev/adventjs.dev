/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {

  const work = warehouse.map(inner => [...inner]);

  const drop = column => {
    for(let i=work.length-1;i>=0;i--)
    {
      if(work[i][column] === '.') {
        work[i][column] = '#'
        break
      }
    }
  }

  for(const d of drops) {
    drop(d)
    if( work.at(-1).every((value) => value === '#') ) {
      work.unshift(Array(work[0].length).fill('.'))
      work.splice(work.length-1,1)
    }
  }

  return work
}