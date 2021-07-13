// var testArr1 = [3, 9, 15, 4, 10]

// const multiplyThree = (array) => {
//     let newArray = []
//     for(let i=0; i<array.length; i++) {
//         newArray.push(array[i] * 3)
//     }
//     return newArray
// }
// console.log(multiplyThree(testArr1));

var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const oddNumbers = (array) => {
    let oddArray = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 != 0) {
            oddArray.push(array[i])
        }
    }
    return oddArray
}
console.log(oddNumbers(testArr2));

var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

const letter = (array) => {
    let newWord = []
    for(let i=0; i<array.length; i++) {
        if(typeof array[i] === "string") {
            newWord.push(array[i])
        }
    }
    return newWord.join("")
}
console.log(letter(comboArr));

var addThese1 = [1, 2, 3, 4]
var addThese2 = []

const addArr = (array) => {
    let sum = 0
    for(let i=0; i<array.length; i++) {
        sum = sum + array[i]
    }
    return sum
}
console.log(addArr(addThese1));
console.log(addArr(addThese2));

// Create a function that takes in an array of numbers and returns the index of the largest number.

var indexHighestNumbers = [1, 4, 2, 3]

const highestIndex = (array) => {
    let largestNum = 0
    for (let i=0; i<array.length; i++) {
        if(array[i] > largestNum) {
            largestNum = array[i]
        }
    }
    return largestNum.indexOf()
}
console.log(highestIndex(indexHighestNumbers));