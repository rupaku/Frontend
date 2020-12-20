const uno = () => {
	console.log('one');
};

const dos = () => {
	setTimeout(() => {
		console.log('timeout ...');
	}, 3000);
	console.log('two');
};
const tres = () => {
	console.log('three');
};
