function createFrame(names: string[]): string {
  let length = 0
  names.forEach(value => length = Math.max(value.length, length))

  let tapa = '*'.repeat(length + 4)

  let result = names.reduce((previous, current) => {
    return previous + '* ' + current.padEnd(length) + ' *\n'
  }, '\n')

  return tapa + result + tapa
}
