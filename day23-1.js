// Puntuación: 3 estrellas

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  const unique = [...new Set(nums)]
  const sorted = unique.toSorted((n1,n2) => n1-n2)
  const result = [] 

  for(let i=0;i<sorted.at(-1);i++) {
    if(sorted.indexOf(i+1) === -1) {
      result.push(i+1)
    }
  }

  return result
}
