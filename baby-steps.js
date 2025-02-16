let args = process.argv;
args.shift();
args.shift();
let value = 0;
args.forEach(el => {
	value += Number(el);
});
console.log(value);
