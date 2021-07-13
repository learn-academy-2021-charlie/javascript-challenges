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
