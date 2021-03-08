// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

function gordon(a){
  let v = ['e','i','o','u']
  return a.split(' ').map(w=>w.split('').map(l=>{
    if(l.toLowerCase()==='a'){
      return '@'
    }else if(v.includes(l.toLowerCase())){
      return '*'
    }else{
      return l.toUpperCase()
    }
  }).join('')).join('!!!! ')+'!!!!'
}