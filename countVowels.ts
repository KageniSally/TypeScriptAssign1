// Write a program that counts the number of vowels in a sentence.
// eg " Hello World " => returns 2

let initialSentense: string = "i love my school"
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
let count = 0


let newSentenseVowel = initialSentense.split('')
console.log(newSentenseVowel)
for (let character of newSentenseVowel) {
    for (let vowel of vowels) {
        if (character.includes(vowel)) {
            count += 1
        }
    }
}
console.log(count)

