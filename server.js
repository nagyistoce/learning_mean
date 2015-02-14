var connect = require('connect');
var app = connect();

var helloWorld =function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
}

var goodbyeWorld = function(req, res, next) {
	res.setHeader('Content-Type','text/plain');
	res.end('Goodbye World');
}

var logger = function(req, res, next) {
	console.log(req.method, req.url);
	next();
}

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

app.listen(3000);