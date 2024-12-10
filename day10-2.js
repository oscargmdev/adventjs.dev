// Puntuación; 4 estrellas

/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  let memory = new Map()

  for(let i=0;i<instructions.length;i++) {
    let params = instructions[i].split(' ')
    let variable = params[1]
    let mapValue = memory.get(variable) ?? 0

    switch( params[0] ) {
      case 'MOV':
        // MOV x y: Copia el valor x (puede ser un número o el contenido de un registro) en el registro y
        let valorACopiar
        if( isNaN(variable) ) valorACopiar = mapValue
        else valorACopiar = Number(variable)

        memory.set(params[2], valorACopiar)
        break
      case 'INC':
        // INC x: Incrementa en 1 el contenido del registro x
        memory.set(variable, mapValue + 1)
        break
      case 'DEC':
        // DEC x: Decrementa en 1 el contenido del registro x
        memory.set(variable, mapValue - 1)
        break
      case 'JMP':
        // JMP x y: Si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí.
        if( mapValue === 0 ) i = Number(params[2])-1
        break
    }
  }

  return memory.get('A')
}
