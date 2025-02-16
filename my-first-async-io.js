const fs = require('fs');
var newlines = 0;
function read(err, data) {
	newlines += data.split('\n').length -1 ;
	console.log(newlines);
}
fs.readFile(process.argv[2], 'utf8', read);


