// In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

// You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None .

// Note: 0! is always equal to 1. Negative values should return null;

// For more on Factorials : http://en.wikipedia.org/wiki/Factorial

//This function should return n!
function factorial (n) {
  if(n<0) return null
  let p = 1
  for(let i = n; i>0; i--){
    p*=i
  }
  return p
}