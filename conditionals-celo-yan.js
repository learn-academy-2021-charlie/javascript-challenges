// Conditionals Challenge

// Challenges
// Make sure you try different options and change the variables to ensure properly working code.

// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.

let item = 100;

if (item < 100) {
    console.log("in budget")
} else {
    console.log("not in budget!!!")
}

// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

let feeling = 'hungry';
if (feeling == 'hungry') {
    console.log('eat food')
} else {
    console.log('keep coding')
}

// Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

let trafficLight = 'yellow'

if (trafficLight == 'green') {
    console.log('GO!')
} else if (trafficLight == 'red'){
    console.log('Stop!!!')
} else {
    console.log('slow down!')
}

// Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
var number1 = 9
var number2 = 1222222
if(number1 > number2){
    console.log(number1)
}else if(number1 < number2){
    console.log(number2)
}else{
    console.log("They are equal")
}
    
// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var number= 0
if(number == 0){
    console.log("This number is zero")
}else if(number % 2 == 0){
    console.log("This number is even")
}else{
    console.log("This number is odd")
}

// STRETCH Challenges
// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, 
//if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var grade = 60
if(grade < 60){
    console.log("You got F")
}else if(grade >= 60 && grade < 70){
    console.log("You got D")
}else if(grade >=70 && grade < 80){
    console.log("You got C")
}else if(grade >=80 && grade < 90){
    console.log("You got B")
}else{
    console.log("You got A")}

// Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type 
// of the variable HINT: use the JS operator typeof.

let ourVariable = 'Yan'

if (typeof ourVariable === 'boolean') {
    console.log('It is a boolean')
} else if (typeof ourVariable === 'string') {
    console.log('It is a string')
} else if (typeof ourVariable === 'number') {
    console.log('It is a number')
} else {
    console.log('This is nothing!')
}


// Create a password checker using a single if/else statement. If a user inputs a password with 12 or more characters 
// AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, 
// then log "That password is strong enough." Log "That is not a valid password." for every other input.

let password = '9990808!99';

if (password.length >= 12 && password.includes('!')) {
    console.log('That is a mighty strong password!')
} else if (password.length < 12 && password.length >= 8 || password.includes('!')) {
    console.log("That password is strong enough.")
} else {
    console.log("That is not a valid password.")
}
