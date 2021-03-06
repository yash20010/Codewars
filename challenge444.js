// Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.

// For example, solution(20) should return [5, 2, 1]

function solution(number) {
  number -= 1;
  let C = Math.floor(number / 15);
  let A = Math.floor(number / 3) - C;
  let B = Math.floor(number / 5) - C;
  return [A, B, C];
}
