// Task
// You are given a sequence of positive ints where every element appears three times, except one that appears only once (let's call it x) and one that appears only twice (let's call it y).

// Your task is to find x * x * y.

// Example
// For arr=[1, 1, 1, 2, 2, 3], the result should be 18

// 3 x 3 x 2 = 18

// For arr=[6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200], the result should be 4000000

// 200 x 200 x 100 = 4000000

// Input/Output
// [input] integer array arr

// an array contains positive integers.

// [output] an integer

// The value of x * x * y

function missingValues(arr) {
  //coding and coding..
  let obj = arr.reduce((o,n) => {
    if(!(n in o)){
      o[n] = 0
    }
    o[n]++
    return o
  }, {})
  let res = 1
  for(let keys in obj){
    if(obj[keys] === 2){
      res *= +keys
    }else if(obj[keys] === 1){
      res *= (+keys)**2
    }
  }
  return res
}