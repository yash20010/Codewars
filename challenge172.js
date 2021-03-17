// Description:
// Implement a function which filters out array values which satisfy the given predicate.

// reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]

function reject(array, predicate) {
  let x = array.filter(predicate)
  return array.filter(n => !x.includes(n))
}