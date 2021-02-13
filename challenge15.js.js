// You might know some pretty large perfect squares. But what about the NEXT one?
//
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.
//
// Examples:
//
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq)
  return Number.isInteger(sqrt) ? (sqrt + 1)**2 : -1;
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(319225))
console.log(findNextSquare(155))
