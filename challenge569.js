// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap(st) {
  return st
    .split('')
    .reduce(
      (a, l) => a + ('aeiou'.includes(l.toLowerCase()) ? l.toUpperCase() : l),
      ''
    )
}
