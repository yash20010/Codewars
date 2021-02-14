// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.
//
//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str){
  const mexWave=[]
  for(let i=0; i<str.length; i++){
    mexWave.push(str.split('').map((letter,index)=> index === i ? letter.toUpperCase() : letter).join(''))
  }
  return mexWave.filter(word => word !== str)
}

console.log(wave("hello"))
console.log(wave("codewars"))
console.log(wave("two words"))
console.log(wave(" gap "))
