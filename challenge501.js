// Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.

// It has to return a string with the type of triangle.
// For example:

// typeOfTriangle(2,2,1) --> "Isosceles"

var typeOfTriangle = function (sideA, sideB, sideC) {
    if (
        sideA + sideB > sideC &&
        sideA + sideC > sideB &&
        sideB + sideC > sideA
    ) {
        if (sideA === sideB && sideB === sideC) {
            return 'Equilateral'
        } else if (sideA === sideB || sideB === sideC || sideC === sideA) {
            return 'Isosceles'
        } else {
            return 'Scalene'
        }
    }
    return 'Not a valid triangle'
}
