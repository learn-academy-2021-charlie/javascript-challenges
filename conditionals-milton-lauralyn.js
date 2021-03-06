// Challenges
// Make sure you try different options and change the variables to ensure properly working code.

//
// 1. Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// var item = 9
// if (item <= 100)
// {
//   console.log("stays in budget")
// }
// else {
// console.log("not in budget")
// }

//
// 2. Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
// var hungry = false
// if (hungry) {
//   console.log("eat food")
// } else {
//   console.log("keep coding")
// }
//
// 3. Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
// var trafficLight = "green"
// var trafficLight = "yellow"
// var trafficLight = "red"
//
// if (trafficLight === "green") {
//   console.log("go")
// } else if (trafficLight === "yellow") {
//   console.log("slow down")
// }
// else {
//   console.log("stop")
// }


//
// 4. Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
//
var number1 = 8
// var number2 = 12
var number2 = 8

if (number1 > number2) {
  console.log(number1)
} else if (number2 > number1) {
  console.log(number2)
} else {
  console.log("equal")
}


// 5. Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var numb = 0
// var numb = 1
// var numb = 2
if (numb % 2 === 0){
  console.log("even")
} else if (numb % 2 !== 0){
  console.log("odd")
} else {
  console.log("zero")
}


//

// STRETCH Challengesa
//
// 6. Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
//
// 7. Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.
//
// 8. Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user's password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
