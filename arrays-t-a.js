// // Consider the variable:

// var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.

// var groceryList = ["chips", "dip", "cookies"]
// groceryList.push("soda")
// console.log(groceryList)


// // Write the code that will add "granola" to the end of array without altering the original array.

// var groceryList = ["chips", "dip", "cookies"]
// var granola = "granola"

// console.log(groceryList.concat(granola))

// // Write the code that will return a subset of the array containing only "chips" and "dip".

// var groceryList = ["chips", "dip", "cookies"]
// console.log(groceryList.slice(0,2))

// Write the code that will add "beans" to the "chips" and "dip" array.

// var groceryList = ["chips", "dip", "cookies"]
// var item = "beans"
// console.log(groceryList.slice(0,2))
// console.log(groceryList.slice(0,2).concat(item))


// Consider the variable:

// var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
// var numbers = [2, 4, 6, 8, 10]
// console.log(numbers.unshift(0));
// console.log(numbers);
// Write the code that will add the number 12 to the end of the array.
//
// var numbers = [2, 4, 6, 8, 10]
// numbers.push(12)
// console.log(numbers);

// Write the code that will remove the first number from the array.
// var numbers = [2, 4, 6, 8, 10]
// numbers.shift()
// console.log(numbers);

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
// var numbers = [2, 4, 6, 8, 10]
// var randomNum = [0]
// console.log(randomNum.concat(numbers));

// Consider the variable:

// var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.

// var numSet = [2, 13, 6, 8, 4, 2]
// console.log(numSet.indexOf(2))
//
// // Write the code that finds the index of the last appearance of the number 2.
//
// var numSet = [2, 13, 6, 8, 4, 2]
// console.log(numSet.lastIndexOf(2))
//
// // Write the code that returns the number at the third index.
//
// var numSet = [2, 13, 6, 8, 4, 2]
// console.log(numSet[3])

// Consider the variable:

// var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
// var characters = ["y", "a", "r", "r", "a"]
// console.log(characters.join(""))


// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
// var characters = ["y", "a", "r", "r", "a"]
// var charsReversed = characters.reverse()
// console.log(charsReversed);

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// console.log(charsReversed.join("*"));

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
// console.log(charsReversed.join(""));

// Create two arrays consisting of three first names of your cohort members in each.

// var array1 = ["Thomas", "Amanda", "Sarah"]
// var array2 = ["Jared", "Heather", "Raul"]


// Write the code that sorts the names in alphabetical order.
// console.log(array1.sort());
// console.log(array2.sort());
// Write the code that sorts the names in reverse alphabetical order.
// console.log(array1.sort().reverse());
// console.log(array2.sort().reverse());
// Write the code that sorts all the names in alphabetical order in a single array.

// var arrayCombined = array1.concat(array2)
// console.log(arrayCombined.sort());

// Consider the variables:

// var numbers = [42, 221, 71, 7, 18, 87]
// var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.

// Write the code that adds the values from odd indexes into the oddIndexes array.
