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

