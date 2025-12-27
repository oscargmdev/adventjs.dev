// Puntuación: 4 estrellas

function createFrame(names) {

  let length = names.reduce((previous, current) => {
    if (current.length > previous)
      return current.length
    else
      return previous
  }, 0)

  let tapa = '*'.repeat(length + 4)

  let result = names.reduce((previous, current) => {
    return previous + '* ' + current.padEnd(length) + ' *\n'
  }, '\n')

  return tapa + result + tapa
}
