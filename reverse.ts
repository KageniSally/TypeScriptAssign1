// Write a program that takes an integer as input and returns an integer with reversed digit
// ordering.
// Examples:
// For input 500, the program should return 5.
// For input -56, the program should return -65.
// For input -90, the program should return -9.
// For input 91, the program should return 19





function checkInteger() {
    let num: number = -98765


    if (num < 0) {
        let num1 = num.toString()
        let negative = num1.split('')
        let others = negative.splice(1)
        console.log(negative[0] + others.reverse().join(''))

    }
    if (num > 0) {
        let result = num.toString().split('').reverse().join('');
        console.log(result)
    }
}
checkInteger()