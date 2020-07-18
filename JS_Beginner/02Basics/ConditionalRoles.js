var user = "testprep"

switch (user) {
  case "admin":
    console.log("You get full access")
    break
  case "subadmin":
    console.log("You get create/delete courses")
    break
  case "testprep":
    console.log("You get create/delete test ")
    break
  case "user":
    console.log("You get access to consume content")
    break
  default:
    console.log("trial user")
    break
}
