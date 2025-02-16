const http = require("http");

var req = http.get(process.argv[2], function(response) {
	var h = [];	
	response.on('data', function(chunk) {
		h.push(chunk);
	}).on('end', function() {
		let full = Buffer.concat(h);
		console.log(full.length);
		console.log(full.toString());
	});
});

req.on('error', function(e) {
	console.log(e);
});

