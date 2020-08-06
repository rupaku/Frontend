var user = {
  firstName: "rupa",
  lastName: "kumari",
  role: "admin",
  loginCount: 23,
  faceBookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName)
  },
  getCourseCount: function () {
    return ` ${this.firstName} is enrolled in ${this.courseList.length} courses`
  },
}

var courseList = true
console.log(user.firstName)
console.log(user.getCourseCount())
user.buyCourse("raectjs course")
user.buyCourse("JS course")
console.log(user.getCourseCount())
