// Write a for loop that logs each number from 1 - 20.
// Write a for loop that logs the result of each number from 1 - 20 tripled.
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc

// for(let i =1; i <=20; i ++){
//     // console.log(i)
//     // console.log(i * 3)
//     if(i % 2 === 0){
//     console.log (i)
//     } else { console.log("odd")

//     } 

// } 
// Looping over an array. Consider this variable:
var nums = [3, 57, -9, 20, 67]
// Create a loop that will log the highest number from the array. Expected output --> 67
// Create a loop that will log the lowest number from the array Expected output --> -9
// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
 
// for(let i=0; i<nums.length; i++){
//     let remainder = nums [i] % 2
//     console.log(remainder)
// }



// var highest = nums[0]
// for(let i= 1; i<nums.length; i++){
//     let currentNum = nums[i]
//     // console.log(currentNum)
//     if(currentNum > highest) {
//         highest = currentNum
//         // console.log (`new highest is ${highest}`)
//     }
// }   
//     console.log(highest)


// var nums = [3, 57, -9, 20, 67]

// first set lowest = 3
// i = 1, currentNum = 57, 57 < 3? no, skip it
// i = 2, currNum = -9, -9 < 3? yes! reassign lowest, so lowest = -9
// i = 3, currNum = 20, 20 < -9? no! keep going
// i = 4, currNum = 67, 67 < -9? no!
// i = 5, but 5 < 5 for i < nums.length. so we stop.

// var lowest = nums[0]

// for(let i= 1; i<nums.length; i++){
//     console.log(`i = ${i}, lowest = ${lowest}`)
//     console.log(`checking ${nums[i]} < ${lowest}`)
//     if(nums[i] < lowest) {  // check if current num is less than lowest
//         lowest = nums[i]    // reassign current num as the new lowest num
//         console.log (`new lowest is ${lowest}`)
//     }
// }   

// console.log(lowest)


// 3. Looping over a string. Consider this variable:
var myString = "learn student"
// Write the code that will log the number of times the letter "e" occurs in the string. Expected output --> 2

let occurrencesOfE = 0

for (let i = 0; i < myString.length; i++) {
    // console.log(`current letter is ${myString[i]}`)
    if (myString[i] === 'e') {
        // console.log(`found an e!`)
        // console.log(occurrencesOfE)
        // occurrencesOfE = occurrencesOfE + 1
        occurrencesOfE++
    }
}

// console.log(occurrencesOfE)



// STRETCH Challenges
// Even or Odd: Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display the appropriate outcome. Expected output --> "0 is even" "1 is odd" "2 is even" ...etc

// for loop i = 0; i <= 15
// check if curr num is odd or even
// if num is even, output num is even
// if num is odd, output num is odd

for (let i = 0; i <= 15; i++) {
    // console.log(i)
    if (i % 2 === 0) {  // i is even
        console.log(`${i} is even`)
    } else {    // i is odd
        console.log(`${i} is odd`)
    }
}


// Fizz Buzz: Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz. Expected output --> 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc

// a number is a multiple of 5 if it evenly divides by that number.
// 5 / 5 = 1, r 0
// 10 / 5 = 2, r 0
// 15 / 3 = 5, r 0
// 3 / 3 = 1, r 0
// 4 / 3 = 1 r 1, 4 is not a multiple of 3

for (let i = 1; i <= 100; i++) {
    // check if num is a multiple of 3, if so, log fizz
    if (i % 3 === 0) {
        console.log("fizz")
    } else if (i % 5 === 0) { 
        // check if num is a multiple of 5, if so, log buzz
        console.log("buzz")
    } else if (i % 3 === 0 && i % 5 === 0) {
        // check if num is a multiple of 3 and 5, if so, log fizzbuzz
        console.log("fizzbuzz")
    } else {
        // otherwise log that number
        console.log(i)
    }
    
}   
 