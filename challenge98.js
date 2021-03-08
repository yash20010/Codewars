// I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

// Example: 

// N = 5;

// String = "This is an example string";

// Return value:
// Thisi
// sanex
// ample
// strin
// g

// Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'

function stringBreakers(n, string){
    string = string.replace(/\s/g,'')
    let ns = ''
    for(let i = 0; i<string.length; i++){
      if(i!==0 && i%n===0){
        ns+='\n' + string[i]
      }else{
        ns+=string[i]
      }
    }
    return ns
  }