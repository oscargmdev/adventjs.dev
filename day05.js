/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {

  const sec = t => Date.UTC(
    t.substring(0,4),
    t.substring(5,7) - 1,
    t.substring(8,10),
    t.substring(11,13),
    t.substring(14,16),
    t.substring(17,19))

  return Math.floor((sec(takeOffTime) - sec(fromTime))/1000)
}