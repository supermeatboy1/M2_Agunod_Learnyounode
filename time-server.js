const net = require('net');
function addZero(d) {
	if (d < 10) {
		return "0" + d;
	}
	return d;
}
const server = net.createServer(function (socket) {
	let date = new Date();
	let datetime = `${date.getFullYear()}-${addZero(date.getMonth())}-${addZero(date.getDate())} ${addZero(date.getHours())}:${addZero(date.getMinutes())}\n`;
	socket.write(datetime);
})
server.listen(process.argv[2])
