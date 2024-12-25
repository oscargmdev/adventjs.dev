// Puntuación: 4 estrellas

/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {

  function executeRoutine(currentresult, subcode) {
    let subresult = currentresult
    for(let i=0;i<subcode.length;i++) {
      if( subcode[i] === '>' ) continue
      if( subcode[i] === '+' ) subresult++
      if( subcode[i] === '-' ) subresult--
      if( subcode[i] === '{') {
        const next = subcode.indexOf('}', i)
        if( subresult === 0 ) {
          i=next
          continue
        } else {
          subresult = executeRoutine(subresult, subcode.substring(i+1,next))
          i=next
          continue
        }
      }
      if( subcode[i] === '[') {
        const next = subcode.indexOf(']', i)
        subresult = 0
        i=next
        continue
      }
    }

    return subresult
  }

  return executeRoutine(0, code)
}
