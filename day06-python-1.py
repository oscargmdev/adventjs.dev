# Puntuación: 5 estrellas

def in_box(box):
  gift = '*';

  if(gift in box[0]) return False
  if(gift in box[-1]) return False

  rest = ''.join(str(x) for x in box[1,-1])
  found = gift in rest;
  if( !found ) return False

  width = box[0].length;
  mod = rest.index(gift) % width;
  return (mod > 0 && mod < width - 1)
