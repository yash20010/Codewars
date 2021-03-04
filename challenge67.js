// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
//
// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.
//
// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].
//
// [4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray(arr){
  if(!Array.isArray(arr) || arr.length<1 || arr.some(n => n<0 || n>9)) return null
  return (+(arr.reduce((a,c)=>a+c,'')) + 1).toString().split('').map(n => +n)
}

console.log(upArray([9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]))
