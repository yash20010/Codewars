// Write a function that removes every lone 9 that is inbetween 7s.

// sevenAte9('79712312') => '7712312'
// sevenAte9('79797') => '777'
// Input: String Output: String

function sevenAte9(str){
  while(str.includes('797')){
    str = str.replace(/797/g,'77')
  }
  return str
}