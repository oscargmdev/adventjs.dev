// Puntuacion: 4 estrellas
/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {

  const map = {
    '+': (current, subcode, i) => [current+1, i],
    '-': (current, subcode, i) => [current-1, i],
    '[': (current, subcode, i) => [0, subcode.indexOf(']', i)],
    '{': (current, subcode, i) => {
      const next = subcode.indexOf('}', i+1)

      const inside = current === 0 ? 0 : executeRoutine(current, subcode.substring(i+1, next))

      return [inside, next]
    }
  }

  function executeRoutine(subresult, subcode) {

    for(let i=0;i<subcode.length;i++) {
      const action = map[subcode[i]]
      if( action )
        [subresult, i] = action(subresult, subcode, i)
    }

    return subresult
  }

  return executeRoutine(0, code)
}
  
