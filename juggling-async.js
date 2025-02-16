const http = require("http");

function displayData(name, callback) {
	let req = http.get(process.argv[2], function(response) {
		let h = [];	
		response.on('data', function(chunk) {
			h.push(chunk);
		}).on('end', function() {
			let full = Buffer.concat(h);
			console.log(full.toString());
			callback();
		});
	});

	req.on('error', function(e) {
		console.log(e);
	});
}

displayData(process.argv[2], () => {
	displayData(process.argv[3], () => {
		displayData(process.argv[4], () => {
		});
	});
});
