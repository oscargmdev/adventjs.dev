// Puntuación: 5 estrellas

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  const numsSet = new Set(nums)
  const max = Math.max(...numsSet)
  const full = new Set(Array.from({length: max}, (_, i) => i+1 ))

  return [...full.difference(numsSet)]
}
