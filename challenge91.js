// An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

// Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]

function comb(x,r=2){
  let n = 1
  let d = 1
  for(let i = x; i>1; i--){
    n *= i
  }
  for(let j = x-r; j>1; j--){
    d *= j
  }
  return n/(r*d)
}

function anagramCounter (wordsArray) {
  let sorted = wordsArray.map(w => w.split('').sort().join('')).reduce((a,c) => {
    if(!(c in a)){
      a[c]=0
    }
    a[c]++
    return a
  }, {})
  
  let sum = 0
  for(let keys in sorted){
    if(sorted[keys] > 1){
      sum += comb(sorted[keys])
    }
  }
  return sum
}