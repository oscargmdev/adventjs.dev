/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {
  if( data.length === 0 ) return ''

  data.sort((a,b) => (typeof a[sortBy] === 'number') ? a[sortBy] - b[sortBy] : a[sortBy].localeCompare(b[sortBy]))

  const size = Object.keys(data[0]).length
  const widths = new Array(size).fill(0)
  
  const table = []
  data.forEach(row => {
    table.push([])
    let i=0
    for(const field in row) {
      const value = row[field].toString()
      widths[i] = Math.max(widths[i], value.length)
      table[table.length-1].push(value)
      i++
    }
  })

  table.forEach(row => {
    for(let i=0;i<size;i++) {
      row[i] = row[i] + ' '.repeat(widths[i] - row[i].length)
    }
  })

  const letters = new Array(size)
  for(let j=0;j<size;j++) {
    letters[j] = String.fromCharCode(65+j) + ' '.repeat(widths[j]-1)
  }

  const separator = '+-' +
    widths.map(width =>
      '-'.repeat(width))
      .join('-+-') +
      '-+'

  const lettersLine = '| ' + letters.join(' | ') +' |'

  const result = '| ' + 
    table.map(row => row.join(' | '))
      .join(' |\n| ') + ' |'

  return separator + '\n' + lettersLine + '\n' + separator + '\n' + result + '\n' + separator
}
