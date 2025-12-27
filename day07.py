def draw_tree(height, ornament, frequency):
  tree = ''
  nextOrnamentPos = frequency - 1
  pos = 0
  for i in range(0,height):
    tree += ' ' * (height-i-1)
    for j in range(0,2*i+1):
      if( pos == nextOrnamentPos ):
        tree += ornament
        nextOrnamentPos += frequency
      else:
        tree += '*'
      pos += 1
    tree += '\n'
  tree += ' ' * (height-1) + '#'
  return tree
