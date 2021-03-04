// You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:
//
// class Student {
//   constructor(name, fives, tens, twenties) {
//     this.name = name;
//     this.fives = fives;
//     this.tens = tens;
//     this.twenties = twenties;
//   }
// }
// As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".
//
// Notes:
//
// Each student will have a unique name
// There will always be a clear winner: either one person has the most, or everyone has the same amount
// If there is only one student, then that student has the most money



class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

function mostMoney(students) {
  let mon = students.map(s => s.fives*5 + s.tens*10 + s.twenties*20)
  let max = Math.max(...mon)
  if(mon.indexOf(max) !== mon.lastIndexOf(max)) return 'all'
  return students[mon.indexOf(max)].name
}

console.log(mostMoney([andy, stephen, eric, david, phil]))
