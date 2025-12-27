// Puntuación: 5 estrellas

/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  
  for(let i=s.length-2;i>=0;i--) {
    if( s[i] === s[i+1] ) {
      s = s.substring(0,i) + s.substring(i+2)
    }
  }
  
  return s
}
