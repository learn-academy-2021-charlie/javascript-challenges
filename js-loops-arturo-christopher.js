// Logging values with for loops
// Write a for loop that logs each number from 1 - 20.
// Write a for loop that logs the result of each number from 1 - 20 tripled.
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc

// for(let i=1; i<21; i++) {
//     console.log(i)
// }

// for(let i=1; i<21; i++) {
//     console.log(i*3)
// }
//
// for(let i=1; i<21; i++) {
//     if(i % 2 !== 0) {
//         console.log("Odd");
//     } else {
//         console.log(i);
//     }
// }
// Looping over an array. Consider this variable:
var nums = [3, 57, -9, 20, 67]
// // // Create a loop that will log the highest number from the array. Expected output --> 67
// //   var highestNum = nums[0]
// // for (let i=0; i <nums.length ; i++) {
// //     if (highestNum < nums[i]) {highestNum = nums[i]}
// // }
// // console.log(highestNum)
//
// // Create a loop that will log the lowest number from the array Expected output --> -9
//   var lowestNum = nums[0]
// for (let i=0; i <nums.length ; i++) {
//     if (nums[i] < lowestNum) {lowestNum = nums[i]}
// }
// console.log(lowestNum)

// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
 for (i=0; i<nums.length ; i++) {
   console.log(nums[i] % 2) 
 }
