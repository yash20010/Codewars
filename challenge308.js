// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

// Monday --> 12

// Tuesday --> numbers greater than 95

// Wednesday --> 34

// Thursday --> 0

// Friday --> numbers divisible by 2

// Saturday --> 56

// Sunday --> 666 or -666

// Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)

var AmIAfraid = function(day, num){
  switch(day){
      case 'Monday':
        return num === 12
        break
      case 'Tuesday':
        return num > 95
        break
      case 'Wednesday':
        return num === 34
        break
      case 'Thursday':
        return num === 0
        break
      case 'Friday':
        return num%2 === 0
        break
      case 'Saturday':
        return num === 56
        break
      case 'Sunday':
        return num === 666 || num === -666
        break
  }
}