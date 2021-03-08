// You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.

// You need to find out if the cat can catch the mouse from it's current position. The cat can jump (j) characters.

// Also, the cat cannot jump over the dog.

// So:

// if j = 5:

// ..C.....m. returns 'Caught!' <-- not more than j characters between

// .....C............m...... returns 'Escaped!' <-- as there are more than j characters between the two, the cat can't jump far enough

// if j = 10:

// ...m.........C...D returns 'Caught!' <--Cat can jump far enough and jump is not over dog

// ...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

// Finally, if all three animals are not present, return 'boring without all three'

function catMouse(x, j){
  let cat = x.indexOf('C')
  let mouse = x.indexOf('m')
  let dog = x.indexOf('D')
  if(cat === -1 || dog === -1 || mouse === -1) return 'boring without all three'
  return Math.abs(x.indexOf('C')-x.indexOf('m')) <= j ? (cat < dog && dog < mouse) || (mouse < dog && dog < cat) ? 'Protected!' : 'Caught!' : 'Escaped!'
}