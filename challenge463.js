// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Lua: returns a Table;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]
// Go challenge Build Tower Advanced once you have finished this :)

function towerBuilder(nFloors) {
    let f = 2 * nFloors - 1
    let arr = []
    for (let i = 1; i <= f; i += 2) {
        arr.push(
            ' '.repeat((f - i) / 2) + '*'.repeat(i) + ' '.repeat((f - i) / 2)
        )
    }
    return arr
}
