// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// var testArr1 = [3, 9, 15, 4, 10]

// const mult3 = (array) => {
//     for(let i=0; i<array.length; i++){
//         array[i] = array[i] * 3
//     } 
//     return array
// } 
// console.log(mult3(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

// const odd = (array) => {
//     let evenArr = []
//     for(let i=0; i<array.length; i++){
//         if (array[i] % 2 !== 0) {
//             evenArr.push(array[i])
//         }       
//     }
//     return evenArr
// } 
// console.log(odd(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

// const letter = (string) => {
//     let newArr = []
//     for(let i=0; i<string.length; i++){
//         if (typeof string[i] === "string"){
//             newArr.push(string[i])
//         }
//     }
//     return newArr.join("")
// }
// console.log(letter(comboArr))

// Create a function that takes in an array of numbers and returns the sum.

// var addThese1 = [1, 2, 3, 4]
// // --> 10

// var addThese2 = []
// // --> 0

// const sum = (array) => {
//     var newNum = 0
//     for(let i=0; i<array.length; i++){
//         newNum += array[i] 
//     }
//     return newNum
// }
// console.log(sum(addThese1))
// console.log(sum(addThese2))

// Create a function that takes in an array of numbers and returns the index of the largest number.

// var indexHighestNumber = [1, 4, 2, 3]
// // --> 1

// const large = (array) => {
//     var newNum = 0
//     var index = 0
//     for(let i=0; i<array.length; i++){
//         if(array[i] > newNum){
//         newNum = array[i]
//         index = i
//         }
//     }
//     return index
// }
// console.log(large(indexHighestNumber))

// STRETCH Challenges

// Create a function that takes in a string and returns a sentence expressing whether the string is a palindrome. A palindrome is the same word spelled forward and backwards.
 var isPalindrome1 = "racecar"
// --> "Yes, racecar is a palindrome."

 var isPalindrome2 = "albatross"
// // --> "No, albatross is not a palindrome."

const isPalindromeTest = (str) => {
    //check the 1st && check the last index ===
    //if there === then move 1st index up 1 and move the last index down 1

    var lastIndex = str.length - 1;
    for(let i = 0; i < str.length/2; i++)
    {
        // console.log("first: " + str[i])
        //console.log("last: " + str[lastIndex])
        if(str[i] === str[lastIndex])
        {
            lastIndex--;
        }
        else{
            return `No, ${str} is not a palindrome`
        }
    }
    return `Yes, ${str} is a palindrome`
}

console.log(isPalindromeTest(isPalindrome1))
console.log(isPalindromeTest(isPalindrome2))

// Create a function that takes in two arrays and returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// --> [3, 7, 10, 5, 4, 8, 2, 1]

const combineArrays = (arr1, arr2) => {
    let newArr = []
    
    newArr = arr1.concat(arr2)
    //create a for loop 
    //hold on to the 1st and then check the rest elements to see if there is a duplicate 
    //if there is a dup. then slice() it out
    //keep checking until end to remove duplicates

    //then repeat for each element

    return newArr
}

console.log(combineArrays(arr1, arr2))

// Create a function that takes in an array and returns an array without any false, null, 0 or blank values.
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// var arrayLength = 6
// var arrayValue = 0
// // --> [0, 0, 0, 0, 0, 0]

// var arrayLength = 4
// var arrayValue = 11
// // --> [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10

// var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55

// var addUp3 = 600
// // --> 180300