/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  const BACK = '<'
  const PLUS = '+'
  const MINUS = '-'
  const digits = code.slice(1,-1).split('][')
  if(digits.length !== 4) return null
  if(digits.at(0) === BACK) return null

  const result = []
  for (const d of digits) {
    if( d === BACK ) {
      result.push(result.at(-1))
      continue
    }

    let n = Number.parseInt(d.at(0))
    for(const op of d.slice(1)) {
      if( op === PLUS) n = (n + 1) % 10
      if( op === MINUS) n = (n - 1 + 10) % 10
    }
    result.push(n)
  }

  return result.join('')
}
