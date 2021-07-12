// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.
// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}

console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

const greeting = (personName) => {
    return `Welcome, ${personName}!`
}

console.log(greeting("yan"))

const greeting2 = (name) => {
    return `Hello there ${name}!`
}

console.log(greeting2("Matt"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

const oddOrEven = (number) =>{
    if(number === 0){
        return `This number is zero`
    }else if(number % 2 === 0){
        return `The number is even`
    }else{
        return `The number is odd`
    } 
    
}
console.log(oddOrEven(35354))
console.log(oddOrEven(0))
console.log(oddOrEven(35))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (number) =>{
    var triples = number * 3
    return triples
    
}
console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiply = (number1, number2) =>{
    var multiplied = number1 * number2
    return multiplied
    
}
console.log(multiply(3, 9))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// STRETCH Challenges

// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

// pluralizer(5, "cat")
// // expected output: "5 cats"

// pluralizer(1, "dog")
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

