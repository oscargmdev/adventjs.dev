def find_unique_toy(toy: str):
  lettersArray = []
  lettersMap = {}
  for l in toy:
    lLower = l.lower()
    if not lLower in lettersMap:
      lettersArray.append(l)
      lettersMap[lLower] = 1
    else:
      lettersMap[lLower] = 2

  for l in lettersArray:
    lLower = l.lower()
    if lettersMap[lLower] == 1:
      return l

  return ''
