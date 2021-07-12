// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
//
// Consider the variable:

var groceryList = ["chips", "dip", "cookies"]

// 1. Write the code that will add "soda" to the end of the original array.
// groceryList.push("soda")
// console.log(groceryList)
//
// 2. Write the code that will add "granola" to the end of array without altering the original array.
// var groceryList2 = ["granola"]
// console.log(groceryList.concat(groceryList2))
//
// 3. Write the code that will return a subset of the array containing only "chips" and "dip".
// console.log(groceryList.slice(0, 2))
//

// 4. Write the code that will add "beans" to the "chips" and "dip" array.
// var chipsDip = groceryList.slice(0,2)
// console.log(chipsDip)
// chipsDip.push("beans")
// console.log(chipsDip)

//
// Consider the variable:
//
var numbers = [2, 4, 6, 8, 10]
//
// 5. Write the code that will add the number 0 to the beginning of the array.
// console.log(numbers.unshift(0))  // output is the length of the array
// console.log(numbers)

//
// 6. Write the code that will add the number 12 to the end of the array.
// console.log(numbers.push(12))
// console.log(numbers)

//
// 7. Write the code that will remove the first number from the array.
// console.log(numbers.shift())
// console.log(numbers)

//
// 8. Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
// var number = [0]
// console.log(number.concat(numbers))

//
// Consider the variable:
//
var numSet = [2, 13, 6, 8, 4, 2]

// 9. Write the code that finds the index of the first appearance of the number 2.
// console.log(numSet.indexOf(2))
//
// 10. Write the code that finds the index of the last appearance of the number 2.
// console.log(numSet.lastIndexOf(2))
//
// 11. Write the code that returns the number at the third index.
// console.log(numSet[3])
//
// Consider the variable:
//
var characters = ["y", "a", "r", "r", "a"]
//
// 12. Write the code that brings all the letters in the characters array together into a string.
// console.log(characters.join(""))
//
// 13. Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = characters.reverse()
console.log(charsReversed)
//
// 14. Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"))

//
// 15. Write the code that brings all the letters in the charsReversed array together into a string without separators.
//
// 16. Create two arrays consisting of three first names of your cohort members in each.
//
// 17. Write the code that sorts the names in alphabetical order.
//
// 18. Write the code that sorts the names in reverse alphabetical order.
//
// 19. Write the code that sorts all the names in alphabetical order in a single array.
//
// Consider the variables:
//
var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []
//
// 20. Write the code that logs the values from the numbers array that are at odd indexes.
//
// 21. Write the code that adds the values from odd indexes into the oddIndexes array.
