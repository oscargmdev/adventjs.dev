// Puntuación: 5 estrellas

/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  let regex = /([0-9]*)_(.*)\.(.*)\.(.*)/
  let regexResult = regex.exec(filename)

  return regexResult[2] + '.' + regexResult[3]
}
