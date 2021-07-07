class Food {
  constructor(course, name, ingredients, monies) {
    this._course = course
    this._name = name
    this._ingredients = ingredients
    this._monies = monies
  }
  get course() {
    return this._course
  }
  get name() {
    return this._name
  }
  get ingredients() {
    return this._ingredients
  }
  get monies() {
    return this._monies
  }
  howMuch() {
    return `${this._name} is $${this._monies}`
  }
}

class Dessert extends Food {
  constructor(course, name, ingredients, type, calories, monies) {
    super(course, name, ingredients)
    this._type = type
    this._calories = calories
  }
  getCalories() {
    console.log(`${this._name} has ${this._calories} total calories`)
  }

  howMuch() {
    return `${this._name} is included with your meal `
  }
}

class MainDish extends Food {
  constructor(course, name, ingredients, type, meatBased = false, monies) {
    super(course, name, ingredients, monies)
    this._type = type
    this._meatBased = meatBased
  }
  get meatBased() {
    return !this._meatBased
      ? console.log(`${this.name} is a vegan dish`)
      : console.log(`${this.name} is not a vegan dish`)
  }
  howMuch() {
    if (this._meatBased) {
      return `${this._name} is $${this._monies * 1.25}`
    }
  }
}

const iceCream = new MainDish(
  'Dessert',
  'Ice-Cream',
  ['milk', 'sugar', 'corn syrup'],
  'American',
  false,
  3
)

const burrito = new MainDish(
  'main',
  'grande',
  ['cheese', 'beef', 'rice', 'beans'],
  'handheld',
  true,
  5.0
)

const pho = new MainDish(
  'Main',
  'Pho',
  ['noodles', 'mushroom', 'soup', 'salt', 'pepper', 'sriracha'],
  'Vietnamese',
  false,
  8
)

let dinner = [pho, iceCream, burrito]
let total = dinner.reduce((a, c) => a + c.monies, 0)

//str.replace( /[^0-9]/g,'')

for (items of dinner) {
  console.log(items.howMuch())
}
