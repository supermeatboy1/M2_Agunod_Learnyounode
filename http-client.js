const http = require("http");

var req = http.get(process.argv[2], function(response) {
	var h = [];	
response.on('data', function(chunk) {
	h.push(chunk.toString());
	}).on('end', function() {
		h.forEach(line => console.log(line));
	});
});

req.on('error', function(e) {
	console.log(e);
});

