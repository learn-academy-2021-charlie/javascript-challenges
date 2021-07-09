var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)
// Write the code that will add "granola" to the end of array without altering the original array.
const granola = ["granola"]
console.log(groceryList.concat(granola))
console.log(groceryList)
// Write the code that will return a subset of the array containing only "chips" and "dip".
const partyGroceryList = groceryList.slice(0,2)
console.log(partyGroceryList)
// Write the code that will add "beans" to the "chips" and "dip" array.
partyGroceryList.push("beans")
console.log(partyGroceryList)

var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0)
console.log(numbers)
// Write the code that will add the number 12 to the end of the array.
numbers.push(12)
console.log(numbers)
// Write the code that will remove the first number from the array.
numbers.shift()
console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
const newNumber = [0]
console.log(newNumber.concat(numbers))

var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))
// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))
// Write the code that returns the number at the third index.
console.log(numSet[3])

var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
var joinedCharacters = characters.join("-")
console.log(joinedCharacters)
// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = characters.reverse()
console.log(charsReversed)
// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
var charsReversed2 = charsReversed.join("*")
console.log(charsReversed2)
// Write the code that brings all the letters in the charsReversed array together into a string without separators.
var charsReversed3 = charsReversed.join("")
console.log(charsReversed3)
// Create two arrays consisting of three first names of your cohort members in each.
var listOfNames1 = ["Christopher", "Alfonso", "Conrad"]
var listOfNames2 = ["Brian", "Chauncy", "Heather"]
// Write the code that sorts the names in alphabetical order.
listOfNames1.sort()
console.log(listOfNames1)
console.log(listOfNames2.sort())
// Write the code that sorts the names in reverse alphabetical order.
listOfNames1.reverse()
console.log(listOfNames1)
listOfNames2.reverse()
console.log(listOfNames2)
// Write the code that sorts all the names in alphabetical order in a single array.

var fullListOfNames = listOfNames1.concat(listOfNames2)
console.log(fullListOfNames.sort())