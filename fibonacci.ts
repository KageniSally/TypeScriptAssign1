// Write a program to generate the Fibonacci sequence up to 100.
// A Fibonacci sequence is a series of numbers where a number is the 
// sum of the two preceding ones, usually starting with 0, 1. 
function fibo() {

    let num1: number = 0
    let num2: number = 1
    let next: number
    console.log(num1)
    console.log(num2)
    next = num1 + num2

    while (next <= 100) {
        console.log(next)
        num1 = num2

        num2 = next
        next = num1 + num2
    }

}
fibo()