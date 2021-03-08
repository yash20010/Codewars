// Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

// This should only work if the number has 4 digits or more. If not, return "Number is too small".

// Example
// lowestProduct("123456789")--> 24 (1x2x3x4)
// lowestProduct("35") --> "Number is too small"

function lowestProduct(input) {
  if(input.length < 4) return 'Number is too small'
  let arr = []
  let sarr = input.split('')
  for(let i = 0; i<sarr.length-3; i++){
    arr.push(sarr[i]*sarr[i+1]*sarr[i+2]*sarr[i+3])
  }
  return Math.min(...arr)
}