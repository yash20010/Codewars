// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

function add(num1, num2) {
    num1 = num1.toString()
    num2 = num2.toString()
    let l = Math.max(num1.length, num2.length)
    num1 = num1.padStart(l, '0')
    num2 = num2.padStart(l, '0')
    let arr = []

    for (let i = 0; i < l; i++) {
        arr.push(Number(num1[i]) + Number(num2[i]))
    }

    return Number(arr.join(''))
}
