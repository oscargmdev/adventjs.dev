// Puntuación: 3 estrellas

/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  let memory = new Map()
  let params

  for(let i=0;i<instructions.length;i++) {
    let instruction = instructions[i]

    if( instruction.startsWith('MOV ') ) {
      // MOV x y: Copia el valor x (puede ser un número o el contenido de un registro) en el registro y
      params = instruction.substring(4).split(' ')
      let variableONum = params[0]
      let valorACopiar
      if( !isNaN(Number(variableONum)) ) valorACopiar = Number(variableONum)
      else valorACopiar = memory.get(variableONum) ?? 0

      memory.set(params[1], valorACopiar)
    } else if( instruction.startsWith('INC ') ) {
      // INC x: Incrementa en 1 el contenido del registro x
      params = instruction.substring(4).split(' ')
      let variable = params[0]
      let value = memory.get(variable) ?? 0
      value++
      memory.set(variable, value)
    } else if( instruction.startsWith('DEC ')) {
      // DEC x: Decrementa en 1 el contenido del registro x
      params = instruction.substring(4).split(' ')
      let variable = params[0]
      let value = memory.get(variable) ?? 0
      value--
      memory.set(variable, value)
    } else if( instruction.startsWith('JMP ')) {
      // JMP x y: Si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí.
      params = instruction.substring(4).split(' ')
      let variable = params[0]
      let jump = memory.get(variable) ?? 0 
      if( jump === 0 ) i = Number(params[1])-1
    }
  }

  return memory.get('A')
}
