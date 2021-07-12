const marco = () => {
return "polo"
}
console.log(marco())

const greeting = (name) => {
  return `welcome, ${name}!`
  }
console.log(greeting("luis"))

const oddOrEven = (num) => {
  if(num % 2 == 0){
    return "even number"
  } else if (num % 2 == 1){
    return "odd number"
  }else {
    return "not a number"
    }
}
console.log(oddOrEven(8))

const triple = (num1) => {
  return num1 * 3
}
console.log(triple(3))

const multiply = (num2, num3) => {
  return num2 * num3
}
console.log(multiply(3, 4))
