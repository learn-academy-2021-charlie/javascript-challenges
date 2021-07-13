// 1. Logging values with for loops

// Write a for loop that logs each number from 1 - 20.

// for(let i = 1; i <= 20; i++) {
//     console.log(i)
// }

// Write a for loop that logs the result of each number from 1 - 20 tripled.

// for(let i = 1; i <= 20; i++) {
//     console.log(i * 3)
// }

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc
<<<<<<< HEAD
=======

>>>>>>> 6033de239d0e6bfc2749e0793f256b22a3432e0d
// for(let i = 1; i <= 20; i++) {
//     if(i % 2 !== 0) {
//         console.log("ODD")
//     } else {
//         console.log(i)
//     }
// }
<<<<<<< HEAD
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
=======

// 2. Looping over an array. Consider this variable:

// var nums = [3, 57, -9, 20, 67, -5, -15]

// Create a loop that will log the highest number from the array. Expected output --> 67

// var acc = 0

// for(let i = 0; i < nums.length; i++) {
//     // if the value of the element of the array is greater than zero.
//     if (nums[i] > acc) {
//         acc = nums[i];
//     }
// }

// console.log(acc);

// Create a loop that will log the lowest number from the array Expected output --> -9

// var nums = [3, 57, -9, 20, 67, -5, -15]

// var acc = 0

// for(let i = 0; i < nums.length; i++) {
//     if (nums[i] < acc) {
//         acc = nums[i];
//         // console.log(acc); output --> -9 -15
//     }
//     //console.log(acc); output --> 0 0 -9 -9 -9 -9 -15
// }
// console.log(acc); // output --> -15


// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1

// var nums = [3, 57, -9, 20, 67]

// for(let i = 0; i < nums.length; i++) {
//     console.log(nums[i] % 2)
// }

// 3. Looping over a string. Consider this variable:

var myString = "learn student"

// Write the code that will log the number of times the letter "e" occurs in the string. Expected output --> 2

    // var letterCount = 0;
    // for (let i = 0; i < myString.length; i++) {
    //     if (myString.charAt(i) == "e") {
    //         letterCount += 1;
    //     }
    // }
    // console.log(letterCount)

//     Even or Odd: Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display the appropriate outcome. Expected output --> "0 is even" "1 is odd" "2 is even" ...etc




for(let i= 0; i<=15; i++) {
    if(i === 0 ){  
        console.log(`0`)
   }else if(i % 2 == 1 ){
    console.log(`${i} is odd`) 
    } else if(i % 2 == 0){   
    console.log(`${i} is even`)
    }  
}






// Fizz Buzz: Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz. Expected output --> 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc

// for(let i=1; i<=100; i++) {
//     if (i % 3 ==0 && i % 5 ==0){
//         console.log("fizzbuzz")
//     } else if(i % 3 == 0 ){
//         console.log("fizz")
//     } else if(i % 5 == 0){
//         console.log("buzz")
//     } else {
//         console.log(`${i}`)
//     }
// }
>>>>>>> 6033de239d0e6bfc2749e0793f256b22a3432e0d
