var returnedValue = Math.max(2, 5, 2, 8, 4);
console.log(returnedValue);

var myobj = {};
Object.assign(myobj, { a: 1, b: 2, c: 3 });
console.log(myobj);

function sumOne(x, y) {
	return x + y;
}
var val = [1, 2];

console.log(sumOne(...val)); //spread

function sumTwo(a, b, ...args) {
	let sm = 0;
	let multi = a * b;
	for (const arg of args) {
		sm += arg;
	}
	return [sm, multi];
}

console.log(sumTwo(1, 2, 3, 4, 5, 6)); //REST
