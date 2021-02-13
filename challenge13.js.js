// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str.split(' ').map(words => words.split('').reverse().join('')).join(' ')
  //another way to do it
  // return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
console.log(reverseWords('apple'))
console.log(reverseWords('a b c d'))
