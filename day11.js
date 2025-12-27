/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  const CAMERA = '#'
  const GIFT = '*'
  const isCamera = (i,j) => warehouse[i]?.[j] === CAMERA
  const check = (i, j) =>
    isCamera(i-1,j) || isCamera(i,j-1) || 
    isCamera(i+1,j) || isCamera(i,j+1)

  let count = 0
  warehouse.forEach((_, i) => {
    warehouse[i].split('').forEach((value,j) => {
      if( value === GIFT && !check(i,j) ) count++
    });
  });

  return count
}