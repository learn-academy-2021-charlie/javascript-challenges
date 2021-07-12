//Array Challenge Questions

//1
var groceryList = ["chips", "dip", "cookies"]
groceryList.push("soda")
console.log(groceryList);


//2
var groceryList2 = groceryList
groceryList2.push("granola")

console.log(groceryList2);


// 3
groceryList = groceryList.slice(0, 2);
console.log(groceryList);


// 4
groceryList.unshift("beans");
console.log(groceryList);


// 5
var numbers = [2,4,6,8,10]
numbers.unshift(0)
console.log(numbers)


// 6
numbers.push(12)
console.log(numbers)


// 7
numbers.shift(0)
console.log(numbers)

// 8
var numbers2 = [0]
console.log(numbers2.concat(numbers))

// 9
var numSet = [2,13,6,8,4,2]
console.log(numSet.indexOf(2))

// 10
console.log(numSet.lastIndexOf(2))

// 11
console.log(numSet[3])

// 12
var characters = ["y", "a", "r", "r", "a"]
console.log(characters.join(""))

// 13
var charsReversed = characters.reverse()
console.log(charsReversed);

// 14
console.log(charsReversed.join("*"));

// 15
console.log(charsReversed.join(""));

var firstname = ["brian", "todde", "milton"]
var firstname1 = ["thomas", "heather", "yan"]

// 16
console.log(firstname.concat(firstname1).sort())

// 17
console.log(firstname.concat(firstname1).sort().reverse());

// 18
console.log(firstname.concat(firstname1).sort())
