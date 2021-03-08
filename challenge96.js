// In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

// The first element of the array is at index 0.

// Good luck!

// If you like this Kata, try:

// Dominant primes. It takes this idea a step further.

// Consonant value

function isPrime(n){
  if(n===2) return n
  if(n%2===0 || n<2) return
  for(let i = 3; i <= Math.sqrt(n); i+=2){
    if(n%i===0){
      return
    }
  }
  return n
}

function total(arr){
  return arr.reduce((a,c,i) => isPrime(i) ? a+c : a+c*0 ,0)
};