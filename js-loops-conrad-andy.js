// Logging values with for loops
// Write a for loop that logs each number from 1 - 20.
// for(let i = 1; i <= 20; i++) {
//     console.log(i)
// }
// Write a for loop that logs the result of each number from 1 - 20 tripled.
// for(let i = 1; i <= 20; i++) {
//     console.log(i * 3)
// }
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc
// for(let i = 1; i <= 20; i++) {
//     if(i % 2 !== 0) {
//         console.log("ODD")
//     } else {
//         console.log(i)
//     }
// }
// Looping over an array. Consider this variable:
 var nums = [3, 57, -9, 20, 67]
// Create a loop that will log the highest number from the array. Expected output --> 67

 for( let i=0 ; i < nums.length; i++){
     if(nums.sort((a, b) =>a-b))
     console.log(nums[4])
 }


    
// Create a loop that will log the lowest number from the array Expected output --> -9
//for()

for( let i=4 ; i < nums.length; i++){
    if(nums.sort((a, b) =>b-a))
    console.log(nums[4])
}
// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
// for(let i=0;i<nums.length; i++ ){
//     if(nums % 2)
//     console.log(nums)
// }
// Looping over a string. Consider this variable:
// var myString = "learn student"
// Write the code that will log the number of times the letter "e" occurs in the string. Expected output --> 2
