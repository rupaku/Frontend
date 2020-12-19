var myMap = new Map();
myMap.set(1, 'ludo1');
myMap.set(2, 'ludo2');
myMap.set(3, 'ludo3');
myMap.set(4, 'ludo4');

console.log(myMap);

for (let key of myMap.keys()) {
	console.log(`key ${key}`);
}

for (let value of myMap.values()) {
	console.log(`value ${value}`);
}

for (let [key, value] of myMap.values()) {
	console.log(`key ${key} value ${value}`);
}

myMap.forEach((k, v) => console.log(`key ${key} value ${value}`));

myMap.delete(2);
