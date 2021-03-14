// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}

function count(array){
  return array.reduce((a,c) => {
    if(!(c in a)){
      a[c] = 0
    }
    a[c]++
    return a
  },{})
}