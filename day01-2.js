function prepareGifts(gifts) {
  let unique = [...new Set(gifts)]
  let sorted = unique.toSorted((n1,n2) => n1-n2)
  return sorted
}
