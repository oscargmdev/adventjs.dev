// Puntuación: 4 estrellas

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  const result = []

  for(const num of nums) {
      for(let i=result.length;i<num;i++)
        result.push(i+1)

      result[num-1] = 0
  }

  return result.filter( (value) => value > 0 )
}
