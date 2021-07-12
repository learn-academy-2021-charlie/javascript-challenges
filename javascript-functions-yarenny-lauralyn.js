// Write a function named marco that returns "polo".
    // const marco = () => {
    //     return "polo"
    // }
    //     console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
    // const greeting = (name) => {
    //     return `welcome, ${name}`
    // }
    //     console.log(greeting("yarenny"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
    // const oddOrEven = (num) => {
    //     if(num % 2 === 0){
    //         return `${num} is even`
    //     } else {
    //         return `${num} is odd`
    //     }
    // }
    //     console.log(oddOrEven(2))
    //     console.log(oddOrEven(5))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
    // const triple = (num) => {
    //     return num * 3
    // }
    //     console.log(triple(4))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
    // const multiply = (num1 , num2) => {
    //     return num1 * num2
    // }
    //     console.log(multiply(3 , 7))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (num1, num2) => {
//   if (num1 % num2 === 0) {
//     return `${num1} is evenly divisible by ${num2}`
//   } else {
//     return `${num1} is not evenly divisible by ${num2}`
//   }
// }
//
// console.log(divisibleBy(10, 5))
// console.log(divisibleBy(7, 5))


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// A 90-100
// B 80-89
// C 70-79
// D 60-69
// F < 60
// const assignGrade = (score) => {
//   if (score >= 90) {
//     return "A"
//   } else if (score >= 80) {
//     return "B"
//   } else if (score >= 70) {
//     return "C"
//   } else if (score >= 60) {
//     return "D"
//   } else {
//     return "F"
//   }
// }
// console.log(assignGrade(90)) // A
// console.log(assignGrade(89)) // B
// console.log(assignGrade(80)) // B
// console.log(assignGrade(70)) // C
// console.log(assignGrade(65)) // D
// console.log(assignGrade(59)) // F
// console.log(assignGrade(10)) // F

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// const isLonger = (str1, str2) => {
//   if (str1.length > str2.length) {
//     return `${str1} is longer than ${str2}`
//   } else if (str1.length === str2.length) {
//     return `${str1} has the same length as ${str2}`
//   } else {
//     return `${str2} is longer than ${str1}`
//   }
// }
//
// console.log(isLonger("apple", "banana"))
// console.log(isLonger("apples", "banana"))
// console.log(isLonger("watermelon", "banana"))


// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// const greaterNum = (num1, num2) => {
//   if (num1 > num2) {
//     return num1
//   } else if (num1 === num2) {
//     return "equal"
//   } else {
//     return num2
//   }
// }
//
// console.log(greaterNum(10, 100))
// console.log(greaterNum(23439, 100))
// console.log(greaterNum(10, 10))

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// const yelling = (phrase) => {
//   return phrase.toUpperCase()
// }
// console.log(yelling("hello everybody"))
// console.log(yelling("learning is funnnnnnnnnn!!!!!!1"))

// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.

const helloWorld = (lang) => {
  if (lang === "es") {  // Spanish
    return "Hola Mundo"
  } else if (lang === "de") { // German
    return "Hallo Welt"
  } else if (lang === "it") { // Italian
    return "Ciao Mondo"
  } else if (lang === "ja") { // Japanese
    return "Kon'nichiwa Sekai"
  } else {
    return "Hello World!" // English
  }
}
console.log(helloWorld("es"))
console.log(helloWorld("de"))
console.log(helloWorld("it"))
console.log(helloWorld("ja"))
console.log(helloWorld("en"))
console.log(helloWorld(""))
//
// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
//
// pluralizer(5, "cat")
// // expected output: "5 cats"
//
// pluralizer(1, "dog")
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
