// Puntuación: 4 estrellas

/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  
  let found
  do {
    found = false
    for(let i=0;i<s.length-1;i++) {
      if( s[i] === s[i+1] ) {
        s = s.substring(0,i) + s.substring(i+2)
        found = true
        break
      }
    }
  }
  while (found)
  return s
}
