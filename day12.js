/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  const mapDamage = {
    'FF': [2, 2],
    'FA': [1, 2],
    'AF': [2, 1],
    'AA': [1, 1],
    'FB': [0, 2],
    'BF': [2, 0],
    'AB': [0, 0],
    'BA': [0, 0],
    'BB': [0, 0],
  }
  let elf1Life = 3
  let elf2Life = 3
  let damage
  for(let i=0; i<Math.max(elf1.length,elf2.length); i++) {
    damage = mapDamage[elf1[i]+elf2[i]]
    elf1Life -= damage[0]
    elf2Life -= damage[1]
    if( elf1Life <= 0 || elf2Life <=0 ) break
  }
  if( elf1Life > elf2Life ) return 1
  if( elf2Life > elf1Life ) return 2
  return 0
}