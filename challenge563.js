// In this kata you will have to change every letter in a given string to the next letter in the alphabet. You will write a function nextLetter (Javascript) / next_letter (Python, Ruby) to do this. The function will take a single parameter s (string).

// Examples:

// "Hello" --> "Ifmmp"

// "What is your name?" --> "Xibu jt zpvs obnf?"

// "zoo" --> "app"

// "zzZAaa" --> "aaABbb"
// Note: spaces and special characters should remain the same. Capital letters should transfer in the same way but remain capitilized.

function nextLetter(str) {
  let ww = ''
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt()
    if ((code >= 65 && code < 90) || (code >= 97 && code < 122)) {
      ww += String.fromCharCode(code + 1)
    } else if (code === 90) {
      ww += String.fromCharCode(65)
    } else if (code === 122) {
      ww += String.fromCharCode(97)
    } else {
      ww += str[i]
    }
  }
  return ww
}
