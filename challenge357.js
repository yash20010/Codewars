// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

// Vowels are (in this kata): a, e, i, o, u

// Note: all provided input strings are lowercase.

// Examples
// "day"    ==>  "dya"
// "apple"  ==>  "pplae"
// FUNDAMENTALSSTRINGS

function moveVowel(input) {
  let arr = input.split("");
  return (
    arr.filter((l) => !"aeiou".includes(l)).join("") +
    arr.filter((l) => "aeiou".includes(l)).join("")
  );
}