// Array.prototype.length will give you the number of top-level elements in an array.

// Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

// For example:

// deepCount([1, 2, 3]);  
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);  
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);  
// //>>>>> 7
// The input will always be an array.

function deepCount(a, sum=0){
  sum += a.length
  for(let i = 0; i<a.length; i++){
    if(Array.isArray(a[i])){
      sum += deepCount(a[i])
    }
  }
  return sum
}