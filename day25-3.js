// Puntuación: 5 estrellas

/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  let result = 0
  const stack = []
  for(let i=0;i<code.length;i++) {
    switch( code[i] ) {
      case '+':
        result++
        break
      case '-':
        result--
        break
      case '[':
        result = 0
        i = code.indexOf(']', i)
        break
      case '{':
        stack.push(result)
        break
      case '}':
        result = stack.pop() === 0 ? 0 : result
        break
    }
  }

  return result
}
