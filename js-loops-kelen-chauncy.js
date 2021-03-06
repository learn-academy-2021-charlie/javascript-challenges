// Logging values with for loops
// Write a for loop that logs each number from 1 - 20.
for(let i = 0;i <= 20; i++){
    console.log(i);
}
console.log("--------------------------------------------------")

// Write a for loop that logs the result of each number from 1 - 20 tripled.
for(let i = 0;i <= 20; i++){
    console.log(i * 3);
}
console.log("--------------------------------------------------")

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc
for(let i = 0;i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
    else{
        console.log("ODD");
    }

}
console.log("--------------------------------------------------")

// Looping over an array. Consider this variable:
 var nums = [3, 57, -9, 20, 67]

// Create a loop that will log the highest number from the array. Expected output --> 67
var highest;
for(let i = 0; i < nums.length; i++){
     if(!highest){
        highest = nums[i];
     }
     else if (nums[i] > highest){
        highest = nums[i];
     }
}
console.log(highest)
console.log("--------------------------------------------------")

// Create a loop that will log the lowest number from the array Expected output --> -9
var lowest;
for(let i = 0; i < nums.length; i++){
     if(!lowest){
        lowest = nums[i];
     }
     else if (nums[i] < lowest){
        lowest = nums[i];
     }
}
console.log(lowest)
console.log("--------------------------------------------------")

// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
for(let i = 0; i < nums.length; i++){
    console.log(nums[i] % 2)
}
console.log("--------------------------------------------------")

// Looping over a string. Consider this variable:
var myString = "learn student"
// Write the code that will log the number of times the letter "e" occurs in the string. Expected output --> 2
var count = 0;
for(let i = 0; i < myString.length; i++){
    if(myString[i] === 'e'){
        count++;
    }
}
console.log(count);
console.log("--------------------------------------------------")
// STRETCH Challenges
// Even or Odd: Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display the appropriate outcome. Expected output --> "0 is even" "1 is odd" "2 is even" ...etc
//
let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15]
numbersArray.forEach(e => {
   (e%2 == 0) ? console.log(`${e} is even`) : console.log(`${e} is odd`)
})
// numbersArray.map((num) => {
//   (num%2 == 0) ? console.log(`${num} is even`) : console.log(`${num} is odd`)
// })
for(let i = 0; i<=15; i++){
  (i%2 == 0) ? console.log(`${i} is even`) : console.log(`${i} is odd`)
  // if(i%2 == 0){ console.log(`${i} is even`)}
  // if(i%2 !== 0){ console.log(`${i} is odd`)}
}
//
// Fizz Buzz: Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five,
// replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz. Expected output --> 1, 2, "fizz", 4, "buzz", "fizz", 7,
// 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc
//

// for(let i = 0; i <= 100; i++){
//   if(i%15 != 0){
//     if(i%3==0){
//       console.log('fizz')
//     }else if(i%5==0){
//       console.log('buzz')
//     } else {console.log(i)}
//   } else {console.log('fizzbuzz')}
// }
