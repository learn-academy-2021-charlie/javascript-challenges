//1. Write the code that will add "soda" to the end of the original array.
var groceryList = ["chips", "dip", "cookies"]
groceryList.push("soda")
console.log(groceryList)

//2. Write the code that will add "granola" to the end of array without altering the original array.
var granola = "granola"
console.log(groceryList.concat(granola))

//3. Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(0,2))

//4. Write the code that will add "beans" to the "chips" and "dip" array.
groceryList.pop(groceryList.pop())
groceryList.push("beans")
console.log(groceryList)