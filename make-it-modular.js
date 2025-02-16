const mymodule = require("./mymodule.js");

mymodule(process.argv[2], process.argv[3], (err, data) => {
	for (let i = 0; i < data.length; i++) {
		let file = data[i]
		console.log(file);
	};
	return data;
});
