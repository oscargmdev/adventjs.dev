// Puntuación: 5 estrellas

function createXmasTree(height, ornament) {
  let result = ''

  for(let i=0;i<height;i++) {
    result += '_'.repeat(height-i-1) + ornament.repeat(i*2+1) + '_'.repeat(height-i-1) + '\n'
  }

  let base = '_'.repeat(height-1) + '#' + '_'.repeat(height-1)

  result += base + '\n' + base

  return result
}
