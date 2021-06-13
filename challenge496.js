// Task:
// You have to write a function pattern which creates the following pattern (See Examples) upto desired number of rows.

// If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

// Examples:
// pattern(9):

// 123456789
// 234567891
// 345678912
// 456789123
// 567891234
// 678912345
// 789123456
// 891234567
// 912345678
// pattern(5):

// 12345
// 23451
// 34512
// 45123
// 51234
// Note: There are no spaces in the pattern

// Hint: Use \n in string to jump to next line

function pattern(n) {
    let output = []
    for (let i = 1; i <= n; i++) {
        output.push(i)
    }
    let output2 = [output.join('')]
    for (let i = 2; i <= n; i++) {
        let p = output.shift()
        output.push(p)
        output2.push(output.join(''))
    }
    return output2.join('\n')
}
