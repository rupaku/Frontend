// function init() {
// 	var firstName = 'Rupa';
// 	function sayFirstName() {
// 		console.log(firstName);
// 	}
// 	return sayFirstName();
// }

// var obj1 = init();

// obj1();

//Example 2

function doAddition(x) {
	return function (y) {
		return x + y;
	};
}

var obj2 = doAddition(4);
console.log(obj2(5));

console.log(doAddition(6)(7)); //curring
