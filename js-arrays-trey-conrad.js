
// // Write the code that will add "soda" to the end of the original array.
// var groceryList = ["chips", "dip", "cookies"]
// groceryList.push("soda");
// console.log(groceryList);
// // Write the code that will add "granola" to the end of array without altering the original array.
// var groceryList2 = ["granola"]
// console.log(groceryList.concat(groceryList2));
// // Write the code that will return a subset of the array containing only "chips" and "dip".
// var groceryListSubset = groceryList.slice(0,2);
// console.log(groceryListSubset);
// // Write the code that will add "beans" to the "chips" and "dip" array.

// groceryListSubset.push("beans");
// console.log(groceryListSubset)

// var numbers = [2, 4, 6, 8, 10]
// // Write the code that will add the number 0 to the beginning of the array.
// numbers.unshift(0);
// // Write the code that will add the number 12 to the end of the array.
// numbers.push(12);

// // Write the code that will remove the first number from the array.
// numbers.shift(numbers);
// // Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
// var beforeNumbers = [0]
// console.log(beforeNumbers.concat(numbers));

// var numSet = [2, 13, 6, 8, 4, 2]

// // Write the code that finds the index of the first appearance of the number 2.
// console.log(numSet.indexOf(2));
// // Write the code that finds the index of the last appearance of the number 2.
// console.log(numSet.lastIndexOf(2));
// // Write the code that returns the number at the third index.
// console.log(numSet[2]);

// var characters = ["y", "a", "r", "r", "a"]

// // Write the code that brings all the letters in the characters array together into a string.
// console.log(characters.join(""));
// // Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
// var charsReversed = characters.reverse();
// console.log(charsReversed);
// // Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// console.log(charsReversed.join(" * "));
// // Write the code that brings all the letters in the charsReversed array together into a string without separators.
// console.log(charsReversed.join(""));
// // Create two arrays consisting of three first names of your cohort members in each.
// var names1 = ["Todd", "Milton", "Galadoe"]
// var names2 = ["Jared", "Yanxu", "Kelen"]
// // Write the code that sorts the names in alphabetical order.
// console.log(names1.concat(names2).sort())
// // Write the code that sorts the names in reverse alphabetical order.
// console.log(names1.concat(names2).sort().reverse())
// // Write the code that sorts all the names in alphabetical order in a single array.
// // Already done! :)

var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []

// Write the code that logs the values from the numbers array that are at odd indexes.
// oddIndexes = [numbers[1], numbers[3], numbers[5]]
// console.log(oddIndexes);
oddIndexes = numbers.filter((a,i,arr)=>i%2===1);
console.log(oddIndexes);
// Write the code that adds the values from odd indexes into the oddIndexes array.
// console.log();