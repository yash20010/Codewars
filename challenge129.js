// For any given linear sequence, calculate the function [f(x)] and return it as a string.
//
// For example:
//
// getFunction([0, 1, 2, 3, 4]) => "f(x) = x"
// getFunction([0, 3, 6, 9, 12]) => "f(x) = 3x"
// getFunction([1, 4, 7, 10, 13]) => "f(x) = 3x + 1"
// Assumptions for this kata are:
//
// the sequence argument will always contain 5 values equal to f(0) - f(4).
// the function will always be in the format "nx +/- m", 'x +/- m', 'nx', 'x' or 'm'
// if a non-linear sequence simply return 'Non-linear sequence' or Nothing in Haskell.

function getFunction(sequence) {
  let y2 = sequence[1]
  let y1 = sequence[0]
  let m = y2-y1
  let c = y1
  if(m===0) return `f(x) = ${c}`
  let str = `f(x) = ${m===1 ? '': m===-1 ? '-' : m}x ${c===0 ? '' : c>0 ? '+' : '-'} ${c===0 ? '' : Math.abs(c)}`
    return sequence.every((n,i) => n === m*i + c) ? str.trim() : 'Non-linear sequence'
}
