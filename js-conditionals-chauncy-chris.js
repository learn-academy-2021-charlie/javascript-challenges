//Make sure you try different options and change the variables to ensure properly working code.

// 1. Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
console.log("Problem 1:")
var item = 500;
var inBudget = "in budget";
var notInBudget = "not in budget";

if(item <= 100){
    console.log(inBudget);
}
else{
    console.log(notInBudget);
}

console.log("-----------------------------------------------------")
// 2. Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
console.log("Problem 2:")
var hungry = false;

if(hungry){
    console.log("eat food!");
}
else{
    console.log("keep coding!");
}

console.log("-----------------------------------------------------")
// 3. Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
console.log("Problem 3:")
var trafficLight = "red";

if(trafficLight === "green"){
    console.log("Go!");
}
else if(trafficLight === "yellow"){
    console.log("Slow Down!");
}
else{
    console.log("Stop!");
}

console.log("-----------------------------------------------------")
// 4. Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
console.log("Problem 4:")
var num1 = 20;
var num2 = 20;

if(num1 > num2){
    console.log(num1);
}
else if(num2 > num1){
    console.log(num2);
}
else{
    console.log("equals!");
}
console.log("-----------------------------------------------------")
// 5. Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
console.log("Problem 5:")
var num3 = 0;

if(num3 === 0){
    console.log("Zero!");
}
else if(num3 % 2 === 0){
    console.log("even");
}
else {
    console.log("odd");
}
console.log("-----------------------------------------------------")


// 6. Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
console.log("Problem 6:")

var gradePercent = 90;
var gradeA = "A";
var gradeB = "B";
var gradeC = "C";
var gradeD = "D";
var gradeF = "F";

if(gradePercent === 100){
    console.log("perfect score")
}
else if(gradePercent >= 90 && gradePercent <= 99){
    console.log(gradeA);
}
else if(gradePercent >= 80 && gradePercent <= 89){
    console.log(gradeB)
}
else if(gradePercent >= 70 && gradePercent <= 79){
    console.log(gradeC)
}
else if(gradePercent >= 60 && gradePercent <= 69){
    console.log(gradeD)
}
else if(gradePercent <= 59 && gradePercent > 0){
    console.log(gradeF)
}
else {
    console.log("no grade available")
}
console.log("-----------------------------------------------------")

// 7. Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.
console.log("Problem 7:")
var dataType = "hello"

if(typeof dataType === 'number'){
    console.log("number")
}
else if(typeof dataType === 'boolean'){
    console.log("boolean")
}
else {
    console.log("string")
}
console.log("-----------------------------------------------------")

// 8. Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

var password = "abcdefghijkl"

if(password.length >= 12 && password.includes("!")){
    console.log("That is a mighty strong password!")
}
else if(password.length >= 8 || password.includes("!")){
    console.log("That password is strong enough.")
}
else{
    console.log("That is not a valid password")
}
console.log("-----------------------------------------------------")