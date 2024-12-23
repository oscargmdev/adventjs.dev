// Puntuación: 4 estrellas

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  const numsSet = new Set(nums)
  const max = Math.max(...nums)

  const full = Array.from({length: max}, (_, i) => i+1 )

  return full.filter(value => !numsSet.has(value))
}
