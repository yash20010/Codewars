// Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.

// array should return numbers first then all the method names in the order they are in the object
// strings, booleans, arrays should be ignored.
// if the object is empty, then the array should return the following string: The Object is Empty
// Example:

// returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})
// This would return [1,2,3,'e']

function returnSpecifics(obj){
  let arr = []
  for(let keys in obj){
    if(typeof obj[keys] === 'number'){
      arr.push(obj[keys])
    }
  }
  
  for(let keys in obj){
    if(typeof obj[keys] === 'function'){
      arr.push(keys)
    }
  }
  return arr.length < 1 ? ['The Object is Empty'] : arr
}