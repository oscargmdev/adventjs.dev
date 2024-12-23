// Puntuación: 4 estrellas

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  let max = Math.max(...nums)

  const result = [] 
  for(let i=0;i<max;i++) {
    if( nums.indexOf(i+1) === -1 )
      result.push(i+1)
  }

  return result
}
