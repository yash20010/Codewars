// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
//
// Example:
//
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
//
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
//
// list([ {name: 'Bart'} ])
// // returns 'Bart'
//
// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names){
  const nameList = names.map(obj => obj.name)
  const lastName = nameList.pop()
  return nameList.length ? `${nameList.join(', ')} & ${lastName}` : lastName || ""
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))
console.log(list([{name: 'Bart'},{name: 'Lisa'}]))
console.log(list([{name: 'Bart'}]))
console.log(list([]))
