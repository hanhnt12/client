export default {
  // cut characters
  cutCharacter (strInput, length) {
    if (strInput.length > length) {
      return strInput.slice(0, length) + '...'
    } else {
      return strInput
    }
  }
}
