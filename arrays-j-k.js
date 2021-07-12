var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
// groceryList.push("soda")
//   console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.

// groceryList[groceryList.length-1] = "granola"
//   console.log(groceryList)

// Write the code that will return a subset of the array containing only "chips" and "dip".

var newList = groceryList.slice(0,2)

// console.log(groceryList.slice(0,2))

// Write the code that will add "beans" to the "chips" and "dip" array.

// newList.push("beans")
//  console.log(newList)


// Consider the variable:
// var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
//
// numbers.unshift(0)
// console.log(numbers)
//
// Write the code that will add the number 12 to the end of the array.
//
// numbers.push(12)
// console.log(numbers)
//
// Write the code that will remove the first number from the array.
//
// numbers.shift()
// console.log(numbers)
//
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
//
// console.log([0].concat(numbers))
// console.log(numbers)
//
// Write the code that finds the index of the first appearance of the number 2.
//
// console.log(numbers.indexOf(2))
//
// Write the code that finds the index of the last appearance of the number 2.
//
// console.log(numbers.lastIndexOf(2))
//
// Write the code that returns the number at the third index.

// console.log(numbers[3])


var characters = ["y", "a", "r", "r", "a"]
//
// Write the code that brings all the letters in the characters array together into a string.
//
// console.log(characters.join(""))

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

let charsReversed = characters.reverse()
// console.log(charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
//
// console.log(charsReversed.join("*"))

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
//
console.log(charsReversed.join(""))

// Create two arrays consisting of three first names of your cohort members in each.
//
let array1 = ["jared", "kelen", "amanda"]
let array2 = ["arturo", "chris", "heather"]


// Write the code that sorts the names in alphabetical order.
//
// console.log(array1.concat(array2).sort())

// Write the code that sorts the names in reverse alphabetical order.
//
// console.log(array1.concat(array2).sort().reverse())

// Write the code that sorts all the
// names in alphabetical order in a single array.

var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.
//
console.log(numbers[1], numbers[3], numbers[5])

// Write the code that adds the values from odd indexes into the oddIndexes array.
