const User = require('./06classjs.js');

const obj1 = new User('Rupa', 'abc@gmail.com');

console.log(obj1.getInfo());

obj1.enrollCourse('Java');
obj1.enrollCourse('Javascript');

console.log(obj1.getCourseList());

const courses = obj1.getCourseList();

courses.forEach((c) => console.log(c));
