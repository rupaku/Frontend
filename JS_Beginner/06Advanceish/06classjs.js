class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
	courseList = [];
	getInfo() {
		return { name: this.name, email: this.email };
	}
	enrollCourse(name) {
		this.courseList.push(name);
	}
	getCourseList() {
		return this.courseList;
	}
	static login() {
		// if we don't want someone to inherit it
		return 'you are logged in';
	}
}

class SubAdmin extends User {
	constructor(name, email) {
		super(name, email); //to access parent class constructor variables
	}
	getAdminInfo() {
		return 'Admin info';
	}
}
module.exports = User;

const rock = new User('rock', 'abc@gmail.com');
console.log(rock.getInfo());

rock.enrollCourse('Java');
rock.enrollCourse('Javascript');

console.log(rock.getCourseList()); //getters to access private variables
console.log(rock.courseList);

const tom = new SubAdmin('tom', 'xyz@gmail.comss');
console.log(tom.getAdminInfo());
console.log(tom.getInfo());

//if both class has same login method,child class function will execute
