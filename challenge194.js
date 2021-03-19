// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(array) {
  //your code here
  let obj = array.reduce((a,c) => {
    if(!(c in a)){
      a[c] = 0
    }
    a[c]++
    return a
  }, {})
  return (obj.a===3 || obj.b===3 || obj.c===3) && (obj.a===2 || obj.b===2 || obj.c===2)
}