// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    return num
        .toString()
        .split('')
        .map((n, i) =>
            n !== '0' ? n.padEnd(num.toString().length - i, 0) : '0'
        )
        .filter((n) => n !== '0')
        .join(' + ')
}
