type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {
  const sec = t => Date.UTC(
    t.substring(0,4),
    t.substring(5,7) - 1,
    t.substring(8,10),
    t.substring(11,13),
    t.substring(14,16),
    t.substring(17,19))

  return Math.floor((sec(takeOffTime) - sec(fromTime))/1000)
}