// Puntuación: 5 estrellas

/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  let table = new Array()
  let sizes = new Array()

  function firstUpperCase(str) {
    return str[0].toUpperCase() + str.substring(1)
  }

  // Calculamos la cabecera a partir del primer registro sacando el tamaño de columna
  let arrayRow = new Array()
  for(let key in data[0]) {
    arrayRow.push( firstUpperCase(key) )
    sizes.push(key.length)
  }
  table.push(arrayRow)

  // calculamos las filas normales sacando el tamaño de columna
  for(let row of data) {
    arrayRow = new Array()
    let j = 0
    for(let key in row) {
      let value = "" + row[key]
      arrayRow.push(value)
      sizes[j] = Math.max(sizes[j], value.length)
      j++
    }
    table.push(arrayRow)
  }

  // Preparamos la presentación

  let separador = '+'
  for(let i in sizes) {
    separador += '-'.repeat(sizes[i]+2) + '+'
  }

  let lines = new Array()
  for(let row of table) {
    let line = '|'
    for(let i in sizes) {
      line += ' ' + row[i] + ' '.repeat(sizes[i] - row[i].length) + ' |'
    }
    lines.push(line)
  }

  const LF = '\n'

  let result = separador + LF
  result += lines[0] + LF
  result += separador + LF
  result += lines.slice(1).join(LF) + LF
  result += separador

  return result
}
