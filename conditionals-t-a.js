// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
//
// // var item = 100
// if(item <= 100){
//   console.log("in budget");
// }
// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
// var hungry = false
// if (hungry === true){
//   console.log("eat food")
// }else{
//   console.log("keep coding")
// }
//
// Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
//
// var trafficLight = "red"
// if (trafficLight === "green"){
//   console.log("go")
// }else if (trafficLight === "yellow"){
//   console.log("slow down")
// }else {
//   console.log("stop")
// }
// Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
//
// var num1 = 10
// var num2 = 10
// if(num1 > num2){
//   console.log(num1);
// } else if(num2 > num1){
//   console.log(num2);
// }else{
//   console.log(`${num1}, ${num2} are equal`);
// }


// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
//
// var num1 = 11
//
// if(num1 === 0){
//   console.log("zero");
// }else if(num1 % 2 === 0){
//   console.log("even");
// }else{
//   console.log("odd");
// }
// }else if (num1 % 2 !== 0){
//   console.log("odd"); --> tests for odd numbers

// STRETCH Challenges
//
// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
//
// var grade = 80
//
// if(grade === 0){
//   console.log("no grade available");
// }else if(grade === 100){
//   console.log("perfect score");
// }else{
//   console.log("good effort!");
// }


// Write an if/else statement that takes a variable of a boolean, 
//number, or string datatype and logs the data type of the variable 
//HINT: use the JS operator typeof.
// var healthy = 42
// if(typeof healthy === "string"){
//   console.log(typeof healthy)
// }else if(typeof healthy === 'boolean'){
//   console.log(typeof healthy)
// }else if(typeof healthy === 'number'){
//   console.log(typeof healthy)
// }
//
// Create a password checker using a single if/else statement. 
//If a user inputs a password with 12 or more characters 
//AND the password includes !, then log "That is a mighty strong password!" 
//If the user’s password is 8 or more characters OR includes !, 
//then log "That password is strong enough." Log "That is not a valid password." 
//for every other input.
 
// var password = "!"

// if(password.length >= 12 && password.includes("!")){
//   console.log("That is a mighty strong password!")
// }else if(password.length >= 8 || password.includes("!")){
//   console.log("That password is not strong enough.")
// }else
//   console.log("That is not a valid password")