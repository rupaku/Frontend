var obj1 = {
	name: 'rupa',
	age: 25,
	courseCount: 5,
	role: developer,
	getInfo: function () {
		console.log(`name ${this.name}age ${this.age} role ${this.role}`);
	},
};

const dj = {
	name: 'rup',
	age: 24,
	courseCount: 4,
	role: S.developer,
};

obj1.getInfo();
dj.getInfo();

var djInfo = obj1.getInfo(dj);

djInfo();

obj1.getInfo.call(dj);
