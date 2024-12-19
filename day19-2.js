// Puntuacion: 5 esteellas

/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  let boxWeights = new Array()

  function fill(size, width) {
    Array.from({ length: size }).forEach(() => {
      boxWeights.unshift(width)
    })
  }
  
  let rest = weight
  fill(( rest / 10 ) | 0, 10)
  rest = rest % 10
  fill(( rest / 5 ) | 0, 5)
  rest = rest % 5
  fill(( rest / 2 ) | 0, 2)
  rest = rest % 2
  fill(rest, 1)

  const boxRepresentations = {
    1: [" _ ", "|_|"] ,
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  }

  let lines = new Array()

  for(let i=0;i<boxWeights.length;i++) {
    Array.prototype.push.apply(lines, boxRepresentations[boxWeights[i]])
  }

  for(let i=lines.length-2;i>1;i--) {
    if(lines[i].endsWith(' ')) {
      lines[i-1] = lines[i-1] + lines[i].slice(lines[i-1].length,-1)
      lines.splice(i,1)
    }
  }

  return lines.join('\n')
}
      
