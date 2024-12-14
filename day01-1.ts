// Puntuación: 1 estrella

function prepareGifts(gifts: number[]): number[] {
  var sorted : number[] = gifts.sort((n1,n2) => n1-n2)
  var previuos = undefined
  var result : number[] = []
  for(var i=0;i<sorted.length;i++) {
    var element = sorted[i]
    if( element && element !== previuos ) {
      result.push(element)
    }
    previuos = element
  }
  return result
}
