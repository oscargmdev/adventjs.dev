# Puntuación: 5 estrellas

def createFrame(names):
  length = 0
  for name in names:
    length = max(len(name), length)

  tapa = '*' * (length + 4)

  result = '\n'
  for name in names:
    tapa += '* ' + name.ljust(length) + ' *\n'

  return tapa + result + tapa
