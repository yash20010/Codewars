// Given an array of strings, sort the array into order of weight from light to heavy.

// Weight units are grams(G), kilo-grams(KG) and tonnes(T).

// Arrays will always contain correct and positive values aswell as uppercase letters.

function arrange(arr){
  //Insert code here
    let wc = {'G':1, "KG": 1000, 'T':1000000}
    let obj = arr.reduce((o,w) => {
      o[w] = parseInt(w)*wc[w.replace(/[^A-Z]/g,'')]
      return o
    }, {})
    return arr.sort((a,b) => obj[a]-obj[b])
  }