// var cost = 101

// if(cost<=100) {
//     console.log("in budget")
// } else if(cost>100) {
//     console.log("out of budget")
// } else {
//     console.log("error needs to be a number")
// }

// var hungry = false

// if(hungry === true) {
//     console.log("eat food")
// } else if(hungry === false) {
//     console.log("keep coding")
// } else {
    
// }

// var trafficLight = "yellow"

// if(trafficLight === "green") {
//     console.log("go") 
// } else if(trafficLight === "yellow") {
//     console.log("slow down")
// } else if(trafficLight === "red") {
//     console.log("stop")
// } else {

// }

// var num1 = 2
// var num2 = 2

// if(num1 > num2) {
//     console.log(`${num1} is greater than ${num2}`)
// } else if(num1 < num2) {
//     console.log(`${num2} is greater than ${num1}`)
// } else if(num1 === num2) {
//     console.log("The numbers are the same")
// } else {

// }

// var num = 8

// if(num === 0) {
//     console.log("zero")
// } else if(num % 2 === 0) {
//     console.log("even")
// } else {
//     console.log("odd")
// }

// var grade = -1

// if (grade >= 100) {
//     console.log("Perfect score")
// }else if (grade >= 90 && grade < 100){
//     console.log("A")
// }else if (grade >= 80 && grade < 90){
//     console.log("B")
// }else if (grade >= 70 && grade < 80){
//     console.log("C")
// }else if (grade >= 60 && grade < 70){
//     console.log("D")
// }else if (grade >= 50 && grade < 60){
//     console.log("F")
// }else if (grade === 0) {
//     console.log("no grade available")
// }else{
//}

// var test = true
// if (typeof test === 'string'){
//     console.log("i am a string")

// }else if(typeof test === 'number'){
//     console.log("i am a number")    
// }else if(typeof test === 'boolean'){
//     console.log("i am a boolean and this is true or false.")
// }else{

// }

var pass = "setofnumbers!"

if(pass.length >= 12 && pass.includes('!') === true) {
    console.log("That is a mighty strong password!")
} else if(pass.length >= 8 || pass.includes('!') === true) {
    console.log("That password is strong enough.")
} else {
    console.log("That is not a valid password.")
}