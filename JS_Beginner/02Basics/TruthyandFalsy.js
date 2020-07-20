// TODO:falsy
// undefined,0,null,''

var user = ""
if (user) {
  console.log("Truthy")
}

var user = "2"
if (2 == user) {
  console.log("Truthy") //return true
}

if (2 === user) {
  console.log("Truthy") //return false
} else {
  console.log("False")
}
