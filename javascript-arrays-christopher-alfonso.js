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