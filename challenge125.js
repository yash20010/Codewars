// Task
// Given string s, which contains only letters from a to z in lowercase.

// A set of alphabet is given by abcdefghijklmnopqrstuvwxyz.

// 2 sets of alphabets mean 2 or more alphabets.

// Your task is to find the missing letter(s). You may need to output them by the order a-z. It is possible that there is more than one missing letter from more than one set of alphabet.

// If the string contains all of the letters in the alphabet, return an empty string ""

// Example
// For s='abcdefghijklmnopqrstuvwxy'

// The result should be 'z'

// For s='aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy'

// The result should be 'zz'

// For s='abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy'

// The result should be 'ayzz'

// For s='codewars'

// The result should be 'bfghijklmnpqtuvxyz'

// Input/Output
// [input] string s

// Given string(s) contains one or more set of alphabets in lowercase.

// [output] a string

// Find the letters contained in each alphabet but not in the string(s). Output them by the order a-z. If missing alphabet is repeated, please repeat them like "bbccdd", not "bcdbcd"

function missingAlphabets(s) {
  //coding and coding..
  let obj = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0}
  for(let i=0; i< s.length; i++){
    obj[s[i]]++
  }
  let max
  for(let keys in obj){
    if(!max){
      max = obj[keys]
    }else if(max < obj[keys]){
      max = obj[keys]
    }
  }
  let str = ''
  for(let keys in obj){
    if(obj[keys] !== max){
      str += keys.repeat(max - obj[keys])
    }
  }
  return str
}