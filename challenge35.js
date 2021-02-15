// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.
//
// Make sure that your function does not return a false positive by just checking just the day.

function isToday(date) {
  let today = new Date()
  return date.toString().split(' ').slice(1,4).join(' ') === today.toString().split(' ').slice(1,4).join(' ')
}
