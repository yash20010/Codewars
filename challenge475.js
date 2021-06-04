// Given a positive integer N, return the largest integer k such that 3^k < N.

// For example,

// largest_power(3) == 0
// largest_power(4) == 1
// You may assume that the input to your function is always a positive integer.

function largestPower(n) {
    let k = Math.floor(Math.log(n) / Math.log(3))
    return Math.pow(3, k) === n ? k - 1 : k
}
