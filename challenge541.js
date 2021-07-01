// Task
// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

// Example:
// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
// Good luck!

const ultimateReverse = (s) => {
  let str = s.join('').split('').reverse().join('')
  let arr = []
  let k = 0
  for (let i = 0; i < s.length; i++) {
    let j = s[i].length
    arr.push(str.slice(k, k + j))
    k += j
  }
  return arr
}
