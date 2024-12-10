// Puntuación: 5 estrellas

/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  let memory = new Map()

  for(let i=0;i<instructions.length;i++) {
    let params = instructions[i].split(' ')
    let instruction = params[0]
    let variable = params[1]
    let mapValue = memory.get(variable) ?? 0

    if( instruction === 'MOV') {
      if( isNaN(variable) )
        memory.set(params[2], mapValue)
      else
        memory.set(params[2], Number(variable))
    }

    if( instruction === 'INC' )
      memory.set(variable, mapValue + 1)

    if( instruction === 'DEC')
      memory.set(variable, mapValue - 1)

    if( instruction === 'JMP' && mapValue === 0)
      i = Number(params[2])-1
  }

  return memory.get('A')
}
