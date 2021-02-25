// John has invited some friends. His list is:
//
// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that
//
// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
//
// So the result of function meeting(s) will be:
//
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.
//
// Notes
// You can see another examples in the "Sample tests".

function meeting(s) {
  return s.toUpperCase().split(';').sort((name1,name2) => {
    let [f1,l1] = name1.split(':')
    let [f2,l2] = name2.split(':')
    if(l1>l2){
      return 1
    }else if(l2>l1){
      return -1
    }else{
      if(f1>f2){
        return 1
      }else if(f2>f1){
        return -1
      }else{
        return 0
      }
    }
    }).map(n => '(' + n.split(':').reverse().join(', ') + ')').join('')
}
