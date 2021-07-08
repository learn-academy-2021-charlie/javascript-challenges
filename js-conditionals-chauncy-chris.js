//Make sure you try different options and change the variables to ensure properly working code.

// 1. Write an if/else statement that takes a variable of item and logs "in budget" if a price is $100 or less.
console.log("Problem 1:")
var item = 500;

if(item <= 100){
    console.log("in budget");
}
else{
    console.log("not in budget");
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