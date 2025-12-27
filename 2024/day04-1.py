# Puntuacíon: 4 estrellas

def createXmasTree(height, ornament):
  result = ''

  for i in range(height):
    result += ['_'*(height-i-1)] + [ornament*(i*2+1)] + ['_'*(height-i-1)] + '\n'

  base = ['_'*(height-1)] + '#' + ['_'*(height-1)]

  result += base + '\n' + base

  return result
