// In this kata you need to create a function that takes a 2D array/list of non-negative integer pairs and returns the sum of all the "saving" that you can have getting the LCM of each couple of number compared to their simple product.

// For example, if you are given:

// [[15,18], [4,5], [12,60]]
// Their product would be:

// [270, 20, 720]
// While their respective LCM would be:

// [90, 20, 60]
// Thus the result should be:

// (270-90)+(20-20)+(720-60)==840
// This is a kata that I made, among other things, to let some of my trainees familiarize with the euclidean algorithm, a really neat tool to have on your belt ;)

function sumDifferencesBetweenProductsAndLCMs(pairs) {
  function gcd(n1, n2) {
    if (n2 === 0) {
      return n1
    }
    return gcd(n2, n1 % n2)
  }
  function lcm(arr) {
    let [n1, n2] = arr
    let gcd1 = gcd(n1, n2)
    if (gcd1 === 0) return 0
    return (n1 * n2) / gcd1
  }
  return pairs.reduce((a, c) => a + (c[0] * c[1] - lcm(c)), 0)
}
