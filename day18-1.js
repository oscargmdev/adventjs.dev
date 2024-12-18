// Puntuación: 5 estrellas

/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
  const regexpAll = /(.*)(\+\d{1,2}-\d{3}-\d{3}-\d{3})(.*)/g
  const regexpPhone = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/
  const regexpFound = new RegExp(phone)

  let lines = agenda.match(regexpAll)

  let foundArray = new Array()
  let foundPhone
  for(let line of lines) {
    foundPhone = line.match(regexpPhone)[0]
    if( regexpFound.test(foundPhone) ) {
      foundArray.push(line)
    }
  }

  if( foundArray.length !== 1 ) return null

  let foundValue = regexpAll.exec(foundArray[0]).slice(1).filter( value => value.includes('<'))[0]

  let result = {
    name: foundValue.match(/.*<(.*)>.*/)[1],
    address: foundValue.match(/(.*)<.*>(.*)/)[1].trim()
  }

  return result
}
