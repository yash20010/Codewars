// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickels ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25

// So for example:
// coinCombo(6) --> [1, 1, 0, 0]

var coinCombo = function (cents) {
  let q = Math.floor(cents / 25)
  let d = Math.floor((cents % 25) / 10)
  let n = Math.floor(((cents % 25) % 10) / 5)
  let p = ((cents % 25) % 10) % 5

  return [p, n, d, q]
}
