const fs = require('fs');

fs.readdir(process.argv[2], (err, files) => {
	let filtered = files.filter(filename => filename.endsWith("." + process.argv[3]));
	filtered.forEach(file => console.log(file));
});
