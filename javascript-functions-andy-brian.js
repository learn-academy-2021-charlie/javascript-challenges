// Write a function named marco that returns "polo".
const marco =()=>{
    return "polo"
}
console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting =(name) =>{
    return `Welcome, ${name}!`
} 
console.log(greeting("Brian"))

// // Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
 const oddOrEven = (number) =>{
    if(number % 2 == 0) {
    return `${number} is even`
    }else if(number % 2 == 1) {
    return `${number} is odd`
    }  else {
    return "please input a valid entry"
    }
}
console.log(oddOrEven(95))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
    return number * 3
}
console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (number1, number2) =>{
    return number1 * number2
}
console.log(multiply(5,3))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (number1, number2) => {
//     if (number1 / number2 % 2 == 0){
//     return `${number1}` divided by `${number2}` is evenly divisible!
//     }
// }
// console.log(divisibleBy(2, 2))


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (score) => {
    if (score >= 90){
        return "A"
    } else if (score >= 80){
        return "B"
    } else if (score >= 70) {
        return "C"
    } else if (score >= 60) {
        return "D"
    } else if (score <=59) {
        return "F"
    }
    }

console.log(assignGrade(2))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string1, string2) => {
    if (string1.length > string2.length) {
        return `${string1} is longer than ${string2}!` 
    } 
    }

console.log(isLonger("anger", "sad"))



// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (num1, num2) => {
    if (num1 > num2) {
        return `${num1} is greater than ${num2}`
    } else {
        return `${num2} is greater than ${num1}`
    }
}
console.log(greaterNum(6, 5))
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (string) =>{
    return 
}

// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.