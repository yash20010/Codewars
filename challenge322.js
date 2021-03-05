// Write the definition of the function "say" such that calling this:

// say("Hello")("World")
// returns "Hello World"

const say = function(string1) {
  return function(string2){
    return string1 + ' ' + string2
  }
}