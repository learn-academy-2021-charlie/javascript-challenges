
var testArr1 = [3, 9, 15, 4, 10]


// const mult3 = (array) => {
//     let newArray = [] 
//     for(let i=0; i<array.length; i++) {
//         newArray.push(array[i]* 3)
//     }
//     return newArray
// }
// console.log(mult3(testArr1))

var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const onlyOdds = (array) => {
    let testArr = []
    for (let i=0; i<array.length; i++) {
        if (array[i] % 2 ===2 ) {
            testArr.push(array[i])
        }
        return testArr
    }
}
console.log(onlyOdds(testArr2))