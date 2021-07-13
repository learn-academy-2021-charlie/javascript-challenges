// ### Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.  
// **Don't forget to pseudo code.**

// 1. Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// ```javascript
var testArr1 = [3, 9, 15, 4, 10]
// // --> [9, 27, 45, 12, 30]
// ```

const mult3 = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 3)
    }
    return newArr
}

// console.log(mult3(testArr1))

// 2. Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// ```javascript
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // --> [-7, 3, 5, 13]
// ```

const oddNums = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// console.log(oddNums(testArr2))


// 3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. **HINT:** use the `typeof` method.

// ```javascript
var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // --> "nicework"
// ```

const strArr = (arr) => {
    let newStr = ""
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            newStr += arr[i]
        }
    }
    return newStr
}

console.log(strArr(comboArr))

// 4. Create a function that takes in an array of numbers and returns the sum.

// ```javascript
var addThese1 = [1, 2, 3, 4]
// // --> 10

var addThese2 = []
// // --> 0
// ```

const sumArr = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

// console.log(sumArr(addThese1))

// console.log(sumArr(addThese2))

// 5. Create a function that takes in an array of numbers and returns the index of the largest number.

// ```javascript
var indexHighestNumber = [1, 4, 2, 3]
// // --> 1
// ```

const largestIndex = (arr) => {
    let largestIndex = 0
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[largestIndex]) {
            largestIndex = i
        }
    }
    return largestIndex
}

console.log(largestIndex(indexHighestNumber))

// **STRETCH Challenges**
// 1. Create a function that takes in a string and returns a sentence expressing whether the string is a palindrome. A palindrome is the same word spelled forward and backwards.

// ```javascript
var isPalindrome1 = "racecar"
// // --> "Yes, racecar is a palindrome."

var isPalindrome2 = "albatross"
// // --> "No, albatross is not a palindrome."
// ```

const isPalindrome = (str) => {
    // go backwards from the str to see if the chars
    // match when going forward too
    for (let i = 0, j = str.length-1; i < str.length; i++, j--) {
        // if chars don't match then not a palindrome
        if (str[i] !== str[j]) {
            return `No, ${str} is not a palindrome`
        }
        return `Yes, ${str} is a palindrome`
    }
}

console.log(isPalindrome(isPalindrome1))
console.log(isPalindrome(isPalindrome2))

// 2. Create a function that takes in two arrays and returns one array with no duplicate values.

// ```javascript
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]
// ```

// make a new array
// combine arrays
// check if current num of combined arr is in the new unique array, if current num is not, then push it
// return the array

const uniqueArr = (arr1, arr2) => {
    let unique = []
    combined = arr1.concat(arr2)
    
}

// 3. Create a function that takes in an array and returns an array without any false, null, 0 or blank values.

// ```javascript
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]
// ```

// 4. Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.

// ```javascript
// var arrayLength = 6
// var arrayValue = 0
// // --> [0, 0, 0, 0, 0, 0]

// var arrayLength = 4
// var arrayValue = 11
// // --> [11, 11, 11, 11]
// ```

// 5. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.

// ```javascript
// var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10

// var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55

// var addUp3 = 600
// // --> 180300
// ```

// **EPIC Challenges**

// - Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// - Create an HTML page and link your JavaScript file. More info [ here ](../tools_and_resources/linking_html_and_javascript.md).
// - As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// - As a user, I can see if my guess is too high or too low.
// - As a user, if I guess the "answer" correctly I am notified that I won.
// - As a user, I can continue to guess the "answer" until I am correct.
// - STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.