// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]
// // // --> [9, 27, 45, 12, 30]

// const timesThree = (arr) => {
//    let newArray = []
//    for(let i = 0; i < arr.length; i++){
//        newArray.push(arr[i] * 3)
//    }
//    return newArray
// }
// console.log(timesThree(testArr1));



// // Write a function that takes in an array of numbers and returns a new array with only odd numbers.
//  var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // // --> [-7, 3, 5, 13]
//  const onlyOdds = (arr) => {
//      let oddArray = []
//      for(let i = 0; i < arr.length; i++){
//          if(arr[i] % 2 !== 0){
//              oddArray.push(arr[i])
//          }
//      }
//      return oddArray
//  }
// console.log(onlyOdds(testArr2));

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // // --> "nicework"
// //create new array of just letters
// // join array to create string

// const stringsFromArray = (arr) => {
//     let string = ""
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] == "string"){
//           string = string.concat(arr[i])        }
//     }
//     return string

// }
// console.log(stringsFromArray(comboArr));


// Create a function that takes in an array of numbers and returns the sum.
// var addThese1 = [1, 2, 3, 4]
// // // --> 10

// const sum = (arr) => {
//     let answer = 0
//     for(let i = 0; i < arr.length; i++){
//         answer += arr[i]
//     }
//     return answer
// }
// console.log(sum(addThese1));



// var addThese2 = []
// // --> 0

// Create a function that takes in an array of numbers and returns the index of the largest number.
 var indexHighestNumber = [1, 4, 2, 3]
// // --> 1

const returnIndex = (arr) => {
    let number = 0
    let index
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > number){
            number = arr[i]
            index = i
        }
    }
    return index
}

console.log(returnIndex(indexHighestNumber));




// STRETCH Challenges

// Create a function that takes in a string and returns a sentence expressing whether the string is a palindrome. A palindrome is the same word spelled forward and backwards.
var isPalindrome1 = "racecar"
// // --> "Yes, racecar is a palindrome."

const palindromeChecker = (str) => {
  let array = str.split('')
  array = array.reverse().join('')
  return array == str
    ? `${str} is a palindrome`
    : `${str} is not a palindrome`
}
console.log(palindromeChecker(isPalindrome1))

// var isPalindrome2 = "albatross"
// // --> "No, albatross is not a palindrome."
// Create a function that takes in two arrays and returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
//
//
const arrayJoiner = (arr1, arr2) => {
  let newArray = []
  for(let i = 0; i<arr1.length; i++){
    if(!newArray.includes(arr1[i])){newArray.push(arr1[i])}
  }
  for(let j = 0; j<arr1.length; j++){
    if(!newArray.includes(arr2[j])){newArray.push(arr2[j])}
  }
  return newArray
}

console.log(arrayJoiner(arr1, arr2))


// Create a function that takes in an array and returns an array without any false, null, 0 or blank values.
 var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]

const falseyChecker = (arr) => {
  let array = []
  for(let i = 0; i<arr.length; i++){
    arr[i] && array.push(arr[i])
  }
  return array
}
console.log(falseyChecker(filterArrayValues))
//
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// var arrayLength = 6
// var arrayValue = 0
// // --> [0, 0, 0, 0, 0, 0]
const lengthValue = (len, val) => {
  let array = []
  for(let i = 0; i<len; i++){
    array.push(val)
  }
  return array
}


var arrayLength = 4
var arrayValue = 11
console.log(lengthValue(arrayLength, arrayValue))
// // --> [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10

const adding = num => {
  let sum = 0
  for(let i=0; i<=num; i++){
    sum += i
  }
  return sum
}


 var addUp2 = 10
var addUp3 = 600
console.log(adding(addUp3))
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55

// // --> 180300
// EPIC Challenges

// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here .
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
