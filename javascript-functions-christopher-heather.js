// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}
console.log(marco());
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `Welcome, ${name}`
}
console.log(greeting("Christopher"));
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
    if(number % 2 === 0) {
        return "Number is even"
    } else if(number % 2 !== 0) {
        return "Number is odd"
    } else {
        return "Number invalid"
    }
}
console.log(oddOrEven(2.24));
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
    return number * 3
}
console.log(triple(5));
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (number1, number2) => {
    return number1 * number2
}
console.log(multiply(10, 5));
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (number1, number2) => {
  if(number1%number2 === 0){
    return `Number ${number1} is evenly divisible by ${number2}`
  }else{
    return `Number ${number1} is not evenly divisible by ${number2}`
  }
}
console.log(divisibleBy(25, 4))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (number) => {
  if(number >= 90){
    return "You got an A"
  }else if(number >= 80){
    return "You got a B"
  }else if(number >= 70){
    return "You got a C"
  }else if(number >= 60){
    return "You got a D"
  }else{
    return "You got an F"
  }
}
console.log(assignGrade(30))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string1, string2) => {
  if(string1.length > string2.length){
    return string1
  }else {
    return string2
  }
}
console.log(isLonger("alright", "ok"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (number1, number2) => {
  if(number1 === number2){
    return "Numbers are equal"
  }else if(number1 > number2){
    return number1
  }else{
    return number2
  }
}
console.log(greaterNum(22,12))
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (string) => {
  return string.toUpperCase()
}
console.log(yelling("hello there"))

// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.

const helloWorld = (languageCode = "en") => {
  if(languageCode.toLowerCase() === "fr") {
    return "Bonjour Le Monde"
  } else if(languageCode.toLowerCase() === "de") {
    return "Hallo Welt"
  } else if(languageCode.toLowerCase() === "it") {
    return "Ciao Mondo"
  } else if(languageCode.toLowerCase() === "es") {
    return "Hola Mundo"
  } else if(languageCode.toLowerCase() === "en") {
    return "Hello World!"
  } else {
    return "Invalid language code"
  }
}
console.log(helloWorld("ES"));
