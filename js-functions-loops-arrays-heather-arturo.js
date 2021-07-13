// 1. Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]
// // --> [9, 27, 45, 12, 30]
// const multBy3 = (array) => {
//   let emptyArray = []
//   for (i=0; i<array.length; i++) {
//     emptyArray.push(array[i] * 3)
//   }
// return emptyArray
// }
// console.log(multBy3(testArr1))


// // 2. Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // // --> [-7, 3, 5, 13]
// const oddNums = (array) => {
//   let emptyArray = []
//   for (i=0; i<array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       emptyArray.push(array[i])}
//   } return emptyArray
// }
// console.log(oddNums(testArr2))


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"

// const letters = (array) =>{
//   let emptyArray = []
//   for(i=0; i<array.length; i++){
//     if(typeof array[i] === "string"){
//       emptyArray.push(array[i])
//     }
//   }return emptyArray.join("")
// }
// console.log(letters(comboArr))

// Create a function that takes in an array of numbers and returns the sum.
// var addThese1 = [1, 2, 3, 4]
// // --> 10
// var addThese2 = []
// // --> 0

// const sum = (array) =>{
//   let emptyNum = 0
//   for (i=0; i < array.length; i++){
//   // we want add new indexed number to emptyArray
//   emptyNum += array[i]
// }return emptyNum
// }
// console.log(sum(addThese2))


// Create a function that takes in an array of numbers and returns the index of the largest number.
// var indexHighestNumber = [1, 4, 2, 3]
// // --> 1
// STRETCH Challenges
//
// Create a function that takes in a string and returns a sentence expressing whether the string is a palindrome. A palindrome is the same word spelled forward and backwards.
// var isPalindrome1 = "racecar"
// // --> "Yes, racecar is a palindrome."
//
// var isPalindrome2 = "albatross"
// // --> "No, albatross is not a palindrome."
// Create a function that takes in two arrays and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3]
// var arr2 = [7, 8, 2, 3, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in an array and returns an array without any false, null, 0 or blank values.
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// var arrayLength = 6
// var arrayValue = 0
// // --> [0, 0, 0, 0, 0, 0]
//
// var arrayLength = 4
// var arrayValue = 11
// // --> [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10
//
// var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55
//
// var addUp3 = 600
// // --> 180300
