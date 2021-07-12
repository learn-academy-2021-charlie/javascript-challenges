// Write a function named marco that returns "polo".
// const marco = () => {
//   return("polo")}
// console.log(marco())
//
// // Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {
//   return `welcome, ${name}`
// }
// console.log(greeting("Mark"))
//
// // Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (number) => {
//   if (number === 0) {return `${number} is zero`}
//   else if (number%2 === 0) {return `${number} is even`}
//   else {return `${number} is odd`}
// }
//
// console.log(oddOrEven(2))
// console.log(oddOrEven(3))
// console.log(oddOrEven(0))

// // Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (number) => {
//   return number * 3
// }
// console.log(triple(6))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (numb1,numb2) => {
//   return numb1 * numb2
// }
// console.log(multiply(3,5))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (num1, num2) => {
//     if (num1 === num2) {
//       return `${num1} and ${num2} are the same`
//     } else if (num1%num2 === 0) {
//       return `${num1} is evenly divisible by ${num2}`
//     } else {
//       return `${num1} is not evenly divisible by ${num2}`
//     }
// }

// console.log(divisibleBy(65, 2))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// const assignGrade = (score) => {
//   if (score === 100) {
//     return "this is a perfect score"
//   } else if (score >= 90) {
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

// console.log(assignGrade(100))
// console.log(assignGrade(95))
// console.log(assignGrade(85))
// console.log(assignGrade(75))
// console.log(assignGrade(65))
// console.log(assignGrade(15))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// const isLonger = (string1, string2) => {
//   if (string1.length > string2.length) {
//     return string1 
//   } else if (string1.length < string2.length) {
//     return string2
//   } else {
//     return "they are the same"
//   }
// }

// console.log(isLonger("longer", "short"))
// console.log(isLonger("short", "longer"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// const greaterNum = (num1, num2) => {
//   if (num1 > num2) {
//     return num1
//   } else if (num1 < num2) {
//     return num2
//   } else {
//     return "they are equal"
//   }
// }

// console.log(greaterNum(2, 5))
// console.log(greaterNum(8, 5))
// console.log(greaterNum(5, 5))
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (string) => {
  string.toUppercase(); return string
}

console.log(yelling("yelling"))
// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.
//
// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
