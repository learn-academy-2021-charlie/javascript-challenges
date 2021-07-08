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