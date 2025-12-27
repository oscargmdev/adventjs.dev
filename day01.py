# Puntuación 4 + 3 estrellas

def filter_gifts(gifts):
  result = []
  for g in gifts:
    if not '#' in g:
      result.append(g)
  return result
