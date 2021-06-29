// Task
// Write a method, that replaces every nth char oldValue with char newValue.

// Method:

// replaceNth(text, n, oldValue, newValue)
// Example:
// n:         2
// oldValue: 'a'
// newValue: 'o'
// "Vader said: No, I am your father!" -> "Vader soid: No, I am your fother!"
//   1     2          3        4       -> 2nd and 4th occurence are replaced
// Your method has to be case sensitive!

// As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the nth suitable char and not at the first!

// If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.

// The text and the chars will never be null.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function replaceNth(text, n, oldValue, newValue) {
  if (n <= 0) return text
  let count = 0
  let out = ''
  for (let i = 0; i < text.length; i++) {
    if (text[i] === oldValue) {
      count++
      if (count % n === 0) {
        out += newValue
      } else {
        out += text[i]
      }
    } else {
      out += text[i]
    }
  }
  return out
}
