var User = {
	name: '',
	getUserName: function () {
		console.log(`username ${this.name}`);
	},
};

var obj = Object.create(User);

obj.name = 'Rupa';

obj.getUserName();
