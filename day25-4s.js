/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  const NEXT = '>', PLUS = '+', MINUS = '-', FOR = '[', FOR_END = ']', IF = '{', IF_END = '}'
  
  const stack = [[]]
  for(const instruction of code) {
    const current = stack[stack.length - 1]
    
    if(instruction === PLUS || instruction === MINUS)
        current.push({type: instruction})

    if(instruction === FOR || instruction === IF) {
      const newBody = []
      current.push({type: instruction, body: newBody})
      stack.push(newBody)
    }

    if(instruction === FOR_END ||instruction === IF_END)
        stack.pop()
  }

  const execActions =  (state, block) => {
    for (const inst of block) {
      state = actions[inst.type](state, inst)
    }
    return state
  }

  const ifHandler = (state, inst) => {
    if( state !== 0 ) state = execActions(state, inst.body)
    return state
  }
  const forHandler = (state, inst) => {
    while (state !== 0) {
      state = execActions(state, inst.body)
    }
    return state
  }
  const actions = {
    [PLUS]: state => state+1,
    [MINUS]: state => state-1,
    [IF]: ifHandler,
    [FOR]: forHandler,
  }

  return execActions(0, stack[0])
}