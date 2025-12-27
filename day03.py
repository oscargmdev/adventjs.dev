def draw_gift(size, symbol):
  if size<2:
    return ''
  tapa = size * symbol
  middle = symbol + (size-2) * ' ' + symbol + '\n'
  return tapa + '\n' + (size-2) * middle + tapa
