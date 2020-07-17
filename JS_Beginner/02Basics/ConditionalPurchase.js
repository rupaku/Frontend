var isLoggedIn = false
var isEmailVerified = true
var cardInfo = true

if (isLoggedIn) {
  console.log("Logged in")
  if (isEmailVerified) {
    console.log("Email verified")
    if (cardInfo) {
      console.log("You can make Purchase")
    }
  }
}

//OR

if (isLoggedIn && isEmailVerified && cardInfo) {
  console.log("Allowed")
} else {
  console.log("Not allowed")
}
