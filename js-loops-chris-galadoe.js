// Logging values with for loops
// Write a for loop that logs each number from 1 - 20.

// for (let i=1; i<=20; i+=1) {
//     console.log(i)
// }

// Write a for loop that logs the result of each number from 1 - 20 tripled.
// for (let i=1; i<=20; i+=3) {
//     console.log(i)
// }
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD,
// 2, ODD, 4, ODD, 6 ...etc
// for (let i=1; i<=20; i+=1) {
//     if (i % 2 == 0) {
//     console.log(i) }
//  else if (i % 2 !== 0) {
//     console.log("Odd")
// }
// }


<<<<<<< HEAD
    // Looping over an array. Consider this variable:
var nums = [3, 57, -9, 20, 67]
var largest = 0
var smallest = 0
// Create a loop that will log the highest number from the array. Expected output --> 67
for(let i=0; i < nums.length; i++){
  if(nums[i] > largest){
    largest = nums[i]
  }
}
console.log(largest);
// Create a loop that will log the lowest number from the array Expected output --> -9
for(let i=0; i < nums.length; i++){
  if(nums[i] < smallest){
    smallest = nums[i]
  }
}
console.log(smallest);
// Create a loop that will log the remainder of each number when divided by
for(let i=0; i < nums.length; i++){
  console.log(nums[i] % 2);
}

=======
// var nums = [3, 57, -9, 20, 67]
// var largest = 0
// var smallest = 0
// Create a loop that will log the highest number from the array. Expected output --> 67
// for(let i=0; i < nums.length; i++){
// if(nums[i] > largest){
// largest = nums[i]
// }
// }
// console.log(largest);
// Create a loop that will log the lowest number from the array Expected output --> -9
// for(let i=0; i < nums.length; i++){
// if(nums[i] < smallest){
// smallest = nums[i]
// }
// }
// console.log(smallest);
// Create a loop that will log the remainder of each number when divided by
// for(let i=0; i < nums.length; i++){
// console.log(nums[i] % 2);
// }
>>>>>>> 9040e7bdac86a0422f7e7d417c4b7bb731512101
// 2. Expected output --> 1, 1, -1, 0, 1
// Looping over a string. Consider this variable:
var myString = "learn student"
var num = 0
// Write the code that will log the number of times the letter "e" occurs in the string. Expected output --> 2
<<<<<<< HEAD
// STRETCH Challenges
// Even or Odd: Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display the appropriate outcome. Expected output --> "0 is even" "1 is odd" "2 is even" ...etc
// Fizz Buzz: Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz. Expected output --> 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc
=======

for(let i=0; i < myString.length; i++) {
    if (myString[i] === "e"){
    num = myString[i]
    }console.log(myString[i])
}
>>>>>>> 9040e7bdac86a0422f7e7d417c4b7bb731512101
