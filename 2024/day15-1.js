// Puntuación: 5 estrellas

/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  let table = new Array()
  let arrayHead = new Array()

  for(let row of data) {
    if( table.length === 0 ) {
      for(let key in row) {
        let value = key[0].toUpperCase() + key.substring(1)
        arrayHead.push(value)
      }
      table.push(arrayHead)
    }
    let arrayRow = new Array()
    for(let key in row) {
      arrayRow.push("" + row[key])
    }
    table.push(arrayRow)
  }

  let columnSize = new Array()
  for(let i=0;i<table[0].length;i++) {
    columnSize[i] = table[0][i].length
  }

  for(let row of table) {
    for(let i=0;i<row.length;i++) {
      if( columnSize[i] < row[i].length ) {
        columnSize[i] = row[i].length
      }
    }
  }

  let separador = '+'
  for(let i=0;i<columnSize.length;i++) {
    separador += '-'.repeat(columnSize[i]+2) + '+'
  }

  let lines = new Array()
  for(let row of table) {
    let line = '|'
    for(let i=0;i<row.length;i++) {
      line += ' ' + row[i] + ' '.repeat(columnSize[i]- row[i].length) + ' |'
    }
    lines.push(line)
  }

  let result = separador + '\n' + lines[0] + '\n' + separador + '\n'

  for(let i=1;i<lines.length;i++) {
    result += lines[i] + '\n'
  }

  result += separador

  return result
}
