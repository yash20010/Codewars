// This is a question from codingbat

// Given an integer n greater than or equal to 0, create and return an array with the following pattern:

// squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) => [0, 1, 2, 1]
// squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
// n<=1000.

function squareUp(n) {
  function pushZero(arr, num) {
    for (let i = 1; i <= num; i++) {
      arr.push(0)
    }
    return arr
  }

  let farr = []
  for (let i = 0; i <= n; i++) {
    for (let j = i; j > 0; j--) {
      farr.push(j)
    }
    if (n - i - 1 <= 0) continue
    pushZero(farr, n - i - 1)
  }

  return farr
}
