// write a program that takes an integer as input and returns true if the input is a power of two.
// Examples:
// 8=> returns true
// 6=> returns false

const btnCheck = document.getElementById("btn-check")! as HTMLButtonElement
const inputNumber = (document.getElementById("numberInput")! as HTMLInputElement).value

const num: number = +inputNumber

btnCheck.addEventListener('click', checkPower)

function checkPower(): boolean {
    if (num % 2 === 0) {
        return true
    }

    return false
}


