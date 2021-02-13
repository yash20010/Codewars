// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let numObj = A.reduce((obj,num) => {
    if(!obj[num]){
      obj[num] = 0
    }
    obj[num]++
    return obj
  }, {})

  for(const prop in numObj){
    if(numObj[prop] % 2 === 1){
      return prop
    }
  }
  //Another way to do it - don't understand it
  // return A.reduce((a,b) => a^b)
}


console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))
console.log(findOdd([10]))
