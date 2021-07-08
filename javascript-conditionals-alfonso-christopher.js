// Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 50
if(item <= 100) {
    console.log("in budget")
}

// Write an if/else statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true
if(hungry) {
    console.log("eat food")
} else {
    console.log("keep coding")
}

// Write an if/else statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "red"
if(trafficLight === "green") {
    console.log("go")
} else if(trafficLight === "yellow") {
    console.log("slow down")
} else if(trafficLight === "red") {
    console.log("stop")
} else {
    console.log("enter green, yellow, or red")
}

// Write an if/else statement that takes two variables of numbers and outputs the larger number, or logs equal if the numbers are the same.
var firstNum = 100
var secondNum = "blue"
if(firstNum > secondNum) {
    console.log(firstNum)
} else if(secondNum > firstNum) {
    console.log(secondNum)
} else if(firstNum === secondNum) {
    console.log("equal")
} else {
    console.log("enter two numbers")
}

// Write an if/else statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num = "blue"
if(num === 0){
    console.log("it's zero!")
}else if(num % 2 === 1){
    console.log("it's odd!")
}else if(num % 2 === 0){
    console.log("it's even!")
}else{
    console.log("enter a number")
}

var testNum = 13
console.log(testNum)
testNum = parseInt(testNum / 2)
console.log(testNum);
testNum = testNum * 2
console.log(testNum)

// console.log(!(testNum & 1))
// function isEven(n)
//     {
//         // n&1 is 1, then odd, else even
//         return (!(n & 1));
//     }

// console.log(isEven(testNum))

// Write an if/else statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."


var grade = "blue"
if(grade >= 100) {
    console.log("perfect score")
} else if(grade >= 90 && grade < 100) {
    console.log("Grade: A")
} else if(grade >= 80 && grade < 90) {
    console.log("Grade: B")
} else if(grade >= 70 && grade < 80) {
    console.log("Grade: C")
} else if(grade >= 60 && grade < 70) {
    console.log("Grade: D")
} else if(grade >= 1 && grade < 60) {
    console.log("Grade: F :(")
} else if(grade === 0) {
    console.log("no grade available")
} else {
    console.log("enter a valid number")
}

// Write an if/else statement that takes a variable of a boolean, number, or string datatype and logs the data type of the variable HINT: use the JS operator typeof.

var myVariable = 55
console.log(typeof myVariable)
if(typeof myVariable === "boolean") {
    console.log(`${myVariable} is a boolean`)
} else if(typeof myVariable === "number") {
    console.log(`${myVariable} is a number`)
} else if(typeof myVariable === "string") {
    console.log(`${myVariable} is a string`)
} else {
    console.log("Enter a data type")
}