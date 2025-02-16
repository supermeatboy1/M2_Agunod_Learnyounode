const fs = require('fs')
let filepath = process.argv[2]
let contents = fs.readFileSync(filepath).toString();
let newlines = 0;
for (let i = 0; i < contents.length; i++) {
	if (contents[i] == '\n') {
		newlines += 1;
	}
}
console.log(newlines);
