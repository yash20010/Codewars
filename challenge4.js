// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
//
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
// FUNDAMENTALS

function longest(s1, s2) {
  return (s1+s2).split('').sort().filter((letter ,index,arr) => !arr.includes(letter, index+1)).join('')
}

console.log(longest("aretheyhere", "yestheyarehere"))
//"aehrsty"
