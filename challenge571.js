// Create a function which checks a number for three different properties.

// is the number prime?
// is the number even?
// is the number a multiple of 10?
// Each should return either true or false, which should be given as an array. Remark: The Haskell variant uses data Property.

// Examples
// numberProperty(7)  // ==> [true,  false, false]
// numberProperty(10) // ==> [false, true,  true]
// The number will always be an integer, either positive or negative. Note that negative numbers cannot be primes, but they can be multiples of 10:

// numberProperty(-7)  // ==> [false, false, false]
// numberProperty(-10) // ==> [false, true,  true]

function isPrime(n) {
  if (n <= 1) {
    return false
  } else if (n === 2) {
    return true
  } else if (n % 2 === 0) {
    return false
  } else {
    for (let i = 3; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false
      }
    }
  }
  return true
}

function numberProperty(n) {
  return [isPrime(n), n % 2 === 0, n % 10 === 0]
}
