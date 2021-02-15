// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
//
// Goodluck :)

function nearestSq(n){
  let x,y
  for(let i = n; i > 0 ; i--){
    if(Number.isInteger(Math.sqrt(i))){
      x = i
      break
    }
  }
  for(let j = n; j <= n**2; j++){
    if(Number.isInteger(Math.sqrt(j))){
      y = j
      break
    }
  }
  return n-x < y-n ? x : y
}

console.log(nearestSq(1))
//1
console.log(nearestSq(2))
//1
console.log(nearestSq(10))
//9
console.log(nearestSq(111))
//121
console.log(nearestSq(9999))
//10000
