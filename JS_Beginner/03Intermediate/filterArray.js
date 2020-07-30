var testArray = [2, 4, 2, 5, 6, 7, 8, 9]

console.log(testArray.fill("h")) //fill all values with h

// [
//     'h', 'h', 'h',
//     'h', 'h', 'h',
//     'h', 'h'
//   ]

console.log(testArray.fill("h", 2)) // fill all values with h starting with index 2 leave previous index to unchanged
// [
//     2, 4, 'h',
//     'h', 'h', 'h',
//     'h', 'h'
//   ]

console.log(testArray.fill("h", 2, 5)) //start with index 2 and end with n-1 and fill with h

// [
//     2, 4, 'h',
//     'h', 'h', 7,
//     8, 9
//   ]

const myNum = [34, 21, 56, 78, 98]
const result = myNum.filter((num) => num != 21) //all num except 21
console.log(result)

// [ 34, 56, 78, 98 ]
