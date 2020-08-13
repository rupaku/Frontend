var user = {
  firstName: "Rupa",
  courseCount: 4,
  getCourseCount: function () {
    console.log("LINE 5", this)
    function sayhello() {
      console.log("hello")
      console.log("LINE 10", this)
    }
    sayhello()
  },
}

/* For regular function window object*/
