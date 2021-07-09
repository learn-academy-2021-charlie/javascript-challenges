// Write a function named marco that returns "polo".
//
// const marco = () => {
//   return "polo"
// }
// console.log(marco());
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
//
// const greeting = (name) => {
//   return `Welcome, ${name}!`
// }
// console.log(greeting("Charlie"));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
//

//oddoreven takes a number argument
//return odd or even
// const oddOrEven = (num) => {
//   if(num % 2 === 0){
//     return "even"
//   }else{
//     return "odd"
//   }
// }
// console.log(oddOrEven(2));

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
//

// const triple = (num) => {
//   return num * 3
// }
// console.log(triple(3));

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
//
// const multiple  = (num1,num2) => {
//   return num1 * num2
// }
// console.log(multiple(4,5));

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
//

//check if first number is evenly divisible
//if so print num1 is evenly diviiblen by 5
//-----actual code
// const divisibleBy = (num1, num2) => {
//   if(num1 % num2 === 0){
//     return `${num1} is evenly divisible by ${num2}`
//   }else{
//
//   }
// }
// console.log(divisibleBy(10,2))



// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
//

//takes a number score
// conditional to meet for grade
//return that grade
//90-100 A
//80-89 B
//70-79
// 60-69
//59 <=
// const assignGrade  = (score) => {
// if(score >= 90){
//   return "A"
// }else if(score >= 80 && score <= 89){
//   return "B"
// }else if(score >= 70 && score <=79){
//   return "C"
// }else if(score >= 60 && score <=69){
//   return "D"
// }else{
//   return "F"
// }
// }
// console.log(assignGrade(91))



// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
//
// const isLonger = (word1 , word2) => {
//   if (word1.length > word2.length){
//     return `${word1} is greater than ${word2}`
//   }
//   else if (word2.length > word1.length){
//     return `${word2} is greater than ${word1}`
//   }else if (word2.length === word1.length){
//     return `${word2} is equal to ${word1}`
//   }else {
//       return "use an actual word knucklehead"
//   }
//   }
// console.log(isLonger("hello","asdifbasidf"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// create 2 inputs num1 + num2
// then compare using if to see which is greater
// return num1 is/not greater than num2
// const greaterNum = (num1, num2) => {
//   if (num1 > num2){
//     return `${num1} is greater than ${num2}`
//   }else if (num2 > num1) {
//     return`${num2} is greater than ${num1}`
//   }else{
//     return "try again"
//   }
// }
// console.log(greaterNum(1,3))
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (word) => {
  return word.toUpperCase()
}
console.log(yelling("hi"))
// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.
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
