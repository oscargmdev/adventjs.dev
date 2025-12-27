// Puntuación: 5 estrellas

/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  let boxWeights = {}
  
  let rest = weight
  boxWeights[10] = ( rest / 10 ) | 0
  rest -= boxWeights[10] * 10
  boxWeights[5] = ( rest / 5 ) | 0
  rest -= boxWeights[5] * 5
  boxWeights[2] = ( rest / 2 ) | 0
  rest -= boxWeights[2] * 2
  boxWeights[1] = rest

  const boxRepresentations = {
    1: [" _ ", "|_|"] ,
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  }

  let lines = new Array()

  for(let i=0;i<boxWeights[1];i++) {
    Array.prototype.push.apply(lines, boxRepresentations[1])
  }
  for(let i=0;i<boxWeights[2];i++) {
    Array.prototype.push.apply(lines, boxRepresentations[2])
  }
  for(let i=0;i<boxWeights[5];i++) {
    Array.prototype.push.apply(lines, boxRepresentations[5])
  }
  for(let i=0;i<boxWeights[10];i++) {
    Array.prototype.push.apply(lines, boxRepresentations[10])
  }

  for(let i=lines.length-2;i>1;i--) {
    if(lines[i].endsWith(" ")) {
      lines[i-1] = lines[i-1] + lines[i].slice(lines[i-1].length,-1)
      lines.splice(i,1)
    }
  }

  return lines.join('\n')
}
