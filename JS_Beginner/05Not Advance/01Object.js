var User = function (firstName, courseCount) {
	this.firstName = firstName;
	this.courseCount = courseCount;
	this.getCourseCount = function () {
		console.log(`Course count is ${this.courseCount}`);
	};
};

User.prototype.getFirstName = function () {
	console.log(`First name ${this.firstName}`);
};

var ob1 = new User('Rupa', 2);
ob1.getCourseCount();
if (Object.hasOwnProperty('firstName')) {
	ob1.getFirstName();
}

var ob2 = new User('Kumari', 1);
ob2.getCourseCount();
ob2.getFirstName();

// $ node 01Object.js
// Course count is 2
// First name Rupa
// Course count is 1
// First name Kumari
