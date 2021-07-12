// Logging values with for loops
// Write a for loop that logs each number from 1 - 20.

// for (let i = 0; i<21; i++ ){
//   console.log(i)
// }

//or

// for (let i = 0; i <= 20; i++){
//     console.log(i)
// }

// Write a for loop that logs the result of each number from 1 - 20 tripled.
//
// for (let i = 0; i<21; i++ ){
//   console.log(i * 3)
// }


// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc

// for (let i = 0; i<21; i++ ){
//   if (i % 2 === 0){
//     console.log(i)
//   }else {
//     console.log("odd")
//   }
// }


// Looping over an array. Consider this variable:
// var nums = [3, 57, -9, 20, 67]

// Create a loop that will log the highest number from the array. Expected output --> 67

var array = [3, 57, -9, 20, 67]
var largest = [0]

for (let i = 0; array.length; i++){
  if (array[i] > largest){
    largest[0] = array[i]
  }
}
console.log(largest);
//
// Create a loop that will log the lowest number from the array Expected output --> -9
//
// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
