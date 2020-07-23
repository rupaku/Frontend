function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`
      break //This is not compulsory
    case "subadmin":
      return `${name} is subadmin with create and delete courses`
      break
    case "testprep":
      return `${name} is testprep with create and delete testprep`
      break
    case "user":
      return `${name} is user is to consume content`
      break
    default:
      return `${name} is trial user`
      break
  }
}

console.log(getUserRole("Rupa", "testprep"))
var getRole = getUserRole("Rupa", "testprep")
console.log(getRole)

// var getUserRole = function(name,role){

// }

// var getUserRole = (name,role)=>{

// }
