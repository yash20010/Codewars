// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

function moveTen(s){
  let n = ''
  for(let i = 0; i<s.length; i++){
    let c = s.charCodeAt(i) + 10
    if(c > 122){
      c -= 26
    }
    n += String.fromCharCode(c)
  }
  return n
}


  console.log((moveTen("testcase")) 
  // "docdmkco"
  console.log((moveTen("codewars")) 
  // "mynogkbc"
  console.log((moveTen("exampletesthere")) 
  // "ohkwzvodocdrobo"