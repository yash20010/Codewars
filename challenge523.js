// Given an array of numbers, return a string made up of four parts:

// a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),

// the same as above, post sorting the array into ascending order,

// the same as above, post sorting the array into descending order,

// the same as above, post converting the array into ASCII characters and sorting alphabetically.

// The four parts should form a single string, each part separated by a hyphen (-).

// Example format of solution: "asdf-tyui-ujng-wedg"

// Examples
// [111, 112, 113, 114, 115, 113, 114, 110]  -->  "oprn-nors-sron-nors"
// [66, 101, 55, 111, 113]                   -->  "Beoq-7Boq-qoB7-7Boq"
// [99, 98, 97, 96, 81, 82, 82]              -->  "cbRR-QRbc-cbRQ-QRbc"

function sortTransform(a) {
  function ext(arr) {
    return [arr[0], arr[1], arr[arr.length - 2], arr[arr.length - 1]]
  }
  function red(array) {
    return array.reduce((acc, c) => acc + String.fromCharCode(c), '')
  }
  let p1 = ext(a)
  a.sort((x, y) => x - y)
  let p2 = ext(a)
  let p3 = p2.slice().reverse()
  let p4 = ext(
    a
      .slice()
      .map((n) => String.fromCharCode(n))
      .sort()
  ).join('')
  return [red(p1), red(p2), red(p3), p4].join('-')
}
