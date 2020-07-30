var name = "Rupa"
console.log("Line 2 ", name)

function sayName() {
  var name = "Kumari"
  console.log("Line 5", name)
  sayNameTwo()
  function sayNameTwo() {
    console.log("Line 8", name)
  }
}

sayName()
