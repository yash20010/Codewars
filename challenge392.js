// Task
// Let's call a string cool if it is formed only by Latin letters and no two lowercase and no two uppercase letters are in adjacent positions. Given a string, check if it is cool.

// Input/Output
// [input] string s

// A string that contains uppercase letters, lowercase letters numbers and spaces.

// 1 ≤ s.length ≤ 20.

// [output] a boolean value

// true if s is cool, false otherwise.

// Example
// For s = "aQwFdA", the output should be true

// For s = "aBC", the output should be false;

// For s = "AaA", the output should be true;

// For s = "q q", the output should be false.

function coolString(s) {
  if(/[^A-z]/g.test(s)){
    return false
  }else{
    for(let i = 0; i<s.length-1; i++){
      if((s[i].charCodeAt() > 91 && s[i+1].charCodeAt() > 91) || (s[i].charCodeAt() < 91 && s[i+1].charCodeAt() < 91)){
        return false
      }
    }
  }
  return true
}