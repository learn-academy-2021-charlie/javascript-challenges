// Make sure you try different options and change the variables to ensure properly working code.

// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var food = 75
if (food <=100){
    console.log("in the budget")
} else {
    console.log("outside of the budget")
}

// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = false
if(hungry==true){
    console.log ("eat food")
}
else{ console.log ("keep coding")
}
// Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "red"
if(trafficLight == "green"){
    console.log ("go")}
    else if (trafficLight == "yellow"){
    console.log("slow down!")}
        else if (trafficLight == "red"){
        console.log ( "stop")
    }
// Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
var number1 =27
var number2 =27
if(number1 > number2 ){
    console.log(number1)
}
else if (number1 < number2){
    console.log(number2)
}
else if (number1 === number2){
    console.log("your numbers are the same")
}
// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var number = 4
if (number == 0){
  console.log("number is zero")
}else if(number%2 == 1){
  console.log("number is odd")
}else if(number%2 == 0) {
  console.log("number is even")
}

// STRETCH Challenges

// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var grade = "0%"
if(grade == "0%"){
  console.log("No grade is available")
}else if(grade == "100%"){
  console.log("perfect score")
}else if(grade >= "90%"){
  console.log("You got an A")
}else if(grade >= "80%"){
  console.log("You got a B")
}else if(grade >= "70%"){
  console.log("You got a C")
}else if(grade >= "60%"){
  console.log("You got a D")
}else if(grade >= "1%"){
  console.log("You got an F")
}
// Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.
var dataType = 35
if(typeof dataType == "string" ){
  console.log("String")
}else if( typeof dataType == "boolean"){
  console.log("Boolean")
}else if(typeof dataType == "number"){
  console.log("Number")
}else{
  console.log("undeclared variable")
}
// Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
var password = "nope"
if(password.length >= 12 && password.includes("!")){
  console.log("That is a mighty strong password!")
}else if(password.length >= 8 || password.includes("!")){
  console.log("That password is strong enough.")
}else {console.log("That is not a valid password.")};

 var colorarray = ["blue", "green", "yellow", "pink", ]
 console.log(colorarray .indexof([3]))
