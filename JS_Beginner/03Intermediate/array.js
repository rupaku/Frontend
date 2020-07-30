var countries = ["India", "USA", "CANADA"]

var states = new Array("Rajasthan", "Delhi", "Mumbai")

console.log(states[1])
console.log(states.length)

states[0] = "Punjab"

console.log(states)

// Delhi
// 3
// [ 'Punjab', 'Delhi', 'Mumbai' ]

var user = ["Rupa", "kumari", 3, 34, true]
user.pop() //remove all elements
console.log(user) //["Rupa", "kumari", 3, 34]

user.unshift("New value") //adding value in start
console.log(user) //[ 'New value', 'Rupa', 'kumari', 3, 34 ]

user.shift() //remove element from start

console.log(user.indexOf(3)) //2

console.log(Array.from("Rupa")) //[ 'R', 'u', 'p', 'a' ]
