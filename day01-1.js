function prepareGifts(gifts) {
  let result = []
  
  let sorted = gifts.toSorted((n1,n2) => n1-n2)
  let previous = undefined
  sorted.forEach(value => {
    if( value !== previous ) {
      result.push(value)
      previous = value
    }
  })

  return result
}
