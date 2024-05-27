// Write a program that accepts a string as input, capitalizes the first letter of each word in the
// string, and then returns the result string.
// Examples:
// "hi"=> returns "Hi"
// "i love programming"=> returns "I Love Programming"


let sentence: string = "i love my school"

let newSentense = sentence.split(" ")
console.log(newSentense)
for (let word of newSentense.toString()) {
    let word1 = word.split("")

    console.log(word1)
    word1[0] = word1[0].toUpperCase()
    // console.log(word[0])
    console.log(word1[0])

    word = word.join("")
    console.log(word)
    let newSentenseTown2.push(word)

    let capitalizes = word1[0].toUpperCase
    console.log(capitalizes)
}

