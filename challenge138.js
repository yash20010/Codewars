// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
  if(username.length < 4 || username.lenght > 16) return false
  let res =  /[^a-z\d\_]/g.test(username) 
  return !res
}