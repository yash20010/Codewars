// Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

// Examples:

// ["bat", "tab", "cat"] # [[0, 1], [1, 0]]
// ["dog", "cow", "tap", "god", "pat"] # [[0, 3], [2, 4], [3, 0], [4, 2]]
// ["abcd", "dcba", "lls", "s", "sssll"] # [[0, 1], [1, 0], [2, 4], [3, 2]]
// Non-string inputs should be converted to strings.

// Return an array of arrays containing pairs of distinct indices that form palindromes. Pairs should be returned in the order they appear in the original list.

function palindrome(word) {
  if (typeof word !== "string") return false;
  return word === word.split("").reverse().join("");
}

const palindromePairs = (words) => {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j) {
        if (palindrome(`${words[i]}` + `${words[j]}`)) {
          arr.push([i, j]);
        }
      }
    }
  }
  return arr;
};
