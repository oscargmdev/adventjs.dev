// Puntuación: 5 estrellas

/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {

  const getTime = t => new Number(t[1], 10)*3600 + new Number(t[2], 10)*60 + new Number(t[3], 10)

  const regex = /(\d\d):(\d\d):(\d\d)/
  const t = regex.exec(totalTime)
  const tSec = getTime(t)
  const w = regex.exec(timeWorked)
  const wSec = getTime(w)

  return Math.round(100 * wSec / tSec) + '%' ;
}
  
