//JavaScript Condtional Challenges

// 1

var item = 30

if(item <= 100){
  console.log("in budget");
}

// 2

var hungry = true
if(hungry === true){
  console.log("eat food");
}else{
  console.log("keep coding");
}

// 3
var trafficLight = "red"
if(trafficLight == "red"){
  console.log("stop");
}else if(trafficLight == "green"){
  console.log("go");
}else if(trafficLight == "yellow"){
  console.log("slow down");
}

// 4
var num1 = 57
var num2 = 44

if(num1 > num2){
  console.log(num1);
}else if(num2 > num1){
  console.log(num2);
}else if(num1 == num2){
  console.log("equal");
}

// 5
if(num1 % 2 == 0){
  console.log("even number");
}else if(num1 % 2 == 1){
  console.log("odd number");
}else if(num1 == 0){
  console.log("number is zero");
}


//STRETCH Challenges

//6
var grade = 79
if(grade == 100){
  console.log("perfect score");
}else if(grade <= 99 && grade >= 89){
  console.log("A");
}else if(grade <= 89 && grade > 79){
  console.log("B");
}else if(grade <= 79 && grade > 69){
  console.log("C");
}else if(grade <= 69 && grade > 59){
  console.log("D");
}else if(grade == 0){
  console.log("no grade available");
}

// 7 *come back to this problem later
var data = 45
var bool = false
var letter = "String"
if(data){
  console.log(typeof data);
}else if(bool){
  console.log(typeof bool);
}else if(letter){
  console.log(typeof letter);
}

// 8

var password = "applevalley123!"
if(password.length >= 12 && password.includes("!")){
  console.log("That is a mighty strong password!");
}else if(password.length >= 8 || password.includes("!")){
  console.log("That password is strong enough");
}else{
  console.log("That is not a valid password");
}
