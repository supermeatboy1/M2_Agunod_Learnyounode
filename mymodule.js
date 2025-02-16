const fs = require("fs");

module.exports = function (dirPath, fileExt, callback) {
	fs.readdir(dirPath, (err, files) => {
		if (err) {
			return callback(err);
		}
		let filtered = files.filter(filename => filename.endsWith("." + process.argv[3]));
		callback(null, filtered);
	}
);
}
