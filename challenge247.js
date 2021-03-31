// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

function unluckyDays(year){
  //your code here
  let sum = 0
  let b = new Date()
  for(let i =0; i<12; i++){
    b.setFullYear(year, i, 13)
    if(b.getDay() === 5){
      sum++
    }
  }
  return sum
}